"use client";

import { Shield, Hammer, Map, Users } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: "shield" | "hammer" | "map" | "users";
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const icons = {
    shield: <Shield className="w-8 h-8 text-primary" />,
    hammer: <Hammer className="w-8 h-8 text-primary" />,
    map: <Map className="w-8 h-8 text-primary" />,
    users: <Users className="w-8 h-8 text-primary" />,
  };

  return (
    <div className="group relative overflow-hidden bg-background border border-border p-10 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative z-20">
        <div className="mb-8 inline-block p-4 rounded-lg bg-muted flex items-center justify-center">
          {icons[icon]}
        </div>
        <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">
          {title}
        </h3>
        <p className="text-foreground/60 text-sm leading-relaxed mb-8">
          {description}
        </p>
        <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wider uppercase">
          <span>Leistungsdetails</span>
          <div className="h-0.5 w-6 bg-primary" />
        </div>
      </div>
    </div>
  );
}
