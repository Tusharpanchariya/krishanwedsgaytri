"use client";

import React from "react";
import { motion } from "framer-motion";
import { WeddingEvent } from "@/data/weddingData";
import { Clock, Calendar, Sparkles } from "lucide-react";
import { KalashMotif, ShehnaiMotif, MandapMotif } from "../common/RoyalOrnaments";

interface EventCardProps {
  event: WeddingEvent;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const isEven = index % 2 === 0;

  const renderMotif = () => {
    switch (event.visualTheme.motif) {
      case "shehnai":
        return <ShehnaiMotif className="w-8 h-8 text-vermilion" />;
      case "kalash":
        return <KalashMotif className="w-8 h-8 text-vermilion" />;
      case "mandap":
        return <MandapMotif className="w-10 h-10 text-vermilion" />;
      case "marigold":
      case "feast":
      default:
        return (
          <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center font-hindi text-sm font-bold text-vermilion bg-[#FAF6EE]">
            {index + 1}
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
        isEven ? "md:flex-row-reverse" : ""
      } mb-12 last:mb-0`}
    >
      {/* Central Timeline Milestone Icon (Hidden on mobile, visible on desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-[#FAF6EE] border-2 border-gold items-center justify-center shadow-md">
        <span className="font-cinzel text-xs font-bold text-vermilion">
          0{index + 1}
        </span>
      </div>

      {/* Main Content Card */}
      <div className={`w-full md:w-[calc(50%-40px)] ${isEven ? "md:text-right" : "md:text-left"}`}>
        <div
          className={`relative rounded-2xl p-6 sm:p-8 parchment-texture shadow-lg transition-all duration-300 hover:shadow-2xl ${
            event.isMainEvent
              ? "rajasthani-card-border bg-[#FFFDF9] ring-2 ring-gold/50"
              : "border border-gold/40 bg-[#FAF6EE]"
          }`}
          style={{
            borderLeft: !isEven && !event.isMainEvent ? `5px solid ${event.visualTheme.accentColor}` : undefined,
            borderRight: isEven && !event.isMainEvent ? `5px solid ${event.visualTheme.accentColor}` : undefined,
          }}
        >
          {/* Main Event Badge */}
          {event.isMainEvent && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vermilion text-gold-shimmer font-cinzel text-[11px] font-bold tracking-widest uppercase mb-3 shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>Sacred Wedding Ritual</span>
            </div>
          )}

          {/* Event Header */}
          <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
            <div className="p-2 rounded-lg bg-[#E9D8BD]/40 border border-gold/30">
              {renderMotif()}
            </div>
            <div>
              <span className="font-cinzel text-xs tracking-widest text-gold-dark font-semibold">
                EVENT 0{index + 1}
              </span>
              <h3 className="font-hindi text-2xl sm:text-3xl font-bold text-vermilion-deep">
                {event.hindiTitle}
              </h3>
            </div>
          </div>

          {/* English Label */}
          <h4 className="font-cinzel text-sm sm:text-base font-semibold text-[#713C43] tracking-wide mb-3">
            {event.englishLabel}
          </h4>

          {/* Date & Time Indicators (Strictly NO weekdays!) */}
          <div
            className={`flex flex-wrap items-center gap-3 my-4 py-2.5 px-4 rounded-xl bg-[#E9D8BD]/30 border border-gold/20 text-xs sm:text-sm font-medium ${
              isEven ? "md:justify-end" : "md:justify-start"
            }`}
          >
            <div className="flex items-center gap-1.5 text-[#41171D]">
              <Calendar className="w-4 h-4 text-vermilion" />
              <span>{event.date}</span>
            </div>
            <span className="text-gold">|</span>
            <div className="flex items-center gap-1.5 text-vermilion-deep font-semibold">
              <Clock className="w-4 h-4 text-vermilion" />
              <span className="font-hindi">{event.time}</span>
            </div>
          </div>

          {/* Descriptions */}
          <p className="text-xs sm:text-sm text-[#57252C] leading-relaxed mb-2 font-normal">
            {event.description}
          </p>

          {event.hindiDescription && (
            <p className="font-hindi text-xs sm:text-sm text-gold-dark/90 leading-relaxed font-medium">
              {event.hindiDescription}
            </p>
          )}
        </div>
      </div>

      {/* Spacer for desktop alignment */}
      <div className="hidden md:block w-[calc(50%-40px)]" />
    </motion.div>
  );
}

