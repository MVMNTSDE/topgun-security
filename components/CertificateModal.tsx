"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface CertificateModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly imageUrl: string;
  readonly title: string;
  readonly description: string;
}

export function CertificateModal({ isOpen, onClose, imageUrl, title, description }: CertificateModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/95 backdrop-blur-md transition-opacity"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-5xl h-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-primary text-white hover:bg-accent transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Image Container */}
        <div className="w-full md:w-2/3 bg-muted relative flex items-center justify-center overflow-y-auto p-4 md:p-8">
          <Image 
            src={imageUrl} 
            alt={title} 
            width={800}
            height={1131}
            className="w-full h-auto object-contain shadow-lg" 
          />
        </div>

        {/* Info Container */}
        <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col bg-white">
          <div className="div-line" />
          <h2 className="text-primary mt-8 mb-6">{title}</h2>
          <p className="text-corporate-body text-primary/60! mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="mt-auto pt-8 border-t border-primary/5">
            <span className="text-[10px] font-black tracking-widest uppercase text-primary/30 mb-4 block">Gültigkeitsbereich</span>
            <p className="text-primary font-bold text-sm">Topgun Security & Service GmbH Leverkusen</p>
          </div>
          
          <button 
            onClick={onClose}
            className="btn-primary mt-12 w-full"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
