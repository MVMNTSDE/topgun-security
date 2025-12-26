"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "Real Estate",
    service: "Doorman",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Inquiry submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest md:tracking-[0.3em] text-primary/40 ml-1">Ansprechpartner</label>
          <input
            id="name"
            type="text"
            required
            className="w-full bg-muted border border-primary/5 p-5 text-sm focus:border-accent focus:outline-none transition-all placeholder:text-primary/20"
            placeholder="Name, Vorname"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest md:tracking-[0.3em] text-primary/40 ml-1">Digitaler Kontakt</label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-muted border border-primary/5 p-5 text-sm focus:border-accent focus:outline-none transition-all placeholder:text-primary/20"
            placeholder="email@unternehmen.de"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest md:tracking-[0.3em] text-primary/40 ml-1">GmbH / AG / Körperschaft</label>
          <input
            id="company"
            type="text"
            required
            className="w-full bg-muted border border-primary/5 p-5 text-sm focus:border-accent focus:outline-none transition-all placeholder:text-primary/20"
            placeholder="Firmenname"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="industry" className="text-[10px] font-black uppercase tracking-widest md:tracking-[0.3em] text-primary/40 ml-1">Wirtschaftssektor</label>
          <select
            id="industry"
            className="w-full bg-muted border border-primary/5 p-5 text-sm focus:border-accent focus:outline-none transition-all appearance-none cursor-pointer text-primary"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            title="Branche auswählen"
          >
            <option value="Real Estate">Immobilien / Asset Management</option>
            <option value="Construction">Bauträger / Bauwesen</option>
            <option value="Industry">Industrie / Logistik</option>
            <option value="Hotel">Hotellerie & Hospitality</option>
            <option value="Retail">Einzelhandel / High-End</option>
            <option value="Other">Sonstige Institution</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="service" className="text-[10px] font-black uppercase tracking-widest md:tracking-[0.3em] text-primary/40 ml-1">Gewünschtes Mandat</label>
        <select
          id="service"
          className="w-full bg-muted border border-primary/5 p-5 text-sm focus:border-accent focus:outline-none transition-all appearance-none cursor-pointer text-primary"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          title="Dienstleistung auswählen"
        >
          <option value="Doorman">Doorman / Empfangsdienst</option>
          <option value="Baustellenbewachung">Baustellenbewachung</option>
          <option value="Kaufhausdetektive">Kaufhausdetektive</option>
          <option value="Pfortendienst">Pfortendienst</option>
          <option value="Revierkontrollen">Revierkontrollen</option>
        </select>
      </div>

      <div className="space-y-3">
        <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest md:tracking-[0.3em] text-primary/40 ml-1">Anforderungsprofil / Nachricht</label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-muted border border-primary/5 p-5 text-sm focus:border-accent focus:outline-none transition-all resize-none placeholder:text-primary/20"
          placeholder="Beschreiben Sie Ihre Anforderungen..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="pt-4">
        <Button type="submit" size="lg" className="w-full text-xs font-black uppercase tracking-[0.4em] bg-primary! hover:bg-accent! transition-colors duration-500 py-6">
          Mandatsanfrage Senden
        </Button>
      </div>
    </form>
  );
}
