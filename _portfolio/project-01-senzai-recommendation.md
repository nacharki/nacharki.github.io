---
title: "Marketing Campaign Recommendation System"
excerpt: "End-to-end ML solution increasing conversion rates by 30% across 3M customers and 50M interactions"
collection: portfolio
date: 2023-10-01
company: "Senzai"
role: "Senior Data Scientist & ML Engineer"
tags:
  - Recommendation Systems
  - Causal Inference
  - MLOps
  - AWS
  - Production ML
---

## Overview

Designed and deployed a sophisticated recommendation system to optimize customer targeting during digital marketing campaigns for a data infrastructure and analytics startup.

## Challenge

Marketing teams struggled with:
- Low conversion rates in digital campaigns
- Inefficient customer targeting strategies
- Lack of personalization at scale
- No systematic approach to measure treatment effects

## Solution

### Technical Architecture

Built an end-to-end ML pipeline incorporating:

**1. Data Engineering**
- Ingested and processed 50M+ customer interaction events
- Built scalable ETL pipelines handling 3M customer profiles
- Implemented feature engineering for behavioral signals

**2. Machine Learning Models**
- Developed causal inference models to estimate treatment effects
- Implemented uplift modeling to identify high-propensity customers
- Used meta-learners (T-learner, S-learner, X-learner) for heterogeneous treatment effects

**3. MLOps Infrastructure**
- Containerized models using Docker
- Orchestrated workflows with Apache Airflow
- Managed experiments and model versioning with MLflow
- Deployed on AWS EC2 with Kubernetes for auto-scaling
- Implemented CI/CD pipelines via GitLab

**4. Production Deployment**
- Real-time scoring API using FastAPI
- A/B testing framework for continuous optimization
- Monitoring dashboards with Grafana

### Technology Stack

- **Languages**: Python, SQL
- **ML Libraries**: Scikit-learn, XGBoost, CausalML
- **Data**: AWS Redshift, PostgreSQL
- **Orchestration**: Airflow, Kubernetes
- **MLOps**: Docker, MLflow, DVC, GitLab CI/CD
- **Cloud**: AWS (EC2, S3, Redshift)

## Impact

- **30% increase** in conversion rates for targeted campaigns
- **3 million** customers scored in production
- **50 million** interaction events processed
- Established scalable MLOps best practices across the organization
- Reduced time-to-production for new models from weeks to days

## Key Learnings

1. **Causal Inference Matters**: Using uplift modeling vs traditional prediction models revealed significant improvements in identifying persuadable customers

2. **Production-First Mindset**: Building with deployment in mind from day one avoided costly refactoring

3. **Experiment-Driven Culture**: A/B testing framework enabled continuous iteration and measurable impact

## Skills Demonstrated

- End-to-end ML pipeline development
- Causal inference and experimentation
- MLOps and production engineering
- Cloud infrastructure (AWS)
- Cross-functional collaboration with marketing teams
