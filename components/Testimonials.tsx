'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Louis Dubois',
    role: 'Healthcare AI Project',
    content: "We collaborated with Ibtasam in March 2024 for a French healthcare AI assistant. His work on NLP and document understanding using LLMs was remarkable. He was professional, responsive, and always ahead of schedule.",
  },
  {
    id: 2,
    name: 'Fatima Al Nahyan',
    role: 'Dubai-based Firm',
    content: "In August 2024, Ibtasam built a voice-enabled custom callbot for our Dubai-based firm. His implementation of Twilio and OpenAI made the solution highly interactive. Clients love it. Highly recommended!",
  },
  {
    id: 3,
    name: 'Chloe Smith',
    role: 'Australian Startup',
    content: "In January 2025, Ibtasam helped our Australian startup launch an AI-powered product recommendation engine. His creativity and command over data pipelines and vector databases really set him apart.",
  },
  {
    id: 4,
    name: 'Ahmad Zulkifli',
    role: 'Malaysia University',
    content: "We hired Ibtasam in April 2025 to build a chatbot that answers academic queries from PDFs for our university in Malaysia. The final product was precise, fast, and extremely user-friendly. Excellent work!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <h2>Testimonials</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
            What clients say about working with me.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{
                background: 'var(--bg-secondary)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid var(--border)',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--accent)" style={{ marginBottom: '16px', opacity: 0.5 }}>
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '24px', color: 'var(--text-secondary)' }}>
                {testimonial.content}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: 'white' }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '2px' }}>{testimonial.name}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
