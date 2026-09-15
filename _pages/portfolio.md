---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
.hero-portfolio {
  background: linear-gradient(135deg, #1E3A8A 0%, #06B6D4 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  text-align: center;
}

.hero-portfolio h1 {
  color: white;
  font-size: 2.5em;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.hero-portfolio .tagline {
  font-size: 1.3em;
  margin-bottom: 2rem;
  opacity: 0.95;
  font-weight: 300;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-portfolio .cta {
  background: white;
  color: #1E3A8A;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;
}

.hero-portfolio .cta:hover {
  background: #F59E0B;
  color: white;
  transform: translateY(-2px);
}

.case-study {
  background: white;
  border: 1px solid #CBD5E1;
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 2.5rem;
  transition: all 0.3s ease;
}

.case-study:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: #06B6D4;
}

.case-study.featured {
  border: 2px solid #06B6D4;
  background: linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%);
}

.case-study .company-badge {
  display: inline-block;
  background: #06B6D4;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.case-study.featured .company-badge {
  background: #1E3A8A;
}

.case-study h2 {
  color: #1E3A8A;
  font-size: 1.8em;
  margin-top: 0;
  margin-bottom: 1rem;
}

.case-study .metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #10B981;
}

.case-study.featured .metrics {
  border-left-color: #F59E0B;
}

.metric {
  text-align: center;
}

.metric .number {
  font-size: 2em;
  font-weight: 700;
  color: #1E3A8A;
  display: block;
}

.metric .label {
  font-size: 0.9em;
  color: #334155;
  margin-top: 0.25rem;
}

.case-study .section {
  margin: 1.5rem 0;
}

.case-study .section h3 {
  color: #1E3A8A;
  font-size: 1.2em;
  margin-bottom: 0.75rem;
}

.case-study .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.case-study .tag {
  background: #E0F2FE;
  color: #0C4A6E;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: 500;
}

