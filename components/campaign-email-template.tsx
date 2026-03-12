
import * as React from 'react';

interface CampaignEmailTemplateProps {
  name?: string;
  salutation?: string;
  company: string;
  unsubscribeLink?: string;
  content?: string;
  trackingPixelUrl?: string;
}

export const CampaignEmailTemplate: React.FC<CampaignEmailTemplateProps> = ({
  name,
  salutation,
  company,
  unsubscribeLink,
  content,
  trackingPixelUrl
}) => {
  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#1a1a1a', maxWidth: '600px', lineHeight: '1.6' }}>
      {/* Header */}
      <div style={{ borderBottom: '4px solid #F59E0B', paddingBottom: '30px', marginBottom: '30px' }}>
        <img 
            src="https://topgun-security.de/images/logo-full.png" 
            alt="Topgun Security GmbH" 
            style={{ height: 'auto', width: '200px', marginBottom: '20px', display: 'block' }} 
        />
        <h1 style={{ color: '#111', margin: '0', fontSize: '24px', letterSpacing: '-0.5px' }}>
            Sicherheit für {company || 'Ihr Geschäft'}
        </h1>
      </div>
      
      {/* Content */}
      <div style={{ padding: '0 10px' }}>
        <p style={{ fontSize: '16px', color: '#374151' }}>
          {salutation || `Hallo${name ? ' ' + name : ''},`}
        </p>
        
        {content ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
            <>
                <p>
                    Als Inhaber eines Unternehmens in Köln wissen Sie: <strong>Sicherheit ist planbar.</strong>
                </p>
                
                <p>
                    Topgun Security GmbH ist Ihr lokaler Partner für effektiven Objektschutz, Veranstaltungsdienste und Doorman-Services – diskret, professionell und zuverlässig. 
                    Wir stellen sicher, dass Ihre Abläufe reibungslos und verlustfrei funktionieren.
                </p>

                <p>
                    Minimieren Sie Ihre Risiken und schützen Sie Ihre Unternehmenswerte effektiv.
                    Lassen Sie uns in einem kurzen, unverbindlichen Telefonat prüfen, wie wir Ihre Standorte optimal absichern können.
                    <strong>Antworten Sie auf diese Nachricht</strong> oder rufen Sie uns direkt an.
                </p>
            </>
        )}
        
        <p style={{ marginTop: '40px', color: '#6B7280', fontSize: '14px' }}>
          Mit freundlichen Grüßen,<br />
          <strong>Hüseyin Simsek</strong><br />
          Betriebsleiter, Topgun Security GmbH
        </p>
      </div>
      
      {/* Footer & DSGVO */}
      <div style={{ marginTop: '40px', fontSize: '12px', color: '#9ca3af', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'justify' }}>
        <p>
            <strong>TOPGUN SECURITY GMBH</strong><br/>
            KÖLN | BONN | DÜSSELDORF | LEVERKUSEN<br/>
            📍 Hohenzollernring 57, 50672 Köln<br/>
            📞 +49 (0) 221 / 123 456 78<br/>
            <a href="https://topgun-security.de/imprint" style={{ color: '#9ca3af', textDecoration: 'underline' }}>Impressum</a> | <a href="https://topgun-security.de/privacy" style={{ color: '#9ca3af', textDecoration: 'underline' }}>Datenschutz</a>
        </p>
        <p>
            <a href="https://topgun-security.de" style={{ color: '#F59E0B', textDecoration: 'none' }}>www.topgun-security.de</a>
        </p>
        <p style={{ marginTop: '20px', fontSize: '11px', lineHeight: '1.5' }}>
            <strong>Transparenzinformation gemäß Art. 14 DSGVO:</strong><br/>
            Sie erhalten diese B2B-Informationsmail, weil wir aufgrund der inhaltlichen Ausrichtung Ihres Unternehmens davon ausgehen, dass unsere Dienstleistungen für Sie von berechtigtem wirtschaftlichen Interesse sind.<br/> 
            Wir verarbeiten Ihre öffentlich zugänglichen Kontaktdaten auf Basis des berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO zur Geschäftsanbahnung und Direktwerbung im B2B-Kontext.<br/>
            <br/>
            Wenn Sie keine weiteren Nachrichten von uns erhalten möchten, können Sie dieser Verarbeitung jederzeit formlos per Antworten-Mail widersprechen oder <a href={unsubscribeLink || "#"} style={{ color: '#ef4444', fontWeight: 'bold', textDecoration: 'underline' }}>hier klicken, um sich sofort abzumelden</a>.
        </p>
      </div>
      
      {/* Tracking Pixel */}
      {trackingPixelUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={trackingPixelUrl} alt="" width="1" height="1" style={{ display: 'none' }} />
      )}
    </div>
  );
};
