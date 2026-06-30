'use client';

import { motion } from 'framer-motion';

const colorRgb: Record<string, string> = {
  '#6366f1': '99,102,241',
  '#a855f7': '168,85,247',
  '#06b6d4': '6,182,212',
  '#ef4444': '239,68,68',
  '#10b981': '16,185,129',
  '#f59e0b': '245,158,11',
};

const projects = [
  {
    id: 1,
    title: 'Agent Analysis System',
    problem: 'Enterprise team wasting hours on manual data analysis reports',
    solution: 'Multi-agent AI platform: autonomous agents handle ingestion, reasoning, and report generation end-to-end',
    tags: ['AbacusAI', 'LangGraph', 'Python', 'Multi-Agent', 'LLMs'],
    impact: '70% reduction in manual analysis time',
    year: '2025',
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'Permit Signal Insights',
    problem: 'Real estate analysts spending days researching property permit data',
    solution: 'AI-powered intelligence platform using BigQuery pipelines and LLM summarization agents for automated insights',
    tags: ['BigQuery', 'Gemini', 'Python', 'Data Pipelines', 'RAG'],
    impact: '50% reduction in research time',
    year: '2025',
    color: '#a855f7',
  },
  {
    id: 3,
    title: 'Chat-Bot & Voice-Bot Platform',
    problem: 'Business losing leads outside office hours with no 24/7 support',
    solution: 'Production AI communication platform with LLM conversations, Twilio telephony, and Vapi voice synthesis',
    tags: ['LLMs', 'Twilio', 'Vapi', 'Django', 'FastAPI'],
    impact: 'Deployed live, 24/7 customer handling',
    year: '2024',
    color: '#06b6d4',
  },
  {
    id: 4,
    title: 'Pen Testing Agent Platform',
    problem: 'Security team running manual vulnerability assessments taking days per client',
    solution: 'AI-driven agents that autonomously run penetration testing workflows and generate structured security reports',
    tags: ['FastAPI', 'LangChain', 'OpenAI', 'PostgreSQL', 'Agentic AI'],
    impact: 'Fully automated security cycles',
    year: '2025',
    color: '#ef4444',
  },
  {
    id: 5,
    title: 'Multimodal RAG Chatbot',
    problem: 'Users needing answers from mixed sources (PDFs, images, web, sketches) in one interface',
    solution: 'Versatile RAG chatbot handling images, documents, drawings, and real-time web search for contextually grounded answers',
    tags: ['RAG', 'GPT-4o', 'LLaMA 3', 'Computer Vision', 'Web Search'],
    impact: 'Multi-source fusion across all modalities',
    year: '2024',
    color: '#10b981',
  },
  {
    id: 6,
    title: 'Creator Ranking System',
    problem: 'Platform needing to identify high-potential creators from social media at scale',
    solution: 'AI system combining NLP and computer vision to analyze profiles, posts, interactions, and visual content for predictive ranking',
    tags: ['NLP', 'LSTM', 'Computer Vision', 'ML', 'Recommender Systems'],
    impact: 'Multi-modal social intelligence at scale',
    year: '2023',
    color: '#f59e0b',
  },
  {
    id: 7,
    title: 'Medical Document Intelligence',
    problem: 'Hospital staff spending hours manually extracting and categorizing data from patient records and clinical reports',
    solution: 'AI system using LLMs and vector search to extract, classify, and summarize clinical documents with field-level accuracy',
    tags: ['GPT-4o', 'LangChain', 'FastAPI', 'PostgreSQL', 'Healthcare AI'],
    impact: '80% reduction in document processing time',
    year: '2024',
    color: '#06b6d4',
  },
  {
    id: 8,
    title: 'Insurance Claims Automation',
    problem: 'Insurance firm processing 500+ claims per week manually, causing slow approvals and high error rates',
    solution: 'Agentic AI workflow that reads claim documents, validates against policy rules, flags anomalies, and routes intelligently to adjusters',
    tags: ['LangGraph', 'OpenAI', 'FastAPI', 'MongoDB', 'Agentic AI'],
    impact: '65% faster claims processing',
    year: '2025',
    color: '#a855f7',
  },
  {
    id: 9,
    title: 'Financial Intelligence Platform',
    problem: 'FinTech firm needing real-time insights from earnings reports, SEC filings, and market news across hundreds of assets',
    solution: 'AI analytics platform combining RAG over financial documents with live market data feeds for automated reporting and smart alerts',
    tags: ['RAG', 'GPT-4o', 'BigQuery', 'React', 'Next.js'],
    impact: 'Real-time insights across 500+ assets',
    year: '2025',
    color: '#10b981',
  },
  {
    id: 10,
    title: 'Academic AI Tutor',
    problem: 'EdTech startup needing personalized AI tutoring that adapts per student across subjects without expensive human tutors',
    solution: 'Adaptive tutoring platform with LLM-powered Q&A, PDF curriculum ingestion, quiz generation, and per-student progress tracking',
    tags: ['RAG', 'LLaMA 3', 'Next.js', 'FastAPI', 'EdTech AI'],
    impact: '3x engagement vs traditional e-learning',
    year: '2024',
    color: '#6366f1',
  },
];

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Projects</h2>
          <p style={{ maxWidth: '500px', lineHeight: 1.8 }}>
            Real systems built for real clients, with measurable outcomes. Not just impressive tech stacks.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-card"
              style={{ padding: '32px', cursor: 'default' }}
              whileHover={{ y: -6 }}
            >
              {/* Year + icon */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>{project.year}</span>
                <div style={{ width: '36px', height: '36px', background: `rgba(${colorRgb[project.color]},0.12)`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </div>

              {/* Impact badge */}
              <span className="impact-badge">↑ {project.impact}</span>

              <h3 style={{ marginBottom: '12px', fontSize: '1.25rem', color: 'var(--text-primary)' }}>{project.title}</h3>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>The Problem</p>
              <p style={{ fontSize: '0.9375rem', marginBottom: '16px', lineHeight: 1.7 }}>{project.problem}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>The Solution</p>
              <p style={{ fontSize: '0.9375rem', marginBottom: '20px', lineHeight: 1.7 }}>{project.solution}</p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '5px 11px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
