import type { Metadata, Viewport } from "next";
import { Inter, Fredoka, Press_Start_2P } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import content from "@/data/content.json";
import { SITE_URL, jsonLdGraph } from "@/lib/seo";

/*
  Self-hosted through next/font instead of an @import in globals.css: no
  render-blocking round trip to Google, no layout shift, and each family is
  exposed as a CSS variable the stylesheet reads (--font-body / --font-heading).

  Only Inter is preloaded. Fredoka and Press Start 2P are used by four of the
  seventeen design styles, so `preload: false` keeps a visitor who never
  switches looks from downloading fonts they will never see; the browser
  fetches them the moment a style that needs them is applied.
*/
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
  preload: false,
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-press-start",
  preload: false,
});

const { site } = content;

export const metadata: Metadata = {
  /* Required for OG/Twitter image paths and `alternates` to resolve to
     absolute URLs. Without it Next emits relative social image paths, which
     every crawler drops. */
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: site.titleTemplate,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Ibtasam",
    lastName: "Ahmad",
    username: "shibtasam",
    gender: "unspecified",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      /* Let Google use the full-size preview image and an unclipped snippet
         rather than defaulting to a truncated card. */
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  /* Matches the default (Minimalism) canvas in each mode, so the mobile
     browser chrome blends with the page instead of banding against it. */
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0a" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*
    suppressHydrationWarning on <html>: the blocking script in <head> stamps
    `class="light"` and `data-style` onto this element before React hydrates,
    so a returning visitor never sees a flash of the default theme. React then
    finds attributes the server never sent and logs "Extra attributes from the
    server". The divergence is deliberate and confined to this one element,
    which is exactly what the flag is for.
  */
  return (
    <html
      lang={site.language}
      className={`${inter.variable} ${fredoka.variable} ${pressStart.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* No hand-written <link rel="canonical"> here: `alternates.canonical`
            in the metadata above already emits one, and a second tag with a
            differing trailing slash makes the canonical ambiguous, leaving a
            crawler free to ignore both. One declaration, one owner. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}var s=localStorage.getItem('designStyle');if(s){document.documentElement.setAttribute('data-style', s);}}catch(e){}})();`,
          }}
        />
        {/* Structured data. Server-rendered into the initial HTML so it is in
            the document a crawler reads on first fetch, with no JS required.
            Built from data/content.json — see lib/seo.ts. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph()).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <AmbientBackground />
        {children}
      </body>
    </html>
  );
}
