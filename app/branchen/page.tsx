import Link from "next/link";
import Image from "next/image";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Building2, ShoppingBag, Truck, Construction, Briefcase, Factory } from "lucide-react";

export const metadata = {
  title: "Branchenlösungen | Topgun Security",
  description: "Sicherheit für Ihre Branche. Immobilien, Logistik, Bau, Retail und mehr. Wir kennen die spezifischen Risiken Ihres Sektors.",
};

const industriesList = [
  {
    title: "Immobilien",
    description: "Sicherheit & Service für Facility Management und Wohnwirtschaft.",
    icon: Building2,
    href: "/branchen/immobilien",
    image: "/images/gallery/img-4.png",
  },
  {
    title: "Logistik",
    description: "Schutz der Lieferkette und Transportüberwachung.",
    icon: Truck,
    href: "/branchen/logistik",
    image: "/images/gallery/img-5.png",
  },
  {
    title: "Bauwesen",
    description: "Sicherung von Baustellen gegen Diebstahl und Vandalismus.",
    icon: Construction,
    href: "/branchen/bau", // Future page
    image: "/images/gallery/img-2.png",
  },
  {
    title: "Einzelhandel",
    description: "Doorman & Detektei zur Vermeidung von Inventurdifferenzen.",
    icon: ShoppingBag,
    href: "/branchen/retail", // Future page
    image: "/images/gallery/img-3.png",
  },
  {
    title: "Industrie",
    description: "Werkschutz und Prozesssicherheit für Produktionsbetriebe.",
    icon: Factory,
    href: "/leistungen/werkschutz", // Link to Werkschutz service page as it serves this industry perfectly
    image: "/images/gallery/img-1.png",
  },
  {
     title: "Corporate",
     description: "Empfangsdienste und Sicherheit für Unternehmenszentralen.",
     icon: Briefcase,
     href: "/leistungen/empfangsdienst",
     image: "/images/gallery/img-4.png",
  }
];



export default function BranchenOverviewPage() {
  return (
    <ServicePageLayout
      heroTitle="Unsere Branchen"
      heroSubtitle="Wir sprechen Ihre Sprache. Branchenspezifische Sicherheitslösungen für Köln und ganz NRW."
      heroImage="/images/gallery/img-5.png"
      parentLink={{ href: "/", label: "Zurück zur Startseite" }}
    >
      <div className="mb-16">
        <h2 className="text-3xl font-black text-primary mb-6">
           Spezialisierung schafft Qualität.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
           Ein Baustelle hat andere Risiken als ein Juwelier. Ein Logistikzentrum braucht andere Konzepte als ein Bürogebäude. 
           Topgun Security bietet Ihnen Expertenwissen für Ihren Sektor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 not-prose">
        {industriesList.map((industry) => (
          <Link 
            key={industry.title} 
            href={industry.href}
            className="group relative flex flex-col h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
          >
            <div className="relative h-48 w-full overflow-hidden">
               <Image 
                 src={industry.image} 
                 alt={industry.title}
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
            </div>
            
            <div className="p-8 flex flex-col grow">
               <div className="mb-4 text-accent group-hover:translate-x-1 transition-transform">
                 <industry.icon size={32} />
               </div>
               <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                 {industry.title}
               </h3>
               <p className="text-gray-600 text-sm mb-6 grow">
                 {industry.description}
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
