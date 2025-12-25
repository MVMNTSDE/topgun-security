import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NewCustomerCTA from "@/components/NewCustomerCTA";

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
                <p className="text-primary font-bold">Hüseyin Simsek (Betriebsleiter)</p>
              </div>

              <div className="border-l-4 border-primary p-8 bg-muted">
                <h2 className="text-sm font-black text-primary mb-4 uppercase tracking-[0.3em]">Kontakt</h2>
                <p className="text-primary font-bold">
                  Telefon: 0221 95285529<br />
                  E-Mail: verwaltung@topgun-security.de
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
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-accent hover:underline font-bold ml-1">https://ec.europa.eu/consumers/odr/</a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div className="corp-card border-t-4 border-t-primary pt-12">
                <h2 className="text-lg font-black text-primary mb-6 uppercase tracking-tight">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>

            <div className="corp-card">
                 <h2 className="text-lg font-black text-primary mb-4 uppercase tracking-tight">Haftung für Inhalte</h2>
                 <p className="text-sm text-gray-600 mb-6">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                 </p>

                 <h2 className="text-lg font-black text-primary mb-4 uppercase tracking-tight">Haftung für Links</h2>
                 <p className="text-sm text-gray-600 mb-6">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                 </p>

                 <h2 className="text-lg font-black text-primary mb-4 uppercase tracking-tight">Urheberrecht</h2>
                 <p className="text-sm text-gray-600">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                 </p>
            </div>
          </section>
        </div>
      </div>
      <NewCustomerCTA />
      <Footer />
    </main>
  );
}
