import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import CampaignQuiz from "@/components/CampaignQuiz";
import HomeAnimations from "@/components/home/HomeAnimations";

export const metadata = {
  title: "Topgun Security | Premium Sicherheitsdienst NRW",
  description: "Zertifizierter Objektschutz, Werkschutz und Sicherheitsdienste in Köln & NRW. DIN 77200 & ISO 9001 zertifiziert.",
};

export default function Home() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-white">
      <EmergencyButton />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CampaignQuiz />
        <Contact />
      </main>
      <Footer />
      <HomeAnimations />
    </div>
  );
}
