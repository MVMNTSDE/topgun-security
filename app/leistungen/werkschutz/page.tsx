import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { Factory, Truck, Siren, ClipboardCheck, FireExtinguisher, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Werkschutz & Industriesicherheit Köln | Topgun Security",
  description: "Umfassender Werkschutz für Industrie und Produktion. Torkontrolle, Brandschutz und Werksgaste in Köln & NRW. ISO-konforme Prozesse.",
};

export default function WerkschutzPage() {
  return (
    <ServicePageLayout
      heroTitle="Werkschutz"
      heroSubtitle="Sicherung komplexer Industrieprozesse. Von der Torkontrolle bis zum vorbeugenden Brandschutz – wir halten Ihre Produktion am Laufen."
      heroImage="/images/gallery/img-2.png" // Industrial context image
      parentLink={{ href: "/#services", label: "Zurück zu den Leistungen" }}
    >
      {/* 1. Einleitender Kontext */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
          Produktionssicherheit als Wettbewerbsvorteil.
        </h2>
        <div className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl text-primary/80 italic mb-2">
            „Moderne Industrieanlagen sind Hochleistungszentren. Jede Störung – sei es durch Diebstahl, Sabotage oder technische Defekte – kostet Geld. Werkschutz ist daher kein Kostenfaktor, sondern eine Investition in die Lieferfähigkeit.“
            </p>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Topgun Security versteht Werkschutz nicht als isolierte Bewachungsaufgabe, sondern als integralen Bestandteil Ihrer Facility-Management-Prozesse. In Köln und NRW betreuen wir Produktionsstätten, Logistikzentren und Chemieparks mit einem Ansatz, der Disziplin mit Serviceorientierung verbindet. Unsere Mitarbeiter sind nicht nur Wächter, sondern oft der erste Ansprechpartner für Ihre Lieferanten, Kunden und Mitarbeiter.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={Factory} label="Industrie-Erfahrung" description="Spezialisiert auf Produktionsumgebungen" />
        <TrustBadge icon={FireExtinguisher} label="Brandschutz" description="Qualifizierte Brandschutzhelfer" />
        <TrustBadge icon={Truck} label="Logistik-Check" description="Effizientes LKW-Management" />
        <TrustBadge icon={ClipboardCheck} label="ISO-Konform" description="Prozessorientierte Dokumentation" />
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Fachliche Erklärung */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6">Was ist professioneller Werkschutz?</h2>
        <p className="text-gray-700 mb-6 font-medium">
          Der Werkschutz unterscheidet sich vom klassischen Objektschutz durch die Komplexität der Aufgaben und die Tiefe der Integration in den Betriebsablauf.
        </p>
        <p className="text-gray-700 mb-6">
          Es geht nicht primär um das "Bewachen einer leeren Hülle" bei Nacht, sondern um das Management von Strömen: Warenströme, Personenströme und Informationsströme. Ein qualifizierter Werkschutzmitarbeiter muss in der Lage sein, eine Gefahrenmeldeanlage (BMA/EMA) genauso sicher zu bedienen wie ein LKW-Leitsystem oder ein elektronisches Schlüsseldepot.
        </p>
        <p className="text-gray-700">
           Bei Topgun Security setzen wir auf eine strikte Trennung von Außenhautsicherung (Perimeter) und innerbetrieblicher Prozesssüberwachung. Dies garantiert, dass unbefugte Dritte das Gelände gar nicht erst betreten, während der operative Betrieb im Inneren reibungsfrei weiterläuft.
        </p>
      </div>

      {/* 3. Typische Einsatzszenarien */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Pforten- & Empfangsdienst</h3>
            <p className="text-sm text-gray-600 mb-4">Das Aushängeschild Ihres Unternehmens und das Nadelöhr der Sicherheit.</p>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Zutrittskontrolle:</strong> Überprüfung von Werksausweisen und Besucheranmeldung.</li>
                <li><strong>LKW-Abfertigung:</strong> Wiegen, Dokumentenprüfung und Zuweisung von Laderampen.</li>
                <li><strong>Schlüsselmanagement:</strong> Ausgabe und Rücknahme von Schlüsseln inkl. digitaler Protokollierung.</li>
                <li><strong>Telefonzentrale:</strong> Übernahme von Vermittlungsaufgaben außerhalb der Bürozeiten.</li>
            </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Streifendienst & Revier</h3>
            <p className="text-sm text-gray-600 mb-4">Präsenz auf dem Gelände zur Früherkennung von Gefahren.</p>
             <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Verschlusskontrollen:</strong> Prüfung von Fenstern, Toren und Notausgängen.</li>
                <li><strong>Technische Kontrollgänge:</strong> Überwachung von Kühlaggregaten, Serverräumen oder Heizungsanlagen.</li>
                <li><strong>Brandwache:</strong> Überwachung bei feuergefährlichen Arbeiten (Schweißen, Trennen).</li>
                <li><strong>Prävention:</strong> Durchsetzung von Arbeitssicherheitsvorschriften (PSA-Tragepflicht).</li>
            </ul>
        </div>
      </div>

      {/* 4. Strukturierte Arbeitsweise & Prozesse */}
      <div className="mb-20">
         <h2 className="text-3xl font-bold text-primary mb-8">Struktur schafft Sicherheit: Unser Prozess</h2>
         <p className="text-gray-700 max-w-3xl mb-12">
            Wir überlassen nichts dem Zufall. Bevor der erste Mitarbeiter seinen Dienst antritt, implementieren wir ein Sicherheitskonzept, das auf Ihren spezifischen Risiken basiert.
         </p>
         
         <div className="relative">
             {/* Connection Line */}
             <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:-ml-0.5" />

             {/* Step 1 */}
             <div className="relative flex md:justify-end mb-12 md:mb-24">
                <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 bg-accent rounded-full border-4 border-white z-10" />
                <div className="flex md:w-1/2 md:pr-12 md:text-right flex-col md:items-end p-4 md:p-0 pl-12 md:pl-0">
                    <span className="text-accent font-black tracking-widest text-sm uppercase mb-2">Phase 01</span>
                    <h3 className="text-xl font-bold text-primary mb-2">Audit & Begehung</h3>
                    <p className="text-gray-600">Wir analysieren Ihr Werksgelände. Wo sind toten Winkel? Wie ist der Zaunverlauf? Welche Werte (Kupfer, Technologie, Daten) sind besonders gefährdet?</p>
                </div>
                <div className="flex md:hidden absolute left-3 top-5 w-4 h-4 bg-accent rounded-full border-2 border-white z-10" />
             </div>

             {/* Step 2 */}
             <div className="relative flex md:justify-start mb-12 md:mb-24">
                <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 bg-primary rounded-full border-4 border-white z-10" />
                <div className="flex md:w-1/2 md:pl-12 flex-col p-4 md:p-0 pl-12">
                     <span className="text-primary font-black tracking-widest text-sm uppercase mb-2">Phase 02</span>
                    <h3 className="text-xl font-bold text-primary mb-2">Dienstanweisungen</h3>
                    <p className="text-gray-600">Erstellung eines detaillierten Handbuchs für das Personal. Jeder Handgriff – von der Alarmintervention bis zur Bedienung der Schrankenanlage – ist hier schriftlich fixiert.</p>
                </div>
                <div className="flex md:hidden absolute left-3 top-5 w-4 h-4 bg-primary rounded-full border-2 border-white z-10" />
             </div>

              {/* Step 3 */}
             <div className="relative flex md:justify-end">
                <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 bg-gray-300 rounded-full border-4 border-white z-10" />
                <div className="flex md:w-1/2 md:pr-12 md:text-right flex-col md:items-end p-4 md:p-0 pl-12 md:pl-0">
                     <span className="text-gray-400 font-black tracking-widest text-sm uppercase mb-2">Phase 03</span>
                    <h3 className="text-xl font-bold text-primary mb-2">Digitale Wächterkontrolle & Reporting</h3>
                    <p className="text-gray-600">Einführung unseres Echtzeit-Reportings. Sie erhalten täglich Protokolle über Vorkommnisse. QR-Code basierte Kontrollpunkte garantieren, dass die Bestreifung tatsächlich stattgefunden hat.</p>
                </div>
                 <div className="flex md:hidden absolute left-3 top-5 w-4 h-4 bg-gray-300 rounded-full border-2 border-white z-10" />
             </div>
         </div>
      </div>

      {/* 5. Qualifikation des Personals */}
      <div className="bg-primary/5 p-8 md:p-16 rounded-xl mb-20">
         <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-center">
               <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-6">
                 <Users size={48} className="text-accent" />
               </div>
               <h3 className="text-xl font-bold text-primary uppercase">Unser Standard</h3>
            </div>
            <div className="md:w-2/3">
               <h2 className="text-2xl font-bold text-primary mb-6">Werkschutzfachkraft statt Aushilfe</h2>
               <p className="text-gray-700 mb-6">
                 Der Einsatz in Industrieanlagen erfordert mehr als Basiswissen. Topgun Security setzt im Werkschutz gezielt Personal mit Zusatzqualifikationen ein.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="font-medium text-primary">IHK Sachkundeprüfung §34a</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="font-medium text-primary">Interventionskraft VdS</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="font-medium text-primary">Brandschutzhelfer</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="font-medium text-primary">Erste-Hilfe-Zusatzkurs</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 6. Wirtschaftlicher Faktor */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-6">Sicherheit rechnet sich</h2>
        <p className="text-gray-700 mb-8">
            Oft wird Sicherheit als reiner Kostenblock gesehen. Wir drehen diese Perspektive um. Ein effizienter Werkschutz verhindert Verluste, die Ihre Bilanz massiv belasten würden:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2">Produktionsausfall</h4>
                <p className="text-sm text-gray-600">Verhindert Stillstand durch Sabotage oder unbemerkte technische Defekte.</p>
            </div>
            <div className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2">Inventurdifferenzen</h4>
                <p className="text-sm text-gray-600">Reduziert "Schwund" von Rohstoffen und Werkzeugen durch strenge Ausgangskontrollen.</p>
            </div>
             <div className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2">Versicherungsprämien</h4>
                <p className="text-sm text-gray-600">Professioneller Werkschutz (VdS-konform) kann zu reduzierten Versicherungsbeiträgen führen.</p>
            </div>
        </div>
      </div>

      {/* 7. CTA */}
      <div className="bg-primary text-white overflow-hidden rounded-lg shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 p-8 md:p-16 text-center">
             <h2 className="text-3xl font-black uppercase mb-6 tracking-wide">Sichern Sie Ihren Standort.</h2>
             <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
                Gerne erstellen wir Ihnen eine unverbindliche Sicherheitsanalyse für Ihr Werksgelände. 
                Erfahren Sie, wie wir Ihre Prozesse schützen und Risiken minimieren können.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                    href="/#contact" 
                    className="btn-primary bg-accent hover:bg-white hover:text-primary border-none shadow-lg shadow-accent/20"
                >
                    Werkschutz anfragen
                </Link>
                <Link 
                    href="/branchen/logistik" 
                    className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-wider transition-all text-sm flex items-center justify-center"
                >
                    Speziallösung Logistik ansehen
                </Link>
             </div>
          </div>
      </div>
    </ServicePageLayout>
  );
}
