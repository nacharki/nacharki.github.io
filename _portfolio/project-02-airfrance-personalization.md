---
title: "Air France-KLM: Driving €1M Monthly Revenue with Recommendation Systems"
excerpt: "Designing, evaluating, and deploying intelligent flight recommendations that increased conversion rate by 0.6% and ARPV by 0.5% - translating to €1M+ monthly incremental revenue"
collection: portfolio
date: 2025-11-01
company: "Air France-KLM"
role: "Senior Data Scientist - Marketing Operations Research"
tags:
  - Recommendation Systems
  - A/B Testing
  - Experimentation
  - Conversion Optimization
  - BigQuery
---

## The Challenge

When millions of travelers visit Air France or KLM websites to book flights, they encounter a critical decision point: which flight to choose from dozens of options? Which branded fare (Basic, Standard, Flex) offers the best value?

**The business problem:** How do you personalize these recommendations at scale to maximize conversion rates and revenue per visitor, while ensuring rigorous scientific evaluation before deployment?

**The stakes:** With millions of monthly visitors and average booking values in the hundreds of euros, even a 0.5% improvement translates to **millions in incremental revenue**.

---

## My Role: From Design to Production

As the **Senior Data Scientist** leading experimentation and evaluation for recommendation systems, I'm responsible for the complete lifecycle:

### 1. Pre-Launch: Offline Evaluation & Design

**Before any experiment goes live**, I evaluate recommender performance using historical data:

- **Offline metrics analysis**: Precision@K, NDCG, ranking quality
- **Counterfactual evaluation**: Estimating online performance from logged data
- **A/B test design**: Defining success metrics, treatment/control splits, sample size requirements
- **Power analysis**: Calculating required traffic and experiment duration to detect meaningful effects

**Why this matters:** Launching poorly-designed experiments wastes engineering resources and risks degrading customer experience. Rigorous offline evaluation ensures only promising candidates reach production testing.

### 2. Pre-Experiment: Power Analysis & Planning

**Statistical rigor from day one:**

- Calculate minimum detectable effect (MDE) given traffic constraints
- Determine optimal experiment duration to achieve 80%+ statistical power
- Design guardrail metrics to prevent negative side effects
- Set up monitoring dashboards and alerting thresholds

### 3. During Experiment: Monitoring & Analysis

**Real-time oversight of live A/B tests:**

- Monitor key metrics: conversion rate (CR), average revenue per visitor (ARPV), click-through rate
- Track sample ratio mismatch (SRM) and other experiment health metrics
- Conduct sequential analysis to detect early winners or stop harmful variants
- Investigate anomalies and ensure data quality

### 4. Post-Experiment: Decision & Deployment

**Data-driven shipping decisions:**

- Conduct statistical significance testing (frequentist + Bayesian approaches)
- Analyze heterogeneous treatment effects across customer segments
- Calculate business impact and ROI projections
- Present findings to stakeholders for go/no-go decision
- Work with engineering teams to ship winners to 100% of traffic

---

## The Recommendation Systems

I work on two critical recommender systems:

### Flight List Ranker

**The problem:** When a customer searches for Paris → New York, dozens of flight options appear. Which should rank highest?

**The solution:** A machine learning ranking model that personalizes the flight list based on:
- Customer search behavior and preferences
- Historical booking patterns
- Flight attributes (price, duration, stops, airline)
- Contextual signals (time of day, device, location)

**How I evaluate it:**
- Offline: Ranking metrics (NDCG, MRR) on historical data
- Online: A/B tests measuring conversion rate and revenue impact
- Guardrails: Ensure diversity and fairness across flight options

### Branded Fare Recommender

**The problem:** Air France-KLM offers multiple fare classes (Basic Economy, Standard, Flex). Which should we recommend?

**The solution:** A propensity model predicting customer willingness to pay for premium fares, enabling personalized upsell recommendations.

**How I evaluate it:**
- Offline: Uplift modeling to predict incremental revenue
- Online: Multi-armed bandit or A/B tests to optimize recommendation strategy
- Business metrics: Conversion rate, ARPV, fare mix shift

---

## Impact: The Numbers That Matter

### Experiment Results

**Conversion Rate (CR):** +0.6% improvement
- Baseline CR: ~3%
- After recommendation optimization: 3.6%
- **20% relative lift in conversions**

**Average Revenue Per Visitor (ARPV):** +0.5% improvement
- Higher conversion + better fare mix optimization
- Increased upsell to premium fares

### Business Impact

**Given Air France-KLM's traffic volume:**

