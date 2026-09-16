---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
/* Smooth scroll and animations */
html {
  scroll-behavior: smooth;
}

.fade-in {
  animation: fadeIn 0.8s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Enhanced Hero Section */
.hero-portfolio {
  background: linear-gradient(135deg, #1E3A8A 0%, #0C4A6E 50%, #06B6D4 100%);
  color: white;
  padding: 5rem 2rem;
  border-radius: 16px;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(30, 58, 138, 0.3);
}

.hero-portfolio::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="white" opacity="0.03"/></svg>');
  background-size: 20px 20px;
  opacity: 0.5;
}

.hero-portfolio > * {
  position: relative;
  z-index: 1;
}

.hero-portfolio h1 {
  color: white;
  font-size: 3em;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-portfolio .tagline {
  font-size: 1.35em;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  font-weight: 400;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 2.5rem auto 0 auto;
}

.hero-stat {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.hero-stat:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-4px);
}

.hero-stat .stat-number {
  font-size: 2.2em;
  font-weight: 800;
  display: block;
  margin-bottom: 0.5rem;
  color: #FDE68A;
}

.hero-stat .stat-label {
  font-size: 1em;
  opacity: 0.95;
  line-height: 1.4;
}

/* Uplift Modeling Diagram */
.uplift-diagram {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  margin: 3rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid #06B6D4;
}

.uplift-diagram h3 {
  text-align: center;
  color: #1E3A8A;
  font-size: 1.8em;
  margin-bottom: 2rem;
  font-weight: 700;
}

.uplift-matrix {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.uplift-matrix::before {
  content: 'Treatment Effect (Uplift) →';
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  color: #1E3A8A;
  font-size: 0.9em;
}

.uplift-matrix::after {
  content: 'Propensity to Convert →';
  position: absolute;
  left: -180px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  font-weight: 600;
  color: #1E3A8A;
  font-size: 0.9em;
  white-space: nowrap;
}

.uplift-quadrant {
  padding: 1.8rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid;
}

.uplift-quadrant:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.uplift-quadrant.persuadables {
  background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
  border-color: #10B981;
}

.uplift-quadrant.sure-things {
  background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
  border-color: #3B82F6;
}

.uplift-quadrant.sleeping-dogs {
  background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
  border-color: #F59E0B;
}

.uplift-quadrant.lost-causes {
  background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%);
  border-color: #9CA3AF;
}

.uplift-quadrant .quad-title {
  font-weight: 700;
  font-size: 1.2em;
  margin-bottom: 0.5rem;
  color: #1E3A8A;
}

.uplift-quadrant .quad-desc {
  font-size: 0.9em;
  color: #334155;
  line-height: 1.5;
}

.uplift-quadrant .quad-action {
  margin-top: 0.75rem;
  font-weight: 600;
  font-size: 0.85em;
  color: #0C4A6E;
}

/* Callout Box */
.callout-box {
  background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
  border-left: 6px solid #F59E0B;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.2);
}

.callout-box .callout-icon {
  font-size: 2em;
  margin-bottom: 0.5rem;
}

.callout-box h4 {
  color: #92400E;
  font-size: 1.3em;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.callout-box p {
  color: #451A03;
  line-height: 1.7;
  margin: 0.5rem 0;
}

.callout-box strong {
  color: #92400E;
}

/* Enhanced Case Studies */
.case-study {
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 3rem;
  transition: all 0.4s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.case-study:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  border-color: #06B6D4;
  transform: translateY(-4px);
}

.case-study.featured {
  border: 3px solid #06B6D4;
  background: linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%);
  box-shadow: 0 8px 32px rgba(6, 182, 212, 0.2);
}

.case-study .company-badge {
  display: inline-block;
  background: #06B6D4;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 24px;
  font-size: 0.85em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
}

.case-study.featured .company-badge {
  background: #1E3A8A;
}

.case-study h2 {
  color: #1E3A8A;
  font-size: 2em;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

/* Enhanced Metrics with Icons */
.case-study .metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0;
}

.metric {
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.metric::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #06B6D4, #1E3A8A);
}

.metric:nth-child(1) { background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%); }
.metric:nth-child(1)::before { background: linear-gradient(90deg, #10B981, #059669); }

.metric:nth-child(2) { background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); }
.metric:nth-child(2)::before { background: linear-gradient(90deg, #F59E0B, #D97706); }

.metric:nth-child(3) { background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%); }
.metric:nth-child(3)::before { background: linear-gradient(90deg, #3B82F6, #2563EB); }

.metric:nth-child(4) { background: linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%); }
.metric:nth-child(4)::before { background: linear-gradient(90deg, #8B5CF6, #7C3AED); }

.metric:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.metric .icon {
  font-size: 2.5em;
  margin-bottom: 0.75rem;
  display: block;
}

.metric .number {
  font-size: 2.5em;
  font-weight: 800;
  color: #1E3A8A;
  display: block;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.metric .label {
  font-size: 0.95em;
  color: #475569;
  font-weight: 600;
  line-height: 1.4;
}

.case-study .section {
  margin: 2rem 0;
}

.case-study .section h3 {
  color: #1E3A8A;
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 3px solid #E0F2FE;
  padding-bottom: 0.5rem;
}

.case-study .section p {
  line-height: 1.8;
  color: #334155;
  font-size: 1.05em;
}

.case-study .section ul {
  line-height: 1.9;
  color: #334155;
}

.case-study .section li {
  margin: 0.75rem 0;
}

.case-study .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.case-study .tag {
  background: #E0F2FE;
  color: #075985;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 600;
  border: 1px solid #BAE6FD;
  transition: all 0.2s ease;
}

.case-study .tag:hover {
  background: #06B6D4;
  color: white;
  transform: scale(1.05);
}

/* Process Section */
.process-section {
  background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%);
  padding: 4rem 2rem;
  border-radius: 16px;
  margin: 4rem 0;
  border: 2px solid #DBEAFE;
}

.process-section h2 {
  text-align: center;
  color: #1E3A8A;
  font-size: 2.2em;
  font-weight: 800;
  margin-bottom: 1rem;
}

.process-section > p {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem auto;
  color: #475569;
  font-size: 1.1em;
  line-height: 1.7;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
}

.process-step {
  text-align: center;
  padding: 2rem 1.5rem;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 2px solid #E0F2FE;
}

.process-step:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(30, 58, 138, 0.15);
  border-color: #06B6D4;
}

.process-step .number {
  display: inline-block;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1E3A8A, #06B6D4);
  color: white;
  border-radius: 50%;
  line-height: 60px;
  font-weight: 800;
  font-size: 1.8em;
  margin-bottom: 1.5rem;
  box-shadow: 0 6px 20px rgba(30, 58, 138, 0.3);
}

.process-step h3 {
  color: #1E3A8A;
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.process-step p {
  color: #475569;
  line-height: 1.7;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
}

.skill-category {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #E0F2FE;
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: #06B6D4;
  box-shadow: 0 8px 24px rgba(6, 182, 212, 0.15);
  transform: translateY(-4px);
}

.skill-category h3 {
  color: #1E3A8A;
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 3px solid #06B6D4;
  padding-bottom: 0.5rem;
}

.skill-category ul {
  line-height: 2;
  list-style: none;
  padding-left: 0;
}

.skill-category li::before {
  content: "▸ ";
  color: #06B6D4;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* Section Headers */
.page-content h2 {
  color: #1E3A8A;
  font-size: 2.2em;
  font-weight: 800;
  margin: 3rem 0 2rem 0;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
}

.page-content h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #06B6D4, #1E3A8A);
  border-radius: 2px;
}

/* About Section */
.about-section {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 2px solid #E0F2FE;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  line-height: 1.8;
}

.about-section p {
  color: #334155;
  font-size: 1.05em;
  margin: 1rem 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-portfolio h1 {
    font-size: 2em;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .uplift-matrix::after,
  .uplift-matrix::before {
    display: none;
  }

  .case-study {
    padding: 2rem 1.5rem;
  }

  .case-study h2 {
    font-size: 1.5em;
  }
}
</style>

<div class="hero-portfolio fade-in">
  <h1>Measure what truly drives marketing growth.</h1>
  <p class="tagline">I use experimentation, causal inference, and customer-level modeling to help marketing teams target better, test smarter, and distinguish correlation from real incrementality.</p>

  <div class="hero-stats">
    <div class="hero-stat">
      <span class="stat-number">€1M+</span>
      <span class="stat-label">monthly revenue supported for airline businesses</span>
    </div>
    <div class="hero-stat">
      <span class="stat-number">5%+</span>
      <span class="stat-label">uplift from customer segmentation</span>
    </div>
    <div class="hero-stat">
      <span class="stat-number">15-30%</span>
      <span class="stat-label">conversion lift in drip campaigns and newsletter performance</span>
    </div>
  </div>
</div>

---

## Featured Case Studies

<div class="case-study featured fade-in">
  <span class="company-badge">Air France-KLM</span>
  <h2>From High-Propensity to High-Uplift: Driving €1M Monthly Revenue</h2>

  <div class="section">
    <h3>The Challenge</h3>
    <p>Picture this: millions of travelers visiting Air France-KLM to book flights. You have dozens of flight options and fare classes to recommend. The obvious approach? Show them what they're most likely to buy: target the high-propensity customers.</p>
    <p>But here's the problem: <strong>high propensity doesn't mean high uplift.</strong> Some customers will book regardless of what you show them. Others will never convert. The real value is in the persuadables, those you can influence.</p>
  </div>

  <div class="section">
    <h3>The Shift to Uplift Modeling</h3>
    <p>I moved us from predictive modeling to causal inference. Instead of asking "who will convert?" I ask "who will convert <em>because</em> of this recommendation?"</p>
    <p>This means identifying four customer segments:</p>
  </div>

  <div class="uplift-diagram">
    <h3>The Four Customer Segments</h3>
    <div class="uplift-matrix">
      <div class="uplift-quadrant persuadables">
        <div class="quad-title">🎯 Persuadables</div>
        <div class="quad-desc">Will convert BECAUSE of your recommendation</div>
        <div class="quad-action">→ Target them!</div>
      </div>
      <div class="uplift-quadrant sure-things">
        <div class="quad-title">✓ Sure Things</div>
        <div class="quad-desc">Will book anyway, regardless of treatment</div>
        <div class="quad-action">→ Don't waste effort</div>
      </div>
      <div class="uplift-quadrant sleeping-dogs">
        <div class="quad-title">💤 Sleeping Dogs</div>
        <div class="quad-desc">Will book cheaper if you show them</div>
        <div class="quad-action">→ Let them be!</div>
      </div>
      <div class="uplift-quadrant lost-causes">
        <div class="quad-title">✗ Lost Causes</div>
        <div class="quad-desc">Won't convert no matter what</div>
        <div class="quad-action">→ Skip them</div>
      </div>
    </div>
  </div>

  <div class="section">
    <h3>The Cannibalization Insight</h3>
  </div>

  <div class="callout-box">
    <div class="callout-icon">💡</div>
    <h4>Key Insight: Sometimes the best recommendation is NO recommendation</h4>
    <p><strong>Example:</strong> A customer is browsing a €400 flight. Your model predicts they're likely to book if you show them a €200 budget option. That's a conversion win, right?</p>
    <p><strong>Wrong.</strong> You just cannibalized €200 in revenue.</p>
    <p>By focusing on uplift rather than propensity, we identify when NOT showing a cheaper option preserves revenue. <strong>Conversion alone doesn't equal profit.</strong></p>
  </div>

  <div class="metrics">
    <div class="metric">
      <span class="icon">📈</span>
      <span class="number">>5%</span>
      <span class="label">Uplift in Target Segments</span>
    </div>
    <div class="metric">
      <span class="icon">💰</span>
      <span class="number">€1M+</span>
      <span class="label">Monthly Revenue Impact</span>
    </div>
    <div class="metric">
      <span class="icon">👥</span>
      <span class="number">Millions</span>
      <span class="label">Users in Experiments</span>
    </div>
    <div class="metric">
      <span class="icon">🎯</span>
      <span class="number">€12M+</span>
      <span class="label">Annualized Value</span>
    </div>
  </div>

  <div class="section">
    <h3>How I Deliver This</h3>
    <p>I own the complete experimentation lifecycle for Air France-KLM's flight ranking and fare recommendation systems:</p>
    <ul>
      <li>Offline causal evaluation on historical booking data</li>
      <li>A/B test design with power analysis across millions of visitors</li>
      <li>Real-time experiment monitoring and statistical analysis</li>
      <li>Final go/no-go shipping decisions based on evidence</li>
    </ul>
    <p>Every recommendation is battle-tested on real users. No guesswork, just rigorous science driving measurable revenue.</p>
  </div>

  <div class="tags">
    <span class="tag">Uplift Modeling</span>
    <span class="tag">Causal Inference</span>
    <span class="tag">A/B Testing</span>
    <span class="tag">Recommendation Systems</span>
    <span class="tag">BigQuery</span>
  </div>
</div>

<div class="case-study fade-in">
  <span class="company-badge">Senzai</span>
  <h2>AI-Powered Re-Engagement: 15-30% Uplift for Dormant Customers</h2>

  <div class="section">
    <h3>The Problem</h3>
    <p>Thousands of leads go cold. Customers churn. They already know your brand, they just stopped engaging. Traditional marketing blasts everyone the same way, wasting budget on customers who won't respond and annoying those who would have converted anyway.</p>
    <p>Senzai built an AI re-engagement engine that wakes up the right customers at the right time with the right message.</p>
  </div>

  <div class="section">
    <h3>My Role: Building the Brain</h3>
    <p>I designed and deployed two multi-stage causal ML pipelines that power intelligent customer targeting:</p>
    <ul>
      <li><strong>Drip Campaign Pipeline:</strong> A 4-layer treatment model optimizing who to contact, when (time of day, day of week), through which channel (email, SMS, ads), and with what message variant. Built using genS-Learner for multi-outcome optimization (open, click, conversion). Achieved 15% conversion uplift by targeting persuadables, not just high-propensity contacts.</li>
      <li><strong>Newsletter Pipeline:</strong> A 6-layer treatment model with ensemble majority voting predicting not just who will open emails, but who will convert because of them. Optimizes send time, frequency, content variant, and subject line across multiple customer segments. Delivered 30% uplift for telco client by avoiding "sleeping dogs."</li>
      <li><strong>Production Infrastructure:</strong> Built end-to-end MLOps pipelines on AWS with Docker, Kubernetes, Airflow, and MLflow. Scaled to score 3M customers across 50M+ interactions.</li>
    </ul>
  </div>

  <div class="metrics">
    <div class="metric">
      <span class="icon">🚀</span>
      <span class="number">15-30%</span>
      <span class="label">Conversion Uplift</span>
    </div>
    <div class="metric">
      <span class="icon">👤</span>
      <span class="number">3M</span>
      <span class="label">Customers Scored</span>
    </div>
    <div class="metric">
      <span class="icon">📊</span>
      <span class="number">50M+</span>
      <span class="label">Interactions Processed</span>
    </div>
  </div>

  <div class="section">
    <h3>Why It Worked</h3>
    <p>Easy integration, instant results, zero hassle. Clients plug in their CRM data, and the engine identifies exactly who to target and who to leave alone. This wasn't just a model, it was a complete, battle-tested system that reduced model deployment time from weeks to days.</p>
  </div>

  <div class="tags">
    <span class="tag">Re-Engagement</span>
    <span class="tag">Uplift Modeling</span>
    <span class="tag">MLOps</span>
    <span class="tag">AWS</span>
    <span class="tag">Kubernetes</span>
    <span class="tag">Causal ML</span>
  </div>
</div>

<div class="case-study fade-in">
  <span class="company-badge">Mercor</span>
  <h2>AI Evaluation for State-of-the-Art Language Models</h2>

  <div class="section">
    <h3>The Challenge</h3>
    <p>As LLMs become increasingly capable, robust evaluation methodologies are needed to test true reasoning vs. pattern matching. Leading AI labs needed challenging mathematical and statistical problems to benchmark frontier models.</p>
  </div>

  <div class="section">
    <h3>My Approach</h3>
    <p>Designed advanced mathematical problems spanning probability theory, statistical inference, optimization, and causal reasoning. Problems require multi-step reasoning and proper interpretation of uncertainty, areas where LLMs often struggle.</p>
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

<div class="process-section fade-in">
  <h2>How I Drive Measurable Impact</h2>
  <p>A systematic approach from data to deployment, ensuring every insight translates to business value.</p>

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

## Core Competencies

<div class="skills-grid fade-in">
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
</div>

---

## About Me

<div class="about-section fade-in">
  <p>PhD in Statistics & Machine Learning from École Polytechnique with 7+ years building production ML systems. Published at ICML 2023. Based in Paris, working with clients across Europe and North America. Fluent in English, French, and Arabic.</p>

  <p><strong>Core strengths:</strong> Combining academic rigor with business pragmatism. I don't just build models, I drive measurable revenue impact through rigorous experimentation and causal inference.</p>
</div>
