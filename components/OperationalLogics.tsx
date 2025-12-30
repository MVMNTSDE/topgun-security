"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function OperationalLogics() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reveals = gsap.utils.toArray<HTMLElement>(".logic-reveal");
    reveals.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-primary py-48 overflow-hidden text-white relative">
      <div className="container-custom relative z-10">
        <div className="mb-24 logic-reveal">
          <div className="div-line" />
          <h2 className="text-white">OPERATIONAL<br /><span className="text-accent underline decoration-4 underline-offset-8">LOGICS</span></h2>
          <p className="text-white/40 text-[10px] font-black tracking-[0.6em] uppercase mt-10">THE TOPGUN STRATEGY</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="logic-reveal group">
            <div className="bg-white/5 border border-white/5 p-12 hover:border-accent/50 transition-all duration-700 h-full">
               <span className="text-accent font-black text-xs block mb-8 tracking-[0.5em]">PHASE 01</span>
               <h3 className="text-white text-2xl tracking-tighter mb-6 uppercase wrap-break-word hyphens-auto" lang="de">Identifikation</h3>
               <p className="text-white/60 text-sm leading-relaxed font-medium">
                 Wir beginnen nicht mit einem Angebot, sondern mit dem Zuhören. Jedes Mandat startet mit einer schonungslosen Analyse Ihrer Ist-Situation. Wir identifizieren Sicherheitslücken, die Ihnen vielleicht noch gar nicht bewusst sind.
               </p>
            </div>
          </div>
          
          <div className="logic-reveal group">
            <div className="bg-white/5 border border-white/5 p-12 hover:border-accent/50 transition-all duration-700 h-full">
               <span className="text-accent font-black text-xs block mb-8 tracking-[0.5em]">PHASE 02</span>
               <h3 className="text-white text-2xl tracking-tighter mb-6 uppercase">Intervention</h3>
               <p className="text-white/60 text-sm leading-relaxed font-medium">
                 Unser Schutz ist proaktiv, nicht reaktiv. Wir implementieren Maßnahmen, die diskret im Hintergrund laufen, aber im Ernstfall sofort greifen. Präsenz, wo nötig. Unsichtbarkeit, wo möglich.
               </p>
            </div>
          </div>

          <div className="logic-reveal group">
            <div className="bg-white/5 border border-white/5 p-12 hover:border-accent/50 transition-all duration-700 h-full">
               <span className="text-accent font-black text-xs block mb-8 tracking-[0.5em]">PHASE 03</span>
               <h3 className="text-white text-2xl tracking-tighter mb-6 uppercase">Evolution</h3>
               <p className="text-white/60 text-sm leading-relaxed font-medium">
                 Sicherheit ist kein statischer Zustand. Wir auditieren unsere eigene Leistung kontinuierlich und passen Strategien dynamisch an neue Bedrohungslagen an. Ihr Schutz wächst mit Ihrem Erfolg.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
