
import * as React from 'react';

interface UserConfirmationTemplateProps {
  type: 'contact' | 'partner' | 'campaign' | 'funnel';
  name?: string;
  offerCode?: string;
}

export const UserConfirmationTemplate: React.FC<UserConfirmationTemplateProps> = ({
  type,
  name,
  offerCode = "TOPGUN30"
}) => {
  const isCampaign = type === 'campaign' || type === 'funnel';
  
  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#1a1a1a', maxWidth: '600px', lineHeight: '1.6' }}>
      <div style={{ borderBottom: '4px solid #F59E0B', paddingBottom: '30px', marginBottom: '30px' }}>
        <img 
            src="https://topgun-security.de/images/logo-full.png" 
            alt="Topgun Security" 
            style={{ height: 'auto', width: '200px', marginBottom: '20px', display: 'block' }} 
        />
        <h1 style={{ color: '#111', margin: '0', fontSize: '24px', letterSpacing: '-0.5px' }}>
            {isCampaign ? 'Ihr Sicherheits-Code ist da!' : 'Danke für Ihre Anfrage'}
        </h1>
      </div>
      
      <div style={{ padding: '0 10px' }}>
        <p style={{ fontSize: '16px', color: '#374151' }}>
          Hallo {name || 'neuer Partner'},
        </p>
        
        {isCampaign ? (
            <>
                <p>Vielen Dank für Ihr Interesse an einer Sicherheitsanalyse.</p>
                <div style={{ background: '#F59E0B', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center', margin: '30px 0' }}>
                    <span style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>Ihr Aktionscode</span>
                    <span style={{ display: 'block', fontSize: '32px', fontWeight: 'bold' }}>{offerCode}</span>
                </div>
                <p>Ein Sicherheitsberater wird sich in Kürze bei Ihnen melden, um die Details zu besprechen und Ihren Rabatt einzulösen.</p>
            </>
        ) : (
            <p>
                Wir haben Ihre Nachricht erhalten. Unser Team prüft Ihre Angaben und meldet sich innerhalb von 24 Stunden bei Ihnen.
            </p>
        )}
        
        <p style={{ marginTop: '40px', color: '#6B7280', fontSize: '14px' }}>
          Mit freundlichen Grüßen,<br />
          <strong>Ihr Topgun Security Team</strong>
        </p>
      </div>
      
      <div style={{ marginTop: '40px', fontSize: '12px', color: '#9ca3af', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        TOPGUN SECURITY GMBH. KÖLN | BONN | DÜSSELDORF | LEVERKUSEN | NRW
      </div>
    </div>
  );
};
