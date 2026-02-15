import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NewCustomerCTA from "@/components/NewCustomerCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zum Datenschutz, zur Datenerfassung auf unserer Website und zu Ihren Rechten gemäß DSGVO.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-accent selection:text-white">
      <Header />
      <div className="container-custom pt-40 pb-32">
        <div className="max-w-4xl">
          <div className="div-line" />
          <h1 className="text-primary mb-16">Datenschutzerklärung</h1>
          <p className="mb-8 text-sm text-muted-foreground">Stand: Februar 2026</p>
          
          <section className="space-y-12 text-corporate-body">

            {/* 1. Übersicht */}
            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-md font-black text-accent mb-4 uppercase tracking-[0.1em]">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <h3 className="text-md font-black text-accent mb-4 uppercase tracking-[0.1em]">Datenerfassung auf dieser Website</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Wer ist verantwortlich?</strong> Die Datenverarbeitung erfolgt durch den Websitebetreiber (siehe Impressum).</li>
                <li><strong>Wie erfassen wir Daten?</strong> Ihre Daten werden erhoben, wenn Sie uns diese mitteilen (z.B. Kontaktformular) oder automatisch durch unsere IT-Systeme (z.B. technische Daten wie Browser, Betriebssystem).</li>
                <li><strong>Wofür nutzen wir die Daten?</strong> Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</li>
              </ul>
            </div>

            {/* 2. Allgemeine Hinweise & Pflichtinformationen */}
            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-md font-black text-accent mb-4 uppercase tracking-[0.1em]">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-md font-black text-accent mb-4 uppercase tracking-[0.1em]">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong>Topgun Security-Sicherheit & Service GmbH</strong><br />
                Heinrich-Heine-Straße 7<br />
                40699 Erkrath<br /><br />
                Telefon: 0178 7703738<br />
                E-Mail: info@topgunsecurity.de
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </div>

            {/* 3. Datenerfassung */}
            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-md font-black text-accent mb-4 uppercase tracking-[0.1em]">Cookies</h3>
              <p className="mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>
              <p className="mb-4">
                Technisch notwendige Cookies sind für den Betrieb der Website erforderlich (z.B. für die Darstellung von Inhalten). Andere Cookies (z.B. zur Analyse) werden nur mit Ihrer Einwilligung gesetzt.
              </p>

              <h3 className="text-md font-black text-accent mb-4 uppercase tracking-[0.1em]">Server-Log-Dateien</h3>
              <p className="mb-4">
                Der Provider der Seiten (Vercel Inc.) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            {/* 4. Hosting */}
            <div className="corp-card bg-primary text-white border-none">
              <h2 className="text-xl font-black text-accent mb-6 uppercase tracking-tight">4. Hosting & Content Delivery Network (CDN)</h2>
              <h3 className="text-md font-black text-white/80 mb-4 uppercase tracking-[0.1em]">Externes Hosting mit Vercel</h3>
              <p className="text-white/70">
                Diese Website wird bei dem Dienstleister Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.<br />
                Die Nutzung des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>

            {/* 5. Plugins und Tools */}
            <div className="corp-card">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">5. Plugins und Tools</h2>
              
              <h3 className="text-md font-black text-accent mb-4 uppercase tracking-[0.1em]">Kontaktformular / E-Mail Kontakt</h3>
              <p className="mb-4">
                Wenn Sie uns per E-Mail oder Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>
            </div>

            {/* 6. Betroffenenrechte */}
            <div className="corp-card border-l-4 border-accent bg-muted p-8">
              <h2 className="text-xl font-black text-primary mb-6 uppercase tracking-tight">6. Ihre Rechte</h2>
              <p className="mb-4">
                Sie haben jederzeit das Recht auf unentgeltliche <strong>Auskunft</strong> über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf <strong>Berichtigung</strong> oder <strong>Löschung</strong> dieser Daten.
              </p>
              <p className="mb-4">
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit für die Zukunft <strong>widerrufen</strong>. Außerdem haben Sie das Recht, unter bestimmten Umständen die <strong>Einschränkung der Verarbeitung</strong> Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein <strong>Beschwerderecht</strong> bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
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
