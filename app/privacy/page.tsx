import Navbar from "@/components/Navbar";

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-40 pb-20 px-6">
        <h1 className="text-4xl font-bold mb-12">Datenschutzerklärung</h1>
        
        <section className="space-y-12 text-foreground/70 leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-bold mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">2. Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h2>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Wie erfassen wir Ihre Daten?</h2>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">4. Wofür nutzen wir Ihre Daten?</h2>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">5. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Vercel Inc. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">6. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
