"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Kompetenzen", href: "#services" },
    { name: "Philosophie", href: "#about" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-700 pointer-events-none px-6 lg:px-12",
      isScrolled ? "pt-4" : "pt-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-700 px-10 py-5 rounded-full border",
        isScrolled 
          ? "bg-white/90 backdrop-blur-2xl border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)]" 
          : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="group flex items-center gap-5">
          <div className="relative w-12 h-12 flex items-center justify-center border border-primary/30 group-hover:border-primary transition-all duration-700">
             <span className="text-black font-serif italic text-xl -translate-y-[1px]">T</span>
             <span className="text-black font-serif italic text-xl translate-y-px ml-[-5px]">G</span>
             <div className="absolute inset-0 border border-primary/20 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-serif tracking-[0.2em] uppercase text-black leading-none">Topgun</span>
            <span className="text-[9px] font-sans tracking-[0.4em] uppercase text-primary font-black">Security Group</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-14">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-black tracking-[0.3em] uppercase text-black/40 hover:text-black transition-all duration-500"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="text-[11px] font-black tracking-[0.3em] uppercase bg-black text-white px-8 py-4 hover:bg-primary transition-all duration-700 shadow-xl"
          >
            Anfrage
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out px-10 pointer-events-auto",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <button 
          className="absolute top-12 right-12 text-black/20 hover:text-black transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={40} />
        </button>
        <div className="flex flex-col items-center gap-16">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-5xl font-serif text-black hover:text-primary transition-all duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
