'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Resume() {
  const { resume } = content;
  const copy = content.sections.resume;

  return (
    <section id="resume" className="section" aria-labelledby="resume-heading">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">{copy.label}</span>
          <h2 id="resume-heading" className="section-title">{copy.heading}</h2>
          <p style={{ marginTop: '16px', maxWidth: '560px', lineHeight: 1.8 }}>{copy.intro}</p>
        </div>

        <div
          style={{
            background: 'var(--bg-tertiary)',
            borderRadius: 'var(--radius)',
            padding: '48px',
            border: '1px solid var(--border)',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '32px' }}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" style={{ margin: '0 auto 24px' }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            <h3 style={{ marginBottom: '16px' }}>{copy.cardHeading}</h3>
            <p style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.8 }}>
              {copy.cardBody}
            </p>
          </div>
          <a
            href={resume.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'inline-flex', gap: '8px' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {copy.cta}
          </a>
        </div>

        {/* One column, so a one-column auto-fit grid wrapping a single child
            was doing nothing. Education entries stack directly. */}
        <div style={{ marginTop: '48px' }}>
          <h3 style={{ marginBottom: '24px' }}>{copy.educationHeading}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '24px' }}>
            {resume.education.map((edu) => (
              <div key={edu.id} style={{ background: 'var(--bg-tertiary)', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <h4 style={{ marginBottom: '4px' }}>{edu.degree}</h4>
                <p style={{ color: 'var(--accent)', fontSize: '0.9375rem', marginBottom: '8px' }}>{edu.school}</p>
                <p className="mono-meta" style={{ color: 'var(--text-muted)' }}>{edu.period}</p>
                <p style={{ marginTop: '12px', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  {edu.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
