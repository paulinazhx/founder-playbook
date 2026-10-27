import { describe, it, expect } from 'vitest';
import { BASE, SITE_ORIGIN, SITE_URL, withBase } from '../src/lib/site-urls.js';
import { canonical, personNode, LINKEDIN_URL, GITHUB_PROFILE_URL } from '../src/lib/seo';

describe('base path', () => {
  it('serves from a project page under the account origin', () => {
    expect(SITE_ORIGIN).toBe('https://paulinazhx.github.io');
    expect(BASE).toBe('/founder-playbook');
    expect(SITE_URL).toBe('https://paulinazhx.github.io/founder-playbook');
  });

  it('prefixes a site-relative path', () => {
    expect(withBase('/build/')).toBe('/founder-playbook/build/');
    expect(withBase('/sell/pricing/')).toBe('/founder-playbook/sell/pricing/');
  });

  it('prefixes the root', () => {
    expect(withBase('/')).toBe('/founder-playbook/');
  });

  it('is idempotent, so a path already carrying the base is left alone', () => {
    expect(withBase(withBase('/build/'))).toBe('/founder-playbook/build/');
    expect(withBase('/founder-playbook/')).toBe('/founder-playbook/');
  });

  it('leaves an absolute url alone', () => {
    expect(withBase('https://agenticfabriq.com')).toBe('https://agenticfabriq.com');
    expect(withBase('mailto:a@b.co')).toBe('mailto:a@b.co');
  });

  it('keeps an asset path under the base', () => {
    expect(withBase('/og/home.png')).toBe('/founder-playbook/og/home.png');
    expect(withBase('/rss.xml')).toBe('/founder-playbook/rss.xml');
  });
});

describe('canonical under a base path', () => {
  it('carries origin, base, path and a trailing slash', () => {
    expect(canonical('/sell/pricing/')).toBe(
      'https://paulinazhx.github.io/founder-playbook/sell/pricing/'
    );
  });

  it('returns the site root for the root', () => {
    expect(canonical('/')).toBe('https://paulinazhx.github.io/founder-playbook/');
  });

  it('never doubles slashes', () => {
    expect(canonical('//sell//pricing//')).toBe(
      'https://paulinazhx.github.io/founder-playbook/sell/pricing/'
    );
  });
});

describe('personNode', () => {
  const node = personNode() as Record<string, any>;

  it('is embeddable, carrying no @context of its own', () => {
    expect(node['@context']).toBeUndefined();
  });

  it('declares the author under a stable @id on this site', () => {
    expect(node['@type']).toBe('Person');
    expect(node['@id']).toBe(`${SITE_URL}/#person`);
    expect(node.name).toBe('Paulina Xu');
  });

  it('points sameAs at the profiles that are known to resolve', () => {
    expect(node.sameAs).toContain(GITHUB_PROFILE_URL);
    expect(node.sameAs.every((url: string) => typeof url === 'string' && url.length > 0)).toBe(true);
  });

  it('omits an unsupplied LinkedIn url rather than emitting an empty one', () => {
    if (LINKEDIN_URL === null) {
      expect(JSON.stringify(node)).not.toContain('linkedin');
    } else {
      expect(node.sameAs).toContain(LINKEDIN_URL);
    }
  });

  it('places the author at the publishing organisation', () => {
    expect(node.worksFor['@type']).toBe('Organization');
  });
});
