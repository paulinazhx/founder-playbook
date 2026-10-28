---
title: "The Founder Tool Stack: Buy, Build, or Skip"
description: "A decision frame for every tool a startup buys: the four categories that matter, what each one costs in money and attention, and when building beats buying."
pillar: build
updated: "2026-10-27"
cornerstone: true
keywords:
  - "founder tool stack"
  - "startup tech stack"
  - "buy vs build startup"
  - "best tools for startup founders"
  - "startup software spend"
relatedGuides:
  - build/ai-tools
  - build/scoping-v1
  - build/shipping-without-engineers
howTo:
  - name: Sort the tool into one of four categories before pricing it
    text: Decide whether the tool runs your product, runs your company, informs a decision, or replaces a person's work. The category sets the standard it has to clear, and three of the four have a much lower bar than founders assume.
  - name: Price the attention, not only the subscription
    text: Add the hours to evaluate, migrate, configure, learn, and later leave. For most startup tools that number is larger than the annual licence fee, and unlike the fee it is paid entirely by the person with the least spare time.
  - name: Ask what you are already paying for that does this
    text: Check the plans you already hold before buying anything new. Overlap is the single most common source of wasted startup software spend, and it is invisible unless somebody looks.
  - name: Default to skip, then buy, then build, in that order
    text: Skipping is free and reversible. Buying costs money and some attention. Building costs attention forever, because you now maintain it. Only invert the order when the thing is your product.
  - name: Set a kill date on every new tool
    text: Put a date in the calendar, six weeks out, to decide whether the tool earned its place. Without a scheduled decision nothing is ever cancelled, and sprawl is made of tools nobody chose to keep.
faq:
  - question: How much should a startup spend on software?
    answer: There is no defensible per-employee benchmark at startup scale. The published numbers come from enterprise portfolios — Zylo's 2026 index reports a median of $9,455 per employee per year across 40 million licences — and an enterprise's spend is dominated by seat-based platforms a five-person company does not run. The useful constraint is not a benchmark but a ratio — at pre-revenue, software should be small enough that cancelling all of it would not change your runway conversation.
  - question: Should a startup build its own internal tools?
    answer: Almost never, with one exception. Building means maintaining forever, and maintenance is paid in the founders' attention, which is the scarcest input in the company. The exception is when the thing is a genuine part of your product or your unfair advantage — then it is not an internal tool, it is product work, and it belongs in your roadmap rather than in your stack.
  - question: What tools does a startup actually need on day one?
    answer: A way to take money, a way to talk to customers, a place to put code, a place to put documents, and a place to see what customers do. Everything else can wait for a specific trigger. Most day-one stacks are over-built because founders buy for the company they intend to be rather than the one that exists.
  - question: When is a free plan a trap?
    answer: When the cost of leaving grows with use. A free plan that holds your customer records, your billing history, or your documentation is cheap now and expensive to exit later, and the exit price is set by the vendor at exactly the moment you can least afford to pay it. Free plans that hold nothing are genuinely free.
  - question: How do I stop buying tools I do not use?
    answer: Put a kill date on each one at purchase and keep a single list of every subscription with its renewal date and its owner. Sprawl is not caused by bad individual decisions; it is caused by nobody ever revisiting good ones.
---

## TL;DR

- Every tool belongs to one of four categories, and they have wildly different standards of proof. A tool that **runs your product** has to be boring and reliable. A tool that **runs your company** has to be cheap and replaceable. A tool that **informs a decision** has to be trusted. A tool that **replaces work** has to actually do the work, end to end, or it has replaced nothing.
- The price on the pricing page is the smaller half of the cost. The larger half is your attention: evaluating, migrating, configuring, learning, and eventually leaving. At five people, attention is the binding constraint on the company, and software spends it.
- Default order is **skip, buy, build**. Skipping is free and reversible. Buying costs money and a little attention. Building costs attention permanently, because you now own the thing. Invert that order only when the tool *is* the product.
- The question "what's the best tool for X" is almost always the wrong question. The right one is "what breaks if I don't have anything for X for another three months", and the honest answer is usually nothing.
- Nobody cancels anything unless a date forces them to. Put a kill date on every tool the day you buy it, and keep one list of every subscription with a renewal date and an owner. Sprawl is not made of bad decisions; it is made of good decisions nobody revisited.

