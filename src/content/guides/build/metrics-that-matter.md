---
title: "Startup Metrics That Change a Decision"
description: "Which numbers are worth tracking before you have scale, which ones flatter you, and how to tell a metric that changes a decision from one that just moves."
pillar: build
updated: "2026-10-27"
keywords:
  - "startup metrics that matter"
  - "early stage saas metrics"
  - "vanity metrics"
  - "what to measure startup"
  - "product metrics for founders"
howTo:
  - name: Write the decision before the metric
    text: Name the decision you would make differently depending on this number. A metric with no decision attached is a dashboard tile, and dashboard tiles cost attention every week while changing nothing.
  - name: Count things, not rates, until the counts are large
    text: At thirty customers a percentage hides the arithmetic and invents precision that is not there. Report four of thirty rather than 13.3 percent, because the first is checkable and the second gets compared to benchmarks it cannot support.
  - name: Define each metric in one sentence and never move it silently
    text: State what counts as a customer, as active, as revenue. A definition that drifts while its label stays the same is the most common way a founder misleads themselves and then an investor.
  - name: Keep a cohort view of retention from the first month
    text: Group customers by the month they joined and track each group separately. An aggregate retention number at a growing company hides the thing you need to know, which is whether recent customers behave better than older ones.
  - name: Delete any metric nobody has acted on in a quarter
    text: Go through the list and remove every number that has not changed a decision. What remains is your actual instrument panel, and it is usually three or four things.
faq:
  - question: What metrics should an early-stage startup track?
    answer: Three or four, each attached to a decision you would make differently depending on it. For most early B2B companies that is revenue with a stated definition, the count of customers who completed the core job this month, retention by joining cohort, and runway. Everything else is worth checking occasionally and not worth a dashboard.
  - question: What is a vanity metric?
    answer: Any number that reliably goes up and never changes what you do. Signups, pageviews, total registered users and cumulative anything qualify, because they cannot go down and so cannot carry information. The test is not whether a metric sounds impressive but whether a bad reading would cause you to act.
  - question: Should I use percentages at small numbers?
    answer: No. Report the counts. At thirty customers one churned account moves your rate by more than three points, so a percentage invents precision and invites comparison with benchmarks drawn from companies hundreds of times larger. Say four of thirty and the reader can do the arithmetic themselves.
  - question: How do I measure retention with only a few months of data?
    answer: By cohort, from the first month, even when each cohort is three customers. The absolute numbers will not be meaningful for a year, but the shape will be visible much sooner, and starting the practice late means you can never reconstruct the early cohorts.
  - question: Why do my metrics disagree with each other?
    answer: Almost always because a definition is doing different work in two places — one number counts trials as customers and the other does not, or one includes setup fees in revenue. Write one definitions line per metric and apply it everywhere, including retroactively in anything you have already sent.
relatedGuides:
  - build/what-to-build-next
  - sell/churn-and-renewals
  - run/runway
---

## TL;DR

- A metric earns its place only if you can name **the decision you would make differently** depending on it. Everything else is a dashboard tile that costs attention weekly and changes nothing.
- **Count things, not rates,** until the counts are large. At thirty customers a percentage invents precision and invites comparison with benchmarks from companies hundreds of times your size. "Four of thirty" is checkable; "13.3%" is not.
- Vanity metrics are not the impressive-sounding ones. They are the ones that **cannot go down** — signups, pageviews, cumulative anything. A number that can only rise carries no information.
- **Cohort retention from month one**, even at three customers per cohort. The absolute numbers mean little for a year; the shape shows up far sooner, and you cannot reconstruct early cohorts later.
- One **written definition per metric**, applied everywhere. A definition that drifts while its label stays the same is the most common way founders mislead themselves first and investors second.

## Who this is for

You have customers and a growing suspicion that your numbers are either not telling you anything or telling you something you cannot act on. Possibly someone asked for your metrics and you found that two of your own documents disagreed.

Skip this if you are pre-customers — the only number that matters is whether anyone completed the core job, which is covered in [scoping a first version](/founder-playbook/build/scoping-v1/). Skip it too if you have a data team; your problem is governance, not selection.

