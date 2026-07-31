import type { DesignStyleId } from '@/lib/designStyles';

/**
 * The pixel cat: a computational-physics-turned-developer cat in a lab coat,
 * and the "power" each design style grants it.
 *
 * 24×24 grid at 3px per cell (72px rendered). The earlier version was 18×18 at
 * 4px, which was too coarse to hold a face — at that size the glasses ate the
 * eyes and everything read as one blob. Smaller cells buy round glasses with
 * real eyes behind them, ear tufts, whiskers, a coat and a laptop, while
 * staying unmistakably pixel art.
 *
 * Character → colour:
 *   '.'  transparent
 *   'X'  fur          var(--accent)      — recolours with every style
 *   'D'  shaded fur   var(--cat-dark)    — accent mixed toward black
 *   'L'  light fur    var(--cat-light)   — accent mixed toward white
 *   'W'  lab coat     var(--cat-coat)
 *   'o'  ink          var(--cat-outline) — glasses frames, nose, laptop bezel
 *   'E'  eye white    var(--cat-eye)     — pupils are drawn separately so they
 *                                          can track the cursor
 *   'S' 'h'  glint    var(--cat-glint)   — lit screen, highlights
 *   '1' '2' '3'       per-overlay colours, for styles with signature hues
 *
 * Because the fur is painted from var(--accent), the cat recolours itself
 * under all 17 styles for free — including the shading, which is derived from
 * the accent with color-mix. Overlays only add shape.
 */

export const CELL = 3;
export const GRID = 24;
export const SPRITE_PX = CELL * GRID;

/** Event Header fires when the style switcher is used. Lives here rather than
 *  in the component so Header doesn't have to import the cat to announce it. */
export const STYLE_USED_EVENT = 'styleswitcher:used';

/** Eye sockets, in grid cells. Pupils are 2×2 and roam inside these. */
export const EYES = { w: 5, h: 3, y: 6, lx: 5, rx: 14 };
export const PUPIL = 2;

/*
  Rows 0–1 are empty so headgear has somewhere to sit.
  2–4 ears · 5–9 glasses with eyes behind · 10–12 muzzle, whiskers, chin ·
  13 neck · 14–16 lab coat · 17–20 laptop · 21–22 legs and tail.
*/
export const CAT_BASE = [
  '........................',
  '.....X............X.....',
  '....XXX..........XXX....',
  '...XXDDXX......XXDDXX...',
  '....XXXXXXXXXXXXXXXX....',
  '...XXoooooXXXXoooooXX...',
  '...XXEEEEEXXXXEEEEEXX...',
  '...XXEEEEEooooEEEEEXX...',
  '...XXEEEEEXXXXEEEEEXX...',
  '...XXoooooXXXXoooooXX...',
  '.o.XXXXXXLLooLLXXXXXX.o.',
  'oooXXXXXXLLLLLLXXXXXXooo',
  '.o..XXXXXXXXXXXXXXXX..o.',
  '......XXXXXXXXXXXX......',
  '....XXWWWWWWWWWWWWXX....',
  '....XXWWWWWWWWWWWWXX....',
  '....XXWWWWWWWWWWWWXX....',
  '...XXooooooooooooooXX...',
  '...XXoSSSSSSSSSSSSoXX...',
  '...XXoSSSSSSSSSSSSoXX...',
  '...XXooooooooooooooXXXX.',
];

/** Rows 21–22, swapped on a hard step so the walk reads as a walk. */
export const CAT_LEGS_A = ['....XXXXX......XXXXX.XX.', '....XXXXX......XXXXX.XX.'];
export const CAT_LEGS_B = ['.....XXXXX....XXXXX..XX.', '.....XXXXX....XXXXX..XX.'];

export type Overlay = {
  /** Shown in the speech bubble when this style is rolled. */
  power: string;
  /** Sparse: row index → 24-char row, drawn over the base. */
  rows: Record<number, string>;
  colors?: Record<string, string>;
};

