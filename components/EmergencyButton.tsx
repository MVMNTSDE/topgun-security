"use client";

import { Phone } from "lucide-react";

export default function EmergencyButton() {
  return (
    <div className="fixed bottom-10 right-10 z-[100] group">
       {/* Pulse Effect */}
      <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20 duration-1000" />
      
      <a
        href="tel:+4915565098461"
        className="relative w-16 h-16 bg-red-600 border-2 border-white/20 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-300 hover:scale-110 hover:bg-red-700 hover:shadow-[0_0_50px_rgba(220,38,38,0.7)] animate-[wiggle_4s_ease-in-out_infinite]"
        title="Notfall: 0155 650 98 461"
      >
        <Phone size={28} className="animate-[tada_3s_ease-in-out_infinite]" strokeWidth={2.5} />
      </a>
      
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
        Notfall Hotline 24/7
      </div>
    </div>
  );
}
