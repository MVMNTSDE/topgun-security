import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import CampaignQuiz from "@/components/CampaignQuiz";
import HomeAnimations from "@/components/home/HomeAnimations";



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
              "streetAddress": "Heinrich-Heine Straße 7",
              "addressLocality": "Erkrath",
              "postalCode": "40699",
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
