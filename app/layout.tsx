import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
  title: "Vanessa & Guilherme — 12.12.2026",
  description:
    "Você está convidado para celebrar o casamento de Vanessa e Guilherme, no dia 12 de Dezembro de 2026, em São Paulo.",
  openGraph: {
    title: "Vanessa & Guilherme — 12.12.2026",
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
      className={`${playfair.variable} ${cormorant.variable} ${geist.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
