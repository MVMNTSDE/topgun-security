import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { Building2, Key, Video, Eye, Briefcase, BadgeCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sicherheitsdienst für Immobilien & Facility Management | Topgun Security",
  description: "Spezialisierte Sicherheitslösungen für Immobilienverwalter und Facility Management. Werterhalt, Mietersicherheit und effizientes Leerstandsmanagement.",
};

export default function ImmobilienPage() {
  return (
    <ServicePageLayout
      heroTitle="Immobilien & Facility Management"
      heroSubtitle="Objektwerte sichern. Mieter schützen. Risiken minimieren. Ihr Partner für professionelles Immobilien-Sicherheitsmanagement."
      heroImage="/images/services/portrait-professional.png"
      parentLink={{ href: "/#services", label: "Zurück zur Übersicht" }}
    >
       {/* Intro Section */}
       <div className="mb-16">
        <h2 className="text-3xl font-black text-primary mb-6">
          Sicherheit als Wertfaktor für Ihre Immobilie.
        </h2>
        <p className="border-l-4 border-accent pl-6 text-xl text-primary/80 italic mb-8">
          „Für Immobilienverwalter und Eigentümer ist Sicherheit mehr als Schutz – sie ist ein entscheidender Faktor für die Attraktivität und den Werterhalt des Portfolios.“
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Ob Gewerbeimmobilie, Wohnquartier oder Baustelle im Bestand: Topgun Security versteht die spezifischen Anforderungen der Immobilienwirtschaft. Wir entlasten Facility Manager durch proaktive Sicherheitsdienste, die Vandalismus verhindern, das Sicherheitsgefühl der Mieter stärken und Leerstände effektiv absichern.
        </p>
      </div>

       {/* Trust Badges Grid */}
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={Building2} label="Objektschutz" description="Für Gewerbe & Wohnen" />
        <TrustBadge icon={Key} label="Schlüsselmanagement" description="Sichere Verwaltung & Intervention" />
        <TrustBadge icon={Eye} label="Leerstands-Schutz" description="Prävention gegen Vandalismus" />
        <TrustBadge icon={BadgeCheck} label="Repräsentativ" description="Hochwertiges Auftreten" />
      </div>

      <div className="border-t border-gray-100 my-12" />

      {/* Challenges & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
           <h3 className="text-2xl font-bold text-primary mb-6">Herausforderungen im Facility Management</h3>
           <p className="mb-4 text-gray-600">
             Als Facility Manager stehen Sie täglich vor der Aufgabe, Wirtschaftlichkeit und Sicherheit in Einklang zu bringen. Typische Risiken sind:
           </p>
           <ul className="space-y-4 list-disc pl-5 text-gray-700 marker:text-accent">
             <li>Unbefugter Zutritt in Treppenhäuser oder Technikräume.</li>
             <li>Vandalismus und Graffiti an Fassaden.</li>
             <li>Sicherheitsbedürfnis anspruchsvoller Mieter.</li>
             <li>Verwaltung komplexer Schließanlagen und Zugriffsrechte.</li>
           </ul>
        </div>
        <div className="bg-primary/5 p-8 rounded-lg">
           <h3 className="text-2xl font-bold text-primary mb-6">Unsere Lösungen</h3>
           <ul className="space-y-4 list-none pl-0">
             <li className="flex gap-3">
               <Briefcase className="text-accent shrink-0 mt-1" size={20} />
               <span><strong>Doorman & Concierge:</strong> Verbinden Sie Sicherheit mit Service. Der erste Ansprechpartner für Mieter und Besucher.</span>
             </li>
             <li className="flex gap-3">
               <Video className="text-accent shrink-0 mt-1" size={20} />
               <span><strong>Mobile Bestreifung:</strong> Kosteneffiziente Kontrollen von Außenanlagen und Tiefgaragen.</span>
             </li>
             <li className="flex gap-3">
               <Key className="text-accent shrink-0 mt-1" size={20} />
               <span><strong>Intervention:</strong> Schnelles Handeln bei Alarmen oder technischen Störungen (in Absprache mit FM).</span>
             </li>
           </ul>
        </div>
      </div>

       {/* Deep Dive: Leerstand */}
       <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-8 md:p-12 rounded-lg mb-16 shadow-xl relative overflow-hidden">
         <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Spezialfall: Leerstandssicherung</h3>
            <p className="text-white/80 max-w-3xl mb-6">
              Leerstehende Immobilien sind besonders gefährdet durch Vandalismus, Hausbesetzungen und Materialdiebstahl (Kupfer/Kabel). Topgun Security bietet flexible Konzepte zur temporären Absicherung:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 p-4 rounded backdrop-blur-sm">
                    <h4 className="font-bold text-accent mb-1">Technische Überwachung</h4>
                    <p className="text-sm">Mobile Video-Türme und Alarmanlagen mit Aufschaltung zur Leitstelle.</p>
                </div>
                <div className="bg-white/10 p-4 rounded backdrop-blur-sm">
                    <h4 className="font-bold text-accent mb-1">Unregelmäßige Kontrollen</h4>
                    <p className="text-sm">Physische Präsenz zu wechselnden Zeiten stört Ausspähversuche.</p>
                </div>
            </div>
         </div>
         {/* Abstract BG Pattern */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </div>

       {/* CTA Section */}
       <div className="text-center bg-gray-50 border border-gray-200 p-12 rounded-lg">
        <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 uppercase">Werten Sie Ihre Immobilie auf.</h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Sicherheit ist ein Qualitätsmerkmal für jede Immobilie. Sprechen Sie mit uns über ein individuelles Sicherheitskonzept für Ihr Portfolio.
        </p>
        <Link 
          href="/#contact" 
          className="btn-primary inline-block"
        >
          Beratungstermin vereinbaren
        </Link>
      </div>
    </ServicePageLayout>
  );
}
