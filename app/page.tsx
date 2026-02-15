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
            "@type": "SecurityService",
            "name": "Topgun Security GmbH",
            "url": "https://topgun-security.de",
            "logo": "https://topgun-security.de/images/logo-full.png",
            "image": "https://topgun-security.de/images/og-image.jpg",
            "description": "Exzellenz im Objektschutz und professionelle Sicherheitsdienstleistungen in Köln, Bonn, Düsseldorf und ganz NRW. DIN 77200 zertifiziert.",
            "telephone": "+491787703738",
            "email": "verwaltung@topgun-security.de",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Heinrich-Heine-Straße 7",
              "addressLocality": "Erkrath",
              "postalCode": "40699",
              "addressCountry": "DE",
              "addressRegion": "NRW"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.2227,
              "longitude": 6.9083
            },
            "areaServed": [
              { "@type": "City", "name": "Köln" },
              { "@type": "City", "name": "Düsseldorf" },
              { "@type": "City", "name": "Bonn" },
              { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" }
            ],
            "priceRange": "$$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.instagram.com/topgun_security_gmbh",
              // Add other social links if available
            ]
          }),
        }}
      />
    </div>
  );
}
