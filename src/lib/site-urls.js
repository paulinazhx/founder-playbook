/**
 * Where the site lives, in a module plain Node can import.
 *
 * `src/lib/seo.ts` re-exports these so nothing else has to know they moved.
 * They live on their own because the README generator and the social-card
 * scripts run outside the Astro build and need the same strings the pages emit
 * — a second copy of an origin is how a canonical and a shared link end up
 * disagreeing.
 *
 * This site is a GitHub *project* page, so it is served from a subdirectory of
 * the account origin rather than from a domain root. That splits the two ideas
 * the AF engine conflated:
 *
 *   SITE_ORIGIN  the scheme and host, which is what `astro.config.mjs` calls `site`
 *   BASE         the path prefix, which is what `astro.config.mjs` calls `base`
 *   SITE_URL     the two joined, which is what every canonical URL is built from
 *
 * `withBase()` is the only function allowed to prepend `BASE` to a path. Every
 * in-page href and asset reference goes through it; nothing else hard-codes the
 * prefix, so moving the site to a root domain later is a one-line change here.
 */

/** @type {string} Scheme and host. No trailing slash. */
export const SITE_ORIGIN = 'https://paulinazhx.github.io';

/** @type {string} Repository path prefix. Leading slash, no trailing slash. */
export const BASE = '/founder-playbook';

/** @type {string} The site's own root, origin and base joined. No trailing slash. */
export const SITE_URL = `${SITE_ORIGIN}${BASE}`;

/**
 * Prefix a site-relative path with the base.
 *
 * Idempotent by design: a path that already carries the base is returned
 * untouched, because a double prefix (`/founder-playbook/founder-playbook/`)
 * is a 404 that every page would carry at once and that no single call site
 * would look wrong on its own. Absolute URLs and non-path schemes pass
 * straight through, so a template can route every href through this without
 * first asking whether the target is local.
 *
 * @param {string} path
 * @returns {string}
 */
export function withBase(path) {
  if (!path.startsWith('/')) return path;
  if (path === BASE || path.startsWith(`${BASE}/`)) return path;
  return `${BASE}${path}`;
}
