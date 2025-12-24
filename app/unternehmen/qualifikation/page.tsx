import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { Award, BookOpen, GraduationCap, FileCheck, Shield } from "lucide-react";

export const metadata = {
  title: "Qualifikation & Zertifikate | Topgun Security",
  description: "Unsere Standards. Mitarbeiterqualifikation nach §34a GewO, VdS-Interventionskraft und interne Schulungen.",
};

export default function QualifikationPage() {
  return (
    <ServicePageLayout
      heroTitle="Qualifikation & Standards"
      heroSubtitle="Sicherheit ist eine Frage der Kompetenz. Wir investieren konsequent in die Ausbildung unserer Teams."
      heroImage="/images/gallery/img-1.png"
      parentLink={{ href: "/unternehmen", label: "Zurück zum Unternehmen" }}
    >
      <div className="mb-16">
        <h2 className="text-3xl font-black text-primary mb-6">
           Wissen schützt Werte.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
           Die Zeiten, in denen Muskelkraft allein ausreichte, sind lange vorbei. 
           Moderne Sicherheitsdienstleistung erfordert psychologisches Geschick, rechtliches Know-how und technische Versiertheit.
        </p>
      </div>

       {/* Certification Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
               <div className="shrink-0 w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full text-accent">
                   <BookOpen size={32} />
               </div>
               <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Sachkundeprüfung §34a GewO</h3>
                   <p className="text-gray-600 text-sm">
                       Der gesetzliche Mindeststandard ist für uns der Anfang. Unsere Führungskräfte und der Großteil des operativen Personals haben die Voll-Prüfung der <a href="https://www.ihk.de/koeln/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">IHK</a> abgelegt (nicht nur die Unterrichtung).
                   </p>
               </div>
          </div>
          
           <div className="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
               <div className="shrink-0 w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full text-accent">
                   <Shield size={32} />
               </div>
               <div>
                   <h3 className="text-xl font-bold text-primary mb-2">VdS-Interventionskraft</h3>
                   <p className="text-gray-600 text-sm">
                       Für die Alarmverfolgung setzen wir speziell geschulte Mitarbeiter ein. Diese Ausbildung garantiert rechtssicheres Handeln in Stresssituationen (Notwehr, Nothilfe, Festnahme).
                   </p>
               </div>
          </div>

           <div className="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
               <div className="shrink-0 w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full text-accent">
                   <FileCheck size={32} />
               </div>
               <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Unbedenklichkeit & Zuverlässigkeit</h3>
                   <p className="text-gray-600 text-sm">
                       Vor jeder Einstellung: Führungszeugnis (ohne Eintrag), Schufa-Auskunft und Überprüfung durch das Ordnungsamt. Vertrauen ist gut, Kontrolle ist Pflicht.
                   </p>
               </div>
          </div>

           <div className="flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
               <div className="shrink-0 w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full text-accent">
                   <GraduationCap size={32} />
               </div>
               <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Interne Akademie</h3>
                   <p className="text-gray-600 text-sm">
                       Deeskalationstraining, Erste Hilfe (Ersthelfer), Brandschutzhelfer-Schulung. Wir ruhen uns nicht auf Papier-Zertifikaten aus, sondern trainieren für die Praxis.
                   </p>
               </div>
          </div>
       </div>

       {/* Membership / Partners */}
       <div className="bg-gray-50 border-y border-gray-200 py-16 -mx-6 lg:-mx-12 px-6 lg:px-12 text-center">
            <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-10">Standards, nach denen wir arbeiten</h3>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-60 grayscale">
                {/* Placeholders for logos - mimicking high trust logos like IHK, VBG, BDSW */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl font-black text-gray-400">IHK</span>
                    <span className="text-xs font-bold">Geprüft</span>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl font-black text-gray-400">VBG</span>
                    <span className="text-xs font-bold">Unfallverhütung</span>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl font-black text-gray-400">VdS</span>
                    <span className="text-xs font-bold">Richtlinien</span>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl font-black text-gray-400">DIN</span>
                    <span className="text-xs font-bold">77200</span>
                </div>
            </div>
       </div>

       {/* Document Download Section */}
       <div className="mt-20">
           <h2 className="text-2xl font-bold text-primary mb-6">Transparenz-Offensive</h2>
           <p className="text-gray-700 mb-8">
               Wir verstecken uns nicht. Auf Anfrage stellen wir unseren Mandanten alle relevanten Nachweise zur Verfügung:
           </p>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <li className="flex items-center gap-3 text-primary font-medium p-4 bg-gray-50 rounded border border-gray-100">
                    <FileCheck size={20} className="text-accent"/> Unbedenklichkeitsbescheinigung Finanzamt
               </li>
               <li className="flex items-center gap-3 text-primary font-medium p-4 bg-gray-50 rounded border border-gray-100">
                    <FileCheck size={20} className="text-accent"/> Unbedenklichkeitsbescheinigung Krankenkasse
               </li>
               <li className="flex items-center gap-3 text-primary font-medium p-4 bg-gray-50 rounded border border-gray-100">
                    <FileCheck size={20} className="text-accent"/> Versicherungsbestätigung (Betriebshaftpflicht)
               </li>
               <li className="flex items-center gap-3 text-primary font-medium p-4 bg-gray-50 rounded border border-gray-100">
                    <FileCheck size={20} className="text-accent"/> Gewerbeanmeldung & Erlaubnisurkunde
               </li>
           </ul>
       </div>
    </ServicePageLayout>
  );
}
