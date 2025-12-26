"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
      <h2 className="text-4xl font-black text-accent mb-4">SYSTEM STATUS: ERROR</h2>
      <p className="text-white/60 mb-8 max-w-md">
        Es ist ein unerwarteter Fehler aufgetreten. Unsere Sicherheitsprotokolle haben das Problem registriert.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-accent text-black font-bold uppercase tracking-widest hover:bg-accent/80 transition-colors"
        >
          Neu laden
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
