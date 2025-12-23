"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(containerRef.current, {
        opacity: 0,
        duration: 1,
      })
      .from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5")
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(".cta-area", {
        y: 10,
        opacity: 0,
        duration: 0.5,
      }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24 overflow-hidden bg-muted/30"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} 
      />

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-6 bg-accent/10 px-3 py-1 rounded">
          Professionelle Sicherheitsdienstleistungen
        </span>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Zuverlässige Sicherheitsdienste für<br />
          <span className="text-primary/60">Unternehmen & Immobilien</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Topgun Security bietet professionellen Objektschutz, Empfangsdienste und Revierkontrollen mit geschultem Personal und höchster Zuverlässigkeit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center cta-area">
          <Button size="lg">Kostenlose Beratung</Button>
          <Button size="lg" variant="outline">Unsere Leistungen</Button>
        </div>
      </div>
    </section>
  );
}
