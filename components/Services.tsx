'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'AI Development',
    description: 'End-to-end intelligent systems including ML, Deep Learning, NLP, Computer Vision, RAGs, Agentic AI, and LLM integration.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Full-stack web apps using Python, Django, FastAPI, Flask, React, and Bootstrap.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    id: 3,
    title: 'SaaS Development',
    description: 'Building SaaS platforms with subscription models for B2B/B2C and API-as-a-Service solutions.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    id: 4,
    title: 'AI Automation',
    description: 'AI-powered dashboards, data analytics tools, and automation pipelines for efficiency.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    id: 5,
    title: 'Chatbot Development',
    description: 'Custom chatbots, voicebots, and RAG-powered assistants using LLMs and NLP.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
  },
  {
    id: 6,
    title: 'Database',
    description: 'PostgreSQL, MySQL, MongoDB, and vector databases (FAISS, Pinecone, Chroma).',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <h2>Services</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            Comprehensive AI and software development solutions tailored to your business needs.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{
                background: 'var(--bg-secondary)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ y: -4, borderColor: 'var(--text-muted)' }}
            >
              <div style={{ width: '56px', height: '56px', background: 'var(--bg-tertiary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.7 }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
