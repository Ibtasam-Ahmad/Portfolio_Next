'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Blog() {
  const { blog } = content;

  return (
    <section id="blog" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">Writing</span>
          <h2 className="section-title">Blog</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            Articles on AI, Machine Learning, and Technology.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '32px' }}>
          {blog.map((post) => (
            <article
              key={post.id}
              className="card"
              style={{
                background: 'var(--bg-tertiary)',
                padding: '32px',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 500 }}>{post.category}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>{post.date}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', lineHeight: 1.4 }}>{post.title}</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                {post.excerpt}
              </p>
              <a
                href={post.link}
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
                Read More
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
