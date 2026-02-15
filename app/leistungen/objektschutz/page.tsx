import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { ShieldCheck, MapPin, FileCheck, Clock, Users, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Objektschutz & Werkschutz | Topgun Security",
  description: "Professioneller Objektschutz für Unternehmen, Industrie und Immobilien. IHK-geprüftes Personal, 24/7 Leitstelle und modernste Sicherheitstechnik.",
};

export default function ObjektschutzPage() {
  return (
    <ServicePageLayout
      heroTitle="Objektschutz"
      heroSubtitle="Ganzheitliche Sicherheit für Immobilien, Werte und betriebliche Prozesse. Wir schützen, was Ihnen wichtig ist – präventiv und konsequent."
      heroImage="/images/gallery/img-1.png"
      parentLink={{ href: "/#services", label: "Zurück zu den Leistungen" }}
    >
      {/* Intro Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-black text-primary mb-6">
          Sicherheit ist kein Zustand, sondern ein Prozess.
        </h2>
        <p className="border-l-4 border-accent pl-6 text-xl text-primary/80 italic mb-8">
          „Unser Ziel im Objektschutz ist nicht nur die Reaktion auf Gefahren, sondern deren präventive Vermeidung durch intelligente Konzepte und sichtbare Präsenz.“
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Der professionelle Objektschutz bildet das Fundament betrieblicher Sicherheit. Er umfasst weit mehr als reine Bewachung: Es geht um die lückenlose Integration von personellen, technischen und organisatorischen Maßnahmen zur Abwehr von Gefahren. Topgun Security bietet Ihnen maßgeschneiderte Schutzkonzepte, die sich nahtlos in Ihre Betriebsabläufe einfügen, ohne diese zu stören.
        </p>
      </div>

      {/* Trust Badges Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={ShieldCheck} label="IHK Geprüft" description="Qualifiziertes Fachpersonal nach §34a GewO" />
        <TrustBadge icon={Clock} label="24/7 Leitstelle" description="Rund um die Uhr erreichbar und reaktionsfähig" />
        <TrustBadge icon={MapPin} label="Lokale Expertise" description="Spezialisiert auf Köln & NRW" />
        <TrustBadge icon={FileCheck} label="Digital Reporting" description="Echtzeit-Dokumentation aller Maßnahmen" />
      </div>

      <div className="border-t border-gray-100 my-12" />

      {/* Detailed Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">Unser Leistungsspektrum</h3>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start">
              <span className="text-accent mr-2 mt-1">✓</span>
              <span><strong>Zutrittskontrollen & Pfortendienst:</strong> Steuerung des Personen- und Fahrzeugverkehrs.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 mt-1">✓</span>
              <span><strong>Werkschutz:</strong> Sicherung von Industrieanlagen und Produktionsstätten.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 mt-1">✓</span>
              <span><strong>Bestreifung:</strong> Regelmäßige Kontrollgänge (innen & außen) zur Prävention.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 mt-1">✓</span>
              <span><strong>Schließdienste:</strong> Protokollierte Öffnungs- und Schließrundgänge.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 mt-1">✓</span>
              <span><strong>Alarmverfolgung:</strong> Sofortige Intervention bei Auslösung von Gefahrenmeldeanlagen.</span>
            </li>
          </ul>
        </div>
        <div className="relative h-min min-h-[300px] rounded-lg overflow-hidden bg-gray-100">
             <Image 
                src="/images/gallery/img-5.png" 
                alt="Werkschutz in Aktion"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-primary/5 p-8 md:p-12 rounded-lg mb-16">
        <h3 className="text-2xl font-bold text-primary mb-6">Unser Vorgehen: Analyse vor Aktion</h3>
        <p className="mb-8">
          Effektiver Objektschutz beginnt nicht erst am Tor, sondern bei der Planung. Wir arbeiten nach einem strikten Qualitätsmanagement-Prozess:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-black text-accent/20 mb-2">01</div>
            <h4 className="font-bold text-primary text-lg mb-2">Sicherheitsanalyse</h4>
            <p className="text-sm">Identifikation von Schwachstellen und Risikobewertung Ihrer Liegenschaft vor Ort.</p>
          </div>
          <div>
             <div className="text-4xl font-black text-accent/20 mb-2">02</div>
            <h4 className="font-bold text-primary text-lg mb-2">Dienstanweisung</h4>
            <p className="text-sm">Erstellung eines detaillierten, objektspezifischen Sicherheitskonzepts und Einweisung des Personals.</p>
          </div>
          <div>
             <div className="text-4xl font-black text-accent/20 mb-2">03</div>
            <h4 className="font-bold text-primary text-lg mb-2">Umsetzung & Reporting</h4>
            <p className="text-sm">Durchführung der Maßnahmen mit lückenloser digitaler Wächterkontrollsystem-Dokumentation.</p>
          </div>
        </div>
      </div>

      {/* Personnel Profile */}
      <h3 className="text-2xl font-bold text-primary mb-6">Ihr Sicherheitspersonal</h3>
      <p className="mb-6">
        Technik ist wichtig, aber der Mensch ist entscheidend. Unsere Mitarbeiter im Objektschutz zeichnen sich durch mehr als nur körperliche Präsenz aus. Wir setzen auf:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
         <div className="flex gap-4">
            <Users className="shrink-0 text-accent" />
            <div>
                <h5 className="font-bold text-primary">Soziale Kompetenz</h5>
                <p className="text-sm text-gray-600">Höfliches, bestimmtes Auftreten und Deeskalationsfähigkeit als Standard.</p>
            </div>
         </div>
         <div className="flex gap-4">
            <Lock className="shrink-0 text-accent" />
            <div>
                <h5 className="font-bold text-primary">Verschwiegenheit</h5>
                <p className="text-sm text-gray-600">Absolute Diskretion und Integrität im Umgang mit Ihren betrieblichen Interna.</p>
            </div>
         </div>
         <div className="flex gap-4">
            <ShieldCheck className="shrink-0 text-accent" />
            <div>
                <h5 className="font-bold text-primary">Qualifikation</h5>
                <p className="text-sm text-gray-600">Mindestens Unterrichtung nach §34a GewO, Ersthelfer- und Brandschutzausbildung.</p>
            </div>
         </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white p-8 md:p-12 text-center rounded-none shadow-2xl">
        <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase">Schützen Sie Ihre Werte.</h3>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          Lassen Sie uns gemeinsam ein Sicherheitskonzept entwickeln, das Ihren Anforderungen gerecht wird. Gerne beraten wir Sie vor Ort.
        </p>
        <Link 
          href="/#contact" 
          className="inline-block bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 uppercase tracking-widest transition-colors"
        >
          Kostenlose Erstberatung anfordern
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Objektschutz",
            "provider": {
              "@type": "SecurityService",
              "name": "Topgun Security GmbH",
              "url": "https://topgun-security.de"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Nordrhein-Westfalen"
            },
            "description": "Professioneller Objektschutz für Unternehmen und Immobilien in NRW. 24/7 Überwachung, Zutrittskontrollen und Werkschutz nach DIN 77200.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Objektschutz Leistungen",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Werkschutz" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pfortendienst" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bestreifung" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Alarmverfolgung" } }
              ]
            }
          })
        }}
      />
    </ServicePageLayout>
  );
}
