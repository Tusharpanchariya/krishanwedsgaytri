import React from "react";

export function GaneshIcon({ className = "w-12 h-12 text-vermilion" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Traditional stylized Lord Ganesha icon */}
      <circle cx="50" cy="22" r="5" fill="currentColor" opacity="0.9" />
      <path
        d="M 50 12 C 45 12 40 17 40 24 C 40 33 46 39 46 45 C 46 54 41 57 37 60 C 35 62 34 65 35 68 C 36 71 39 73 42 73 C 48 73 54 67 54 58 C 54 50 49 46 49 39 C 49 34 52 30 55 27 C 57 25 58 20 56 16 C 55 13 52 12 50 12 Z"
        fill="currentColor"
      />
      {/* Ear Left */}
      <path
        d="M 40 28 C 32 26 23 32 23 42 C 23 49 30 55 38 52 C 39 52 40 48 40 45 C 33 46 29 42 29 37 C 29 33 34 30 40 31 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Ear Right */}
      <path
        d="M 60 28 C 68 26 77 32 77 42 C 77 49 70 55 62 52 C 61 52 60 48 60 45 C 67 46 71 42 71 37 C 71 33 66 30 60 31 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Crown / Mukut */}
      <path
        d="M 46 14 L 50 4 L 54 14 Z"
        fill="currentColor"
      />
      {/* Modak bowl right */}
      <circle cx="66" cy="62" r="4.5" fill="currentColor" />
      {/* Tilak */}
      <path
        d="M 48 18 Q 50 14 52 18 Q 50 22 48 18 Z"
        fill="#B58C52"
      />
      <circle cx="50" cy="24" r="1.5" fill="#A84B40" />
    </svg>
  );
}

export function RoyalDivider({ className = "my-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold to-gold/40" />
      <div className="w-2 h-2 rotate-45 border border-gold bg-vermilion" />
      <div className="flex items-center gap-1">
        <span className="text-gold text-xs">❖</span>
        <span className="text-vermilion text-sm font-serif">ॐ</span>
        <span className="text-gold text-xs">❖</span>
      </div>
      <div className="w-2 h-2 rotate-45 border border-gold bg-vermilion" />
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-gold to-gold/40" />
    </div>
  );
}

export function CornerFlourish({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const rotation = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <div className={`absolute w-8 h-8 pointer-events-none text-gold ${rotation}`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
        <path d="M 2 38 L 2 2 L 38 2" stroke="currentColor" strokeWidth="2" />
        <path d="M 6 34 L 6 6 L 34 6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        <path d="M 2 2 L 18 18" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function KalashMotif({ className = "w-8 h-8 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className}>
      <path d="M 32 6 C 30 10 24 14 20 18 C 24 18 28 20 32 20 C 36 20 40 18 44 18 C 40 14 34 10 32 6 Z" opacity="0.9" />
      <circle cx="32" cy="10" r="4" fill="#A84B40" />
      <path d="M 22 22 L 42 22 L 40 26 L 24 26 Z" />
      <path d="M 23 27 C 16 33 16 46 22 52 C 26 56 38 56 42 52 C 48 46 48 33 41 27 Z" />
      <rect x="26" y="54" width="12" height="4" rx="1" />
    </svg>
  );
}

export function ShehnaiMotif({ className = "w-8 h-8 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className}>
      <path d="M 12 50 L 46 16 L 50 18 L 14 54 Z" />
      <path d="M 44 14 C 44 14 54 10 56 16 C 58 22 50 26 50 26 L 44 14 Z" opacity="0.9" />
      <circle cx="20" cy="42" r="2" fill="#FAF6EE" />
      <circle cx="28" cy="34" r="2" fill="#FAF6EE" />
      <circle cx="36" cy="26" r="2" fill="#FAF6EE" />
    </svg>
  );
}

export function MandapMotif({ className = "w-8 h-8 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className}>
      <path d="M 32 6 L 12 20 L 52 20 Z" />
      <rect x="16" y="20" width="4" height="34" />
      <rect x="44" y="20" width="4" height="34" />
      <rect x="10" y="54" width="44" height="4" rx="1" />
      <path d="M 32 34 C 29 40 35 44 32 50 C 36 46 36 38 32 34 Z" fill="#A84B40" />
    </svg>
  );
}

