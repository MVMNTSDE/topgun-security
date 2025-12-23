import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Doorman & Concierge",
      description: "Erstklassiger Empfangsdienst für renommierte Bürogebäude und Hotelanlagen. Wir vereinen Sicherheit mit Gastfreundschaft.",
      icon: "users" as const,
    },
    {
      title: "Objektschutz",
      description: "Exklusiver Schutz Ihrer Sachwerte und Immobilien durch geschultes Fachpersonal. Lückenlose Bewachung auf höchstem Niveau.",
      icon: "shield" as const,
    },
    {
      title: "Baubewachung",
      description: "Präventive Sicherung von Bauprojekten gegen Diebstahl und unbefugten Zutritt. Mobile und stationäre Überwachungslösungen.",
      icon: "hammer" as const,
    },
    {
      title: "Revier-Kontrollen",
      description: "Präzise Überprüfung Ihrer Objekte zu variierenden Zeiten. Höchste Prävention durch ständige Präsenz und modernste Protokollierung.",
      icon: "map" as const,
    },
  ];

  return (
    <main className="relative min-h-screen bg-white selection:bg-primary/20">
      <Navbar />
      <Hero />
      
      {/* Service Section */}
      <section id="services" className="py-20 px-6 md:px-12 bg-white border-t border-black/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-32 max-w-4xl">
            <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase block mb-8">
              Unsere Expertise
            </span>
            <h2 className="text-5xl md:text-8xl font-serif font-light tracking-tight leading-[1] text-black">
              Maßgeschneiderte <span className="italic">Sicherheitslösungen</span> für exklusive Ansprüche.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
      <section id="about" className="py-48 px-6 bg-[#FAFAFA] border-y border-black/5">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative aspect-video bg-white border border-black/5 shadow-2xl p-4 group overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
               <span className="font-serif italic text-4xl text-black/10">The Gold Standard</span>
            </div>
            <div className="w-full h-full border border-black/5 bg-[#FDFDFD] flex items-center justify-center">
               <span className="text-[10px] font-black tracking-[1em] uppercase text-black/10">Premium Security Presence</span>
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/40" />
          </div>
          
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-serif font-light tracking-tight mb-12 leading-tight text-black">
              Vertrauen durch <span className="italic text-primary">Präsenz</span> und Professionalität.
            </h2>
            <p className="text-black/50 text-xl mb-16 leading-relaxed font-sans font-light">
              Topgun Security definiert Objektschutz neu. Mit einem Fokus auf diskrete Effizienz und eine stabile Partnerschaft sichern wir Ihre Zukunft – heute.
            </p>
            <div className="grid grid-cols-2 gap-16 border-t border-black/10 pt-16">
              <div>
                <span className="block text-5xl font-serif italic text-black mb-4">100<span className="text-primary">%</span></span>
                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-black/30">Diskretion</span>
              </div>
              <div>
                <span className="block text-5xl font-serif italic text-black mb-4">24<span className="text-primary">/</span>7</span>
                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-black/30">Vigilanz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-48 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase block mb-10">
            Diskret Anfragen
          </span>
          <h2 className="text-5xl md:text-8xl font-serif font-light tracking-tight mb-10 text-black leading-[1]">
             Ihr Sicherheitskonzept <span className="italic">startet hier.</span>
          </h2>
          <p className="text-black/40 text-xl max-w-2xl mx-auto font-sans font-light">
            Teilen Sie uns Ihre Anforderungen mit. Wir erstellen Ihnen ein unverbindliches Angebot auf höchstem Niveau.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-black/5 bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 mb-12">
              <div className="relative w-10 h-10 flex items-center justify-center border border-primary/40">
                 <span className="text-black font-serif italic text-lg -translate-y-[1px]">T</span>
                 <span className="text-black font-serif italic text-lg translate-y-px ml-[-4px]">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-serif tracking-[0.2em] uppercase text-black leading-none">Topgun</span>
                <span className="text-[8px] font-sans tracking-[0.4em] uppercase text-primary font-black">Security Group</span>
              </div>
            </div>
            <p className="text-black/40 text-sm max-w-sm leading-relaxed font-sans font-light">
              Ihr Partner für exklusive Sicherheitsdienstleistungen in Deutschland. Spezialisiert auf diskreten Objektschutz und Premium-Empfangsdienste.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10">Services</h4>
            <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
              <li><Link href="#services" className="hover:text-black transition-colors">Leistungen</Link></li>
              <li><Link href="#about" className="hover:text-black transition-colors">Philosophie</Link></li>
              <li><Link href="#contact" className="hover:text-black transition-colors">Anfrage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10">Rechtliches</h4>
            <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
              <li><Link href="/imprint" className="hover:text-black transition-colors">Impressum</Link></li>
              <li><Link href="/privacy" className="hover:text-black transition-colors">Datenschutz</Link></li>
              <li><Link href="/terms" className="hover:text-black transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1600px] mx-auto mt-32 pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <span className="text-[10px] text-black/20 font-black tracking-[0.4em] uppercase">
            © 2025 Topgun Security Group. The Executive Standard.
          </span>
          <a href="mailto:verwaltung@topgun-security.de" className="text-[10px] text-black/40 hover:text-primary transition-colors font-black tracking-[0.2em] uppercase">
            verwaltung@topgun-security.de
          </a>
        </div>
      </footer>
    </main>
  );
}
