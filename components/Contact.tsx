'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
        >
          <h2 style={{ marginBottom: '16px' }}>Let&apos;s Work Together</h2>
          <p style={{ marginBottom: '40px' }}>
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring your ideas to life with AI.
          </p>
          <a href="https://wa.me/message/NNXCQB4E5X7HF1" className="btn btn-primary" style={{ marginBottom: '48px' }}>
            Get in Touch
          </a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            {[
              { name: 'GitHub', href: 'https://github.com/Ibtasam-Ahmad' },
              { name: 'LinkedIn', href: 'https://pk.linkedin.com/in/ibtasam-ahmad' },
              { name: 'Medium', href: 'https://medium.com/@shibtasam' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9375rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            marginTop: '80px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Ibtasam Ahmad. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
