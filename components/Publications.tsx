'use client';

import { motion } from 'framer-motion';

const publications = [
  {
    id: 1,
    title: 'Comparative Study of Long Short-Term Memory (LSTM) and Quantum Long Short-Term Memory (QLSTM): Prediction of Stock Market Movement',
    authors: 'Mahmood, Tariq., Ahmad, Ibtasam., Ansar, M. M. Z., Darwish, J. A., & Sherwani, R. A. K.',
    year: '2024',
    venue: 'arXiv preprint arXiv:2409.08297',
    link: 'https://doi.org/10.48550/arXiv.2409.08297',
    tags: ['Deep Learning', 'LSTM', 'QLSTM', 'Stock Market Prediction', 'Quantum Machine Learning'],
  },
];

export default function Publications() {
  return (
    <section id="publications" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <h2>Publications</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            Research contributions in AI and machine learning.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
          {publications.map((pub, index) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{
                background: 'var(--bg-tertiary)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 500 }}>{pub.year}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{pub.venue}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', lineHeight: 1.5 }}>{pub.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '20px', lineHeight: 1.6 }}>
                {pub.authors}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '6px 12px',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--accent)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                View Publication
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
