"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { RoyalDivider } from "../common/RoyalOrnaments";
import { ChevronDown, Calendar, Sparkles } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#2D1B1F] text-[#FAF6EE]">
      {/* Background with couple image and royal overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 10, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/couple-portrait-1.jpeg"
            alt="Kishan and Gayatri Royal Wedding"
            fill
            priority
            className="object-cover object-center filter brightness-[0.65] contrast-[1.05]"
          />
        </motion.div>
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B1F] via-[#2D1B1F]/60 to-[#2D1B1F]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(45,27,31,0.85)_100%)]" />
      </div>

      {/* Decorative Rajasthani Arch & Ornaments */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center flex flex-col items-center">
        {/* Auspicious Shloka */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#FAF6EE]/10 border border-gold/40 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          <span className="font-hindi text-gold-shimmer text-sm sm:text-base tracking-widest font-semibold">
            ॥ शुभ विवाह ॥
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
        </motion.div>

        {/* Traditional Auspicious Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-cinzel text-xs sm:text-sm tracking-[0.35em] text-gold uppercase mb-3"
        >
          {weddingData.couple.traditionalTitle}
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative my-2"
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-wider text-[#FAF6EE] font-normal drop-shadow-md">
            <span className="text-gold-shimmer font-semibold">{weddingData.couple.groom.name}</span>
            <span className="block sm:inline font-serif italic text-gold px-3 text-3xl sm:text-5xl">&</span>
            <span className="text-gold-shimmer font-semibold">{weddingData.couple.bride.name}</span>
          </h1>
          <p className="font-hindi text-base sm:text-xl text-beige-heritage/90 mt-2 font-medium">
            ( {weddingData.couple.groom.hindiName} संग {weddingData.couple.bride.hindiName} )
          </p>
        </motion.div>

        <RoyalDivider className="my-6" />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-serif italic text-lg sm:text-2xl text-[#E9D8BD] max-w-xl mx-auto tracking-wide font-light"
        >
          &ldquo;{weddingData.couple.tagline}&rdquo;
        </motion.p>

        {/* Wedding Date (Without weekdays!) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col items-center mt-6 gap-1"
        >
          <div className="flex items-center gap-2 text-gold-light font-cinzel text-sm sm:text-base tracking-[0.25em] font-semibold">
            <Calendar className="w-4 h-4 text-gold" />
            <span>{weddingData.couple.weddingDate.toUpperCase()}</span>
          </div>
          <span className="font-hindi text-xs sm:text-sm text-beige-heritage/80">
            {weddingData.couple.traditionalHinduDate}
          </span>
        </motion.div>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo("traditional-invitation")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-vermilion via-[#B58C52] to-vermilion text-[#FAF6EE] font-cinzel text-xs tracking-[0.2em] font-bold shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all border border-gold/40"
          >
            EXPLORE THE CELEBRATION
          </button>
          <button
            onClick={() => scrollTo("celebrations")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-[#E9D8BD] hover:text-[#FAF6EE] font-cinzel text-xs tracking-[0.2em] font-bold border border-gold/40 hover:border-gold hover:scale-105 transition-all backdrop-blur-md"
          >
            VIEW WEDDING SCHEDULE
          </button>
        </motion.div>
      </div>

      {/* Gentle Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("traditional-invitation")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-gold/80 hover:text-gold flex flex-col items-center gap-1 cursor-pointer transition-colors"
        aria-label="Scroll to invitation details"
      >
        <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase opacity-75">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}

