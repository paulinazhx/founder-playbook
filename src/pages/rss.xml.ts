import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_NAME, SITE_URL, withBase } from '../lib/seo';

export async function GET() {
  const guides = await getCollection('guides');
  return rss({
    title: SITE_NAME,
    description:
      'Practical guides for founders: the tool stack, founder-led sales, pricing, fundraising, investor updates, and the first hires.',
    // `site` is the base-joined root, so @astrojs/rss resolves each item link
    // against the subdirectory this site actually lives in.
    site: `${SITE_URL}/`,
    items: guides.map((guide) => ({
      title: guide.data.title,
      description: guide.data.description,
      link: withBase(`/${guide.id.replace(/\/index$/, '')}/`),
      pubDate: new Date(guide.data.updated),
    })),
  });
}
