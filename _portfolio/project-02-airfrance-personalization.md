---
order: 1
title: "Personalising flight and fare offers with A/B-tested recommenders"
company: "Air France-KLM"
role: "Senior Data Scientist, Marketing Operations Research (Commercial Data Officer)"
period: "Nov 2025 – present"
context: "Airline group; a team of five or six data scientists working on the booking flow of the website and the app"
summary: "Two recommender systems on the booking flow: which flights to show first, and which fare to suggest. I work on the metrics and segments, prepare the data, and run the offline and online evaluation of every A/B test before anything ships."
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
    basis: "Same experiments; a further test showed a significant upsell effect and is waiting to be deployed"
    delta: true
  - value: "€1M+"
    label: "Incremental revenue per month"
    basis: "Business impact reported for the shipped experiment winners"
    delta: true
scale:
  - value: "~50M"
    label: "Visits a month across website and app"
    basis: "Several hundred thousand visitors and flight searches every day"
  - value: "2"
    label: "Recommender systems under test"
    basis: "Flight list ranker and branded-fare recommender, each validated by A/B test"
description: "How Naoufal Acharki supports A/B-tested flight and fare recommenders at Air France-KLM: funnel analysis, metric design and offline/online evaluation, with +0.6% conversion and +0.5% revenue per visitor (relative) on a flow of around 50 million visits a month."
lead_figure:
  src: /images/case-afkl-booking.jpg
  width: 1087
  height: 806
  alt: "Air France booking page for a Paris to Los Angeles flight: three fares side by side, Light at 464 euros, Standard at 543 euros marked Conseillé, Flex at 655 euros, with the list of what each fare includes."
  caption: "The real booking page, Paris to Los Angeles, September 2026. The small ‘Conseillé’ badge on the Standard fare is where the branded-fare recommender shows up; the order of the flights above it is the flight list ranker’s job."
opening: "Paris to Los Angeles, a morning search. Under the Economy price, three fares wait: Light at €464, Standard at €543 with a small “Recommended” badge, Flex at €655. Most travellers never notice the badge. It’s a model’s decision, and whether it should be there, and on which fare, is settled by an A/B test that I evaluate."
---

## The challenge

You land on Air France's website to book a flight from Paris to New York. Dozens of options appear: different times, prices and connections. Which flight should come first? Should we recommend the Basic fare, or suggest Flex?

At this scale, several hundred thousand visitors and flight searches a day across the website and the app, around 50 million visits a month, a fraction of a percent on conversion or revenue per visitor is real money. Which is exactly why nothing that touches this page goes live without a controlled experiment.

## The two recommenders

The **flight list ranker** decides the order of the results. Price matters, but so do your search behaviour, your booking history and your preferences, so the flights you're most likely to book come first.

The **branded fare recommender** decides whether to put the Basic Economy fare in front of you or to highlight Flex with free cancellation, depending on how likely you are to value the extras.

## What I actually do

I'm one of five or six data scientists on this, and my part sits mostly before and after the model.

Before: studying the funnel, the traffic and the segments, so that a test is built around the right metric, with the right guardrails and a sensible traffic split. Then the unglamorous part, preparing and exploring the search, click and booking data the models learn from.

After: the evaluation. Offline first, on historical data, to see whether a candidate would even have beaten what's live. Then online, once the A/B test is running: effect sizes, significance, how the different segments reacted, and a recommendation to ship or stop.

## Propensity is not uplift

The obvious thing to do is to show people what they're most likely to buy and go after the high-propensity customers. The trouble is that some of them would have booked anyway, and some will never book whatever you show them. The ones worth the effort are the persuadables, the customers whose decision the recommendation actually changes. So the question moves from "who will convert?" to "who will convert *because* of this?"

{% include uplift-matrix.html %}

<div class="callout">
  <p class="callout__title">Sometimes the best recommendation is no recommendation</p>
  <p>A customer is looking at a €400 flight. A propensity model says they're likely to book if we show them a €200 option. That looks like a conversion win, until you notice it just cost €200 of revenue. Optimising for uplift rather than propensity is what tells you when <em>not</em> showing the cheaper option is the better call. Conversion on its own isn't profit.</p>
</div>

## How an idea gets to production

An idea starts offline, on historical data, to check it would have beaten what's currently live. If it survives, the team sizes the test: how many visitors, how long, what could go wrong. The tests reported here each ran for a month. While they run we watch conversion, revenue per visitor and the segment effects, so problems show up early rather than at the end. Then the results go to the stakeholders and a decision is made, roll out or stop, on the numbers rather than on anyone's instinct.

## What came out of it

Across the one-month tests, conversion went up by 0.6% and revenue per visitor by 0.5%, both relative to the control group. A further test found a statistically significant upsell effect and is waiting to be deployed. The business impact reported for the shipped winners is over €1M of incremental revenue a month.

## What I took away

Nobody at an airline cares about an offline ranking score. They care about bookings and revenue, and that's the right way round. Most of the value of an experiment is decided when you pick the metric, the guardrails and the segments, before the model exists. The simple version usually wins. And a model that looks great offline can still fall flat in production, which is the whole point of running the test.
