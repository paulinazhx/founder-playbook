# Founder Playbook — design

**Date:** 2026-10-27
**Owner:** Paulina Xu (GitHub `paulinazhx`)
**Status:** awaiting approval
**Repo:** `paulinazhx/founder-playbook` → https://paulinazhx.github.io/founder-playbook/

## Intent and why

Paulina wants a public, indexable content property under her own GitHub account that
ranks for the questions founders type into Google — which tools to use, how to run
sales, how to do the CEO job — and that links back to Agentic Fabriq's existing
technical content. It serves two purposes at once: organic search surface for her own
name and for AF, and a credible artifact she can put in her LinkedIn Featured section
and hand to investors, candidates, and peers.

The model is her advisor's `github.com/OpenFutureForum`: an account holding several
narrow, heavily-SEO'd repositories, each publishing a GitHub Pages site on one topic
with a keyword-bearing name and description. The engine already exists in-house —
`agenticfabriq/agenticfabriq.github.io` (local checkout: `~/Downloads/git/git-seo`) is
an Astro + GitHub Pages site with a typed content schema, generated OG images, link
checking, a generated README index, and a verify-gated deploy. This project reuses that
engine rather than inventing a second one.

Audience: a first-time or early-stage founder, pre-seed to Series A, who is searching
for a specific answer, not browsing. Each page answers one question start to finish.

## Goals

- Rank for founder-intent search queries: founder tool stack, founder-led sales,
  pricing a first product, first ten customers, investor updates, first hires.
- One page per question, each a complete answer, no gate and no signup.
- Every page carries correct SEO metadata: canonical URL, `Article` + `HowTo` + `FAQPage`
  JSON-LD, OG image, sitemap entry, RSS entry, `llms.txt` entry.
- Cross-link to `agenticfabriq.github.io` where a founder topic touches agent
  infrastructure, and to `agenticfabriq.com` sitewide — real editorial links from
  relevant passages, not a link farm.
- Readable as a repository too: the README is a full index, generated from the content
  so it cannot drift.
- CI gate that blocks a deploy on a broken *internal* link, a schema violation, or a
  stale README. External links are checked out-of-band, not at the deploy gate.

## Non-goals

- No personal memoir or diary content. Paulina confirmed this is researched,
  practical founder advice, not lived-experience storytelling.
- No newsletter, no email capture, no analytics, no comments, no CMS.
- No custom domain in v1. Default `github.io` host.
- No AF product marketing. AF appears as a cited source and as the publisher's parent,
  never as a pitch.
- Not a monorepo of sibling topics. One topic, one repo, matching the advisor's pattern.

## Anti-goals (failure even if it ships)

- Thin or padded pages. A 900-word listicle restating what ten other blogs say ranks
  nowhere and damages the account's credibility with the exact audience it targets.
  Every page states what breaks without the advice, gives a decision table of the real
  options, and ends with a checklist.
- Unattributed claims. Any number, benchmark, or market claim links the primary source.
  No secondary source restating a primary one.
- Generic AI-written voice. Short declarative sentences, concrete nouns, no "in today's
  fast-paced landscape", no bulleted fluff, no em-dash-joined throat clearing.
- Content that needs Paulina to maintain it weekly. Evergreen framing; dated facts
  isolated so they can be refreshed in one pass.

## Decided by Paulina

- **Repository:** `paulinazhx/founder-playbook`, public.
- **Site URL:** `https://paulinazhx.github.io/founder-playbook/` — a project page, so
  Astro is configured with `site: 'https://paulinazhx.github.io'` and
  `base: '/founder-playbook'`, and every canonical, sitemap, RSS, OG, and internal link
  resolves through that base. The root `paulinazhx.github.io` slot is deliberately left
  free for sibling topic repositories later.
- **Site title:** The Founder Playbook. This is the H1 on the home page, the `SITE_NAME`
  in `src/lib/seo.ts`, and the text on every OG image.
- **Scope:** researched, practical founder advice — tools, navigating the role, sales —
  not lived-experience or memoir content.
- **Nothing unreviewed is indexable.** The repository is created **private** with Pages
  **off**. Paulina reads the three cornerstones in a local `astro preview`. The repo is
  flipped public and Pages enabled only after she signs off. Draft prose crawled under
  her name is the one failure here that is slow to undo, so the workflow pays an extra
  manual step to make it impossible.
- **A reciprocal inbound link is in scope.** Once this site is public, a separate pull
  request adds an editorial link from `agenticfabriq.github.io` back to it. Paulina
  merges that PR herself — it is an org-owned repository. This is the only inbound
  authority available to a brand-new `github.io` path, and without it the ranking goal
  has no realistic timeline.

