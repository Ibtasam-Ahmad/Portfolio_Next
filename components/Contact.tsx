'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Contact() {
  const { contact, footer } = content;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/shibtasam@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          projectType: data.get('projectType'),
          message: data.get('message'),
          _subject: `New Project Inquiry: ${data.get('projectType')}`,
        }),
      });
      if (!res.ok) throw new Error(`formsubmit responded ${res.status}`);
    } catch {
      /* A failed send used to report success anyway, so the enquiry was lost
         with nobody aware of it. Keep what they typed on screen and point
         them at a channel that works. */
      setStatus('error');
      return;
    }
    setStatus('sent');
    form.reset();
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '64px', alignItems: 'start' }}>
          {/* Left: info */}
          <div>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">{contact.heading}</h2>
            <p style={{ marginBottom: '32px', lineHeight: 1.85 }}>
              {contact.paragraph}
            </p>

            {/* Availability */}
            <div style={{ marginBottom: '36px', padding: '20px', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span className="available-dot" />
                <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9375rem', margin: 0 }}>{contact.availability.status}</p>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>{contact.availability.responseTime}</p>
            </div>

            {/* WhatsApp primary CTA */}
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '14px 24px', marginBottom: '20px',
                /* Dark ink on WhatsApp green — see Hero.tsx */
                background: '#25d366', color: '#0b1f12',
                borderRadius: 'var(--radius)', fontWeight: 700, fontSize: '1rem',
                transition: 'filter 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.06)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.filter = 'none'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0b1f12">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {contact.whatsapp.label}
            </a>

            {/* Other contact channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contact.channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="card"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px' }}
                >
                  <div style={{ width: '36px', height: '36px', background: 'var(--bg-tertiary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
          </div>

          {/* Right: form */}
          <div className="card" style={{ padding: '36px' }}>
            <h3 style={{ marginBottom: '28px', fontSize: '1.25rem' }}>Send a Message</h3>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✓</div>
                <p style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.0625rem', marginBottom: '8px' }}>Message sent successfully!</p>
                <p style={{ textAlign: 'center', fontSize: '0.9375rem' }}>I&apos;ll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-row">
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
                    {contact.projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea name="message" required className="form-textarea" placeholder="Tell me about your project: what you need built, the timeline, and the problem you are solving." />
                </div>
                {status === 'error' && (
                  <div
                    role="alert"
                    style={{
                      padding: '14px 16px',
                      border: '1px solid var(--accent)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(var(--accent-rgb), 0.08)',
                    }}
                  >
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', fontWeight: 600, margin: 0 }}>
                      That didn&apos;t go through.
                    </p>
                    <p style={{ fontSize: '0.875rem', margin: '4px 0 0' }}>
                      Your message is still in the form — try again, or reach me directly at{' '}
                      <a href="mailto:shibtasam@gmail.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                        shibtasam@gmail.com
                      </a>{' '}
                      or on{' '}
                      <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                        WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1 }}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : status === 'error' ? 'Try Again' : 'Send Message'}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {footer.social.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {s.name}
              </a>
            ))}
          </div>
        </footer>
      </motion.div>
    </section>
  );
}
