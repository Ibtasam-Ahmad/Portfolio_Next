'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Publications() {
  const { publications } = content;
  const copy = content.sections.publications;

  return (
    <section id="publications" className="section" aria-labelledby="publications-heading">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">{copy.label}</span>
          <h2 id="publications-heading" className="section-title">{copy.heading}</h2>
          <p style={{ marginTop: '16px', maxWidth: '640px', lineHeight: 1.8 }}>{copy.intro}</p>
        </div>

      {/* The paper list used to carry maxWidth: 800px inside a 1200px
          container, so a third of the row sat empty to its right. Dropping the
          cap outright would run the title and author line to a 1136px measure,
          which is well past readable, so the width stays and a details panel
          takes the space instead. Everything in it is derived from the same
          publication record, not new claims. */}
      <div className="split-body">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {publications.map((pub) => (
            <article
              key={pub.id}
              style={{
                /* The grid child here is the flex wrapper, not this card, so
                   stretching the row alone left the card sized to its own
                   content and its bottom edge short of the panel opposite.
                   Growing from natural height (rather than flex: 1, which
                   would force equal heights) shares the spare space out and
                   keeps a longer paper taller than a shorter one. */
                flex: '1 1 auto',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius)',
                padding: '32px',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                <span className="mono-meta" style={{ color: 'var(--accent)', fontWeight: 500 }}>{pub.year}</span>
                <span className="mono-meta" style={{ color: 'var(--text-muted)' }}>{pub.venue}</span>
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

        <aside className="card head-aside">
          <h3 className="head-aside-title">{copy.aside.heading}</h3>
          <dl className="pub-meta">
            {copy.aside.items.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="skill-group-label">{copy.aside.citationLabel}</p>
          <p className="pub-citation">{copy.aside.citation}</p>
        </aside>
      </div>
      </motion.div>
    </section>
  );
}
