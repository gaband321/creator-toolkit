import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CreatorToolkit — Never Run Out of Viral Video Ideas Again",
  description: "Generate 20 hooks, 20 titles, and 20 thumbnail text ideas in seconds. AI-powered content tools for YouTube, TikTok, and Shorts creators.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen`} style={{ background: "#08080f" }}>
        {children}
      </body>
    </html>
  );
}
