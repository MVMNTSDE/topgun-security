"use client";

import Image from "next/image";
import { useState } from "react";
import { CertificateModal } from "./CertificateModal";



const sectorData = [
  {
    name: "Architektur Büros",
    report: {
      title: "Schutz geistigen Eigentums",
      challenge: "Spionage & Vandalismus in Wettbewerbsphase.",
      solution: "Hybride Überwachung: KI-Kameras + Unregelmäßige Patrouillen.",
      stats: "100% Sicherung der Modelldaten"
    }
  },
  {
    name: "Immobilien Verwaltung",
    report: {
      title: "Wohnquartier Köln-Marienburg",
      challenge: "Steigende Einbruchszahlen & Vandalismus.",
      solution: "24/7 Doorman-Service & Perimeterschutz.",
      stats: "0 Zwischenfälle in 24 Monaten"
    }
  },
  {
    name: "Facility Management",
    report: {
      title: "Messe-Standort Betreuung",
      challenge: "Koordination von Zutritten für 50+ Dienstleister.",
      solution: "Digitales Besuchermanagement & Schleusen-Personal.",
      stats: "Reibungsloser Ablauf bei Großevents"
    }
  },
  {
    name: "Büro Komplexe",
    report: {
      title: "Corporate Campus Düsseldorf",
      challenge: "Unbemerkter Zutritt Fremder in Büroflächen.",
      solution: "Empfangsdienst mit Concierge-Level & Ausweiskontrolle.",
      stats: "Subjektives Sicherheitsgefühl +90%"
    }
  },
  {
    name: "Business Parks",
    report: {
      title: "Gewerbepark Überwachung",
      challenge: "Nächtlicher Materialdiebstahl & illegale Müllentsorgung.",
      solution: "Drohnengestützte Revierstreifen & Kennzeichenerfassung.",
      stats: "Schadensreduktion um 60.000€ p.a."
    }
  },
  {
    name: "High End Immobilien",
    report: {
      title: "Privat-Residenz Absicherung",
      challenge: "Schutz einer High-Net-Worth Familie.",
      solution: "Bewaffneter Personenschutz & Smarthome-Security-Integration.",
      stats: "Maximale Privatsphäre garantiert"
    }
  },
  {
    name: "Bauträger & Baustellen",
    report: {
      title: "Großbaustelle City-Nord",
      challenge: "Massiver Diebstahl von Kupfer & Baumaschinen.",
      solution: "Baustellenbewachung mit Hundeführern & Video-Türmen.",
      stats: "Bauverzögerung verhindert"
    }
  },
  {
    name: "Hotellerie",
    report: {
      title: "5-Sterne Haus am Ring",
      challenge: "Diskretion für VIP-Gäste & Event-Protection.",
      solution: "Anzug-Träger Security: 'Gäste-Mindset' mit Kampfsporterfahrung.",
      stats: "Exzellentes Gäste-Feedback"
    }
  },
  {
    name: "Logistikzentren",
    report: {
      title: "Fulfillment Center NRW",
      challenge: "Interner Warenschwund & Organisierte Kriminalität.",
      solution: "Taschenkontrollen & Verdeckte Ermittler.",
      stats: "Aufklärungsquote 100%"
    }
  },
  {
    name: "Industrie & Werke",
    report: {
      title: "Produktionswerk Chemie",
      challenge: "Werksspionage & Sabotage-Risiko.",
      solution: "Strenge Werkschutz-Protokolle nach ISO-Norm.",
      stats: "Audit-Score: 98/100"
    }
  }
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
  const [selectedReport, setSelectedReport] = useState<typeof sectorData[0] | null>(null);

  const closeModal = () => setActiveCert(null);

  return (
    <div id="about">
      {/* Cert Modal */}
      {activeCert && (
        <CertificateModal
          isOpen={!!activeCert}
          onClose={closeModal}
          imageUrl={certData[activeCert].imageUrl}
          title={certData[activeCert].title}
          description={certData[activeCert].description}
        />
      )}

      {/* Sector Report Modal - reusing existing modal component if possible, or inline it */}
      {selectedReport && (
        <CertificateModal
          isOpen={!!selectedReport}
          onClose={() => setSelectedReport(null)}
          imageUrl="/images/logo-text.png" // Fallback or specific sector icon could go here
          title={`REPORT: ${selectedReport.name.toUpperCase()}`}
          variant="report"
          description={
            <div className="space-y-4">
               <div>
                  <span className="text-accent text-xs font-black uppercase tracking-widest block mb-1">Herausforderung</span>
                  <p className="text-primary/80 font-medium">{selectedReport.report.challenge}</p>
               </div>
               <div>
                  <span className="text-accent text-xs font-black uppercase tracking-widest block mb-1">Lösung</span>
                  <p className="text-primary/80 font-medium">{selectedReport.report.solution}</p>
               </div>
               <div className="bg-accent/10 p-4 border-l-2 border-accent mt-4">
                  <span className="text-accent text-xs font-black uppercase tracking-widest block mb-1">Ergebnis</span>
                  <p className="text-primary font-bold">{selectedReport.report.stats}</p>
               </div>
            </div>
          }
        />
      )}

      {/* 2. Operational Logic (Infotainment Sequence) */}
      <section className="bg-primary py-48 overflow-hidden text-white relative">
        <div className="container-custom relative z-10">
          <div className="mb-24 corp-reveal">
            <div className="div-line" />
            <h2 className="text-white">OPERATIONAL<br /><span className="text-accent underline decoration-4 underline-offset-8">LOGICS</span></h2>
            <p className="text-white/40 text-[10px] font-black tracking-[0.6em] uppercase mt-10">THE TOPGUN STRATEGY</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="corp-reveal group">
              <div className="bg-white/5 border border-white/5 p-12 hover:border-accent/50 transition-all duration-700 h-full">
                 <span className="text-accent font-black text-xs block mb-8 tracking-[0.5em]">PHASE 01</span>
                 <h3 className="text-white text-2xl tracking-tighter mb-6 uppercase">Identifikation</h3>
                 <p className="text-white/60 text-sm leading-relaxed font-medium">
                   Wir beginnen nicht mit einem Angebot, sondern mit dem Zuhören. Jedes Mandat startet mit einer schonungslosen Analyse Ihrer Ist-Situation. Wir identifizieren Sicherheitslücken, die Ihnen vielleicht noch gar nicht bewusst sind.
                 </p>
              </div>
            </div>
            
            <div className="corp-reveal group">
              <div className="bg-white/5 border border-white/5 p-12 hover:border-accent/50 transition-all duration-700 h-full">
                 <span className="text-accent font-black text-xs block mb-8 tracking-[0.5em]">PHASE 02</span>
                 <h3 className="text-white text-2xl tracking-tighter mb-6 uppercase">Intervention</h3>
                 <p className="text-white/60 text-sm leading-relaxed font-medium">
                   Unser Schutz ist proaktiv, nicht reaktiv. Wir implementieren Maßnahmen, die diskret im Hintergrund laufen, aber im Ernstfall sofort greifen. Präsenz, wo nötig. Unsichtbarkeit, wo möglich.
                 </p>
              </div>
            </div>

            <div className="corp-reveal group">
              <div className="bg-white/5 border border-white/5 p-12 hover:border-accent/50 transition-all duration-700 h-full">
                 <span className="text-accent font-black text-xs block mb-8 tracking-[0.5em]">PHASE 03</span>
                 <h3 className="text-white text-2xl tracking-tighter mb-6 uppercase">Evolution</h3>
                 <p className="text-white/60 text-sm leading-relaxed font-medium">
                   Sicherheit ist kein statischer Zustand. Wir auditieren unsere eigene Leistung kontinuierlich und passen Strategien dynamisch an neue Bedrohungslagen an. Ihr Schutz wächst mit Ihrem Erfolg.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Expertise Grid */}
      <section className="bg-muted py-40">
        <div className="container-custom">
           <div className="mb-24 corp-reveal">
              <div className="div-line" />
              <h2 className="text-primary">EXPERTISE NACH<br /><span className="text-accent">SEKTOREN</span></h2>
              <p className="text-corporate-body text-primary/60 mt-8 max-w-xl">
                 Klicken Sie auf eine Branche, um Referenz-Berichte zu laden. Wir verstehen die Nuancen jedes Sektors im Detail.
              </p>
           </div>
           
           <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-primary/10 border border-primary/10">
              {sectorData.map((item) => (
                 <button 
                   key={item.name} 
                   onClick={() => setSelectedReport(item)}
                   className="bg-white p-10 corp-reveal group hover:bg-primary transition-colors duration-500 cursor-pointer relative overflow-hidden text-left w-full h-full"
                 >
                    <div className="relative z-10">
                      <span className="text-[10px] font-black tracking-widest uppercase text-primary/30 group-hover:text-accent mb-4 block">Report Laden</span>
                      <h4 className="text-primary font-black text-sm tracking-tight group-hover:text-white leading-tight">{item.name}</h4>
                    </div>
                    {/* Hover flourish */}
                    <div className="absolute -bottom-10 -right-10 text-[10rem] text-accent/5 font-black leading-none group-hover:text-accent/10 transition-colors pointer-events-none">
                      +
                    </div>
                 </button>
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
                  {" "}
                  <button 
                    className="font-bold underline decoration-accent underline-offset-4 cursor-pointer hover:text-accent transition-colors ml-1 inline-block" 
                    onClick={() => setActiveCert('din')}
                  >
                    DIN 77200
                  </button>
                  {" "}
                  und
                  {" "}
                  <button 
                    className="font-bold underline decoration-accent underline-offset-4 cursor-pointer hover:text-accent transition-colors ml-1 inline-block" 
                    onClick={() => setActiveCert('iso')}
                  >
                    ISO 9001
                  </button>
                  {" "}
                  zertifiziert.
                </p>
                <div className="flex flex-col gap-6">
                   <div className="bg-muted p-8 border-l-4 border-accent">
                      <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary/30 mb-2 block">Operative Kapazitäten</span>
                      <p className="text-primary font-bold text-lg">
                        Qualifiziertes Personal im Bewacherregister sowie erfahrene Sachkunde-Experten (§34a GewO) für flexible Skalierung.
                      </p>
                   </div>
                </div>
             </div>

             <div className="corp-reveal pt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <button 
                     className="border border-primary/10 p-8 cursor-pointer hover:border-accent hover:shadow-lg transition-all duration-300 text-left w-full group bg-white flex flex-col h-full"
                     onClick={() => setActiveCert('din')}
                     title="DIN 77200 Zertifikat einsehen"
                   >
                      <div className="flex justify-between items-start mb-6 w-full">
                         <div className="w-12 h-1 bg-accent" />
                         <Image src="/certificates/din77200.png" alt="DIN 77200 Badge" width={60} height={60} className="w-14 h-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      
                      <h4 className="text-primary font-black text-sm tracking-widest uppercase mb-2">DIN 77200</h4>
                      <div className="text-accent text-[10px] font-bold uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">Zertifikat ansehen</div>
                      
                      <p className="text-primary/60 text-xs leading-relaxed font-medium mt-auto">
                        Geprüfte Servicequalität in der Sicherheitswirtschaft.
                      </p>
                   </button>

                   <button 
                     className="border border-primary/10 p-8 cursor-pointer hover:border-primary hover:shadow-lg transition-all duration-300 text-left w-full group bg-white flex flex-col h-full"
                     onClick={() => setActiveCert('iso')}
                     title="ISO 9001 Zertifikat einsehen"
                   >
                      <div className="flex justify-between items-start mb-6 w-full">
                         <div className="w-12 h-1 bg-primary" />
                         <Image src="/certificates/iso9001.png" alt="ISO 9001 Badge" width={60} height={60} className="w-14 h-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      
                      <h4 className="text-primary font-black text-sm tracking-widest uppercase mb-2">ISO 9001</h4>
                      <div className="text-primary text-[10px] font-bold uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">Zertifikat ansehen</div>

                      <p className="text-primary/60 text-xs leading-relaxed font-medium mt-auto">
                        Internationales Qualitätsmanagement für höchste Standards.
                      </p>
                   </button>
                </div>

                <div className="mt-16 pt-8 border-t border-primary/5 space-y-8">
                   <div>
                      <p className="text-corporate-body text-primary/60! text-sm italic leading-relaxed mb-3">
                        &ldquo;Gerne würden wir mit Ihnen prüfen, ob sich eine Zusammenarbeit anbietet. Wir freuen uns auf die Möglichkeit, eine erfolgreiche Partnerschaft aufzubauen.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                         <div className="h-px w-8 bg-accent" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-primary">Fahrhad Dilmangahni, Geschäftsführung</span>
                      </div>
                   </div>

                   <div>
                      <p className="text-corporate-body text-primary/60! text-sm italic leading-relaxed mb-3">
                        &ldquo;Wir definieren Sicherheit neu durch operative Exzellenz und kompromisslosen Einsatz für Ihre Werte.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                         <div className="h-px w-8 bg-accent" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-primary">Hüseyin Simsek, Operative Leitung</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
