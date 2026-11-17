"use client";

import React from "react";
import { weddingData } from "@/data/weddingData";
import { GaneshIcon } from "./RoyalOrnaments";

export function Footer() {
  const { couple } = weddingData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 bg-[#200F13] text-[#E9D8BD] border-t border-gold/30 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex justify-center">
          <GaneshIcon className="w-8 h-8 text-gold opacity-80" />
        </div>

        <p className="font-hindi text-sm sm:text-base text-gold-shimmer font-semibold">
          ॥ श्री गणेशाय नमः ॥
        </p>

        <h3 className="font-serif text-2xl text-[#FAF6EE] tracking-wider font-semibold">
          {couple.groom.name} & {couple.bride.name}
        </h3>

        <p className="font-cinzel text-xs text-gold tracking-[0.25em]">
          {couple.weddingDate.toUpperCase()} • {couple.traditionalTitle}
        </p>

        <div className="pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-beige-heritage/60 gap-4">
          <p>© 2026 Kishan & Gayatri Royal Wedding Celebration. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-gold text-xs font-cinzel tracking-widest transition-colors uppercase"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

