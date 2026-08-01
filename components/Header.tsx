'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import content from '@/data/content.json';
import { DESIGN_STYLES, DEFAULT_DESIGN_STYLE, type DesignStyleId } from '@/lib/designStyles';
import {
  STYLE_STORAGE_KEY,
  STYLE_USED_EVENT,
  randomizeDesignStyle,
  type StyleUsedDetail,
} from '@/lib/styleSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [designStyle, setDesignStyle] = useState<DesignStyleId>(DEFAULT_DESIGN_STYLE);
  const [toast, setToast] = useState<{ kind: 'light' | 'dark' | 'style'; label: string; value: string } | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  const showToast = useCallback((next: { kind: 'light' | 'dark' | 'style'; label: string; value: string }) => {
    setToast(next);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  // A toggle clicked as the component unmounts would otherwise leave a timer
  // calling setState on a dead component.
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (saved) setTheme(saved);

    // Validate against the current list: a value saved by an older build (or
    // hand-edited) would otherwise set an unmatched data-style and silently
    // fall back to the base neutrals with no style applied.
    const savedStyle = localStorage.getItem(STYLE_STORAGE_KEY);
    if (savedStyle && DESIGN_STYLES.some((s) => s.id === savedStyle)) {
      setDesignStyle(savedStyle as DesignStyleId);
    } else if (savedStyle) {
      localStorage.removeItem(STYLE_STORAGE_KEY);
      document.documentElement.removeAttribute('data-style');
    }
  }, []);

  /* The style can now be rolled from two places — this header's button and a
     click on the pixel cat — so the label and toast react to the ANNOUNCEMENT
     rather than to the button's own click handler. Whichever control fired it,
     the header stays current. */
  useEffect(() => {
    const onStyleUsed = (e: Event) => {
      const detail = (e as CustomEvent<StyleUsedDetail>).detail;
      if (!detail) return;
      setDesignStyle(detail.styleId);
      showToast({ kind: 'style', label: 'Style', value: detail.label });
    };
    window.addEventListener(STYLE_USED_EVENT, onStyleUsed);
    return () => window.removeEventListener(STYLE_USED_EVENT, onStyleUsed);
  }, [showToast]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
    showToast({ kind: next, label: 'Theme', value: next === 'light' ? 'Light mode' : 'Dark mode' });
  };

  /* Applying, persisting and announcing all happen in randomizeDesignStyle();
     the listener above turns the announcement into this header's state and
     toast. See lib/styleSwitcher.ts. */
  const randomizeStyle = () => {
    randomizeDesignStyle();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStyleLabel = DESIGN_STYLES.find((s) => s.id === designStyle)?.label ?? 'Minimalism';

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
        color: 'var(--text-primary)',
        background: scrolled ? 'var(--nav-scrolled-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
          Ibtasam<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        <nav className="nav-desktop-links">
          {content.nav.map((item) => (
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

          <button
            className="style-switcher"
            onClick={randomizeStyle}
            aria-label="Try a different design"
            title={`Currently: ${currentStyleLabel}. Click to try a different look.`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 3h5v5" /><path d="M4 20L21 3" /><path d="M21 16v5h-5" /><path d="M15 15l6 6" /><path d="M4 4l5 5" />
            </svg>
            <span className="style-switcher-label">Try a Look</span>
          </button>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
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

      {/* Announces what the icon-only toggles just did. role="status" means a
          screen reader hears it too, which is the only way a non-sighted
          visitor learns the theme or style changed at all. */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toggle-toast"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {toast.kind === 'light' && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            )}
            {toast.kind === 'dark' && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
            {toast.kind === 'style' && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 3h5v5" /><path d="M4 20L21 3" /><path d="M21 16v5h-5" /><path d="M15 15l6 6" /><path d="M4 4l5 5" />
              </svg>
            )}
            <span className="toggle-toast-label">{toast.label}</span>
            <span>{toast.value}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'var(--nav-scrolled-bg)', backdropFilter: 'blur(16px)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}
          >
            <div className="container" style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {content.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', fontWeight: 500 }}
                >
                  {item.label}
                </a>
              ))}
              {/* Both controls must live here too: .nav-desktop-links is
                  display:none below 768px, so a desktop-only theme toggle
                  would leave mobile visitors unable to switch light/dark. */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <button
                  className="style-switcher"
                  onClick={randomizeStyle}
                  aria-label="Try a different design"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 3h5v5" /><path d="M4 20L21 3" /><path d="M21 16v5h-5" /><path d="M15 15l6 6" /><path d="M4 4l5 5" />
                  </svg>
                  <span>Try a Look ({currentStyleLabel})</span>
                </button>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light or dark theme">
                  {theme === 'dark' ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  )}
                </button>
              </div>
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
