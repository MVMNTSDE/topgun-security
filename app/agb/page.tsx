import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NewCustomerCTA from "@/components/NewCustomerCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB - Allgemeine Geschäftsbedingungen",
  description: "Unsere Allgemeinen Geschäftsbedingungen für Sicherheitsdienstleistungen, Objektschutz und Werkschutz.",
};

export default function AgbPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-accent selection:text-white">
      <Header />
      <div className="container-custom pt-40 pb-32">
        <div className="max-w-4xl">
          <div className="div-line" />
          <h1 className="text-primary mb-16">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="mb-8 text-sm text-muted-foreground">Stand: Februar 2026</p>
          
          <section className="space-y-12 text-corporate-body">
            
            {/* §1 Allgemeines */}
            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">§ 1 Geltungsbereich und Allgemeines</h2>
              <p className="mb-4">
                (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und sonstigen Leistungen der <strong>Topgun Security-Sicherheit & Service GmbH</strong> (nachfolgend „Auftragnehmer“), gegenüber ihren Kunden (nachfolgend „Auftraggeber“).
              </p>
              <p className="mb-4">
                (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers werden, selbst bei Kenntnis, nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
              </p>
              <p>
                (3) Das Bewachungsgewerbe ist gemäß § 34a GewO erlaubnispflichtig. Der Auftragnehmer erbringt seine Leistungen als gewerblicher Sicherheitsdienstleister unter Einhaltung der geltenden gesetzlichen Bestimmungen.
              </p>
            </div>

            {/* §2 Vertragsabschluss */}
            <div className="corp-card">
               <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">§ 2 Vertragsabschluss und Leistungsumfang</h2>
               <p className="mb-4">
                 (1) Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch Beginn der Leistungserbringung zustande.
               </p>
               <p className="mb-4">
                 (2) Der Umfang der zu erbringenden Leistungen ergibt sich aus der schriftlichen Auftragsbestätigung oder dem individuellen Sicherheitskonzept. Nachträgliche Änderungen oder Erweiterungen des Auftrags bedürfen der Schriftform.
               </p>
               <p>
                 (3) Der Auftragnehmer ist berechtigt, sich zur Erfüllung seiner Verpflichtungen anderer zuverlässiger Unternehmen zu bedienen. Eine Zustimmung des Auftraggebers ist hierfür nicht erforderlich, sofern keine berechtigten Interessen des Auftraggebers entgegenstehen.
               </p>
            </div>

            {/* §3 Durchführung */}
            <div className="corp-card">
               <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">§ 3 Durchführung der Leistungen</h2>
               <p className="mb-4">
                 (1) Der Sicherheitsdienst wird durch uniformiertes und geschultes Personal durchgeführt, sofern nicht anders vereinbart (z.B. Kaufhausdetektive).
               </p>
               <p>
                 (2) Das Personal des Auftragnehmers ist angewiesen, die für den jeweiligen Auftrag geltenden Dienstanweisungen strikt zu befolgen. Weisungsbefugt gegenüber dem Personal ist grundsätzlich nur der Auftragnehmer, es sei denn, bei Gefahr im Verzug ist ein direktes Eingreifen des Auftraggebers erforderlich.
               </p>
            </div>

             {/* §4 Pflichten AG */}
             <div className="corp-card">
               <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">§ 4 Pflichten des Auftraggebers</h2>
               <p className="mb-4">
                 (1) Der Auftraggeber hat dem Auftragnehmer alle für die Durchführung des Auftrags erforderlichen Informationen, Unterlagen und Schlüssel rechtzeitig und kostenlos zur Verfügung zu stellen.
               </p>
               <p>
                 (2) Der Auftraggeber hat dafür Sorge zu tragen, dass die Mitarbeiter des Auftragnehmers die für die Ausführung der Tätigkeit notwendigen Zutrittsrechte erhalten.
               </p>
            </div>

            {/* §5 Haftung */}
            <div className="corp-card border-l-4 border-accent bg-muted p-8">
               <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">§ 5 Haftung und Haftungsbeschränkung</h2>
               <p className="mb-4">
                 (1) Der Auftragnehmer haftet für Schäden, die durch ihn oder seine Erfüllungsgehilfen schuldhaft verursacht wurden, im Rahmen der gesetzlichen Bestimmungen. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, sofern keine wesentlichen Vertragspflichten (Kardinalpflichten) verletzt wurden oder Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit betroffen sind.
               </p>
               <p className="mb-4">
                 (2) Der Auftragnehmer unterhält eine Betriebshaftpflichtversicherung mit Deckungssummen, die den üblichen Risiken des Bewachungsgewerbes entsprechen. Die Haftung ist der Höhe nach auf die Deckungssummen der Betriebshaftpflichtversicherung beschränkt.
               </p>
               <p>
                 (3) Schadensersatzansprüche müssen innerhalb einer Ausschlussfrist von 3 Monaten nach Kenntnis des schädigenden Ereignisses schriftlich geltend gemacht werden.
               </p>
            </div>

            {/* §6 Zahlungsbedingungen */}
            <div className="corp-card">
               <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">§ 6 Vergütung und Zahlungsbedingungen</h2>
               <p className="mb-4">
                 (1) Die Vergütung richtet sich nach den vertraglich vereinbarten Preisen. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
               </p>
               <p className="mb-4">
                 (2) Rechnungen sind sofort nach Rechnungseingang ohne Abzug zur Zahlung fällig, sofern kein anderes Zahlungsziel vereinbart wurde.
               </p>
               <p>
                 (3) Kommt der Auftraggeber in Zahlungsverzug, ist der Auftragnehmer berechtigt, Verzugszinsen in gesetzlicher Höhe zu fordern und die Leistungserbringung nach vorheriger Androhung bis zum Ausgleich der offenen Forderungen einzustellen.
               </p>
            </div>

             {/* §7 Vertragslaufzeit */}
             <div className="corp-card">
               <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">§ 7 Vertragslaufzeit und Kündigung</h2>
               <p className="mb-4">
                 (1) Die Vertragslaufzeit ergibt sich aus der individuellen Vereinbarung. Ist keine feste Laufzeit vereinbart, läuft der Vertrag auf unbestimmte Zeit.
               </p>
               <p>
                 (2) Verträge mit unbestimmter Laufzeit können von beiden Parteien mit einer Frist von 3 Monaten zum Monatsende schriftlich gekündigt werden. Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.
               </p>
            </div>

            {/* §8 Datenschutz */}
            <div className="corp-card">
               <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">§ 8 Datenschutz</h2>
               <p>
                 Die Parteien verpflichten sich zur Einhaltung der geltenden Datenschutzbestimmungen (DSGVO, BDSG). Personenbezogene Daten werden nur erhoben, verarbeitet und genutzt, soweit dies zur Erfüllung des Vertragszwecks erforderlich ist. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
               </p>
            </div>

             {/* §9 Schlussbestimmungen */}
             <div className="corp-card">
               <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">§ 9 Schlussbestimmungen</h2>
               <p className="mb-4">
                 (1) Erfüllungsort und Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz des Auftragnehmers (Erkrath/Wuppertal).
               </p>
               <p className="mb-4">
                 (2) Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden, so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
               </p>
               <p>
                 (3) Es gilt das Recht der Bundesrepublik Deutschland.
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
