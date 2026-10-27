---
title: "Cold Outbound for Startups: The Volume Math"
description: "The arithmetic behind cold outreach that books meetings: list quality, reply rates worth expecting, what to write, and when outbound is the wrong channel."
pillar: sell
updated: "2026-10-27"
keywords:
  - "cold outbound for startups"
  - "cold email reply rates"
  - "founder cold outreach"
  - "b2b prospecting early stage"
  - "outbound sales startup"
relatedGuides:
  - sell/discovery-and-demos
  - sell/pricing
  - build/ai-tools
howTo:
  - name: Do the arithmetic backwards from meetings before writing anything
    text: Decide how many meetings you need this month, divide by a realistic meeting rate, and look at the number of sends that implies. If the number is impossible at your scale, outbound is not your channel this quarter and no amount of copy editing changes that.
  - name: Qualify the list on why them and why now
    text: Every name needs a reason it has the problem and a reason the problem is live this quarter. A list where you cannot answer both is the cause of almost every bad reply rate, and it is invisible if you only look at the message.
  - name: Write three to four sentences and no pitch
    text: Gong's analysis of 28 million cold emails finds the highest reply rates at three to four sentences and 100 words or fewer, and that pitching reduces reply rates by as much as 57 percent. Describe the problem in their language and ask whether it is a problem.
  - name: Ask for interest rather than a meeting in the first email
    text: In Gong's study of 304,174 emails, call-to-action requests for a meeting performed 44 percent worse on reply rate than interest-based asks. Request a reaction, not a calendar slot, and book the meeting in the second reply.
  - name: Authenticate and separate your sending domain before the first send
    text: Set up SPF, DKIM and DMARC, send cold outbound from a subdomain rather than your primary domain, and watch the spam rate. Google requires bulk senders to keep reported spam below 0.30 percent, and a burned primary domain costs you every email the company sends, not just the cold ones.
faq:
  - question: What is a good cold email reply rate?
    answer: Gong's analysis of more than 28 million cold emails puts the average rep at 344 emails per meeting booked, with top reps getting 4.2 times the replies and booking 8.1 times the meetings of average ones. At founder scale the useful figure is not the percentage but the implied volume — if you need four meetings a month and you are average, that is roughly 1,400 sends.
  - question: Why is my cold email getting no replies?
    answer: Almost always the list rather than the copy. If you cannot say why each person has the problem and why it is live for them this quarter, no phrasing recovers it. Rewrite the targeting first; founders reliably do this in the wrong order because copy is the part they can see.
  - question: How long should a cold email be?
    answer: Three to four sentences and under 100 words, which is where Gong measures the highest reply rates. The practical reason is that a short email can only contain a problem and a question, and the long version always smuggles in a pitch, which costs up to 57 percent of replies.
  - question: Will my cold email ruin my domain reputation?
    answer: It can, and the damage extends to every email your company sends, including invoices and support replies. Send cold outbound from a separate subdomain with SPF, DKIM and DMARC configured, keep volumes low while the domain is new, and watch the spam-complaint rate. Google's threshold for bulk senders is below 0.30 percent reported spam.
  - question: When is outbound the wrong channel?
    answer: When the buyer is unreachable by email, when the deal size cannot support the volume arithmetic, or when the problem is not yet live for anyone — outbound creates meetings, not demand. If the product solves something people only think about after a trigger event, the work is detecting triggers rather than sending more.
---

## TL;DR

- Do the **arithmetic first**. Meetings needed, divided by a realistic meeting rate, gives a send volume. Gong's analysis of 28 million cold emails puts the average rep at **344 sends per meeting booked**. If your number comes out impossible, the answer is a different channel, not better copy.
- **Reply rate is a list property, not a copy property.** Every name needs an answer to *why them* and *why now*. Founders debug the email because it is the part they can see; the list is where almost all the loss lives.
- Write **three to four sentences, under 100 words, and do not pitch**. Gong finds pitching costs up to **57%** of replies. A short email can only hold a problem and a question, which is exactly what it should hold.
- Ask for a **reaction, not a calendar slot**. In Gong's study of 304,174 emails, meeting-request CTAs performed **44% worse** on reply rate than interest-based ones.
- Protect the domain before the first send. SPF, DKIM, DMARC, a **separate subdomain**, and an eye on the spam rate — Google requires bulk senders to stay under **0.30%** reported spam. A burned primary domain takes your invoices and support replies down with it.

