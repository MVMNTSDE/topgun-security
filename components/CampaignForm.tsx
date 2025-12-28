'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { sendEmail } from '@/app/actions/send-email';
import { Zap, Check, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';

export function CampaignForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    code: 'TOPGUN30', // Pre-filled
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const data = new FormData();
      data.append('type', 'campaign');
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));

      const result = await sendEmail(data);

      if (result.success) {
        setStatus('success');
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-gray-900 border border-green-500/30 p-8 rounded-2xl text-center animate-in fade-in zoom-in duration-500 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
          <Check className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tight">Code aktiviert!</h3>
        <p className="text-gray-400 mb-8 max-w-sm mx-auto text-lg">
          Ihr 30% Start-Rabatt ist für 48h reserviert. Wir melden uns umgehend zur Bestätigung.
        </p>
        <div className="flex justify-center">
            <span className="text-xs font-bold text-green-500 uppercase tracking-widest border border-green-500/30 px-4 py-2 rounded-full bg-green-500/10">
                Priorität: Hoch
            </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-500/20 transition-all duration-1000" />

      <div className="flex items-center justify-between mb-8 relative z-10">
        <div>
            <div className="flex items-center gap-2 text-amber-500 mb-2">
                <ShieldCheck size={20} />
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Neukunden-Initiative</span>
            </div>
            <h3 className="text-3xl font-black text-white tracking-tight uppercase">
                Sicherheits-Check
            </h3>
        </div>
        <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
             <span className="text-xs font-mono text-gray-400 block mb-0.5">CODE</span>
             <span className="text-lg font-bold text-amber-500 tracking-widest font-mono">TG30</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div className="space-y-4">
            <div className="relative">
                <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
                <label className="absolute left-4 top-4 text-gray-500 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-amber-500 pointer-events-none">
                    Firmenname
                </label>
            </div>

            <div className="relative">
                <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
                 <label className="absolute left-4 top-4 text-gray-500 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-amber-500 pointer-events-none">
                    Ihr Name
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                    <label className="absolute left-4 top-4 text-gray-500 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-amber-500 pointer-events-none">
                        E-Mail
                    </label>
                </div>
                <div className="relative">
                    <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                    <label className="absolute left-4 top-4 text-gray-500 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-amber-500 pointer-events-none">
                        Telefon (Nicht Pflicht)
                    </label>
                </div>
            </div>
        </div>

        {errorMessage && (
          <div className="bg-red-500/10 text-red-500 text-sm p-3 rounded-lg flex items-center gap-2 border border-red-500/20">
            <AlertCircle className="w-4 h-4" />
            {errorMessage}
          </div>
        )}

        <Button 
            type="submit" 
            fullWidth 
            disabled={status === 'submitting'}
            className="bg-amber-500 hover:bg-amber-400 text-black font-black text-lg py-4 border-none shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-0.5"
        >
            {status === 'submitting' ? (
                <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5 animate-pulse" /> Verarbeite...
                </span>
            ) : (
                <span className="flex items-center justify-center gap-2">
                    CODE EINLÖSEN <ArrowRight className="w-5 h-5 ml-1" />
                </span>
            )}
        </Button>
        
        <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest mt-4">
            *Limitiert auf Geschäftskunden in NRW.
        </p>
      </form>
    </div>
  );
}