## The problem

Measurement fails at small scale in a way that measurement advice rarely addresses, because almost all of that advice was written for companies with enough volume for statistics to work.

Here is the mechanism. You read that good companies track retention, activation, payback and net revenue retention. You build a dashboard with eleven tiles. It takes a week. For the first fortnight you look at it daily, and then you notice that the tiles move and you never do anything about it. Activation went from 61% to 54%. Is that bad? You have forty users, so it is three people, one of whom was a friend testing on a spare account. By month three you have stopped opening the dashboard, and you now have both the maintenance cost of eleven metrics and none of the benefit.

Three distinct failures are tangled together there, and they need separating.

**The rate problem.** Percentages at small n are noise amplifiers. With thirty customers, every single one is 3.3 points. A churn rate that moved from 3% to 10% sounds like a crisis and is two accounts, one of which was always a bad fit. Reporting the rate rather than the count does not just lose information, it actively invites the wrong reaction — and worse, it invites comparison against published benchmarks drawn from samples where a point of churn is four hundred customers.

**The no-decision problem.** Most tracked metrics have no decision attached. If activation drops, what do you do? If you cannot answer that in advance, the number is not an instrument, it is decoration. This is the test that removes most of a typical dashboard.

**The definition problem.** This one is quiet and expensive. "Customers" means paying accounts in one document and includes trials in another. Revenue includes a setup fee in the investor update and excludes it in the model. Nobody lied; nobody wrote a definition down. The cost arrives during a raise, when a diligence process finds the discrepancy — the exact failure mode described in [raising a first round](/founder-playbook/run/fundraising/), where a metric that shifts between the deck and the data room reads as either sloppiness or spin, and the two cost the same.

Underneath all three is the thing that makes bad measurement dangerous rather than merely wasteful. A number you half-believe is worse than no number, because arguments move from the decision to the data. You spend the meeting litigating whether activation is really down instead of deciding what to build.

## The test: which decision does this change?

One question, applied to every candidate metric: **what would I do differently if this number were much worse, or much better?**

| Metric | The decision it changes | Keep it? |
| --- | --- | --- |
| Revenue, with a stated definition | Runway, hiring, whether to raise. See [extending runway](/founder-playbook/run/runway/). | **Yes.** The constraint everything else sits inside. |
| Customers who completed the core job this month | Whether the product works for the people using it; what to fix next. | **Yes.** The honest activation metric at small scale. |
| Retention by joining cohort | Whether to keep selling to this segment, or narrow. See [churn and renewals](/founder-playbook/sell/churn-and-renewals/). | **Yes.** The only metric that tells you whether you have a business. |
| Runway in months | Every spending and hiring decision, and when a raise starts. | **Yes.** Four facts: cash, burn, months, trend. |
| Signups, pageviews, total users | Nothing. They cannot go down. | **No.** Cumulative counters are not instruments. |
| Net promoter score | Nothing, below a few hundred responses. | **No.** Ask the Ellis question instead and read it by segment. |
| Activation rate as a percentage | Nothing, at small n. The count might. | **Replace** with the count of people who finished. |
| Payback period, LTV:CAC | Nothing before you have a repeatable acquisition channel and a year of retention data. | **Not yet.** Computing these from three months of data produces confident fiction. |

The last row deserves emphasis because it is where sophisticated founders waste the most effort. Lifetime value requires knowing how long customers stay. If your oldest customer is nine months old, you do not know that, and any LTV you compute is an extrapolation from a curve you have seen one point of. Multiplying it against acquisition cost to produce a ratio makes it look like analysis. It is arithmetic performed on a guess, and it will be quoted back to you in a board meeting.

## Counts, not rates

The practical rule: until a single event moves your rate by less than one point, report counts.

That threshold is one hundred. Below a hundred customers, say "four of thirty-one accounts churned, and three of the four were single-location." Above it, rates start to carry information.

