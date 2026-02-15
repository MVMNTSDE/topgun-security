import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function UnsubscribePage() {
  return (
    <div className="bg-background min-h-screen flex flex-col selection:bg-accent selection:text-white">
      <Header />
      
      <main className="grow flex items-center justify-center pt-32 pb-20">
         <div className="container-custom relative z-10 text-center max-w-xl">
            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl backdrop-blur-sm">
                <h1 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">
                    Abmeldung erfolgreich
                </h1>
                <p className="text-white/70 text-lg mb-8">
                    Ihre E-Mail-Adresse wurde erfolgreich aus unserem Verteiler entfernt. 
                    Sie werden keine weiteren Nachrichten zu diesem Thema von uns erhalten.
                </p>
                <div className="flex justify-center">
                    <Link href="/" className="btn-primary">
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
         </div>
      </main>

      <Footer />
    </div>
  );
}
