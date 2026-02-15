import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://topgun-security.de"),
  title: {
    default: "Topgun Security | Premium Sicherheitsdienst NRW",
    template: "%s | Topgun Security"
  },
  description: "Exzellenz im Objektschutz und professionelle Sicherheitsdienstleistungen in Köln, Bonn, Düsseldorf und ganz NRW. DIN 77200 zertifiziert.",
  keywords: ["Sicherheitsdienst", "Objektschutz", "Werkschutz", "NRW", "Köln", "Security", "Baustellenbewachung", "Veranstaltungsschutz", "Revierdienst"],
  authors: [{ name: "Topgun Security GmbH" }],
  creator: "Topgun Security GmbH",
  publisher: "Topgun Security GmbH",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Topgun Security | Premium Sicherheitsdienst NRW",
    description: "Ihr Partner für exzellenten Objektschutz, Werkschutz und Sicherheitslösungen in NRW. DIN 77200 konform.",
    url: "https://topgun-security.de",
    siteName: "Topgun Security",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // Make sure this exists or use a fallback
        width: 1200,
        height: 630,
        alt: "Topgun Security - Sicherheit & Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Topgun Security | Premium Sicherheitsdienst NRW",
    description: "Exzellenz im Objektschutz und professionelle Sicherheitsdienstleistungen in NRW.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "geo.region": "DE-NW",
    "geo.placename": "Erkrath",
    "geo.position": "51.2227;6.9083", // Approx Erkrath coordinates
    "ICBM": "51.2227, 6.9083",
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
          <CookieBanner />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
