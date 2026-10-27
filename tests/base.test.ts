import { describe, it, expect } from 'vitest';
import { BASE, SITE_ORIGIN, SITE_URL, withBase } from '../src/lib/site-urls.js';
import { canonical, personNode, LINKEDIN_URL, GITHUB_PROFILE_URL } from '../src/lib/seo';
import { baseLinks } from '../src/lib/base-links-plugin.mjs';

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

describe('baseLinks markdown plugin', () => {
  const run = (properties: Record<string, unknown>) => {
    const tree = { type: 'root', children: [{ type: 'element', tagName: 'a', properties, children: [] }] };
    baseLinks()(tree as never);
    return (tree.children[0] as { properties: Record<string, unknown> }).properties;
  };

  it('prefixes a root-relative guide link', () => {
    expect(run({ href: '/sell/pricing/' }).href).toBe('/founder-playbook/sell/pricing/');
  });

  it('leaves an external link alone', () => {
    expect(run({ href: 'https://metr.org/' }).href).toBe('https://metr.org/');
  });

  it('leaves a fragment and a protocol-relative url alone', () => {
    expect(run({ href: '#sources' }).href).toBe('#sources');
    expect(run({ href: '//example.com/x' }).href).toBe('//example.com/x');
  });

  it('does not double-prefix a link that already carries the base', () => {
    expect(run({ href: '/founder-playbook/sell/' }).href).toBe('/founder-playbook/sell/');
  });

  it('prefixes an image src too', () => {
    expect(run({ src: '/og/home.png' }).src).toBe('/founder-playbook/og/home.png');
  });
});
