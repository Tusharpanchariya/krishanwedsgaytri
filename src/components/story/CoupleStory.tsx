"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { RoyalDivider } from "../common/RoyalOrnaments";
import { Heart } from "lucide-react";

export function CoupleStory() {
  const { loveStory } = weddingData;

  return (
    <section id="our-story" className="relative py-24 px-4 sm:px-6 bg-[#FAF6EE] subtle-parchment-bg overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E9D8BD]/60 border border-gold/40 text-gold-dark text-xs font-cinzel tracking-[0.25em] font-bold mb-3"
          >
            <Heart className="w-3.5 h-3.5 text-vermilion fill-vermilion" />
            <span>{loveStory.sectionHeading}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl text-vermilion-deep font-bold leading-tight"
          >
            &ldquo;{loveStory.subheading}&rdquo;
          </motion.h2>

          <RoyalDivider className="my-6" />

          <p className="font-serif italic text-base sm:text-lg text-[#713C43] max-w-xl mx-auto font-normal">
            {loveStory.quote}
          </p>
        </div>

        {/* Story Chapters (Asymmetric Editorial Layout) */}
        <div className="space-y-20">
          {loveStory.chapters.map((chapter, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={chapter.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-14`}
              >
                {/* Image Container with Royal Frame */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF6EE] ring-2 ring-gold/40">
                    <Image
                      src={chapter.image}
                      alt={chapter.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Corner ornamental tag */}
                  <div className="absolute -bottom-3 -right-3 sm:bottom-4 sm:right-4 bg-[#FAF6EE] px-4 py-2 rounded-xl shadow-lg border border-gold/40 text-center">
                    <span className="font-cinzel text-xs font-bold text-vermilion tracking-widest block">
                      {chapter.dateLabel}
                    </span>
                  </div>
                </div>

                {/* Narrative Text Container */}
                <div className="w-full md:w-1/2 text-left space-y-4 px-2 sm:px-6">
                  <div className="flex items-center gap-2 text-gold font-cinzel text-xs tracking-[0.25em] font-semibold">
                    <span>CHAPTER 0{index + 1}</span>
                    <span className="h-[1px] w-8 bg-gold/50" />
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#41171D] font-bold">
                    {chapter.title}
                  </h3>

                  <p className="font-hindi text-lg text-vermilion font-medium">
                    {chapter.hindiTitle}
                  </p>

                  <p className="font-sans text-sm sm:text-base text-[#57252C] leading-relaxed">
                    {chapter.narrative}
                  </p>

                  <div className="pt-2">
                    <span className="inline-block h-[1px] w-20 bg-gradient-to-r from-gold to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

