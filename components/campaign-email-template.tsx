
import * as React from 'react';

interface CampaignEmailTemplateProps {
  name: string;
  company: string;
  offerCode?: string;
}

export const CampaignEmailTemplate: React.FC<CampaignEmailTemplateProps> = ({
  name,
  company,
  offerCode = "TOPGUN30"
}) => {
  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#1a1a1a', maxWidth: '600px', lineHeight: '1.6' }}>
      {/* Header */}
      <div style={{ borderBottom: '4px solid #F59E0B', paddingBottom: '30px', marginBottom: '30px' }}>
        <img 
            src="https://topgun-security.de/images/logo-full.png" 
            alt="Topgun Security" 
            style={{ height: 'auto', width: '200px', marginBottom: '20px', display: 'block' }} 
        />
        <h1 style={{ color: '#111', margin: '0', fontSize: '24px', letterSpacing: '-0.5px' }}>
            Sicherheit für {company || 'Ihr Geschäft'}
        </h1>
      </div>
      
      {/* Content */}
      <div style={{ padding: '0 10px' }}>
        <p style={{ fontSize: '16px', color: '#374151' }}>
          Hallo {name ? ` ${name}` : ''},
        </p>
        
        <p>
            Als Inhaber eines Souvenir- & Spezialitätengeschäfts in Köln wissen Sie: 
            <strong>Hohe Kundenfrequenz bedeutet auch hohes Risiko.</strong>
        </p>
        
        <p>
            Gerade in belebten Lagen wie der Altstadt oder Dom-Umgebung sind Ladendiebstahl und Vandalismus leider an der Tagesordnung. 
             Topgun Security ist Ihr lokaler Partner für effektiven Objektschutz und Doorman-Services – diskret, professionell und bezahlbar.
        </p>

        {/* Offer Box */}
        <div style={{ background: '#F59E0B', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center', margin: '30px 0' }}>
            <span style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>
                Exklusiver Neukunden-Rabatt
            </span>
            <span style={{ display: 'block', fontSize: '32px', fontWeight: 'bold' }}>{offerCode}</span>
            <span style={{ display: 'block', fontSize: '14px', marginTop: '5px' }}>
                30% auf die erste Sicherheitsanalyse oder den ersten Einsatzmonat.
            </span>
        </div>

        <p>
             Sichern Sie Ihre Waren und sorgen Sie für ein entspanntes Einkaufserlebnis bei Ihren Kunden.
             Antworten Sie einfach auf diese E-Mail oder rufen Sie uns direkt an.
        </p>
        
        <p style={{ marginTop: '40px', color: '#6B7280', fontSize: '14px' }}>
          Mit freundlichen Grüßen,<br />
          <strong>Hüseyin Simsek</strong><br />
          Betriebsleiter, Topgun Security
        </p>
      </div>
      
      {/* Footer */}
      <div style={{ marginTop: '40px', fontSize: '12px', color: '#9ca3af', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <p>
            TOPGUN SECURITY GMBH<br/>
            KÖLN | BONN | DÜSSELDORF | LEVERKUSEN
        </p>
        <p>
            <a href="https://topgun-security.de" style={{ color: '#F59E0B', textDecoration: 'none' }}>www.topgun-security.de</a>
        </p>
      </div>
    </div>
  );
};
