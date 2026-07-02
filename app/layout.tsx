import type { Metadata } from "next";
import { Parisienne, Cormorant_Garamond, Geist } from "next/font/google";
import MusicPlayer from "@/components/MusicPlayer";
import "./globals.css";

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vanessa & Guilherme — 08.08.2026",
  description:
    "Você está convidado para celebrar o casamento de Vanessa e Guilherme, no dia 08 de Agosto de 2026, em São Paulo.",
  openGraph: {
    title: "Vanessa & Guilherme — 08.08.2026",
    description: "Junte-se a nós neste dia tão especial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${parisienne.variable} ${cormorant.variable} ${geist.variable}`}
    >
      <body className="min-h-full">
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
