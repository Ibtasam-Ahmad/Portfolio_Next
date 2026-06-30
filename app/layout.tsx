import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibtasam Ahmad | Full-Stack AI Developer",
  description: "Full-Stack AI Developer specializing in LLMs, RAG, Agentic AI, and production AI systems. 4+ years, 25+ AI systems, 100+ clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