export const CAT_POWERS: Record<DesignStyleId, Overlay> = {
  minimalism: {
    power: 'Clean Slate',
    rows: { 2: '....................1...', 3: '...................1....', 4: '..................1.....' },
    colors: { '1': '#f0c674' },
  },
  flat: {
    power: 'Flat Field',
    rows: { 3: '.....1111111111111......', 4: '....111111111111111.....' },
    colors: { '1': '#29b6f6' },
  },
  swiss: {
    power: 'Grid Discipline',
    rows: { 2: '........11111111........' },
    colors: { '1': '#ff453a' },
  },
  bento: {
    power: 'Modular Mind',
    rows: { 1: '.......11.11.11.........', 2: '.......11.11.11.........' },
    colors: { '1': '#2dd4bf' },
  },
  brutalism: {
    power: 'Hard Hat',
    rows: { 2: '.....111111111111.......', 3: '....11111111111111......', 4: '...1111111111111111.....' },
    colors: { '1': '#ff003c' },
  },
  bauhaus: {
    power: 'Primary Forms',
    rows: { 1: '......11...22...33......', 2: '......11...22...33......' },
    colors: { '1': '#d32f2f', '2': '#1565c0', '3': '#ffcc00' },
  },
  neumorphism: {
    power: 'Soft Power',
    rows: { 1: '.......hhhhhhhhhh.......' },
  },
  glassmorphism: {
    // Rims only — a full visor would hide the eyes, and the eyes are the part
    // that follows your cursor.
    power: 'Frosted Visor',
    rows: { 5: '...111111111111111111...', 9: '...111111111111111111...' },
    colors: { '1': '#90caf9' },
  },
  skeuomorphism: {
    power: 'Aviator Cap',
    rows: { 2: '.....111111111111.......', 3: '....11111111111111......', 4: '...1111111111111111.....' },
    colors: { '1': '#8b6b3d' },
  },
  maximalism: {
    power: 'Crown of Everything',
    rows: { 1: '......1.1.1.1.1.1.......', 2: '......111111111.........' },
    colors: { '1': '#ffd100' },
  },
  memphis: {
    power: 'Party Geometry',
    rows: {
      0: '...........11...........',
      1: '..........1111..........',
      2: '.........111111.........',
      3: '........11111111........',
    },
    colors: { '1': '#ff4081' },
  },
  cyberpunk: {
    power: 'Neural Visor',
    rows: {
      0: '..............1.........',
      1: '.............11.........',
      2: '............11..........',
      5: '...111111111111111111...',
      9: '...111111111111111111...',
    },
    colors: { '1': '#00e5ff' },
  },
  vaporwave: {
    power: 'Retro Shades',
    rows: { 3: '.....1111111111111......', 5: '...111111111111111111...' },
    colors: { '1': '#ff6ec7' },
  },
  organic: {
    power: 'Leaf Sense',
    rows: { 0: '............11..........', 1: '...........1111.........', 2: '..........1111..........' },
    colors: { '1': '#9ccc65' },
  },
  claymorphism: {
    power: 'Clay Halo',
    rows: { 1: '........1111111.........', 2: '.......111111111........' },
    colors: { '1': '#a5b4fc' },
  },
  anime: {
    power: 'Spiked Hair',
    rows: {
      1: '......1...1...1.........',
      2: '.....11111111111........',
      3: '....1111111111111.......',
      4: '...111111111111111......',
    },
    colors: { '1': '#ff5da2' },
  },
  kawaii: {
    power: 'Bow & Blush',
    rows: { 2: '.....11....11...........', 3: '......111111............', 10: '...11............11.....' },
    colors: { '1': '#ff8fab' },
  },
};

/*
  Impatience. After a spell with no style change the cat's head catches fire —
  three frames cycled to make it flicker. Drawn last, so it burns on top of
  whatever headgear the current style gave it.
  '1' core · '2' body · '3' outer. Fixed colours: fire is fire, and tinting it
  with the accent would leave it unreadable under half the styles.
*/
export const CAT_FIRE = [
  {
    0: '...........1............',
    1: '..........121...........',
    2: '.........12321..........',
    3: '.........23332..........',
  },
  {
    0: '..........1.............',
    1: '.........121............',
    2: '.........12321..........',
    3: '........233332..........',
  },
  {
    0: '............1...........',
    1: '...........121..........',
    2: '..........12321.........',
    3: '.........233332.........',
  },
] as const;

const FIRE_COLORS: Record<string, string> = {
  '1': '#ffe082',
  '2': '#ff9800',
  '3': '#e64a19',
};

export type Cell = { x: number; y: number; c: string; hex?: string };

/** Base + legs + the active style's overlay, flattened to drawable cells. */
export function catCells(
  styleId: DesignStyleId | null,
  legs: 'a' | 'b',
  fireFrame: number | null = null
): Cell[] {
  const rows = [...CAT_BASE, ...(legs === 'a' ? CAT_LEGS_A : CAT_LEGS_B)];
  const overlay = styleId ? CAT_POWERS[styleId] : undefined;
  const fire = fireFrame === null ? undefined : CAT_FIRE[fireFrame % CAT_FIRE.length];
  const cells: Cell[] = [];

  for (let y = 0; y < rows.length; y++) {
    // Precedence: fire over headgear over the base cat, so an overlay's hat
    // sits on the ears and the flames sit on the hat.
    const over = overlay?.rows[y];
    const burn = (fire as Record<number, string> | undefined)?.[y];
    for (let x = 0; x < GRID; x++) {
      const fc = burn?.[x];
      if (fc && fc !== '.') {
        cells.push({ x, y, c: fc, hex: FIRE_COLORS[fc] });
        continue;
      }
      const oc = over?.[x];
      const c = oc && oc !== '.' ? oc : rows[y][x];
      if (!c || c === '.') continue;
      cells.push({ x, y, c, hex: overlay?.colors?.[c] });
    }
  }
  return cells;
}

const ROLES: Record<string, string> = {
  X: 'var(--accent)',
  D: 'var(--cat-dark)',
  L: 'var(--cat-light)',
  W: 'var(--cat-coat)',
  o: 'var(--cat-outline)',
  E: 'var(--cat-eye)',
  S: 'var(--cat-glint)',
  h: 'var(--cat-glint)',
};

export function fillFor(c: string, hex?: string) {
  return hex ?? ROLES[c] ?? 'var(--accent)';
}
