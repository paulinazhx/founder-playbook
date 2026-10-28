---
title: "Deciding What to Build Next"
description: "How to choose the next thing to build once the first version exists: whose requests to trust, which to refuse, and why the loudest input is rarely right."
pillar: build
updated: "2026-10-27"
keywords:
  - "how to prioritize a product roadmap"
  - "what to build next startup"
  - "feature prioritization early stage"
  - "product roadmap founder"
  - "customer feature requests"
howTo:
  - name: Separate the request from the problem behind it
    text: Treat every feature request as a report of a problem stated in the grammar of a solution. Ask what they would do with it and what they do today instead, because the problem is frequently solvable by something other than the thing asked for.
  - name: Weight a request by who is asking and what they have already done
    text: A request from a paying customer who has completed the core job is worth more than one from a prospect who has not bought, and both are worth more than an opinion from someone who will never use it. Record who asked, every time.
  - name: Count how many people are blocked, not how many mentioned it
    text: Ask whether its absence stops them using the product or merely annoys them. Blockers are rare and decisive; annoyances are common and accumulate into a roadmap nobody chose.
  - name: Reserve a fixed share of the time for work nobody requested
    text: Keep a standing allocation for reliability, speed and the paths that silently fail. Nobody files a request for the thing that quietly loses them, so a purely request-driven roadmap degrades in exactly the places that cause churn.
  - name: Decide by writing the refusal, not the approval
    text: For each thing you will not do, write the one sentence you will say to the next person who asks. If you cannot write it, you have not decided, and the request will be relitigated by whoever is loudest next week.
faq:
  - question: How do I decide what to build next?
    answer: Sort candidate work by whether its absence blocks someone from completing the core job, then by who is asking and what they have already done, then by what it costs. Reserve a fixed share of capacity for work nobody requested, because the failures that cause churn rarely arrive as requests.
  - question: Should I build what customers ask for?
    answer: Build against the problem they describe rather than the solution they propose. Customers are reliable about their own problems and unreliable about the right fix, because they can only propose things they can imagine. Ask what they would do with the feature and what they do today, and the underlying problem usually has a cheaper answer.
  - question: How do I say no to a feature request?
    answer: Say it plainly, give the reason, and say what you are doing instead. A written refusal list makes this a lookup rather than an argument you lose in the room, and buyers trust a founder who declines more than one who promises everything. Volunteering a limitation is cheaper than having it discovered later.
  - question: Who should I listen to about the roadmap?
    answer: Paying customers who have completed the core job, weighted above prospects, weighted above anyone who will not use it. An investor's product opinion is one data point from someone who is not the buyer, and the most expensive roadmaps are assembled from the opinions of people with the most authority rather than the most exposure.
  - question: How much of the roadmap should be unrequested work?
    answer: Enough that reliability, speed and the quiet failure paths get attention, which in practice means a standing allocation rather than whatever is left over. Nobody files a ticket for the export that silently truncates, and that is precisely the class of defect that loses customers without telling you why.
relatedGuides:
  - build/metrics-that-matter
  - build/scoping-v1
  - sell/discovery-and-demos
---

## TL;DR

- A feature request is **a problem described in the grammar of a solution**. Customers are reliable about their problems and unreliable about the fix, because they can only propose what they can imagine.
- Two questions dissolve most of a request backlog: **what would you do with it**, and **would its absence stop you buying or using this?** Blockers are rare and decisive. Annoyances are common and accumulate into a roadmap nobody chose.
- Weight by **who is asking and what they have already done**. A paying customer who finished the core job outranks a prospect who has not bought, who outranks anyone who will never use it — including investors.
- Reserve a **fixed share of capacity for work nobody requested**: reliability, speed, the paths that fail silently. Nobody files a ticket for the export that quietly truncates, and that is the class of defect that loses customers without telling you why.
- Decide by **writing the refusal**, not the approval. If you cannot write the sentence you will say to the next person who asks, you have not decided — and the request comes back next week via whoever is loudest.

## Who this is for

