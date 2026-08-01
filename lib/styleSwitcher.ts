import {
  DESIGN_STYLES,
  DEFAULT_DESIGN_STYLE,
  type DesignStyleId,
} from '@/lib/designStyles';

/**
 * The single entry point for changing the site's design style.
 *
 * Two things can now trigger a restyle — the header's "Try a Look" button and
 * clicking the pixel cat — so the roll itself lives here rather than inside
 * either component. Each caller applies nothing directly; it calls
 * `randomizeDesignStyle()`, which mutates the DOM, persists the choice and
 * announces it. Everything that cares (the header's label and toast, the
 * cat's morph) listens for the announcement.
 *
 * That inversion is what keeps them in sync: when the cat rolled a style by
 * calling its own copy of this logic, the header's `designStyle` state went
 * stale and its tooltip kept naming the previous look.
 */
export const STYLE_USED_EVENT = 'styleswitcher:used';

export const STYLE_STORAGE_KEY = 'designStyle';

export type StyleUsedDetail = { styleId: DesignStyleId; label: string };

/** Reads the live style off <html>, falling back to the baseline. Reading the
 *  DOM rather than React state means the answer is correct no matter which
 *  component asked or which one set it. */
export function currentDesignStyle(): DesignStyleId {
  const attr = document.documentElement.getAttribute('data-style');
  const match = DESIGN_STYLES.find((s) => s.id === attr);
  return match ? match.id : DEFAULT_DESIGN_STYLE;
}

export function labelForStyle(id: DesignStyleId): string {
  return DESIGN_STYLES.find((s) => s.id === id)?.label ?? id;
}

/**
 * Picks a style other than the current one, applies it, persists it and fires
 * STYLE_USED_EVENT. Returns what it rolled, for a caller that wants it.
 */
export function randomizeDesignStyle(): StyleUsedDetail {
  const current = currentDesignStyle();
  // Excluding the current style guarantees every activation visibly changes
  // something — a 1-in-17 no-op reads as a broken button.
  const options = DESIGN_STYLES.filter((s) => s.id !== current);
  const next = options[Math.floor(Math.random() * options.length)];

  document.documentElement.setAttribute('data-style', next.id);
  try {
    localStorage.setItem(STYLE_STORAGE_KEY, next.id);
  } catch {
    /* private mode — the style still applies, it just won't survive a reload */
  }

  const detail: StyleUsedDetail = { styleId: next.id, label: next.label };
  window.dispatchEvent(new CustomEvent<StyleUsedDetail>(STYLE_USED_EVENT, { detail }));
  return detail;
}
