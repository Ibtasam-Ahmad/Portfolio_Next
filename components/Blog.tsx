'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Blog() {
  const { blog } = content;
  const copy = content.sections.blog;

  return (
    <section
      id="blog"
      className="section"
      aria-labelledby="blog-heading"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">{copy.label}</span>
          <h2 id="blog-heading" className="section-title">{copy.heading}</h2>
          <p style={{ marginTop: '16px', maxWidth: '620px', lineHeight: 1.8 }}>{copy.intro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '32px' }}>
          {/* The whole card is the link. It always looked clickable
              (cursor: pointer) but only the "Read More" text actually
              navigated, so clicks anywhere else did nothing. */}
          {blog.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card blog-card"
              aria-label={`${post.title}, read on Medium`}
              style={{
                background: 'var(--bg-tertiary)',
                padding: '32px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="mono-meta" style={{ color: 'var(--accent)', fontWeight: 500 }}>{post.category}</span>
                <span className="mono-meta" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', lineHeight: 1.4 }}>{post.title}</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                {post.excerpt}
              </p>
              <span
                className="blog-arrow"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--accent)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                }}
              >
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
