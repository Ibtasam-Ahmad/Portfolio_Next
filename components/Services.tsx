'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Services() {
  const { services } = content;
  const copy = content.sections.services;

  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-heading"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Two columns: the heading block never fills a 1200px row on its own,
            which left the right half of this section conspicuously empty. The
            panel answers the question the service grid below provokes, namely
            "what do I actually get?", so it earns the space rather than
            padding it. Collapses to one column on narrow screens. */}
        <div className="section-head-split">
          <div>
            <span className="section-label">{copy.label}</span>
            <h2 id="services-heading" className="section-title">{copy.heading}</h2>
            <p style={{ lineHeight: 1.8 }}>{copy.intro}</p>

            {/* The panel opposite is taller than this copy, which left the
                bottom of this column empty. These are the sectors the project
                list below actually evidences, so the space earns its keep and
                picks up the industry terms a client searches on. */}
            <div className="head-industries">
              <p className="skill-group-label">{copy.industries.label}</p>
              <div className="head-industries-list">
                {copy.industries.items.map((item) => (
                  <span key={item} className="tech-chip">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="card head-aside">
            <h3 className="head-aside-title">{copy.aside.heading}</h3>
            <ul className="head-aside-list">
              {copy.aside.items.map((item) => (
                <li key={item}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href={copy.aside.cta.href} className="head-aside-cta link-arrow">
              {copy.aside.cta.label}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </aside>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '20px' }}>
          {services.map((service) => (
            <div key={service.id} className="card" style={{ padding: '32px' }}>
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3 style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
