import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { UserCheck, Shield, Phone, Coffee, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Empfangsdienst & Pfortendienst Köln | Topgun Security",
  description: "Professioneller Empfangsdienst für Unternehmen. Doorman, Telefonzentrale und Besuchermanagement. Sicherheit mit Lächeln.",
};

export default function EmpfangsdienstPage() {
  return (
    <ServicePageLayout
      heroTitle="Empfangsdienst"
      heroSubtitle="Der erste Eindruck zählt. Wir verbinden repräsentativen Service mit kompromissloser Sicherheit."
      heroImage="/images/services/doorman-mall.png"
      parentLink={{ href: "/leistungen", label: "Zurück zu den Leistungen" }}
    >
      {/* 1. Einleitender Kontext */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
          Sicherheit beginnt im Foyer.
        </h2>
        <div className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl text-primary/80 italic mb-2">
            „Ihr Foyer ist die Visitenkarte des Unternehmens. Unsere Empfangsmitarbeiter beherrschen den Spagat zwischen herzlicher Gastfreundschaft und wachsamer Kontrolle.“
            </p>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Empfangsdienst ist mehr als nur &quot;Hallo&quot; sagen. Es geht um die intelligente Steuerung von Besucherströmen, die diskrete Überprüfung von Zugangsberechtigungen und das Management in Notfallsituationen. Topgun Security stellt Ihnen Personal zur Verfügung, das sich nahtlos in Ihre Corporate Identity einfügt – mehrsprachig, eloquent und bestens geschult.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 not-prose">
        <TrustBadge icon={UserCheck} label="Mehrsprachig" description="Deutsch & Englisch fließend" />
        <TrustBadge icon={Shield} label="Sicherheits-Check" description="§34a GewO qualifiziert" />
        <TrustBadge icon={Phone} label="Telefonzentrale" description="Professionelles Switchboard" />
        <TrustBadge icon={Coffee} label="Service-Orientiert" description="Gastgeber-Qualitäten" />
      </div>

       <div className="border-t border-gray-100 my-16" />

      {/* 2. Fachliche Erklärung */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6">Doorman & Concierge: Die Sicherheits-Hosts</h2>
        <p className="text-gray-700 mb-6">
          Oft sind Sicherheitsmitarbeiter die ersten Personen, die ein Besucher sieht. Ein ungepflegtes Erscheinungsbild oder schroffer Tonfall fallen auf Ihr Unternehmen zurück. Wir setzen daher im Empfangsbereich auf &quot;Security Hosts&quot;.
        </p>
        <p className="text-gray-700">
           Unser Personal trägt auf Wunsch Business-Kleidung statt Uniform. Die Sicherheitsausrüstung (Funk, Melder) wird diskret getragen. So gewähren wir Schutz, ohne dass sich Ihre Gäste wie in einer Hochsicherheitszone fühlen.
        </p>
      </div>

      {/* 3. Typische Einsatzszenarien */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Unternehmenszentralen</h3>
            <p className="text-sm text-gray-600 mb-4">Corporate Security auf höchstem Niveau.</p>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Besuchermanagement:</strong> Digitale Anmeldung, Ausgabe von Besucherausweisen und Infomaterial.</li>
                <li><strong>Lieferantensteuerung:</strong> Annahme von Post und Kuriersendungen inklusive Röntgenkontrolle (optional).</li>
                <li><strong>Zutrittskontrolle:</strong> Überwachung der Vereinzelungsanlagen und Schleusen.</li>
                <li><strong>Konferenzservice:</strong> Vorbereitung von Meetingräumen außerhalb der Kernzeiten.</li>
            </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">Hotels & Residenzen</h3>
            <p className="text-sm text-gray-600 mb-4">Diskrete Sicherheit für anspruchsvolle Klientel.</p>
             <ul className="space-y-3 list-disc pl-5 text-gray-700 marker:text-accent">
                <li><strong>Night Auditor Support:</strong> Unterstützung des Nachtportiers.</li>
                <li><strong>Rundgänge:</strong> Bestreifung von Etagen, Tiefgaragen und Wellnessbereichen.</li>
                <li><strong>VIP-Service:</strong> Abschirmung prominenter Gäste ohne Aufsehen.</li>
                <li><strong>Ruhestörung:</strong> Deeskalierende Intervention bei Lärmbelästigung.</li>
            </ul>
        </div>
      </div>

      {/* 4. Qualifikation */}
       <div className="bg-primary/5 p-8 md:p-12 rounded-xl mb-20 border border-primary/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="shrink-0 bg-white p-4 rounded shadow-sm">
                <Users size={48} className="text-accent" />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Soft Skills sind Hard Skills</h3>
                <p className="text-gray-700">
                   Für den Empfangsdienst rekrutieren wir gezielt Personal mit Hintergrund in der Hotellerie oder dem Servicebereich, das wir sicherheitstechnisch nachqualifizieren. 
                   So garantieren wir Umgangsformen, die man im klassischen Wachgewerbe oft vergeblich sucht.
                </p>
             </div>
          </div>
       </div>

      {/* 5. Wirtschaftlicher Faktor */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-6">Effizienz durch Outsourcing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-6 border border-gray-100 shadow-sm rounded">
                <h4 className="font-bold text-primary mb-2">Kein Ausfallrisiko</h4>
                <p className="text-sm text-gray-600">Bei Krankheit oder Urlaub stellen wir sofortigen Ersatz. Ihr Empfang ist immer besetzt.</p>
            </div>
             <div className="p-6 border border-gray-100 shadow-sm rounded">
                <h4 className="font-bold text-primary mb-2">Flexible Kosten</h4>
                <p className="text-sm text-gray-600">Sie zahlen nur die geleisteten Stunden. Keine Lohnnebenkosten, keine Verwaltungsaufwände.</p>
            </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-white border-2 border-primary rounded-xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
             
             <h2 className="text-3xl font-black text-primary uppercase mb-4 relative z-10">Ihr neuer Empfang?</h2>
             <p className="text-gray-600 max-w-2xl mx-auto mb-8 relative z-10">
                Suchen Sie Personal, das Ihr Unternehmen würdig repräsentiert? Wir stellen Ihnen den perfekten Doorman vor.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link 
                    href="/#contact" 
                    className="btn-primary"
                >
                    Personal anfragen
                </Link>
             </div>
      </div>
    </ServicePageLayout>
  );
}
