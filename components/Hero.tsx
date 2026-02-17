'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              color: 'var(--accent)',
              fontSize: '1rem',
              fontWeight: 500,
              marginBottom: '24px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            AI Developer
          </motion.p>
          <h1 style={{ marginBottom: '24px' }}>
            Hi, I'm <span style={{ color: 'var(--accent)' }}>Ibtasam Ahmad</span><br />
            <span style={{ color: 'var(--text-secondary)' }}>Building AI products that</span><br />
            drive results.
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ maxWidth: '540px', marginBottom: '40px', lineHeight: 1.8 }}
          >
            AI Developer with 4+ years of experience specializing in machine learning, deep learning, NLP, computer vision, RAGs, Agentic AI, and LLMs. Passionate about building production-ready AI systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a href="#work" className="btn btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid var(--border)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
          }}
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              width: '4px',
              height: '8px',
              background: 'var(--text-muted)',
              borderRadius: '2px',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
