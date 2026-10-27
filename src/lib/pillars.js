/**
 * The three pillars, in the order the site presents them.
 *
 * Plain ESM rather than TypeScript because Node scripts outside the Astro build
 * import this list directly (see `scripts/lib/pages.mjs`), and CI runs Node 22.
 *
 * The split is by what the founder is trying to do, which is how they search.
 * Not by company stage: a stage split puts the same question in three places
 * and leaves the reader guessing which stage they are in.
 */

/** @typedef {'build' | 'sell' | 'run'} PillarSlug */

/**
 * @typedef {object} Pillar
 * @property {PillarSlug} slug
 * @property {string} title
 * @property {string} blurb
 * @property {number} order
 */

/** @type {Pillar[]} */
export const PILLARS = [
  {
    slug: 'build',
    title: 'Build',
    blurb:
      'What you ship and what you run it on: scoping a first version, the tool stack worth paying for, where AI genuinely replaces work, and shipping without an engineering team.',
    order: 1,
  },
  {
    slug: 'sell',
    title: 'Sell',
    blurb:
      'Getting to revenue while you are still the only salesperson: the first ten customers, outbound that gets replies, discovery calls, demos, and pricing with no comparables.',
    order: 2,
  },
  {
    slug: 'run',
    title: 'Run',
    blurb:
      'The job itself: where your attention goes, raising a first round, the investor update that keeps investors useful, and the first hires that decide what the company becomes.',
    order: 3,
  },
];

/**
 * @param {string} slug
 * @returns {Pillar | undefined}
 */
export function getPillar(slug) {
  return PILLARS.find((p) => p.slug === slug);
}
