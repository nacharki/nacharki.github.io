---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
/* ========================================
   CORE STYLES & ANIMATIONS
   ======================================== */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

.page__content {
  overflow-x: hidden;
}

/* Ensure sections don't overflow */
.hero-portfolio,
.case-studies-container,
.dark-section,
.process-section,
.skills-grid,
.about-section {
  max-width: 100%;
}

/* Fade in on scroll animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

/* ========================================
   HERO SECTION - Parallax & Glassmorphism
   ======================================== */

.hero-portfolio {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0c4a6e 50%, #0e7490 75%, #06b6d4 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  color: white;
  padding: 6rem 2rem;
  border-radius: 16px;
  margin: 0 0 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(6, 182, 212, 0.4);
}

/* Animated background pattern */
.hero-portfolio::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background:
    linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.05) 50%, transparent 70%),
    linear-gradient(-45deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%);
  background-size: 100px 100px;
  animation: float 20s ease-in-out infinite;
  opacity: 0.6;
}

.hero-portfolio > * {
  position: relative;
  z-index: 1;
}

/* Gradient text effect */
.hero-portfolio h1 {
  background: linear-gradient(135deg, #ffffff 0%, #fde68a 50%, #06b6d4 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3.5em;
  font-weight: 900;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  letter-spacing: -0.03em;
  animation: gradientShift 8s ease infinite;
}

.hero-portfolio .tagline {
  font-size: 1.4em;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0.95;
  font-weight: 400;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

/* Glassmorphism stats cards */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 3rem auto 0 auto;
  perspective: 1000px;
}

.hero-stat {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  padding: 2rem 1.5rem;
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
}

.hero-stat:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-8px) scale(1.02) rotateX(5deg);
  border-color: rgba(253, 224, 71, 0.6);
  box-shadow:
    0 20px 50px rgba(6, 182, 212, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.hero-stat .stat-number {
  font-size: 2.8em;
  font-weight: 900;
  display: block;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #fde68a 0%, #fbbf24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Monaco', 'Courier New', monospace;
  letter-spacing: -0.02em;
}

.hero-stat .stat-label {
  font-size: 1.05em;
  opacity: 0.95;
  line-height: 1.5;
  font-weight: 500;
}

/* ========================================
   SECTION DIVIDERS & BACKGROUNDS
   ======================================== */

.section-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #06b6d4 50%, transparent 100%);
  margin: 5rem 0;
  opacity: 0.3;
}

.dark-section {
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  color: white;
  padding: 5rem 2rem;
  margin: 5rem 0;
  border-radius: 24px;
  position: relative;
}

.dark-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.dark-section > * {
  position: relative;
  z-index: 1;
}

/* ========================================
   SECTION HEADERS
   ======================================== */

.section-header {
  text-align: center;
  margin: 5rem 0 4rem 0;
}

