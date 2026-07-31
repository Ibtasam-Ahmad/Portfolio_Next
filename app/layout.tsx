import type { Metadata } from "next";
import { Inter, Fredoka, Press_Start_2P } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import content from "@/data/content.json";

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

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fredoka.variable} ${pressStart.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}var s=localStorage.getItem('designStyle');if(s){document.documentElement.setAttribute('data-style', s);}}catch(e){}})();`,
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
