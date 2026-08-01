'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';
import TechChip from '@/components/TechChip';

export default function About() {
  const { about } = content;

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* `start` sized the Tech Stack card to its own content, so its bottom
            edge stopped well short of the bio beside it and left the right half
            of the section visibly unfinished. `stretch` ties the card's height
            to the row, so the two columns end on the same line whatever the bio
            length is. The card is the only bordered box here, so it is the one
            whose ragged bottom edge actually reads. */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '72px', alignItems: 'stretch' }}>
          {/* Left: bio */}
          <div>
            <span className="section-label">{about.label}</span>
            <h2 id="about-heading" className="section-title">{about.heading}</h2>

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
            <h3 style={{ marginBottom: '24px', fontSize: '1.125rem', color: 'var(--text-primary)' }}>{about.skillsHeading}</h3>
            {about.skillGroups.map((group) => (
              <div key={group.label}>
                <p className="skill-group-label">{group.label}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  {group.skills.map((skill) => (
                    <TechChip key={skill} label={skill} />
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
