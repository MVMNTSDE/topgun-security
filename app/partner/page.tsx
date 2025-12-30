import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Handshake, Building, Hammer, ShieldCheck } from "lucide-react";

import Image from "next/image";
import PartnerContactForm from "@/components/PartnerContactForm";

export const metadata = {
  title: "Partner werden | Topgun Security Netzwerk",
  description: "Werden Sie Teil unseres Sicherheitsnetzwerks. Wir suchen Kooperationen mit Hausverwaltungen, Errichtern und Facility Managern in Köln & NRW.",
};

export default function PartnerPage() {
  return (
    <ServicePageLayout
      heroTitle="NETZWERK FÜR ERRICHTER & VERWALTER"
      heroSubtitle="Sie liefern die Technik oder Immobilie, wir die Intervention. Eine Partnerschaft auf Augenhöhe – ohne Knebelverträge."
      heroImage="/images/hero-partner-new.png"
      parentLink={{ href: "/", label: "Zurück zur Startseite" }}
    >
      {/* 1. Intro */}
      <div className="mb-16">
        <h2 className="text-3xl font-black text-primary mb-6">
           Gemeinsam stärker.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
           Topgun Security versteht sich nicht als Einzelkämpfer, sondern als Teil eines funktionierenden Ökosystems. 
           Wir arbeiten eng mit Spezialisten aus angrenzenden Gewerken zusammen, um unseren Kunden ganzheitliche Lösungen zu bieten.
        </p>
        <p className="text-gray-700 max-w-4xl">
            Unser Ziel: Ein vertrauenswürdiges Netzwerk für Köln und NRW, in dem Kompetenz vor Konkurrenzdenken steht.
        </p>
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Wen wir suchen */}
      <div className="mb-20">
         <h2 className="text-3xl font-bold text-primary mb-10">Synergien nutzen: Wen wir suchen</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Errichter */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6">
                    <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Errichter & Techniker</h3>
                <p className="text-gray-600 mb-6 grow">
                    Sie installieren EMA/BMA und Videoüberwachung? Wir liefern die Intervention.
                    <br/><br/>
                    <strong>Das Angebot:</strong> Wir empfehlen Sie für Technik-Upgrades bei unseren Bestandskunden. Sie empfehlen uns für die Alarmverfolgung.
                </p>
                <div className="mt-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">Win-Win</span>
                </div>
            </div>

            {/* Card 2: Hausverwaltung */}
             <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6">
                    <Building size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Hausverwaltungen</h3>
                <p className="text-gray-600 mb-6 grow">
                    Sie verwalten Wohn- oder Gewerbeimmobilien? Wir entlasten Sie bei Schließdiensten, Revierfahrten und Ärger mit Mietern.
                    <br/><br/>
                    <strong>Das Angebot:</strong> Rahmenverträge mit Vorzugskonditionen für Ihre Objekte.
                </p>
                 <div className="mt-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">Service-Plus</span>
                </div>
            </div>

             {/* Card 3: Handwerk */}
             <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6">
                    <Hammer size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Handwerk & Notdienste</h3>
                <p className="text-gray-600 mb-6 grow">
                    Schlüsseldienste, Glaser, Elektriker. Nach einem Einbruch oder Vandalismus brauchen unsere Kunden schnelle Hilfe.
                    <br/><br/>
                    <strong>Das Angebot:</strong> Aufnahme in unsere &quot;Notfall-Liste&quot; für priorisierte Auftragsvergabe.
                </p>
                 <div className="mt-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">Netzwerk</span>
                </div>
            </div>
         </div>
      </div>

      {/* 3. Warum Partner werden? */}
      <div className="bg-gray-50 rounded-xl p-8 md:p-16 mb-20">
         <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-primary mb-6">Qualität verbindet.</h2>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <div className="mt-1 text-accent"><Handshake size={20}/></div>
                        <div>
                            <strong className="text-primary block">Keine Provisionen</strong>
                            <span className="text-gray-600 text-sm">Wir arbeiten nicht gegen &quot;Tip-Gebühr&quot;. Wir empfehlen Partner, weil sie gut sind. Das gleiche erwarten wir von Ihnen.</span>
                        </div>
                    </li>
                     <li className="flex items-start gap-4">
                        <div className="mt-1 text-accent"><Handshake size={20}/></div>
                        <div>
                            <strong className="text-primary block">Lokaler Fokus</strong>
                            <span className="text-gray-600 text-sm">Wir stärken die regionale Wirtschaft in Köln, Leverkusen und Düsseldorf.</span>
                        </div>
                    </li>
                     <li className="flex items-start gap-4">
                        <div className="mt-1 text-accent"><Handshake size={20}/></div>
                        <div>
                            <strong className="text-primary block">Direkter Draht</strong>
                            <span className="text-gray-600 text-sm">Sie haben die Handynummer der Geschäftsführung. Kurze Dienstwege, schnelle Entscheidungen.</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                 <Image 
                   src="/images/company/partners-handshake.png" 
                   alt="Handschlag Business" 
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
            </div>
         </div>
      </div>

       {/* 4. Partner Kontakt Formular */}
       <div id="partner-contact" className="max-w-4xl mx-auto">
            <PartnerContactForm />
       </div>

    </ServicePageLayout>
  );
}
