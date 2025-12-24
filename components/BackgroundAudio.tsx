"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Note: Most browsers block auto-play without user interaction.
    // The user will need to toggle this on manually the first time.
    if (audioRef.current) {
      audioRef.current.volume = 0.15; // Extremely low, ambient volume
      audioRef.current.loop = true;
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-100 flex items-center gap-4 group">
      <span className="text-[10px] font-black tracking-widest uppercase text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity">
        {isPlaying ? "Ambient On" : "Ambient Off"}
      </span>
      <button
        onClick={toggleAudio}
        className="w-12 h-12 bg-primary border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all duration-500 shadow-2xl"
        title={isPlaying ? "Mute Ambient" : "Unmute Ambient"}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <audio ref={audioRef} src="/melody.mp3" />
      </button>
    </div>
  );
}
