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
    // Scale down the entire logo container
    tl.to(logoIconRef.current, {
      height: "3rem", // Shrink height
      width: "auto",
      duration: 1
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
      className="fixed top-0 left-0 w-full z-50 border-b border-transparent py-6 transition-colors"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Dynamic Logo */}
        <Link href="/" className="flex items-center gap-5 group">
          <div ref={logoIconRef} className="relative h-16 w-auto aspect-[16/9] transition-transform origin-left">
             <Image 
               src="/images/logo-full.png" 
               alt="Topgun Security GmbH Logo" 
               fill
               className="object-contain object-left"
               priority
             />
          </div>
          {/* Text is now part of the logo image, so we remove the separate text element */}
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
