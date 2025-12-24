"use client";

import ContactForm from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-muted py-48">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
          <div className="lg:col-span-4 corp-reveal">
            <div className="div-line" />
            <h2 className="text-primary uppercase">Direkte<br /><span className="text-accent underline decoration-4 underline-offset-8">Anfrage</span></h2>
            <p className="text-primary/40 text-[10px] font-black tracking-[0.5em] uppercase mt-12 mb-16">Köln | Leverkusen | NRW</p>
            
            <div className="space-y-16">
              <div>
                 <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary/20 mb-4 block">Zentrale / Security Desk</span>
                 <a href="tel:022195285529" className="text-4xl font-black text-primary hover:text-accent transition-all duration-500 block">0221 95285529</a>
              </div>
              <div>
                 <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary/20 mb-4 block">Digital Protocol</span>
                 <a href="mailto:info@topgunsecurity.de" className="text-xl font-bold text-primary hover:text-accent transition-all duration-500 underline decoration-2 underline-offset-8">info@topgunsecurity.de</a>
              </div>
              <div className="pt-12 border-t border-primary/5">
                 <p className="text-primary/60 text-xs font-bold leading-relaxed">
                   Erreichbarkeit Werktags:<br />
                   <span className="text-primary font-black">08:00 – 18:00 UHR</span>
                 </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 corp-reveal bg-white p-12 lg:p-24 shadow-[-80px_80px_160px_rgba(0,30,86,0.06)] border border-primary/5">
              <div className="mb-16">
                 <h3 className="text-primary text-2xl font-black tracking-tighter mb-4 italic">Vertrauliche Erstbewertung</h3>
                 <p className="text-primary/40 text-sm font-medium">Spezialisierte Beratung für GmbHs, AGs und Großkonzerne ab 5 Angestellten.</p>
              </div>
              <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
