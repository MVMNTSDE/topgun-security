"use client";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Doorman",
    description: "Repräsentative Sicherheit an Ihren Eingängen. Wir kombinieren hocheffiziente Kontrolle mit diskreter Präsenz.",
    icon: "shield" as const,
  },
  {
    title: "Baustellen\u00ADbewachung",
    description: "Lückenlose Absicherung Ihrer Sachwerte vor Ort. Schutz vor Vandalismus, Diebstahl und unbefugtem Zutritt.",
    icon: "hammer" as const,
  },
  {
    title: "Kaufhaus\u00ADdetektive",
    description: "Prävention von Inventurdifferenzen durch hochqualifizierte Überwachung im Einzelhandel.",
    icon: "users" as const,
  },
  {
    title: "Empfangs\u00ADdienst",
    description: "Die professionelle Schnittstelle zwischen Ihrem Unternehmen und Ihren Gästen. Sicher und zuvorkommend.",
    icon: "shield" as const,
  },
  {
    title: "Pforten\u00ADdienst",
    description: "Kontrollierter Personen- und Fahrzeugverkehr an Ihren Toren. Infrastrukturelle Sicherheit rund um die Uhr.",
    icon: "shield" as const,
  },
  {
    title: "Revier\u00ADkontrollen",
    description: "Systematische Überprüfung Ihrer Liegenschaften in definierten Intervallen zur effektiven Gefahrenabwehr.",
    icon: "map" as const,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="container-custom">
        <div className="mb-24 corp-reveal">
          <div className="div-line" />
          <h2 className="text-primary">
            CORE<br />
            <span className="text-accent">SERVICES</span>
          </h2>
          <p className="text-corporate-body max-w-2xl mt-8">
            Topgun Security bietet ein modulares Ökosystem an Sicherheitsdienstleistungen für Köln und NRW, das auf die spezifischen Risiko-Profile unserer Mandanten zugeschnitten ist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="corp-reveal">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
