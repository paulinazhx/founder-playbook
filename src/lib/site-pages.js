/**
 * The two pages that are not guides.
 *
 * Their title and description live here rather than inline in the `.astro`
 * files so that the social-card generator and the README index can read the
 * same strings the pages render. Plain ESM for the same reason as
 * `src/lib/og.js`: Node scripts import it directly.
 *
 * Paths are site-relative and carry no base prefix; `withBase()` adds it at
 * render time.
 */

/** @typedef {{ path: string, title: string, description: string, eyebrow: string }} SitePage */

/** @type {SitePage} */
export const HOME_PAGE = {
  path: '/',
  title: 'The Founder Playbook',
  description:
    'A practical reference for founders: the tool stack worth paying for, founder-led sales, pricing with no comparables, a first round, and the first five hires.',
  eyebrow: 'The playbook',
};

/** @type {SitePage} */
export const ABOUT_PAGE = {
  path: '/about/',
  title: 'About The Founder Playbook',
  description:
    'Who writes The Founder Playbook, the editorial standard every guide is held to, what the build refuses to ship, how it is licensed, and how to report an error.',
  eyebrow: 'About',
};

/** @type {SitePage[]} */
export const SITE_PAGES = [HOME_PAGE, ABOUT_PAGE];
