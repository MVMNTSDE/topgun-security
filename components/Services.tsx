import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Doorman",
    description: "Repräsentative Sicherheit an Ihren Eingängen. Wir kombinieren hocheffiziente Kontrolle mit diskreter Präsenz.",
    longDescription: "Unser Doorman-Service ist mehr als nur Zugangskontrolle. Er ist die Visitenkarte Ihres Hauses. Unser Personal ist darauf geschult, Sicherheit mit höchster Gastfreundschaft zu verbinden. Von der VIP-Begrüßung bis zur diskreten Abweisung ungebetener Gäste – wir sorgen für ein sicheres und exklusives Ambiente in Hotels, luxuriösen Boutiquen und Unternehmenszentralen.",
    icon: "shield" as const,
    image: "/images/gallery/img-1.png", // Using gallery image as placeholder
  },
  {
    title: "Baustellen\u00ADbewachung",
    description: "Lückenlose Absicherung Ihrer Sachwerte vor Ort. Schutz vor Vandalismus, Diebstahl und unbefugtem Zutritt.",
    longDescription: "Baustellen sind komplexe und gefährdete Areale. Wir sichern Ihre Werte durch eine Kombination aus physischer Präsenz und moderner Überwachungstechnik. Zutrittskontrollen, Patrouillen und Diebstahlschutz sorgen dafür, dass Ihr Projekt im Zeitplan bleibt und teure Materialverluste vermieden werden.",
    icon: "hammer" as const,
    image: "/images/gallery/img-2.png",
  },
  {
    title: "Kaufhaus\u00ADdetektive",
    description: "Prävention von Inventurdifferenzen durch hochqualifizierte Überwachung im Einzelhandel.",
    longDescription: "Inventurdifferenzen mindern Ihren Gewinn drastisch. Unsere Detektive arbeiten verdeckt und hocheffizient. Durch psychologische Schulung erkennen sie verdächtiges Verhalten frühzeitig und greifen rechtssicher ein. Wir schützen Ihre Ware, ohne das Einkaufserlebnis Ihrer ehrlichen Kunden zu stören.",
    icon: "users" as const,
    image: "/images/gallery/img-3.png",
  },
  {
    title: "Empfangs\u00ADdienst",
    description: "Die professionelle Schnittstelle zwischen Ihrem Unternehmen und Ihren Gästen. Sicher und zuvorkommend.",
    longDescription: "Der erste Eindruck zählt. Unser Empfangsdienst managt Besucherströme, bedient Telefonzentralen und übernimmt administrative Sicherheitsaufgaben. Wir integrieren uns nahtlos in Ihre Corporate Identity und gewährleisten, dass Sicherheit und Service Hand in Hand gehen.",
    icon: "shield" as const,
    image: "/images/gallery/img-4.png",
  },
  {
    title: "Pforten\u00ADdienst",
    description: "Kontrollierter Personen- und Fahrzeugverkehr an Ihren Toren. Infrastrukturelle Sicherheit rund um die Uhr.",
    longDescription: "An der Pforte wird entschieden, wer Ihr Gelände betritt. Wir steuern den Lieferverkehr, führen LKW-Kontrollen durch und dokumentieren alle Bewegungen lückenlos. Unsere Mitarbeiter sind geschult im Umgang mit Werksausweisen, Gefahrenmeldeanlagen und Notfallprotokollen.",
    icon: "shield" as const,
    image: "/images/gallery/img-5.png",
  },
  {
    title: "Revier\u00ADkontrollen",
    description: "Systematische Überprüfung Ihrer Liegenschaften in definierten Intervallen zur effektiven Gefahrenabwehr.",
    longDescription: "Mobile Sicherheit für weitläufige Areale. Unsere Revierfahrer führen unvorhersehbare Kontrollfahrten durch, überprüfen Verschlusssicherheit und intervenieren bei Alarmen. Kosteneffizienter Schutz für Industriegebiete, Wohnanlagen und öffentliche Einrichtungen.",
    icon: "map" as const,
    image: "/images/gallery/img-1.png", // Reuse img-1 or add a 6th if available
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Background fade logic handled via CSS opacity transition for performance
  
  return (
    <section id="services" className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black">
        {services.map((service, index) => (
           <div 
             key={`bg-${index}`}
             className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${hoveredService === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
           >
             {/* Abstract Technical Backgrounds based on index */}
             <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900" />
             
             {/* Pattern Overlay */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-size-[40px_40px]" />

             {/* Animated Elements based on service type */}
             {index % 3 === 0 && ( // Premium / Doorman Style
                <div className="absolute inset-0 overflow-hidden">
                   <div className="absolute -inset-full top-[-50%] animate-[spin_60s_linear_infinite] opacity-30">
                      <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(215,160,34,0.1)_180deg,transparent_360deg)]" />
                   </div>
                </div>
             )}

             {index % 3 === 1 && ( // Industrial / Construction Style (Grid Scan)
                <div className="absolute inset-0 overflow-hidden">
                   <div className="absolute w-full h-1 bg-accent/20 top-0 animate-[scan_4s_ease-in-out_infinite] shadow-[0_0_15px_rgba(215,160,34,0.5)]" />
                </div>
             )}
             
             {index % 3 === 2 && ( // Retail / Detective Style (Pulse)
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-[800px] h-[800px] border border-white/5 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                   <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_delay-700]" />
                </div>
             )}

             {/* Gradient Overlay for Text Readability */}
             <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
           </div>
        ))}
         
         {/* Default Background State (when nothing hovered) */}
         <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredService === null ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-neutral-950" />
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[50px_50px]" />
            {/* Subtle generic animation */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-pulse" />
         </div>
      </div>

      <div className="container-custom relative z-20">
        <div className="mb-24 corp-reveal">
          <div className="div-line" />
          <h2 className="text-primary">
            CORE<br />
            <span className="text-accent">SERVICES</span>
          </h2>
          <p className="text-corporate-body max-w-2xl mt-8">
            Topgun Security bietet ein modulares Ökosystem an Sicherheitsdienstleistungen für Köln und NRW. 
            <span className="block mt-2 text-sm italic opacity-70">
              Hovern Sie über die Karten für einen visuellen Eindruck. Klicken Sie für Details.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <button 
              key={service.title} 
              className="corp-reveal cursor-pointer text-left w-full h-full block focus:outline-none focus:ring-2 focus:ring-accent"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setSelectedService(service)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedService(service);
                }
              }}
              aria-label={`View details for ${service.title}`}
              title={`Details anzeigen`}
            >
              <ServiceCard {...service} />
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button 
            type="button"
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm cursor-pointer w-full h-full border-none p-0 m-0 block" 
            onClick={() => setSelectedService(null)}
            aria-label="Close modal"
          />
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-300 border border-primary/10">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 bg-muted hover:bg-accent hover:text-white transition-colors rounded-full z-50 cursor-pointer"
              title="Close modal"
              type="button"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-full relative min-h-[300px]">
                <Image 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="p-12 flex flex-col justify-center">
                 <div className="w-12 h-1 bg-accent mb-8" />
                 <h3 className="text-3xl md:text-4xl font-black text-primary uppercase mb-6 leading-none hyphens-auto" lang="de">
                    {selectedService.title.replace("\u00AD", "")}
                 </h3>
                 <p className="text-corporate-body mb-8">
                   {selectedService.longDescription}
                 </p>
                 
                 <div className="mt-auto pt-8 border-t border-primary/5">
                   <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Einsatzgebiete</p>
                   <p className="text-sm font-medium text-primary/70">
                     Köln • Leverkusen • Bonn • Düsseldorf • Ruhrgebiet
                   </p>
                 </div>
                 
                 <button 
                   onClick={() => {
                     setSelectedService(null);
                     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                   className="mt-8 btn-primary self-start"
                 >
                   Angebot anfordern
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
