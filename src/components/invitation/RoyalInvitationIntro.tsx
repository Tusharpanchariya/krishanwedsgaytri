"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GaneshIcon, RoyalDivider, CornerFlourish } from "../common/RoyalOrnaments";
import { weddingData } from "@/data/weddingData";
import { Sparkles, Eye } from "lucide-react";
import confetti from "canvas-confetti";

interface RoyalInvitationIntroProps {
  onOpen: () => void;
  isOpen: boolean;
}

export function RoyalInvitationIntro({ onOpen, isOpen }: RoyalInvitationIntroProps) {
  const [phase, setPhase] = useState<"initial" | "opening" | "unfolding" | "entering">("initial");

  const handleOpenInvitation = () => {
    if (phase !== "initial") return;
    setPhase("opening");

    // Launch royal golden petals / confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#A84B40", "#F7F0E3", "#B58C52", "#E9D8BD"],
    });

    setTimeout(() => {
      setPhase("unfolding");
    }, 1200);

    setTimeout(() => {
      setPhase("entering");
      onOpen();
    }, 2800);
  };

  const handleSkip = () => {
    setPhase("entering");
    onOpen();
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="royal-intro-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#2D1B1F] p-4 sm:p-6"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 40%, rgba(168, 75, 64, 0.4) 0%, rgba(45, 27, 31, 0.95) 75%)",
        }}
      >
        {/* Subtle ambient golden dust / glow */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#B58C52_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Skip button for accessibility */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 flex items-center gap-2 text-xs uppercase tracking-widest text-[#E9D8BD]/80 hover:text-[#FAF6EE] bg-black/40 hover:bg-black/60 px-4 py-2 rounded-full border border-gold/40 transition-all backdrop-blur-sm"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Skip Animation</span>
        </button>

        {/* Main 3D Envelope & Card Container */}
        <div className="relative w-full max-w-lg perspective-[1200px] flex flex-col items-center">
          {/* Royal Envelope Body */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{
              scale: phase === "entering" ? 1.8 : 1,
              opacity: phase === "entering" ? 0 : 1,
              y: 0,
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-xl shadow-2xl overflow-visible"
            style={{
              backgroundColor: "#E4D0B5",
              boxShadow: "0 25px 60px -15px rgba(0,0,0,0.8), 0 0 50px rgba(181, 140, 82, 0.25)",
            }}
          >
            {/* Outer Royal Border */}
            <div className="absolute inset-2 border-2 border-[#A84B40] rounded-lg pointer-events-none" />
            <div className="absolute inset-3 border border-gold/60 rounded-md pointer-events-none" />

            <CornerFlourish position="top-left" />
            <CornerFlourish position="top-right" />
            <CornerFlourish position="bottom-left" />
            <CornerFlourish position="bottom-right" />

            {/* Envelope Flap Animation */}
            <motion.div
              initial={false}
              animate={{
                rotateX: phase !== "initial" ? -180 : 0,
                zIndex: phase !== "initial" ? 0 : 30,
              }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
              className="absolute top-0 left-0 right-0 h-40 bg-[#D9BD91] border-b-2 border-gold shadow-md origin-top [clip-path:polygon(0_0,100%_0,50%_100%)] z-20 flex justify-center pt-2"
            >
              <div className="w-10 h-10 rounded-full bg-[#A84B40] border-2 border-gold flex items-center justify-center shadow-lg -translate-y-1">
                <span className="text-gold font-serif text-sm">ॐ</span>
              </div>
            </motion.div>

            {/* Emerging & Unfolding Invitation Card */}
            <motion.div
              initial={{ y: 0, scale: 0.96 }}
              animate={{
                y: phase === "opening" ? -120 : phase === "unfolding" ? -40 : phase === "entering" ? -20 : 0,
                scale: phase === "unfolding" ? 1.05 : 1,
              }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full h-full bg-[#FAF6EE] rounded-lg p-6 sm:p-8 flex flex-col justify-between text-center parchment-texture shadow-xl"
            >
              {/* Card Header */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <GaneshIcon className="w-14 h-14 text-vermilion mb-1 filter drop-shadow-sm" />
                  <p className="font-hindi text-vermilion font-bold text-base sm:text-lg tracking-wide">
                    {weddingData.traditionalInvitation.ganeshShloka}
                  </p>
                  <p className="font-hindi text-gold-dark text-xs sm:text-sm mt-0.5 tracking-wider font-semibold">
                    {weddingData.traditionalInvitation.invitationHeading}
                  </p>
                </motion.div>

                <RoyalDivider className="my-3" />
              </div>

              {/* Names & Traditional Title */}
              <div className="my-auto py-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-cinzel text-xs tracking-[0.25em] text-[#713C43] font-semibold mb-2"
                >
                  {weddingData.couple.traditionalTitle}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="font-serif text-3xl sm:text-4xl tracking-wider text-vermilion-deep font-bold"
                >
                  {weddingData.couple.groom.name}
                </motion.h1>

                <div className="flex items-center justify-center gap-3 my-1">
                  <span className="h-[1px] w-8 bg-gold/50" />
                  <span className="font-serif italic text-gold-dark text-lg">&</span>
                  <span className="h-[1px] w-8 bg-gold/50" />
                </div>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="font-serif text-3xl sm:text-4xl tracking-wider text-vermilion-deep font-bold"
                >
                  {weddingData.couple.bride.name}
                </motion.h1>

                <p className="font-hindi text-gold text-xs sm:text-sm mt-3 font-medium">
                  {weddingData.couple.traditionalHinduDate}
                </p>
                <p className="font-cinzel text-[#713C43] text-xs font-bold tracking-widest mt-0.5">
                  {weddingData.couple.weddingDate.toUpperCase()}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                {phase === "initial" && (
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOpenInvitation}
                    className="relative group w-full py-3.5 px-6 rounded-md bg-gradient-to-r from-[#A84B40] via-[#713C43] to-[#A84B40] text-[#FAF6EE] font-cinzel text-xs sm:text-sm tracking-[0.2em] font-bold shadow-lg shadow-vermilion/30 border border-gold overflow-hidden transition-all"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-light animate-pulse" />
                      OPEN YOUR INVITATION
                      <Sparkles className="w-4 h-4 text-gold-light animate-pulse" />
                    </span>
                  </motion.button>
                )}

                {phase !== "initial" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center py-2 text-xs font-cinzel text-vermilion tracking-widest font-semibold"
                  >
                    <span className="animate-pulse">ENTERING ROYAL PALACE...</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

