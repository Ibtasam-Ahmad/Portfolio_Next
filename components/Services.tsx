'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Full-Stack AI Products',
    description: 'End-to-end development: UI, backend, AI integration, and cloud deployment. You get a complete, working product. Not a prototype.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
  },
  {
    id: 2,
    title: 'LLM & Chatbot Development',
    description: 'Custom AI assistants, RAG chatbots, and voice-bots deployed in production, not demos. Your customers get answers 24/7.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.1)',
  },
  {
    id: 3,
    title: 'AI Automation & Pipelines',
    description: 'Replace expensive manual workflows with intelligent AI pipelines. Clients consistently see 40 to 70% reduction in operational costs.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.1)',
  },
  {
    id: 4,
    title: 'SaaS & Micro-SaaS',
    description: 'Launch subscription AI products with payment processing, authentication, and CI/CD deployment, ready to onboard paying customers from day one.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
  },
  {
    id: 5,
    title: 'API Development & Integration',
    description: 'Robust REST APIs with FastAPI, Django REST, or Flask, connecting your AI models to any frontend, mobile app, or third-party platform.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
  },
  {
    id: 6,
    title: 'Data Intelligence & Analytics',
    description: 'Vector search pipelines, BigQuery analytics, and LLM-powered dashboards that turn your raw data into actionable business insights.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)',
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">What I Build</span>
          <h2 className="section-title">Services</h2>
          <p style={{ maxWidth: '520px', lineHeight: 1.8 }}>
            One developer who covers the full stack: UI, backend, AI, and automation. No agency overhead, no coordination delays.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-card"
              style={{ padding: '32px' }}
              whileHover={{ y: -6 }}
            >
              <div className="service-icon" style={{ background: service.bg }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3 style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75 }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
