"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { RoyalDivider } from "../common/RoyalOrnaments";
import { MapPin, Navigation, Compass } from "lucide-react";

export function VenueSection() {
  const { venue } = weddingData;

  return (
    <section id="venue" className="relative py-24 px-4 sm:px-6 bg-[#F7F0E3] overflow-hidden">
      {/* Background Rajasthani palace arch subtle motif */}
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(#713C43_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E9D8BD] border border-gold/40 text-gold-dark text-xs font-cinzel tracking-[0.25em] font-bold mb-3"
          >
            <MapPin className="w-3.5 h-3.5 text-vermilion" />
            <span>VENUE & DESTINATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl text-vermilion-deep font-bold tracking-wide"
          >
            {venue.sectionTitle}
          </motion.h2>

          <RoyalDivider className="my-6" />
        </div>

        {/* Venue Information Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-8 sm:p-12 bg-[#FAF6EE] parchment-texture rajasthani-card-border shadow-xl text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-[#E9D8BD]/70 border border-gold/50 flex items-center justify-center mx-auto mb-5 text-vermilion shadow-sm">
            <Compass className="w-8 h-8 text-vermilion animate-pulse-slow" />
          </div>

          {/* Destination Badge */}
          <div className="inline-block px-5 py-1.5 rounded-full bg-vermilion/10 border border-vermilion/30 text-vermilion font-cinzel text-xs tracking-[0.2em] font-bold uppercase mb-4">
            Auspicious Wedding Venue
          </div>

          {/* Primary Venue Heading in Hindi */}
          <h3 className="font-hindi text-3xl sm:text-4xl text-vermilion-deep font-bold mb-1">
            {venue.venueName}
          </h3>

          <p className="font-hindi text-xl sm:text-2xl text-[#713C43] font-semibold mb-2">
            {venue.cityHindi}
          </p>

          <p className="font-cinzel text-sm sm:text-base text-gold-dark font-bold tracking-widest uppercase mb-6">
            {venue.venueNameEnglish}, {venue.cityEnglish}
          </p>

          <div className="h-[1px] w-24 bg-gold/40 mx-auto mb-6" />

          {/* Full Detailed Address Card */}
          <div className="bg-[#E9D8BD]/30 border border-gold/30 rounded-xl p-5 mb-6 text-center space-y-1">
            <span className="font-cinzel text-[11px] tracking-widest text-[#713C43] font-bold block mb-1">
              FULL ADDRESS
            </span>
            <p className="font-hindi text-base sm:text-lg text-[#41171D] font-bold">
              {venue.addressHindi}
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#713C43]">
              {venue.address}
            </p>
          </div>

          {/* Hindi notice */}
          <p className="font-hindi text-sm sm:text-base text-[#41171D] leading-relaxed font-medium mb-2">
            {venue.noticeHindi}
          </p>

          {/* English notice */}
          <p className="font-sans text-xs sm:text-sm text-[#713C43] leading-relaxed mb-8 max-w-lg mx-auto">
            {venue.noticeEnglish}
          </p>

          {/* Google Maps Navigation Button */}
          {venue.googleMapsUrl && (
            <div className="pt-1">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-vermilion via-[#B58C52] to-vermilion text-[#FAF6EE] font-cinzel text-xs tracking-[0.2em] font-bold shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all border border-gold/40"
              >
                <Navigation className="w-4 h-4" />
                <span>OPEN IN GOOGLE MAPS</span>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
