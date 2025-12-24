"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Template({ children }: { readonly children: React.ReactNode }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Immediate clean state
    gsap.set(containerRef.current, { opacity: 0, y: 10 });
    
    // Smooth entry
    gsap.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      clearProps: "transform" // Clean up after animation to avoid z-index/stacking context issues
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {children}
    </div>
  );
}