- Millions of monthly website visitors
- Average booking value: €300-500+
- **+0.6% CR + 0.5% ARPV = €1M+ incremental revenue per month**
- **€12M+ annualized impact** from a single successful experiment

**Why this is impressive:**
- Large-scale impact: Optimizing at European airline group scale
- Rigorous methodology: Scientific A/B testing, not just correlation
- Sustainable gains: Production deployment means continuous revenue lift

---

## Technical Approach

### Data Infrastructure

- **Google BigQuery**: Petabyte-scale data warehouse for customer behavior analysis
- **Event tracking**: Millions of search, click, and booking events daily
- **Feature engineering**: Real-time and batch feature pipelines

### Experimentation Framework

- **A/B testing platform**: Custom experimentation infrastructure for flight recommendations
- **Statistical methods**: Frequentist hypothesis testing, Bayesian credible intervals, sequential analysis
- **Causal inference**: Ensuring we measure true treatment effects, not confounding

### Recommendation Algorithms

- **Collaborative filtering**: Learning from similar customer behavior
- **Content-based ranking**: Flight attributes and customer preferences
- **Contextual bandits**: Balancing exploration vs exploitation
- **Ensemble methods**: Combining multiple signals for robust predictions

---

## Key Challenges & Solutions

### Challenge 1: High Variance in Booking Behavior

**Problem:** Flight bookings are rare events (low conversion rate), making experiments noisy.

**Solution:**
- Use CUPED (variance reduction) to improve sensitivity
- Focus on proxy metrics (clicks, engagement) for faster iteration
- Run power analysis to ensure sufficient sample size

### Challenge 2: Seasonality & External Factors

**Problem:** Travel demand fluctuates with holidays, events, fuel prices.

**Solution:**
- Pair-wise randomization to balance treatment/control
- Track external variables and adjust analysis
- Use diff-in-diff or synthetic control when necessary

### Challenge 3: Multiple Touchpoints

**Problem:** Customers often search multiple times before booking.

**Solution:**
- User-level randomization (not session-level)
- Track customer journeys across visits
- Analyze long-term effects, not just immediate conversions

---

## Skills Demonstrated

### Experimentation & Causal Inference
- A/B test design and power analysis
- Statistical testing (frequentist + Bayesian)
- Causal inference methods
- Sequential analysis and early stopping

### Recommendation Systems
- Ranking algorithms (learning-to-rank)
- Personalization at scale
- Offline/online evaluation methodologies
- Multi-armed bandits and reinforcement learning

### Business Impact
- Translating statistical findings to business metrics
- ROI calculation and stakeholder communication
- Cross-functional collaboration (engineering, product, marketing)
- Data-driven decision making

### Technical Execution
- Big data processing (BigQuery, SQL)
- Python for statistical analysis and ML
- Experiment monitoring and alerting
- Production ML systems

---

## What Makes This Work Impressive

**1. Scale:** Optimizing for one of Europe's largest airline groups with millions of monthly users

**2. Rigor:** Not just "we built a model" - scientifically validated through A/B testing with proper statistical methods

**3. Impact:** €1M+ monthly revenue increase is a tangible, measurable business outcome

**4. End-to-end ownership:** From offline evaluation → power analysis → live experiments → production deployment

**5. Domain complexity:** Aviation is a complex domain with high-stakes decisions, seasonal patterns, and competitive dynamics

---

## Lessons Learned

**1. Offline evaluation is necessary but not sufficient**
- Models that look great offline can fail in production
- Always validate with live experiments

**2. Power analysis prevents wasted effort**
- Running underpowered experiments wastes time and traffic
- Invest upfront in proper statistical planning

**3. Business metrics trump ML metrics**
- NDCG@10 is interesting, but stakeholders care about revenue
- Always connect technical metrics to business outcomes

**4. Guardrails are critical**
- Monitor for negative side effects (latency, diversity, fairness)
- One bad metric can outweigh multiple positive metrics

**5. Iteration speed matters**
- Fast experiment cycles enable rapid learning
- Invest in infrastructure to accelerate testing

---

## Looking Forward

This work demonstrates my ability to:
- Design and execute rigorous A/B testing programs at scale
- Build and evaluate recommendation systems that drive revenue
- Combine academic research rigor with business pragmatism
- Deliver measurable impact in complex, high-stakes environments

**Interested in similar challenges?** I'm open to freelance projects and full-time opportunities in marketing analytics, experimentation, and recommendation systems. [Get in touch](mailto:naoufal.acharki@gmail.com).
