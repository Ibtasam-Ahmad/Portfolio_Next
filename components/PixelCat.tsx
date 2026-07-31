'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import content from '@/data/content.json';
import { DESIGN_STYLES, type DesignStyleId } from '@/lib/designStyles';
import {
  CAT_FIRE,
  CAT_POWERS,
  CELL,
  EYES,
  PUPIL,
  SPRITE_PX,
  STYLE_USED_EVENT,
  catCells,
  fillFor,
} from '@/lib/catSprites';

/*
  Tensor — the companion cat. Name and lines live in content.json under "cat",
  so renaming it is a one-line change there rather than a hunt through here.

  Pops out of the "Try a Look" button after 5s, says what the button does, then
  settles into the bottom-right corner and stays. Every style change grants it
  that style's power — new headgear, new colours — and it says what it got.

  The staying is the point. An earlier version appeared once and left, which
  made the transformation unobservable: you'd click the button and the cat
  would already be gone.

  Two things replace the old dismiss button:
  • its eyes track the cursor
  • you can pick it up and drop it anywhere

  Note: there is now no way to dismiss it permanently. Dragging it out of the
  way is the escape hatch.
*/

const CAT = content.cat;

const STYLE_KEY = 'designStyle';
const SEEN_KEY = 'pixelCatSeen';

const ARRIVE_SECONDS = 5;
const LINGER_MS = 9000;
const SAY_MS = 3600;
/** One full turn on every style change. */
const SPIN_MS = 720;
/** Seconds of visible time with no style change before the cat gets bored. */
const FIRE_AFTER_S = 30;

type Phase = 'hidden' | 'arriving' | 'parked';
type Pos = { left: number; top: number };

function findTarget(): HTMLElement | null {
  const els = Array.from(document.querySelectorAll<HTMLElement>('.style-switcher, .nav-hamburger'));
  return els.find((el) => el.offsetParent !== null) ?? null;
}

function clamp(v: number, lo: number, hi: number) {
  return Math.min(Math.max(v, lo), hi);
}

/** Bottom-right, clear of the back-to-top button stacked above it. */
function parkedPos(): Pos {
  return {
    left: Math.max(8, window.innerWidth - SPRITE_PX - 22),
    top: Math.max(8, window.innerHeight - SPRITE_PX - 26),
  };
}

