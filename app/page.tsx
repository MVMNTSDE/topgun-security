"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const narrativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating titles parallax
      gsap.to(".floating-title-1", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
        x: -200,
      });

      gsap.to(".floating-title-2", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        x: 100,
      });

      // Continuous Reveal pipeline
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal-up");
      reveals.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "expo.out",
        });
      });
    }, narrativeRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Executive Doorman",
      description: "Repräsentative Sicherheit für erstklassige Standorte. Wir kombinieren Diskretion mit höchster Serviceorientierung.",
      icon: "users" as const,
    },
    {
      title: "Objektschutz+",
      description: "Intelligente Bewachungskonzepte für Industrie und Residenzen. Sicherheit, die sich nahtlos in Ihren Alltag integriert.",
      icon: "shield" as const,
    },
    {
      title: "Safety Intelligence",
      description: "Präventive Baustellen- und Projektabsicherung. Digitale Protokollierung und physische Präsenz in Perfektion.",
      icon: "hammer" as const,
    },
    {
      title: "Revier-Elite",
      description: "Regelmäßige Kontrollgänge mit militärischer Präzision und ziviler Diskretion. Höchste Abschreckung durch ständige Vigilanz.",
      icon: "map" as const,
    },
  ];

  return (
    <main ref={narrativeRef} className="relative min-h-screen">
      <div className="canvas-bg" />
      <Navbar />
      <Hero />
      
      {/* Narrative Layer 1: Competencies */}
      <section id="services" className="relative py-40 px-6 md:px-12 z-20">
        <span className="floating-title floating-title-1 top-[20%] left-0">
          Kompetenz
        </span>
        
        <div className="max-w-[1600px] mx-auto flex flex-col gap-32">
          <div className="max-w-4xl reveal-up">
            <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase block mb-10">
              The Service Suite
            </span>
            <h2 className="text-6xl md:text-9xl font-serif font-light tracking-tight leading-[0.85] text-black">
              Sicherheit,<br />
              <span className="italic">neu definiert.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 reveal-up">
            {services.map((service) => (
              <ServiceCard 
                key={service.title} 
                {...service} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Layer 2: Philosophy Overlap */}
      <section id="about" className="relative py-60 px-6 z-20">
        <span className="floating-title floating-title-2 top-[40%] right-0">
          Prestige
        </span>
        
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal-up">
            <div className="relative bleed-image aspect-[16/10] bg-[#FAFAFA] group overflow-hidden border border-black/5">
              <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                 <span className="text-[10px] font-black tracking-[2em] uppercase text-black/5">Vigilance & Discretion</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-primary/20 scale-95 group-hover:scale-100 transition-transform duration-1000" />
            </div>
          </div>
          
          <div className="lg:col-span-5 lg:pl-12 reveal-up">
            <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight mb-16 leading-tight text-black">
              Unsere <span className="italic text-primary">Philosophie</span> der Stärke.
            </h2>
            <p className="text-black/50 text-2xl mb-20 leading-relaxed font-sans font-light">
              Wir folgen keinem Standard. Wir setzen ihn. In einer Welt voller Variablen bieten wir die Konstante: Absolute Sicherheit durch exzellente Präsenz.
            </p>
            <div className="flex gap-20 border-t border-black/5 pt-16">
              <div className="flex flex-col gap-4">
                <span className="text-6xl font-serif italic text-black">01</span>
                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-black/30">Präzision</span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-6xl font-serif italic text-black">02</span>
                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-black/30">Hingabe</span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-6xl font-serif italic text-black">03</span>
                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-black/30">Exzellenz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Layer 3: Direct Inquiry */}
      <section id="contact" className="relative py-60 px-6 z-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-32">
          <div className="reveal-up">
            <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase block mb-10">
              Direct Channel
            </span>
            <h2 className="text-6xl md:text-9xl font-serif font-light tracking-tight mb-12 text-black leading-[0.9]">
               Bereit für <span className="italic">Kontakt?</span>
            </h2>
          </div>
          
          <div className="reveal-up">
            <div className="p-16 bg-[#FAFAFA] border border-black/5 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer Narrative */}
      <footer className="relative py-20 px-6 z-20 border-t border-black/5 bg-white">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <div className="relative w-12 h-12 flex items-center justify-center border border-primary/30">
                 <span className="text-black font-serif italic text-xl -translate-y-px">T</span>
                 <span className="text-black font-serif italic text-xl translate-y-px ml-[-5px]">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-serif tracking-[0.2em] uppercase text-black leading-none">Topgun</span>
                <span className="text-[9px] font-sans tracking-[0.4em] uppercase text-primary font-black">Security Group</span>
              </div>
            </div>
            <p className="text-black/30 text-[10px] max-w-xs leading-relaxed font-black tracking-widest uppercase">
              Germany&apos;s Elite Protection Standard. Established for Discretion.
            </p>
          </div>
          
          <div className="flex gap-20 text-[10px] font-black tracking-[0.3em] uppercase text-black/40">
            <Link href="/imprint" className="hover:text-primary transition-colors">Impressum</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Datenschutz</Link>
            <span className="text-black/10">© 2025</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
