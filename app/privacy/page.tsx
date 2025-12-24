import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-accent selection:text-white">
      <Header />
      <div className="container-custom pt-40 pb-32">
        <div className="max-w-4xl">
          <div className="div-line" />
          <h1 className="text-primary mb-16">Datenschutz</h1>
          
          <section className="space-y-16 text-corporate-body">
            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-sm font-black text-accent mb-4 uppercase tracking-[0.3em]">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div className="border-l-4 border-accent p-8 bg-muted">
              <h2 className="text-sm font-black text-primary mb-4 uppercase tracking-[0.3em]">2. Verantwortlichkeit</h2>
              <p className="text-primary/70">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
            </div>

            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">3. Datenerfassung</h2>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
              </p>
            </div>

            <div className="corp-card bg-primary text-white border-none">
              <h2 className="text-xl font-black text-accent mb-6 uppercase tracking-tight">4. Hosting</h2>
              <p className="text-white/60">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter: **Vercel Inc.** Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
              </p>
            </div>

            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">5. Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
