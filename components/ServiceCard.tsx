"use client";

import { Shield, Hammer, Map, Users } from "lucide-react";

interface ServiceCardProps {
  readonly title: string;
  readonly description: string;
  readonly icon: "shield" | "hammer" | "map" | "users";
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const icons = {
    shield: <Shield className="w-10 h-10" />,
    hammer: <Hammer className="w-10 h-10" />,
    map: <Map className="w-10 h-10" />,
    users: <Users className="w-10 h-10" />,
  };

  return (
    <div 
      className="corp-card h-full flex flex-col items-start border-l-4 border-l-primary"
    >
      <div className="mb-10 text-accent">
        {icons[icon]}
      </div>
      
      <h3 className="text-primary group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-primary/60 text-base leading-relaxed mb-12 grow">
        {description}
      </p>

      <div className="w-full pt-8 border-t border-primary/5 flex items-center justify-between group">
        <span className="text-[10px] font-black tracking-widest uppercase text-primary/30 group-hover:text-accent transition-colors">
          Details Anzeigen
        </span>
        <div className="text-accent group-hover:translate-x-2 transition-transform">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
             <line x1="5" y1="12" x2="19" y2="12"></line>
             <polyline points="12 5 19 12 12 19"></polyline>
           </svg>
        </div>
      </div>
    </div>
  );
}
