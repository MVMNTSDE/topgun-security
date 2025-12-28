"use client";

import { useState } from "react";
import Button from "./Button";
import { sendEmail } from "@/app/actions/send-email";

export default function PartnerContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "Errichter",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData();
    data.append("type", "partner");
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const result = await sendEmail(data);

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", type: "Errichter", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        alert("Fehler beim Senden: " + result.message);
        setStatus("idle");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      alert("Ein unerwarteter Fehler ist aufgetreten.");
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 shadow-lg border border-gray-100 rounded-xl">
      <div className="space-y-1 mb-6">
         <h3 className="text-xl font-bold text-gray-900">Partner werden</h3>
         <p className="text-gray-500 text-sm">Lassen Sie uns Synergien finden. Direkt und unkompliziert.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="p_name" className="text-sm font-medium text-gray-700">Ansprechpartner</label>
          <input
            id="p_name"
            type="text"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all placeholder:text-gray-400"
            placeholder="Name, Vorname"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="p_email" className="text-sm font-medium text-gray-700">E-Mail Adresse</label>
          <input
            id="p_email"
            type="email"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all placeholder:text-gray-400"
            placeholder="partner@firma.de"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="p_company" className="text-sm font-medium text-gray-700">Unternehmen</label>
          <input
            id="p_company"
            type="text"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all placeholder:text-gray-400"
            placeholder="Firmenname"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="p_type" className="text-sm font-medium text-gray-700">Partner-Typ</label>
          <select
            id="p_type"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all appearance-none cursor-pointer text-gray-700"
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

      <div className="space-y-2">
        <label htmlFor="p_message" className="text-sm font-medium text-gray-700">Nachricht / Idee</label>
        <textarea
          id="p_message"
          rows={4}
          className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all resize-none placeholder:text-gray-400"
          placeholder="Wie können wir zusammenarbeiten?"
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
          {status === "submitting" ? "Anfrage wird gesendet..." : status === "success" ? "Erfolgreich gesendet!" : "Partneranfrage senden"}
        </Button>
      </div>
    </form>
  );
}
