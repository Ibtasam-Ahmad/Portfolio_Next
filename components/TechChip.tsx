import { techLink } from '@/lib/techLinks';

/**
 * A technology label: renders as a link to that technology's official site
 * when one is known (lib/techLinks.ts), and as a plain chip when it is not.
 * Both variants share `.tech-chip`, so a linked and an unlinked chip sitting
 * side by side are the same shape and weight — only the small external-link
 * glyph and the hover colour mark the difference.
 */
export default function TechChip({
  label,
  size = 'md',
}: {
  label: string;
  size?: 'sm' | 'md';
}) {
  const className = `tech-chip${size === 'sm' ? ' tech-chip-sm' : ''}`;
  const href = techLink(label);

  if (!href) {
    return <span className={className}>{label}</span>;
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Open the official ${label} site`}
    >
      {label}
      <svg
        width={size === 'sm' ? 9 : 10}
        height={size === 'sm' ? 9 : 10}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        aria-hidden="true"
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </a>
  );
}
