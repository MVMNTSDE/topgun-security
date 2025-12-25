"use client";

import Link from "next/link";
import { Phone, Mail, ShieldCheck, Zap } from "lucide-react";

export default function NewCustomerCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-primary to-primary pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-16 text-center shadow-2xl">
          
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-8 animate-pulse">
            <Zap size={16} fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-wider">Fast-Track für Neukunden</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Ihr Sicherheits-Upgrade <span className="text-accent">startet hier.</span>
          </h2>
          
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Wir wissen, dass Sicherheit oft eilig ist. Nutzen Sie unseren Priority-Support für Erstkunden oder sichern Sie sich Ihren Start-Rabatt direkt online.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            {/* Option 1: Call */}
            <a href="tel:022195285529" className="group bg-white/5 hover:bg-white/10 border border-white/10 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
               <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform border border-white/5 shadow-inner">
                 <Phone size={24} />
               </div>
               <h3 className="text-white font-bold mb-2">Sofort anrufen</h3>
               <p className="text-white/40 text-sm mb-4">Direkter Draht zur Einsatzzentrale</p>
               <span className="text-accent font-black text-lg tracking-widest">0221 95285529</span>
            </a>

            {/* Option 2: Campaign */}
            <Link href="/#campaign" className="group bg-accent hover:bg-accent/90 border border-transparent p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center relative overflow-hidden shadow-[0_0_40px_rgba(255,166,0,0.3)]">
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl" />
               <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
                 <ShieldCheck size={28} />
               </div>
               <h3 className="text-white font-black mb-2 relative z-10 uppercase tracking-wide">30% Start-Rabatt</h3>
               <p className="text-white/80 text-sm mb-4 relative z-10 font-medium">Sicherheitsbedarf prüfen</p>
               <span className="bg-white/20 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest relative z-10 group-hover:bg-white group-hover:text-accent transition-colors">
                 Jetzt Prüfen
               </span>
            </Link>

            {/* Option 3: Mail */}
            <a href="mailto:verwaltung@topgun-security.de?subject=Anfrage%20Neukunde" className="group bg-white/5 hover:bg-white/10 border border-white/10 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
               <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform border border-white/5 shadow-inner">
                 <Mail size={24} />
               </div>
               <h3 className="text-white font-bold mb-2">E-Mail schreiben</h3>
               <p className="text-white/40 text-sm mb-4">Schriftliches Angebot anfordern</p>
               <span className="text-white font-medium text-sm underline decoration-accent decoration-2 underline-offset-4 break-all">verwaltung@topgun-security.de</span>
            </a>

          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-white/30 uppercase tracking-widest font-bold">
            <span>• Rückruf innerhalb 60 Min</span>
            <span className="hidden md:inline">•</span>
            <span>• Angebot in 24h</span>
            <span className="hidden md:inline">•</span>
            <span>• TÜV-Zertifiziert</span>
          </div>

        </div>
      </div>
    </section>
  );
}
