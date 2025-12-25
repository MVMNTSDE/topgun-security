import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Shield, Eye, Heart,  Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Kinder- & Jugendschutz | Topgun Security",
  description: "Sensible Sicherheitskonzepte für Schulen, Kitas und Jugendeinrichtungen. Prävention, Schutz und Deeskalation.",
};

export default function JugendschutzPage() {
  return (
    <ServicePageLayout
      heroTitle="Kinder & Jugendschutz"
      heroSubtitle="Verantwortungsvoller Schutz für die nächste Generation."
      heroImage="/images/services/jugendschutz-portrait.png"
      parentLink={{ href: "/#services", label: "Zurück zur Übersicht" }}
    >
      {/* 1. Intro Content */}
      <div className="mb-16">
        <h2 className="text-3xl font-black text-primary mb-6">
           Sensibilität trifft Sicherheit.
        </h2>
        <p className="text-corporate-body mb-6">
          Der Schutz von Kindern und Jugendlichen erfordert weit mehr als nur körperliche Anwesenheit. Er verlangt nach pädagogischem Fingerspitzengefühl, geschultem Personal und einem präventiven Ansatz, der Sicherheit schafft, ohne Angst zu verbreiten.
        </p>
        <p className="text-corporate-body">
          Topgun Security bietet spezialisierte Konzepte für Bildungseinrichtungen, Jugendheime und öffentliche Veranstaltungen. Unsere Mitarbeiter in diesem Bereich durchlaufen erweiterte Sicherheitsüberprüfungen und Schulungen im Umgang mit Minderjährigen.
        </p>
      </div>

      <div className="div-line-navy" />

      {/* 2. Key Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        
        {/* Feature 1 */}
        <div className="flex gap-6">
           <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Shield className="text-accent w-6 h-6" />
           </div>
           <div>
              <h3 className="text-xl font-bold text-primary mb-3">Schulwegsicherung</h3>
              <p className="text-gray-600 leading-relaxed">
                 Präsenz an kritischen Punkten und Haltestellen. Wir sorgen dafür, dass der Weg zur Schule sicher bleibt und greifen bei Konflikten deeskalierend ein.
              </p>
           </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-6">
           <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Users className="text-accent w-6 h-6" />
           </div>
           <div>
              <h3 className="text-xl font-bold text-primary mb-3">Einrichtungsschutz</h3>
              <p className="text-gray-600 leading-relaxed">
                 Zutrittskontrollen und Pförtnerdienste für Schulen und Kitas. Wir verhindern unbefugten Zutritt und schützen vor Vandalismus.
              </p>
           </div>
        </div>

        {/* Feature 3 */}
        <div className="flex gap-6">
           <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Eye className="text-accent w-6 h-6" />
           </div>
           <div>
              <h3 className="text-xl font-bold text-primary mb-3">Veranstaltungsschutz</h3>
              <p className="text-gray-600 leading-relaxed">
                 Jugendpartys, Abifeiern oder Schulfeste. Wir sorgen für die Einhaltung des Jugendschutzgesetzes (JuSchG) und kontrollieren Altersgrenzen diskret.
              </p>
           </div>
        </div>

        {/* Feature 4 */}
        <div className="flex gap-6">
           <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
              <Heart className="text-accent w-6 h-6" />
           </div>
           <div>
              <h3 className="text-xl font-bold text-primary mb-3">Pädagogischer Ansatz</h3>
              <p className="text-gray-600 leading-relaxed">
                 Unser Team agiert nicht als &quot;Türsteher&quot;, sondern als Ansprechpartner. Deeskalation und Kommunikation stehen immer an erster Stelle.
              </p>
           </div>
        </div>

      </div>

      {/* 3. Standards Box */}
      <div className="bg-gray-50 p-8 md:p-12 border-l-4 border-accent mb-16">
         <h3 className="text-2xl font-bold text-primary mb-4">Unser Qualitätsversprechen</h3>
         <ul className="space-y-4">
            <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-700 font-medium">Erweitertes Führungszeugnis für alle Mitarbeiter</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-700 font-medium">Schulung in Deeskalationstechniken</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-700 font-medium">Enge Kooperation mit Jugendämtern und Polizei</span>
            </li>
         </ul>
      </div>

      {/* 4. CTA */}
      <div className="bg-primary text-white p-12 rounded-2xl text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary pointer-events-none" />
        
        <div className="relative z-10">
           <h3 className="text-3xl font-black uppercase mb-6">Schützen Sie, was zählt.</h3>
           <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
             Lassen Sie uns gemeinsam ein Sicherheitskonzept entwickeln, das Ihren Schützlingen den Freiraum lässt, den sie brauchen, und den Schutz bietet, den sie verdienen.
           </p>
           <Link href="/#contact" className="btn-primary bg-white text-primary hover:bg-accent hover:text-white border-0">
             Beratungstermin vereinbaren
           </Link>
        </div>
      </div>

    </ServicePageLayout>
  );
}
