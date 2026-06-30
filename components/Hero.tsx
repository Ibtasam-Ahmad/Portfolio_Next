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
            Need a complete AI product shipped fast? I cover every layer: design, frontend, backend, AI integration,
            and cloud deployment. One developer. Zero handoffs. Production-ready results.
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
            <a
              href="https://wa.me/message/NNXCQB4E5X7HF1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 24px', borderRadius: '10px',
                background: '#25d366', color: 'white',
                fontWeight: 600, fontSize: '0.9375rem',
                boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(37,211,102,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(37,211,102,0.35)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
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
