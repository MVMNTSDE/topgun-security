import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ImprintPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-accent selection:text-white">
      <Header />
      <div className="container-custom pt-40 pb-32">
        <div className="max-w-4xl">
          <div className="div-line" />
          <h1 className="text-primary mb-16">Impressum</h1>
          
          <section className="space-y-16 text-corporate-body">
            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">Angaben gemäß § 5 TMG</h2>
              <p className="font-medium">
                Topgun Security-Sicherheit & Service GmbH<br />
                Muldestr. 22<br />
                51371 Leverkusen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-accent p-8 bg-muted">
                <h2 className="text-sm font-black text-primary mb-4 uppercase tracking-[0.3em]">Vertreten durch</h2>
                <p className="text-primary font-bold">Ferhad Dilmaghani (Geschäftsführer)</p>
              </div>

              <div className="border-l-4 border-primary p-8 bg-muted">
                <h2 className="text-sm font-black text-primary mb-4 uppercase tracking-[0.3em]">Kontakt</h2>
                <p className="text-primary font-bold">
                  Telefon: 0221 95285529<br />
                  E-Mail: info@topgunsecurity.de
                </p>
              </div>
            </div>

            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Köln<br />
                Registernummer: HRB 109820
              </p>
            </div>

            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE 123 456 789
              </p>
            </div>

            <div className="corp-card border-t-4 border-t-accent pt-12">
              <h2 className="text-lg font-black text-primary mb-6 uppercase tracking-tight">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-accent hover:underline font-bold ml-1">https://ec.europa.eu/consumers/odr/</a>.
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
