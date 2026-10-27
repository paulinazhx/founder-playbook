import { z } from 'astro/zod';

/**
 * Frontmatter every guide is held to, enforced at build time.
 *
 * `relatedGuides` deliberately cannot name a cornerstone. Astro's glob loader
 * strips the trailing `/index` from an entry id, so `build/index.md` loads as
 * the id `build` — a value this regex rejects, and `getEntry('guides',
 * 'build/index')` silently returns nothing. Rather than special-case the
 * resolution, cornerstones are linked from body prose and from the site nav,
 * which is where a reader looks for them anyway.
 */

export const guideFrontmatterSchema = z.object({
  title: z.string().min(10).max(60),
  description: z.string().min(140).max(160),
  pillar: z.enum(['build', 'sell', 'run']),
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  keywords: z.array(z.string().min(3)).min(2).max(8),
  relatedGuides: z.array(z.string().regex(/^(build|sell|run)\/[a-z0-9-]+$/)).min(3),
  cornerstone: z.boolean().default(false),
  howTo: z
    .array(z.object({ name: z.string(), text: z.string() }))
    .min(2)
    .optional(),
  faq: z
    .array(z.object({ question: z.string(), answer: z.string() }))
    .min(2)
    .optional(),
});