export default function PixelCat() {
  const [phase, setPhase] = useState<Phase>('hidden');
  const [pos, setPos] = useState<Pos | null>(null);
  const [style, setStyle] = useState<DesignStyleId | null>(null);
  const [say, setSay] = useState<string | null>(null);
  const [legs, setLegs] = useState<'a' | 'b'>('a');
  const [pupil, setPupil] = useState({ dx: 1.5, dy: 0.5 });
  const [dragging, setDragging] = useState(false);
  /* Monotonic: each style change adds another full turn, so framer always
     animates forwards rather than unwinding back to 0. */
  const [spins, setSpins] = useState(0);
  /* Bumped on every style change; resets the boredom timer below. */
  const [changes, setChanges] = useState(0);
  const [fire, setFire] = useState<number | null>(null);
  const morphTimer = useRef<number | undefined>(undefined);

  const targetRef = useRef<HTMLElement | null>(null);
  const sayTimer = useRef<number | undefined>(undefined);
  const posRef = useRef<Pos | null>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const dragMoved = useRef(false);
  const rafRef = useRef<number | undefined>(undefined);
  const reduced = useReducedMotion();

  posRef.current = pos;

  const speak = useCallback((text: string, ms = SAY_MS) => {
    setSay(text);
    window.clearTimeout(sayTimer.current);
    if (ms > 0) sayTimer.current = window.setTimeout(() => setSay(null), ms);
  }, []);

  const park = useCallback(() => {
    targetRef.current?.classList.remove('is-nudged');
    targetRef.current = null;
    setPos(parkedPos());
    setPhase('parked');
    setSay(null);
    try {
      localStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* private mode — it simply introduces itself again next visit */
    }
  }, []);

  useEffect(() => () => window.clearTimeout(sayTimer.current), []);

  // ── Arrive, out of the button ──
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forced = params.get('nudge') === '1';

    let seen = false;
    try {
      seen = localStorage.getItem(SEEN_KEY) === '1';
      const saved = localStorage.getItem(STYLE_KEY);
      if (saved && saved in CAT_POWERS) setStyle(saved as DesignStyleId);
    } catch {
      /* ignore */
    }

    /* ?cat=<styleId> previews one power without rolling for it — there are 17,
       and randomising until the one you want appears is no way to check art. */
    const preview = params.get('cat');
    if (preview && preview in CAT_POWERS) setStyle(preview as DesignStyleId);

    // Someone who has met the cat already doesn't need the pitch again; it
    // just turns up in its corner so the morph still has an audience.
    const skipIntro = seen && !forced;

    let seconds = 0;
    const tick = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      seconds += 1;
      if (seconds < (skipIntro ? 2 : ARRIVE_SECONDS)) return;
      window.clearInterval(tick);

      const target = skipIntro ? null : findTarget();
      if (!target) {
        setPos(parkedPos());
        setPhase('parked');
        return;
      }

      const r = target.getBoundingClientRect();
      targetRef.current = target;
      target.classList.add('is-nudged');
      setPos({
        // Emerges centred under the button it came out of. Clamped because the
        // header animates in on mount, and measuring it mid-flight gives a
        // negative top that would park the cat off-screen.
        left: clamp(r.left + r.width / 2 - SPRITE_PX / 2, 8, window.innerWidth - SPRITE_PX - 8),
        top: Math.max(8, r.bottom + 10),
      });
      setPhase('arriving');
    }, 1000);

    return () => window.clearInterval(tick);
  }, []);

  // Say the line, then move to the corner if ignored.
  useEffect(() => {
    if (phase !== 'arriving') return;
    const t1 = window.setTimeout(
      () =>
        speak(
          targetRef.current?.classList.contains('nav-hamburger') ? CAT.introMenu : CAT.intro,
          0
        ),
      reduced ? 150 : 700
    );
    const t2 = window.setTimeout(park, LINGER_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [phase, reduced, speak, park]);

  // ── The morph ──
  useEffect(() => {
    const onUsed = (e: Event) => {
      const id = (e as CustomEvent<{ styleId?: DesignStyleId }>).detail?.styleId;
      if (!id || !(id in CAT_POWERS)) return;
      const label = DESIGN_STYLES.find((s) => s.id === id)?.label ?? id;
      if (phase === 'arriving') park();
      setChanges((c) => c + 1);
      setFire(null);

      if (reduced) {
        setStyle(id);
        speak(`${label} — ${CAT_POWERS[id].power} unlocked!`);
        return;
      }

      // Spin a full turn and swap the sprite at the halfway point, so the new
      // look comes into view as the cat comes back around rather than
      // popping in while you're looking straight at it.
      setSpins((n) => n + 1);
      window.clearTimeout(morphTimer.current);
      morphTimer.current = window.setTimeout(() => {
        setStyle(id);
        speak(`${label} — ${CAT_POWERS[id].power} unlocked!`);
      }, SPIN_MS / 2);
    };
    window.addEventListener(STYLE_USED_EVENT, onUsed);
    return () => window.removeEventListener(STYLE_USED_EVENT, onUsed);
  }, [phase, park, speak, reduced]);

  useEffect(() => () => window.clearTimeout(morphTimer.current), []);

  /* Impatience: 30s of visible time without a style change and its head
     catches fire. Resets on every change, so it only ever burns for someone
     who has stopped playing with the switcher. */
  useEffect(() => {
    if (phase === 'hidden') return;
    let idle = 0;
    const t = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      idle += 1;
      if (idle >= FIRE_AFTER_S) {
        window.clearInterval(t);
        setFire(0);
        speak(`Bored. ${CAT.name} is combusting — hit "Try a Look".`);
      }
    }, 1000);
    return () => window.clearInterval(t);
  }, [phase, changes, speak]);

  // Flicker. Reduced motion gets a single static flame rather than none —
  // the joke survives, the strobing doesn't.
  const burning = fire !== null;
  useEffect(() => {
    if (!burning || reduced) return;
    const t = window.setInterval(() => setFire((f) => ((f ?? 0) + 1) % CAT_FIRE.length), 170);
    return () => window.clearInterval(t);
  }, [burning, reduced]);

  // Two-frame stride while it's on the move.
  useEffect(() => {
    if (phase !== 'arriving' || reduced) return;
    const t = window.setInterval(() => setLegs((l) => (l === 'a' ? 'b' : 'a')), 280);
    return () => window.clearInterval(t);
  }, [phase, reduced]);

  // ── Eyes follow the cursor ──
  useEffect(() => {
    if (phase === 'hidden' || reduced) return;
    const onMove = (e: PointerEvent) => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = undefined;
        const p = posRef.current;
        if (!p) return;
        const mx = EYES.w - PUPIL;
        const my = EYES.h - PUPIL;

        /* Cursor position across the VIEWPORT drives the pupil, not the true
           angle from the cat to the cursor.

           True geometry was the original approach and it looked frozen: the
           cat parks in the bottom-right corner, so every cursor position is
           up-and-left of it and cos(angle) only ever spans about -1 to 0.1.
           Measured across the whole viewport that produced three distinct
           pupil positions and ~3px of travel — correct, and dead.

           Mapping the viewport instead guarantees the pupils sweep their full
           range wherever the cat is sitting. The eyes no longer point exactly
           at the cursor, but at a 72px sprite nobody can tell, and it reads as
           alive rather than stuck. Continuous values glide; crispEdges still
           lands them on whole device pixels. */
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        setPupil({
          dx: clamp(mx / 2 + nx * (mx / 2), 0, mx),
          dy: clamp(my / 2 + ny * (my / 2), 0, my),
        });
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [phase, reduced]);

  // ── Pick it up and put it anywhere ──
  const onPointerDown = (e: React.PointerEvent) => {
    if (!pos) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragOffset.current = { x: e.clientX - pos.left, y: e.clientY - pos.top };
    dragMoved.current = false;
    setDragging(true);
    // Once picked up it stops being the button's business.
    targetRef.current?.classList.remove('is-nudged');
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    dragMoved.current = true;
    setPos({
      left: clamp(e.clientX - dragOffset.current.x, 0, window.innerWidth - SPRITE_PX),
      top: clamp(e.clientY - dragOffset.current.y, 0, window.innerHeight - SPRITE_PX),
    });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    setDragging(false);
    if (phase === 'arriving') setPhase('parked');
    // A drag must not also read as a click.
    if (!dragMoved.current) {
      speak(style ? `${CAT_POWERS[style].power}. Hit "Try a Look" for another.` : CAT.idle);
    }
  };

  // Keep it on screen when the viewport changes.
  useEffect(() => {
    if (phase === 'hidden') return;
    const onResize = () =>
      setPos((p) =>
        p
          ? {
              left: clamp(p.left, 0, Math.max(0, window.innerWidth - SPRITE_PX)),
              top: clamp(p.top, 0, Math.max(0, window.innerHeight - SPRITE_PX)),
            }
          : p
      );
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [phase]);

  if (phase === 'hidden' || !pos) return null;

  const cells = catCells(style, legs, fire);
  const power = style ? CAT_POWERS[style].power : null;

  return (
    <motion.div
      className={`pixel-cat-wrap${dragging ? ' is-dragging' : ''}`}
      /* Placement is plain CSS, never an animated value: animating top/left
         through framer meant that if the animation didn't run the element had
         no offsets and landed somewhere arbitrary. */
      style={{ left: pos.left, top: pos.top }}
      /* Scales up out of the button rather than sliding in from the edge. */
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.3, y: -16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: reduced ? 0.2 : 0.55, ease: [0.34, 1.4, 0.64, 1] }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="img"
      aria-label={
        power
          ? `${CAT.name}, the ${CAT.role}. Current power: ${power}`
          : `${CAT.name}, the ${CAT.role}`
      }
    >
      <AnimatePresence>
        {say && (
          <motion.div
            /* Sits to the cat's left, unless the cat has been dragged too
               near the left edge for it to fit. */
            className={`cat-bubble${pos.left < 260 ? ' flip' : ''}`}
            role="status"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
          >
            {say}
          </motion.div>
        )}
      </AnimatePresence>

      {phase === 'arriving' && <span className="cat-pointer" aria-hidden="true" />}

      {/* Rotation lives on this wrapper, not the sprite: the sprite already
          carries a CSS bob animation, and two transforms fighting over the
          same element is a lost cause. Nested, they compose. */}
      <motion.div
        className="cat-spin"
        animate={{ rotate: spins * 360 }}
        transition={{ duration: SPIN_MS / 1000, ease: [0.5, 0, 0.3, 1] }}
      >
      <svg
        className={`pixel-cat ${phase === 'arriving' ? 'is-walking' : 'is-idle'}`}
        width={SPRITE_PX}
        height={SPRITE_PX}
        viewBox={`0 0 ${SPRITE_PX} ${SPRITE_PX}`}
        aria-hidden="true"
      >
        {cells.map((c) => (
          <rect
            key={`${c.x}-${c.y}`}
            x={c.x * CELL}
            y={c.y * CELL}
            width={CELL}
            height={CELL}
            fill={fillFor(c.c, c.hex)}
          />
        ))}

        {/* Pupils ride on top of the eye whites so they can roam. */}
        {[EYES.lx, EYES.rx].map((sx) => (
          <g key={sx}>
            <rect
              x={(sx + pupil.dx) * CELL}
              y={(EYES.y + pupil.dy) * CELL}
              width={PUPIL * CELL}
              height={PUPIL * CELL}
              fill="var(--cat-outline)"
            />
            <rect
              x={(sx + pupil.dx) * CELL}
              y={(EYES.y + pupil.dy) * CELL}
              width={CELL}
              height={CELL}
              fill="var(--cat-glint)"
            />
          </g>
        ))}
      </svg>
      </motion.div>
    </motion.div>
  );
}
