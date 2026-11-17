"use client";

import React, { useRef, useEffect } from "react";
import { weddingData } from "@/data/weddingData";

interface MusicPlayerProps {
  autoStartTrigger?: boolean;
}

export function MusicPlayer({ autoStartTrigger }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef<boolean>(false);

  // Play background music automatically when the visitor opens the invitation
  useEffect(() => {
    if (autoStartTrigger && !hasStartedRef.current && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          hasStartedRef.current = true;
        })
        .catch((e) => {
          console.log("Audio autoplay prevented by browser policy:", e);
        });
    }
  }, [autoStartTrigger]);

  return (
    <audio
      ref={audioRef}
      src={weddingData.audio.src}
      preload="auto"
      loop
    />
  );
}
