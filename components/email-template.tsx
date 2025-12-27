import * as React from 'react';

interface EmailTemplateProps {
  type: 'contact' | 'partner' | 'campaign' | 'funnel';
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
  };

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1a1a1a' }}>
      <h1 style={{ color: '#000000' }}>{titleMap[type]}</h1>
      <hr style={{ borderColor: '#eaeaea', margin: '20px 0' }} />
      
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
        {Object.entries(data).map(([key, value]) => (
          <div key={key} style={{ marginBottom: '10px' }}>
            <strong style={{ textTransform: 'uppercase', fontSize: '12px', color: '#666' }}>
              {key}:
            </strong>
            <div style={{ marginTop: '5px', whiteSpace: 'pre-wrap' }}>
              {String(value)}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#888' }}>
        Gesendet von Topgun Security Website
      </div>
    </div>
  );
};
