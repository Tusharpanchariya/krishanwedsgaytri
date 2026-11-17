"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { EventCard } from "./EventCard";
import { RoyalDivider } from "../common/RoyalOrnaments";
import { CalendarDays } from "lucide-react";

export function WeddingEventTimeline() {
  const { events } = weddingData;

  return (
    <section id="celebrations" className="relative py-24 px-4 sm:px-6 bg-[#F7F0E3] overflow-hidden">
      {/* Background Rajasthani Palace Silhouette / Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(#713C43_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E9D8BD] border border-gold/40 text-gold-dark text-xs font-cinzel tracking-[0.25em] font-bold mb-3"
          >
            <CalendarDays className="w-3.5 h-3.5" />
            <span>WEDDING ITINERARY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl text-vermilion-deep font-bold tracking-wide"
          >
            The Royal Celebrations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-hindi text-base sm:text-lg text-[#713C43] mt-2 font-medium"
          >
            मांगलिक उत्सव एवं शुभ संस्कारों की समय सारणी
          </motion.p>

          <RoyalDivider className="my-6" />

          <p className="font-serif italic text-sm sm:text-base text-[#57252C] max-w-lg mx-auto">
            Each ritual carries ancestral traditions, family blessings, and eternal joy. We invite you to be part of every sacred milestone.
          </p>
        </div>

        {/* Timeline Line (Desktop vertical centerline) */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-gold to-transparent" />

          {/* List of 5 confirmed events */}
          <div className="relative z-10">
            {events.map((event, idx) => (
              <EventCard key={event.id} event={event} index={idx} />
            ))}
          </div>
        </div>

        {/* Note at bottom of timeline */}
        <div className="mt-14 text-center">
          <div className="inline-block px-6 py-3 rounded-xl bg-[#FAF6EE] border border-gold/40 shadow-sm text-xs sm:text-sm text-[#713C43] font-hindi">
            <span className="text-vermilion font-bold">॥ सर्व मंगल मांगल्ये शिवे सर्वार्थ साधिके ॥</span>
            <span className="block mt-1 font-serif text-[11px] text-gold-dark tracking-wider uppercase font-semibold">
              All rituals will be solemnized as per sacred Vedic traditions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

