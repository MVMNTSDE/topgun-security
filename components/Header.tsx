"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoTextRef = useRef<HTMLDivElement>(null);
  const logoIconRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=100",
        scrub: true,
      }
    });

    // Glass effect and resize background
    tl.to(headerRef.current, {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(12px)", 
      borderBottomColor: "rgba(3, 2, 19, 0.05)",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      duration: 1,
      ease: "power2.out"
    });

    // Logo transformation
    // Scale down the icon container
    tl.to(logoIconRef.current, {
      scale: 0.8,
      duration: 1
    }, 0);

    // Fade out and translate the text
    tl.to(logoTextRef.current, {
      opacity: 0,
      width: 0,
      x: -20,
      duration: 1,
      pointerEvents: "none"
    }, 0);

  }, { scope: headerRef });

  const navLinks = [
    { name: "Portfolio", href: "#services" },
    { name: "Expertise", href: "#about" },
    { name: "Erstberatung", href: "#contact" },
  ];

  return (
    <nav 
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 border-b border-transparent py-8 transition-colors"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Dynamic Logo */}
        <Link href="/" className="flex items-center gap-5 group">
          <div ref={logoIconRef} className="w-12 h-12 bg-primary flex items-center justify-center shrink-0 transition-transform origin-left">
             <span className="text-white font-serif italic text-2xl">T</span>
             <span className="text-white font-serif italic text-2xl ml-[-8px] mt-1">G</span>
          </div>
          
          <div ref={logoTextRef} className="flex flex-col overflow-hidden whitespace-nowrap origin-left">
            <span className="text-xl font-black tracking-tighter uppercase text-primary leading-none group-hover:text-accent transition-colors">Topgun</span>
            <span className="text-[10px] tracking-[0.5em] uppercase text-accent font-black">Security GmbH</span>
          </div>
        </Link>

        {/* Corporate Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-black tracking-[0.3em] uppercase text-primary/40 hover:text-accent transition-all duration-500"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="btn-primary"
          >
            Anfrage Senden
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          title="Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Corporate Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-primary z-60 flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-10 glass-panel",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <button 
          className="absolute top-10 right-10 text-white/20 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(false)}
          title="Schließen"
        >
          <X size={32} />
        </button>
        <div className="flex flex-col items-center gap-14 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-5xl font-black text-white hover:text-accent uppercase tracking-tighter transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="btn-primary mt-10 px-12 text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Mandatsanfrage
          </Link>
        </div>
      </div>
    </nav>
  );
}
