---
order: 2
title: "Uplift-based targeting for digital marketing campaigns"
company: "Senzai"
role: "ML lead: Senior Data Scientist and Machine Learning Engineer, Pipelines and MLOps Lead"
period: "Oct 2023 – Oct 2025"
context: "Marketing-analytics startup; re-engagement engine for two B2C clients, a telecom operator and a bank"
summary: "Led the machine learning of a re-engagement engine: developed, tested and deployed the recommendation system that decides which customers to contact, when, and through which channel, using causal inference rather than propensity, and built the pipelines, evaluation and CI/CD it runs on."
stack: [Python, CausalML, XGBoost, Airflow, MLflow, DVC, Docker, Kubernetes, AWS, GitLab CI/CD, FastAPI]
tags: [Uplift modelling, Causal ML, Recommender systems, MLOps, AWS]
outcome_value: "Up to 30%"
outcome_label: "relative conversion uplift"
outcome_delta: true
outcomes:
  - value: "+30%"
    label: "Conversion, relative uplift"
    basis: "Telecom client, re-engagement campaigns, engine vs. previous targeting"
    delta: true
  - value: "+5–15%"
    label: "Monthly conversion uplift"
    basis: "Bank client, drip campaigns on 500–1,000 new leads a day, engine on vs. the bank's CRM targeting"
    delta: true
  - value: "3M"
    label: "Customers scored in production"
    basis: "50M interaction events processed through the pipelines"
  - value: "Weeks → days"
    label: "Time to deploy a new model"
    basis: "Automated CI/CD, containerised training and scoring"
description: "Uplift-based campaign targeting at Senzai, led by Naoufal Acharki: causal models deciding whom to contact, when and on which channel, with +30% relative conversion for a telecom client and +5–15% monthly for a bank, deployed on AWS with Airflow, MLflow and GitLab CI/CD."
---

## The problem

Thousands of leads go cold. Customers churn. They already know the brand; they just stopped engaging. Traditional marketing blasts everyone the same way, wasting budget on customers who will not respond and annoying those who would have converted anyway.

Senzai built a re-engagement engine that contacts the right customers at the right time with the right message. I led the machine learning behind it: the models that make those decisions, and the platform that runs them.

## Two clients, two engines

**Telecom operator.** Re-engagement and newsletter campaigns for a small telecom company. The engine predicts not just who will open a message but who will convert *because* of it, and optimises send time, frequency, content and channel by customer segment, while avoiding "sleeping dogs", customers who react badly to being contacted. Result: a 30% relative uplift in conversion compared with the previous targeting.

**Bank.** Drip campaigns on a stream of 500 to 1,000 new leads a day, about 70,000 visitors over the campaign period. The engine decides who to contact, when (time of day, day of week) and through which channel (email, SMS, ads). Compared with the bank's existing CRM targeting, with the engine switched on versus off, monthly conversion rose by 5 to 15%.

## What I did as ML lead

- **Developed, tested and deployed the recommendation system**, from the causal models to the scoring service.
- **Contributed to the data pipelines** ingesting customer interaction events and building behavioural features and profiles at scale: 3 million customers, 50 million interactions.
- **Designed the evaluation methods and monitoring sensors** that tell whether a campaign is working and whether the models are drifting.
- **Built the production stack**: GitLab CI/CD, Docker on AWS EC2, Kubernetes, Airflow for orchestration, MLflow for experiment tracking and model versioning, DVC for data. Deployment time for a new model went from weeks to days.

## How it works

1. **Data engineering.** Ingest customer interaction events, build behavioural features and customer profiles at scale.
2. **Causal models.** Estimate individual treatment effects with meta-learners (S-, T- and X-learners) so that campaigns target customers whose behaviour the contact will change.
3. **Serving.** Score customers in batch, expose recommendations through an API, and monitor them with dashboards.
4. **Experimentation.** Each change is validated against a control group before it becomes the default.

## Why it worked

Clients plug in their CRM data and the engine identifies who to target and who to leave alone. It was not just a model but a complete, tested system, which is what made the results repeatable across two very different clients.

## What I learned

**Causal inference matters.** Uplift modelling, compared with traditional prediction models, made a measurable difference in identifying persuadable customers.

**Production first.** Building with deployment in mind from day one avoided costly refactoring.

**Experiment-driven culture.** Validating each change against a control group enabled continuous iteration and measurable impact.
