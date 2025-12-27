"use client";

import { useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { sendEmail } from "@/app/actions/send-email";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type FunnelQuestion = {
  id: string;
  question: string;
  options: {
    id: string;
    label: string;
    icon?: string;
  }[];
};

interface GenericFunnelProps {
  industry: string;
  title: string;
  description: string;
  questions: FunnelQuestion[];
  offerCode: string;
  offerTitle: string;
  offerDescription: string;
}

export default function GenericFunnel({
  industry,
  title,
  description,
  questions,
  offerCode,
  offerTitle,
  offerDescription,
}: GenericFunnelProps) {
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
    data.append("type", "funnel");
    data.append("industry", industry);
    data.append("email", email);
    data.append("quiz_answers", JSON.stringify(answers));
    
    try {
      const result = await sendEmail(data);

      if (result.success) {
        setStatus("success");
        alert(`Vielen Dank! Ihr Code: ${offerCode} wurde an ${email} gesendet. Wir melden uns in Kürze.`);
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
    <section className="bg-white border-t border-primary/5 py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-4 block">
              {industry} Security Check
            </span>
            <h2 className="text-primary text-3xl md:text-4xl font-black mb-6">
              {title}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {description}
            </p>
          </div>

          {/* Quiz Card */}
          <div className="bg-gray-50 rounded-sm p-8 md:p-12 border border-primary/5 relative min-h-[400px] flex flex-col justify-center transition-all duration-500">
            
            {!isCompleted ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Progress */}
                <div className="flex gap-2 mb-8 justify-center">
                  {questions.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "h-1 w-12 rounded-full transition-colors duration-300",
                        idx <= step ? "bg-accent" : "bg-gray-200"
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
                      className="group p-6 border border-primary/5 bg-white hover:border-accent hover:shadow-md transition-all duration-300 text-left flex items-center justify-between"
                    >
                      <span className="font-bold text-primary group-hover:text-accent transition-colors">
                        {option.icon && <span className="mr-2 inline-block">{option.icon}</span>}
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
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-black text-primary uppercase mb-4">
                  {offerTitle}
                </h3>
                <p className="text-gray-600 mb-8">
                  {offerDescription}
                </p>

                <div className="bg-white border border-primary/5 p-8 rounded-sm mb-8 inline-block w-full max-w-md mx-auto shadow-sm">
                  <span className="block text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">Ihr Vorteilscode</span>
                  <code className="text-3xl font-black text-accent tracking-widest">{offerCode}</code>
                </div>

                <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto relative">
                   <div className="flex gap-2">
                     <input 
                       type="email" 
                       required 
                       placeholder="Geschäftliche E-Mail" 
                       className="flex-1 bg-white border border-primary/10 px-6 py-4 focus:outline-none focus:border-accent font-medium text-primary placeholder:text-primary/30"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                     />
                     <button 
                       type="submit" 
                       className="btn-primary whitespace-nowrap px-6! disabled:opacity-50 disabled:cursor-not-allowed"
                       disabled={status === "submitting" || status === "success"}
                     >
                       {status === "submitting" ? "..." : <ArrowRight className="w-5 h-5" />}
                     </button>
                   </div>
                   <p className="text-[10px] text-primary/40 mt-4">
                     Mit dem Absenden stimmen Sie der Kontaktaufnahme zu.
                   </p>
                </form>
              </div>
            )}

            {/* Back Button */}
            {!isCompleted && step > 0 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="absolute bottom-6 left-8 text-xs font-bold text-gray-400 hover:text-accent uppercase tracking-widest transition-colors"
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
