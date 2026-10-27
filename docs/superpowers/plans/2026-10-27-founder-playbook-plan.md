# The Founder Playbook Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a private-until-signoff Astro site at `paulinazhx.github.io/founder-playbook/` carrying twelve researched, source-linked founder guides across three pillars, cross-linked to Agentic Fabriq's content.

**Architecture:** Port the engine from `agenticfabriq/agenticfabriq.github.io` (local: `~/Downloads/git/git-seo`) — Astro content collection with a Zod frontmatter schema, three pillars each with a cornerstone, generated OG cards, a generated README index, and a `verify`-gated deploy. The engine assumes an origin root, so a `BASE`/`withBase()` pass precedes any content work. Content is researched with web search; every claim carrying a number links its primary source.

**Tech Stack:** Astro 7.2.2, Node 22, `@astrojs/sitemap`, `@astrojs/rss`, satori + sharp (OG), cheerio (link check), vitest, markdownlint-cli2. No runtime JS framework, no web fonts, no analytics.

**Spec:** `docs/superpowers/specs/2026-10-27-founder-playbook-design.md`

## Global Constraints

- Repository `paulinazhx/founder-playbook`, created **private**, Pages **off**, until Paulina signs off.
- `site: 'https://paulinazhx.github.io'`, `base: '/founder-playbook'`, `trailingSlash: 'always'`, `build.format: 'directory'`.
- Site title string, used verbatim as `SITE_NAME`, the home `<h1>`, and OG card text: `The Founder Playbook`.
- Pillars, in presentation order: `build`, `sell`, `run`. Exactly twelve guides, one cornerstone per pillar.
- Frontmatter schema, enforced at build: `title` 10–60 chars; `description` 140–160 chars; `keywords` 2–8 entries, first entry is the page's primary keyword; `relatedGuides` ≥3, each matching `^(build|sell|run)/[a-z0-9-]+$`; `updated` as `YYYY-MM-DD`; optional `howTo` ≥2 steps and `faq` ≥2 entries.
- Prose CC BY 4.0 (`LICENSE-CONTENT`), code Apache-2.0 (`LICENSE`).
- Guide length 2,500–4,000 words. Every numeric or market claim links a primary source. Worked examples are labelled hypothetical composites unless a primary source backs the named company.
- `npm run verify` = `build` + `test` + `lint:md` + `check:links` + `check:og` + `check:readme`. No Python, no `check:samples`. External link checking is a separate `check:links:external`, never in `verify`.
- No AI-assistant attribution in any commit message, and no AI co-author trailer.

## Review Focus

1. A guide whose `relatedGuides` names a slug that does not exist — the schema regex passes, the build still resolves it, and the link 404s in production. Task 3's test asserts every `relatedGuides` target resolves to a real entry.
2. `withBase()` applied twice to one path, yielding `/founder-playbook/founder-playbook/build/`. Task 1's test asserts idempotence.
3. A `description` exactly 139 or 161 characters — the schema boundary where a one-character copy edit breaks the build after prose is final. Task 1's test asserts both bounds reject and 140/160 accept.
4. An OG card missing for a page that exists, so a LinkedIn share renders blank — the single highest-visibility failure for a site whose purpose is being shared. Task 10's `check:og` asserts one card per route.
5. A page with fewer than three internal links, orphaning it from the pillar structure and from crawlers. Task 1's ported `check-links.mjs` enforces ≥3 distinct internal links per page and flags orphans; its route derivation must be base-aware or every route reads as an orphan.

---

### Task 1: Repo, engine port, base-path support

