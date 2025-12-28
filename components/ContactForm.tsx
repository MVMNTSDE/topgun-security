"use client";

import { useState } from "react";
import Button from "./Button";
import { sendEmail } from "@/app/actions/send-email";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "Real Estate",
    service: "Doorman",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData();
    data.append("type", "contact");
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const result = await sendEmail(data);

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", industry: "Real Estate", service: "Doorman", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        alert("Fehler beim Senden: " + result.message);
        setStatus("idle");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      alert("Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="space-y-1 mb-6">
        <h3 className="text-xl font-bold text-gray-900">Kontakt aufnehmen</h3>
        <p className="text-gray-500 text-sm">Wir antworten in der Regel innerhalb von 60 Minuten.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Name / Ansprechpartner</label>
          <input
            id="name"
            type="text"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all placeholder:text-gray-400"
            placeholder="Max Mustermann"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">E-Mail Adresse</label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all placeholder:text-gray-400"
            placeholder="kontakt@firma.de"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-700">Firma / Organisation</label>
          <input
            id="company"
            type="text"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all placeholder:text-gray-400"
            placeholder="Firmenname GmbH"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="industry" className="text-sm font-medium text-gray-700">Branche</label>
          <select
            id="industry"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all appearance-none cursor-pointer text-gray-700"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          >
            <option value="Real Estate">Immobilien / Asset Management</option>
            <option value="Construction">Bauträger / Bauwesen</option>
            <option value="Industry">Industrie / Logistik</option>
            <option value="Hotel">Hotellerie & Hospitality</option>
            <option value="Retail">Einzelhandel / High-End</option>
            <option value="Other">Sonstige / Privat</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-gray-700">Interesse an</label>
        <select
          id="service"
          className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all appearance-none cursor-pointer text-gray-700"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="Doorman">Doorman / Empfang</option>
          <option value="Baustellenbewachung">Baustellenbewachung</option>
          <option value="Kaufhausdetektive">Detektei / Ermittlung</option>
          <option value="Pfortendienst">Pforten- & Revierdienst</option>
          <option value="Objektschutz">Allgemeiner Objektschutz</option>
          <option value="Beratung">Sicherheitsberatung</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Ihre Nachricht</label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all resize-none placeholder:text-gray-400"
          placeholder="Wie können wir Ihnen helfen?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          fullWidth
          disabled={status === "submitting" || status === "success"}
          className="bg-gray-900 border-gray-900 text-white hover:bg-gray-800 py-3 text-sm font-semibold tracking-normal"
        >
          {status === "submitting" ? "Daten werden gesendet..." : status === "success" ? "Erfolgreich gesendet!" : "Nachricht senden"}
        </Button>
      </div>
    </form>
  );
}
