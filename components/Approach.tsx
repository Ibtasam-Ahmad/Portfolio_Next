'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

/**
 * The section that answers "how deep does this actually go?" — sits between
 * the bio and the project list so a visitor reads who, then how, then proof.
 * Each pillar carries a `proof` line: a concrete, checkable fact rather than
 * another adjective.
 */
export default function Approach() {
  const { approach } = content;

  return (
    <section id="approach" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">{approach.label}</span>
          <h2 className="section-title">{approach.heading}</h2>
          <p style={{ maxWidth: '560px', lineHeight: 1.8 }}>{approach.intro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '24px' }}>
          {approach.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="card"
              style={{ background: 'var(--bg-tertiary)', padding: '32px', display: 'flex', flexDirection: 'column' }}
            >
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d={pillar.icon} />
                </svg>
              </div>

              <h3 style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>{pillar.title}</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, marginBottom: '24px' }}>{pillar.body}</p>

              <div className="formula">
                {pillar.formula}
                <span className="formula-caption">{pillar.formulaCaption}</span>
              </div>

              {/* Pushed to the bottom so the proof lines align across cards of
                  differing body length. */}
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '18px',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p style={{ textAlign: 'left', fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
                  {pillar.proof}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