## Constraints

- Astro 7, Node 22, `npm`. Pinned exact dependency versions, matching the AF site.
- Hosted on GitHub Pages from `main` via `actions/deploy-pages`.
- Published under `paulinazhx` with existing `gh` auth (scopes: `repo`, `read:org`,
  `gist`). Repo created public.
- Prose licensed CC BY 4.0; any code snippets Apache-2.0. Same split as the AF repo.
- No AI-assistant attribution in any commit, per Paulina's standing instruction.

## Architecture (decided — carried over from the AF site)

Reused unchanged in shape, retitled in content:

- `src/content/guides/<pillar>/<slug>.md`, loaded by an Astro content collection with a
  Zod frontmatter schema. Schema enforces title 10–60 chars, description 140–160 chars,
  2–8 keywords, at least 3 related guides, ISO `updated` date, and optional `howTo`
  (min 2 steps) and `faq` (min 2 entries) blocks that become JSON-LD.
- Three pillars, each with a cornerstone `index.md` carrying the whole argument and
  topic guides beneath it as reference. Routes: `/<pillar>/` and `/<pillar>/<slug>/`.
- `src/lib/seo.ts` for canonical URLs and JSON-LD nodes with stable `@id`s;
  `src/lib/pillars.js` as the single pillar list both Astro and the Node scripts read.
- `scripts/`: `generate-og.mjs` (satori + sharp OG images), `check-og.mjs`,
  `check-links.mjs` (cheerio; internal routes only — it skips `http(s):`, `mailto:` and
  `#` by design, enforces at least three distinct internal links per page, and flags
  orphans), `readme-index.mjs` (generates the README index between
  markers, with a `--write`-less check mode).
- `npm run verify` = build + vitest + markdownlint + link check + OG check + README
  check. Both `ci.yml` and `deploy.yml` run it.

Dropped from the AF engine: `check-samples.mjs` and the Python install steps in CI.
This site has no runnable code samples, so the sample-import checker has nothing to
check and the Python toolchain is dead weight. (My call.)

### Content model — the three pillars

Split by what the founder is trying to do, which is how they search:

| Pillar | Slug | Covers |
|---|---|---|
| Build | `build` | What you ship and what you run it on: scoping v1, the tool stack, AI tooling, shipping without an engineering team. |
| Sell | `sell` | Getting revenue: founder-led sales, first ten customers, outbound, discovery and demos, pricing. |
| Run | `run` | The CEO job: decisions and attention, money and fundraising, first hires, co-founder and equity. |

### Guide inventory (12 pages)

Cornerstones marked ★.

**Build**
1. ★ `build/index` — The Founder Tool Stack: Buy, Build, or Skip. The decision frame for
   every tool purchase at every stage, with the four categories that actually matter and
   what each one costs in money and attention.
2. `build/ai-tools` — AI tools for founders: what genuinely replaces headcount in 2026
   and what only looks like it does. *Primary AF cross-link site.*
3. `build/scoping-v1` — Deciding what the first version is, and what it refuses to do.
4. `build/shipping-without-engineers` — Getting a product out when no one on the team
   writes production code. *Secondary AF cross-link site.*

**Sell**
5. ★ `sell/index` — Founder-Led Sales: Your First Ten Customers. Why the founder does it,
   what they do, and the point at which handing it off starts working.
6. `sell/outbound` — Cold outreach that gets replies, and the volume math behind it.
7. `sell/discovery-and-demos` — Running a first call so the demo is already sold.
8. `sell/pricing` — Pricing a first product with no comparables.

**Run**
9. ★ `run/index` — The CEO Job: Decisions, Attention, and What Only You Can Do. The
   operating system for the role itself.
10. `run/fundraising` — Raising a first round: the process, the artifacts, the timeline.
11. `run/investor-updates` — The monthly update that keeps investors useful.
12. `run/first-hires` — The first five hires and the ones founders get wrong.

Each page: TL;DR bullets, who it's for, the problem, the real options as a decision
table, a worked example, a paste-able checklist, failure modes symptom-first, and a
sources section. Target 2,500–4,000 words — substantial, below the AF site's 8,000-word
technical guides, because founder topics do not carry that much mechanism. (My call.)

### AF cross-linking

Three mechanisms, all editorial:

1. Sitewide footer: "Published by Paulina Xu" → her GitHub and LinkedIn; "Agentic
   Fabriq" → `agenticfabriq.com`; "Agent Integration Playbook" → the AF guide site.
