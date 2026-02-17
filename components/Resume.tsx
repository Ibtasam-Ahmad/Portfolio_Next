'use client';

import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <h2>Resume</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            Download my resume to learn more about my experience and skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'var(--bg-tertiary)',
            borderRadius: '16px',
            padding: '48px',
            border: '1px solid var(--border)',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '32px' }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" style={{ margin: '0 auto 24px' }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            <h3 style={{ marginBottom: '16px' }}>Download My Resume</h3>
            <p style={{ maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.8 }}>
              Get the full details of my experience, education, skills, and projects. Let&apos;s connect and discuss how I can help with your AI projects.
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/11N6NWHrlmkhd2OUiL9xlPRoSny1qa5E5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'inline-flex', gap: '8px' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '48px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 style={{ marginBottom: '24px' }}>Education</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ background: 'var(--bg-tertiary)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ marginBottom: '4px' }}>BS (Hons) Computational Physics</h4>
                <p style={{ color: 'var(--accent)', fontSize: '0.9375rem', marginBottom: '8px' }}>University of the Punjab</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Oct 2019 — Jul 2023</p>
                <p style={{ marginTop: '12px', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  Thesis: Prediction of Stock Exchange Data Using LSTM & QLSTM
                </p>
              </div>
              <div style={{ background: 'var(--bg-tertiary)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ marginBottom: '4px' }}>Diploma in Artificial Intelligence</h4>
                <p style={{ color: 'var(--accent)', fontSize: '0.9375rem', marginBottom: '8px' }}>NAVTTC - University of the Punjab</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Jan 2022 — Oct 2022</p>
                <p style={{ marginTop: '12px', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  FYP: Personal Protection Equipment Detection using YOLO
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
