/**
 * Internal link check against the built site.
 *
 * Deliberately internal-only: it skips `http(s):`, `mailto:` and `#` targets.
 * External links, including every primary-source citation, are checked by
 * `scripts/check-links-external.mjs`, which is not part of `npm run verify` —
 * gating a deploy on third-party servers trades a real failure for a
 * theoretical one.
 *
 * Base awareness matters here. Astro writes `dist/` without the base prefix
 * (`dist/sell/index.html`) but emits hrefs that carry it
 * (`/founder-playbook/sell/`). Comparing the two directly would report every
 * route as both broken and orphaned, so hrefs are stripped back to
 * site-relative before they are matched against the route set.
 */
import { readFileSync } from 'node:fs';
import fg from 'fast-glob';
import * as cheerio from 'cheerio';
import { BASE } from '../src/lib/site-urls.js';

const MIN_INTERNAL_LINKS = 3;

/** `/founder-playbook/sell/` -> `/sell/`; `/founder-playbook/` -> `/`. */
function stripBase(pathname) {
  if (pathname === BASE) return '/';
  if (pathname.startsWith(`${BASE}/`)) return pathname.slice(BASE.length);
  return pathname;
}

const files = await fg('dist/**/index.html');
const routes = new Set(files.map((file) => '/' + file.replace(/^dist\//, '').replace(/index\.html$/, '')));
const failures = [];
const linkedTo = new Set(['/']);

for (const file of files) {
  const route = '/' + file.replace(/^dist\//, '').replace(/index\.html$/, '');
  const $ = cheerio.load(readFileSync(file, 'utf8'));
  const internal = [];

  $('a[href]').each((_, element) => {
    const href = $(element).attr('href');
    if (!href || /^(https?:|mailto:|#)/.test(href)) return;
    const { pathname } = new URL(href, 'https://placeholder.invalid');
    if (/\.[^/.]+$/.test(pathname)) return; // asset (e.g. /llms.txt, /rss.xml), not a route
    const relative = stripBase(pathname);
    const target = relative.endsWith('/') ? relative : `${relative}/`;
    internal.push(target);
    linkedTo.add(target);
    if (!routes.has(target)) failures.push(`${route} -> broken internal link ${href}`);
  });

  const distinct = new Set(internal.filter((target) => target !== route && target !== '/'));
  if (distinct.size < MIN_INTERNAL_LINKS) {
    failures.push(`${route} has ${distinct.size} distinct internal links, needs ${MIN_INTERNAL_LINKS}`);
  }
}

for (const route of routes) {
  if (!linkedTo.has(route)) failures.push(`${route} is orphaned, nothing links to it`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`link check passed: ${routes.size} routes`);
