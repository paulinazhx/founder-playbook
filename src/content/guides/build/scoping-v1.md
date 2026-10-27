---
title: "Scoping a First Version: What It Refuses to Do"
description: "How to decide what the first version of a product does, what it deliberately refuses, and how to tell a cut that sharpens the product from one that guts it."
pillar: build
updated: "2026-10-27"
keywords:
  - "how to scope an mvp"
  - "minimum viable product scope"
  - "what to build first startup"
  - "mvp feature cuts"
  - "first version product scope"
relatedGuides:
  - build/ai-tools
  - build/shipping-without-engineers
  - sell/discovery-and-demos
howTo:
  - name: Write the one job the first version does, as a sentence with a person in it
    text: Name a specific person, the thing they are trying to get done, and the moment they would reach for your product. A scope defined by features expands. A scope defined by one person finishing one job holds.
  - name: Write the refusal list before the feature list
    text: List what the first version will not do and will not support, explicitly and in public. The refusal list is what makes the feature list decidable, because every later request is checked against it rather than argued from scratch.
  - name: Classify every cut by which of four things it removes
    text: Surface, segment, step, or scale. Cutting surface and scale almost always sharpens the product. Cutting a step in the core job almost always guts it, because the user cannot finish and so cannot tell you anything useful.
  - name: Keep the path end to end even when it is ugly
    text: A user has to be able to start and finish without you intervening. A beautiful product that stops two-thirds of the way through generates opinions instead of evidence, and opinions are what you already had.
  - name: Decide what evidence would change the scope, before you ship
    text: Name the specific signal that would make you add something or cut something further. Without it, the first version's feedback becomes an argument about taste among the people who built it.
faq:
  - question: What should a minimum viable product actually include?
    answer: One person's whole job, end to end, and nothing else. The common failure is building a broad, shallow product that touches five jobs and completes none, because breadth feels safer than commitment. A first version that completes one job badly teaches you more than one that half-does five, because only the former produces a user who finished.
  - question: How do I know if I am cutting too much?
    answer: Ask whether a user can still start and finish without a human stepping in. If they can, you have not cut too much no matter how embarrassing the product looks. If they cannot, you have, regardless of how much is built — an unfinishable product returns opinions rather than evidence.
  - question: How long should a first version take?
    answer: Short enough that you still believe the premise when it ships, which in practice is four to twelve weeks. The real constraint is not engineering capacity, it is that your conviction about the problem decays, and a six-month build means shipping something you no longer fully believe to a market that has moved.
  - question: Should I build for one customer or for a market?
    answer: Build for one, specifically and by name, and pick that one because they are a credible representative of many. Generalising from zero users produces a product shaped by imagination. Generalising from one real user who finished the job produces a product shaped by something true, even if it is narrow.
  - question: How do I measure whether the first version worked?
    answer: Did someone complete the job without help, and would they be upset if it went away. The second half is Sean Ellis's survey question, popularised at scale by Superhuman, with 40 percent answering "very disappointed" as the working benchmark. At ten users that number is not statistically meaningful and is still the right question to ask, because the answers tell you which users to listen to.
---

## TL;DR

- Scope is not a size, it is a **refusal list**. Write what the first version will not do before you write what it will, and the feature arguments stop being arguments.
- The unit of a first version is **one person finishing one job**, end to end, without you intervening. Not five jobs at 60%. A user who finished tells you something true; a user who got stuck tells you what they imagine they would have wanted.
- There are four kinds of cut and only two are safe. Cut **surface** (how many ways in) and **scale** (how many users, how much data) freely. Cut **segment** (who it is for) deliberately and narrowly. Almost never cut a **step** in the core job — that is the cut that turns a product into a demo.
- Ship before your conviction decays. Four to twelve weeks is not a productivity target, it is a shelf-life observation: a six-month first version gets shipped by people who no longer quite believe it.
- Decide in advance what evidence would change the scope. Without that, launch feedback becomes a taste argument among the people who built the thing, and the loudest taste wins.

## Who this is for

You have a problem you believe in and a list of things the product should do that keeps growing. Every item on it has a reason. You are trying to work out where the line goes, and every time you draw it someone — often you — produces a plausible argument for moving it ten feet out.

