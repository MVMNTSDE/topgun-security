import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
  description?: string;
}

export function TrustBadge({ icon: Icon, label, description }: Readonly<TrustBadgeProps>) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-muted/30 border border-primary/5 rounded-none text-center hover:bg-muted/50 transition-colors group">
      <div className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
        {label}
      </h4>
      {description && (
        <p className="text-primary/60 text-xs max-w-[200px]">
          {description}
        </p>
      )}
    </div>
  );
}
