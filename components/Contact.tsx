'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const projectType = data.get('projectType') as string;
    const message = data.get('message') as string;
    const mailtoLink = `mailto:shibtasam@gmail.com?subject=Project Inquiry: ${encodeURIComponent(projectType)}&body=${encodeURIComponent(`Hi Ibtasam,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\n${message}`)}`;
    window.open(mailtoLink, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let&apos;s Build Something</h2>
            <p style={{ marginBottom: '32px', lineHeight: 1.85 }}>
              Have a project in mind? Tell me what you need and I&apos;ll get back to you within 24 hours with a clear plan and honest pricing.
            </p>

            {/* Availability */}
            <div style={{ marginBottom: '36px', padding: '20px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span className="available-dot" />
                <p style={{ color: '#10b981', fontWeight: 600, fontSize: '0.9375rem', margin: 0 }}>Currently accepting projects</p>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>Typical response time: within 24 hours</p>
            </div>

            {/* Contact channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Email', value: 'shibtasam@gmail.com', href: 'mailto:shibtasam@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { label: 'WhatsApp', value: '+92 315 0180953', href: 'https://wa.me/message/NNXCQB4E5X7HF1', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                { label: 'LinkedIn', value: 'linkedin.com/in/ibtasam-ahmad', href: 'https://pk.linkedin.com/in/ibtasam-ahmad', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
              ].map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', transition: 'border-color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div style={{ width: '36px', height: '36px', background: 'rgba(99,102,241,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={channel.icon} />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{channel.label}</p>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', margin: 0, fontWeight: 500 }}>{channel.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card" style={{ padding: '36px' }}>
              <h3 style={{ marginBottom: '28px', fontSize: '1.25rem' }}>Send a Message</h3>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✓</div>
                  <p style={{ color: '#10b981', fontWeight: 600, fontSize: '1.0625rem', marginBottom: '8px' }}>Opening your email client...</p>
                  <p style={{ fontSize: '0.9375rem' }}>I&apos;ll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Name *</label>
                      <input name="name" required className="form-input" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input name="email" type="email" required className="form-input" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Project Type *</label>
                    <select name="projectType" required className="form-select">
                      <option value="">Select a service...</option>
                      <option value="Full-Stack AI Product">Full-Stack AI Product</option>
                      <option value="LLM / Chatbot Development">LLM / Chatbot Development</option>
                      <option value="AI Automation & Pipelines">AI Automation &amp; Pipelines</option>
                      <option value="SaaS Development">SaaS Development</option>
                      <option value="API Development">API Development</option>
                      <option value="Data Intelligence">Data Intelligence</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea name="message" required className="form-textarea" placeholder="Tell me about your project — what do you need built, what's the timeline, what problem are you solving?" />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}
        >
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Ibtasam Ahmad. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[
              { name: 'GitHub', href: 'https://github.com/Ibtasam-Ahmad' },
              { name: 'LinkedIn', href: 'https://pk.linkedin.com/in/ibtasam-ahmad' },
              { name: 'Medium', href: 'https://medium.com/@shibtasam' },
            ].map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {s.name}
              </a>
            ))}
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
