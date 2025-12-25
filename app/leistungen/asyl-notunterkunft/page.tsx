import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { Shield, Home, HeartHandshake, Eye, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Asyl- & Notunterkunftbetreuung | Topgun Security",
  description: "Sensible Sicherheitsdienstleistungen für Flüchtlingsunterkünfte und Notunterkünfte. Sozialkompetenz, Deeskalation und 24/7 Schutz.",
};

export default function AsylPage() {
  return (
    <ServicePageLayout
      heroTitle="Asyl- & Notunterkunftbetreuung"
      heroSubtitle="Sicherheit mit Menschlichkeit. Wir schützen Bewohner und Einrichtungen mit Respekt und Konsequenz."
      heroImage="/images/gallery/img-5.png" // Placeholder
      parentLink={{ href: "/leistungen", label: "Zurück zu den Leistungen" }}
    >
      {/* 1. Einleitender Kontext */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
          Sicherheit und Betreuung für Unterkünfte.
        </h2>
        <div className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl text-primary/80 italic mb-2">
            „In sensiblen Umgebungen wie Unterkünften ist Sicherheit mehr als Bewachung. Es ist soziale Verantwortung. Wir garantieren ein friedliches Miteinander.“
            </p>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Die Betreuung von Asyl- und Notunterkünften stellt höchste Anforderungen an die soziale Kompetenz des Sicherheitspersonals. Es gilt, kulturelle Unterschiede zu respektieren, Konflikte präventiv zu lösen und gleichzeitig die Hausordnung konsequent durchzusetzen. Topgun Security setzt hierbei auf speziell geschulte Teams, die interkulturelle Kompetenz mit professioneller Sicherheitsarbeit verbinden.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={HeartHandshake} label="Sozialkompetenz" description="Interkulturelle Sensibilität" />
        <TrustBadge icon={Home} label="Objektschutz" description="24/7 Präsenz & Kontrolle" />
        <TrustBadge icon={Eye} label="Konfliktlösung" description="Deeskalations-Strategien" />
        <TrustBadge icon={FileCheck} label="Dokumentation" description="Lückenloses Reporting" />
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Fachliche Erklärung */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6">Unser Sicherheitskonzept</h2>
        <p className="text-gray-700 mb-6">
          Wir verstehen unsere Rolle nicht als reine Ordnungskraft, sondern als stabilisierenden Faktor im Alltag der Einrichtung. Unsere Mitarbeiter sind oft erste Ansprechpartner für Bewohner und bilden die Schnittstelle zur Einrichtungsleitung und Sozialarbeit.
        </p>
        <p className="text-gray-700">
           Wir verbinden die notwendige Durchsetzung der Hausordnung und Sicherheitsvorgaben (Zutrittskontrollen, Brandschutz, Gewaltprävention) mit einem respektvollen Umgang. Wir sorgen dafür, dass Regeln eingehalten werden, ohne die Bewohner pauschal zu kriminalisieren.
        </p>
      </div>

      {/* 3. Typische Einsatzszenarien */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Zugangsmanagement</h3>
            <p className="text-sm text-gray-600 mb-4">Kontrolle über Wer-Kommt und Wer-Geht.</p>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Pfortendienst:</strong> Überprüfung von Bewohnerausweisen und Besuchern.</li>
                <li><strong>Fremdfirmen:</strong> Begleitung von Handwerkern und Lieferanten.</li>
                <li><strong>Taschenkontrollen:</strong> Verhinderung der Einbringung verbotener Gegenstände (Alkohol, Waffen).</li>
            </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Innenbereich & Brandschutz</h3>
            <p className="text-sm text-gray-600 mb-4">Sicherheit im Wohnbereich.</p>
             <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Streifengänge:</strong> Präsenz in Gemeinschaftsräumen und Außenbereichen.</li>
                <li><strong>Brandschutzhelfer:</strong> Regelmäßige Kontrolle von Fluchtwegen und Feuerlöschern.</li>
                <li><strong>Nachtwache:</strong> Sicherstellung der Nachtruhe und Reaktion bei medizinischen Notfällen.</li>
            </ul>
        </div>
      </div>

      {/* 4. Qualifikation */}
       <div className="bg-primary/5 p-8 md:p-12 rounded-xl mb-20 border border-primary/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="shrink-0 bg-white p-4 rounded shadow-sm">
                <Shield size={48} className="text-accent" />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Qualifiziertes Personal</h3>
                <p className="text-gray-700">
                   Eingesetztes Personal verfügt über die Sachkundeprüfung nach §34a GewO sowie erweiterte Führungszeugnisse. 
                   Zusätzlich schulen wir in Erster Hilfe, Brandschutz und Diversity Management. 
                   Sprachkenntnisse (Arabisch, Farsi, Englisch, Französisch) sind Teil unseres Anforderungsprofils.
                </p>
             </div>
          </div>
       </div>

      {/* 5. Wirtschaftlicher Faktor */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-6">Partnerschaft mit Kommunen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-6 border border-gray-100 shadow-sm rounded">
                <h4 className="font-bold text-primary mb-2">Kosteneffizienz</h4>
                <p className="text-sm text-gray-600">Transparente Abrechnungsmodelle und effiziente Personaleinsatzplanung entlasten die öffentlichen Kassen.</p>
            </div>
             <div className="p-6 border border-gray-100 shadow-sm rounded">
                <h4 className="font-bold text-primary mb-2">Rechtssicherheit</h4>
                <p className="text-sm text-gray-600">Wir arbeiten streng nach Leistungsverzeichnis und Betreiberverordnung, dokumentieren rechtssicher und sind 24/7 für Behörden erreichbar.</p>
            </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-white border-2 border-primary rounded-xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
             
             <h2 className="text-3xl font-black text-primary uppercase mb-4 relative z-10">Vertrauen ist die Basis.</h2>
             <p className="text-gray-600 max-w-2xl mx-auto mb-8 relative z-10">
                Sprechen Sie mit uns über ein Sicherheitskonzept, das Schutz und Menschlichkeit vereint. Wir sind Ihr Partner für kommunale Aufgaben.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link 
                    href="/#contact" 
                    className="btn-primary"
                >
                    Beratungstermin vereinbaren
                </Link>
             </div>
      </div>
    </ServicePageLayout>
  );
}
