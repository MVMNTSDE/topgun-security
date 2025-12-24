"use client";

import Image from "next/image";
import { useState } from "react";
import { CertificateModal } from "./CertificateModal";

const steps = [
  { id: "01", title: "IDENTIFIKATION", text: "Klinische Analyse Ihrer Sicherheitsmatrix. Wir erkennen Variablen, bevor sie zu Risiken werden." },
  { id: "02", title: "INTERVENTION", text: "Implementierung hocheffizienter Schutzmechanismen. Sofortige Reaktion auf infrastrukturelle Erfordernisse." },
  { id: "03", title: "OPTIMIERUNG", text: "Permanente Justierung der Sicherheitsarchitektur. Wir wachsen mit Ihren Anforderungen." }
];

const sectors = [
  "Architektur Büros",
  "Immobilien Verwaltungen",
  "Facility Management Firmen",
  "Büro Komplexe",
  "Business Parks",
  "High End Immobilien",
  "Bauträger & Baufirmen",
  "Hotellerie ab 100 Zimmern",
  "Logistikzentren",
  "IndustrieWerke"
];

const certData = {
  iso: {
    title: "ISO 9001:2015",
    description: "Die ISO 9001 ist der weltweit anerkannte Standard für Qualitätsmanagement. Unsere Zertifizierung bestätigt, dass unsere Prozesse auf kontinuierliche Verbesserung, höchste Kundenzufriedenheit und operative Exzellenz ausgerichtet sind. Für Sie bedeutet das: reproduzierbare Qualität und Transparenz in jeder Phase unserer Dienstleistung.",
    imageUrl: "/certificates/iso9001_full.png"
  },
  din: {
    title: "DIN 77200-1:2022",
    description: "Die DIN 77200 ist der spezifische Qualitätsstandard für Sicherheitsdienstleistungen. Sie definiert strenge Anforderungen an Organisation, Personalauswahl, Ausbildung und die Durchführung von Sicherheitsleistungen. Als zertifiziertes Unternehmen garantieren wir die Einhaltung höchster Branchenstandards und rechtlicher Rahmenbedingungen.",
    imageUrl: "/certificates/din77200_full.png"
  }
};

