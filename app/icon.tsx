import { ImageResponse } from 'next/og';

/*
  Favicon, generated rather than committed as an .ico — the site had none, so
  browsers and search results fell back to a blank sheet. Mirrors the header
  wordmark: the initial in accent-on-canvas.
*/

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0b0b0a',
          color: '#c1783f',
          fontSize: 24,
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        I
      </div>
    ),
    size
  );
}
