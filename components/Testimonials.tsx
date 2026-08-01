'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

/**
 * Quoted client feedback.
 *
 * Marked up as <figure><blockquote> + <figcaption><cite>, not a <p> and a
 * couple of <div>s. That is the element set browsers and assistive tech
 * actually associate a quotation with its attribution, and it removes a
 * heading-level skip: the old attribution was an <h4> sitting under the
 * section's <h2> with no <h3> between them, which reads as a broken outline.
 *
 * Deliberately NOT emitted as schema.org Review/AggregateRating. Star-rating
 * rich results require reviews that can be substantiated; marking up
 * testimonials that a visitor cannot verify turns a credibility question into
 * a search-policy one. The link out to LinkedIn is the honest version of the
 * same signal.
 */
export default function Testimonials() {
  const { testimonials } = content;
  const copy = content.sections.testimonials;

  return (
    <section
      id="testimonials"
      className="section"
      aria-labelledby="testimonials-heading"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <span className="section-label">{copy.label}</span>
          <h2 id="testimonials-heading" className="section-title">{copy.heading}</h2>
          <p style={{ textAlign: 'center', maxWidth: '620px', margin: '16px auto 0', lineHeight: 1.8 }}>
            {copy.intro}
          </p>
        </div>

        <div className="tile-grid">
          {testimonials.map((t) => (
            <figure key={t.id} className="card testimonial-card">
              <blockquote className="testimonial-quote">
                <p>&ldquo;{t.content}&rdquo;</p>
              </blockquote>

              <figcaption className="testimonial-attribution">
                <span className="testimonial-avatar" aria-hidden="true">{t.initials}</span>
                <span>
                  <cite className="testimonial-name">{t.name}</cite>
                  <span className="testimonial-role">{t.role} &middot; {t.company}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Somewhere to check. A wall of testimonials with no route to an
            independent source is the pattern visitors have learned to
            discount. */}
        <p style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href={copy.verify.href}
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
            }}
          >
            {copy.verify.label}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </p>
      </motion.div>
    </section>
  );
}
