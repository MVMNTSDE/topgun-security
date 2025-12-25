"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-text", {
        opacity: 0,
        x: -50,
        duration: 1.5,
        stagger: 0.2
      })
      .from(".hero-line", {
        scaleX: 0,
        duration: 1,
        ease: "expo.out"
      }, "-=1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center pt-32 md:pt-48 bg-primary overflow-hidden"
    >
      {/* Heavy Corporate Backdrop */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        >
          <source src="/videos/security-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-4xl">
          <div className="hero-text inline-flex items-center gap-4 mb-8">
            <div className="hero-line h-1 bg-accent w-12" />
            <span className="text-xs font-black tracking-[0.5em] uppercase text-white/90">
              Topgun Security GmbH
            </span>
          </div>
          
          <h1 className="hero-text text-white mb-10 leading-[0.9] text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter uppercase font-black">
            INSTITUTIONELLE<br />
            <span className="text-accent underline decoration-8 underline-offset-8">SICHERHEIT</span> KÖLN<br />
            <span className="text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-4 font-bold tracking-widest">| KÖLN & NRW</span>
          </h1>
          
          <p className="hero-text text-white/70 text-xl md:text-2xl mb-16 max-w-3xl font-medium leading-relaxed">
            Ganzheitliche Sicherheitslösungen für Wirtschaft, Industrie und öffentliche Einrichtungen. Wir schützen Ihre Werte durch zertifizierte Standards, operative Exzellenz und absolute Diskretion.
          </p>

          <div className="hero-text flex flex-col sm:flex-row gap-6">
            <button className="btn-primary">
              Erstberatung Vereinbaren
            </button>
            <button className="btn-ghost border-white! text-white! hover:bg-white! hover:text-primary!">
              Ausschreibung Senden
            </button>
          </div>
        </div>
      </div>

      {/* Corporate Edge Accent */}
      <div className="absolute bottom-0 right-0 w-1/4 h-2 bg-accent opacity-50" />
    </section>
  );
}
