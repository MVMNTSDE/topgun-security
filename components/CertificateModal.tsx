"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Modal from "./Modal";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CertificateModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly imageUrl: string;
  readonly title: string;
  readonly description: React.ReactNode;
  readonly variant?: "certificate" | "report";
  readonly validityArea?: string;
}

export function CertificateModal({ isOpen, onClose, imageUrl, title, description, variant = "certificate", validityArea }: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      className="max-w-7xl h-[95vh] md:h-auto md:max-h-[92vh] flex flex-col md:flex-row bg-white overflow-hidden p-0 rounded-lg border-none"
      hideHeader
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Close Button - Custom placement for this specific modal design */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 bg-primary text-white hover:bg-accent transition-colors rounded-full shadow-lg"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Image Container */}
        <div className={cn(
          "bg-muted relative flex items-center justify-center overflow-y-auto p-4 md:p-8 shrink-0",
          variant === "report" ? "w-full md:w-1/4 bg-primary/5 hidden md:flex" : "w-full md:w-3/5"
        )}>
          <Image 
            src={imageUrl} 
            alt={title} 
            width={800}
            height={1131}
            className={cn(
               "shadow-lg",
               variant === "report" ? "w-32 h-auto object-contain shadow-none opacity-50" : "w-full h-auto object-contain"
            )}
           />
        </div>

        {/* Info Container */}
        <div className={cn(
          "flex flex-col bg-white p-8 md:p-16 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40",
          variant === "report" ? "w-full md:w-3/4" : "w-full md:w-2/5"
        )}>
          <div className="div-line" />
          <h2 className="text-primary mt-8 mb-6">{title}</h2>
          <p className="text-corporate-body text-primary/60! mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="mt-auto pt-8 border-t border-primary/5">
            <span className="text-[10px] font-black tracking-widest uppercase text-primary/30 mb-4 block">Gültigkeitsbereich</span>
            <p className="text-primary font-bold text-sm">
              {validityArea || "Topgun Security & Service GmbH Leverkusen"}
            </p>
          </div>
          
          <button 
            onClick={onClose}
            className="btn-primary mt-12 w-full"
          >
            Schließen
          </button>
        </div>
      </div>
    </Modal>
  );
}
