'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Certifications() {
  const { certifications } = content;
  const copy = content.sections.certifications;

  return (
    <section id="certifications" className="section" aria-labelledby="certifications-heading">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">{copy.label}</span>
          <h2 id="certifications-heading" className="section-title">{copy.heading}</h2>
          <p style={{ marginTop: '16px', maxWidth: '640px', lineHeight: 1.8 }}>{copy.intro}</p>
        </div>

        <div className="tile-grid">
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
              <span className="mono-meta" style={{ color: 'var(--text-muted)' }}>{cert.year}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
