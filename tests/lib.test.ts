import { describe, it, expect } from 'vitest';
import {
  SITE_URL,
  PARENT_URL,
  GITHUB_ORG_URL,
  REPO_URL,
  ISSUES_URL,
  ORG_LOGO_URL,
  ORG_ID,
  WEBSITE_ID,
  canonical,
  articleJsonLd,
  aboutPageJsonLd,
  breadcrumbJsonLd,
  organizationJsonLd,
  organizationNode,
  personNode,
  PERSON_ID,
  GITHUB_PROFILE_URL,
  websiteJsonLd,
  websiteNode,
  howToJsonLd,
  faqJsonLd,
} from '../src/lib/seo';

describe('canonical', () => {
  it('builds an absolute url with a trailing slash', () => {
    expect(canonical('/sell/pricing/')).toBe(`${SITE_URL}/sell/pricing/`);
  });

  it('adds a missing trailing slash', () => {
    expect(canonical('/sell/pricing')).toBe(`${SITE_URL}/sell/pricing/`);
  });

  it('returns the bare site url for the root', () => {
    expect(canonical('/')).toBe(`${SITE_URL}/`);
  });

  it('never doubles slashes', () => {
    expect(canonical('//sell//pricing//')).toBe(`${SITE_URL}/sell/pricing/`);
  });
});

describe('articleJsonLd', () => {
  const ld = articleJsonLd({
    title: 'Pricing a First Product With No Comparables',
    description: 'desc',
    url: `${SITE_URL}/sell/pricing/`,
    updated: '2026-08-14',
    keywords: ['a', 'b'],
  }) as Record<string, unknown>;

  it('declares the Article type', () => {
    expect(ld['@type']).toBe('Article');
  });

  it('carries the schema.org context', () => {
    expect(ld['@context']).toBe('https://schema.org');
  });

  it('uses the url as mainEntityOfPage', () => {
    expect(ld.mainEntityOfPage).toBe(`${SITE_URL}/sell/pricing/`);
  });

  it('serialises keywords as a comma separated string', () => {
    expect(ld.keywords).toBe('a, b');
  });

  it('sets dateModified to the updated date', () => {
    expect(ld.dateModified).toBe('2026-08-14');
  });
});

describe('breadcrumbJsonLd', () => {
  const ld = breadcrumbJsonLd([
    { name: 'The Founder Playbook', url: `${SITE_URL}/` },
    { name: 'Sell', url: `${SITE_URL}/sell/` },
  ]) as Record<string, any>;

  it('declares the BreadcrumbList type', () => {
    expect(ld['@type']).toBe('BreadcrumbList');
  });

  it('numbers positions from one', () => {
    expect(ld.itemListElement[0].position).toBe(1);
    expect(ld.itemListElement[1].position).toBe(2);
  });
});

describe('organizationJsonLd', () => {
  it('points at the agenticfabriq domain', () => {
    const ld = organizationJsonLd() as Record<string, unknown>;
    expect(ld.url).toBe('https://agenticfabriq.com');
  });
});

describe('howToJsonLd', () => {
  const ld = howToJsonLd({
    title: 'Pricing a First Product With No Comparables',
    description: 'desc',
    url: `${SITE_URL}/sell/pricing/`,
    steps: [
      { name: 'Price against the alternative', text: 'Name what the buyer does today and what that costs them.' },
      { name: 'Quote one number', text: 'Give a single price and let the silence do the negotiating.' },
    ],
  }) as Record<string, any>;

  it('declares the HowTo type', () => {
    expect(ld['@type']).toBe('HowTo');
  });

  it('carries the schema.org context', () => {
    expect(ld['@context']).toBe('https://schema.org');
  });

  it('numbers step positions from one', () => {
    expect(ld.step[0].position).toBe(1);
    expect(ld.step[1].position).toBe(2);
  });
});

describe('faqJsonLd', () => {
  const ld = faqJsonLd([
    { question: 'Should the founder keep selling after the first ten customers?', answer: 'Until the motion is repeatable without you improvising, which is a pattern you can describe, not a revenue number.' },
    { question: 'How long should a first sales call be?', answer: 'Thirty minutes, most of it the buyer talking about a problem they already have.' },
  ]) as Record<string, any>;

  it('declares the FAQPage type', () => {
    expect(ld['@type']).toBe('FAQPage');
  });

  it('carries the schema.org context', () => {
    expect(ld['@context']).toBe('https://schema.org');
  });

  it('builds a Question mainEntity with an Answer', () => {
    expect(ld.mainEntity[0]['@type']).toBe('Question');
    expect(ld.mainEntity[0].name).toBe('Should the founder keep selling after the first ten customers?');
    expect(ld.mainEntity[0].acceptedAnswer['@type']).toBe('Answer');
    expect(ld.mainEntity[0].acceptedAnswer.text).toBe(
      'Until the motion is repeatable without you improvising, which is a pattern you can describe, not a revenue number.'
    );
  });

  it('carries every entry through to mainEntity', () => {
    expect(ld.mainEntity.length).toBe(2);
  });
});