What you lose by reporting counts: comparability with benchmarks. This is a feature. Those benchmarks come from samples nothing like you, and the comparison produces false comfort or false alarm with equal ease — the same argument that [pricing](/founder-playbook/sell/pricing/) makes about published pricing medians.

What you gain: the reader can see the arithmetic, which means they can see the exceptions. "Four of thirty-one, three of them single-location" contains a segment finding. "13% churn" contains nothing.

## Cohorts, from the first month

The single highest-value practice on this page, and the one with a deadline: you cannot start it retroactively.

Group customers by the month they first paid. Track each group separately over time — how many are still paying at month 1, 3, 6, 12. At three customers a cohort this looks absurd. Do it anyway, because the question it answers is the one that decides whether you have a company: **are recent customers behaving better than older ones?**

An aggregate retention number at a growing company systematically hides this. If you are adding customers quickly, the aggregate is dominated by recent arrivals who have not had time to churn, and it looks healthy right up until growth slows. The cohort view shows the truth a year earlier.

What you are looking for, in order of what it tells you:

**Does any cohort flatten?** A retention curve that declines and then goes flat means you have found a group for whom the product is genuinely load-bearing. The flat part is your real business, however small. A curve that keeps declining toward zero in every cohort means you do not have retention yet, whatever the aggregate says.

**Do later cohorts flatten higher?** That is the product improving, or the targeting narrowing — both good, and distinguishable by looking at who is in each cohort.

**Which segment is in the flattening part?** This is the segment finding, and it is usually narrower than the one you think you sell to. The same read is what makes the Ellis survey useful in [scoping a first version](/founder-playbook/build/scoping-v1/): ignore the average, read the segments.

## Definitions

One sentence per metric, written once, applied everywhere — the model, the dashboard, the investor update, the deck, the data room.

The ones that cause the most trouble, with the question each must answer:

- **Customer.** Paying, or using? Does a trial count? A free account a founder set up? A customer who has stopped paying but still has data?
- **Revenue.** Recurring only, or including setup and services? Gross or net of payment fees? Booked or collected? Annual contracts recognised monthly or in full?
- **Active.** Logged in, or completed the core job? In what window?
- **Churned.** Cancelled, or stopped paying, or stopped using? How long must they be gone?

When a definition has to change — and it will — say so explicitly and **restate the prior months on the new basis**. An unannounced definition change is indistinguishable from manipulation, and once a reader has that thought you cannot unring it. [Investor updates](/founder-playbook/run/investor-updates/) covers the same discipline from the reader's side.

## Worked example

*A hypothetical composite. Numbers are invented to be plausible; no company described here exists.*

A two-founder company selling scheduling software, fourteen months in, 31 paying accounts, about £19,000 of monthly recurring revenue. They have an eleven-tile dashboard and a growing sense that it tells them nothing.

**The audit.** They go through the tiles asking what decision each one changes.

Four survive: monthly recurring revenue, runway, the count of accounts that produced a schedule this month, and churn as a count. Seven are deleted: total signups (cannot go down), pageviews, average session length, NPS from nine responses, a computed LTV:CAC of 3.4, activation rate, and a support-ticket count nobody had ever acted on.

The LTV:CAC deletion takes an argument. One founder had put 3.4 in the last investor update. Working back through it: the LTV assumed an average customer lifetime of 36 months, derived from a monthly churn rate of 2.8%, derived from one churned account in a month with 36 accounts. The entire figure rested on a single cancellation. They send a correction in the next update, which is uncomfortable and much cheaper than it being found in diligence.

**The definitions pass.** Four definitions written. Two reveal problems immediately. "Customer" had included three accounts the founders set up for design partners who never paid, which means their customer count had been overstated by 10% in every document for eight months. And "revenue" included a one-off £900 setup fee in two months, which made the growth curve look smoother than it was. Both get restated.

**The cohort view.** Built retrospectively from the billing records, which is possible because the billing records exist — the only reason they can do this at all.

- Cohort Jan: 6 customers, 4 still paying at month 10.
- Cohort Mar: 5 customers, 4 still paying at month 8.
- Cohort Jun: 9 customers, 5 still paying at month 5.
- Cohort Sep: 8 customers, 8 still paying at month 2.

