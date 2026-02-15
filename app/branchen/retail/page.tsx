import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { ShoppingBag, Eye, UserCheck, BadgeEuro, CreditCard } from "lucide-react";
import GenericFunnel from "@/components/Funnel/GenericFunnel";

export const metadata = {
  title: "Einzelhandelssicherheit & Doorman Service | Topgun Security",
  description: "Sicherheit für High-End Retail. Doorman, Ladendetektive & Inventurschutz für den Einzelhandel in Köln & Düsseldorf.",
  openGraph: {
    title: "Einzelhandelssicherheit & Doorman Service | Topgun Security",
    description: "Sicherheit für High-End Retail. Doorman, Ladendetektive & Inventurschutz für den Einzelhandel in Köln & Düsseldorf.",
    images: [{ url: '/images/services/doorman-mall.png', width: 1200, height: 630 }],
  },
};

export default function RetailPage() {
  return (
    <ServicePageLayout
      heroTitle="Retail Security"
      heroSubtitle="Das Einkaufserlebnis schützen. Wir sichern Ihre Umsätze und sorgen für eine entspannte Atmosphäre im Store."
      heroImage="/images/services/doorman-mall.png"
      parentLink={{ href: "/branchen", label: "Zurück zu den Branchen" }}
    >
      {/* 1. Einleitender Kontext */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
          High Street Security.
        </h2>
        <div className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl text-primary/80 italic mb-2">
            „Im Einzelhandel prallen Welten aufeinander: Offene Türen vs. Warensicherung. Willkommenskultur vs. Diebstahlprävention. Wir beherrschen diese Balance.“
            </p>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Topgun Security bietet maßgeschneiderte Lösungen für den Einzelhandel – vom Luxus-Store auf der Kölner Schildergasse bis zum Einkaufszentrum auf der grünen Wiese. Wir verstehen Retail nicht als Wachdienst, sondern als Teil des Customer Service.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={ShoppingBag} label="Shopping-Safe" description="Schutz für Kunden & Ware" />
        <TrustBadge icon={UserCheck} label="Doorman" description="Repräsentativer Empfang" />
        <TrustBadge icon={Eye} label="Detektiv" description="Verdeckte Ermittlung" />
        <TrustBadge icon={BadgeEuro} label="Inventurschutz" description="Reduktion von Verlusten" />
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Fachliche Erklärung */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6">Das 3-Säulen-Modell für Retail</h2>
        <p className="text-gray-700 mb-6">
          Erfolgreiche Sicherheit im Einzelhandel ist nie nur eine Maßnahme. Sie ist eine Kombination aus Technik, Präsenz und Ermittlung.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-50 p-6 rounded border border-gray-100">
                <h3 className="font-bold text-accent text-lg mb-2">1. Die Prävention (Doorman)</h3>
                <p className="text-sm text-gray-600">Steht sichtbar am Eingang. Begrüßt Kunden, schreckt Täter ab (&quot;Hard Target&quot;). Sorgt für subjektives Sicherheitsgefühl.</p>
            </div>
             <div className="bg-gray-50 p-6 rounded border border-gray-100">
                <h3 className="font-bold text-accent text-lg mb-2">2. Die Intervention (Detektiv)</h3>
                <p className="text-sm text-gray-600">Arbeitet unsichtbar. Greift erst ein, wenn gestohlen wurde. Dokumentiert und bringt zur Anzeige.</p>
            </div>
             <div className="bg-gray-50 p-6 rounded border border-gray-100">
                <h3 className="font-bold text-accent text-lg mb-2">3. Die Analyse (Audit)</h3>
                <p className="text-sm text-gray-600">Prüft interne Prozesse. Wie wird kassiert? Wie wird Ware angenommen? Wo sind die Blind Spots der Kameras?</p>
            </div>
        </div>
      </div>

      {/* 3. Typische Einsatzszenarien */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Luxus & High Fashion</h3>
            <p className="text-sm text-gray-600 mb-4">Exklusivität wahren, Werte schützen.</p>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Zutrittssteuerung:</strong> Limitierung der Kundenanzahl für exklusives Beratungserlebnis.</li>
                <li><strong>Diskretion:</strong> Schutz von VIP-Kunden vor Paparazzi oder Fans.</li>
                <li><strong>Appearance:</strong> Anzugträger statt Uniformträger.</li>
            </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Elektronik & Mass Market</h3>
            <p className="text-sm text-gray-600 mb-4">Hohe Frequenz, schnelle Zugriffe.</p>
             <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Taschenkontrollen:</strong> Durchsetzung des Hausrechts bei konkretem Verdacht.</li>
                <li><strong>Bandenkriminalität:</strong> Erkennung organisierter Gruppen.</li>
                <li><strong>Deeskalation:</strong> Umgang mit aggressiven Ladendieben.</li>
            </ul>
        </div>
      </div>

      
      {/* 5. Wirtschaftlicher Faktor */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-6">Inventurdifferenz senken</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
            
            <div>
                 <p className="text-gray-700 mb-4">
                    Die &quot;Inventurdifferenz&quot; ist oft nur ein schönes Wort für Diebstahl. Im Schnitt verlieren Einzelhändler 1-2% ihres Umsatzes an Inventurdifferenzen.
                 </p>
                 <p className="text-gray-700 font-bold mb-4">
                    Rechenbeispiel: Bei 5 Mio. € Jahresumsatz sind das 50.000 € - 100.000 € Verlust. 
                 </p>
                 <p className="text-accent font-bold">
                     Eine Sicherheitslösung von Topgun Security kostet oft weniger als der Schaden, den sie verhindert.
                 </p>
            </div>
             <div className="relative h-64 w-full md:w-1/3 rounded-lg overflow-hidden bg-primary/5 flex items-center justify-center">
                 <CreditCard size={64} className="text-primary/20" />
            </div>
        </div>
      </div>

      {/* 6. CTA / Funnel */}
      <GenericFunnel
        industry="Retail"
        title="Inventur-Differenzen senken?"
        description="Beantworten Sie 3 Fragen zu Ihrer Situation. Wir analysieren Ihr Risikoprofil und senden Ihnen eine passende Strategie-Empfehlung."
        questions={[
           {
            id: "issue",
            question: "Was ist Ihre größte Herausforderung?",
            options: [
              { id: "theft", label: "Ladendiebstahl / Banden", icon: "🏃" },
              { id: "staff", label: "Interne Differenzen / Mitarbeiter", icon: "busts_in_silhouette" },
              { id: "aggression", label: "Aggression / Vandalismus", icon: "weary" },
              { id: "inventory", label: "Unklare Inventurverluste", icon: "chart_with_downwards_trend" },
            ]
          },
          {
            id: "size",
            question: "Wie viele Filialen betreffen dies?",
            options: [
              { id: "single", label: "1 Filiale (Pilot)" },
              { id: "small_chain", label: "2-5 Filialen" },
              { id: "large_chain", label: "Filialnetz (>5)" },
            ]
          },
          {
            id: "measure",
            question: "Welche Maßnahmen nutzen Sie bereits?",
            options: [
              { id: "cameras", label: "Videoüberwachung" },
              { id: "eas", label: "Warensicherungs-Tags" },
              { id: "detective", label: "Detektiv / Doorman" },
              { id: "none", label: "Bisher keine / Wenig" },
            ]
          }
        ]}
        offerCode="RETAIL-AUDIT-25"
        offerTitle="Sicherheits-Audit Qualifiziert"
        offerDescription="Basierend auf Ihren Angaben empfehlen wir ein gezieltes Store-Audit. Sichern Sie sich unsere kostenlose Ersteinschätzung."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Einzelhandelssicherheit",
            "provider": {
              "@type": "SecurityService",
              "name": "Topgun Security GmbH",
              "url": "https://topgun-security.de"
            },
            "areaServed": "Köln",
            "description": "Doorman und Ladendetektive für High-End Retail in Köln. Diebstahlprävention und Inventurschutz.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Store-Audit"
            }
          })
        }}
      />
    </ServicePageLayout>
  );
}
