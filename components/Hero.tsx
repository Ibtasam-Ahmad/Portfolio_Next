'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="section"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background radial glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(99,102,241,0.13) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{ maxWidth: '820px' }}
        >
          {/* Available badge */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
            <span className="available-badge">
              <span className="available-dot" />
              Available for new projects
            </span>
          </motion.div>

          {/* Location label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', fontWeight: 500, marginBottom: '20px', letterSpacing: '0.02em' }}
          >
            Full-Stack AI Developer &nbsp;·&nbsp; Lahore, Pakistan
          </motion.p>

          {/* Main heading */}
          <h1 style={{ marginBottom: '6px', lineHeight: 1.05 }}>
            Hi, I&apos;m <span className="gradient-text">Ibtasam Ahmad</span>
          </h1>
          <h1 style={{ marginBottom: '28px', color: 'var(--text-secondary)', fontWeight: 700, lineHeight: 1.1 }}>
            I build complete AI products<br />
            <span style={{ color: 'var(--text-primary)' }}>that drive results.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ maxWidth: '580px', marginBottom: '44px', lineHeight: 1.85, fontSize: '1.125rem' }}
          >
            From UI/UX and frontend to backend APIs, AI automation, and cloud deployment — I design, build, and ship
            everything your product needs. One developer. No handoffs. Real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a href="#work" className="btn btn-primary">
              View My Work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            style={{ display: 'flex', gap: '40px', marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}
          >
            {[
              { number: '4+', label: 'Years Experience' },
              { number: '25+', label: 'AI Systems Built' },
              { number: '100+', label: 'Clients Served' },
              { number: '23K+', label: 'LinkedIn Followers' },
            ].map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ width: '24px', height: '40px', border: '1.5px solid var(--border-hover)', borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '8px' }}
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ width: '4px', height: '8px', background: 'var(--accent)', borderRadius: '2px' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
