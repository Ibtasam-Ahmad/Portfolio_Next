'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function About() {
  const { about } = content;

  return (
    <section id="about" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '72px', alignItems: 'start' }}>
          {/* Left: bio */}
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title">{about.heading}</h2>

            {about.paragraphs.map((p, i) => (
              <p key={i} style={{ marginBottom: i === about.paragraphs.length - 1 ? '36px' : '20px', lineHeight: 1.85 }}>
                {p}
              </p>
            ))}

            {/* Highlights */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {about.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', margin: 0 }}>{h}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: skills */}
          <div className="card" style={{ padding: '36px' }}>
            <h3 style={{ marginBottom: '24px', fontSize: '1.125rem', color: 'var(--text-primary)' }}>Tech Stack</h3>
            {about.skillGroups.map((group) => (
              <div key={group.label}>
                <p className="skill-group-label">{group.label}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '6px 13px',
                        background: 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border)',
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
