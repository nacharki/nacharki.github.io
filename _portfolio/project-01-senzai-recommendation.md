---
order: 2
title: "Uplift-based targeting for digital marketing campaigns"
company: "Senzai"
role: "ML lead: Senior Data Scientist and Machine Learning Engineer, Pipelines and MLOps Lead"
period: "Oct 2023 – Oct 2025"
context: "Marketing-analytics startup; a re-engagement engine for two B2C clients, a telecom operator and a bank"
summary: "I led the machine learning of a re-engagement engine: the recommendation system that decides which customers to contact, when, and through which channel, built on causal inference rather than propensity, plus the pipelines, evaluation and CI/CD it runs on."
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
opening: "Someone stopped opening the newsletters six months ago. The CRM tool would email them again on Thursday, along with everyone else. The engine’s answer is different: for this customer, nothing this week; for the next one in the table, a text message on Saturday morning. Do that three million times and you get the numbers below."
---

## The problem

Leads go cold. Customers drift away. They already know the brand, they've just stopped responding. The usual answer is to message everyone the same way, which wastes budget on people who were never going to respond and annoys the ones who would have come back on their own.

Senzai built a re-engagement engine to contact the right customers at the right moment, with the right message. I led the machine learning behind it: the models that make those calls, and the platform that runs them.

## Two clients, two engines

For a **small telecom operator**, the engine ran re-engagement and newsletter campaigns. It predicts not just who will open a message but who will convert *because* of it, and tunes send time, frequency, content and channel by segment, while leaving alone the "sleeping dogs", the customers who react badly to being contacted at all. Conversion came out 30% higher than with the previous targeting.

For a **bank**, the job was drip campaigns on a stream of 500 to 1,000 new leads a day, about 70,000 visitors over the campaign period. The engine decides who to contact, when (time of day, day of week) and through which channel (email, SMS, ads). Measured against the bank's existing CRM targeting, with the engine switched on versus off, monthly conversion rose by 5 to 15%.

{% include fig-senzai-uplift.html %}

## What I did

Leading the ML meant, in practice, four things. I built, tested and deployed the recommendation system itself, from the causal models through to the scoring service. I worked on the data pipelines that turn 50 million interaction events into features for 3 million customers. I designed the evaluation and the monitoring, so we knew whether a campaign was working and whether a model was drifting. And I set up the stack it all ran on: GitLab CI/CD, Docker on AWS EC2, Kubernetes, Airflow, MLflow and DVC. Getting a new model into production went from weeks to days.

## How it works

Customer interaction events are ingested and turned into behavioural features and profiles. Meta-learners (S-, T- and X-learners) estimate the effect of a contact on each individual, so a campaign targets the people it will actually move. Customers are scored in batch, the recommendations are exposed through an API, and dashboards keep an eye on the whole thing. Every change is checked against a control group before it becomes the default.

## Why it worked

A client plugs in their CRM data and the engine tells them who to target and who to leave alone. What made the results hold up across two very different clients wasn't a clever model on its own, it was having a complete, tested system around it.

## What I took away

Uplift modelling earned its keep: compared with ordinary prediction, it made a measurable difference in finding the persuadable customers. Building for production from the first day saved a painful rewrite later. And having a control group behind every change is what turned "we think it works" into numbers we could show the client.