describe('organizationNode', () => {
  const node = organizationNode() as Record<string, any>;

  it('is embeddable, carrying no @context of its own', () => {
    expect(node['@context']).toBeUndefined();
  });

  it('declares the Organization type under a stable @id', () => {
    expect(node['@type']).toBe('Organization');
    expect(node['@id']).toBe(ORG_ID);
    expect(ORG_ID.startsWith(PARENT_URL)).toBe(true);
  });

  it('carries a logo hosted on the publisher’s own domain', () => {
    expect(node.logo['@type']).toBe('ImageObject');
    expect(node.logo.url).toBe(ORG_LOGO_URL);
    expect(new URL(ORG_LOGO_URL).hostname.endsWith('agenticfabriq.com')).toBe(true);
    expect(node.logo.width).toBeGreaterThan(0);
    expect(node.logo.height).toBeGreaterThan(0);
  });

  it('points sameAs at the product site and the github organisation', () => {
    expect(node.sameAs).toContain(PARENT_URL);
    expect(node.sameAs).toContain(GITHUB_ORG_URL);
  });

  it('carries a non-empty description', () => {
    expect(typeof node.description).toBe('string');
    expect(node.description.length).toBeGreaterThan(0);
  });
});

describe('organizationJsonLd as a top-level block', () => {
  it('is the embeddable node plus a schema.org context', () => {
    const ld = organizationJsonLd() as Record<string, any>;
    expect(ld['@context']).toBe('https://schema.org');
    const { '@context': _context, ...rest } = ld;
    expect(rest).toEqual(organizationNode());
  });
});

describe('websiteJsonLd', () => {
  const ld = websiteJsonLd() as Record<string, any>;

  it('declares the WebSite type under a stable @id', () => {
    expect(ld['@context']).toBe('https://schema.org');
    expect(ld['@type']).toBe('WebSite');
    expect(ld['@id']).toBe(WEBSITE_ID);
  });

  it('points at the site root', () => {
    expect(ld.url).toBe(`${SITE_URL}/`);
  });

  it('names the author as its publisher', () => {
    expect(ld.publisher).toEqual(personNode());
  });
});

describe('websiteNode', () => {
  it('is embeddable and shares the WebSite @id', () => {
    const node = websiteNode() as Record<string, any>;
    expect(node['@context']).toBeUndefined();
    expect(node['@id']).toBe(WEBSITE_ID);
    expect(node['@type']).toBe('WebSite');
  });
});

describe('articleJsonLd identity', () => {
  const ld = articleJsonLd({
    title: 'Pricing a First Product With No Comparables',
    description: 'desc',
    url: `${SITE_URL}/sell/pricing/`,
    updated: '2026-08-14',
    keywords: ['a', 'b'],
  }) as Record<string, any>;

  it('names the article with an @id derived from its url', () => {
    expect(ld['@id']).toBe(`${SITE_URL}/sell/pricing/#article`);
    expect(ld.url).toBe(`${SITE_URL}/sell/pricing/`);
  });

  it('uses one person for both author and publisher', () => {
    expect(ld.author).toEqual(personNode());
    expect(ld.publisher).toEqual(personNode());
    expect(ld.author['@id']).toBe(PERSON_ID);
    expect(ld.publisher['@id']).toBe(PERSON_ID);
  });

  it('embeds the author in full rather than by reference alone', () => {
    expect(ld.publisher.name).toBe('Paulina Xu');
    expect(ld.publisher.worksFor.logo.url).toBe(ORG_LOGO_URL);
  });

  it('places the article inside the site', () => {
    expect(ld.isPartOf['@id']).toBe(WEBSITE_ID);
    expect(ld.isPartOf['@type']).toBe('WebSite');
  });

  it('names a real person as author, not the organisation', () => {
    expect(ld.author['@type']).toBe('Person');
    expect(ld.author.sameAs).toContain(GITHUB_PROFILE_URL);
  });
});

describe('aboutPageJsonLd', () => {
  const ld = aboutPageJsonLd({
    title: 'About The Founder Playbook',
    description: 'desc',
    url: `${SITE_URL}/about/`,
    updated: '2026-08-19',
  }) as Record<string, any>;

  it('declares the AboutPage type with the schema.org context', () => {
    expect(ld['@context']).toBe('https://schema.org');
    expect(ld['@type']).toBe('AboutPage');
    expect(ld['@id']).toBe(`${SITE_URL}/about/#about`);
  });

  it('sets dateModified from the updated date', () => {
    expect(ld.dateModified).toBe('2026-08-19');
  });

  it('is about the author and part of the site', () => {
    expect(ld.about['@id']).toBe(PERSON_ID);
    expect(ld.isPartOf['@id']).toBe(WEBSITE_ID);
  });

  it('names the author as its publisher', () => {
    expect(ld.publisher).toEqual(personNode());
  });
});

describe('repository constants', () => {
  it('derives the issue tracker from the repository url', () => {
    expect(ISSUES_URL).toBe(`${REPO_URL}/issues`);
  });

  it('keeps the repository on the author’s own github account', () => {
    expect(REPO_URL.startsWith(`${GITHUB_PROFILE_URL}/`)).toBe(true);
  });

  it('still points at the companion organisation for cross-links', () => {
    expect(GITHUB_ORG_URL).toBe('https://github.com/agenticfabriq');
  });
});
