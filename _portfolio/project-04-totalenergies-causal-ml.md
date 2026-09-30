---
order: 3
title: "Causal inference and uncertainty quantification for energy production"
company: "TotalEnergies One Tech"
role: "Research Engineer, AI and Data Science R&D (industrial PhD with École Polytechnique)"
period: "Oct 2019 – Dec 2022"
context: "R&D branch of TotalEnergies; PhD supervised by Josselin Garnier (CMAP) and Antoine Bertoncello"
summary: "Research at the intersection of statistical learning and causal inference: calibrated prediction intervals for gas-well production, and treatment-effect estimation for geothermal wells, leading to a patent filing and publications at ICML and in CSDA."
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
    label: "Patent filing"
    basis: "Novel prediction methodology for well production"
  - value: "80%"
    label: "Confidence level of production forecasts"
    basis: "Gaussian-process prediction intervals calibrated by cross-validation"
description: "PhD research by Naoufal Acharki at TotalEnergies and École Polytechnique: Gaussian-process prediction intervals and meta-learners for multi-valued treatments, published at ICML 2023 and in CSDA."
---

## The challenge

Energy companies make expensive decisions under high uncertainty. Forecasting well production needs robust prediction intervals, not just point estimates, and operational questions are causal: what would happen to output if we changed this parameter? Field experiments are costly, so the answers have to come from observational data and reliable models.

## Research contributions

**Gaussian-process regression for production prediction.** Developed a method for robust prediction-interval estimation, calibrating the intervals by cross-validation so that an 80% interval really covers 80% of outcomes. Published in *Computational Statistics and Data Analysis*.

**Causal inference for geothermal wells.** Applied treatment-effect estimation to operational decisions and extended meta-learners (S-, T-, X- and R-learners) from binary treatments to multi-valued treatments. Published at ICML 2023.

**Uncertainty quantification.** Bayesian modelling for decision-making under uncertainty, sensitivity analysis for model robustness, and integration of domain knowledge with statistical methods.

## Outcomes

The work led to a patent filing for a novel prediction methodology, three scientific publications (ICML 2023, CSDA and the PhD thesis), and production forecasts with an 80% confidence level that supported operational decisions. Results were presented to Digital Factory stakeholders for real-world deployment.

## Publications

1. **Acharki, N.**, Lugo, R., Bertoncello, A., and Garnier, J. (2023). *Comparison of meta-learners for estimating multi-valued treatment heterogeneous effects.* ICML 2023.
2. **Acharki, N.**, Bertoncello, A., and Garnier, J. (2023). *Robust prediction interval estimation for Gaussian processes by cross-validation method.* Computational Statistics and Data Analysis, 178:107597.
3. **Acharki, N.** (2022). *Statistical learning and causal inference for energy production.* PhD thesis, École Polytechnique.

## What I learned

**Academic rigour plus industrial impact.** Bridging theoretical research with practical applications is what drove the innovation.

**Uncertainty matters.** Decision-makers need reliable uncertainty estimates, not just predictions.

**Causal thinking.** Answering "what if" questions requires causal methods, not correlation.
