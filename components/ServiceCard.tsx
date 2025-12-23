"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Shield, Hammer, Map, Users } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: "shield" | "hammer" | "map" | "users";
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const icons = {
    shield: <Shield className="w-10 h-10 text-primary" />,
    hammer: <Hammer className="w-10 h-10 text-primary" />,
    map: <Map className="w-10 h-10 text-primary" />,
    users: <Users className="w-10 h-10 text-primary" />,
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top } = card.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      
      gsap.to(card, {
        "--x": `${x}px`,
        "--y": `${y}px`,
        duration: 0.4,
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={cardRef}
      className="premium-card relative group p-14 flex flex-col items-start min-h-[480px] overflow-hidden bg-white"
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
    >
      {/* Subtle Gold Spotlight */}
      <div className="spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="relative z-20 w-full h-full flex flex-col">
        <div className="mb-14 w-20 h-20 border border-black/5 bg-muted flex items-center justify-center group-hover:border-primary transition-all duration-700 shadow-sm">
          {icons[icon]}
        </div>
        
        <h3 className="text-4xl font-serif text-black mb-10 leading-tight group-hover:text-primary transition-colors duration-700">
          {title}
        </h3>
        
        <p className="text-black/40 text-base leading-relaxed mb-auto max-w-[280px] group-hover:text-black/60 transition-colors duration-700">
          {description}
        </p>

        <div className="pt-10 border-t border-black/5 w-full mt-14 flex items-center justify-between group-hover:border-primary/20 transition-colors">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-black/20 group-hover:text-primary transition-colors duration-700">
            Details
          </span>
          <div className="w-3 h-3 rounded-none bg-black/5 group-hover:bg-primary transition-all duration-700 rotate-45" />
        </div>
      </div>
    </div>
  );
}
