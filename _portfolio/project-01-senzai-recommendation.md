---
order: 2
title: "Uplift-based targeting for digital marketing campaigns"
company: "Senzai"
role: "Senior Data Scientist and Machine Learning Engineer, Pipelines and MLOps Lead"
period: "Oct 2023 – Oct 2025"
context: "Marketing-analytics startup; re-engagement of dormant customers for B2C clients"
summary: "Designed and deployed the recommendation system that decides which customers to contact, when, and through which channel, using causal inference rather than propensity, and built the MLOps platform it runs on."
stack: [Python, CausalML, XGBoost, Airflow, MLflow, DVC, Docker, Kubernetes, AWS, GitLab CI/CD, FastAPI]
tags: [Uplift modelling, Causal ML, Recommender systems, MLOps, AWS]
outcome_value: "Up to 30%"
outcome_label: "higher conversion rate"
outcome_delta: true
outcomes:
  - value: "Up to 30%"
    label: "Higher conversion rate in targeted campaigns"
    basis: "Uplift-based targeting vs. previous targeting; 15% on drip campaigns, 30% on a telco newsletter"
    delta: true
  - value: "3M"
    label: "Customers scored in production"
    basis: "50M interaction events processed through the pipelines"
  - value: "Weeks → days"
    label: "Time to deploy a new model"
    basis: "Automated CI/CD, containerised training and scoring"
description: "Uplift-based campaign targeting at Senzai by Naoufal Acharki: causal inference models deciding whom to contact, when and on which channel, deployed on AWS with Airflow, MLflow and GitLab CI/CD."
---

## The problem

Thousands of leads go cold. Customers churn. They already know the brand; they just stopped engaging. Traditional marketing blasts everyone the same way, wasting budget on customers who will not respond and annoying those who would have converted anyway.

Senzai built a re-engagement engine that contacts the right customers at the right time with the right message. I built the models that make those decisions, and the platform that runs them.

## What I built

**Drip-campaign engine.** Decides who to contact, when (time of day, day of week), through which channel (email, SMS, ads) and with which message. It targets persuadables rather than merely likely responders, and delivered a 15% conversion uplift.

**Newsletter engine.** Predicts not just who will open an email but who will convert *because* of it, and optimises send time, frequency, content and subject line by customer segment. It delivered a 30% uplift for a telecom client by avoiding "sleeping dogs", customers who react badly to being contacted.

**Production system.** End-to-end MLOps infrastructure on AWS scoring 3 million customers across 50 million interactions: data-engineering modules, containerised training and scoring, orchestration with Airflow, experiment tracking with MLflow, and GitLab CI/CD. Deployment time for a new model went from weeks to days.

## How it works

1. **Data engineering.** Ingest customer interaction events, build behavioural features and customer profiles at scale.
2. **Causal models.** Estimate individual treatment effects with meta-learners (S-, T- and X-learners) so that campaigns target customers whose behaviour the contact will change.
3. **Serving.** Score customers in batch, expose recommendations through an API, and monitor them with dashboards.
4. **Experimentation.** An A/B testing framework validates each change against a control group before it becomes the default.

## Why it worked

Clients plug in their CRM data and the engine identifies who to target and who to leave alone. It was not just a model but a complete, tested system, which is what made the results repeatable across clients.

## What I learned

**Causal inference matters.** Uplift modelling, compared with traditional prediction models, made a measurable difference in identifying persuadable customers.

**Production first.** Building with deployment in mind from day one avoided costly refactoring.

**Experiment-driven culture.** An A/B testing framework enabled continuous iteration and measurable impact.
