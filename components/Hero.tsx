"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top } = container.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      
      gsap.to(container, {
        "--x": `${x}px`,
        "--y": `${y}px`,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 2,
        delay: 0.3
      })
      .from(".hero-line", {
        scaleX: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2
      }, "-=1.5");
    }, containerRef);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-white"
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
    >
      {/* Refined Gold Spotlight */}
      <div className="spotlight" />

      {/* Elegant Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-black/5 to-transparent" />
      
      <div className="relative z-20 text-center px-6 max-w-6xl" ref={contentRef}>
        <div className="mb-12 flex items-center justify-center gap-6 opacity-40">
          <div className="hero-line h-px w-16 bg-primary" />
          <span className="text-[10px] font-sans font-black tracking-[0.5em] uppercase text-black">
            The Gold Standard in Security
          </span>
          <div className="hero-line h-px w-16 bg-primary" />
        </div>
        
        <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-serif font-light tracking-tight mb-12 leading-[0.9] text-black">
          Exzellenz &<br />
          <span className="italic text-primary font-normal">Sicherheit</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-black/40 mb-16 max-w-2xl mx-auto leading-relaxed font-sans font-light">
          Maßgeschneiderte Schutzkonzepte für anspruchsvolle Unternehmen und private Residenzen.
        </p>

        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
          <Button size="lg" className="rounded-none px-12 py-8 bg-black text-white hover:bg-primary transition-all duration-700 shadow-2xl">
            Beratungsgespräch
          </Button>
          <Button size="lg" variant="ghost" className="text-black/30 hover:text-black tracking-[0.4em] text-[10px] uppercase font-bold transition-colors">
            Portfolio Entdecken
          </Button>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <span className="text-[8px] font-bold tracking-widest uppercase text-black">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-black to-transparent" />
      </div>
    </section>
  );
}
