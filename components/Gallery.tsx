"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/images/gallery/img-1.png", alt: "Sicherheitszentrale" },
  { src: "/images/gallery/img-2.png", alt: "Sicherheitsdienst Nacht" },
  { src: "/images/gallery/img-3.png", alt: "Baustellenüberwachung" },
  { src: "/images/gallery/img-4.png", alt: "Industriesicherheit" },
  { src: "/images/gallery/img-5.png", alt: "Objektschutz Details" },
];

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".gallery-item");
    
    gsap.from(items, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-white">
      <div className="container-custom">
        <div className="mb-20 corp-reveal">
           <div className="div-line" />
           <h2 className="text-primary uppercase tracking-tighter">
             Visuelle <br />
             <span className="text-accent italic">Exzellenz</span>
           </h2>
        </div>

        {/* Bento Grid Layout for 5 Images */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-auto md:h-[800px]">
           {/* Item 1: Large Left (2 cols wide, 2 rows high on desktop? No, let's do customized spans) */}
           {/* Row 1 */}
           <div className="gallery-item relative md:col-span-4 md:row-span-1 h-64 md:h-full overflow-hidden group">
              <Image 
                src={images[0].src} 
                alt={images[0].alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
           </div>
           
           <div className="gallery-item relative md:col-span-2 md:row-span-1 h-64 md:h-full overflow-hidden group">
              <Image 
                src={images[1].src} 
                alt={images[1].alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
           </div>

           {/* Row 2 */}
           <div className="gallery-item relative md:col-span-2 md:row-span-1 h-64 md:h-full overflow-hidden group">
              <Image 
                src={images[2].src} 
                alt={images[2].alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
           </div>

           <div className="gallery-item relative md:col-span-2 md:row-span-1 h-64 md:h-full overflow-hidden group">
              <Image 
                src={images[3].src} 
                alt={images[3].alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
           </div>

           <div className="gallery-item relative md:col-span-2 md:row-span-1 h-64 md:h-full overflow-hidden group">
              <Image 
                src={images[4].src} 
                alt={images[4].alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
           </div>
        </div>
      </div>
    </section>
  );
}
