import { ServicePageLayout } from "@/components/ServicePageLayout";
import { ShieldCheck, Award, HeartHandshake, Users, Target, Scale } from "lucide-react";
import { OperationalLogics } from "@/components/OperationalLogics";

export const metadata = {
  title: "Über Topgun Security | Verantwortung & Werte",
  description: "Erfahren Sie mehr über Topgun Security GmbH. Unsere Haltung, unser Anspruch und warum wir Sicherheit als Dienstleistung neu definieren.",
};

export default function UnternehmenPage() {
  return (
    <ServicePageLayout
      heroTitle="QUALITÄTSFÜHRER DURCH AUSBILDUNG"
      heroSubtitle="Sicherheit ist kein Produkt, sondern eine Leistung von Menschen. Deshalb zahlen wir über Tarif und fordern IHK-Abschlüsse."
      heroImage="/images/services/portrait-professional.png"
      parentLink={{ href: "/", label: "Zurück zur Startseite" }}
      bottomSection={<OperationalLogics />}
    >
      {/* 1. Vision & Mission */}
      <div className="mb-20">
        <h2 className="text-3xl lg:text-5xl font-black text-primary mb-8 leading-tight">
           Mehr als nur <br/><span className="text-accent">Bewachung.</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
             <div className="lg:w-1/2">
                <p className="text-xl font-medium text-primary mb-6">
                    Topgun Security wurde mit einem klaren Ziel gegründet: Den Sicherheitsmarkt in NRW nicht nur zu bedienen, sondern qualitativ anzuheben.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                    In einer Branche, die oft von Preiskampf und hoher Fluktuation geprägt ist, setzen wir bewusst auf Gegenpole: Verbindlichkeit, Ausbildung und faire Bezahlung. Wir glauben, dass wahre Sicherheit nur entstehen kann, wenn die Menschen, die sie gewährleisten, wertgeschätzt und professionell geführt werden.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Wir sind kein anonymer Großkonzern, bei dem Sie eine Nummer sind. Und wir sind kein Sub-Sub-Unternehmer ohne Struktur. Wir sind der starke Mittelstand für den Mittelstand.
                </p>
             </div>
             <div className="lg:w-1/2 relative bg-gray-100 rounded-xl overflow-hidden min-h-[400px]">
                 <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                     <div className="bg-white p-8 max-w-sm shadow-xl m-8">
                         <span className="text-6xl text-accent font-serif opacity-30">“</span>
                         <p className="text-xl font-serif text-primary italic mb-4 -mt-6 relative z-10">
                            Wir verkaufen keine Stunden. Wir verkaufen das gute Gefühl, dass alles geregelt ist.
                         </p>
                         <div className="flex items-center gap-4 mt-6 border-t border-gray-100 pt-6">
                             <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                                  {/* Placeholder for CEO Image if available, else generic avatar */}
                                  <Users className="w-full h-full p-2 text-gray-400" />
                             </div>
                             <div>
                                 <strong className="block text-primary text-sm">Geschäftsführung</strong>
                                 <span className="text-xs text-gray-500 uppercase tracking-widest">Topgun Security GmbH</span>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
      </div>

      <div className="border-t border-gray-100 my-16" />

      {/* 2. Unsere Werte (Trust Signals) */}
      <h2 className="text-3xl font-bold text-primary mb-12 text-center">Das Fundament unserer Arbeit</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
             <ShieldCheck size={40} className="text-accent mb-6" />
             <h3 className="text-xl font-bold text-primary mb-3">Legalität & Compliance</h3>
             <p className="text-gray-600">
                Wir arbeiten streng nach GewO, bewachungsverordnung und DSGVO. Schwarzarbeit oder Kettenverträge haben bei uns keinen Platz.
             </p>
          </div>
          <div className="p-8 border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
             <Target size={40} className="text-accent mb-6" />
             <h3 className="text-xl font-bold text-primary mb-3">Präzision</h3>
             <p className="text-gray-600">
                Sicherheit ist planbar. Wir verlassen uns nicht auf Zufälle, sondern auf Dienstanweisungen, Gefährdungsanalysen und digitale Kontrollen.
             </p>
          </div>
          <div className="p-8 border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
             <HeartHandshake size={40} className="text-accent mb-6" />
             <h3 className="text-xl font-bold text-primary mb-3">Handschlagqualität</h3>
             <p className="text-gray-600">
                Ein gegebenes Wort zählt bei uns noch. Wir sind 24/7 für unsere Mandanten erreichbar – persönlich und direkt.
             </p>
          </div>
      </div>

      {/* 3. Struktur & Quick Links */}
       <div className="bg-primary text-white p-8 md:p-16 rounded-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-black uppercase mb-6">Qualität ist prüfbar.</h2>
                <p className="text-white/70 mb-8 max-w-xl">
                    Vertrauen ist gut, Zertifikate sind besser. Unsere Mitarbeiter sind qualifiziert und unser Unternehmen wird stetig weiterentwickelt. Werfen Sie einen Blick auf unsere Qualifikations-Standards.
                </p>
                <a 
                   href="/unternehmen/qualifikation" 
                   className="btn-primary bg-white text-primary hover:bg-accent hover:text-white border-none"
                >
                   Zu unseren Zertifikaten
                </a>
             </div>
             <div className="lg:pl-12 border-l border-white/10">
                 <ul className="space-y-6">
                     <li className="flex gap-4 items-center">
                         <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded">
                             <Scale size={24} />
                         </div>
                         <div>
                             <strong className="block font-bold">Rechtssicherheit</strong>
                             <span className="text-sm text-white/50">Haftpflichtversicherung & Unbedenklichkeit</span>
                         </div>
                     </li>
                      <li className="flex gap-4 items-center">
                         <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded">
                             <Award size={24} />
                         </div>
                         <div>
                             <strong className="block font-bold">Ausbildung</strong>
                             <span className="text-sm text-white/50">Regelmäßige Schulungen & IHK-Prüfungen</span>
                         </div>
                     </li>
                 </ul>
             </div>
          </div>
          {/* Abstract BG */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
       </div>
    </ServicePageLayout>
  );
}