## Who this is for

You are one to about fifteen people. You are the person who signs up for things, and you have noticed that your company now has opinions about software it never consciously chose. You have a vague sense that some of it is waste and no way to tell which. Possibly you also have an engineer who wants to build an internal tool, and an instinct that says no without an argument to back it up.

Skip this if you already have a finance or operations person who owns procurement and renewals. At that point this is their job and they will do it better than a frame on a web page. Also skip it if the tool you are deciding about is genuinely your product's core technology — that is a product decision, and it belongs with [scoping the first version](/founder-playbook/build/scoping-v1/) rather than here.

## The problem

Tool decisions feel small and are not. They are small individually and large in aggregate, which is the exact shape of problem human attention handles worst.

Here is the mechanism, and nothing in it is anybody's fault. You need to send a contract. You buy a thing that sends contracts. Two months later you need to send a different kind of contract, and the thing you bought does not do that kind, so you buy a second thing. Nobody cancels the first, because cancelling requires remembering it exists and checking whether anything depends on it, and both of those cost more than the forty dollars a month it saves. A quarter later, a new hire does not know either tool exists and buys a third.

Now multiply by every function. Email, calendar, documents, chat, project tracking, design, code hosting, deployment, error tracking, analytics, customer support, billing, payroll, contracts, e-signature, scheduling, note-taking, CRM, outbound email, meeting recording, password management, expenses. That is twenty-two functions, every one of which has a tool somebody will insist is non-negotiable, and every one of which has a free or built-in alternative that is worse in a way you would not notice for a year.

The cost shows up in three places, in increasing order of damage.

