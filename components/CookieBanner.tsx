"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent is already stored
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay for animation
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    // Here you would trigger analytics enablement if implemented
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-background/95 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-2xl">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="tex-lg font-bold text-primary">Datenschutz & Cookies</h3>
          <button 
            onClick={declineCookies}
            className="text-white/40 hover:text-white transition-colors"
            aria-label="Schließen"
          >
            <X size={20} />
          </button>
        </div>
        
        <p className="text-sm text-corporate-body mb-6 leading-relaxed">
          Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten. 
          Einige sind notwendig, andere helfen uns, unsere Inhalte zu verbessern.
          Weitere Informationen finden Sie in unserer <Link href="/privacy" className="text-accent underline hover:text-accent/80">Datenschutzerklärung</Link>.
        </p>

        <div className="flex gap-3">
          <button 
            onClick={acceptCookies}
            className="flex-1 bg-accent text-white font-bold py-2.5 px-4 rounded-lg hover:bg-accent/90 transition-all text-sm uppercase tracking-wide"
          >
            Akzeptieren
          </button>
          <button 
            onClick={declineCookies}
            className="flex-1 bg-white/5 text-white/60 font-medium py-2.5 px-4 rounded-lg hover:bg-white/10 transition-all text-sm"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
}
