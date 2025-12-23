import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Doorman & Empfang",
      description: "Professioneller Empfangsdienst für Bürogebäude und Hotels. Unsere Mitarbeiter sorgen für einen freundlichen und sicheren ersten Eindruck.",
      icon: "users" as const,
    },
    {
      title: "Objektschutz",
      description: "Lückenlose Bewachung Ihrer Immobilien und Industrieanlagen. Wir schützen Ihre Sachwerte vor unbefugtem Zugriff und Vandalismus.",
      icon: "shield" as const,
    },
    {
      title: "Baubewachung",
      description: "Sicherung von Baustellen gegen Diebstahl und unbefugtes Betreten. Wir bieten sowohl mobile Kontrollen als auch stationäre Bewachung.",
      icon: "hammer" as const,
    },
    {
      title: "Revier- & Kontrollgänge",
      description: "Regelmäßige Kontrollfahrten und Begehungen Ihrer Objekte zu variierenden Zeiten für maximale Prävention.",
      icon: "map" as const,
    },
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Service Section */}
      <section id="services" className="py-32 px-6 md:px-12 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-4">
              Unsere Leistungen
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Sicherheit nach Maß für<br />
              <span className="text-foreground/40 font-medium italic">Ihre Anforderungen</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard 
                key={service.title} 
                {...service} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted group">
            {/* Visual Asset Placeholder */}
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
              <span className="font-semibold text-sm text-foreground/20 uppercase tracking-[0.5em]">Professional Security Presence</span>
            </div>
            <div className="absolute inset-0 border border-border rounded-2xl pointer-events-none" />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Zuverlässigkeit durch<br />
              <span className="text-primary italic">Erfahrung und Präsenz</span>
            </h2>
            <p className="text-foreground/60 text-lg mb-10 leading-relaxed">
              Topgun Security steht für diskreten und effizienten Schutz. Unser Fokus liegt auf einer stabilen Partnerschaft mit unseren Kunden, basierend auf Vertrauen, geschultem Personal und einer klaren Kommunikation.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-10">
              <div>
                <span className="block text-3xl font-bold text-primary mb-2">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Verlässlichkeit</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary mb-2">24/7</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Erreichbarkeit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-muted/10 relative border-t border-border">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-6">
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Jetzt unverbindlich anfragen
          </h2>
          <p className="text-foreground/50 text-base max-w-xl mx-auto">
            Teilen Sie uns Ihre Anforderungen mit. Wir erstellen Ihnen zeitnah ein passgenaues Sicherheitskonzept.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <div className="font-bold text-xl tracking-tight uppercase flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-primary flex items-center justify-center rounded">
                <span className="text-white font-black text-xs">TG</span>
              </div>
              <span className="text-foreground">Topgun Security</span>
            </div>
            <p className="text-foreground/50 text-sm max-w-sm leading-relaxed">
              Ihr Partner für professionelle Sicherheitsdienstleistungen in Deutschland. Spezialisiert auf Objektschutz, Empfangsdienste und mobile Kontrollgänge.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-8">Leistungen</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><Link href="#services" className="hover:text-primary transition-colors">Sicherheitsdienste</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">Unternehmen</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-8">Rechtliches</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><Link href="/imprint" className="hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-xs text-foreground/40 font-medium">
            © 2025 Topgun Security Group. Alle Rechte vorbehalten.
          </span>
          <a href="mailto:verwaltung@topgun-security.de" className="text-xs text-foreground/60 hover:text-primary transition-colors font-semibold">
            verwaltung@topgun-security.de
          </a>
        </div>
      </footer>
    </main>
  );
}