## Who this is for

You need meetings with people who do not know you, and you are either about to start sending or already sending with disappointing results. You are probably a founder doing this personally, at a volume well below what a sales team would run.

Skip this if your first ten customers are reachable warm or through introductions — do that instead, it is strictly better, and [founder-led sales](/sell/) explains why warm and trigger-based beats cold for the first ten. Come back here when you have exhausted the warm list.

## The problem

Outbound fails in a specific, repeatable sequence, and every step of it is reasonable.

You write an email. You send forty. You get one reply and it is a no. You conclude the email is wrong, because the email is the artifact in front of you. You rewrite it — better subject line, a sharper first sentence, a more specific compliment. You send forty more. Two replies, one no, one "who are you." You rewrite again.

Three weeks in you have written nine versions of an email and have two meetings. The copy was not the problem at any point. **Forty sends is not a sample.** At average performance, forty sends is a fifth of one meeting, so the entire exercise was running an A/B test with no statistical power whatsoever and drawing a new conclusion each week from noise.

This is the single most common and most expensive mistake in founder outbound, and it has two parts. The first is not knowing the arithmetic, so the volume looks adequate when it is nowhere close. The second is that the two levers with real effect — **who is on the list**, and **whether email reaches the inbox at all** — are both invisible in the artifact you are staring at.

## The arithmetic

