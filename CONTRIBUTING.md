# Contributing

The most useful contribution is a correction, especially to a cited number. A wrong figure
here propagates into somebody's actual decision, so corrections take priority over
everything else.

## Reporting an error

Open an issue naming the guide, quoting the claim, and giving the right answer with a
source. If the source is behind a paywall, quote the relevant line.

## The editorial bar

Every guide is held to the same standard, and a contribution that cannot meet it will not
be merged however well written it is.

1. **One decision per guide**, taken as it actually presents itself to a founder.
2. **Numbers carry a primary source.** The organisation that published the figure, not a
   blog restating it. Report the sample alongside the number — a median across four
   thousand companies unlike yours is trivia.
3. **No number is better than a soft one.** Where no credible figure exists, say so and
   give the reasoning. Several guides here deliberately decline to quote a benchmark and
   explain why in their sources section; that is the house style, not an omission.
4. **Worked examples are labelled hypothetical composites** unless a primary source
   supports a specific claim about a named company. The reader should never have to guess
   whether they are reading a fact or an illustration.
5. **Evergreen framing.** Where a fact has a short shelf life, isolate and date it so
   refreshing it is one edit rather than a rewrite.
6. **Required sections**: TL;DR, who this is for, the problem, the body with a decision
   table, a worked example, a checklist, failure modes symptom-first, and sources.
7. **At least three internal links**, placed where the question arises rather than
   collected at the end.

## What the build enforces

`npm run verify` is the gate, and it fails on:

- a title outside 10–60 characters or a description outside 140–160
- fewer than two or more than eight keywords
- fewer than three `relatedGuides`, or one naming a guide that does not exist
- a `relatedGuides` entry pointing at a cornerstone, which Astro cannot resolve by that id
- a broken internal link or an orphaned page
- fewer than three distinct internal links on a page
- a missing or stale social card
- a README index that has drifted from the content

External links are checked separately by `npm run check:links:external`, which is not part
of `verify`. Primary sources are often gated or hostile to automated requests, and gating a
deploy on third-party servers trades a real failure for a theoretical one.

## Local development

```sh
npm ci
npm run dev        # http://localhost:4321/founder-playbook/
npm run og         # redraw social cards after a title change
npm run readme     # regenerate the index in README.md
npm run verify     # the full gate
```

## Licence

Prose is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code is
[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0). By contributing you agree your
contribution is licensed on those terms.
