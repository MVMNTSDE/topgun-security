import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://topgun-security.de"),
  title: {
    default: "Topgun Security | Premium Sicherheitsdienst NRW",
    template: "%s | Topgun Security"
  },
  description: "Exzellenz im Objektschutz und professionelle Sicherheitsdienstleistungen in Köln, Bonn, Düsseldorf und ganz NRW. DIN 77200 zertifiziert.",
  keywords: ["Sicherheitsdienst", "Objektschutz", "Werkschutz", "NRW", "Köln", "Security", "Baustellenbewachung"],
  authors: [{ name: "Topgun Security GmbH" }],
  creator: "Topgun Security GmbH",
  publisher: "Topgun Security GmbH",
  openGraph: {
    title: "Topgun Security | Premium Sicherheitsdienst",
    description: "Ihr Partner für exzellenten Objektschutz und Sicherheitslösungen in NRW.",
    url: "https://topgun-security.de",
    siteName: "Topgun Security",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topgun Security | Premium Sicherheitsdienst NRW",
    description: "Exzellenz im Objektschutz und professionelle Sicherheitsdienstleistungen.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
