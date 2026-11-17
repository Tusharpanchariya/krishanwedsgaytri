"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { RoyalDivider, GaneshIcon } from "../common/RoyalOrnaments";
import { Sparkles, Heart } from "lucide-react";

export function FinalInvitation() {
  const { finalMessage, couple } = weddingData;

  const scrollToCelebrations = () => {
    const el = document.getElementById("celebrations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-24 px-4 sm:px-6 bg-[#2B151A] text-[#FAF6EE] overflow-hidden">
      {/* Background Image / Palace Sunset with warm lighting */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
        <Image
          src="/images/couple-portrait-2.jpeg"
          alt="Royal Celebration"
          fill
          className="object-cover object-center filter blur-[1px]"
        />
      </div>

      {/* Royal Vignette & Shimmer gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#200F13] via-[#2B151A]/85 to-[#200F13]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,140,82,0.18)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="p-3.5 rounded-full bg-gold/15 border border-gold/40 backdrop-blur-md">
            <GaneshIcon className="w-12 h-12 text-gold-shimmer" />
          </div>
        </motion.div>

        {/* Auspicious Opening */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold uppercase font-semibold mb-3"
        >
          {finalMessage.englishHeading}
        </motion.p>

        {/* Main Emotional Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF6EE] font-normal leading-tight max-w-2xl mx-auto"
        >
          &ldquo;{finalMessage.englishSubheading}&rdquo;
        </motion.h2>

        <RoyalDivider className="my-8" />

        {/* Couple Title & Date */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <h3 className="font-serif text-4xl sm:text-6xl text-gold-shimmer tracking-wider font-semibold">
            {couple.groom.name} & {couple.bride.name}
          </h3>
          <p className="font-cinzel text-sm sm:text-base text-[#E9D8BD] tracking-[0.25em] font-semibold">
            {couple.weddingDate.toUpperCase()}
          </p>
        </motion.div>

        {/* Traditional Hindi Emotional Blessing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-hindi text-lg sm:text-2xl text-gold-light mt-8 max-w-xl mx-auto font-normal leading-relaxed"
        >
          &ldquo;{finalMessage.hindiBlessing}&rdquo;
        </motion.p>

        {/* Fast Scroll to Celebrations Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <button
            onClick={scrollToCelebrations}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-vermilion via-gold to-vermilion text-white font-cinzel text-xs tracking-[0.25em] font-bold shadow-2xl hover:scale-105 transition-all border border-gold/50 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-gold-shimmer" />
            <span>VIEW CELEBRATION SCHEDULE</span>
            <Sparkles className="w-4 h-4 text-gold-shimmer" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

