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

  // Helper to format keys nicely
  const formatKey = (key: string) => {
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
        <h1 style={{ color: '#111', margin: '0', fontSize: '24px', letterSpacing: '-0.5px' }}>{titleMap[type]}</h1>
        <p style={{ color: '#666', margin: '10px 0 0 0', fontSize: '14px' }}>
          Eingegangen am {new Date().toLocaleString('de-DE', { dateStyle: 'full', timeStyle: 'short' })}
        </p>
      </div>
      
      <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '2px', color: '#F59E0B', marginTop: '0', marginBottom: '20px' }}>
          Details
        </h2>
        
        {Object.entries(data).map(([key, value]) => (
          <div key={key} style={{ marginBottom: '20px', borderBottom: '1px solid #f0f0f0', paddingBottom: '15px' }}>
            <strong style={{ textTransform: 'uppercase', fontSize: '11px', color: '#6b7280', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>
              {formatKey(key)}
            </strong>
             <div style={{ fontSize: '15px', color: '#111827', whiteSpace: 'pre-wrap' }}>
              {formatValue(key, value)}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '30px', fontSize: '12px', color: '#9ca3af', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        Topgun Security Website &bull; Automatische Benachrichtigung
      </div>
    </div>
  );
};
