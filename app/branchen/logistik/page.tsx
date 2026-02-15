import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { Truck, PackageCheck, Lock, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Sicherheitsdienst für Logistik & Transport | Topgun Security",
  description: "TAPA-konforme Sicherheitslösungen für Logistikzentren. Frachtschutz, Torkontrolle und Lagerüberwachung in Köln & ganz NRW.",
};

export default function LogistikPage() {
  return (
    <ServicePageLayout
      heroTitle="Logistik & Supply Chain"
      heroSubtitle="Wenn die Lieferkette steht, steht alles. Wir schützen Ihre Warenströme vor Diebstahl, Manipulation und Unterbrechung."
      heroImage="/images/services/revierdienst-car.png"
      parentLink={{ href: "/branchen", label: "Zurück zu den Branchen" }}
    >
      {/* 1. Einleitender Kontext */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
          Just-in-Time braucht Just-in-Case.
        </h2>
        <div className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl text-primary/80 italic mb-2">
            „Die Logistik ist das Herzstück der modernen Wirtschaft. Ein unbemerkter Schwund im Lager oder ein sabotiertes Kühlaggregat können Millionenschäden verursachen – nicht nur materiell, sondern auch an Ihrer Reputation.“
            </p>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Logistikzentren sind Hochrisikozonen. Hohe Warenwerte, ständiger Personenverkehr (Fremdfahrer, Leiharbeiter, Besucher) und offene Tore laden Kriminelle regelrecht ein. Topgun Security bietet spezialisierte Konzepte für Transport und Lagerlogistik, die über den einfachen Pförtnerdienst weit hinausgehen. Wir verstehen TAPA-Standards und integrieren uns nahtlos in Ihre Warehouse-Prozesse.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={Truck} label="Torkontrolle" description="Lückenlose Dokumentation" />
        <TrustBadge icon={PackageCheck} label="Fracht-Check" description="Plombenkontrolle & Verwiegung" />
        <TrustBadge icon={Lock} label="Lager-Schutz" description="Prävention von Innentätern" />
        <TrustBadge icon={ShieldAlert} label="Intervention" description="Sofortreaktion bei Alarm" />
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Fachliche Erklärung */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6">Sicherheit entlang der Lieferkette</h2>
        <p className="text-gray-700 mb-6">
          Sicherheit in der Logistik bedeutet mehr als nur Zäune. Es geht um die Integrität der gesamten Kette. Unsere Sicherheitsmitarbeiter sind darin geschult, Anomalien zu erkennen: Das falsche Kennzeichen, das abweichende Gewicht, die beschädigte Plombe.
        </p>
        <p className="text-gray-700">
           Wir setzen auf &quot;Vier-Augen-Prinzipien&quot; und digitale Unterstützung. Jeder LKW, der Ihr Gelände befährt oder verlässt, wird systemisch erfasst. So schließen wir die Lücke zwischen digitaler Warehouse-Verwaltung und physischer Realität.
        </p>
      </div>

      {/* 3. Typische Einsatzszenarien */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Das &quot;Safety-Gate&quot;</h3>
            <p className="text-sm text-gray-600 mb-4">Die erste und letzte Verteidigungslinie Ihres Logistikzentrums.</p>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Fahrzeugkontrolle:</strong> Abgleich von Kennzeichen und Frachtpapieren.</li>
                <li><strong>Zustandsprüfung:</strong> Sichtkontrolle auf Beschädigungen am Auflieger/Planen (Planenschlitzer-Prävention).</li>
                <li><strong>Fahrer-Handling:</strong> Einweisung in Sicherheitsvorschriften und Zuweisung von Slots.</li>
                <li><strong>Alkoholtests:</strong> Stichprobenartige Kontrollen bei Ausfahrt.</li>
            </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Innentäter-Prävention</h3>
            <p className="text-sm text-gray-600 mb-4">Der unangenehme Fakt: Viel Schwund entsteht intern.</p>
             <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Taschenkontrollen:</strong> Zufallsgenerierte Personalkontrollen beim Schichtwechsel (Betriebsratskonform).</li>
                <li><strong>Spindkontrollen:</strong> Durchsetzung von Compliance-Richtlinien.</li>
                <li><strong>Müll-Screening:</strong> Überprüfung von Abfallcontainern auf versteckte Ware.</li>
                <li><strong>Verdeckte Ermittlungen:</strong> Einsatz von Detektiven bei konkretem Verdacht.</li>
            </ul>
        </div>
      </div>

      {/* 4. Strukturierte Arbeitsweise */}
      <div className="mb-20">
         <h2 className="text-3xl font-bold text-primary mb-8">TAPA-Kriterien als Maßstab</h2>
         <p className="text-gray-700 mb-6">
            Wir orientieren uns bei unseren Sicherheitskonzepten an den strengen Vorgaben der <a href="https://tapa-global.org/?lang=de" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">TAPA (Transported Asset Protection Association)</a>. Auch wenn Sie (noch) nicht zertifiziert sind, arbeiten wir nach diesen Standards, um Ihr Risiko zu minimieren.
         </p>
         <div className="bg-primary text-white p-8 rounded-lg">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                 <div>
                     <span className="block text-4xl font-black text-accent mb-2">FSR</span>
                     <span className="text-sm uppercase tracking-widest text-white/50">Facility Security</span>
                     <p className="mt-2 text-sm text-white/80">Gebäudesicherheit & Zutrittskontrolle</p>
                 </div>
                 <div>
                     <span className="block text-4xl font-black text-accent mb-2">TSR</span>
                     <span className="text-sm uppercase tracking-widest text-white/50">Trucking Security</span>
                     <p className="mt-2 text-sm text-white/80">Sicherheit auf der Straße & Rastplätzen</p>
                 </div>
                 <div>
                     <span className="block text-4xl font-black text-accent mb-2">ISO</span>
                     <span className="text-sm uppercase tracking-widest text-white/50">28000</span>
                     <p className="mt-2 text-sm text-white/80">Sicherheitsmanagement in der Lieferkette</p>
                 </div>
             </div>
         </div>
      </div>

    
      {/* 5. Wirtschaftlicher Faktor */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-6">Return on Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
                 <Image 
                   src="/images/gallery/img-5.png" 
                   alt="Logistik Konvoi" 
                   fill
                   className="object-cover"
                 />
            </div>
            <div>
                 <p className="text-gray-700 mb-4">
                    Ein Logistikzentrum ohne effektiven Schutz blutet aus. Die Kosten für verlorene Ware, gestörte Kundenbeziehungen und Versicherungsregresse übersteigen die Kosten für Sicherheitspersonal um ein Vielfaches.
                 </p>
                 <p className="text-gray-700 font-bold">
                    Topgun Security sorgt dafür, dass Ihre Bestände im System mit den Beständen im Lager übereinstimmen.
                 </p>
            </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-white border-2 border-primary rounded-xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10"> 
             <h2 className="text-3xl font-black text-primary uppercase mb-4">Lieferkette absichern?</h2>
             <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Lassen Sie uns über Ihre Schwachstellen sprechen. Wir erstellen ein unverbindliches Audit für Ihr Logistikzentrum oder Ihren Fuhrpark.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                    href="/#contact" 
                    className="btn-primary"
                >
                    Logistik-Audit anfragen
                </Link>
                <Link 
                    href="/leistungen/werkschutz" 
                    className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-primary font-bold uppercase tracking-wider transition-all text-sm flex items-center justify-center rounded"
                >
                    Mehr zum Thema Werkschutz
                </Link>
             </div>
          </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Logistik Sicherheit",
            "provider": {
              "@type": "SecurityService",
              "name": "Topgun Security GmbH",
              "url": "https://topgun-security.de"
            },
            "areaServed": "Nordrhein-Westfalen",
            "description": "TAPA-konforme Sicherheitslösungen für Logistik. Frachtschutz, Torkontrolle und Lagerüberwachung.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Logistik-Audit anfragen"
            }
          })
        }}
      />
    </ServicePageLayout>
  );
}
