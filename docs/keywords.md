# Target keywords

One primary keyword per page, recorded as the first `keywords` entry in that guide's
frontmatter and asserted unique by `tests/content.test.ts`. Secondary keywords are the
remaining entries.

No search-volume or difficulty figures are recorded here. The tools that sell them
disagree with each other by large margins at this end of the long tail, and a number
nobody can reproduce is worse than no number — the same standard the guides are held to.

## Collisions resolved

Two pairs were at risk of competing with each other for one query, which is the failure
the keyword pass exists to catch:

- **`build/index` against `build/ai-tools`** — both cover tooling. Split so the cornerstone
  owns the buy-build-skip decision frame (`founder tool stack`) and the spoke owns AI
  specifically (`ai tools for founders`). The cornerstone links down to the spoke at the
  point the decision becomes AI-shaped.
- **`sell/index` against `sell/outbound`** — both cover getting to a first conversation.
  Split so the cornerstone owns the whole motion (`founder-led sales`) and the spoke owns
  cold reach arithmetic (`cold outbound for startups`). The cornerstone explicitly routes
  sourcing-at-volume questions to the spoke.

No page boundary had to move; distinct primary keywords were sufficient.

## Build

| Page | Primary keyword | Intent | Secondary |
| --- | --- | --- | --- |
| `build/ai-tools` | ai tools for founders | Evaluative, high volume, heavily contested by listicles. Competing on the judgement a listicle cannot give. | ai for startups; ai agents for small teams; replace headcount with ai; founder ai workflow |
| `build/index` ★ | founder tool stack | Evaluative. Someone deciding what to buy, looking for a frame rather than a list. | startup tech stack; buy vs build startup; best tools for startup founders; startup software spend |
| `build/scoping-v1` | how to scope an mvp | Procedural. Someone mid-argument about what goes in version one. | minimum viable product scope; what to build first startup; mvp feature cuts; first version product scope |
| `build/shipping-without-engineers` | non technical founder build product | Informational with anxiety behind it. Wants to know what is genuinely possible alone. | no code startup; ship product without developers; ai coding tools for founders; first engineering hire |

## Sell

| Page | Primary keyword | Intent | Secondary |
| --- | --- | --- | --- |
| `sell/discovery-and-demos` | startup discovery call | Procedural, immediate. Often searched the day before a call. | sales discovery questions; saas demo that closes; qualify a sales call; founder sales call script |
| `sell/index` ★ | founder-led sales | Informational. Usually a first-time founder who has just realised selling is their job. | first ten customers; founder selling b2b; early startup sales process; how founders sell |
| `sell/outbound` | cold outbound for startups | Procedural. Someone about to send, or already sending with poor results. | cold email reply rates; founder cold outreach; b2b prospecting early stage; outbound sales startup |
| `sell/pricing` | how to price a b2b saas product | Evaluative, high intent, badly served. Most results give benchmarks from samples unlike the searcher. | startup pricing strategy; first product pricing; raise prices customers; value based pricing startup |

## Run

| Page | Primary keyword | Intent | Secondary |
| --- | --- | --- | --- |
| `run/first-hires` | startup first hires | Evaluative. Someone about to open a role and unsure which one. | who to hire first startup; early startup hiring order; first sales hire too early; startup hiring mistakes |
| `run/fundraising` | how to raise a seed round | Procedural, high volume, extremely contested. Competing on process detail and the SAFE arithmetic. | pre seed fundraising process; startup fundraising timeline; safe note terms; investor pitch materials |
| `run/index` ★ | what does a startup ceo actually do | Informational. A founder with employees who cannot describe their own job. | founder ceo role; ceo time management startup; founder delegation; startup ceo responsibilities |
| `run/investor-updates` | monthly investor update template | Transactional — the searcher wants a template. Served with a complete worked example. | investor update email; startup investor reporting; what to tell investors; investor update metrics |

★ cornerstone.
