---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  background: white;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #06B6D4;
}

.project-card h3 {
  color: #1E3A8A;
  margin-top: 0;
  font-size: 1.25em;
}

.project-card .company {
  color: #06B6D4;
  font-weight: 600;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.project-card .description {
  color: #334155;
  line-height: 1.6;
  margin: 1rem 0;
}

.project-card .impact {
  background: #F1F5F9;
  padding: 0.75rem;
  border-radius: 4px;
  margin: 1rem 0;
  border-left: 3px solid #10B981;
}

.project-card .impact strong {
  color: #10B981;
}

.project-card .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.project-card .tag {
  background: #E0F2FE;
  color: #0C4A6E;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: 500;
}

.portfolio-intro {
  background: linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid #06B6D4;
}

.portfolio-intro h2 {
  margin-top: 0;
  color: #1E3A8A;
}
</style>

<div class="portfolio-intro">
  <h2>End-to-End ML Solutions for Marketing & Analytics</h2>
  <p>Specialized in designing, building, and deploying production-ready machine learning systems that drive measurable business impact. From recommendation engines to causal inference frameworks, I deliver solutions that combine academic rigor with engineering excellence.</p>
</div>

<div class="hero-project" style="background: linear-gradient(135deg, #1E3A8A 0%, #06B6D4 100%); color: white; padding: 3rem; border-radius: 12px; margin-bottom: 3rem;">
  <div style="font-size: 0.9em; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; opacity: 0.9;">Featured Case Study</div>
  <h2 style="color: white; font-size: 2em; margin: 0 0 1rem 0;">Air France-KLM: Recommendation Systems at Scale</h2>
  <p style="font-size: 1.2em; margin-bottom: 2rem; opacity: 0.95;">Driving €1M+ monthly revenue through intelligent flight recommendations and rigorous experimentation</p>
  <a href="/portfolio/project-02-airfrance-personalization/" style="background: white; color: #1E3A8A; padding: 0.75rem 2rem; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block; transition: all 0.3s ease;">Read Full Case Study →</a>
</div>

<h2 style="margin-top: 3rem; margin-bottom: 1.5rem; color: #1E3A8A;">Marketing Data Science Projects</h2>

<div class="portfolio-grid">

  <div class="project-card">
    <div class="company">Senzai</div>
    <h3>Marketing Campaign Recommendation System</h3>
    <p class="description">
      Built end-to-end ML pipeline for customer targeting optimization in digital marketing campaigns. Established MLOps practices and deployed scalable infrastructure using Docker, Kubernetes, Airflow, and MLflow on AWS.
    </p>
    <div class="impact">
      <strong>Impact:</strong> Achieved up to 30% increase in conversion rates across 3 million customers and 50 million interactions.
    </div>
    <div class="tags">
      <span class="tag">Recommendation ML</span>
      <span class="tag">Causal Inference</span>
      <span class="tag">MLOps</span>
      <span class="tag">AWS</span>
      <span class="tag">Kubernetes</span>
      <span class="tag">Production Systems</span>
    </div>
  </div>

  <div class="project-card">
    <div class="company">Mercor</div>
    <h3>LLM Reasoning Challenges for AI Labs</h3>
    <p class="description">
      Designed advanced mathematical and statistical problems to test and challenge state-of-the-art language models. Contributed to evaluation frameworks for assessing reasoning capabilities of frontier AI systems.
    </p>
    <div class="impact">
      <strong>Impact:</strong> Helped improve LLM evaluation methodologies for leading AI research labs.
    </div>
    <div class="tags">
      <span class="tag">AI Evaluation</span>
      <span class="tag">Mathematics</span>
      <span class="tag">Statistics</span>
      <span class="tag">LLMs</span>
    </div>
  </div>

</div>

<h2 style="margin-top: 3rem; margin-bottom: 1.5rem; color: #334155;">Additional Experience</h2>

<div style="background: #F8FAFC; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #CBD5E1;">
  <p style="margin: 0; color: #334155; line-height: 1.6;"><strong>Research & Development Background:</strong> PhD in Statistics & Machine Learning from École Polytechnique, with published research at ICML 2023 and patent filing for novel prediction methodologies. Previous experience at TotalEnergies (causal inference, Gaussian processes) and namR (large-scale ML optimization).</p>
</div>

## Expertise Areas

**Marketing Data Science**: Customer segmentation, propensity modeling, attribution, campaign optimization, personalization engines

**Causal Inference**: Treatment effect estimation, uplift modeling, experimentation design, A/B testing frameworks

**MLOps & Production**: Docker, Kubernetes, Airflow, MLflow, CI/CD pipelines, cloud infrastructure (AWS, GCP, Azure)

**Statistical Methods**: Bayesian modeling, uncertainty quantification, time series, recommendation systems

---

**Looking for collaboration?** I'm available for freelance projects and consulting engagements in marketing analytics, causal ML, and production ML systems. [Get in touch](mailto:naoufal.acharki@gmail.com).