export function About() {
  const [activeCert, setActiveCert] = useState<keyof typeof certData | null>(null);

  const closeModal = () => setActiveCert(null);

  return (
    <div id="about">
      {/* Modal */}
      {activeCert && (
        <CertificateModal
          isOpen={!!activeCert}
          onClose={closeModal}
          imageUrl={certData[activeCert].imageUrl}
          title={certData[activeCert].title}
          description={certData[activeCert].description}
        />
      )}

      {/* 2. Operational Logic (Infotainment Sequence) */}
      <section className="bg-primary py-48 overflow-hidden text-white">
        <div className="container-custom">
          <div className="mb-24 corp-reveal">
            <div className="div-line" />
            <h2 className="text-white">OPERATIONAL<br /><span className="text-accent underline decoration-4 underline-offset-8">LOGICS</span></h2>
            <p className="text-white/40 text-[10px] font-black tracking-[0.6em] uppercase mt-10">THE TOPGUN SEQUENCE</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.id} className="corp-reveal group">
                <div className="border border-white/5 p-12 hover:border-accent/50 transition-all duration-700 bg-white/5">
                  <span className="text-accent font-black text-xs block mb-8 tracking-[0.5em]">{step.id}</span>
                  <h3 className="text-white text-xl tracking-tighter mb-6 uppercase">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Expertise Grid */}
      <section className="bg-muted py-40">
        <div className="container-custom">
           <div className="mb-24 corp-reveal">
              <div className="div-line" />
              <h2 className="text-primary">EXPERTISE NACH<br /><span className="text-accent">SEKTOREN</span></h2>
              <p className="text-corporate-body text-primary/60! mt-8 max-w-xl">
                 Wir verstehen die spezifischen Anforderungen komplexer Branchen. Unsere Lösungen sind für Entscheider konzipiert, die keine Kompromisse bei der Sicherheit eingehen.
              </p>
           </div>
           
           <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-primary/10 border border-primary/10">
              {sectors.map((sector) => (
                 <div key={sector} className="bg-white p-10 corp-reveal group hover:bg-primary transition-colors duration-500">
                    <span className="text-[10px] font-black tracking-widest uppercase text-primary/30 group-hover:text-accent mb-4 block">Sector</span>
                    <h4 className="text-primary font-black text-sm tracking-tight group-hover:text-white leading-tight">{sector}</h4>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Operational Readiness & Compliance */}
      <section className="bg-white py-40 border-y border-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
             <div className="corp-reveal">
                <div className="div-line" />
                <h2 className="text-primary uppercase tracking-tighter">Zertifizierte<br /><span className="text-accent italic">Compliance</span></h2>
                <p className="text-corporate-body text-primary! mt-12 mb-16 leading-relaxed max-w-xl">
                  Für Einkaufabteilungen und Sicherheitsverantwortliche garantieren wir volle Audit-Readiness. Die Topgun Security ist seit Anfang des Jahres nach 
                  <button 
                    className="font-bold underline decoration-accent underline-offset-4 cursor-pointer hover:text-accent transition-colors ml-1 inline-block" 
                    onClick={() => setActiveCert('din')}
                  >
                    DIN 77200
                  </button> und 
                  <button 
                    className="font-bold underline decoration-accent underline-offset-4 cursor-pointer hover:text-accent transition-colors ml-1 inline-block" 
                    onClick={() => setActiveCert('iso')}
                  >
                    ISO 9001
                  </button> zertifiziert.
                </p>
                <div className="flex flex-col gap-6">
                   <div className="bg-muted p-8 border-l-4 border-accent">
                      <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary/30 mb-2 block">Operative Kapazitäten</span>
                      <p className="text-primary font-bold text-lg">13 Mitarbeiter (Bewacher Register) + 3 Sachkundige Experten (§34a GewO)</p>
                   </div>
                </div>
             </div>

             <div className="corp-reveal pt-12">
                <div className="flex gap-8 mb-12">
                  <button 
                    className="bg-white p-4 shadow-sm border border-primary/5 cursor-pointer hover:border-accent hover:shadow-lg transition-all duration-300 group"
                    onClick={() => setActiveCert('iso')}
                    title="View ISO 9001 Certificate"
                  >
                    <Image src="/certificates/iso9001.png" alt="ISO 9001 Zertifikat" width={80} height={80} className="h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
                  </button>
                  <button 
                    className="bg-white p-4 shadow-sm border border-primary/5 cursor-pointer hover:border-accent hover:shadow-lg transition-all duration-300 group"
                    onClick={() => setActiveCert('din')}
                    title="View DIN 77200 Certificate"
                  >
                    <Image src="/certificates/din77200.png" alt="DIN 77200 Zertifikat" width={80} height={80} className="h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <button 
                     className="border border-primary/10 p-10 cursor-pointer hover:border-accent/30 transition-colors text-left w-full"
                     onClick={() => setActiveCert('din')}
                     title="View DIN 77200 Details"
                   >
                      <div className="w-12 h-1 bg-accent mb-8" />
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-primary font-black text-sm tracking-widest uppercase">DIN 77200</h4>
                        <span className="text-accent text-[10px] font-bold uppercase tracking-widest border border-accent/20 px-2 py-1 rounded-sm">View</span>
                      </div>
                      <p className="text-primary/40 text-[10px] font-bold leading-relaxed uppercase tracking-widest">Geprüfte Servicequalität in der Sicherheitswirtschaft.</p>
                   </button>
                   <button 
                     className="border border-primary/10 p-10 cursor-pointer hover:border-primary/30 transition-colors text-left w-full"
                     onClick={() => setActiveCert('iso')}
                     title="View ISO 9001 Details"
                   >
                      <div className="w-12 h-1 bg-primary mb-8" />
                      <div className="flex items-center justify-between mb-4">
                         <h4 className="text-primary font-black text-sm tracking-widest uppercase">ISO 9001</h4>
                         <span className="text-primary/40 text-[10px] font-bold uppercase tracking-widest border border-primary/10 px-2 py-1 rounded-sm group-hover:text-primary transition-colors">View</span>
                      </div>
                      <p className="text-primary/40 text-[10px] font-bold leading-relaxed uppercase tracking-widest">Internationales Qualitätsmanagement für höchste Standards.</p>
                   </button>
                </div>
                <p className="text-corporate-body text-primary/60! text-sm italic mt-20 leading-relaxed border-t border-primary/5 pt-12">
                  &ldquo;Gerne würden wir mit Ihnen prüfen, ob sich eine Zusammenarbeit anbietet. Wir freuen uns auf die Möglichkeit, eine erfolgreiche Partnerschaft aufzubauen.&rdquo;
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
