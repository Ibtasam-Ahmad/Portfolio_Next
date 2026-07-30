'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Experience() {
  const { experience } = content;

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Experience</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            4+ years of experience building production-ready AI systems and full-stack applications.
          </p>
        </div>

        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          <div style={{ position: 'absolute', left: '7px', top: '0', bottom: '0', width: '2px', background: 'var(--border)' }} />

          {experience.map((exp) => (
            <div key={exp.id} style={{ position: 'relative', marginBottom: '40px' }}>
              <div style={{ position: 'absolute', left: '-29px', top: '4px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent)', border: '3px solid var(--bg-primary)' }} />

              {/* bg-tertiary, not bg-secondary: the section itself is
                  bg-secondary, so a matching card would be invisible. */}
              <div className="card" style={{ background: 'var(--bg-tertiary)', padding: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '12px', gap: '8px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{exp.role}</h3>
                    <p style={{ color: 'var(--accent)', fontSize: '1rem' }}>{exp.company}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '4px' }}>{exp.location}</p>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '20px', marginTop: '16px' }}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: 1.7 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
