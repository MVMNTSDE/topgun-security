"use client";

import { useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { sendEmail } from "@/app/actions/send-email";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const questions = [
  {
    id: "purpose",
    question: "Welchen Sicherheitsbedarf haben Sie aktuell?",
    options: [
      { id: "objekt", label: "Objektschutz & Werkschutz", icon: "🏢" },
      { id: "event", label: "Veranstaltungsschutz", icon: "🎉" },
      { id: "retail", label: "Einzelhandel / Detektive", icon: "🛍️" },
      { id: "personal", label: "Personenschutz / Doorman", icon: "vip" },
      { id: "asyl", label: "Asyl & Notunterkünfte", icon: "🏠" },
      { id: "revier", label: "Revierfahrten / Patrouille", icon: "🚓" },
    ]
  },
  {
    id: "scale",
    question: "Wie groß ist der zu sichernde Bereich / Umfang?",
    options: [
      { id: "small", label: "Einzelobjekt / < 500m²" },
      { id: "medium", label: "Mittelstand / 500-2000m²" },
      { id: "large", label: "Industriekomplex / > 2000m²" },
      { id: "multi", label: "Mehrere Standorte" },
    ]
  },
  {
    id: "timeline",
    question: "Wann soll der Einsatz beginnen?",
    options: [
      { id: "asap", label: "Sofort (Notfall)" },
      { id: "month", label: "Innerhalb 1 Monat" },
      { id: "quarter", label: "Nächstes Quartal" },
      { id: "planning", label: "Noch in Planung" },
    ]
  }
];

export default function CampaignQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    if (step < questions.length - 1) {
      setTimeout(() => setStep(s => s + 1), 300);
    } else {
      setTimeout(() => setIsCompleted(true), 300);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData();
    data.append("type", "campaign");
    data.append("email", email);
    data.append("quiz_answers", JSON.stringify(answers));
    
    try {
      const result = await sendEmail(data);

      if (result.success) {
        setStatus("success");
        alert("Vielen Dank! Ihr Code: TOPGUN30 wurde an " + email + " gesendet. Wir melden uns in Kürze.");
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
    <section id="campaign" className="bg-primary py-32 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-primary to-primary pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 corp-reveal">
            <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-4 block">
              Neukunden-Initiative 2025
            </span>
            <h2 className="text-white text-4xl md:text-5xl mb-6">
              Sicherheits-Check & <br className="hidden md:block"/> 
              <span className="text-accent">30% Start-Rabatt</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Beantworten Sie 3 kurze Fragen zu Ihrem Bedarf. Sie erhalten sofort eine unverbindliche Ersteinschätzung und unseren exklusiven Business-Rabattcode für die ersten 3 Monate.
            </p>
          </div>

          {/* Quiz Card */}
          <div className="bg-white rounded-sm p-8 md:p-12 shadow-2xl border-t-4 border-accent relative min-h-[400px] flex flex-col justify-center transition-all duration-500">
            
            {!isCompleted ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Progress */}
                <div className="flex gap-2 mb-8 justify-center">
                  {questions.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "h-1 w-12 rounded-full transition-colors duration-300",
                        idx <= step ? "bg-accent" : "bg-primary/10"
                      )}
                    />
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-primary text-center mb-10">
                  {questions[step].question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[step].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(questions[step].id, option.id)}
                      className="group p-6 border border-primary/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 text-left flex items-center justify-between"
                    >
                      <span className="font-bold text-primary group-hover:text-accent transition-colors">
                        {option.label}
                      </span>
                      {answers[questions[step].id] === option.id && (
                        <Check className="w-5 h-5 text-accent" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-3xl font-black text-primary uppercase mb-4">
                  Qualifizierung Erfolgreich
                </h3>
                <p className="text-corporate-body mb-8">
                  Basierend auf Ihren Angaben haben wir Kapazitäten für Ihr Projekt reserviert. Sichern Sie sich jetzt Ihr Angebot.
                </p>

                <div className="bg-primary/5 p-8 rounded-sm mb-8 inline-block w-full max-w-md mx-auto">
                  <span className="block text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">Ihr Rabatt-Code</span>
                  <code className="text-4xl font-black text-accent tracking-widest">TOPGUN30</code>
                  <p className="text-xs text-primary/40 mt-2">Gültig für Neukunden bei Abschluss eines 3-Monats-Vertrags.</p>
                </div>

                <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto relative">
                   <div className="flex gap-2">
                     <input 
                       type="email" 
                       required 
                       placeholder="Ihre geschäftliche E-Mail" 
                       className="flex-1 bg-white border border-primary/20 px-6 py-4 focus:outline-none focus:border-accent font-medium text-primary placeholder:text-primary/30"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                     />
                     <button 
                       type="submit" 
                       className="btn-primary whitespace-nowrap px-8! disabled:opacity-50 disabled:cursor-not-allowed"
                       disabled={status === "submitting" || status === "success"}
                     >
                       {status === "submitting" ? "..." : <ArrowRight className="w-5 h-5" />}
                     </button>
                   </div>
                   <p className="text-[10px] text-primary/40 mt-4">
                     Mit dem Absenden stimmen Sie zu, dass Topgun Security Sie kontaktieren darf. Ihre Daten sind sicher.
                   </p>
                </form>
              </div>
            )}

            {/* Back Button */}
            {!isCompleted && step > 0 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="absolute bottom-8 left-8 text-xs font-bold text-primary/30 hover:text-accent uppercase tracking-widest transition-colors"
              >
                ← Zurück
              </button>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
