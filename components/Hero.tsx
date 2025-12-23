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
        y: 60,
        duration: 2.5,
        delay: 0.2
      })
      .from(".hero-line", {
        scaleX: 0,
        opacity: 0,
        duration: 2,
        stagger: 0.3
      }, "-=2");
    }, containerRef);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-40 overflow-hidden bg-transparent"
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
    >
      {/* Refined Gold Spotlight */}
      <div className="spotlight opacity-40" />

      {/* Elegant Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-black/[0.03] to-transparent" />
      
      <div className="relative z-20 text-center px-6 max-w-7xl" ref={contentRef}>
        <div className="mb-20 flex items-center justify-center gap-8 opacity-40">
          <div className="hero-line h-px w-24 bg-primary" />
          <span className="text-[11px] font-sans font-black tracking-[0.6em] uppercase text-black">
            Est. for Distinction
          </span>
          <div className="hero-line h-px w-24 bg-primary" />
        </div>
        
        <h1 className="text-7xl md:text-[11rem] lg:text-[13rem] font-serif font-light tracking-tighter mb-16 leading-[0.8] text-black">
          Exzellenz &<br />
          <span className="italic text-primary font-normal">Sicherheit</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-black/30 mb-24 max-w-3xl mx-auto leading-relaxed font-sans font-light">
          Absolute Diskretion in der physischen Sicherheit.<br />
          <span className="text-black/60 font-medium">Der Gold-Standard im Objektschutz.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-16 justify-center items-center">
          <Button size="lg" className="rounded-none px-16 py-10 bg-black text-white hover:bg-primary transition-all duration-1000 shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
            Beratungsgespräch
          </Button>
          <Button size="lg" variant="ghost" className="text-black/30 hover:text-black tracking-[0.5em] text-[10px] uppercase font-black transition-all duration-700">
            Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
