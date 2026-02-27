const html = `
    <div style="font-family: Helvetica, Arial, sans-serif; color: #1a1a1a; max-width: 600px; line-height: 1.6;">
      <!-- Header -->
      <div style="border-bottom: 4px solid #F59E0B; padding-bottom: 30px; margin-bottom: 30px;">
        <img 
            src="https://topgun-security.de/images/logo-full.png" 
            alt="Topgun Security" 
            style="height: auto; width: 200px; margin-bottom: 20px; display: block;"
        />
        <h1 style="color: #111; margin: 0; font-size: 24px; letter-spacing: -0.5px;">
            Sicherheit für Ihr Logistikzentrum in Köln
        </h1>
      </div>
      
      <!-- Content -->
      <div style="padding: 0 10px;">
        <p style="font-size: 16px; color: #374151;">
          Sehr geehrte Damen und Herren,
        </p>
        <p>
            als Betreiber eines Logistikzentrums in <strong>Köln</strong> kennen Sie die aktuellen  Herausforderungen: Hoher Warendurchsatz, komplexe Lieferketten und das ständige Risiko von Schwund oder unbefugtem Zutritt auf Ihrem Betriebsgelände.
        </p>
        <p>
            <strong>Topgun Security</strong> ist Ihr lokaler Partner für effektiven Werkschutz und Logistiksicherheit. Wir sichern Ihr Gelände, kontrollieren Zu- und Abfahrten und stellen sicher, dass Ihre Abläufe reibungslos und verlustfrei funktionieren.
        </p>

        <!-- Offer Box -->
        <div style="background: #eef2ff; color: #1e3a8a; border: 1px solid #c7d2fe; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
            <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px;">
                Exklusiver Neukunden-Vorteil
            </span>
            <span style="display: block; font-size: 32px; font-weight: bold; color: #F59E0B;">TOPGUN30</span>
            <span style="display: block; font-size: 14px; margin-top: 5px;">
                <strong>30% Nachlass</strong> auf die erste Sicherheitsanalyse Ihres Standortes oder den ersten Einsatzmonat.
            </span>
        </div>

        <p>
            Minimieren Sie Ihre Risiken und schützen Sie Ihre Logistikabläufe effektiv.
            <strong>Antworten Sie einfach auf diese E-Mail</strong> für ein kostenloses Erstgespräch oder rufen Sie uns direkt an.
        </p>
        
        <p style="margin-top: 40px; color: #6B7280; font-size: 14px;">
          Mit freundlichen Grüßen,<br />
          <strong>Hüseyin Simsek</strong><br />
          Betriebsleiter, Topgun Security
        </p>
      </div>
      
      <!-- Footer & GDPR (DSGVO) compliant Opt-Out -->
      <div style="margin-top: 40px; font-size: 12px; color: #9ca3af; border-top: 1px solid #eee; padding-top: 20px; text-align: justify;">
        <p>
            <strong>TOPGUN SECURITY GMBH</strong><br/>
            KÖLN | BONN | DÜSSELDORF | LEVERKUSEN<br/>
            📍 Hohenzollernring 57, 50672 Köln<br/>
            📞 +49 (0) 221 / 123 456 78<br/>
            <a href="https://topgun-security.de/imprint" style="color: #9ca3af; text-decoration: underline;">Impressum</a> | <a href="https://topgun-security.de/privacy" style="color: #9ca3af; text-decoration: underline;">Datenschutz</a>
        </p>
        <p>
            <a href="https://topgun-security.de" style="color: #F59E0B; text-decoration: none;">www.topgun-security.de</a>
        </p>
        <p style="margin-top: 20px; font-size: 11px; line-height: 1.5;">
            <strong>Transparenzinformation gemäß Art. 14 DSGVO:</strong><br/>
            Sie erhalten diese B2B-Informationsmail, weil wir aufgrund der inhaltlichen Ausrichtung Ihres Unternehmens davon ausgehen, dass unsere Dienstleistungen im Bereich Objekt- und Werkschutz für Sie von berechtigtem wirtschaftlichen Interesse sind.<br/> 
            Wir verarbeiten Ihre öffentlich zugänglichen Kontaktdaten auf Basis des berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO zur Geschäftsanbahnung und Direktwerbung im B2B-Kontext.<br/>
            <br/>
            Wenn Sie keine weiteren Nachrichten von uns erhalten möchten, können Sie dieser Verarbeitung jederzeit formlos per Antworten-Mail widersprechen oder <a href="https://topgun-security.de/api/unsubscribe?email=info@topgun.gmbh" style="color: #ef4444; font-weight: bold; text-decoration: underline;">hier klicken, um sich sofort abzumelden</a>.
        </p>
      </div>
    </div>
`;

const n8nWebhookUrl = "http://87.106.190.120:5678/webhook/send-mail"; // PRODUCTION WEBHOOK FOR N8N
const emailPayload = {
  from_email: "verwaltung@topgun-security.de",
  from_name: "Topgun Security Logistik-Team",
  to: "bilalxhadzic@gmail.com",
  subject: "Effektiver Diebstahlschutz für Ihr Logistikzentrum in Köln",
  html: html,
  type: "cold_mail",
  campaign_name: "logistik_koeln_test",
  lead_id: "test-id-123",
  unsubscribe_link: "https://topgun-security.de/api/unsubscribe?email=info@topgun.gmbh"
};

async function sendTestMail() {
  console.log("Sending test payload to n8n (" + n8nWebhookUrl + ")...");
  
  try {
    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailPayload)
    });

    if (response.ok) {
      console.log("✅ Success! n8n received the data.");
      const text = await response.text();
      console.log("Response:", text);
    } else {
      console.error("❌ Failed. n8n returned status:", response.status);
      const text = await response.text();
      console.error("Error details:", text);
    }
  } catch (error) {
    console.error("❌ Network error connecting to n8n:", error.message);
  }
}

sendTestMail();