**Files:**
- Create: `/Users/paulinaxu/Downloads/git/founder-playbook/` (git init, `main`)
- Create: `astro.config.mjs`, `package.json`, `tsconfig.json`, `vitest.config.ts`, `.gitignore`, `LICENSE`, `LICENSE-CONTENT`
- Create: `src/lib/site-urls.js` (exports `SITE_URL`, `BASE`, `withBase`)
- Modify (ported): `src/lib/seo.ts`, `src/lib/og.js`, `src/lib/pillars.js`, `src/lib/guide-schema.ts`, `src/lib/site-pages.js`, `src/components/*.astro`, `src/layouts/*.astro`, `src/pages/*`, `scripts/*.mjs`
- Create: `docs/superpowers/specs/2026-10-27-founder-playbook-design.md`, `docs/superpowers/plans/2026-10-27-founder-playbook-plan.md`
- Test: `tests/base.test.js`, `tests/schema.test.js`, `tests/seo.test.js`

**Interfaces:**
- Consumes: nothing.
- Produces: `SITE_URL = 'https://paulinazhx.github.io'`, `BASE = '/founder-playbook'`, `withBase(path: string) -> string`, `canonical(path: string) -> string`, `PILLARS: Pillar[]` with `{slug, title, blurb, order}`, `guideFrontmatterSchema`, `personNode()`, `organizationNode()`.

- [ ] **Step 1: Write the failing tests**

```js
// tests/base.test.js
expect(withBase('/build/')).toBe('/founder-playbook/build/');
expect(withBase(withBase('/build/'))).toBe('/founder-playbook/build/'); // idempotent
expect(withBase('/')).toBe('/founder-playbook/');
expect(canonical('build/pricing')).toBe('https://paulinazhx.github.io/founder-playbook/build/pricing/');
// tests/schema.test.js — description bounds
expect(parse({...valid, description: 'x'.repeat(139)}).success).toBe(false);
expect(parse({...valid, description: 'x'.repeat(140)}).success).toBe(true);
expect(parse({...valid, description: 'x'.repeat(160)}).success).toBe(true);
expect(parse({...valid, description: 'x'.repeat(161)}).success).toBe(false);
expect(parse({...valid, pillar: 'connect'}).success).toBe(false); // AF pillars gone
```

- [ ] **Step 2: Run `npx vitest run` — expect FAIL, modules not found**
- [ ] **Step 3: Scaffold the repo and port the engine**

Copy from `~/Downloads/git/git-seo`: `src/lib`, `src/components`, `src/layouts`, `src/pages`, `src/styles`, `scripts`, `tests`, `tsconfig.json`, `vitest.config.ts`, `.gitignore`, `markdownlint` config. Do not copy `src/content`, `dist`, `node_modules`, `public/og`, `docs`, `examples`, `scripts/check-samples.mjs`. Rewrite `package.json` `name` to `founder-playbook` and drop the `check:samples` script and its dependency entries from `verify`.

- [ ] **Step 4: Add base-path support at the eight sites the spec names**

`withBase()` in `site-urls.js` is the only place that prepends `BASE`; it returns the path unchanged when it already starts with `BASE`. Route every link and asset path through it: `og.js` card paths, `Seo.astro`'s `${SITE_URL}${imagePath}` composition, `GuideLayout.astro`'s guide hrefs, `Breadcrumbs.astro`, `rss.xml.ts` item links, `llms.txt.ts`, and `check-links.mjs`'s `dist/**` route derivation plus its always-linked seed.

- [ ] **Step 5: Retitle the SEO module**

In `src/lib/seo.ts`: `SITE_NAME = 'The Founder Playbook'`, `REPO_URL = 'https://github.com/paulinazhx/founder-playbook'`, `PARENT_URL = 'https://agenticfabriq.com'`. Keep `organizationNode()` for Agentic Fabriq. Add `personNode()` — a schema.org `Person`, `@id` `${SITE_URL}${BASE}/#person`, name `Paulina Xu`, `url` her GitHub, `sameAs` her GitHub plus a LinkedIn placeholder constant `LINKEDIN_URL` set to `null` until supplied, `worksFor` referencing `ORG_ID`. Every page emits it as the `author`. When `LINKEDIN_URL` is `null`, it is omitted from `sameAs` rather than emitted empty.

