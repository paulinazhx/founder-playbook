import { getCollection } from 'astro:content';
import { PILLARS } from '../lib/pillars';
import { canonical, SITE_NAME } from '../lib/seo';
import { ABOUT_PAGE, HOME_PAGE } from '../lib/site-pages.js';

export async function GET() {
  const guides = await getCollection('guides');
  const lines: string[] = [
    `# ${SITE_NAME}`,
    '',
    '> A practical reference for founders, written for people doing the job for the first time: what to build and what to run it on, how to get to revenue while you are still the only salesperson, and the parts of the CEO job nobody takes off your hands. Prose is CC BY 4.0.',
    '',
    `- [${HOME_PAGE.title}](${canonical(HOME_PAGE.path)}): ${HOME_PAGE.description}`,
    `- [${ABOUT_PAGE.title}](${canonical(ABOUT_PAGE.path)}): ${ABOUT_PAGE.description}`,
    '',
  ];

  for (const pillar of PILLARS) {
    lines.push(`## ${pillar.title}`, '');
    for (const guide of guides.filter((g) => g.data.pillar === pillar.slug)) {
      const url = canonical(`/${guide.id.replace(/\/index$/, '')}/`);
      lines.push(`- [${guide.data.title}](${url}): ${guide.data.description}`);
    }
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
