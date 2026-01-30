import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import BotpressChat from "@/components/BotpressChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diaby Souleymane KASSAMBA - Développeur Fullstack & Expert en Automatisation IA",
  description: "Portfolio professionnel - Développeur Fullstack spécialisé en solutions IA, automatisation et bots WhatsApp. Transformez vos idées en solutions numériques intelligentes.",
  keywords: ["développeur", "fullstack", "IA", "automatisation", "bots WhatsApp", "Next.js", "Laravel", "Burkina Faso", "Bobo-Dioulasso", "développement web", "SaaS", "intelligence artificielle"],
  authors: [{ name: "Diaby Souleymane KASSAMBA" }],
  creator: "Diaby Souleymane KASSAMBA",
  openGraph: {
    title: "Diaby Souleymane KASSAMBA - Portfolio",
    description: "Développeur Fullstack & Expert en Automatisation IA",
    type: "website",
    locale: "fr_FR",
    siteName: "Portfolio Diaby Souleymane KASSAMBA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diaby Souleymane KASSAMBA - Portfolio",
    description: "Développeur Fullstack & Expert en Automatisation IA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <Navigation />
        {children}
        <BotpressChat />
      </body>
    </html>
  );
}
