import { BASE, SITE_ORIGIN, SITE_URL, withBase } from './site-urls.js';

/** Re-exported so the origin has one definition the Node scripts can read too. */
export { BASE, SITE_ORIGIN, SITE_URL, withBase };
export const PARENT_URL = 'https://agenticfabriq.com';
export const SITE_NAME = 'The Founder Playbook';

/** The author's own GitHub account, which is also where this repository lives. */
export const GITHUB_PROFILE_URL = 'https://github.com/paulinazhx';
/** The organisation behind the companion technical library. */
export const GITHUB_ORG_URL = 'https://github.com/agenticfabriq';
/** The repository this site is built from. */
export const REPO_URL = 'https://github.com/paulinazhx/founder-playbook';
export const ISSUES_URL = `${REPO_URL}/issues`;
/** The companion technical library, cross-linked from the Build pillar. */
export const AF_PLAYBOOK_URL = 'https://agenticfabriq.github.io';

/**
 * The author's LinkedIn profile.
 *
 * Typed as nullable on purpose: `personNode()` omits it from `sameAs` rather
 * than emitting an empty string if it is ever unset again. A `sameAs` pointing
 * at the wrong profile would work against the reason this site names its
 * author at all, so it is only ever set to a URL the author supplied.
 */
export const LINKEDIN_URL: string | null = 'https://www.linkedin.com/in/paulina-xu-5bba0821b/';
/**
 * The publisher's own logo, served from the publisher's own site. The www host
 * is used deliberately: the apex redirects, and a structured-data consumer that
 * does not follow redirects should still resolve the image.
 */
export const ORG_LOGO_URL = 'https://www.agenticfabriq.com/fabriq-logo.png';
export const CONTENT_LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/';

/**
 * Stable node identifiers. Every page that mentions the organisation or the
 * site emits the same `@id`, so a consumer merging the site's JSON-LD sees one
 * organisation and one website rather than one near-duplicate per page.
 */
export const ORG_ID = `${PARENT_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
/** The author, as one node the whole site agrees on. */
export const PERSON_ID = `${SITE_URL}/#person`;

export function canonical(path: string): string {
  const cleaned = `/${path.split('/').filter(Boolean).join('/')}`;
  return cleaned === '/' ? `${SITE_URL}/` : `${SITE_URL}${cleaned}/`;
}

/**
 * The organisation as an embeddable node, with no `@context` of its own.
 * Embedded in full rather than referenced by `@id` alone, because a consumer
 * that reads one page in isolation — which is what a rich-result validator
 * does — still needs the publisher's name and logo on that page.
 */
export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Agentic Fabriq',
    url: PARENT_URL,
    description: 'Secure hub for agent identity, governance, and visibility.',
    logo: {
      '@type': 'ImageObject',
      url: ORG_LOGO_URL,
      width: 1024,
      height: 1024,
    },
    sameAs: [PARENT_URL, GITHUB_ORG_URL],
  };
}

export function organizationJsonLd() {
  return { '@context': 'https://schema.org', ...organizationNode() };
}

/**
 * The author as an embeddable node.
 *
 * This site exists partly to rank its author's name, so unlike the AF library
 * — which is authored by an organisation — every page here names a `Person` and
 * every page names the same one, under one `@id`. `sameAs` carries only
 * profiles known to resolve.
 */
export function personNode() {
  const sameAs = [GITHUB_PROFILE_URL];
  if (LINKEDIN_URL) sameAs.push(LINKEDIN_URL);
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Paulina Xu',
    url: `${SITE_URL}/`,
    jobTitle: 'Founder',
    description:
      'Founder of Agentic Fabriq, writing a practical reference for people doing the job for the first time.',
    sameAs,
    worksFor: organizationNode(),
  };
}

export function personJsonLd() {
  return { '@context': 'https://schema.org', ...personNode() };
}

/** The site as an embeddable node, for `isPartOf` on individual pages. */
export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'en',
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    ...websiteNode(),
    description:
      'A practical reference for founders: the tool stack worth paying for, founder-led sales, pricing, fundraising, first hires, and the parts of the CEO job nobody hands over.',
    license: CONTENT_LICENSE_URL,
    author: personNode(),
    publisher: personNode(),
  };
}

export interface ArticleInput {
  title: string;
  description: string;
  url: string;
  updated: string;
  keywords: string[];
}

export function articleJsonLd(input: ArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${input.url}#article`,
    headline: input.title,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    dateModified: input.updated,
    keywords: input.keywords.join(', '),
    inLanguage: 'en',
    license: CONTENT_LICENSE_URL,
    isPartOf: websiteNode(),
    author: personNode(),
    publisher: personNode(),
  };
}

export interface AboutPageInput {
  title: string;
  description: string;
  url: string;
  updated: string;
}

export function aboutPageJsonLd(input: AboutPageInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${input.url}#about`,
    name: input.title,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    dateModified: input.updated,
    inLanguage: 'en',
    license: CONTENT_LICENSE_URL,
    isPartOf: websiteNode(),
    about: { '@id': PERSON_ID },
    publisher: personNode(),
  };
}

export function breadcrumbJsonLd(trail: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export interface HowToInput {
  title: string;
  description: string;
  url: string;
  steps: Array<{ name: string; text: string }>;
}

export function howToJsonLd(input: HowToInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: input.title,
    description: input.description,
    mainEntityOfPage: input.url,
    step: input.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function faqJsonLd(entries: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer,
      },
    })),
  };
}
