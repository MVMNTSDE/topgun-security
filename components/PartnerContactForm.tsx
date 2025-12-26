"use client";

import { useState } from "react";
import Button from "./Button";

export default function PartnerContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "Errichter",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    // console.log("Partner Inquiry submitted:", formData);
    alert("Vielen Dank für Ihre Anfrage. Wir melden uns umgehend bei Ihnen.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 shadow-lg border border-primary/5 rounded-lg">
      <div className="space-y-2 mb-8">
         <h3 className="text-2xl font-black text-primary uppercase">Partner werden</h3>
         <p className="text-gray-500 text-sm">Lassen Sie uns Synergien finden. Direkt und unkompliziert.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="p_name" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-1">Ansprechpartner</label>
          <input
            id="p_name"
            type="text"
            required
            className="w-full bg-muted border border-primary/5 p-4 text-sm focus:border-accent focus:outline-none transition-all placeholder:text-primary/20"
            placeholder="Name, Vorname"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="p_email" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-1">E-Mail Adresse</label>
          <input
            id="p_email"
            type="email"
            required
            className="w-full bg-muted border border-primary/5 p-4 text-sm focus:border-accent focus:outline-none transition-all placeholder:text-primary/20"
            placeholder="partner@firma.de"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="p_company" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-1">Unternehmen</label>
          <input
            id="p_company"
            type="text"
            required
            className="w-full bg-muted border border-primary/5 p-4 text-sm focus:border-accent focus:outline-none transition-all placeholder:text-primary/20"
            placeholder="Firmenname"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="p_type" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-1">Partner-Typ</label>
          <select
            id="p_type"
            className="w-full bg-muted border border-primary/5 p-4 text-sm focus:border-accent focus:outline-none transition-all appearance-none cursor-pointer text-primary"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="Errichter">Errichter / Techniker</option>
            <option value="Hausverwaltung">Hausverwaltung</option>
            <option value="Handwerk">Handwerk / Notdienst</option>
            <option value="Andere">Sonstige Kooperation</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="p_message" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-1">Nachricht / Idee</label>
        <textarea
          id="p_message"
          rows={4}
          className="w-full bg-muted border border-primary/5 p-4 text-sm focus:border-accent focus:outline-none transition-all resize-none placeholder:text-primary/20"
          placeholder="Wie können wir zusammenarbeiten?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="pt-4">
        <Button type="submit" size="lg" className="w-full text-xs font-black uppercase tracking-[0.4em] bg-primary! hover:bg-accent! transition-colors duration-500 py-6">
          Anfrage Absenden
        </Button>
      </div>
    </form>
  );
}
