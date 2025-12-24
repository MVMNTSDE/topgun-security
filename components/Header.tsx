"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#services" },
    { name: "Expertise", href: "#about" },
    { name: "Erstberatung", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
      isScrolled 
        ? "bg-white border-primary/10 py-4 shadow-sm" 
        : "bg-white/80 backdrop-blur-xl border-transparent py-6"
    )}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Institutional Branding */}
        <Link href="/" className="flex items-center gap-5">
          <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
             <span className="text-white font-serif italic text-2xl">T</span>
             <span className="text-white font-serif italic text-2xl ml-[-8px] mt-1">G</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase text-primary leading-none">Topgun</span>
            <span className="text-[10px] tracking-[0.5em] uppercase text-accent font-black">Security Group</span>
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
        "fixed inset-0 bg-primary z-60 flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-10",
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
