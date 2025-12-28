'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { sendEmail } from '@/app/actions/send-email';
import { CheckCircle2, AlertCircle, ShieldAlert } from 'lucide-react';

export function MandateRequestForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    service: 'Objektschutz',
    message: '',
    startDate: '',
    securityLevel: 'Standard',
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const data = new FormData();
      data.append('type', 'mandate'); // Special type for Mandates
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));

      const result = await sendEmail(data);

      if (result.success) {
        setStatus('success');
        setFormData({
            company: '',
            name: '',
            email: '',
            phone: '',
            service: 'Objektschutz',
            message: '',
            startDate: '',
            securityLevel: 'Standard',
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50/50 backdrop-blur-sm border border-green-200 p-8 rounded-2xl text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Mandatsanfrage erhalten</h3>
        <p className="text-gray-600 mb-6">
          Vielen Dank. Ihre Mandatsanfrage wurde priorisiert an unsere Einsatzleitung übermittelt.
          <br/>Wir melden uns schnellstmöglich zur Klärung der Details.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-green-700 hover:text-green-800 font-medium text-sm underline underline-offset-4"
        >
          Neue Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/50 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <ShieldAlert className="w-6 h-6 text-amber-500" />
        <h3 className="text-xl font-bold text-gray-900">Offizielle Mandatsanfrage</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
              Unternehmen / Organisation *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-white/80 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
              placeholder="Firmenname"
            />
          </div>
          <div>
            <label htmlFor="contact_person" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
              Ansprechpartner *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/80 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
              placeholder="Vor- und Nachname"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
              E-Mail Adresse *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/80 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
              placeholder="name@firma.de"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
              Rückrufnummer *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/80 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-900"
              placeholder="+49 ..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
              Benötigte Dienstleistung
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-white/80 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none"
            >
              <option value="Objektschutz">Objektschutz / Werkschutz</option>
              <option value="Baustellenbewachung">Baustellenbewachung</option>
              <option value="Detektei">Wirtschaftsdetektei</option>
              <option value="Personenschutz">Personenschutz</option>
              <option value="Event Security">Veranstaltungsschutz</option>
              <option value="Revierdienst">Revierdienst</option>
              <option value="Sonstiges">Individuelle Sicherheitslösung</option>
            </select>
          </div>
          <div>
             <label htmlFor="startDate" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
              Gewünschter Start
            </label>
             <input
              type="text"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full bg-white/80 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
              placeholder="z.B. Sofort, 01.05.2025"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
            Details zum Auftrag / Sicherheitsanforderung
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white/80 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
            placeholder="Beschreiben Sie kurz den Einsatzort, Umfang und besondere Risiken..."
          ></textarea>
        </div>

        {errorMessage && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
            <AlertCircle className="w-4 h-4" />
            {errorMessage}
          </div>
        )}

        <div className="pt-2">
            <Button 
                type="submit" 
                fullWidth 
                disabled={status === 'submitting'}
                className="bg-gray-900 border-gray-900 text-white hover:bg-gray-800"
            >
                {status === 'submitting' ? 'Übermittle Daten...' : 'Mandatsanfrage Absenden'}
            </Button>
            <p className="text-center text-xs text-gray-400 mt-3">
                Ihre Daten werden SSL-verschlüsselt übertragen und vertraulich behandelt.
            </p>
        </div>
      </form>
    </div>
  );
}
