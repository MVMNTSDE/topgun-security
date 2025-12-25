import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface ServicePageLayoutProps {
  children: React.ReactNode;
  heroTitle: string;
  heroSubtitle?: string;
  heroImage?: string;
  parentLink?: {
    href: string;
    label: string;
  };
}

export function ServicePageLayout({
  children,
  heroTitle,
  heroSubtitle,
  heroImage = "/images/gallery/img-1.png", // Default fallback
  parentLink = { href: "/#services", label: "Zurück zur Übersicht" },
}: Readonly<ServicePageLayoutProps>) {
  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-white flex flex-col">
      <Header />
      
      <main className="grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] min-h-[400px] w-full flex items-end">
          <div className="absolute inset-0 z-0">
             <Image 
                src={heroImage} 
                alt={heroTitle}
                fill 
                className="object-cover grayscale"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
          </div>

          <div className="container-custom relative z-10 pb-12 md:pb-20">
            {/* Breadcrumb / Back Link */}
            <Link 
              href={parentLink.href} 
              className="inline-flex items-center text-white/60 hover:text-accent text-sm uppercase tracking-widest mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {parentLink.label}
            </Link>

            <div className="div-line bg-accent mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-tight break-words hyphens-auto">
              {heroTitle}
            </h1>
            {heroSubtitle && (
              <p className="text-white/80 text-base md:text-xl max-w-2xl mt-4 font-light">
                {heroSubtitle}
              </p>
            )}
          </div>
        </section>

        {/* Content Section */}
        <div className="container-custom py-16 md:py-24">
            <div className="bg-white p-8 md:p-12 lg:p-16 border border-primary/5 shadow-2xl -mt-20 relative z-20">
                <article className="prose prose-lg prose-headings:font-bold prose-headings:uppercase prose-headings:text-primary prose-a:text-accent hover:prose-a:text-primary prose-strong:text-primary font-sans max-w-none">
                    {children}
                </article>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
