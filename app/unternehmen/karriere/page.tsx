import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Heart, GraduationCap, Clock, BadgeEuro } from "lucide-react";

export const metadata = {
  title: "Karriere & Jobs | Topgun Security",
  description: "Werden Sie Teil unseres Teams. Wir bieten faire Bezahlung, Weiterbildung und echte Perspektiven im Sicherheitsgewerbe.",
};

export default function KarrierePage() {
  return (
    <ServicePageLayout
      heroTitle="Karriere"
      heroSubtitle="Sicherheit ist Mannschaftssport. Wir suchen Charaktere, nicht nur Lebensläufe."
      heroImage="/images/services/portrait-professional.png"
      parentLink={{ href: "/unternehmen", label: "Zurück zum Unternehmen" }}
    >
      {/* 1. Intro / Employer Branding */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-primary mb-8">
           Arbeiten bei <br/><span className="text-accent">Topgun Security.</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="lg:w-1/2">
                <p className="text-xl font-medium text-primary mb-6">
                    Wir verlangen viel: Disziplin, Wachsamkeit und ein einwandfreies Führungszeugnis. Aber wir geben auch viel zurück.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                    In der Sicherheitsbranche ist Mitarbeiterfluktuation ein großes Problem. Wir steuern dagegen. Mit pünktlicher Bezahlung, respektvollem Umgang und einer Ausrüstung, die funktioniert. Wir glauben: Nur wer seinen Job gerne macht, macht ihn auch gut.
                </p>
                <p className="text-gray-700 font-bold">
                    Unsere Kunden vertrauen uns, weil unsere Mitarbeiter uns vertrauen.
                </p>
             </div>
             <div className="lg:w-1/2">
                 <div className="grid grid-cols-2 gap-4">
                     <div className="bg-gray-50 p-6 rounded text-center border border-gray-100">
                         <BadgeEuro size={32} className="mx-auto text-accent mb-2" />
                         <span className="block font-bold text-primary">Übertarifliche</span>
                         <span className="text-sm text-gray-500">Zulagen & Prämien</span>
                     </div>
                      <div className="bg-gray-50 p-6 rounded text-center border border-gray-100">
                         <Clock size={32} className="mx-auto text-accent mb-2" />
                         <span className="block font-bold text-primary">Planbare</span>
                         <span className="text-sm text-gray-500">Dienstpläne</span>
                     </div>
                      <div className="bg-gray-50 p-6 rounded text-center border border-gray-100">
                         <GraduationCap size={32} className="mx-auto text-accent mb-2" />
                         <span className="block font-bold text-primary">Kostenlose</span>
                         <span className="text-sm text-gray-500">Weiterbildungen</span>
                     </div>
                      <div className="bg-gray-50 p-6 rounded text-center border border-gray-100">
                         <Heart size={32} className="mx-auto text-accent mb-2" />
                         <span className="block font-bold text-primary">Familiäres</span>
                         <span className="text-sm text-gray-500">Betriebsklima</span>
                     </div>
                 </div>
             </div>
        </div>
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Wen wir suchen */}
      <h2 className="text-3xl font-bold text-primary mb-12 text-center">Offene Stellen</h2>
      
      <div className="space-y-6 max-w-4xl mx-auto mb-20">
          {/* Job 1 */}
          <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all cursor-pointer">
              <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                  <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">Sicherheitsmitarbeiter (m/w/d) im Objektschutz</h3>
                      <p className="text-sm text-gray-500 mt-1">Vollzeit / Teilzeit • Köln & Umgebung • Ab sofort</p>
                  </div>
                  <a href="mailto:karriere@topgun-security.de?subject=Bewerbung%20Objektschutz" className="btn-primary py-2 px-6 text-sm">Jetzt bewerben</a>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 block text-gray-600 text-sm">
                  <p><strong>Voraussetzungen:</strong> §34a GewO Unterrichtung, einwandfreies Führungszeugnis, Deutsch B2.</p>
              </div>
          </div>

           {/* Job 2 */}
          <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all cursor-pointer">
              <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                  <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">Geprüfte Schutz- und Sicherheitskraft (GSSK)</h3>
                      <p className="text-sm text-gray-500 mt-1">Vollzeit • Werkschutz NRW • Ab sofort</p>
                  </div>
                   <a href="mailto:karriere@topgun-security.de?subject=Bewerbung%20GSSK" className="btn-primary py-2 px-6 text-sm">Jetzt bewerben</a>
              </div>
               <div className="mt-4 pt-4 border-t border-gray-100 block text-gray-600 text-sm">
                  <p><strong>Voraussetzungen:</strong> IHK GSSK Prüfung, Erfahrung im Pfortendienst, Erste-Hilfe-Schein.</p>
              </div>
          </div>

           {/* Job 3 */}
          <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all cursor-pointer">
              <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                  <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">Doorman / Sicherheitsmitarbeiter Einzelhandel</h3>
                      <p className="text-sm text-gray-500 mt-1">Teilzeit / Minijob • Düsseldorf / Köln • Flexibel</p>
                  </div>
                   <a href="mailto:karriere@topgun-security.de?subject=Bewerbung%20Doorman" className="btn-primary py-2 px-6 text-sm">Jetzt bewerben</a>
              </div>
               <div className="mt-4 pt-4 border-t border-gray-100 block text-gray-600 text-sm">
                  <p><strong>Voraussetzungen:</strong> Gepflegtes Erscheinungsbild, Kommunikationsstärke, §34a Sachkunde.</p>
              </div>
          </div>
      </div>

      {/* 3. Initiativbewerbung CTA */}
      <div className="bg-primary text-white p-8 md:p-16 rounded-xl text-center">
             <h2 className="text-2xl font-bold mb-4">Nicht das Passende dabei?</h2>
             <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Wir sind immer auf der Suche nach motivierten Talenten. Senden Sie uns Ihre Initiativbewerbung.
                Auch Quereinsteiger sind bei entsprechender Eignung willkommen – wir unterstützen Sie bei der Qualifikation.
             </p>
             <a 
                 href="mailto:karriere@topgun-security.de?subject=Initiativbewerbung" 
                 className="inline-block px-8 py-4 border border-white hover:bg-white hover:text-primary transition-colors font-bold uppercase tracking-wider rounded"
            >
                 Initiativ bewerben
            </a>
      </div>
    </ServicePageLayout>
  );
}