The June cohort is the finding. It retains visibly worse than January and March, and the reason is legible once they look at who is in it: June was the month they ran a discount promotion, and six of the nine came through it. Four of those six are gone. The two cohorts either side, sold at full price, retain much better.

That is a pricing and targeting finding, and it was completely invisible in their aggregate churn, which had been bobbing between 2% and 6% with no pattern. It also changes a decision: they cancel a planned second promotion.

**What they got wrong.** They kept the activation rate for another two months "because investors ask for it," reporting a percentage of a population of thirty. One month it read 48%, down from 71%, and they spent most of a week investigating a product regression. The cause was that two of the three accounts that had not produced a schedule were on holiday. The count — nineteen of thirty-one accounts produced a schedule, down from twenty-two — would have made that obvious in a glance.

## Checklist

- [ ] Every metric has a written decision beside it that a bad reading would change.
- [ ] Any metric with no such decision is deleted, not deprioritised.
- [ ] Counts rather than rates, until a single event moves the rate by less than a point.
- [ ] One written definition per metric, in one place.
- [ ] Definitions applied to the model, the dashboard, the update and the data room alike.
- [ ] Any definition change announced, with prior periods restated.
- [ ] Cohort retention by joining month, started now regardless of cohort size.
- [ ] No LTV, no payback, no LTV:CAC until there is a repeatable channel and a year of retention.
- [ ] Runway stated as four facts: cash, net burn, months, direction.
- [ ] A quarterly pass deleting whatever has not been acted on.

## Failure modes

**Symptom:** The dashboard has stopped being opened.
**Cause:** No decisions attached, so looking at it produced nothing.
**Fix:** Delete it and rebuild with three or four metrics, each paired with its decision in writing.

**Symptom:** A metric moved alarmingly and the cause turned out to be one or two people.
**Cause:** Reporting a rate at a population where one event is several points.
**Fix:** Counts. The rate goes back in when the denominator passes a hundred.

**Symptom:** Two of your own documents give different numbers for the same thing.
**Cause:** No single definition, so each document encoded its author's assumption.
**Fix:** One definitions page. Correct the historical documents yourself rather than waiting to be asked.

**Symptom:** You computed LTV:CAC and it is a suspiciously good number.
**Cause:** A lifetime extrapolated from a churn rate derived from one or two cancellations.
**Fix:** Delete it. Report retention by cohort as counts and let the reader draw the curve when there is one.

**Symptom:** Aggregate retention looks fine and revenue growth keeps stalling.
**Cause:** Growth is masking churn in the aggregate. The cohort view would show it.
**Fix:** Build cohorts from billing records today. This is the one measurement you cannot reconstruct if the records are gone.

**Symptom:** An investor asked for a metric you do not track and you built it that week.
**Cause:** Measuring for an audience rather than for a decision.
**Fix:** Give them the metrics you run the company by, say plainly why the requested one is not meaningful at your scale, and offer the count underneath it. That answer builds more credibility than the number would have.

## Sources

- [First Round Review, *How Superhuman Built an Engine to Find Product/Market Fit*, 2018](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/) — Rahul Vohra's application of Sean Ellis's survey, including the practice of reading the result by segment rather than as an average, which is the same discipline this guide applies to cohort retention. Sample is a consumer-and-prosumer email client.
- [CB Insights, *The Top 12 Reasons Startups Fail*, 5 March 2026](https://www.cbinsights.com/research/report/startup-failure-reasons-top/) — 431 VC-backed companies shut down since 2023; ran out of capital 70%, poor product-market fit 43%, unsustainable unit economics 19%. Cited for why runway is one of the four metrics that survive the decision test.
- A note on what is **not** cited: no SaaS churn, activation or retention benchmark appears in this guide. Those figures are drawn from companies with hundreds or thousands of customers, where a point of churn is a population rather than an anecdote, and comparing a thirty-customer company against them produces false comfort and false alarm with equal ease. The guide gives counts and cohorts instead.
