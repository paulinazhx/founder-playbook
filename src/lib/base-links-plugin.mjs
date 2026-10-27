/**
 * Rewrites root-relative links in guide Markdown to carry the site's base path.
 *
 * Registered as a `hastPlugins` entry on Astro 7's default Markdown processor
 * (Satteri) rather than as `markdown.rehypePlugins`: the legacy unified
 * pipeline is no longer installed by default, and the hast tree this receives
 * is the same shape a rehype plugin would get.
 *
 * Without this, every cross-link inside a guide would have to be written
 * `/founder-playbook/sell/pricing/` — the base hard-coded into ninety-odd
 * places that no test reads and that all break together if the repository is
 * ever renamed. Guides write `/sell/pricing/` and this applies the prefix at
 * build time, which is the same contract `withBase()` gives the templates.
 *
 * Only `href` and `src` beginning with a single `/` are touched. Absolute URLs,
 * protocol-relative URLs, fragments and anything already carrying the base are
 * left exactly as written.
 */
import { withBase } from './site-urls.js';

const ATTRIBUTES = ['href', 'src'];

export function baseLinks() {
  return (tree) => {
    visit(tree);
  };
}

function visit(node) {
  if (node.type === 'element' && node.properties) {
    for (const attribute of ATTRIBUTES) {
      const value = node.properties[attribute];
      if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
        node.properties[attribute] = withBase(value);
      }
    }
  }
  for (const child of node.children ?? []) visit(child);
}
