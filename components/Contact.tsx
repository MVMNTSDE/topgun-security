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
            <p className="text-primary/40 text-[10px] font-black tracking-[0.5em] uppercase mt-12 mb-16">Köln | Bonn | Düsseldorf | Leverkusen | NRW</p>
            
            <div className="space-y-16">
              <div>
                 <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary/20 mb-4 block">Zentrale / Security Desk</span>
                 <a href="tel:022195285529" className="text-4xl font-black text-primary hover:text-accent transition-all duration-500 block">0221 95285529</a>
              </div>
              <div>
                 <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary/20 mb-4 block">Digital Protocol</span>
                 <a href="mailto:verwaltung@topgun-security.de" className="text-xl font-bold text-primary hover:text-accent transition-all duration-500 underline decoration-2 underline-offset-8">verwaltung@topgun-security.de</a>
              </div>
              <div>
                 <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary/20 mb-4 block">Geschäftsleitung</span>
                 <p className="text-xl font-bold text-primary mb-1">Fahrhad Dilmangahni</p>
                 <a href="tel:+491787703738" className="text-sm font-bold text-primary/60 hover:text-accent transition-colors block mb-2">+49 178 7703738</a>
                 <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary/20 mb-4 block mt-8">Operative Leitung</span>
                 <p className="text-xl font-bold text-primary mb-1">Hüseyin Simsek</p>
                 <a href="tel:+4915565098461" className="text-sm font-bold text-primary/60 hover:text-accent transition-colors block">+49 155 65098461</a>
              </div>
              <div className="pt-12 border-t border-primary/5">
                 <p className="text-primary/60 text-xs font-bold leading-relaxed">
                   Erreichbarkeit:<br />
                   <span className="text-primary font-black">MO – SO: 08:00 – 20:00 UHR</span>
                 </p>
              </div>
              <div>
                 <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-6 block flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                    </span>
                    24/7 Notfall Service
                 </span>
                 <a href="tel:+4915565098461" className="inline-flex items-center justify-center bg-destructive text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-destructive/90 transition-colors shadow-lg">
                    DIREKT ANRUFEN
                 </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 corp-reveal bg-white p-8 lg:p-16 shadow-[-80px_80px_160px_rgba(0,30,86,0.06)] border border-primary/5 flex flex-col justify-center">
              <div className="mb-16">
                 <h3 className="text-primary text-2xl font-black tracking-tighter mb-4 italic">Vertrauliche Erstbewertung</h3>
                 <p className="text-primary/40 text-sm font-medium">Spezialisierte Beratung für GmbHs, AGs und Großkonzerne.</p>
              </div>
              <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
