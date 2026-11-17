"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { GaneshIcon, RoyalDivider, CornerFlourish } from "../common/RoyalOrnaments";

export function TraditionalInvitation() {
  const { traditionalInvitation, couple } = weddingData;

  return (
    <section
      id="traditional-invitation"
      className="relative py-24 px-4 sm:px-6 subtle-parchment-bg overflow-hidden"
    >
      {/* Background Rajasthani Arch & Jharokha motif */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#A84B40_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FAF6EE] rounded-2xl p-6 sm:p-12 md:p-16 shadow-2xl parchment-texture rajasthani-card-border"
        >
          {/* Corner traditional flourishes */}
          <CornerFlourish position="top-left" />
          <CornerFlourish position="top-right" />
          <CornerFlourish position="bottom-left" />
          <CornerFlourish position="bottom-right" />

          {/* Invitation Top Header */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-3"
            >
              <div className="p-3 rounded-full bg-[#E9D8BD]/40 border border-gold/40">
                <GaneshIcon className="w-14 h-14 sm:w-16 sm:h-16 text-vermilion" />
              </div>
            </motion.div>

            <h2 className="font-hindi text-xl sm:text-2xl text-vermilion font-bold tracking-wider">
              {traditionalInvitation.ganeshShloka}
            </h2>

            <div className="my-2">
              <span className="inline-block px-5 py-1 text-sm sm:text-base font-hindi text-gold-dark font-semibold tracking-widest border-b border-t border-gold/40">
                {traditionalInvitation.invitationHeading}
              </span>
            </div>

            <p className="font-hindi text-sm sm:text-base text-[#713C43] mt-4 font-normal max-w-lg mx-auto">
              {traditionalInvitation.blessingText}
            </p>
          </div>

          <RoyalDivider className="my-6" />

          {/* Names in Traditional Hindi Calligraphy */}
          <div className="text-center py-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-hindi text-3xl sm:text-5xl font-bold text-vermilion-deep tracking-wide">
                {couple.groom.titleHindi}
              </h3>
              <p className="font-cinzel text-xs text-gold-dark tracking-[0.2em] font-semibold mt-1">
                ( {couple.groom.name} )
              </p>
            </motion.div>

            <div className="flex items-center justify-center gap-4 my-2">
              <span className="h-[1px] w-12 bg-gold/50" />
              <span className="font-hindi text-lg sm:text-xl text-gold-dark font-semibold">
                {traditionalInvitation.conjunctionHindi}
              </span>
              <span className="h-[1px] w-12 bg-gold/50" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-hindi text-3xl sm:text-5xl font-bold text-vermilion-deep tracking-wide">
                {couple.bride.titleHindi}
              </h3>
              <p className="font-cinzel text-xs text-gold-dark tracking-[0.2em] font-semibold mt-1">
                ( {couple.bride.name} )
              </p>
            </motion.div>

            <div className="pt-4">
              <span className="inline-block px-6 py-2 rounded-full bg-[#E9D8BD]/50 border border-gold/40 font-hindi text-sm sm:text-base text-maroon-royal font-bold tracking-wider">
                {couple.traditionalTitle}
              </span>
            </div>
          </div>

          <RoyalDivider className="my-6" />

          {/* Traditional Hindu Date & Timing (Strictly NO weekdays!) */}
          <div className="text-center bg-[#E9D8BD]/25 rounded-xl p-4 sm:p-6 border border-gold/30">
            <p className="font-hindi text-base sm:text-lg text-vermilion font-bold">
              {couple.traditionalHinduDate}
            </p>
            <p className="font-hindi text-lg sm:text-xl text-[#41171D] font-bold mt-1">
              22 नवम्बर 2026
            </p>
            <div className="mt-3 pt-3 border-t border-gold/20 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-xs sm:text-sm font-hindi text-[#713C43]">
              <span className="font-medium">
                मुख्य संस्कार: <strong className="font-bold text-vermilion">{couple.weddingCeremonyHindi}</strong>
              </span>
              <span className="hidden sm:inline text-gold">❖</span>
              <span className="font-medium">
                शुभ मुहूर्त: <strong className="font-bold text-vermilion">{couple.weddingCeremonyTiming}</strong>
              </span>
            </div>
          </div>

          {/* Traditional Family Invitation Message */}
          <div className="mt-8 text-center px-2 sm:px-6">
            <p className="font-hindi text-base sm:text-lg text-[#57252C] leading-relaxed font-normal">
              &ldquo;{traditionalInvitation.invitationNote}&rdquo;
            </p>
          </div>

          {/* Family details block - preserved editable */}
          {traditionalInvitation.familyDetailsPublished && traditionalInvitation.familyDetails ? (
            <div className="mt-8 pt-6 border-t border-gold/30 text-center font-hindi text-sm text-[#713C43]">
              <p className="font-semibold text-vermilion">
                {traditionalInvitation.familyDetails.paternalGrandparents}
              </p>
              <p className="mt-1">{traditionalInvitation.familyDetails.parents}</p>
              <p className="mt-2 text-xs text-gold-dark font-medium">
                {traditionalInvitation.familyDetails.hostText}
              </p>
            </div>
          ) : (
            <div className="mt-8 pt-4 border-t border-gold/20 text-center">
              <p className="font-hindi text-xs sm:text-sm text-gold-dark font-medium">
                {traditionalInvitation.closingBlessing}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

