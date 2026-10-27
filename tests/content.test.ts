import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import fg from 'fast-glob';
import yaml from 'js-yaml';
import { PILLARS } from '../src/lib/pillars.js';
import { guideFrontmatterSchema } from '../src/lib/guide-schema';

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---/;

type Guide = { id: string; data: any; body: string };

const guides: Guide[] = fg.sync('src/content/guides/**/*.md').sort().map((file) => {
  const source = readFileSync(file, 'utf8');
  const match = FRONTMATTER.exec(source);
  if (!match) throw new Error(`${file} has no frontmatter`);
  return {
    id: file.replace('src/content/guides/', '').replace(/\.md$/, ''),
    data: yaml.load(match[1]),
    body: source.slice(match[0].length),
  };
});

const ids = new Set(guides.map((g) => g.id));

describe('the guide collection', () => {
  it('holds twelve guides', () => {
    expect(guides.length).toBe(12);
  });

  it('passes the frontmatter schema', () => {
    for (const guide of guides) {
      const result = guideFrontmatterSchema.safeParse(guide.data);
      expect(result.success, `${guide.id}: ${JSON.stringify(result.error?.issues)}`).toBe(true);
    }
  });

  it('has exactly one cornerstone per pillar', () => {
    for (const pillar of PILLARS) {
      const found = guides.filter((g) => g.data.pillar === pillar.slug && g.data.cornerstone === true);
      expect(found.map((g) => g.id), pillar.slug).toHaveLength(1);
    }
  });

  it('puts each guide in the pillar its directory names', () => {
    for (const guide of guides) {
      expect(guide.data.pillar, guide.id).toBe(guide.id.split('/')[0]);
    }
  });

  it('resolves every relatedGuides target to a real guide', () => {
    for (const guide of guides) {
      for (const related of guide.data.relatedGuides) {
        expect(ids.has(related), `${guide.id} -> ${related}`).toBe(true);
      }
    }
  });

  it('never points relatedGuides at a cornerstone, which Astro cannot resolve by that id', () => {
    for (const guide of guides) {
      for (const related of guide.data.relatedGuides) {
        expect(related.endsWith('/index'), `${guide.id} -> ${related}`).toBe(false);
      }
    }
  });

  it('never points a guide at itself', () => {
    for (const guide of guides) {
      expect(guide.data.relatedGuides, guide.id).not.toContain(guide.id);
    }
  });

  it('gives every guide a unique title, description and primary keyword', () => {
    const titles = guides.map((g) => g.data.title);
    const descriptions = guides.map((g) => g.data.description);
    const primaries = guides.map((g) => g.data.keywords[0]);
    expect(new Set(titles).size).toBe(guides.length);
    expect(new Set(descriptions).size).toBe(guides.length);
    expect(new Set(primaries).size).toBe(guides.length);
  });
});
