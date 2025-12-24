import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { Search, EyeOff, Scale, UserX, FileText, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Kaufhausdetektive & Ermittlungen | Topgun Security",
  description: "Diskrete Ladendetektive und Ermittler gegen Inventurdifferenzen. Rechtssichere Aufklärung von Diebstahl und Betrug in NRW.",
};

export default function DetekteiPage() {
  return (
    <ServicePageLayout
      heroTitle="Detektei & Ermittlung"
      heroSubtitle="Inventurdifferenzen sind kein Schicksal. Wir klären auf, dokumentieren und sichern Beweise – diskret und rechtskonform."
      heroImage="/images/gallery/img-1.png"
      parentLink={{ href: "/leistungen", label: "Zurück zu den Leistungen" }}
    >
      {/* 1. Einleitender Kontext */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
          Sehen, ohne gesehen zu werden.
        </h2>
        <div className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl text-primary/80 italic mb-2">
            „Jedes Jahr verlieren Einzelhändler Milliarden durch Ladendiebstahl. Doch oft ist nicht der Kunde das Problem, sondern organisierte Banden oder – noch schmerzhafter – die eigenen Mitarbeiter.“
            </p>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Unsere Detektive sind Profis der Unauffälligkeit. Sie bewegen sich wie normale Kunden in Ihrem Geschäft, erkennen aber Verhaltensmuster, die dem Laien entgehen. Wir greifen ein, wenn die Tat vollendet ist – präzise, ruhig und rechtssicher bis zur Strafanzeige.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={EyeOff} label="Inkognito" description="Perfekte Tarnung im Verkaufsraum" />
        <TrustBadge icon={Scale} label="Rechtssicher" description="Gerichtsverwertbare Beweise" />
        <TrustBadge icon={FileText} label="Dokumentation" description="Ausführliche Täterberichte" />
        <TrustBadge icon={UserX} label="Mitarbeiter-Check" description="Ehrlichkeitstests (Testkäufe)" />
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Fachliche Erklärung */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6">Psychologie der Tat</h2>
        <p className="text-gray-700 mb-6">
          Ladendiebstahl ist selten spontan. Profis arbeiten mit Ablenkung, präparierten Taschen ("Klau-Fix") und Teamwork. Unsere Detektive sind geschult, diese Indikatoren frühzeitig zu erkennen (Profiling).
        </p>
        <p className="text-gray-700 font-medium">
           Entscheidend ist der Zugriff: Er muss erfolgen, wenn die Diebstahlsabsicht und die Zueignung zweifelsfrei bewiesen sind (Verlassen der Kassenzone). Zu frühes Eingreifen führt zu Schadensersatzforderungen, zu spätes zum Verlust der Ware.
        </p>
      </div>

      {/* 3. Typische Einsatzszenarien */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Ladendetektive (Kaufhaus)</h3>
            <p className="text-sm text-gray-600 mb-4">Der Klassiker im Einzelhandel.</p>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Observation:</strong> Überwachung verdächtiger Personen über Kameras oder auf der Fläche.</li>
                <li><strong>Stellung:</strong> Diskretes Ansprechen nach der Kasse ("Büro-Situation").</li>
                <li><strong>Abwicklung:</strong> Personalienaufnahme, Hausverbot, Strafanzeige, Fangprämie.</li>
            </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Mitarbeiter-Kriminalität</h3>
            <p className="text-sm text-gray-600 mb-4">Wenn das Vertrauen missbraucht wird.</p>
             <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Testkäufe:</strong> Überprüfung der korrekten Kassierung (Bon-Pflicht).</li>
                <li><strong>Einschleusung:</strong> Verdeckte Ermittler arbeiten als "Kollegen" mit.</li>
                <li><strong>Video-Analyse:</strong> Auswertung von Kassendaten in Kombination mit Videomaterial (Storno-Betrug).</li>
            </ul>
        </div>
      </div>

      {/* 4. Rechtliche Info Box */}
       <div className="bg-red-50 p-8 md:p-12 rounded-xl mb-20 border border-red-100">
          <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="shrink-0 bg-white p-4 rounded shadow-sm text-red-600">
                <Scale size={48} />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-red-900 mb-2">Rechtssicherheit ist oberstes Gebot</h3>
                <p className="text-red-800/80">
                   Ein falsch beschuldigter Kunde ist ein PR-Desaster. Unsere Detektive arbeiten streng nach §127 StPO (Vorläufige Festnahme) und wahren die Verhältnismäßigkeit. Wir schützen Ihren Ruf genauso wie Ihre Ware.
                </p>
             </div>
          </div>
       </div>

      {/* 5. Wirtschaftlicher Faktor */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-6">Investition vs. Verlust</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative h-64 w-full md:w-1/2 rounded-lg overflow-hidden">
                 <Image 
                   src="/images/gallery/img-1.png" 
                   alt="Überwachungskameras Monitor" 
                   fill
                   className="object-cover"
                 />
            </div>
            <div className="md:w-1/2">
                 <p className="text-gray-700 mb-4">
                    Ein guter Detektiv finanziert sich oft selbst. Allein die präventive Wirkung ("Hier wird aufgepasst") und die eingetriebenen Fangprämien (Bearbeitungsgebühren) decken einen Teil der Kosten.
                 </p>
                 <p className="text-gray-700 font-bold">
                    Doch der wahre Wert liegt in der Sendung des Signals: Bei uns wird nicht geklaut.
                 </p>
            </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-primary text-white rounded-xl p-8 md:p-12 text-center shadow-2xl">
             <h2 className="text-3xl font-black uppercase mb-4">Inventur retten?</h2>
             <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Diskretion ist unser Geschäft. Wir beraten Sie vertraulich zu Ihren Verdachtsmomenten.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                    href="/#contact" 
                    className="btn-primary bg-white text-primary hover:bg-gray-100 border-transparent"
                >
                    Ermittlung anfragen
                </Link>
             </div>
      </div>
    </ServicePageLayout>
  );
}
