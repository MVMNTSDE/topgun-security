"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
      backgroundColor: "rgba(255, 255, 255, 0.95)", // More opaque for contrast with dark logo if needed
      backdropFilter: "blur(16px)", 
      borderBottomColor: "rgba(3, 2, 19, 0.05)",
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      duration: 1,
      ease: "power2.out"
    });

    // Logo transformation
    // 1. Fade out/Slide up the Text Logo
    tl.to(logoIconRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power2.out"
    }, 0);

    // 2. Fade in/Slide up the Full Logo
    tl.to(".logo-full", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 0.1);

  }, { scope: headerRef });

  const navLinks = [
    { name: "Leistungen", href: "/leistungen" },
    { name: "Branchen", href: "/branchen" }, 
    { name: "Über Uns", href: "/unternehmen" }, // Updated to future-proof route
    { name: "Kontakt", href: "/#contact" },
  ];

  return (
    <nav 
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 border-b border-transparent py-6 transition-colors"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Dynamic Logo */}
        {/* Dynamic Logo Container */}
        <Link href="/" className="relative h-20 w-64 md:w-80 group">
           {/* Initial State: White Text Only - LARGER */}
           <div ref={logoIconRef} className="absolute inset-0 flex items-center">
              <div className="relative h-16 w-full transition-transform origin-left">
                <Image 
                  src="/images/assets/logo-text-white.png" 
                  alt="Topgun Security" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
           </div>

           {/* Scroll State: Full Logo (Standard) */}
           <div className="logo-full absolute inset-0 flex items-center opacity-0 translate-y-4">
              <div className="relative h-20 w-full">
                <Image 
                  src="/images/logo-full.png" 
                  alt="Topgun Security" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
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
