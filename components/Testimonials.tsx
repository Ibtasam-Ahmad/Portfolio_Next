'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Testimonials() {
  const { testimonials } = content;

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <span className="section-label">Client Feedback</span>
          <h2 className="section-title">Testimonials</h2>
          <p style={{ maxWidth: '500px', margin: '16px auto 0' }}>
            What clients say about working with me.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '24px' }}>
          {testimonials.map((t) => (
            <div key={t.id} className="card" style={{ padding: '28px' }}>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '24px', color: 'var(--text-secondary)' }}>
                &ldquo;{t.content}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.8125rem', color: 'var(--text-secondary)', flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', marginBottom: '2px', color: 'var(--text-primary)' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>{t.role} &middot; {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
