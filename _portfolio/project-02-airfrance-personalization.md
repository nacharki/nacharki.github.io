---
order: 1
title: "Personalising flight and fare offers with A/B-tested recommenders"
company: "Air France-KLM"
role: "Senior Data Scientist, Marketing Operations Research"
period: "Nov 2025 – present"
context: "Airline group, e-commerce and marketing operations research"
summary: "Experimentation and evaluation for two recommender systems on the booking flow: which flights to rank first, and which fare to recommend. Every change is validated in an A/B test before it ships."
stack: [Python, SQL, BigQuery, scikit-learn, XGBoost, A/B testing]
tags: [Recommender systems, A/B testing, Uplift modelling, Conversion optimisation, BigQuery]
outcome_value: "€1M+"
outcome_label: "incremental revenue per month"
outcome_delta: true
outcomes:
  - value: "+0.6%"
    label: "Conversion rate"
    basis: "A/B test against control, flight-selection and offer-display recommenders"
    delta: true
  - value: "+0.5%"
    label: "Average revenue per visitor"
    basis: "Same experiments; better conversion plus fare recommendations"
    delta: true
  - value: "€1M+"
    label: "Incremental revenue per month"
    basis: "Attributed to shipped experiment winners"
    delta: true
description: "How Naoufal Acharki designs and evaluates A/B-tested flight and fare recommenders at Air France-KLM: +0.6% conversion, +0.5% revenue per visitor, €1M+ incremental monthly revenue."
---

## The challenge

You land on Air France's website to book a flight from Paris to New York. Dozens of options appear: different times, prices and connections. Which flight should appear first? Should we recommend the Basic fare or suggest the Flex fare?

With millions of monthly visitors, even small improvements to that page have a large impact. That is the problem I work on: designing the recommendation systems that personalise these choices, then proving they work through rigorous A/B testing before anything is deployed.

## What I do

I lead the experimentation and evaluation for two recommender systems.

**Flight list ranker.** When you search for flights, we rank them on what matters to you, not only on price: search behaviour, booking history, preferences and many other signals, so the flights you are most likely to book appear first.

**Branded fare recommender.** Should we show the Basic Economy fare or highlight the Flex fare with free cancellation? We predict which customers value premium features and personalise the recommendation accordingly.

## From high-propensity to high-uplift

The obvious approach is to show customers what they are most likely to buy and target the high-propensity ones. But high propensity does not mean high uplift. Some customers will book regardless of what they see; others will never convert. The value is in the persuadables, the customers whose decision the recommendation actually changes. Instead of asking "who will convert?", the question becomes "who will convert *because* of this recommendation?"

{% include uplift-matrix.html %}

<div class="callout">
  <p class="callout__title">Sometimes the best recommendation is no recommendation</p>
  <p>A customer is browsing a €400 flight. A propensity model predicts they are likely to book if shown a €200 option. That looks like a conversion win, but it cannibalises €200 of revenue. Optimising for uplift rather than propensity identifies when <em>not</em> showing a cheaper option preserves revenue. Conversion alone does not equal profit.</p>
</div>

## How an idea reaches production

**Offline evaluation.** New models are first tested on historical data to check whether they would have beaten what is currently live. There is no point running a live experiment on an idea that is already losing offline.

**Experiment design.** If it looks promising, I design the A/B test: how many visitors are needed, how long it should run, and what could go wrong. Power and sample size are calculated upfront so we do not waste traffic.

**Live monitoring.** While the experiment runs, I track conversion, revenue per visitor and segment-level effects, and catch problems early.

**Ship or stop.** After the experiment I analyse the results, present them to stakeholders and make the call: roll out to everyone, or stop. Decisions are based on the data, not on intuition.

## What I learned

**Business metrics beat technical metrics.** Nobody cares whether a ranking algorithm has a great offline score. They care whether it changes bookings and revenue.

**Fast iteration wins.** The faster ideas can be tested, the faster the team learns. The process above lets us run experiments in weeks, not months.

**Simple usually beats complex.** The best solutions are often surprisingly simple. Do not over-engineer.

**Trust but verify.** Models that look great offline can fail in production. Always validate with a real experiment.