Work backwards from meetings. The numbers below are built from [Gong's analysis of over 28 million cold emails](https://www.gong.io/blog/does-cold-email-even-work-any-more-heres-what-the-data-says), published July 2025, where the average rep sends **344 cold emails per meeting booked** and top reps book **8.1x** more meetings than average ones. Read it as an order of magnitude, not a precision instrument: Gong's sample is professional sales reps at companies with established products, which is a different animal from a founder emailing a list of forty.

| If you are | Sends per meeting | 4 meetings/month needs | 10 meetings/month needs |
| --- | --- | --- | --- |
| **Average, cold list** | ~344 | ~1,400 sends | ~3,400 sends |
| **Good, well-targeted list** | ~100 to 150 | ~500 sends | ~1,300 sends |
| **Trigger-based, tightly targeted** | ~30 to 60 | ~200 sends | ~500 sends |
| **Warm or introduced** | ~3 to 10 | ~25 sends | ~60 sends |

Three things fall out of this table immediately.

**A founder sending personally cannot operate in the top row.** Writing 1,400 genuinely considered emails is not a thing one person does alongside running a company. So if your list is cold and generic, the arithmetic says you need either a much better list or a different channel. That is the decision, and it is available before you write a word.

**The leverage is in moving down rows, not in optimising within one.** Going from average to good copy within the top row might take you from 344 to 250. Moving from a generic list to a trigger-based one takes you from 344 to 40. The second is an order of magnitude and it is a research activity, not a writing activity.

**Warm is 30 to 100 times more efficient.** Which is why, for the first ten customers, the right answer is almost always to exhaust every introduction before sending a single cold email.

There is also a floor the arithmetic should respect: deal size. If your annual contract value is $600 and a meeting costs you 150 emails plus an hour of your time, outbound does not pay for itself at any reply rate. That is not a messaging problem either.

## The list is the product

Every name needs two written answers.

**Why them.** What makes you believe this company has the problem? Not "they are in the right industry at the right size" — that is a filter, not evidence. Evidence looks like: they are hiring for a role that exists only because of this problem; they published something describing it; they use a tool whose known gap is exactly your thing; someone complained about it publicly; they just did something that creates it.

**Why now.** What happened recently that makes it live this quarter? A funding round, a new executive in the owning role, a merger, a regulatory date, a season, a competitor's price change, a tool they used being discontinued. Without a *why now*, your email arrives during a quarter whose priorities were set before you existed, and the honest answer to it is "not this year."

The *why now* half is what founders skip, and it is the half that produces the order-of-magnitude move in the table above. A list of 200 companies where something just happened outperforms a list of 2,000 that merely fit the profile, and it is cheaper to build.

A useful discipline: if you cannot write both sentences for a name in under thirty seconds, delete the name. Lists get bad by accretion — a name goes on because it was easy to find, and nobody ever takes it off.

This is also where AI tooling genuinely helps and where it genuinely does not. It is good at the mechanical half: finding companies matching a pattern, extracting role holders, summarising a public signal. It is poor at judging whether a signal is actually evidence of the problem, which is the part that determines your reply rate. [AI tools for founders](/build/ai-tools/) makes the general version of this argument — the tool closes the part of the loop that was never the bottleneck.

## The email

Short, because short emails cannot contain a pitch.

Gong's findings on the message itself, from the same 28-million-email analysis: highest reply rates at **three to four sentences** and **100 words or fewer**; **pitching reduces reply rates by as much as 57%**; and in a separate study of **304,174 emails**, call-to-action phrasing that requested a meeting performed **44% worse** on reply rate than interest-based asks, while interest-based CTAs converted to meetings at 15% at the cold stage.

The shape that follows from those constraints:

1. **One sentence establishing why you are writing to them specifically.** The *why now*, stated as fact, not as flattery. "Saw you're hiring a second locum coordinator" beats "I've long admired your work."
2. **One or two sentences naming the problem in their language.** Not your product. The thing that is annoying, described the way someone inside the company would describe it.
3. **One question asking whether it is a problem.** Genuinely a question. "Is covering last-minute shifts actually eating your week, or have you got it handled?" The permission to say "we've got it handled" is what makes the question answerable.

No link. No attachment. No deck. No calendar link in the first email — that is the meeting-request CTA that measures 44% worse. Book the meeting in your reply to their reply.

On personalisation: the first line should be specific, and the rest should be generic. One true specific sentence outperforms four paragraphs of researched detail, and the researched version does not survive contact with volume. What actually matters, per Gong, is using **the prospect's own language** for the problem — which is a list-and-research output, not a writing flourish. [Founder-led sales](/sell/) covers collecting that language from the calls you have already had, which is the cheapest source of it.

## Deliverability, which decides everything upstream

An email that does not arrive has a reply rate of zero, and this is invisible to you: there is no bounce, no error, nothing. It lands in spam, or it is silently dropped.

Since **1 February 2024**, Google has required senders of **more than 5,000 messages per day** to Gmail accounts to: set up **SPF and DKIM**, set up **DMARC** for the sending domain, align the From: header domain with either the SPF or DKIM domain, support **one-click unsubscribe** on marketing and subscribed messages, and keep spam rates reported in Postmaster Tools **below 0.30%**. Yahoo announced equivalent requirements on the same timeline. The thresholds are published in [Google's own sender guidelines](https://support.google.com/a/answer/81126).

You are almost certainly below 5,000 a day, so the volume rules do not formally bind you. The authentication and reputation mechanics apply anyway, because they are what the filters use to decide about an unknown sender. What a founder needs to do, in order:

**Send from a separate subdomain.** Cold outbound from `mail.yourcompany.com` or a lookalike sending domain, never from the domain that sends your invoices, password resets and support replies. This is the single most important decision in this section. A burned primary domain means your billing emails stop arriving, and recovering a domain's reputation takes months during which the whole company is affected.

**Configure SPF, DKIM and DMARC on the sending domain before the first send.** Not after. An unauthenticated new domain sending cold email is the exact profile filters are built to catch.

**Start small and ramp.** A brand-new domain sending 500 emails on day one is a spam signal regardless of content. Tens per day for the first couple of weeks, rising gradually.

**Watch the complaint rate, not the open rate.** Open tracking is unreliable now — privacy proxies pre-fetch images, inflating opens — and complaints are what actually kill you. Register the sending domain in Google Postmaster Tools so you can see the number at all. Treat 0.30% as a hard ceiling and 0.10% as the line where you stop and re-examine the list.

**One-click unsubscribe, even on one-to-one-looking email.** It costs you nothing, it is required for bulk senders, and the alternative is that an annoyed recipient marks you as spam, which is the outcome you are managing.

## When outbound is the wrong channel

Three cases, worth checking before the effort rather than after.

**The arithmetic does not close.** Deal size too small, or meetings needed too many, for the volume you can personally sustain. Then the channel is wrong this quarter — look at inbound, partnerships, communities, or events.

**The buyer is not reachable by email.** Some roles do not read their own inbox; some industries live on the phone or in person. This is knowable by asking three people in the role how they would want to be contacted.

**The problem is not live for anyone.** Outbound creates meetings; it does not create demand. If your product solves something people only think about after a trigger, your work is detecting the trigger, and that is a data problem rather than a sending problem. In that case the right volume is small and the right research effort is large.

## Worked example

*A hypothetical composite. The numbers are invented to be plausible; no company described here exists.*

A solo founder selling a compliance-documentation tool to medical device manufacturers. Annual contract value around $9,000. She needs six meetings a month to build a pipeline that supports the number she told investors.

**Attempt one.** She buys a list of 1,200 contacts with the title "Quality Manager" at companies with 50 to 500 employees in the right industry code. Sends 180 over three weeks from her primary domain, in batches, personalising the first line of each.

Results: 4 replies, 1 meeting, 3 of the replies polite declines. Implied rate: 180 sends per meeting, which is actually *better* than Gong's average — but at 180 sends per meeting she needs 1,080 sends a month for six meetings, and she personally cannot write 1,080 emails. The arithmetic fails and the copy is not why.

Worse, she discovers two problems she could not see. Her domain's spam rate in Postmaster Tools has gone from effectively zero to 0.4%, above Google's 0.30% threshold, and two customers mention that her invoices went to spam that month. And when she checks with the one person who took a meeting, "Quality Manager" turns out to be the wrong title at that company size — the person who owns documentation burden is the Regulatory Affairs lead, and at companies under 200 people it is frequently the VP of Operations wearing that hat.

**Attempt two.** She fixes three things, in this order.

*The domain.* Moves cold sending to a separate subdomain, configures SPF, DKIM and DMARC, registers it in Postmaster Tools, and ramps from 15 a day. Stops cold sending from her primary domain entirely. Invoice deliverability recovers over about six weeks.

*The list.* Instead of a title filter, she builds a *why now* list: device manufacturers who have (a) posted a regulatory affairs job in the last 60 days, or (b) announced a product submission, or (c) had a published inspection finding. That yields 140 companies, not 1,200. For each she can write both sentences.

*The email.* From eleven sentences with a product paragraph and a calendar link, to four sentences: the trigger, two sentences on the documentation burden in the words the one real conversation gave her ("the technical file assembly is the thing that slips"), and a question asking whether that is actually their bottleneck. No link.

Results over the next four weeks: 120 sends, 31 replies, 9 meetings, 4 of which proceed to a second call. That is roughly **13 sends per meeting** — far better than any published benchmark, which is exactly what should happen when a list is built on triggers rather than filters, and which is also why the published benchmarks are the wrong target.

**What she got wrong anyway.** The trigger list regenerated monthly produced only 30 to 50 new names a month, which at 13 sends per meeting is about three meetings — half what she needs. Outbound became a real but insufficient channel, and the honest read was that she needed a second channel rather than a better version of this one. She spent two more months trying to scale the trigger list by loosening the triggers, which pushed sends per meeting back toward 90 and taught her the thing the table above already said: the quality is the channel.

## Checklist

Before writing anything:

- [ ] Meetings needed per month, written down.
- [ ] Sends per meeting assumed, with a reason for the number.
- [ ] Implied monthly send volume — and an honest answer to whether I can personally sustain it.
- [ ] Deal size checked against that volume. Does a meeting pay for the effort it costs?
- [ ] Warm and introduction routes exhausted first.

The list:

- [ ] A written *why them* for every name — evidence, not a profile filter.
- [ ] A written *why now* for every name — something that happened recently.
- [ ] Any name I cannot justify in 30 seconds is deleted.
- [ ] Title assumption checked with someone actually in the role.

Deliverability, before the first send:

- [ ] Cold outbound on a **separate subdomain** from everything transactional.
- [ ] SPF, DKIM and DMARC configured on the sending domain.
- [ ] From: header domain aligned with SPF or DKIM.
- [ ] Sending domain registered in Google Postmaster Tools.
- [ ] Ramp plan — tens per day for the first fortnight.
- [ ] One-click unsubscribe present.
- [ ] Spam-complaint ceiling written down: stop and re-examine at 0.10%, hard stop at 0.30%.

The email:

- [ ] Three to four sentences, under 100 words.
- [ ] No pitch, no link, no attachment, no calendar link.
- [ ] The problem stated in the buyer's language, taken from a real conversation.
- [ ] A question that can honestly be answered "we've got it handled."
- [ ] Measured over at least 300 sends before concluding anything about the copy.

## Failure modes

**Symptom:** Nine versions of the email in three weeks and no stable read on any of them.
**Cause:** Sample sizes of 40. Every conclusion is noise.
**Fix:** Freeze the copy for 300 sends. Spend the freed attention on the list.

**Symptom:** Replies are polite declines from people who clearly do not have the problem.
**Cause:** Profile filters masquerading as targeting. The list fits a demographic, not a situation.
**Fix:** Rebuild on triggers. Expect the list to shrink by 80% and the reply rate to rise by more.

**Symptom:** Zero replies, not even declines.
**Cause:** Deliverability, until proven otherwise. Silence is the signature of spam placement; declines mean you are at least arriving.
**Fix:** Check authentication, check Postmaster Tools, and send a test to seeded accounts on the major providers.

**Symptom:** Company invoices or password resets have started going to spam.
**Cause:** Cold outbound from the primary domain. The reputation damage is domain-wide.
**Fix:** Move cold sending to a subdomain immediately and stop the primary. Recovery takes weeks to months.

**Symptom:** Good reply rate, no meetings booked.
**Cause:** Usually a calendar link or meeting request in the first email, which measures 44% worse, or a second email that pitches.
**Fix:** First email asks for a reaction. Reply to the reaction with two concrete times.

**Symptom:** It worked for a month, then decayed.
**Cause:** The trigger list exhausted and got loosened to keep volume up, which converts a trigger list back into a profile list.
**Fix:** Accept the ceiling. A trigger channel has a natural monthly size; the answer to needing more is a second channel, not a looser trigger.

**Symptom:** Meetings happen and nothing progresses.
**Cause:** Interest-based targeting got you a curious person rather than a person with a funded problem.
**Fix:** Qualify harder on the call. [Discovery and demos](/sell/discovery-and-demos/) covers the questions that separate curiosity from budget, and [pricing](/sell/pricing/) covers what to do when the interest is real but the number is wrong.

## Sources

- [Gong, *Does cold email even work any more? Here's what the data says*, 24 July 2025 (last modified May 2026)](https://www.gong.io/blog/does-cold-email-even-work-any-more-heres-what-the-data-says) — analysis of more than 28 million cold emails. Average rep sends 344 cold emails per meeting booked; top reps get 4.2x the replies and 8.1x the meetings; highest reply rates at three to four sentences and 100 words or fewer; pitching reduces reply rates by as much as 57%. A separate Gong Labs study of 304,174 emails found meeting-request CTAs performed 44% worse on reply rate than interest-based asks, with interest-based CTAs converting to meetings at 15% at the cold stage. Sample is professional sales reps at established companies, not founders.
- [Google Workspace Admin Help, *Email sender guidelines*](https://support.google.com/a/answer/81126) — requirements effective 1 February 2024 for senders of more than 5,000 messages per day to Gmail accounts: SPF and DKIM, DMARC on the sending domain, From: header alignment with the SPF or DKIM domain, one-click unsubscribe for marketing and subscribed messages, and spam rates reported in Postmaster Tools kept below 0.30%.
