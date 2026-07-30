'use client';

import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.opacity = '1';
      el.style.transform = `translate(${e.clientX - 280}px, ${e.clientY - 280}px)`;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-blob ambient-blob-1" />
      <div className="ambient-blob ambient-blob-2" />
      <div ref={glowRef} className="ambient-cursor-glow" />
    </div>
  );
}
