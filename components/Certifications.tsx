'use client';

import { motion } from 'framer-motion';

const certifications = [
  {
    id: 1,
    title: 'Meta Full-Stack Engineer Certificate',
    issuer: 'Meta',
    year: '2024',
  },
  {
    id: 2,
    title: 'IBM AI Engineering Professional Certificate',
    issuer: 'IBM',
    year: '2024',
  },
  {
    id: 3,
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    year: '2024',
  },
  {
    id: 4,
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    year: '2024',
  },
  {
    id: 5,
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    year: '2024',
  },
  {
    id: 6,
    title: 'NAVTTC - Artificial Intelligence',
    issuer: 'National Vocational and Technical Training Commission',
    year: '2022',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <h2>Certifications</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            Professional certifications validating AI expertise.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--bg-tertiary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{cert.issuer}</span>
                  <h3 style={{ fontSize: '1.125rem' }}>{cert.title}</h3>
                </div>
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
