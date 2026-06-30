'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 0',
        background: scrolled ? 'rgba(6, 6, 12, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
          Ibtasam<span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>.</span>
        </Link>

        <nav className="nav-desktop-links">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-hire">Hire Me</a>
        </nav>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text-primary)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 7px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text-primary)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text-primary)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none' }} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(11, 11, 20, 0.98)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}
          >
            <div className="container" style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', fontWeight: 500 }}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '12px 24px' }}>
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
