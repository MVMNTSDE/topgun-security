"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Baubewachung",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-xl border border-border shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground/60 ml-1">Ansprechpartner / Name</label>
          <input
            id="name"
            type="text"
            required
            className="w-full bg-muted/50 border border-border p-4 rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
            placeholder="Max Mustermann"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground/60 ml-1">E-Mail Adresse</label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-muted/50 border border-border p-4 rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
            placeholder="beispiel@unternehmen.de"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-foreground/60 ml-1">Gewünschte Dienstleistung</label>
        <select
          id="service"
          className="w-full bg-muted/50 border border-border p-4 rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all appearance-none cursor-pointer"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          title="Dienstleistung auswählen"
        >
          <option value="Doorman">Doorman / Empfangsdienst</option>
          <option value="Objektschutz">Objektschutz</option>
          <option value="Baubewachung">Baubewachung</option>
          <option value="Revierdienst">Revier- & Kontrollgänge</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground/60 ml-1">Nachricht / Anliegen</label>
        <textarea
          id="message"
          rows={5}
          className="w-full bg-muted/50 border border-border p-4 rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
          placeholder="Wie können wir Ihnen helfen?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="pt-4">
        <Button type="submit" size="lg" className="w-full text-base font-bold uppercase tracking-widest">
          Anfrage absenden
        </Button>
      </div>
    </form>
  );
}