.section-header h2 {
  font-size: 3em;
  font-weight: 900;
  background: linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-header p {
  font-size: 1.2em;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.dark-section .section-header h2 {
  background: linear-gradient(135deg, #fde68a 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark-section .section-header p {
  color: #cbd5e1;
}

/* ========================================
   CASE STUDIES - Split Layout
   ======================================== */

.case-studies-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.case-study {
  background: white;
  border-radius: 24px;
  margin-bottom: 6rem;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

.case-study:hover {
  box-shadow: 0 20px 60px rgba(6, 182, 212, 0.2);
  transform: translateY(-8px);
}

.case-study.featured {
  border: 3px solid;
  border-image: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6) 1;
  box-shadow: 0 8px 40px rgba(6, 182, 212, 0.25);
}

.case-study-header {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 3rem;
  position: relative;
  overflow: hidden;
}

.case-study-header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 60%;
  height: 200%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
  animation: float 15s ease-in-out infinite;
}

.case-study.featured .case-study-header {
  background: linear-gradient(135deg, #1e3a8a 0%, #0c4a6e 50%, #155e75 100%);
  color: white;
}

.company-badge {
  display: inline-block;
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-size: 0.85em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  box-shadow: 0 6px 20px rgba(6, 182, 212, 0.4);
  position: relative;
  z-index: 1;
}

.case-study.featured .company-badge {
  background: linear-gradient(135deg, #fde68a 0%, #fbbf24 100%);
  color: #1e3a8a;
}

.case-study h2 {
  font-size: 2.2em;
  font-weight: 900;
  color: #1e3a8a;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  position: relative;
  z-index: 1;
}

.case-study.featured h2 {
  color: white;
}

/* Split content layout */
.case-study-content {
  padding: 3rem;
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 2rem 0;
}

.split-layout .left-col,
.split-layout .right-col {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.case-study .section {
  margin: 2rem 0;
}

.case-study .section h3 {
  color: #1e3a8a;
  font-size: 1.6em;
  font-weight: 800;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.case-study .section h3::before {
  content: '';
  width: 6px;
  height: 100%;
  background: linear-gradient(180deg, #06b6d4 0%, #3b82f6 100%);
  border-radius: 3px;
}

.case-study .section p {
  line-height: 1.9;
  color: #475569;
  font-size: 1.05em;
}

.case-study .section ul {
  line-height: 2;
  color: #475569;
  padding-left: 1.5rem;
}

.case-study .section li {
  margin: 0.75rem 0;
  position: relative;
}

.case-study .section li::marker {
  color: #06b6d4;
  font-weight: bold;
}

/* ========================================
   UPLIFT DIAGRAM - Interactive 2x2
   ======================================== */

.uplift-diagram {
  background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
  border-radius: 24px;
  padding: 3rem;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.2);
  border: 2px solid #fbbf24;
}

.uplift-diagram h3 {
  text-align: center;
  color: #92400e;
  font-size: 2em;
  margin-bottom: 3rem;
  font-weight: 900;
}

.uplift-matrix {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 3rem 1rem 1rem 3rem;
}

/* Axis labels */
.uplift-matrix::before {
  content: 'Treatment Effect (Uplift) →';
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  color: #92400e;
  font-size: 0.95em;
  background: rgba(254, 243, 199, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  white-space: nowrap;
}

.uplift-matrix::after {
  content: 'Propensity →';
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  font-weight: 700;
  color: #92400e;
  font-size: 0.95em;
  background: rgba(254, 243, 199, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  white-space: nowrap;
  transform-origin: center;
}

.uplift-quadrant {
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 3px solid;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.uplift-quadrant::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.3) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.uplift-quadrant:hover {
  transform: scale(1.08) rotate(2deg);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.uplift-quadrant:hover::before {
  opacity: 1;
}

.uplift-quadrant.persuadables {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-color: #10b981;
}

.uplift-quadrant.sure-things {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-color: #3b82f6;
}

.uplift-quadrant.sleeping-dogs {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
  border-color: #f97316;
}

.uplift-quadrant.lost-causes {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border-color: #94a3b8;
}

.uplift-quadrant .quad-title {
  font-weight: 900;
  font-size: 1.4em;
  margin-bottom: 0.75rem;
  color: #1e293b;
  position: relative;
  z-index: 1;
}

.uplift-quadrant .quad-desc {
  font-size: 0.95em;
  color: #334155;
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.uplift-quadrant .quad-action {
  margin-top: 1rem;
  font-weight: 800;
  font-size: 1em;
  color: #0f172a;
  position: relative;
  z-index: 1;
}

/* ========================================
   CALLOUT BOX
   ======================================== */

.callout-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-left: 8px solid #f59e0b;
  border-radius: 16px;
  padding: 2.5rem;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.25);
  position: relative;
  overflow: hidden;
}

.callout-box::before {
  content: '💡';
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 3em;
  opacity: 0.2;
}

.callout-box h4 {
  color: #92400e;
  font-size: 1.5em;
  margin: 0 0 1.2rem 0;
  font-weight: 900;
}

.callout-box p {
  color: #78350f;
  line-height: 1.8;
  margin: 0.75rem 0;
  font-size: 1.05em;
}

.callout-box strong {
  color: #92400e;
  font-weight: 800;
}

/* ========================================
   METRICS - Animated Counters
   ======================================== */

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.metric {
  text-align: center;
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.metric::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  transition: height 0.3s ease;
}

.metric:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.metric:hover::before {
  height: 100%;
  opacity: 0.1;
}

.metric:nth-child(1) { border-top: 4px solid #10b981; }
.metric:nth-child(2) { border-top: 4px solid #f59e0b; }
.metric:nth-child(3) { border-top: 4px solid #3b82f6; }
.metric:nth-child(4) { border-top: 4px solid #8b5cf6; }

.metric .number {
  font-size: 3em;
  font-weight: 900;
  background: linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: 0.75rem;
  line-height: 1;
  font-family: 'Monaco', 'Courier New', monospace;
  letter-spacing: -0.02em;
}

.metric .label {
  font-size: 1em;
  color: #64748b;
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85em;
}

/* ========================================
   TAGS
   ======================================== */

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 2px solid #f1f5f9;
}

.tag {
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  color: #075985;
  padding: 0.6rem 1.2rem;
  border-radius: 24px;
  font-size: 0.85em;
  font-weight: 700;
  border: 2px solid #7dd3fc;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tag:hover {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  color: white;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.3);
}

/* ========================================
   PROCESS SECTION
   ======================================== */

.process-section {
  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
  padding: 5rem 2rem;
  border-radius: 24px;
  margin: 5rem 0;
  border: 2px solid #dbeafe;
  position: relative;
  overflow: hidden;
}

.process-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 70%;
  height: 200%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%);
  animation: float 20s ease-in-out infinite;
}

.process-section > * {
  position: relative;
  z-index: 1;
}

.process-section h2 {
  text-align: center;
  font-size: 2.5em;
  font-weight: 900;
  background: linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
}

.process-section > p {
  text-align: center;
  max-width: 750px;
  margin: 0 auto 4rem auto;
  color: #64748b;
  font-size: 1.15em;
  line-height: 1.8;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.process-step {
  text-align: center;
  padding: 2.5rem 2rem;
  background: white;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 3px solid #e0f2fe;
  position: relative;
  overflow: hidden;
}

.process-step::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.process-step:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 20px 50px rgba(6, 182, 212, 0.2);
  border-color: #06b6d4;
}

.process-step:hover::before {
  opacity: 1;
}

.process-step .number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%);
  color: white;
  border-radius: 50%;
  font-weight: 900;
  font-size: 2em;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
  position: relative;
  z-index: 1;
}

.process-step h3 {
  color: #1e3a8a;
  font-size: 1.4em;
  font-weight: 800;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.process-step p {
  color: #64748b;
  line-height: 1.8;
  position: relative;
  z-index: 1;
}

/* ========================================
   SKILLS SECTION
   ======================================== */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin: 3rem 0;
}

.skill-category {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  border: 3px solid #e0f2fe;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(180deg, #06b6d4 0%, #3b82f6 100%);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s ease;
}

.skill-category:hover {
  border-color: #06b6d4;
  box-shadow: 0 12px 40px rgba(6, 182, 212, 0.2);
  transform: translateY(-8px);
}

.skill-category:hover::before {
  transform: scaleY(1);
}

.skill-category h3 {
  color: #1e3a8a;
  font-size: 1.5em;
  font-weight: 900;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #06b6d4;
}

.skill-category ul {
  line-height: 2.2;
  list-style: none;
  padding-left: 0;
}

.skill-category li {
  position: relative;
  padding-left: 1.8rem;
  color: #475569;
  font-size: 1.05em;
  transition: all 0.2s ease;
}

.skill-category li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #06b6d4;
  font-weight: bold;
  font-size: 1.2em;
  transition: all 0.2s ease;
}

.skill-category li:hover {
  color: #1e3a8a;
  transform: translateX(5px);
}

.skill-category li:hover::before {
  color: #0891b2;
  transform: scale(1.3);
}

/* ========================================
   ABOUT SECTION
   ======================================== */

.about-section {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  border: 3px solid #e0f2fe;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  line-height: 1.9;
  max-width: 900px;
  margin: 0 auto;
}

.about-section p {
  color: #475569;
  font-size: 1.1em;
  margin: 1.2rem 0;
}

.about-section strong {
  color: #1e3a8a;
  font-weight: 800;
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */

@media (max-width: 1024px) {
  .split-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-portfolio h1 {
    font-size: 2.2em;
  }

  .hero-portfolio .tagline {
    font-size: 1.1em;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .section-header h2 {
    font-size: 2em;
  }

  .uplift-matrix::after,
  .uplift-matrix::before {
    display: none;
  }

  .uplift-matrix {
    padding: 1rem;
    gap: 1.5rem;
  }

  .case-study-header,
  .case-study-content {
    padding: 2rem;
  }

  .case-study h2 {
    font-size: 1.7em;
  }

  .metrics {
    grid-template-columns: 1fr;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .dark-section {
    margin: 3rem 0;
    padding: 3rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-portfolio {
    padding: 4rem 1.5rem;
  }

  .hero-portfolio h1 {
    font-size: 1.8em;
  }

  .section-header h2 {
    font-size: 1.8em;
  }

  .uplift-matrix {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="hero-portfolio fade-in-up">
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

<div class="section-divider"></div>

<div class="section-header fade-in-up">
  <h2>Featured Case Studies</h2>
  <p>Real business problems. Rigorous science. Measurable revenue impact.</p>
</div>

<div class="case-studies-container">
  <div class="case-study featured slide-in-left">
    <div class="case-study-header">
      <span class="company-badge">Air France-KLM</span>
      <h2>From High-Propensity to High-Uplift: Driving €1M Monthly Revenue</h2>
    </div>

    <div class="case-study-content">
      <div class="split-layout">
        <div class="left-col">
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
        </div>

        <div class="right-col">
          <div class="uplift-diagram">
            <h3>The Four Customer Segments</h3>
            <div class="uplift-matrix">
              <div class="uplift-quadrant persuadables">
                <div class="quad-title">Persuadables</div>
                <div class="quad-desc">Will convert BECAUSE of your recommendation</div>
                <div class="quad-action">→ Target them!</div>
              </div>
              <div class="uplift-quadrant sure-things">
                <div class="quad-title">Sure Things</div>
                <div class="quad-desc">Will book anyway, regardless of treatment</div>
                <div class="quad-action">→ Don't waste effort</div>
              </div>
              <div class="uplift-quadrant sleeping-dogs">
                <div class="quad-title">Sleeping Dogs</div>
                <div class="quad-desc">Will book cheaper if you show them</div>
                <div class="quad-action">→ Let them be!</div>
              </div>
              <div class="uplift-quadrant lost-causes">
                <div class="quad-title">Lost Causes</div>
                <div class="quad-desc">Won't convert no matter what</div>
                <div class="quad-action">→ Skip them</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>The Cannibalization Insight</h3>
      </div>

      <div class="callout-box">
        <h4>Key Insight: Sometimes the best recommendation is NO recommendation</h4>
        <p><strong>Example:</strong> A customer is browsing a €400 flight. Your model predicts they're likely to book if you show them a €200 budget option. That's a conversion win, right?</p>
        <p><strong>Wrong.</strong> You just cannibalized €200 in revenue.</p>
        <p>By focusing on uplift rather than propensity, we identify when NOT showing a cheaper option preserves revenue. <strong>Conversion alone doesn't equal profit.</strong></p>
      </div>

      <div class="metrics">
        <div class="metric">
          <span class="number">>5%</span>
          <span class="label">Uplift in Target Segments</span>
        </div>
        <div class="metric">
          <span class="number">€1M+</span>
          <span class="label">Monthly Revenue Impact</span>
        </div>
        <div class="metric">
          <span class="number">160k Daily</span>
          <span class="label">Visitors (~5M Monthly)</span>
        </div>
        <div class="metric">
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
  </div>

  <div class="case-study slide-in-right">
    <div class="case-study-header">
      <span class="company-badge">Senzai</span>
      <h2>AI-Powered Re-Engagement: 15-30% Uplift for Dormant Customers</h2>
    </div>

    <div class="case-study-content">
      <div class="section">
        <h3>The Problem</h3>
        <p>Thousands of leads go cold. Customers churn. They already know your brand, they just stopped engaging. Traditional marketing blasts everyone the same way, wasting budget on customers who won't respond and annoying those who would have converted anyway.</p>
        <p>Senzai built an AI re-engagement engine that wakes up the right customers at the right time with the right message.</p>
      </div>

      <div class="section">
        <h3>My Role: Building the Brain</h3>
        <p>I designed and deployed two intelligent targeting pipelines that identify exactly which customers to contact, when, and through which channel:</p>
        <ul>
          <li><strong>Drip Campaign Engine:</strong> Optimizes who to contact, when (time of day, day of week), through which channel (email, SMS, ads), and with what message. Delivered 15% conversion uplift by targeting persuadables, not just likely responders.</li>
          <li><strong>Newsletter Engine:</strong> Predicts not just who will open emails, but who will actually convert because of them. Optimizes send time, frequency, content, and subject line across customer segments. Delivered 30% uplift for telco client by avoiding "sleeping dogs."</li>
          <li><strong>Production System:</strong> Built end-to-end MLOps infrastructure on AWS to score 100k customers across 3M interactions. Automated pipelines reduced deployment time from weeks to days.</li>
        </ul>
      </div>

      <div class="metrics">
        <div class="metric">
          <span class="number">15-30%</span>
          <span class="label">Conversion Uplift</span>
        </div>
        <div class="metric">
          <span class="number">100k</span>
          <span class="label">Customers Scored</span>
        </div>
        <div class="metric">
          <span class="number">3M</span>
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
        <span class="tag">Causal ML</span>
      </div>
    </div>
  </div>

  <div class="case-study slide-in-left">
    <div class="case-study-header">
      <span class="company-badge">Mercor</span>
      <h2>AI Evaluation for State-of-the-Art Language Models</h2>
    </div>

    <div class="case-study-content">
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
  </div>
</div>

<div class="section-divider"></div>

<div class="dark-section">
  <div class="section-header">
    <h2>My Process</h2>
    <p>A systematic approach from data to deployment, ensuring every insight translates to business value.</p>
  </div>

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

<div class="section-divider"></div>

<div class="section-header fade-in-up">
  <h2>Core Competencies</h2>
  <p>Deep expertise across the full marketing analytics stack</p>
</div>

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
</div>

<div class="section-divider"></div>

<div class="section-header fade-in-up">
  <h2>About Me</h2>
</div>

<div class="about-section">
  <p>PhD in Statistics & Machine Learning from École Polytechnique with 7+ years building production ML systems. Published at ICML 2023. Based in Paris, working with clients across Europe and North America. Fluent in English, French, and Arabic.</p>

  <p><strong>Core strengths:</strong> Combining academic rigor with business pragmatism. I don't just build models, I drive measurable revenue impact through rigorous experimentation and causal inference.</p>
</div>
