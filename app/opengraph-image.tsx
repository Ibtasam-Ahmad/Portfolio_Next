import { ImageResponse } from 'next/og';
import content from '@/data/content.json';

/*
  The social card, generated at build time rather than shipped as a binary.

  A link with no og:image renders as a bare text row in Slack, LinkedIn,
  WhatsApp and X — which is where a portfolio actually gets shared. Generating
  it here means there is no PNG to keep in sync when the name, role or stats
  change: it is drawn from data/content.json like everything else.

  Satori (the renderer behind ImageResponse) supports a subset of CSS —
  flexbox only, and any element with more than one child MUST declare
  `display: flex` explicitly or the build fails.
*/

export const alt = content.site.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BG = '#0b0b0a';
const ACCENT = '#c1783f';
const TEXT = '#f2f1ee';
const MUTED = '#84827a';
const SECONDARY = '#9c9a94';

export default function OpengraphImage() {
  const { site, hero } = content;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: BG,
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              letterSpacing: 4,
              color: MUTED,
              fontWeight: 600,
            }}
          >
            AI ENGINEER · LLM, RAG & AGENTIC SYSTEMS
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              marginTop: 24,
            }}
          >
            <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, color: TEXT }}>
              {site.name}
            </div>
            <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, color: ACCENT }}>.</div>
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 18,
              fontSize: 44,
              fontWeight: 600,
              color: SECONDARY,
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: 96, height: 5, backgroundColor: ACCENT }} />
          <div
            style={{
              display: 'flex',
              marginTop: 34,
              alignItems: 'flex-start',
            }}
          >
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginRight: 64,
                }}
              >
                <div style={{ display: 'flex', fontSize: 42, fontWeight: 700, color: TEXT }}>
                  {stat.number}
                </div>
                <div
                  style={{
                    display: 'flex',
                    fontSize: 20,
                    letterSpacing: 1.5,
                    color: MUTED,
                    marginTop: 6,
                  }}
                >
                  {stat.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
