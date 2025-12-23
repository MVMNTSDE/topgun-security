"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Shield, Hammer, Map, Users } from "lucide-react";

interface ServiceCardProps {
  readonly title: string;
  readonly description: string;
  readonly icon: "shield" | "hammer" | "map" | "users";
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const icons = {
    shield: <Shield className="w-8 h-8 text-primary" />,
    hammer: <Hammer className="w-8 h-8 text-primary" />,
    map: <Map className="w-8 h-8 text-primary" />,
    users: <Users className="w-8 h-8 text-primary" />,
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
      className="premium-card relative group p-12 flex flex-col items-start min-h-[440px] overflow-hidden rounded-sm"
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
    >
      {/* Subtle Gold Spotlight */}
      <div className="spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="relative z-20 w-full h-full flex flex-col">
        <div className="mb-12 w-16 h-16 border border-black/5 bg-white/50 backdrop-blur-sm flex items-center justify-center group-hover:border-primary/30 transition-all duration-700">
          {icons[icon]}
        </div>
        
        <h3 className="text-3xl font-serif text-black mb-8 leading-tight group-hover:text-primary transition-colors duration-700">
          {title}
        </h3>
        
        <p className="text-black/40 text-sm leading-relaxed mb-auto max-w-[240px] group-hover:text-black/60 transition-colors duration-700">
          {description}
        </p>

        <div className="pt-8 border-t border-black/[0.03] w-full mt-12 flex items-center justify-between group-hover:border-primary/10 transition-colors">
          <span className="text-[9px] font-black tracking-[0.4em] uppercase text-black/10 group-hover:text-primary transition-colors duration-700">
            Learn More
          </span>
          <div className="w-2 h-2 bg-black/[0.05] group-hover:bg-primary transition-all duration-700 rotate-45" />
        </div>
      </div>
    </div>
  );
}
