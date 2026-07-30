'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Services() {
  const { services } = content;

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">What I Build</span>
          <h2 className="section-title">Services</h2>
          <p style={{ maxWidth: '520px', lineHeight: 1.8 }}>
            I cover the full stack myself, interface, backend, AI, automation, which means one point
            of contact and no handoffs between specialists.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '20px' }}>
          {services.map((service) => (
            <div key={service.id} className="card" style={{ padding: '32px' }}>
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3 style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