The first version exists, people are using it, and requests are arriving faster than you can build. You have a list, it is growing, and you are choosing from it mostly by recency and volume.

Skip this if the first version does not exist yet — that is [scoping a first version](/founder-playbook/build/scoping-v1/), and the discipline there is different: you are deciding what to refuse before anyone has asked. Skip it too if nobody is asking for anything, which is not a prioritisation problem but a usage problem.

## The problem

Request-driven roadmaps fail in a way that takes about a year to become visible, which is why it keeps happening.

The mechanism: requests arrive, each with a plausible case and a named human attached. You build the ones that come up most. Each decision is defensible. After a year the product has forty features, each requested by someone, and three things are true at once. The product is harder to explain than it was. The core path has not improved. And your churn is concentrated among customers who never asked for anything, because the quiet failures nobody filed a ticket about are the ones that lose people.

Three distinct distortions produce that outcome.

**Requests over-represent the articulate and the engaged.** The customers who file requests are the ones who like you enough to bother. The ones about to leave do not file requests; they stop logging in. So the input stream is systematically biased toward people who are already staying, about improvements they would enjoy, and silent about the reasons anyone leaves.

**Requests are solutions, and solutions are limited by the requester's imagination.** A customer asks for a CSV export. What they want is yesterday's numbers in their board pack. An export is one answer. A scheduled email is another, cheaper one that does not require them to remember. Building the export satisfies the request and leaves the problem half-solved, and you will not find out, because they asked for an export and got one.

**The loudest input wins, and loudness tracks authority rather than exposure.** An investor's offhand product remark, a large prospect's wish list, a co-founder's hobby horse. The most expensive roadmaps are assembled from the opinions of people with the most authority rather than the most contact with the problem.

Underneath all three is the thing this guide is really about: **the absence of a written refusal**. [Scoping a first version](/founder-playbook/build/scoping-v1/) argues that the refusal list is what makes scope decidable, and the same is true after launch. Without one, every request is argued from first principles, every argument is winnable by whoever is most insistent, and your roadmap becomes a record of who pushed hardest.

## The two questions

Before a request goes on any list, two questions. They are both asked of the person who requested it, and they take about ninety seconds.

**"What would you do with it?"** This surfaces the problem behind the solution. The answer is frequently a different and cheaper problem. It also reveals the request that has no use behind it at all — the feature someone saw elsewhere and assumed they should want.

**"If we never built it, would that stop you?"** This separates blockers from preferences. Most founders are astonished by the attrition rate on this question. A request that was presented as essential becomes "well, no, we'd work around it" about three times in four. Both answers are useful: a genuine blocker is now known to be one, and a preference is now known not to be.

The reason these work is that feature requests are socially shaped. A customer asking for something states it strongly because weak requests get ignored — that is rational behaviour on their part, and it means the stated strength carries no information. The two questions recover the information the grammar removed.

[Discovery calls](/founder-playbook/sell/discovery-and-demos/) covers the same pair applied during a sales conversation, where the stakes are higher because an unbuilt feature is being traded against a deal.

## Sorting the list

Four inputs, applied in order. Anything that fails the first is not prioritised, it is refused.

| Input | What to ask | Why in this position |
| --- | --- | --- |
| **Blocks the core job** | Does its absence stop someone completing the thing the product is for? | A user who cannot finish produces no evidence and no renewal. Nothing outranks this. |
| **Who is asking** | A paying customer who has completed the core job? A prospect who has not bought? Someone who will never use it? | Exposure to the problem, not authority, is what makes an opinion informative. |
| **How many are blocked** | Not how many mentioned it — how many are stopped by it. | Mentions scale with engagement. Blocks scale with the actual defect. |
| **What it costs** | Build, and then maintain forever. | A cheap thing that must be maintained forever is often more expensive than an expensive thing that is done. |

Two notes on using this.

**Count blocks, not mentions.** Mentions are a popularity measure of your most engaged users. Nine people mentioning a nice-to-have is not more important than two people blocked from finishing. This single substitution fixes most badly-ordered backlogs.

