import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen flex flex-col selection:bg-accent selection:text-white">
      <Header />
      
      <main className="grow flex items-center justify-center relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-primary" />
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-size-[40px_40px]" />
         </div>

         <div className="container-custom relative z-10 text-center">
            <h1 className="text-[10rem] md:text-[15rem] font-black text-white/5 leading-none select-none">
                404
            </h1>
            <div className="-mt-12 md:-mt-24 relative">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                    Zielgebiet nicht gefunden
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
                    Die angeforderte Seite existiert nicht oder wurde verschoben.
                    Kehren Sie zur Basis zurück.
                </p>
                <Link href="/" className="btn-primary">
                    Zurück zur Startseite
                </Link>
            </div>
         </div>
      </main>

      <Footer />
    </div>
  );
}
