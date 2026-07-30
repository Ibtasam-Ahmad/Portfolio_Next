'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Publications() {
  const { publications } = content;

  return (
    <section id="publications" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">Research</span>
          <h2 className="section-title">Publications</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            Research contributions in AI and machine learning.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
          {publications.map((pub) => (
            <article
              key={pub.id}
              style={{
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius)',
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
                      borderRadius: 'var(--radius-sm)',
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
                className="link-arrow"
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
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
