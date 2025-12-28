
import { MandateRequestForm } from '@/components/MandateRequestForm';
import { Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mandatsanfrage | Topgun Security',
  description: 'Offizielle Mandatsanfrage für Sicherheitsdienstleistungen. Priorisierte Bearbeitung für Unternehmen und Institutionen.',
};

export default function MandatePage() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-900 to-slate-900 z-0" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-3xl mx-auto mb-16 text-center text-white">
                <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl mb-6">
                    <Shield className="w-8 h-8 text-amber-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                    Mandatsanfrage
                </h1>
                <p className="text-lg text-gray-300 max-w-xl mx-auto">
                    Offizieller Kanal für Sicherheitsanforderungen von Unternehmen, Behörden und Institutionen. Ihre Anfrage wird priorisiert behandelt.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <MandateRequestForm />
            </div>

            <div className="max-w-3xl mx-auto mt-12 text-center">
                 <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Topgun Security GmbH • Köln & Düsseldorf
                 </p>
            </div>
        </div>
    </main>
  );
}