**Money**, which is the least of it. The published benchmarks are useless to you, and it is worth being precise about why. [Zylo's 2026 SaaS Management Index](https://zylo.com/news/2026-saas-management-index) reports a median of $9,455 in software spend per employee per year, drawn from more than 40 million licences and $75 billion under management. That is a real number from a real sample, and the sample is enterprise. An enterprise's spend is dominated by seat-based platforms, security tooling, and compliance infrastructure that a five-person company does not run. Reading that number as a target would have you spending $47,000 a year at five people, which would be absurd. Reading it as a ceiling is equally wrong. It is simply not about you.

**Attention**, which is most of it. Every tool has a one-time cost — choosing it, moving data into it, configuring it, learning it — and a recurring cost you never account for: the context it occupies, the notifications it sends, the integration that breaks, the person who asks how to do something in it. At enterprise scale this is absorbed by people whose job it is. At your scale it is absorbed by the founders, and founder attention is the input that determines whether the company finds a market before the money runs out.

**Exit cost**, which is the one that compounds silently. The data you put into a tool is hostage to that tool. Six months in, a free plan holding your customer records is not free; it is a bill you will pay later, at a price the vendor sets at the moment you have the least leverage. This is the single most predictable mistake in an early stack, and it is made almost exclusively with tools that cost nothing.

None of this kills a company directly. What it does is quietly convert the resource you cannot buy more of — your attention — into the resource you can. [CB Insights' March 2026 analysis of 431 failed VC-backed companies](https://www.cbinsights.com/research/report/startup-failure-reasons-top/) found 70% ran out of capital and 43% had poor product-market fit, and the report is explicit that running out of capital "is almost always the final cause of death, not the root problem." Tool sprawl is not on that list, and it never will be, because it is not a cause of death. It is one of the ways the time you needed to find product-market fit gets spent on something else.

## The four categories

The useful move is to stop asking which tool is best and start asking what kind of tool this is. The four categories carry genuinely different standards.

| Category | What it is | The standard it must clear | How to decide |
| --- | --- | --- | --- |
| **Runs your product** | Anything in the path of your product working for a customer: hosting, database, auth, payments, email delivery, error tracking. | Boring and reliable. Switching later is expensive and risky, so the cost of being wrong is high. | Pick the dullest, most widely used option, and do not optimise price. The margin is small; the downside is an outage you cannot debug. |
| **Runs your company** | Internal mechanics: documents, chat, project tracking, scheduling, expenses, password management. | Cheap and replaceable. Nobody buys your product because of these. | Take whatever comes bundled with what you already have. Upgrade only when a specific thing is broken, and name the broken thing out loud. |
| **Informs a decision** | Analytics, dashboards, surveys, data warehouses, attribution. | Trustworthy. A number you do not believe is worse than no number, because you will argue about the number instead of the decision. | Buy only once there is a decision waiting on the data. Before that it produces dashboards nobody reads and a false sense of rigour. |
| **Replaces work** | Anything sold as doing a job you would otherwise hire for: AI tooling, outsourced functions, automation platforms. | Does the whole job, not the easy 70% of it. | Define the output before you buy. If the tool produces something that still needs a person to finish it, you have bought a tool, not replaced work. See [AI tools for founders](/founder-playbook/build/ai-tools/). |

The reason this sorting earns its place is that it short-circuits the comparison trap. Two tools in the "runs your company" category can look dramatically different on a feature matrix and be identical in every way that matters to you, because the category's standard is *cheap and replaceable* and both clear it. Spending two days comparing them is the error, not picking the worse one.

Meanwhile the "replaces work" category is the one founders consistently judge by the wrong standard. A tool that does 70% of a job has not removed the job from your week; it has changed the job into reviewing and finishing someone else's attempt, which is frequently slower and always less pleasant than doing it yourself. This is not hypothetical. [METR's randomised controlled trial, published July 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), gave 16 experienced open-source developers 246 real tasks in repositories they already maintained, and found that when they were allowed AI tools they took **19% longer** — while believing afterwards that they had been sped up by 20%. The authors are careful to say their developers and repositories do not represent most software work. The transferable finding is not "AI is slow." It is that a tool's effect on your throughput and your *sense* of its effect can point in opposite directions, and only one of them pays your bills.

## Buy, build, or skip

With a category in hand, the decision is a short sequence. Run it in order and stop at the first yes.

**1. Can you skip it?** Not forever — for one quarter. Ask what specifically breaks if nothing fills this gap until the end of the quarter. Write the answer down. Most of the time the honest answer is "it stays mildly annoying," and mildly annoying is a price worth paying to keep your attention on the market.

Skipping is strictly better than buying when it is available, because it is free, instantly reversible, and costs no attention. It is also the option founders never consider, because the conversation always starts at "which tool" and the framing hides it.

**2. Can you buy it?** If something breaks, buy the boring option in the category. Cheapest plan that works, monthly billing, and make sure you can get your data out — check that the export exists before you put anything in. Annual contracts for a discount are a bet that you will still want this in twelve months, and at your stage you do not know what you will be doing in twelve months.

**3. Should you build it?** Only if both of these are true: the thing is part of your product or a genuine advantage, *and* you would still build it if no vendor existed. If it is internal, you are proposing to take on permanent maintenance of a system with one user, and the person paying that maintenance is the person who should be selling. See [shipping without engineers](/founder-playbook/build/shipping-without-engineers/) for what that maintenance actually consists of when there is no engineering team to absorb it.

The one strong exception is worth naming because it is real: when a bought tool constrains the thing that makes you different. If your product's whole claim is a kind of speed or a kind of control that no vendor offers, buying the vendor's version is not a saving, it is a decision to be ordinary at the one thing you are supposed to be exceptional at. That is a product decision and should be argued as one.

## What the stack actually looks like

The specific products change faster than anyone can maintain a page about, so this is by function, with the trigger that justifies it rather than a recommendation.

**Day one, before revenue.** A way to take money. A shared inbox or address customers can reach. A code host. A document store. A single place to see what customers do in the product. That is five functions. Everything bundled with the email and document suite you already pay for — chat, calendar, video, storage, basic forms — is good enough, and good enough here is the correct target.

**At first paying customers.** Add error tracking, because you now have users who will not tell you it broke; and something to track deals, which for your first ten is a spreadsheet and not a CRM. The spreadsheet is not a stopgap you will be embarrassed by. It is the right tool at ten rows, and a CRM at ten rows is a filing system for a decision you have not made yet. [Founder-led sales](/founder-playbook/sell/) covers what actually belongs in that sheet.

**At first employees.** Add payroll and password management. Both are in the "runs your company" category and both are cases where the free option is genuinely wrong: payroll because the failure mode is a tax penalty, password management because the failure mode is a breach. Note the pattern — *name the specific failure that justifies the spend*. If you cannot name one, you are at step 1 of the sequence, not step 2.

**At roughly ten people.** Now the sprawl problem is real rather than theoretical, because people other than you are buying things. The fix is not a procurement policy; it is one list. Every subscription, what it costs, when it renews, who owns it, and what breaks if it is cancelled. One page, reviewed quarterly, and the review is where the cancelling happens.

## Worked example

*A hypothetical composite, with made-up numbers chosen to be plausible rather than real. No company described here exists.*

A six-person seed-stage company, eighteen months in, $340,000 of annual recurring revenue, roughly fourteen months of runway. The founder decides to audit software spend after a card gets declined on a renewal nobody recognised.

The list, once assembled, has 31 active subscriptions costing $4,310 a month — about $8,600 per employee per year, which happens to sit just under that enterprise median and tells the founder precisely nothing useful. Sorting by category is where it gets informative.

*Runs the product:* 6 tools, $2,180 a month. Hosting, database, auth, payments, email delivery, error tracking. The audit changes nothing here. The founder's instinct is to shop the hosting bill, which is the largest single line. The right call is to leave it: the realistic saving is maybe $200 a month and the realistic cost of a bad migration is a weekend of downtime during the quarter they are trying to close three deals.

*Runs the company:* 14 tools, $1,190 a month. This is where the waste is. Two project trackers, because the engineers adopted one and the founder kept using another. Three places documents live. A standalone video tool duplicating one bundled into the suite they already pay for. A $90-a-month scheduling product used for eleven meetings last quarter. Cancelling the duplicates and the barely-used ones: nine tools gone, $520 a month saved, and — the part that matters more — four fewer places to look for a document.

*Informs a decision:* 7 tools, $640 a month. Including a $400-a-month analytics platform bought nine months ago that nobody has opened in seven. It was bought to answer a question about activation that got answered by watching four customer calls instead. Cancelled. The founder keeps the simple product analytics, because there is a live question about which onboarding step loses people.

*Replaces work:* 4 tools, $300 a month. Two AI products. One drafts outbound email and is genuinely load-bearing — it produces sendable first drafts and the founder edits rather than writes. One summarises sales calls, and when the founder checks, they have never once read a summary; they re-watch the clips instead. Cancelled.

Result: 31 tools to 19, $4,310 a month to $3,090, which is $14,640 a year — about three weeks of runway. Three weeks of runway is worth having and is not the headline. The headline is that the founder deleted eleven things that could generate a notification, a renewal, a question from a teammate, or a decision. That is the recovered resource, and it does not appear on any invoice.

The one thing the audit got wrong, discovered two months later: they cancelled the second project tracker and told the engineers to use the founder's. The engineers' tool was integrated with code review and the founder's was not, so three weeks of status updates stopped happening and the founder mistook silence for slow progress. Consolidating on the tool with no integration saved $40 a month and cost a genuine piece of visibility. Category discipline would have caught it — "runs your company" is cheap and replaceable, but *replaceable* means the replacement does the job the original did.

## Checklist

Paste this into the ticket or doc where the decision is being made.

- [ ] Which of the four categories is this: runs the product, runs the company, informs a decision, replaces work?
- [ ] What specifically breaks if we have nothing for this until the end of the quarter? Written down, in one sentence.
- [ ] What are we already paying for that does some of this? Checked against the subscription list, not from memory.
- [ ] Total first-year cost including the hours to evaluate, migrate, configure, and train — whose hours, named.
- [ ] Can we get our data out? Export confirmed to exist before anything is imported.
- [ ] Monthly billing, not annual, unless the discount exceeds the odds we stop using it.
- [ ] Kill date set, six weeks out, in a calendar belonging to a named person.
- [ ] Added to the one subscription list with cost, renewal date, owner, and what breaks if cancelled.
- [ ] If building: is this part of the product or a genuine advantage, and would we build it if no vendor existed? Both must be yes.

## Failure modes

**Symptom:** You cannot say what your total software spend is without checking.
**Cause:** No single list. Every subscription was a reasonable decision made in isolation, and isolation is the problem.
**Fix:** One page, built from the card statement rather than memory, because memory omits exactly the subscriptions that are pure waste.

**Symptom:** Two tools do the same job and both have users.
**Cause:** A tool was adopted bottom-up while the earlier one was never retired, usually because retiring it required a conversation nobody owned.
**Fix:** Consolidate, but verify the survivor does every job the other was actually doing — especially integrations, which is where the composite above got burned.

**Symptom:** A migration you started three weeks ago is still unfinished.
**Cause:** The attention cost was never priced. It was approved as a monthly fee.
**Fix:** Either finish it this week or revert. A half-migrated system is worse than either end state, and the half-state has a way of lasting a year.

**Symptom:** A vendor's price went up sharply at renewal and you paid it.
**Cause:** The data is hostage and leaving costs more than the increase. This was decided when you first put the data in, not at renewal.
**Fix:** Nothing, now. Prevention is checking the export path before the import, every time, which is why it is on the checklist.

**Symptom:** An AI tool is in the stack and you cannot say what it removed from your week.
**Cause:** It was bought against a feeling of productivity rather than a defined output. METR's result is the general case: perceived and actual effect can point opposite ways.
**Fix:** Name the output it must produce unassisted. If you still finish its work by hand, it belongs in "informs a decision" at best, and should be priced as such.

**Symptom:** An engineer has built an internal tool that only they can maintain.
**Cause:** Building felt cheaper than buying because the build cost was paid in time nobody tracked.
**Fix:** Decide explicitly whether it is product work or a liability. If it is a liability, replacing it with a bought tool is worth real money, and the engineer will not volunteer that.

## Sources

- [CB Insights, *The Top 12 Reasons Startups Fail*, 5 March 2026](https://www.cbinsights.com/research/report/startup-failure-reasons-top/) — 431 VC-backed companies that shut down since 2023, failure reasons identified for 385: ran out of capital 70%, poor product-market fit 43%, bad timing or macro 29%, unsustainable unit economics 19%. Percentages exceed 100% because companies cite multiple reasons.
- [Zylo, *2026 SaaS Management Index*](https://zylo.com/news/2026-saas-management-index) — median $9,455 software spend per employee per year, average portfolio of 305 applications, from more than 40 million licences and $75 billion under management. The sample is enterprise; it is cited here as a reason not to use per-employee benchmarks at startup scale, not as a target.
- [METR, *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity*, 10 July 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) — randomised controlled trial, 16 experienced developers, 246 issues averaging two hours, Cursor Pro with Claude 3.5/3.7 Sonnet. Developers took 19% longer with AI tools allowed, and estimated afterwards that they had been 20% faster. The authors do not claim the sample represents most software development.
