import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { Car, Siren, Radio, QrCode } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Revierdienst & Mobile Sicherheit | Topgun Security",
  description: "Mobiler Objektschutz und Alarmverfolgung in Köln & NRW. Kosteneffiziente Sicherheit durch Patrouillenfahrten und Interventionsdienst.",
};

export default function RevierdienstPage() {
  return (
    <ServicePageLayout
      heroTitle="Revierdienst"
      heroSubtitle="Präsenz zeigen, wo sie gebraucht wird. Mobile Sicherheit für Gewerbeparks, Baustellen und Wohngebiete."
      heroImage="/images/gallery/img-5.png"
      parentLink={{ href: "/leistungen", label: "Zurück zu den Leistungen" }}
    >
      {/* 1. Einleitender Kontext */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
          Sicherheit, die bewegt.
        </h2>
        <div className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl text-primary/80 italic mb-2">
            „Nicht jedes Objekt benötigt eine permanente Bewachung. Der Revierdienst ist die intelligente Lösung für alle, die Budgeteffizienz mit hoher Abschreckung kombinieren wollen.“
            </p>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Unser mobiler Dienst ist die schnelle Eingreiftruppe von Topgun Security. Unsere Revierfahrer kontrollieren mehrere Objekte in einer Nacht – unvorhersehbar, dokumentiert und effektiv. Durch die geteilten Kosten erhalten Sie professionellen Schutz zu einem Bruchteil des Preises einer permanenten Bewachung.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={Car} label="Modernste Flotte" description="GPS-überwachte Einsatzfahrzeuge" />
        <TrustBadge icon={Siren} label="Intervention" description="VdS-konforme Alarmverfolgung" />
        <TrustBadge icon={QrCode} label="Digital Wächter" description="Echtzeit-Nachweis per Scan" />
        <TrustBadge icon={Radio} label="Aufschaltung" description="24/7 Notruf- & Serviceleitstelle" />
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Fachliche Erklärung */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6">Wie funktioniert der Revierdienst?</h2>
        <p className="text-gray-700 mb-6 font-medium">
          Das Prinzip basiert auf Unberechenbarkeit. Potenzielle Täter müssen jederzeit damit rechnen, dass eines unserer Fahrzeuge auf das Gelände fährt.
        </p>
        <p className="text-gray-700 mb-6">
          Wir definieren mit Ihnen gemeinsam Kontrollpunkte (z.B. Hintereingänge, Fensterfronten, Technikräume). Diese werden von unseren Fahrern zu wechselnden Zeiten angefahren. Vor Ort wird ausgestiegen, geprüft und der Kontrollgang digital protokolliert.
        </p>
         <p className="text-gray-700">
           Sollte bei einer Kontrolle etwas auffallen (offenes Fenster, beschädigter Zaun), leiten wir sofort Maßnahmen ein – von der Notverschalung bis zur Alarmierung der Polizei.
        </p>
      </div>

      {/* 3. Typische Einsatzszenarien */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Schließdienst & Öffnungsdienst</h3>
            <p className="text-sm text-gray-600 mb-4">Der sichere Start und das sichere Ende Ihres Arbeitstages.</p>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Morgens:</strong> Aufschluss des Gebäudes, Deaktivierung der EMA, Licht an.</li>
                <li><strong>Abends:</strong> Rundgang (&quot;Licht aus, Fenster zu&quot;), Aktivierung der Alarmanlage, Verschluss der Tore.</li>
                <li><strong>Vorteil:</strong> Kein Mitarbeiter muss &quot;als Letzter&quot; allein im Dunkeln gehen.</li>
            </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Alarmverfolgung (Intervention)</h3>
            <p className="text-sm text-gray-600 mb-4">Wenn die Technik ruft, kommen wir.</p>
             <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Schlüsselhinterlegung:</strong> Wir lagern Ihre Objektschlüssel im Tresor unseres Einsatzfahrzeugs.</li>
                <li><strong>Reaktionszeit:</strong> Schnelle Anfahrt bei Alarmauslösung (Einbruch, Feuer, Technik).</li>
                <li><strong>Außenhautkontrolle:</strong> Überprüfung auf Einbruchspuren.</li>
                <li><strong>Innenkontrolle:</strong> Begehung des Objektes und Rückstellung der Anlage bei Fehlalarm.</li>
            </ul>
        </div>
      </div>

      {/* 4. Technik */}
       <div className="bg-primary text-white p-8 md:p-12 rounded-xl mb-20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
             <div className="shrink-0 bg-white/10 p-4 rounded-full border border-white/20">
                <Car size={48} className="text-accent" />
             </div>
             <div>
                <h3 className="text-2xl font-bold mb-2">GPS-Live-Tracking</h3>
                <p className="text-white/80">
                   Vertrauen ist gut, Beweis ist besser. Unsere Fahrzeuge sind GPS-überwacht. Wir können Ihnen auf die Minute genau nachweisen, wann unser Fahrer bei Ihnen war und wie lange die Kontrolle dauerte. Transparent und revisionssicher.
                </p>
             </div>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
       </div>

      {/* 5. Wirtschaftlicher Faktor */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-6">Für wen lohnt sich das?</h2>
         <p className="text-gray-700 mb-8">
            Der Revierdienst ist die ideale Lösung für KMUs, Büros und Privathaushalte, für die ein permanenter Wachdienst (24/7) wirtschaftlich nicht darstellbar ist.
         </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 shadow-sm rounded bg-gray-50">
                <h4 className="font-bold text-primary mb-2">Gewerbeparks</h4>
                <p className="text-sm text-gray-600">Gemeinschaftliche Beauftragung durch mehrere Mieter senkt die Kosten pro Partei massiv.</p>
            </div>
            <div className="p-6 border border-gray-100 shadow-sm rounded bg-gray-50">
                <h4 className="font-bold text-primary mb-2">Privat-Residenzen</h4>
                <p className="text-sm text-gray-600">Urlaubsbetreuung oder nächtliche Streife für erhöhtes Sicherheitsgefühl.</p>
            </div>
             <div className="p-6 border border-gray-100 shadow-sm rounded bg-gray-50">
                <h4 className="font-bold text-primary mb-2">Filialisten</h4>
                <p className="text-sm text-gray-600">Einheitliches Sicherheitskonzept für alle Standorte in einer Region.</p>
            </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-white border-2 border-accent rounded-xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
             
             <h2 className="text-3xl font-black text-primary uppercase mb-4 relative z-10">Schlüssel sicher hinterlegen?</h2>
             <p className="text-gray-600 max-w-2xl mx-auto mb-8 relative z-10">
                Richten Sie jetzt Ihre Alarmverfolgung ein. Wir reagieren, wenn Sie schlafen.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link 
                    href="/#contact" 
                    className="btn-primary"
                >
                    Angebot anfordern
                </Link>
             </div>
      </div>
    </ServicePageLayout>
  );
}