.process-section {
  background: #F8FAFC;
  padding: 3rem 2rem;
  border-radius: 12px;
  margin: 3rem 0;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.process-step {
  text-align: center;
  padding: 1.5rem;
}

.process-step .number {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #1E3A8A;
  color: white;
  border-radius: 50%;
  line-height: 50px;
  font-weight: 700;
  font-size: 1.5em;
  margin-bottom: 1rem;
}

.process-step h3 {
  color: #1E3A8A;
  margin-bottom: 0.5rem;
}

.testimonial {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #06B6D4;
  margin: 1.5rem 0;
  font-style: italic;
  color: #334155;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.skill-category h3 {
  color: #1E3A8A;
  margin-bottom: 0.75rem;
}

.skill-category ul {
  line-height: 1.8;
}
</style>

<div class="hero-portfolio">
  <h1>I Turn Data Into Revenue-Driving Marketing Insights</h1>
  <p class="tagline">Specialized in causal inference, A/B testing, and recommendation systems that deliver measurable business impact—from €1M revenue lifts to 30% conversion increases.</p>
  <a href="mailto:naoufal.acharki@gmail.com" class="cta">Let's Work Together</a>
</div>

---

## Featured Case Studies

<div class="case-study featured">
  <span class="company-badge">Air France-KLM</span>
  <h2>Driving €1M Monthly Revenue with Smart Flight Recommendations</h2>

  <div class="section">
    <h3>The Challenge</h3>
    <p>When millions of travelers visit Air France-KLM websites to book flights, they face dozens of options. Which flight should rank first? Which fare class should we recommend? With millions of monthly visitors and bookings averaging €300-500, even a 0.5% improvement translates to significant revenue impact.</p>
  </div>

  <div class="section">
    <h3>My Approach</h3>
    <p>I lead experimentation and evaluation for two critical recommender systems:</p>
    <ul>
      <li><strong>Flight List Ranker:</strong> Personalizes flight rankings based on customer search behavior, booking history, and hundreds of signals to show flights customers are most likely to book</li>
      <li><strong>Branded Fare Recommender:</strong> Predicts customer willingness to pay for premium features and personalizes fare class recommendations (Basic vs. Flex)</li>
    </ul>
    <p>My role spans the complete lifecycle: offline evaluation on historical data → A/B test design and power analysis → live experiment monitoring → statistical analysis → final shipping decision.</p>
  </div>

  <div class="metrics">
    <div class="metric">
      <span class="number">+0.6%</span>
      <span class="label">Conversion Rate Lift</span>
    </div>
    <div class="metric">
      <span class="number">+0.5%</span>
      <span class="label">Revenue Per Visitor</span>
    </div>
    <div class="metric">
      <span class="number">€1M+</span>
      <span class="label">Monthly Revenue Impact</span>
    </div>
    <div class="metric">
      <span class="number">€12M+</span>
      <span class="label">Annualized Value</span>
    </div>
  </div>

  <div class="section">
    <h3>Why It Matters</h3>
    <p>This isn't "we built a model and hope it works." Every recommendation goes through rigorous A/B testing on millions of real users. I own the entire process—from designing experiments to making final deployment decisions. At this scale, even small optimizations drive massive business value.</p>
  </div>

  <div class="tags">
    <span class="tag">Recommendation Systems</span>
    <span class="tag">A/B Testing</span>
    <span class="tag">Causal Inference</span>
    <span class="tag">BigQuery</span>
    <span class="tag">Experimentation Design</span>
  </div>
</div>

<div class="case-study">
  <span class="company-badge">Senzai</span>
  <h2>30% Conversion Lift Through Marketing Campaign Optimization</h2>

  <div class="section">
    <h3>The Challenge</h3>
    <p>Digital marketing campaigns were struggling with low conversion rates and inefficient customer targeting. The startup needed a scalable ML solution to optimize campaign performance across millions of customers and interactions.</p>
  </div>

  <div class="section">
    <h3>My Approach</h3>
    <p>Designed and deployed an end-to-end recommendation system for customer targeting optimization:</p>
    <ul>
      <li><strong>Causal ML Models:</strong> Implemented uplift modeling and treatment effect estimation to identify high-propensity customers</li>
      <li><strong>Production Infrastructure:</strong> Built scalable MLOps pipelines using Docker, Kubernetes, Airflow, and MLflow on AWS</li>
      <li><strong>Data Engineering:</strong> Processed 50M+ interaction events across 3M customer profiles</li>
    </ul>
  </div>

  <div class="metrics">
    <div class="metric">
      <span class="number">+30%</span>
      <span class="label">Conversion Rate Increase</span>
    </div>
    <div class="metric">
      <span class="number">3M</span>
      <span class="label">Customers Scored</span>
    </div>
    <div class="metric">
      <span class="number">50M</span>
      <span class="label">Interactions Processed</span>
    </div>
  </div>

  <div class="section">
    <h3>Key Achievement</h3>
    <p>Established MLOps best practices and production-ready infrastructure that reduced time-to-deployment for new models from weeks to days. This wasn't just a model—it was a complete, scalable system.</p>
  </div>

  <div class="tags">
    <span class="tag">Uplift Modeling</span>
    <span class="tag">MLOps</span>
    <span class="tag">AWS</span>
    <span class="tag">Kubernetes</span>
    <span class="tag">Causal Inference</span>
    <span class="tag">Production ML</span>
  </div>
</div>

<div class="case-study">
  <span class="company-badge">Mercor</span>
  <h2>AI Evaluation for State-of-the-Art Language Models</h2>

  <div class="section">
    <h3>The Challenge</h3>
    <p>As LLMs become increasingly capable, robust evaluation methodologies are needed to test true reasoning vs. pattern matching. Leading AI labs needed challenging mathematical and statistical problems to benchmark frontier models.</p>
  </div>

  <div class="section">
    <h3>My Approach</h3>
    <p>Designed advanced mathematical problems spanning probability theory, statistical inference, optimization, and causal reasoning. Problems require multi-step reasoning and proper interpretation of uncertainty—areas where LLMs often struggle.</p>
  </div>

  <div class="section">
    <h3>Impact</h3>
    <p>Contributed to evaluation frameworks used by leading AI research labs, helping advance understanding of LLM mathematical capabilities and reasoning limitations.</p>
  </div>

  <div class="tags">
    <span class="tag">AI Evaluation</span>
    <span class="tag">Mathematics</span>
    <span class="tag">Statistics</span>
    <span class="tag">LLMs</span>
  </div>
</div>

---

## My Process

<div class="process-section">
  <h2 style="text-align: center; color: #1E3A8A; margin-bottom: 1rem;">How I Drive Measurable Impact</h2>
  <p style="text-align: center; max-width: 700px; margin: 0 auto 2rem auto; color: #334155;">A systematic approach from data to deployment, ensuring every insight translates to business value.</p>

  <div class="process-grid">
    <div class="process-step">
      <div class="number">1</div>
      <h3>Understand the Problem</h3>
      <p>Align with stakeholders on business objectives, success metrics, and constraints. Define clear KPIs.</p>
    </div>

    <div class="process-step">
      <div class="number">2</div>
      <h3>Data & Analysis</h3>
      <p>Explore customer behavior patterns, build features, and validate data quality. Perform exploratory causal analysis.</p>
    </div>

    <div class="process-step">
      <div class="number">3</div>
      <h3>Design Experiments</h3>
      <p>A/B test design, power analysis, sample size calculations. Offline evaluation to validate approach before going live.</p>
    </div>

    <div class="process-step">
      <div class="number">4</div>
      <h3>Build & Deploy</h3>
      <p>Develop ML models, establish MLOps pipelines, deploy to production with monitoring and alerting.</p>
    </div>

    <div class="process-step">
      <div class="number">5</div>
      <h3>Monitor & Iterate</h3>
      <p>Real-time experiment monitoring, statistical analysis, and rapid iteration based on results.</p>
    </div>

    <div class="process-step">
      <div class="number">6</div>
      <h3>Deliver Impact</h3>
      <p>Present findings, make data-driven shipping decisions, measure business outcomes, and scale successes.</p>
    </div>
  </div>
</div>

---

## Clients & Testimonials

<div class="testimonial">
  "Naoufal's rigorous approach to experimentation and causal inference helped us make data-driven decisions with confidence. His work on recommendation systems delivered measurable revenue impact."
  <br><br>
  <strong>— Marketing Operations Lead, Major European Airline</strong>
</div>

**Select Clients & Projects:**
- **Air France-KLM:** Recommendation systems & A/B testing for flight booking optimization
- **Senzai:** End-to-end ML infrastructure for marketing campaign optimization
- **Mercor:** AI evaluation frameworks for frontier language models
- **TotalEnergies:** Causal inference research (ICML 2023 publication)

---

## Core Competencies

<div class="skills-grid">
  <div class="skill-category">
    <h3>Marketing Data Science</h3>
    <ul>
      <li>Customer segmentation & propensity modeling</li>
      <li>Campaign optimization & attribution</li>
      <li>Personalization engines</li>
      <li>Conversion rate optimization</li>
    </ul>
  </div>

  <div class="skill-category">
    <h3>Experimentation & Causal Inference</h3>
    <ul>
      <li>A/B testing design & power analysis</li>
      <li>Treatment effect estimation</li>
      <li>Uplift modeling & meta-learners</li>
      <li>Sequential analysis</li>
    </ul>
  </div>

  <div class="skill-category">
    <h3>Recommendation Systems</h3>
    <ul>
      <li>Ranking algorithms (learning-to-rank)</li>
      <li>Collaborative filtering</li>
      <li>Contextual bandits</li>
      <li>Offline/online evaluation</li>
    </ul>
  </div>

  <div class="skill-category">
    <h3>Technical Stack</h3>
    <ul>
      <li>Python, R, SQL</li>
      <li>AWS, GCP (BigQuery), Azure</li>
      <li>Docker, Kubernetes, Airflow, MLflow</li>
      <li>Scikit-learn, XGBoost, CausalML</li>
    </ul>
  </div>
</div>

---

## About Me

PhD in Statistics & Machine Learning from École Polytechnique with 7+ years building production ML systems. Published at ICML 2023. Based in Paris, working with clients across Europe and North America. Fluent in English, French, and Arabic.

**Core strengths:** Combining academic rigor with business pragmatism. I don't just build models—I drive measurable revenue impact through rigorous experimentation and causal inference.

---

## Let's Work Together

I'm available for **freelance projects** and **full-time opportunities** in:

- Marketing analytics & customer intelligence
- A/B testing & experimentation programs
- Recommendation systems & personalization
- Causal ML & treatment effect estimation
- MLOps & production ML systems

**Ready to drive measurable impact?** [Get in touch](mailto:naoufal.acharki@gmail.com)
