'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Projects() {
  const { projects } = content;

  return (
    <section id="work" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Projects</h2>
          <p style={{ maxWidth: '500px', lineHeight: 1.8 }}>
            Real systems built for real clients, with measurable outcomes, not just impressive tech stacks.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '24px' }}>
          {projects.map((project) => (
            <article key={project.id} className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>{project.year}</span>
                <span style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 600 }}>{project.impact}</span>
              </div>

              <h3 style={{ marginBottom: '12px', fontSize: '1.25rem', color: 'var(--text-primary)' }}>{project.title}</h3>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>The Problem</p>
              <p style={{ fontSize: '0.9375rem', marginBottom: '16px', lineHeight: 1.7 }}>{project.problem}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>The Solution</p>
              <p style={{ fontSize: '0.9375rem', marginBottom: '20px', lineHeight: 1.7 }}>{project.solution}</p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '5px 11px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
