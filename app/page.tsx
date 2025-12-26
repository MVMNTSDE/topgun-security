import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import CampaignQuiz from "@/components/CampaignQuiz";
import HomeAnimations from "@/components/home/HomeAnimations";

export const metadata = {
  title: "Topgun Security | Premium Sicherheitsdienst NRW",
  description: "Zertifizierter Objektschutz, Werkschutz und Sicherheitsdienste in Köln & NRW. DIN 77200 & ISO 9001 zertifiziert.",
};

export default function Home() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-white">
      <EmergencyButton />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CampaignQuiz />
        <Contact />
      </main>
      <Footer />
      <HomeAnimations />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Topgun Security GmbH",
            "url": "https://topgun-security.de",
            "telephone": "+4922195285529",
            "email": "verwaltung@topgun-security.de",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Köln",
              "addressRegion": "NRW",
              "addressCountry": "DE"
            },
            "areaServed": "NRW",
            "priceRange": "$$$"
          }),
        }}
      />
    </div>
  );
}