- [ ] **Step 6: Set the three pillars in `src/lib/pillars.js`**

`build` / "Build" / what you ship and what you run it on. `sell` / "Sell" / getting to revenue. `run` / "Run" / the CEO job. Update `guide-schema.ts`'s pillar enum to match.

- [ ] **Step 7: Run `npx vitest run` — expect PASS**
- [ ] **Step 8: Commit** — `feat: scaffold founder playbook on base-path-aware engine`

---

### Task 2: Home, pillar index, and about pages

**Files:**
- Modify: `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/[pillar]/index.astro`, `src/pages/[pillar]/[slug].astro`
- Test: `tests/pages.test.js`

**Interfaces:**
- Consumes: `PILLARS`, `canonical`, `withBase`, `personNode`, `SITE_NAME` from Task 1.
- Produces: routes `/`, `/about/`, `/<pillar>/`, `/<pillar>/<slug>/`, all under `BASE`.

- [ ] **Step 1: Write the failing test** — assert the built `dist/index.html` contains `The Founder Playbook`, a `Person` JSON-LD node, and three pillar links each beginning `/founder-playbook/`.
- [ ] **Step 2: Run it — expect FAIL**
- [ ] **Step 3: Rewrite the home page copy** — what the site is, who it is for, the three pillars with their cornerstones, and the licence line. No AF pitch.
- [ ] **Step 4: Write `about.astro`** — Paulina as author and AF's founder, the relationship to the Agent Integration Playbook, the licence split, and how to suggest a correction (repo issues).
- [ ] **Step 5: Run the test — expect PASS**
- [ ] **Step 6: Commit** — `feat: home, about, and pillar index pages`

---

### Task 3: Keyword pass and twelve frontmatter stubs

**Files:**
- Create: `src/content/guides/{build,sell,run}/*.md` (12 files, frontmatter + a one-line body)
- Create: `docs/keywords.md`
- Test: `tests/content.test.js`

**Interfaces:**
- Consumes: `guideFrontmatterSchema`, `PILLARS`.
- Produces: the twelve slugs every later task writes into — `build/index`, `build/ai-tools`, `build/scoping-v1`, `build/shipping-without-engineers`, `sell/index`, `sell/outbound`, `sell/discovery-and-demos`, `sell/pricing`, `run/index`, `run/fundraising`, `run/investor-updates`, `run/first-hires`.

- [ ] **Step 1: Run the keyword pass**

One primary keyword per page, recorded as the first `keywords` entry and in `docs/keywords.md` with the intent it serves. Resolve the two collisions the spec names — `sell/index` against `sell/outbound`, `build/index` against `build/ai-tools` — by assigning distinct primary keywords and, where that is not possible, moving the page boundary and recording the move.

- [ ] **Step 2: Write the failing test**

```js
// every relatedGuides target resolves to a real guide id
for (const g of guides) for (const r of g.data.relatedGuides) expect(ids).toContain(r);
// exactly one cornerstone per pillar
for (const p of PILLARS) expect(guides.filter(g => g.data.pillar === p.slug && g.data.cornerstone)).toHaveLength(1);
// primary keywords are unique across the site
expect(new Set(primaries).size).toBe(12);
```

- [ ] **Step 3: Run it — expect FAIL, no content**
- [ ] **Step 4: Write the twelve frontmatter stubs** with final titles, descriptions, keywords, `relatedGuides`, `updated`, and `cornerstone` flags.
- [ ] **Step 5: Run `npx vitest run && npm run build` — expect PASS**
- [ ] **Step 6: Commit** — `feat: twelve guide stubs with final SEO frontmatter`

---

### Tasks 4–9: The twelve guides

Each guide is one task-sized deliverable. Order: `build/index`, `build/ai-tools`, `build/scoping-v1`, `build/shipping-without-engineers`, `sell/index`, `sell/outbound`, `sell/discovery-and-demos`, `sell/pricing`, `run/index`, `run/fundraising`, `run/investor-updates`, `run/first-hires`. Commit after each.

