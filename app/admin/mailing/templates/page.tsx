import { getTemplates } from "./actions";
import TemplateManager from "./TemplateManager";

export default async function TemplatesPage() {
  const templates = await getTemplates();

  return (
    <div className="max-w-6xl mx-auto py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Coldmail Templates</h1>
        <p className="text-gray-500 mt-2">
          Definiere und optimiere deine E-Mail Vorlagen. Beachte die rechtlichen Anforderungen: B2B-Bezug, personalisiert, mit Opt-Out.
        </p>
      </header>

      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-8 text-amber-800 text-sm">
        <strong>Rechtlicher Hinweis (B2B Coldmail):</strong> 
        Nutze diese Vorlagen nur für personalisierte Kontaktaufnahmen mit klarem sachlichen Bezug zum Business des Empfängers. 
        Der Abmelde-Link {'{{unsubscribeLink}}'} wird automatisch angehängt, falls nicht vorhanden.
      </div>

      <TemplateManager initialTemplates={templates} />
    </div>
  );
}
