import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { Shield, Users, Radio, CheckCircle, Ticket } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Veranstaltungsschutz & Event Security Köln | Topgun Security",
  description: "Professioneller Veranstaltungsschutz für Events, Messen und Konzerte in NRW. Einlasskontrollen, VIP-Betreuung und crowd management.",
};

export default function VeranstaltungsschutzPage() {
  return (
    <ServicePageLayout
      heroTitle="Veranstaltungsschutz"
      heroSubtitle="Sichere Events sind kein Zufall. Wir sorgen für reibungslose Abläufe und entspannte Gäste."
      heroImage="/images/services/doorman-mall.png" // Placeholder - would ideally differ
      parentLink={{ href: "/leistungen", label: "Zurück zu den Leistungen" }}
    >
      {/* 1. Einleitender Kontext */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
          Ihr Event in sicheren Händen.
        </h2>
        <div className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl text-primary/80 italic mb-2">
            „Ob Gala-Dinner, Großkonzert oder Firmenfeier: Wir agieren als diskrete Gastgeber oder sichtbare Präsenz – genau so, wie Ihr Event es erfordert.“
            </p>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Veranstaltungsschutz erfordert Fingerspitzengefühl. Unsere Teams sind darauf geschult, potenzielle Konflikte frühzeitig zu erkennen und deeskalierend zu lösen, bevor sie entstehen. Von der Einlasskontrolle bis zum VIP-Schutz garantieren wir einen störungsfreien Ablauf, damit Sie sich voll auf Ihre Gäste konzentrieren können.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={Ticket} label="Einlass" description="Ticket & Zutrittskontrolle" />
        <TrustBadge icon={Users} label="Crowd Mgmt" description="Steuerung von Besucherströmen" />
        <TrustBadge icon={Radio} label="Kommunikation" description="Funkgestützte Koordination" />
        <TrustBadge icon={Shield} label="VIP-Schutz" description="Diskret & Professionell" />
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Fachliche Erklärung */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6">Sicherheitskonzepte nach Maß</h2>
        <p className="text-gray-700 mb-6">
          Jedes Event ist einzigartig. Wir erstellen im Vorfeld detaillierte Sicherheitskonzepte, die Fluchtwege, Brandschutz und Kapazitäten berücksichtigen. Am Tag der Veranstaltung koordiniert ein erfahrener Einsatzleiter das Team und hält Kontakt zu Behörden und Rettungskräften.
        </p>
        <p className="text-gray-700">
           Unser Personal tritt je nach Anlass in gehobener Abendgarderobe (Service-Security) oder in einheitlicher Einsatzkleidung auf. Freundlichkeit ist dabei unsere stärkste Waffe.
        </p>
      </div>

      {/* 3. Typische Einsatzszenarien */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Messen & Kongresse</h3>
            <p className="text-sm text-gray-600 mb-4">Repräsentative Sicherheit für Business-Events.</p>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Akkreditierung:</strong> Überprüfung von Presse- und VIP-Ausweisen.</li>
                <li><strong>Standbewachung:</strong> Schutz von Exponaten auch nachts.</li>
                <li><strong>Garderobenservice:</strong> Sicherung von Wertsachen.</li>
                <li><strong>Ordnungsdienst:</strong> Durchsetzung der Hausordnung.</li>
            </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Festivals & Konzerte</h3>
            <p className="text-sm text-gray-600 mb-4">Sicherheit für Großveranstaltungen.</p>
             <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Bühnenabsicherung:</strong> Schutz von Künstlern und Technik (Graben).</li>
                <li><strong>Taschenkontrollen:</strong> Verbotene Gegenstände konsequent aussortieren.</li>
                <li><strong>Notausgänge:</strong> Freihaltung von Rettungswegen.</li>
                <li><strong>Sanitätsdienst-Koordination:</strong> Schnelle Hilfe im Notfall.</li>
            </ul>
        </div>
      </div>

      {/* 4. Qualifikation */}
       <div className="bg-primary/5 p-8 md:p-12 rounded-xl mb-20 border border-primary/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="shrink-0 bg-white p-4 rounded shadow-sm">
                <CheckCircle size={48} className="text-accent" />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Deeskalation als Priorität</h3>
                <p className="text-gray-700">
                   Unsere Mitarbeiter durchlaufen regelmäßige Schulungen in Konfliktmanagement und Deeskalationstechniken. 
                   Wir lösen Situationen verbal, bevor sie physisch werden müssen. Ein sicheres Fest ist ein friedliches Fest.
                </p>
             </div>
          </div>
       </div>

      {/* 5. Wirtschaftlicher Faktor */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-6">Planungssicherheit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-6 border border-gray-100 shadow-sm rounded">
                <h4 className="font-bold text-primary mb-2">Behörden-Konformität</h4>
                <p className="text-sm text-gray-600">Wir erstellen Sicherheitskonzepte, die den Auflagen der Ordnungsämter entsprechen und Genehmigungen beschleunigen.</p>
            </div>
             <div className="p-6 border border-gray-100 shadow-sm rounded">
                <h4 className="font-bold text-primary mb-2">Haftungsminimierung</h4>
                <p className="text-sm text-gray-600">Durch professionelle Dokumentation und Einhaltung aller Vorschriften minimieren wir Ihr Veranstalter-Haftungsrisiko.</p>
            </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-white border-2 border-primary rounded-xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
             
             <h2 className="text-3xl font-black text-primary uppercase mb-4 relative z-10">Planen Sie ein Event?</h2>
             <p className="text-gray-600 max-w-2xl mx-auto mb-8 relative z-10">
                Lassen Sie uns gemeinsam für Sicherheit sorgen. Wir beraten Sie gerne zu Ihrem individuellen Sicherheitskonzept.
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