Skip this if you already have users completing the core job and the question is which of three validated improvements to do next. That is prioritisation, and it is a much easier problem because you have evidence. Skip it too if your constraint is "I cannot build any of this" — that is [shipping without engineers](/build/shipping-without-engineers/).

## The problem

Scope expands for a reason that has nothing to do with discipline, and understanding the reason is what lets you resist it.

Every feature you add to a first version reduces a specific, felt fear. The fear is not "the product will be too small." It is **"I will show this to someone and they will say it does not do X, and I will have no answer."** Each addition buys an answer to one anticipated objection. That is why scope grows from a hundred small reasonable decisions rather than one bad one, and why "just be disciplined" does not work as advice. You are not being undisciplined. You are buying insurance against humiliation, one feature at a time, and the premiums are paid in weeks.

The trade you are actually making is worse than it looks. Each week of additional scope costs you a week of calendar time *and* a week of your conviction. Conviction has a shelf life. Founders who build for six months routinely ship something they have privately stopped believing in, and then interpret the tepid response as a market signal when it is partly a conviction signal.

The cost shows up in the failure data, though you have to read it carefully. [CB Insights' March 2026 analysis of 431 VC-backed companies](https://www.cbinsights.com/research/report/startup-failure-reasons-top/) that shut down since 2023 found poor product-market fit cited in **43%** of cases, second only to running out of capital at 70% — which the report itself describes as "almost always the final cause of death, not the root problem." Over-scoping does not appear as a category and should not. It is one of the mechanisms by which a company spends its capital before it learns whether the fit was there.

And there is a second-order cost that is less discussed and more annoying. A broad, shallow first version produces **uninterpretable feedback**. If the product touches five jobs and completes none, every user stops at a different place for a different reason, and you get five anecdotes instead of one signal. You cannot tell whether the premise is wrong or whether the fourth screen is confusing. A narrow product that completes one job produces feedback you can act on, because every user hit the same path.

## The refusal list

The move that makes scope decidable is to write what the product refuses to do, before and more carefully than what it does.

A refusal list is specific, public, and dated. Not "we'll keep it simple" — that is a sentiment and sentiments do not survive a sales call. Something closer to:

> The first version supports one user per account, no teams or permissions. It works only with Postgres, not MySQL or anything else. It has no mobile app and no mobile layout. There is no API. Data import is a CSV you email us and we load by hand. Billing is an invoice we send manually. If you need any of the above, we are not for you yet, and we will say so.

This does four things at once. It makes every future request a comparison against a written position rather than an argument from first principles. It tells you what to say on a sales call, confidently, which is the thing the fear was about. It tells a prospect whether to disqualify themselves early, which is a favour to both of you — see [discovery calls](/sell/discovery-and-demos/) for why early disqualification is a feature. And it makes the one thing you *are* doing legible, to you and everyone else.

The refusal list is also where you discover you do not actually know who the product is for. If you cannot write "we are not for you yet" without flinching, the segment is not defined, and no amount of feature work will fix that.

## Four kinds of cut

Not all cuts are equal, and treating them as interchangeable is how founders either over-build or gut the thing. Every candidate cut removes one of four things.

| Cut | What it removes | Effect | Verdict |
| --- | --- | --- | --- |
| **Surface** | Ways in and ways to do the same thing: a second platform, a settings page, keyboard shortcuts, an alternative flow, polish. | The job still completes. Fewer users are *comfortable*, none are blocked. | **Cut freely.** This is where most of your saved weeks come from. |
| **Scale** | Capacity: concurrency, data volume, performance, reliability beyond "works when watched", automation of operations. | The job completes for the first users. Breaks only at a size you do not have. | **Cut freely.** Do things manually. Manual operations at ten customers is a research method, not debt. |
| **Segment** | Who it is for: a customer size, an industry, a geography, a compliance regime. | Fewer people can use it at all. Those who can, can fully. | **Cut deliberately.** Narrow on purpose, and write it on the refusal list. Narrow is cheap; vague is fatal. |
| **Step** | A stage of the core job: the part that imports the data, or produces the output, or lets them act on it. | **The job cannot complete.** Users stop mid-path and you learn nothing you did not already know. | **Almost never cut.** If you must, replace the step with a human doing it by hand rather than removing it. |

The distinction that does the real work is **step versus scale**, because founders conflate them constantly.

"We will not build data import" is cutting a step. The user arrives, has nothing to work with, and leaves. You learn that onboarding is hard, which you knew.

"We will import their data by hand, over email, within one business day" is cutting scale. The user arrives, has their data, finishes the job, and tells you whether the output was worth anything. It is unglamorous, does not scale past about twenty customers, and that is correct — you have twenty customers at most, and doing it by hand is how you find out what the import actually needs to handle before you automate the wrong thing.

Nearly every step you are tempted to cut can be converted into a scale cut by putting a human behind it. That conversion is the single most useful technique on this page.

## Writing the scope

In order, and the order matters.

**1. One sentence with a person in it.** Not "a tool for managing X" but "a support lead at a 30-to-80-person software company, who today answers the same billing question nine times a week, uses this to answer it once." The sentence names a person, a current behaviour, and the moment of reaching for you. If any of the three is missing, you are describing a category, not a product.

**2. The path, as steps.** Write the sequence from "arrives with nothing" to "has the thing they wanted." Usually four to seven steps. This is the spine and nothing in it can be cut — only automated or done by hand.

**3. The refusal list.** Everything not on the spine. Be specific enough to be uncomfortable.

**4. What is manual.** Go down the spine and mark every step you will do by hand. Aim for at least one, and be suspicious if there are none: it usually means you have scoped an automation project rather than a first version.

**5. The evidence that changes the plan.** Two signals, written down: what would make you widen the refusal list, and what would make you narrow the segment further. For example — "if three of our first ten users ask for teams before finishing the core job, teams moves onto the spine" and "if the support leads convert but the ops managers do not, we drop ops managers from the segment."

That is the whole scope. It fits on one page. If it does not fit on one page, the segment is too broad, which is the diagnosis roughly nine times in ten.

## How you know it worked

Two questions, in order.

**Did anyone complete the job without you helping?** This is binary and unflattering and the only gate that matters early. If the answer is no, nothing else is interpretable, because every other signal is a report on the obstacle rather than the product.

**Would they be upset if it went away?** Sean Ellis's survey question — "how would you feel if you could no longer use this product?" — with the proportion answering *very disappointed* as the measure. Ellis's benchmark, from surveying close to a hundred startups, was **40%**. The best-documented application is Rahul Vohra's at Superhuman, written up in [First Round Review in 2018](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/): Superhuman measured 22%, built a process around segmenting the users who already loved the product and understanding what held back the ones who nearly did, and moved the score to 58%.

Two honest caveats, because this number gets cargo-culted. At ten users, 40% is four people and carries no statistical weight whatsoever. And Superhuman's run at it was an email client sold to individuals, which is a very different shape from enterprise software with procurement cycles. What transfers is not the threshold. It is the method: ask the question, then **ignore the average and read the segments**. The useful output is which kind of user says *very disappointed*, because that tells you who the product is actually for — which, nine times out of ten, is narrower than the segment you wrote in step 1.

## Worked example

*A hypothetical composite. Numbers are invented to be plausible; no company described here exists.*

Two founders, one technical, building a tool that reconciles invoices against bank transactions for small accounting firms. Their initial feature list has 34 items and their estimate is five months.

They write the one-sentence scope: "A bookkeeper at a 3-to-10-person accounting firm, who today reconciles one client's month in a spreadsheet over about four hours, uses this to do it in under one." Specific person, current behaviour, moment of reaching for it.

The spine comes out as five steps: get the invoices in, get the transactions in, match them, show the exceptions, export a reconciled ledger.

Now the cuts, classified.

*Surface:* no settings, no multi-user, no dark mode, no dashboard, one import format only, no undo history. Nine items gone. Nothing on the spine touched.

*Scale:* no API, no automatic bank connections, no handling files over 2,000 rows, no performance work, and — the important one — **invoice import is done by hand**. The customer emails a folder; a founder runs a script and loads it within one business day. Eleven items gone.

*Segment:* UK firms only, Xero only, no VAT edge cases beyond standard rate. Written on the refusal list in plain language. Six items gone.

*Step:* they are tempted to cut "show the exceptions," because matching is the clever part and exceptions are tedious. They catch it: without exceptions the bookkeeper cannot finish — they get a pile of matches and no way to deal with the 8% that did not match, so they go back to the spreadsheet. The step stays, in its ugliest possible form: a flat list, no grouping, no bulk actions.

Remaining scope: 8 items, five weeks. They ship to four firms.

Results. Three of the four complete a month's reconciliation. The fourth stalls, because their invoices arrive as scanned PDFs rather than digital files — a segment discovery, not a feature gap, and it goes on the refusal list that afternoon. Of the three who finished, time dropped from about four hours to seventy minutes. On the Ellis question, two of four say *very disappointed*. Fifty percent, which is meaningless at n=4 and still worth reading: both are firms with more than six clients on Xero. The single-client-heavy firm is indifferent.

That segment read is the whole return on the exercise. The scope sentence said "3-to-10-person firms." The evidence says "firms with six or more Xero clients," which is a different and better-defined market, and it was visible at four users precisely because all four walked the same path.

The manual import turned out to be the most valuable cut. Running it by hand for six weeks, the founders saw that 60% of files needed one specific correction nobody had anticipated — duplicate invoice numbers across clients. Had they automated import in month one, they would have automated it wrong, and the bug would have surfaced as silent mis-matching at a customer rather than as an obvious annoyance at their own desk.

## Checklist

- [ ] One sentence naming a specific person, their current behaviour, and the moment they reach for the product.
- [ ] The spine written as four to seven steps from "arrives with nothing" to "has what they wanted."
- [ ] A refusal list specific enough that you could read it aloud on a sales call.
- [ ] Every candidate cut classified: surface, scale, segment, or step.
- [ ] Zero step cuts. Any step you wanted to remove converted to "a human does this by hand."
- [ ] At least one spine step marked manual.
- [ ] Ship date inside twelve weeks. If not, cut segment, not steps.
- [ ] Two written signals: what widens the refusal list, what narrows the segment.
- [ ] A plan to ask the Ellis question and read it **by segment**, not as an average.
- [ ] Someone other than a founder has read the scope page and can say what the product refuses to do.

## Failure modes

**Symptom:** Users stop at different places for different reasons and the feedback does not add up.
**Cause:** The product is broad and shallow — several jobs, none completed.
**Fix:** Pick the one job with the most evidence behind it and switch the others off. Not deprioritised: off, so nobody starts down them.

**Symptom:** Launch feedback has become an argument about taste among the founders.
**Cause:** No evidence was named in advance, so every interpretation is admissible.
**Fix:** Retroactively write the two signals and go get the data for them. Slower than deciding upfront, better than continuing to argue.

**Symptom:** The build has slipped twice and the founders have stopped describing the product with energy.
**Cause:** Conviction decay. The scope outlived the belief that produced it.
**Fix:** Cut to the spine and ship in two weeks, even badly. A shipped narrow version restores conviction or kills the premise, and both outcomes are worth more than a third slip.

**Symptom:** Every sales call surfaces a blocker and each one gets built.
**Cause:** No refusal list, so each objection is relitigated from scratch and the person in the room wins.
**Fix:** Write the list, then say "not yet, and here is who we are for" out loud. You will lose deals. The ones you lose were going to be the expensive ones.

**Symptom:** You automated something in week two that you have since rewritten twice.
**Cause:** A step was automated before it was understood. You built the general case from imagination.
**Fix:** Do it by hand until the shape of the exceptions is boring to you. Then automate the boring thing.

**Symptom:** The first version is live and nobody has finished the core job.
**Cause:** A step was cut, or the segment is wrong.
**Fix:** Watch three users attempt it, screen-shared, without helping. The stopping point is almost always identical across all three, and it is almost never where the founders guessed.

## Sources

- [CB Insights, *The Top 12 Reasons Startups Fail*, 5 March 2026](https://www.cbinsights.com/research/report/startup-failure-reasons-top/) — 431 VC-backed companies that shut down since 2023, reasons identified for 385: ran out of capital 70%, poor product-market fit 43%, bad timing or macro 29%, unsustainable unit economics 19%. Percentages exceed 100% because companies cite multiple causes, and the report notes capital exhaustion is usually the final cause rather than the root one.
- [First Round Review, *How Superhuman Built an Engine to Find Product/Market Fit*, 2018](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/) — Rahul Vohra's account of applying Sean Ellis's "how would you feel if you could no longer use this product" survey, the 40% *very disappointed* benchmark Ellis derived from surveying close to a hundred startups, and Superhuman's move from 22% to 58% by segmenting on the users who already loved the product. Sample is a consumer-and-prosumer email client; the segmentation method transfers more readily than the threshold.