**"Who is asking" is not seniority.** The ranking is by exposure. A support person at a customer who uses the product eight hours a day knows more about what is wrong than their CEO who signed the contract — and more than your investor. Record who asked, every time, because six months later you will remember the request and not its source.

## The share nobody requested

A purely request-driven roadmap degrades in exactly the places that cause churn, because the failures that lose customers are the ones nobody files a ticket about.

The categories, which recur across every early product:

**Things that fail silently.** An import that drops malformed rows without saying so. An export that truncates. A sync that stops and does not alert. The customer does not file a request; they find a wrong number, lose confidence, and leave. [Churn and renewals](/founder-playbook/sell/churn-and-renewals/) covers why this class is so disproportionately represented in early churn.

**Slowness that is tolerated.** Nobody requests "make it faster" until it is unbearable. They just use it less.

**The second-visit experience.** First-run gets attention because founders demo it constantly. The fourth week, when the novelty is gone and the real workflow is in place, gets none.

**The parts only you touch.** Manual steps you do by hand for customers. Correct early — [scoping a first version](/founder-playbook/build/scoping-v1/) argues for them explicitly — and they have an expiry date nobody announces. Watch for the ones that have become a weekly tax.

So: a standing allocation, decided in advance rather than taken from what is left over. A quarter is a reasonable default. It will feel wrong, because the requested work has named humans attached and this does not. The named humans are the ones already staying.

## Writing the refusal

The decision is not made when you put something on the list. It is made when you can say no to it out loud.

For each thing you are not doing, write one sentence: what you are not doing, and what you would say to the next person who asks. "We don't do multi-currency, and we're not planning to this year — if you bill in more than one currency we're not the right tool for you yet."

Three things this buys.

It makes the next conversation a lookup instead of an argument. The sales version of this is the [refusal list](/founder-playbook/build/scoping-v1/), and it is the same artifact.

It tells you whether you have actually decided. A refusal you cannot write is a deferral wearing a decision's clothes, and deferrals come back.

It builds credibility with buyers, counter-intuitively but reliably. Volunteering a limitation is among the cheapest trust available to an unknown company, and the alternative is the limitation being discovered in week three, when it reads as concealment.

What to do when a refusal is wrong: change it, say so, and say what changed. "We said no to this in March. Three customers have since been blocked by it, so it is next." That is a stronger position than never having refused.

## Worked example

*A hypothetical composite. Numbers are invented to be plausible; no company described here exists.*

A three-person company, product that reconciles supplier invoices, 24 paying customers, about £31,000 of monthly recurring revenue. The request list has 58 items. The founders pick from it weekly by "what came up most."

**The pass.** They go through all 58 asking the two questions of whoever requested it. Twenty-two requesters respond.

Of those 22: six say they would be blocked without it. Sixteen say they would work around it. Four of the sixteen, when asked what they would do with it, describe a problem the product already solves by another route — meaning the request was a discoverability failure, not a feature gap. Those four get a documentation fix and a tooltip, total cost one afternoon.

The remaining 36 items have no requester they can reach, because nobody recorded who asked. They cannot be assessed at all. The founders delete 29 of them and keep seven they independently believe in. That deletion is uncomfortable and takes an hour of arguing.

**The six blockers, sorted.** Three come from paying customers who use the product daily. Two come from prospects who have not bought. One comes from an investor who relayed it from a portfolio company that is not a customer.

They build the three. Of the two from prospects, one is on the refusal list already — a full ERP integration — and gets a written refusal. The other is small and gets built. The investor-relayed one is recorded and not built, which takes a short and slightly awkward email.

**The unrequested allocation.** They reserve one week in four. The first week goes on something nobody had asked for: their invoice import silently skipped rows with a date it could not parse. Checking the logs, this had affected **nine of twenty-four customers** at least once. Not one had filed a request. Two had emailed support asking why a total looked wrong, been given a manual correction, and the cause was never traced.

That is the finding that justifies the whole exercise. The most-requested item on the original list of 58 — a dark mode — had seven mentions. The silent import failure had zero mentions and nine affected customers.

