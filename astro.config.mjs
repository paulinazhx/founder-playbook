import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` is the account origin and `base` is the repository path, because this
// deploys as a GitHub project page at paulinazhx.github.io/founder-playbook/.
// Every in-page link goes through `withBase()` in src/lib/site-urls.js; nothing
// else may hard-code the base.
export default defineConfig({
  site: 'https://paulinazhx.github.io',
  base: '/founder-playbook',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      serialize(item) {
        item.changefreq = 'monthly';
        // Depth is counted past the base segment, so a pillar cornerstone
        // (/founder-playbook/sell/) still reads as a top-level page.
        item.priority = item.url.split('/').filter(Boolean).length <= 4 ? 0.9 : 0.7;
        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: false },
    // No Markdown plugins. Astro 7's default processor (Satteri) accepts
    // `mdastPlugins` and `hastPlugins` in its options and this release does not
    // invoke either, which was verified directly against `createRenderer`. A
    // link-rewriting plugin therefore silently did nothing and every in-body
    // cross-link shipped without the base prefix, 404ing in production while
    // the internal link check passed.
    //
    // So guides write internal links WITH the base — `/founder-playbook/sell/`
    // — and `scripts/check-links.mjs` now rejects an internal link that lacks
    // the prefix rather than tolerating both forms. The prefix is hard-coded in
    // content, which is the cost of not having a transform; the check is what
    // makes that safe.
  },
});
