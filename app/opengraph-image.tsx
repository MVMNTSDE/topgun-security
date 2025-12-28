import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Topgun Security - Premium Sicherheitsdienst NRW';
export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #111111)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid #F59E0B',
                borderRadius: '50%',
                width: '150px',
                height: '150px',
                marginBottom: '40px',
                color: '#F59E0B',
                fontSize: '80px',
                fontWeight: 'bold',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
            }}
        >
            T
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-2px',
            marginBottom: '20px',
            textTransform: 'uppercase',
          }}
        >
          Topgun Security
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#9CA3AF',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          Premium Protection Services
        </div>
        <div
            style={{
                position: 'absolute',
                bottom: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
            }}
        >
             <div style={{ color: '#F59E0B', fontSize: 20 }}>NRW</div>
             <div style={{ color: '#333', fontSize: 20 }}>|</div>
             <div style={{ color: '#F59E0B', fontSize: 20 }}>KÖLN</div>
             <div style={{ color: '#333', fontSize: 20 }}>|</div>
             <div style={{ color: '#F59E0B', fontSize: 20 }}>DÜSSELDORF</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
