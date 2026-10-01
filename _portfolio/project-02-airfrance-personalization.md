---
order: 1
title: "Personalising flight and fare offers with A/B-tested recommenders"
company: "Air France-KLM"
role: "Senior Data Scientist, Marketing Operations Research (Commercial Data Officer)"
period: "Nov 2025 – present"
context: "Airline group; team of five to six data scientists working on the booking flow of the website and the app"
summary: "Analysis and evaluation for two recommender systems on the booking flow: which flights to rank first, and which fare to recommend. I define the metrics and segments, prepare the data, and run the offline and online evaluation of every A/B test before anything ships."
stack: [Python, SQL, BigQuery, scikit-learn, XGBoost, A/B testing]
tags: [Recommender systems, A/B testing, Uplift modelling, Conversion optimisation, BigQuery]
outcome_value: "€1M+"
outcome_label: "incremental revenue per month"
outcome_delta: true
outcomes:
  - value: "+0.6%"
    label: "Conversion rate, relative lift"
    basis: "One-month A/B tests against control, flight-selection and offer-display recommenders"
    delta: true
  - value: "+0.5%"
    label: "Revenue per visitor, relative lift"
    basis: "Same experiments; a further test showed a significant upsell effect and is awaiting deployment"
    delta: true
  - value: "€1M+"
    label: "Incremental revenue per month"
    basis: "Reported impact attributed to the shipped experiment winners"
    delta: true
scale:
  - value: "~50M"
    label: "Visits a month across website and app"
    basis: "Several hundred thousand visitors and flight searches every day"
  - value: "2"
    label: "Recommender systems under test"
    basis: "Flight list ranker and branded-fare recommender, each validated by A/B test"
description: "How Naoufal Acharki supports A/B-tested flight and fare recommenders at Air France-KLM: funnel analysis, metric design and offline/online evaluation, with +0.6% conversion and +0.5% revenue per visitor (relative) on a flow of around 50 million visits a month."
---

## The challenge

You land on Air France's website to book a flight from Paris to New York. Dozens of options appear: different times, prices and connections. Which flight should appear first? Should we recommend the Basic fare or suggest the Flex fare?

At this scale, several hundred thousand visitors and flight searches a day across the website and the app, around 50 million visits a month, even a fraction of a percent on conversion or revenue per visitor is worth a lot. The recommendation systems that personalise these choices therefore have to prove themselves in a controlled experiment before they reach everyone.

## The two recommenders

**Flight list ranker.** When you search for flights, the list is ranked on what matters to you, not only on price: search behaviour, booking history, preferences and many other signals, so the flights you are most likely to book appear first.

**Branded fare recommender.** Should we show the Basic Economy fare or highlight the Flex fare with free cancellation? The model predicts which customers value premium features and personalises the recommendation accordingly.

## My role in a team of five to six data scientists

- **Funnel and journey analysis.** Studies of the customer funnel, traffic and segments to decide which metrics a test should move, which guardrails to watch, and how to split traffic.
- **Data preparation and exploration.** Preprocessing and exploratory analysis of search, click and booking data feeding the models.
- **Offline evaluation.** Testing candidate models on historical data to check they would beat what is currently live, so that only promising ideas use real traffic.
- **Online evaluation.** Analysing the A/B tests once they run: effect sizes, significance, segment-level effects and the recommendation to ship or stop.

## From high-propensity to high-uplift

The obvious approach is to show customers what they are most likely to buy and target the high-propensity ones. But high propensity does not mean high uplift. Some customers will book regardless of what they see; others will never convert. The value is in the persuadables, the customers whose decision the recommendation actually changes. Instead of asking "who will convert?", the question becomes "who will convert *because* of this recommendation?"

{% include uplift-matrix.html %}

<div class="callout">
  <p class="callout__title">Sometimes the best recommendation is no recommendation</p>
  <p>A customer is browsing a €400 flight. A propensity model predicts they are likely to book if shown a €200 option. That looks like a conversion win, but it cannibalises €200 of revenue. Optimising for uplift rather than propensity identifies when <em>not</em> showing a cheaper option preserves revenue. Conversion alone does not equal profit.</p>
</div>

## How an idea reaches production

**Offline evaluation.** New models are first tested on historical data to check whether they would have beaten what is currently live.

**Experiment design.** If it looks promising, the team designs the A/B test: how many visitors are needed, how long it should run, and what could go wrong. Power and sample size are calculated upfront so traffic is not wasted. The tests reported here each ran for one month.

**Live monitoring.** While the experiment runs, conversion, revenue per visitor and segment-level effects are tracked, and problems are caught early.

**Ship or stop.** After the experiment, the results are analysed and presented to stakeholders, and the call is made: roll out to everyone, or stop. Decisions are based on the data, not on intuition.

## What was measured

Across the one-month A/B tests, the recommenders lifted conversion rate by 0.6% and revenue per visitor by 0.5%, both relative to the control group. One further test showed a statistically significant upsell effect and is awaiting deployment. The reported business impact of the shipped winners is more than €1M of incremental revenue per month.

## What I learned

**Business metrics beat technical metrics.** Nobody cares whether a ranking algorithm has a great offline score. They care whether it changes bookings and revenue.

**The metric comes before the model.** Most of the value of an experiment is decided when the success metric, the guardrails and the segments are chosen.

**Simple usually beats complex.** The best solutions are often surprisingly simple. Do not over-engineer.

**Trust but verify.** Models that look great offline can fail in production. Always validate with a real experiment.