2. In-body links from `build/ai-tools` and `build/shipping-without-engineers` into the
   specific AF guides that answer the next question — e.g. a founder wiring an agent to
   a mailbox goes to the AF `connect/gmail` guide. Deep links to the exact page, in the
   passage where the question arises.
3. An `about` page naming the relationship: Paulina is AF's founder, the site is hers,
   the AF playbook is the technical companion.

JSON-LD `Person` node for Paulina as author, with `sameAs` to her GitHub and LinkedIn,
and `worksFor` pointing at the AF `Organization` node. (My call — the AF site has no
Person node; this one needs it, because the point is to rank her name too.)

## Calls made by the builder

Settled without Paulina because a sensible builder could settle them and the answer does
not change what gets built. Flagged here so she can check them while reading.

- **Research channel.** Paulina asked for researched guides, so the builder researches
  with web search and fetch. Framing stays evergreen. Any number, benchmark, or market
  claim that cannot be tied to a primary source is cut rather than softened into a hedge
  — a vague confident claim is the stated anti-goal, and she is the publisher of record.
- **External link checking is out-of-band.** `npm run check:links:external` exists and is
  run manually and on a schedule, not in `verify`. Primary sources are frequently gated
  PDFs or hosts that 403 a CI user agent; gating her deploys on third-party servers
  trades a real failure for a theoretical one.
- **Worked examples** are explicitly-labelled hypothetical composites for anything
  requiring numbers or a narrative. Real named companies appear only where a primary
  source supports the specific claim being made about them. This avoids both inventing
  facts about third parties and inventing facts at all.
- **Keyword assignment** is a research pass before any prose is written: one primary
  keyword per page, recorded in the page's frontmatter as the first `keywords` entry.
  The pass runs before titles and descriptions are fixed, because the schema locks them
  to 10–60 and 140–160 characters and OG cards are generated from them. If the pass shows
  two pages competing for one query — `sell/index` against `sell/outbound`, or
  `build/index` against `build/ai-tools` are the likely pairs — the page boundary moves
  and Paulina is told before the prose is written, not after.

## Base-path refactor (new work, not a port)

The AF engine has no base-path support, so a project-page deploy is a cross-cutting URL
change rather than a retitling. The places that assume the site lives at an origin root:

- `astro.config.mjs` — no `base` key.
- `src/lib/site-urls.js` / `src/lib/seo.ts` — `canonical()` builds from a bare origin.
- `src/lib/og.js` — returns root-absolute `/og/...` paths.
- `src/components/Seo.astro` — composes `${SITE_URL}${imagePath}`.
- `src/layouts/GuideLayout.astro` — emits root-relative `href={`/${guide.id}/`}`.
- `src/pages/rss.xml.ts` — root-relative item links.
- `scripts/check-links.mjs` — derives routes from `dist/**` and seeds `/` as
  always-linked, with the orphan check keyed to that assumption.
- `tests/` — assertions on the emitted URLs.

Approach: one `BASE` constant beside `SITE_URL`, a `withBase()` helper every link and
asset path goes through, and the route-derivation in `check-links.mjs` made
base-aware. Tests updated in the same change. This is the bulk of Phase 1's engineering
and is why Phase 1 is engine-first with content second.

## Build phases

**Phase 1 — engine and cornerstones.** Create the repo **private**, port and retitle the
Astro engine, do the base-path refactor, wire CI, run the keyword pass, write the three
cornerstone pages, generate OG images, get a green `verify`, and hand Paulina a local
`astro preview` URL. Pages stays off and the repo stays private. This is the milestone
she reviews before any spoke content is written.

**Phase 2 — the nine spokes.** Written in pillar order, each one verified. Review point
after each pillar completes.

**Phase 3 — launch and go public.** README index, repo description and GitHub topics set
for search, `about` page, LinkedIn Featured blurb. Then, on Paulina's word: repo flipped
public, Pages enabled, first deploy verified live, and the reciprocal-link PR opened
against `agenticfabriq.github.io` for her to merge.

## Open to the builder

- Exact prose, headings, and examples within each page's required section shape.
- Which specific AF guides each in-body cross-link targets.
- Visual design: colours and type may be inherited from the AF `global.css` or set
  fresh, provided both light and dark render legibly and no web font is loaded from a
  third party.
- The OG image template.

## Outstanding input needed

- **Paulina's LinkedIn profile URL**, and how she wants to be described as author. Needed
  for the sitewide footer, the `Person` node's `sameAs`, the `about` page, and the Phase 3
  Featured blurb. Not blocking Phase 1 engineering: the author details are threaded
  through one module and land as a single change once she supplies them. A guessed vanity
  URL is never published — a wrong `sameAs` works directly against the goal of ranking
  her name.
