---
order: 3
title: "Causal inference and uncertainty quantification for energy production"
company: "TotalEnergies One Tech"
role: "Research Engineer, AI and Data Science R&D (industrial PhD with École Polytechnique)"
period: "Oct 2019 – Dec 2022"
context: "R&D branch of TotalEnergies; PhD supervised by Josselin Garnier (CMAP) and Antoine Bertoncello"
summary: "Three years of research where statistical learning meets causal inference: calibrated prediction intervals for gas-well production, and treatment-effect estimation for geothermal wells. It led to a patent application and papers at ICML and in CSDA."
stack: [Python, R, MATLAB, Gaussian processes, Meta-learners, Bayesian methods, Azure]
tags: [Causal inference, Gaussian processes, Uncertainty quantification, Research]
outcome_value: "ICML 2023"
outcome_label: "peer-reviewed paper, plus CSDA journal article"
outcome_delta: false
outcomes:
  - value: "3"
    label: "Scientific publications"
    basis: "ICML 2023, Computational Statistics and Data Analysis 2023, PhD thesis 2022"
  - value: "1"
    label: "Patent application"
    basis: "US 2024/0211803 A1, filed May 2021 with Antoine Bertoncello and Josselin Garnier"
  - value: "80%"
    label: "Confidence level of production forecasts"
    basis: "Gaussian-process prediction intervals calibrated by cross-validation"
description: "PhD research by Naoufal Acharki at TotalEnergies and École Polytechnique: Gaussian-process prediction intervals and meta-learners for multi-valued treatments, published at ICML 2023 and in CSDA."
---

## The problem

Energy companies make expensive decisions with very incomplete information. Forecasting what a well will produce calls for a believable range, not just a single number, and the operational questions are causal ones: what happens to output if we change this parameter? Field experiments cost too much to run casually, so the answers have to come from observational data and from models you can actually trust.

## What the research produced

The first strand was about **prediction intervals for Gaussian-process regression**. Standard fitting by maximum likelihood or cross-validation gives you a model that fits on average and says nothing about whether its 80% interval really covers 80% of outcomes. I developed a way to calibrate the intervals by cross-validation so that it does. That became the paper in *Computational Statistics and Data Analysis*.

The second strand was **causal inference for geothermal wells**: estimating the effect of operational decisions from observational data. Meta-learners (S-, T-, X- and R-learners) had been studied for binary treatments; I extended them to multi-valued treatments, which is what real operating parameters look like. That became the ICML 2023 paper.

Around both ran the usual uncertainty-quantification work: Bayesian modelling for decisions under uncertainty, sensitivity analysis to see what the models were really leaning on, and a lot of effort to fold domain knowledge into the statistics.

## What came out of it

A patent application for the prediction methodology, three publications (ICML 2023, CSDA and the thesis), and production forecasts with an 80% confidence level that fed into operational decisions. The results were presented to the Digital Factory stakeholders for deployment.

## Publications and patent

1. **Acharki, N.**, Lugo, R., Bertoncello, A., and Garnier, J. (2023). *Comparison of meta-learners for estimating multi-valued treatment heterogeneous effects.* ICML 2023.
2. **Acharki, N.**, Bertoncello, A., and Garnier, J. (2023). *Robust prediction interval estimation for Gaussian processes by cross-validation method.* Computational Statistics and Data Analysis, 178:107597.
3. **Acharki, N.** (2022). *Statistical learning and causal inference for energy production.* PhD thesis, École Polytechnique.
4. Bertoncello, A., **Acharki, N.**, and Garnier, J. *Method and electronic system for predicting value(s) of a quantity relative to a device, related operating method and computer program.* Patent application [US 2024/0211803 A1](https://patents.google.com/patent/US20240211803A1/en), filed May 2021.

## What I took away

Decision-makers don't want a prediction, they want to know how much to trust it, and an honest interval is worth more than a precise-looking point. "What if" questions need causal methods; correlation will happily lie to you. And the research only mattered because it was tied to a real operational problem from the start.
