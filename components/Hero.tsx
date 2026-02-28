"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Sync video muted state with React state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

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
      className="relative min-h-[90vh] flex items-center pt-32 pb-32 md:pt-48 md:pb-48 bg-primary overflow-hidden"
    >
      {/* Heavy Corporate Backdrop */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          ref={videoRef}
          autoPlay 
          muted={isMuted}
          loop 
          playsInline 
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        >
          <source src="/videos/imagefilm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Sound Toggle Button */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-30 bg-black/50 hover:bg-black/80 text-white p-3 md:px-5 md:py-3 rounded-full backdrop-blur-md transition-all flex items-center gap-3 border border-white/10 group cursor-pointer"
        aria-label={isMuted ? "Ton einschalten" : "Ton ausschalten"}
      >
        {isMuted ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-white transition-colors duration-300">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
            <span className="text-sm font-medium tracking-wide text-white/70 group-hover:text-white transition-colors duration-300 hidden md:inline-block">Ton einschalten</span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
            <span className="text-sm font-medium tracking-wide text-white hidden md:inline-block">Ton ausschalten</span>
          </>
        )}
      </button>

      <div className="container-custom relative z-20">
        <div className="max-w-7xl">
          <div className="hero-text inline-flex items-center gap-4 mb-8">
            <div className="hero-line h-1 bg-accent w-12" />
            <span className="text-xs font-black tracking-[0.5em] uppercase text-white/90">
              Topgun Security GmbH
            </span>
          </div>
          
          <h1 className="hero-text text-white mb-10 leading-[0.9] text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter uppercase font-black">
            ZERTIFIZIERTER<br />
            <span className="text-accent underline decoration-8 underline-offset-8">WERKSCHUTZ</span> & OBJEKTSCHUTZ<br />
            <span className="text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-4 font-bold tracking-widest">| KÖLN & NRW</span>
          </h1>
          
          <p className="hero-text text-white/70 text-xl md:text-2xl mb-16 max-w-3xl font-medium leading-relaxed">
            DIN 77200 Konform. IHK-geprüftes Personal. Wir sichern Industrie und Gewerbe in Köln & NRW gegen Ausfall und Kriminalität.
          </p>

          <div className="hero-text flex flex-col sm:flex-row gap-6">
            <Link href="/#contact" className="btn-primary">
              Erstberatung Vereinbaren
            </Link>
            <a href="mailto:ausschreibung@topgun-security.de" className="btn-ghost border-white! text-white! hover:bg-white! hover:text-primary!">
              Ausschreibung Senden
            </a>
          </div>
        </div>
      </div>

      {/* Corporate Edge Accent */}
      <div className="absolute bottom-0 right-0 w-1/4 h-2 bg-accent opacity-50" />
    </section>
  );
}
