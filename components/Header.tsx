"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const logoIconRef = useRef<HTMLDivElement>(null);

  // Determine if the current page has a dark hero (needs white text initially)
  const isDarkHero = pathname === "/";

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=100",
        scrub: true,
      }
    });

    // 1. Layout Animation (Padding) - Targets the Nav Container
    tl.to(headerRef.current, {
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      duration: 1,
      ease: "power2.out"
    }, 0);

    // 2. Background Animation (Solid White)
    tl.to(bgRef.current, {
      backgroundColor: "#ffffff", // Solid White
      borderBottomColor: "rgba(3, 2, 19, 0.05)",
      duration: 1,
      ease: "power2.out"
    }, 0);

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

    // 3. Animate Nav Links Color (Only on pages where they start white)
    if (isDarkHero) {
      tl.to(".nav-link", {
        color: "rgba(3, 2, 19, 0.4)", // text-primary/40
        duration: 0.8,
        ease: "power2.out"
      }, 0);
    }

  }, { scope: headerRef, dependencies: [pathname] });

  const navLinks = [
    { name: "Leistungen", href: "/leistungen" },
    { name: "Branchen", href: "/branchen" }, 
    { name: "Über Uns", href: "/unternehmen" }, // Updated to future-proof route
    { name: "Partner", href: "/partner" },
    { name: "Kontakt", href: "/#contact" },
  ];

  return (
    <nav 
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 py-6 transition-all"
    >
      {/* Background Layer for Glass Effect */}
      <div 
        ref={bgRef}
        className="absolute inset-0 border-b border-transparent -z-10 transition-colors"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between relative z-10">
        {/* Dynamic Logo */}
        {/* Dynamic Logo Container */}
        <Link href="/" className="relative h-20 w-56 md:h-24 md:w-72 lg:h-28 lg:w-80 group">
           {/* Initial State: Dynamic Text Logo (White on Home, Black on others) */}
           <div ref={logoIconRef} className="absolute inset-0 flex items-center">
              <div className="relative h-full w-full transition-transform origin-left">
                <Image 
                  src={isDarkHero ? "/images/assets/logo-text-white.png" : "/images/logo-text.png"}
                  alt="Topgun Security" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
           </div>

           {/* Scroll State: Full Logo (Standard) */}
           <div className="logo-full absolute inset-0 flex items-center opacity-0 translate-y-4">
              <div className="relative h-full w-full">
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
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "nav-link text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:text-accent whitespace-nowrap",
                isDarkHero ? "text-white/80" : "text-primary/40"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contact" 
            className="btn-primary px-8! py-3! text-xs"
          >
            Anfrage Senden
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary" // This might be hard to see on Home if dark?
          // Fix: Make toggle also dynamic in next step or use same nav-link class logic
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          title="Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} className={cn("transition-colors", isDarkHero ? "text-white nav-link" : "text-primary")} />}
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
        <div className="flex flex-col items-center gap-10 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-3xl font-black text-white hover:text-accent uppercase tracking-tighter transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#contact" 
            className="btn-primary mt-6 px-12 text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Mandatsanfrage
          </Link>
        </div>
      </div>
    </nav>
  );
}
