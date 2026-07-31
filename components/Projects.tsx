'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';
import TechChip from '@/components/TechChip';

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
              {/* space-between with no gap let a long impact line wrap into
                  the year and sit flush against it. The gap separates them,
                  flex-start keeps a two-line impact top-aligned with the
                  year, and the min-height keeps every card's title on the
                  same baseline whether the impact wraps or not. */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', minHeight: '34px', marginBottom: '20px' }}>
                <span className="mono-meta" style={{ color: 'var(--text-muted)', fontWeight: 500, flexShrink: 0 }}>{project.year}</span>
                <span className="mono-meta" style={{ color: 'var(--accent)', fontWeight: 600, textAlign: 'right', maxWidth: '72%' }}>{project.impact}</span>
              </div>

              <h3 style={{ marginBottom: '12px', fontSize: '1.25rem', color: 'var(--text-primary)' }}>{project.title}</h3>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>The Problem</p>
              <p style={{ fontSize: '0.9375rem', marginBottom: '16px', lineHeight: 1.7 }}>{project.problem}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>The Solution</p>
              <p style={{ fontSize: '0.9375rem', marginBottom: '20px', lineHeight: 1.7 }}>{project.solution}</p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <TechChip key={tag} label={tag} size="sm" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
