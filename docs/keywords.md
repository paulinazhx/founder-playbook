# Target keywords

One primary keyword per page, recorded as the first `keywords` entry in that guide's
frontmatter and asserted unique by `tests/content.test.ts`. Secondary keywords are the
remaining entries.

No search-volume or difficulty figures are recorded here. The tools that sell them
disagree with each other by large margins at this end of the long tail, and a number
nobody can reproduce is worse than no number — the same standard the guides are held to.

## Collisions resolved

Pairs at risk of competing with each other for one query, which is the failure the
keyword pass exists to catch:

- **`build/index` against `build/ai-tools`** — both cover tooling. The cornerstone owns the
  buy-build-skip frame (`founder tool stack`); the spoke owns AI specifically.
- **`sell/index` against `sell/outbound`** — both cover getting to a first conversation. The
  cornerstone owns the whole motion; the spoke owns cold reach arithmetic.
- **`build/scoping-v1` against `build/what-to-build-next`** — both are about choosing work.
  Split on time: scoping is before the first version exists and is about refusal in advance;
  what-to-build-next is after it exists and is about sorting incoming requests. Each links to
  the other at the handover point.
- **`sell/pricing` against `run/runway`** — both discuss raising prices. Pricing owns how to
  set and raise a number; runway owns where a price increase sits in the order of cuts when
  cash is short.

No page boundary had to move; distinct primary keywords were sufficient.

## Build

| Page | Primary keyword | Intent | Secondary |
| --- | --- | --- | --- |
| `build/ai-tools` | ai tools for founders | Evaluative, high volume, contested by listicles. Competing on the judgement a listicle cannot give. | ai for startups; ai agents for small teams; replace headcount with ai; founder ai workflow |
| `build/index` ★ | founder tool stack | Evaluative. Someone deciding what to buy, wanting a frame rather than a list. | startup tech stack; buy vs build startup; best tools for startup founders; startup software spend |
| `build/metrics-that-matter` | startup metrics that matter | Evaluative. Someone with a dashboard that is not helping. | early stage saas metrics; vanity metrics; what to measure startup; product metrics for founders |
| `build/scoping-v1` | how to scope an mvp | Procedural. Someone mid-argument about what goes in version one. | minimum viable product scope; what to build first startup; mvp feature cuts; first version product scope |
| `build/shipping-without-engineers` | non technical founder build product | Informational with anxiety behind it. Wants to know what is possible alone. | no code startup; ship product without developers; ai coding tools for founders; first engineering hire |
| `build/what-to-build-next` | how to prioritize a product roadmap | Procedural. A request backlog growing faster than it can be built. | what to build next startup; feature prioritization early stage; product roadmap founder; customer feature requests |

## Sell

| Page | Primary keyword | Intent | Secondary |
| --- | --- | --- | --- |
| `sell/churn-and-renewals` | reduce churn early stage saas | Procedural, usually urgent. Someone who has just lost an account. | early stage customer retention; saas renewal process startup; why customers churn; founder customer success |
| `sell/discovery-and-demos` | startup discovery call | Procedural, immediate. Often searched the day before a call. | sales discovery questions; saas demo that closes; qualify a sales call; founder sales call script |
| `sell/inbound` | early stage inbound marketing | Evaluative. Deciding whether the channel is worth the wait. | startup content marketing seo; inbound leads from zero; founder content strategy; seo for startups |
| `sell/index` ★ | founder-led sales | Informational. A first-time founder who has just realised selling is their job. | first ten customers; founder selling b2b; early startup sales process; how founders sell |
| `sell/outbound` | cold outbound for startups | Procedural. About to send, or already sending with poor results. | cold email reply rates; founder cold outreach; b2b prospecting early stage; outbound sales startup |
| `sell/pricing` | how to price a b2b saas product | Evaluative, high intent, badly served. Most results give benchmarks from unlike samples. | startup pricing strategy; first product pricing; raise prices customers; value based pricing startup |

## Run

| Page | Primary keyword | Intent | Secondary |
| --- | --- | --- | --- |
| `run/cofounder-equity` | cofounder equity split | Evaluative, high stakes, searched once. Competing on vesting and departure terms, not the percentage. | founder vesting schedule; cofounder agreement startup; equal equity split; founder departure equity |
| `run/first-hires` | startup first hires | Evaluative. About to open a role and unsure which one. | who to hire first startup; early startup hiring order; first sales hire too early; startup hiring mistakes |
| `run/fundraising` | how to raise a seed round | Procedural, high volume, extremely contested. Competing on process detail and SAFE arithmetic. | pre seed fundraising process; startup fundraising timeline; safe note terms; investor pitch materials |
| `run/index` ★ | what does a startup ceo actually do | Informational. A founder with employees who cannot describe their own job. | founder ceo role; ceo time management startup; founder delegation; startup ceo responsibilities |
| `run/investor-updates` | monthly investor update template | Transactional — wants a template. Served with a complete worked example. | investor update email; startup investor reporting; what to tell investors; investor update metrics |
| `run/runway` | how to extend startup runway | Procedural, urgent. Cash is short and the order of cuts is the question. | startup cost cutting; reduce burn rate startup; runway calculation founder; default alive startup |

★ cornerstone.
