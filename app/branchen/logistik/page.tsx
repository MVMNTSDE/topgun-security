import { ServicePageLayout } from "@/components/ServicePageLayout";
import { TrustBadge } from "@/components/TrustBadge";
import { Truck, Box, Shield, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sicherheit für Logistik & Transport | Topgun Security",
  description: "TAPA-konforme Sicherheitslösungen für Logistikzentren. Frachtschutz, Torkontrolle und Lagerüberwachung.",
};

export default function LogistikPage() {
  return (
    <ServicePageLayout
      heroTitle="Logistik & Transport"
      heroSubtitle="Sicherung der Lieferkette. Wir schützen Ihre Warenströme vor Diebstahl, Manipulation und Unterbrechung."
      heroImage="/images/gallery/img-1.png"
      parentLink={{ href: "/#services", label: "Zurück zur Übersicht" }}
    >
       <div className="mb-16">
        <h2 className="text-3xl font-black text-primary mb-6">
           Supply Chain Security.
        </h2>
        <p className="text-lg text-gray-700">
           (Diese Seite wird derzeit aufgebaut. Topgun Security bietet bereits umfangreiche Lösungen für Logistikzentren an.)
        </p>
         <div className="mt-8">
            <Link href="/#contact" className="btn-primary">
                Jetzt anfragen
            </Link>
         </div>
      </div>
    </ServicePageLayout>
  );
}
