'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Louis Dubois',
    role: 'Client',
    company: 'Healthcare AI Project, France',
    initials: 'LD',
    color: '#6366f1',
    content: "We collaborated with Ibtasam in March 2024 for a French healthcare AI assistant. His work on NLP and document understanding using LLMs was remarkable. He was professional, responsive, and always ahead of schedule.",
  },
  {
    id: 2,
    name: 'Fatima Al Nahyan',
    role: 'Director',
    company: 'Dubai-based Firm, UAE',
    initials: 'FA',
    color: '#a855f7',
    content: "In August 2024, Ibtasam built a voice-enabled custom callbot for our firm. His implementation of Twilio and OpenAI made the solution highly interactive. Clients love it. Highly recommended!",
  },
  {
    id: 3,
    name: 'Chloe Smith',
    role: 'Co-Founder',
    company: 'AI Startup, Australia',
    initials: 'CS',
    color: '#06b6d4',
    content: "In January 2025, Ibtasam helped us launch an AI-powered product recommendation engine. His creativity and command over data pipelines and vector databases really set him apart from other developers we have worked with.",
  },
  {
    id: 4,
    name: 'Ahmad Zulkifli',
    role: 'Head of IT',
    company: 'University, Malaysia',
    initials: 'AZ',
    color: '#10b981',
    content: "We hired Ibtasam in April 2025 to build a chatbot that answers academic queries from PDFs for our university. The final product was precise, fast, and extremely user-friendly. Excellent work all around!",
  },
  {
    id: 5,
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechForward Inc., USA',
    initials: 'SC',
    color: '#f59e0b',
    content: "Ibtasam built a full RAG pipeline that cut our document processing time by 65%. He handled the entire stack himself, from the React frontend to the FastAPI backend and vector database. Delivered ahead of schedule with clean, well-documented code.",
  },
  {
    id: 6,
    name: 'Emma Thompson',
    role: 'Head of Operations',
    company: 'LogiFlow Ltd., UK',
    initials: 'ET',
    color: '#ef4444',
    content: "Our team was drowning in manual reporting every week. Ibtasam built multi-agent automation that now handles everything in minutes. We save over 20 hours every week and the ROI was clear within the first month.",
  },
  {
    id: 7,
    name: 'David Park',
    role: 'Product Manager',
    company: 'B2B SaaS Startup, Singapore',
    initials: 'DP',
    color: '#6366f1',
    content: "Ibtasam built our customer-facing AI chatbot end to end. It now handles 80% of support queries automatically and our team only steps in for complex edge cases. Professional, communicative, and the code quality is genuinely excellent.",
  },
  {
    id: 8,
    name: 'James Wilson',
    role: 'Engineering Lead',
    company: 'Automation Agency, Australia',
    initials: 'JW',
    color: '#a855f7',
    content: "We brought Ibtasam in for a complex multi-agent AI project. He structured the entire architecture, built it cleanly, and the system has been running in production for over 4 months without a single issue. Will absolutely work together again.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <span className="section-label">Client Feedback</span>
          <h2 className="section-title">Testimonials</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
            What clients say about working with me.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="glass-card"
              style={{ padding: '28px' }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={t.color} stroke="none">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>

              <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '24px', color: 'var(--text-secondary)' }}>
                &ldquo;{t.content}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: `${t.color}18`,
                  border: `2px solid ${t.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.8125rem', color: t.color, flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', marginBottom: '2px', color: 'var(--text-primary)' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>{t.role} &middot; {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