**Six months on.** Request list is 19 items, each with a named requester and a blocker-or-preference tag. Churn over the period: one account, which left for a reason unrelated to the product. The founders attribute most of that to the unrequested week, and they cannot prove it, which they say plainly when asked.

**What they got wrong.** For the first two months they let the unrequested week slip whenever a customer escalation landed in it, which was most weeks. It only stuck once they moved it to the first week of the month rather than the last, so it happened before the month filled up — the same mechanic as pre-booking the duties in [the CEO job](/founder-playbook/run/).

## Checklist

For each request:

- [ ] Who asked, recorded at the time. A request with no attributable source cannot be assessed.
- [ ] "What would you do with it?" asked, and the answer written in their words.
- [ ] "Would its absence stop you?" asked, and the request tagged blocker or preference.
- [ ] Checked whether the underlying problem is already solved by another route — a discoverability fix is far cheaper than a feature.

For the list:

- [ ] Sorted by blocks-the-core-job first, then requester exposure, then number blocked, then cost.
- [ ] Counting blocks, not mentions.
- [ ] Cost includes maintenance forever, not just the build.
- [ ] A standing allocation — a quarter is a reasonable default — for work nobody requested, scheduled at the start of the period rather than the end.
- [ ] Silent-failure paths reviewed against logs at least quarterly, because they generate no requests.

For every refusal:

- [ ] One written sentence: what we are not doing, and what we say to the next person who asks.
- [ ] Added to the refusal list the whole team can read.
- [ ] Revisited when the evidence changes, with the change stated out loud.

## Failure modes

**Symptom:** The roadmap is full of things built on request that nobody uses.
**Cause:** Requests were taken as specifications rather than as reports of problems.
**Fix:** Ask the two questions retroactively on the next ten. The attrition rate is the argument.

**Symptom:** Churn is concentrated among customers who never requested anything.
**Cause:** A request-driven roadmap is blind to the failures that cause churn, because the people leaving do not file tickets.
**Fix:** The unrequested allocation, pointed first at anything that fails silently. Check the logs, not the request list.

**Symptom:** The same request is argued about every few weeks.
**Cause:** It was deferred, not refused. There is no written sentence to point at.
**Fix:** Write the refusal or build the thing. Deferral is the expensive third option.

**Symptom:** A large prospect's wish list has become the roadmap.
**Cause:** Weighting by deal size rather than by exposure to the problem.
**Fix:** Check whether existing customers who use the product daily want any of it. If not, you are being paid to build someone's internal tool, which is a business you may not want.

**Symptom:** You cannot tell who asked for the things on your list.
**Cause:** Nobody recorded it. The list is now unassessable.
**Fix:** Delete what you cannot attribute, keep only what you independently believe, and record the requester from now on.

**Symptom:** The unrequested week keeps getting eaten.
**Cause:** It is scheduled at the end of the period, where it competes with everything urgent.
**Fix:** Move it to the start. Work scheduled before the period fills up actually happens.

## Sources

- [Google Cloud DORA, *The ROI of AI-assisted Software Development report*](https://cloud.google.com/resources/content/dora-roi-of-ai-assisted-software-development) — the verification tax, cited here for the principle that work whose correctness is expensive to establish costs more than its build time suggests, which is the argument for pricing maintenance into every prioritisation decision.
- [First Round Review, *How Superhuman Built an Engine to Find Product/Market Fit*, 2018](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/) — Rahul Vohra's method of segmenting on the users who already love the product and asking what holds back those who nearly do, which is the disciplined version of weighting requests by requester. Sample is a consumer-and-prosumer email client.
- A note on what is **not** cited: the prioritisation frameworks in wide circulation — scoring models that multiply reach by impact by confidence and divide by effort — produce a number from four estimates, and at this scale all four are guesses. A guess laundered through arithmetic is harder to argue with than a guess, which is the opposite of what a decision process should do. This guide gives an ordering rule and a refusal practice instead of a score.
