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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sicherheitsdienste", href: "#services" },
    { name: "Unternehmen", href: "#about" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 lg:px-12",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight uppercase flex items-center gap-3">
          <div className="w-9 h-9 bg-primary flex items-center justify-center rounded">
            <span className="text-white font-black text-xs">TG</span>
          </div>
          <span className="text-foreground">Topgun Security</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="bg-primary text-white text-sm px-6 py-2.5 rounded-md hover:bg-primary/90 transition-all">
            Anfrage stellen
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-background z-[60] flex flex-col items-center justify-center transition-all duration-300",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <button 
          className="absolute top-6 right-6 text-foreground"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-bold text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="bg-primary text-white px-8 py-4 rounded-md text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Anfrage stellen
          </Link>
        </div>
      </div>
    </nav>
  );
}
