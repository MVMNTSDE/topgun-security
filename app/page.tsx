"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import BackgroundAudio from "@/components/BackgroundAudio";
import CampaignQuiz from "@/components/CampaignQuiz";
import NewCustomerCTA from "@/components/NewCustomerCTA";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 2. Sync GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // 3. GSAP Reveals
    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray<HTMLElement>(".corp-reveal");
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
        });
      });
    }, mainRef);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      ctx.revert();
    };
  }, []);

  return (
    <div ref={mainRef} className="bg-background min-h-screen selection:bg-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CampaignQuiz />
        <Contact />
        <NewCustomerCTA />
      </main>
      <Footer />
      <BackgroundAudio />
    </div>
  );
}
