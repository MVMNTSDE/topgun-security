import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { HardHat, Eye, Siren, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Baustellenbewachung & Sicherheit NRW | Topgun Security",
  description: "Professioneller Baustellenschutz in NRW. 24/7 Überwachung, Zutrittskontrolle & Diebstahlschutz für Bauprojekte.",
  openGraph: {
    title: "Baustellenbewachung & Sicherheit NRW | Topgun Security",
    description: "Professioneller Baustellenschutz in NRW. 24/7 Überwachung, Zutrittskontrolle & Diebstahlschutz für Bauprojekte.",
    images: [{ url: '/images/services/revierdienst-car.png', width: 1200, height: 630 }],
  },
};

export default function BauPage() {
  return (
    <ServicePageLayout
      heroTitle="Baustellensicherheit"
      heroSubtitle="Damit Ihr Projekt im Zeitplan bleibt. Wir sichern Werte, kontrollieren Zufahrten und verhindern Bauverzögerungen durch Vandalismus."
      heroImage="/images/branchen/baustellensicherheit-new.png"
      parentLink={{ href: "/branchen", label: "Zurück zu den Branchen" }}
    >
      {/* 1. Einleitender Kontext */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
          Sicherheit ist kein Kostenfaktor, sondern Terminsicherung.
        </h2>
        <div className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl text-primary/80 italic mb-2">
            „Ein gestohlener Bagger oder zerstörte Kabelbäume kosten mehr als nur den Materialwert. Sie kosten Zeit. In der engen Taktung moderner Bauprojekte ist Vandalismus das größte Risiko für Ihre Deadline.“
            </p>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Topgun Security bietet baustellenspezifische Sicherheitskonzepte für Hochbau, Tiefbau und Infrastrukturprojekte. Wir verstehen die rauen Bedingungen einer Baustelle und arbeiten streng nach den Vorschriften der <a href="https://www.bgbau.de/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">BG BAU</a> – von der &quot;Grünen Wiese&quot; bis zur Schlüsselübergabe.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={HardHat} label="PSA-Pflicht" description="Ausstattung nach BG-Standard" />
        <TrustBadge icon={Eye} label="Video-Tower" description="Hybride Überwachungslösungen" />
        <TrustBadge icon={FileCheck} label="Zoll-Check" description="Prävention von Schwarzarbeit" />
        <TrustBadge icon={Siren} label="Brandwache" description="Qualifizierte Brandschutzhelfer" />
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Fachliche Erklärung */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6">Dynamischer Schutz für dynamische Orte</h2>
        <p className="text-gray-700 mb-6 font-medium">
          Eine Baustelle verändert sich täglich. Zäune werden versetzt, neue Subunternehmer kommen hinzu, Werte (Kupfer, Sanitär, Werkzeug) werden angeliefert. Ein statisches Sicherheitskonzept scheitert hier.
        </p>
        <p className="text-gray-700 mb-6">
          Wir arbeiten mit mobilen Sicherheitslösungen und passen unsere Taktik dem Baufortschritt an. In der Rohbauphase liegt der Fokus auf der Zutrittskontrolle, im Innenausbau auf der Diebstahlprävention hochwertiger Materialien.
        </p>
         <p className="text-gray-700">
           Unser Personal ist robust, durchsetzungsstark und kommuniziert auf Augenhöhe mit Polieren und Bauleitern.
        </p>
      </div>

      {/* 3. Typische Einsatzszenarien */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Zutrittsmanagement & Logistik</h3>
            <p className="text-sm text-gray-600 mb-4">Ordnung im Chaos der Gewerke.</p>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Baustellen-Ausweis:</strong> Erstellung und Kontrolle von Berechtigungen.</li>
                <li><strong>Lieferverkehr:</strong> Einweisung von Betonmischern und Schwerlastverkehr.</li>
                <li><strong>Schwarzarbeits-Prävention:</strong> Abgleich der anwesenden Personen mit den gemeldeten Listen (Mindestlohngesetz).</li>
                <li><strong>Gefahrenabwehr:</strong> Durchsetzung der Helmpflicht und Sicherheitsschuhe.</li>
            </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Nachsicherung & Verschluss</h3>
            <p className="text-sm text-gray-600 mb-4">Wenn die Handwerker gehen, kommen wir.</p>
             <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Patrouillen:</strong> Unregelmäßige Kontrollgänge über Baugerüste und Etagen.</li>
                <li><strong>Brandwachen:</strong> Überwachung nach Heißarbeiten (Schweißen/Löten) gemäß Feuerversicherungs-Klauseln.</li>
                <li><strong>Zaunkontrolle:</strong> Tägliche Überprüfungen der Bauzaun-Integrität.</li>
                <li><strong>Diebstahlschutz:</strong> Sicherung von Diesel-Tanks und Materialcontainern.</li>
            </ul>
        </div>
      </div>

       {/* 4. Videotürme Info Box */}
       <div className="bg-primary/5 p-8 md:p-12 rounded-xl mb-20 border border-primary/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="shrink-0 bg-white p-4 rounded shadow-sm">
                <Eye size={48} className="text-accent" />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Hybride Sicherheit: Mensch + Maschine</h3>
                <p className="text-gray-700">
                   Für großflächige Areale empfehlen wir den Einsatz von Videotürmen in Kombination mit Interventionskräften. 
                   Dies senkt die Personalkosten drastisch, ohne das Sicherheitsniveau zu gefährden. 
                   Wir beraten Sie gerne zur optimalen Platzierung.
                </p>
             </div>
          </div>
       </div>

      {/* 5. Wirtschaftlicher Faktor */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-6">Risiko Bauverzögerung</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-primary mb-2">Vandalismus</h3>
                <p className="text-sm text-gray-600">Zerstörte Fenster oder besprühte Fassaden kurz vor Übergabe sind der Albtraum jedes Bauherrn.</p>
            </div>
            <div className="p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-primary mb-2">Materialdiebstahl</h3>
                <p className="text-sm text-gray-600">Kupfer, Kabel und Werkzeug sind Währung. Wir sichern Ihre Lagerplätze.</p>
            </div>
             <div className="p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-primary mb-2">Bauherrenhaftung</h3>
                <p className="text-sm text-gray-600">Wir dokumentieren die Verkehrssicherungspflicht (Beleuchtung, Zaunstand) für Sie gerichtsfest.</p>
            </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-accent text-primary rounded-xl p-8 md:p-16 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
             <h2 className="text-3xl font-black uppercase mb-6 relative z-10">Sichern Sie Ihr Projekt.</h2>
             <p className="text-primary/80 max-w-2xl mx-auto mb-10 text-lg font-medium relative z-10">
                Vom Einfamilienhaus bis zum Großprojekt. Wir erstellen Ihnen ein Sicherheitskonzept, das in Ihr Budget passt.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link 
                    href="/#contact" 
                    className="btn-primary bg-primary text-white hover:bg-white hover:text-primary border-transparent"
                >
                    Baustelle absichern
                </Link>
             </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Baustellenbewachung",
            "provider": {
              "@type": "SecurityService",
              "name": "Topgun Security GmbH",
              "url": "https://topgun-security.de"
            },
            "areaServed": "Nordrhein-Westfalen",
            "description": "Professioneller Baustellenschutz in NRW. Zutrittskontrolle, Brandwache und Videoüberwachung. BG-Bau konform.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Individuelles Angebot"
            }
          })
        }}
      />
    </ServicePageLayout>
  );
}
