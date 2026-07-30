'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Certifications() {
  const { certifications } = content;

  return (
    <section id="certifications" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            Professional certifications validating AI expertise.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '24px' }}>
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="card"
              style={{
                background: 'var(--bg-secondary)',
                padding: '32px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', background: 'var(--bg-tertiary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{cert.issuer}</span>
                  <h3 style={{ fontSize: '1.125rem' }}>{cert.title}</h3>
                </div>
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{cert.year}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
