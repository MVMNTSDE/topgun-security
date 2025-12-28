import * as React from 'react';

interface EmailTemplateProps {
  type: 'contact' | 'partner' | 'campaign' | 'funnel' | 'mandate';
  data: any;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  type,
  data,
}) => {
  const titleMap = {
    contact: 'Neue Kontaktanfrage',
    partner: 'Neue Partneranfrage',
    campaign: 'Neukunden-Kampagne (TOPGUN30)',
    funnel: `Funnel: ${data.industry || 'Allgemein'}`,
    mandate: `MANDATSANFRAGE: ${data.company || 'Unbekannt'}`,
  };

  const keyMap: Record<string, string> = {
    company: 'Firma',
    industry: 'Branche',
    service: 'Dienstleistung',
    message: 'Nachricht',
    phone: 'Telefon',
    email: 'E-Mail',
    name: 'Name',
    source_type: 'Quelle',
    firstName: 'Vorname',
    lastName: 'Nachname',
  };

  // Helper to format keys nicely (Translate if possible, else prettify)
  const formatKey = (key: string) => {
    if (keyMap[key]) return keyMap[key];
    return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // Helper to parse JSON strings (like quiz_answers)
  const formatValue = (key: string, value: any) => {
    if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value, null, 2);
    }
    if (typeof value === 'string' && (value.startsWith('{') || value.startsWith('['))) {
      try {
        const parsed = JSON.parse(value);
        return (
          <div style={{ background: '#ffffff', padding: '10px', borderRadius: '4px', border: '1px solid #eee' }}>
            {Object.entries(parsed).map(([k, v]) => (
              <div key={k} style={{ marginBottom: '5px' }}>
                <span style={{ color: '#888', fontSize: '11px', textTransform: 'uppercase' }}>{formatKey(k)}:</span>
                <br />
                <strong>{String(v)}</strong>
              </div>
            ))}
          </div>
        );
      } catch (e) {
        return value;
      }
    }
    return String(value);
  };

  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#1a1a1a', maxWidth: '600px', lineHeight: '1.5' }}>
      <div style={{ borderBottom: '2px solid #F59E0B', paddingBottom: '20px', marginBottom: '30px' }}>
        <img 
            src="https://topgun-security.de/images/logo-full.png" 
            alt="Topgun Security" 
            style={{ height: 'auto', width: '200px', marginBottom: '20px', display: 'block' }} 
        />
        <h1 style={{ color: '#111', margin: '0', fontSize: '24px', letterSpacing: '-0.5px' }}>{titleMap[type]}</h1>
        <p style={{ color: '#666', margin: '10px 0 0 0', fontSize: '14px' }}>
          Eingegangen am {new Date().toLocaleString('de-DE', { dateStyle: 'full', timeStyle: 'short' })}
        </p>
      </div>
      
      <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
          Details zur Anfrage
        </h2>
        
        {Object.entries(data).map(([key, value]) => {
          if (!value || key === 'type') return null;
          
          let label = key;
          switch(key) {
             case 'name': label = 'Name / Ansprechpartner'; break;
             case 'email': label = 'E-Mail Adresse'; break;
             case 'company': label = 'Firma / Organisation'; break;
             case 'phone': label = 'Telefonnummer'; break;
             case 'industry': label = 'Branche'; break;
             case 'service': label = 'Interesse an'; break;
             case 'message': label = 'Nachricht'; break;
             case 'securityLevel': label = 'Sicherheitsstufe'; break;
             case 'startDate': label = 'Gewünschter Start'; break;
             case 'source_type': label = 'Quelle'; break;
          }

          return (
            <div key={key} style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '4px' }}>
                {label}
              </div>
              <div style={{ fontSize: '15px', color: '#111827', fontWeight: '500' }}>
                {String(value)}
              </div>
            </div>
          );
        })}
      </div>
      
      <div style={{ marginTop: '30px', fontSize: '12px', color: '#9ca3af', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        TOPGUN SECURITY GMBH. KÖLN | BONN | DÜSSELDORF | LEVERKUSEN | NRW
      </div>
    </div>
  );
};
