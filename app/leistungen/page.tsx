import Link from "next/link";

import Image from "next/image";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Shield, Factory, Building2, Hammer, Users, Truck } from "lucide-react";

export const metadata = {
  title: "Sicherheitsdienstleistungen im Überblick | Topgun Security",
  description: "Unser Leistungsportfolio für Köln und NRW. Objektschutz, Werkschutz, Baubewachung und mehr. Maßgeschneiderte Sicherheitskonzepte.",
};

const servicesList = [
  {
    title: "Objektschutz",
    description: "Ganzheitliche Absicherung von Immobilien und Gewerbeflächen.",
    icon: Building2,
    href: "/leistungen/objektschutz",
    image: "/images/gallery/img-1.png",
  },
  {
    title: "Werkschutz",
    description: "Spezialisierte Sicherheit für Industrie, Produktion und Logistik.",
    icon: Factory,
    href: "/leistungen/werkschutz",
    image: "/images/gallery/img-2.png",
  },
  {
    title: "Baustellenbewachung",
    description: "Schutz vor Diebstahl und Vandalismus in jeder Bauphase.",
    icon: Hammer,
    href: "/branchen/bau", 
    image: "/images/gallery/img-3.png",
  },
  {
    title: "Empfangsdienste",
    description: "Repräsentative Sicherheit für Ihr Foyer und den Empfang.",
    icon: Shield,
    href: "/leistungen/empfangsdienst",
    image: "/images/gallery/img-4.png",
  },
  {
    title: "Revierdienst",
    description: "Mobile Kontrollen und Alarmverfolgung für weitläufige Areale.",
    icon: Truck,
    href: "/leistungen/revierdienst",
    image: "/images/gallery/img-5.png",
  },
  {
     title: "Detektei & Retail",
     description: "Verdeckte Ermittlungen und Doorman-Services für den Einzelhandel.",
     icon: Users,
     href: "/leistungen/detektei",
     image: "/images/gallery/img-1.png",
  }
];

export default function LeistungenOverviewPage() {
  return (
    <ServicePageLayout
      heroTitle="Unsere Leistungen"
      heroSubtitle="Ein modulares Ökosystem für Ihre Sicherheit. Von der Analyse bis zur operativen Exzellenz."
      heroImage="/images/gallery/img-5.png"
      parentLink={{ href: "/", label: "Zurück zur Startseite" }}
    >
      <div className="mb-16">
        <h2 className="text-3xl font-black text-primary mb-6">
          Sicherheit nach Maß.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
           Jedes Unternehmen hat ein individuelles Risikoprofil. Deshalb bieten wir keine Standardlösungen, sondern maßgeschneiderte Konzepte. 
           Ob stationär oder mobil, ob bewaffnet oder repräsentativ – wir integrieren uns nahtlos in Ihre Prozesse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 not-prose">
        {servicesList.map((service) => (
          <Link 
            key={service.title} 
            href={service.href}
            className="group relative flex flex-col h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
          >
            <div className="relative h-48 w-full overflow-hidden">
               <Image 
                 src={service.image} 
                 alt={service.title}
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
            </div>
            
            <div className="p-8 flex flex-col grow">
               <div className="mb-4 text-accent group-hover:translate-x-1 transition-transform">
                 <service.icon size={32} />
               </div>
               <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                 {service.title}
               </h3>
               <p className="text-gray-600 text-sm mb-6 grow">
                 {service.description}
               </p>
               <span className="text-xs font-bold uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors mt-auto">
                 Mehr erfahren →
               </span>
            </div>
          </Link>
        ))}
      </div>


    </ServicePageLayout>
  );
}