**Files:** Modify the one stub from Task 3. Add its `howTo` and `faq` frontmatter blocks.

**Required section shape, every guide:**

1. `## TL;DR` — 4–6 bullets, each a claim, not a topic.
2. `## Who this is for` — and who should skip it.
3. `## The problem` — what breaks without this, concretely.
4. The body: the real options as a decision table, then the mechanism.
5. `## Worked example` — labelled a hypothetical composite unless a primary source backs a named company.
6. `## Checklist` — paste-able.
7. `## Failure modes` — symptom first, then cause, then fix.
8. `## Sources` — primary sources only, each linked.
9. At least three internal links to sibling guides, placed where the question arises.

**AF cross-links:** `build/ai-tools` and `build/shipping-without-engineers` carry in-body deep links into the specific Agent Integration Playbook guides that answer the next question. Every other guide's AF reference is the sitewide footer only.

- [ ] **Per guide, Step 1:** research the topic; collect primary sources; discard any claim that has none.
- [ ] **Per guide, Step 2:** write the prose to the section shape, 2,500–4,000 words.
- [ ] **Per guide, Step 3:** add `howTo` (≥2 steps) and `faq` (≥2 entries) frontmatter.
- [ ] **Per guide, Step 4:** run `npm run build && npm run lint:md && npm run check:links` — expect PASS.
- [ ] **Per guide, Step 5:** commit — `content: <pillar>/<slug>`.

---

### Task 10: OG cards

**Files:** Modify `scripts/generate-og.mjs`; create `public/og/*.png`; Test: `scripts/check-og.mjs` (ported).

- [ ] **Step 1: Retemplate the card** — site title, page title, pillar label. No web font; use a system font stack satori can resolve locally.
- [ ] **Step 2: Run `npm run og`** then `npm run check:og` — expect one card per route, PASS.
- [ ] **Step 3: Commit** — `feat: OG cards for every route`

---

### Task 11: README index and repo metadata

**Files:** Create `README.md`, `CONTRIBUTING.md`; modify `scripts/readme-index.mjs`.

- [ ] **Step 1: Write the README** — what the site is, where to read it, the licence split, and `BEGIN/END GENERATED <pillar>` markers for each of the three pillars.
- [ ] **Step 2: Run `npm run readme` then `npm run check:readme`** — expect PASS.
- [ ] **Step 3: Set the repo description and GitHub topics** for search, matching the advisor's keyword-bearing style.
- [ ] **Step 4: Commit** — `docs: generated README index and contributing guide`

---

### Task 12: CI, verify, and the private push

**Files:** Create `.github/workflows/ci.yml`, `.github/workflows/deploy.yml`, `scripts/check-links-external.mjs`.

- [ ] **Step 1: Write both workflows** — Node 22, `npm ci`, `npm run verify`. No Python steps. `deploy.yml` keeps its `pages`/`id-token` permissions and `actions/deploy-pages@v4`, and is inert until Pages is enabled.
- [ ] **Step 2: Write `check-links-external.mjs`** — crawls `dist/**` for `http(s):` hrefs, fetches each with a browser user agent, retries once, reports non-2xx. Exposed as `npm run check:links:external`. Not in `verify`.
- [ ] **Step 3: Run `npm run verify`** — expect PASS, and record the output.
- [ ] **Step 4: Run `npm run check:links:external`** — fix any dead citation; a host that 403s a bot is recorded in the script's skip list with a note, not deleted.
- [ ] **Step 5: `gh repo create paulinazhx/founder-playbook --private --source . --remote origin --push`**
- [ ] **Step 6: Confirm Pages is off and the repo is private** — `gh api repos/paulinazhx/founder-playbook --jq '.private, .has_pages'` must print `true` then `false`.
- [ ] **Step 7: Report to Paulina** — the local preview command, the twelve pages, the outstanding LinkedIn URL, and the two go-public steps she authorises.
