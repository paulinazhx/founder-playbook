/**
 * Checks every external link in the built site, out of band.
 *
 * Deliberately NOT part of `npm run verify`, and deliberately not a deploy
 * gate. Nearly every citation on this site points at a primary source, and
 * primary sources are frequently gated PDFs, hosts that reject an unfamiliar
 * user agent, or servers that rate-limit a datacentre IP. Gating a deploy on
 * those trades a real failure -- shipping is blocked while the content is
 * correct -- for a theoretical one.
 *
 * So this runs on a schedule and on demand. It reports, loudly, and the
 * judgement about what to do stays with a person.
 *
 * A host that answers a browser but refuses this script is recorded in
 * BOT_HOSTILE below with a note, rather than having its citation removed. The
 * citation is correct; the check is what cannot see it.
 */
import { readFileSync } from 'node:fs';
import fg from 'fast-glob';
import * as cheerio from 'cheerio';

/**
 * Hosts known to reject automated requests while serving the same URL fine in
 * a browser. Verified by hand on the date noted. These are reported as skipped
 * rather than counted as failures.
 */
const BOT_HOSTILE = new Map([
  ['carta.com', '403 to automated requests; verified by hand 2026-10-27'],
  ['www.carta.com', '403 to automated requests; verified by hand 2026-10-27'],
  ['hbr.org', 'paywall and bot protection; verified by hand 2026-10-27'],
  ['www.cbinsights.com', 'interstitial on datacentre IPs; verified by hand 2026-10-27'],
  ['www.linkedin.com', 'answers automated requests with HTTP 999; verified by hand 2026-10-27'],
]);

/**
 * One expected failure that is NOT suppressed: while this repository is
 * private, GitHub answers anonymous requests for it and its issue tracker with
 * 404. Those links are correct and resolve the moment the repository is made
 * public. They are left visible rather than skipped, because suppressing them
 * would also hide the case where the repository is later renamed or moved.
 */

/** A real browser UA, because the alternative is measuring bot filters. */
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36';

const TIMEOUT_MS = 20000;

/** @returns {Promise<{ ok: boolean, status: number | string }>} */
async function probe(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': USER_AGENT, accept: '*/*' },
    });
    return { ok: response.ok, status: response.status };
  } catch (error) {
    return { ok: false, status: error.name === 'AbortError' ? 'timeout' : error.code || 'network' };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * HEAD first because it is cheap, then GET, because a surprising number of
 * hosts answer HEAD with 405 while serving GET perfectly.
 */
async function check(url) {
  const head = await probe(url, 'HEAD');
  if (head.ok) return head;
  return probe(url, 'GET');
}

const files = await fg('dist/**/*.html');
/** @type {Map<string, Set<string>>} url -> pages that link to it */
const targets = new Map();

for (const file of files) {
  const $ = cheerio.load(readFileSync(file, 'utf8'));
  $('a[href^="http"]').each((_, element) => {
    const href = $(element).attr('href');
    if (!href) return;
    if (!targets.has(href)) targets.set(href, new Set());
    targets.get(href).add(file);
  });
}

const failures = [];
const skipped = [];
let checked = 0;

for (const [url, pages] of [...targets].sort()) {
  const host = new URL(url).hostname;
  if (BOT_HOSTILE.has(host)) {
    skipped.push(`${url} — ${BOT_HOSTILE.get(host)}`);
    continue;
  }
  const result = await check(url);
  checked += 1;
  if (!result.ok) {
    failures.push(`${url} — ${result.status}\n    linked from: ${[...pages].join(', ')}`);
  }
}

if (skipped.length) {
  console.log(`skipped ${skipped.length} url(s) on hosts known to refuse automated requests:`);
  for (const line of skipped) console.log(`  ${line}`);
  console.log('');
}

if (failures.length) {
  console.error(`${failures.length} of ${checked} external link(s) did not resolve:`);
  for (const line of failures) console.error(`  ${line}`);
  console.error(
    '\nA failure here is a prompt to check by hand, not proof the citation is wrong.\n' +
      'If the host serves the URL in a browser, add it to BOT_HOSTILE with the date you checked.'
  );
  process.exit(1);
}

console.log(`external link check passed: ${checked} url(s) resolved, ${skipped.length} skipped`);
