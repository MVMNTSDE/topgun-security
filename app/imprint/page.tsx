import Navbar from "@/components/Navbar";

export default function ImprintPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-40 pb-20 px-6">
        <h1 className="text-4xl font-bold mb-12">Impressum</h1>
        
        <section className="space-y-12 text-foreground/70 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Topgun Security Group<br />
              Beispielstraße 123<br />
              12345 Berlin
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Vertreten durch</h2>
            <p>Max Mustermann (Geschäftsführer)</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Kontakt</h2>
            <p>
              Telefon: +49 (0) 123 456789<br />
              E-Mail: verwaltung@topgun-security.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Berlin<br />
              Registernummer: HRB 123456
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 123 456 789
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Redaktionell verantwortlich</h2>
            <p>Max Mustermann</p>
          </div>

          <div className="pt-10 border-t border-border">
            <h2 className="text-lg font-bold text-foreground mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>.
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
