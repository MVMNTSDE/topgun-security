import { useState } from "react";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Doorman",
    description: "Repräsentative Sicherheit an Ihren Eingängen. Wir kombinieren hocheffiziente Kontrolle mit diskreter Präsenz.",
    longDescription: "", // Legacy field removed
    icon: "shield" as const,
    image: "/images/gallery/img-1.png",
    href: "/leistungen/empfangsdienst"
  },
  {
    title: "Baustellen\u00ADbewachung",
    description: "Lückenlose Absicherung Ihrer Sachwerte vor Ort. Schutz vor Vandalismus, Diebstahl und unbefugtem Zutritt.",
    longDescription: "",
    icon: "hammer" as const,
    image: "/images/gallery/img-2.png",
    href: "/branchen/bau"
  },
  {
    title: "Kaufhaus\u00ADdetektive",
    description: "Prävention von Inventurdifferenzen durch hochqualifizierte Überwachung im Einzelhandel.",
    longDescription: "",
    icon: "users" as const,
    image: "/images/gallery/img-3.png",
    href: "/leistungen/detektei"
  },
  {
    title: "Empfangs\u00ADdienst",
    description: "Die professionelle Schnittstelle zwischen Ihrem Unternehmen und Ihren Gästen. Sicher und zuvorkommend.",
    longDescription: "",
    icon: "shield" as const,
    image: "/images/gallery/img-4.png",
    href: "/leistungen/empfangsdienst"
  },
  {
    title: "Pforten\u00ADdienst",
    description: "Kontrollierter Personen- und Fahrzeugverkehr an Ihren Toren. Infrastrukturelle Sicherheit rund um die Uhr.",
    longDescription: "",
    icon: "shield" as const,
    image: "/images/gallery/img-5.png",
    href: "/leistungen/werkschutz"
  },
  {
    title: "Revier\u00ADkontrollen",
    description: "Systematische Überprüfung Ihrer Liegenschaften in definierten Intervallen zur effektiven Gefahrenabwehr.",
    longDescription: "",
    icon: "map" as const,
    image: "/images/gallery/img-1.png",
    href: "/leistungen/revierdienst"
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

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
          <h2 className="text-white">
            CORE<br />
            <span className="text-accent">SERVICES</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-medium max-w-2xl mt-8">
            Topgun Security bietet ein modulares Ökosystem an Sicherheitsdienstleistungen für Köln und NRW. 
            <span className="block mt-2 text-sm italic opacity-70">
              Klicken Sie auf eine Kachel für Detailinformationen.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="corp-reveal cursor-pointer text-left w-full h-full block focus:outline-none focus:ring-2 focus:ring-accent group"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              aria-label={`View details for ${service.title}`}
              title={`Details anzeigen`}
            >
              <ServiceCard {...service} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
