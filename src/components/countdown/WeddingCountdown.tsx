"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { RoyalDivider } from "../common/RoyalOrnaments";
import { Hourglass, Sparkles } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      // Calculate target time in Asia/Kolkata timezone
      const targetDate = new Date(weddingData.couple.isoWeddingDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days, hindi: "दिन" },
    { label: "HOURS", value: timeLeft.hours, hindi: "घंटे" },
    { label: "MINUTES", value: timeLeft.minutes, hindi: "मिनट" },
    { label: "SECONDS", value: timeLeft.seconds, hindi: "सेकंड" },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#3B1E24] text-[#FAF6EE] overflow-hidden">
      {/* Subtle royal background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#B58C52_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-vermilion/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold/40 text-gold-light text-xs font-cinzel tracking-[0.25em] font-semibold mb-3 backdrop-blur-md"
        >
          <Hourglass className="w-3.5 h-3.5 text-gold" />
          <span>AWAITING THE SACRED UNION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-5xl text-[#FAF6EE] font-bold tracking-wider"
        >
          THE COUNTDOWN TO FOREVER
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-cinzel text-xs sm:text-sm text-gold tracking-[0.25em] mt-2 font-semibold"
        >
          {weddingData.couple.weddingDate.toUpperCase()} • ASIA / KOLKATA
        </motion.p>

        <RoyalDivider className="my-6" />

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto my-8">
          {timeUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-2xl p-5 sm:p-6 bg-[#2B151A]/80 border border-gold/40 shadow-xl backdrop-blur-md flex flex-col items-center justify-center group hover:border-gold transition-colors"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              
              <span className="font-serif text-4xl sm:text-6xl font-bold text-gold-shimmer tabular-nums">
                {mounted ? String(unit.value).padStart(2, "0") : "00"}
              </span>

              <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-[#E9D8BD] font-semibold mt-2">
                {unit.label}
              </span>

              <span className="font-hindi text-[11px] text-gold/70 mt-0.5 font-medium">
                {unit.hindi}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Auspicious Muhurat Notice Note */}
        <div className="max-w-xl mx-auto px-4 py-3 rounded-xl bg-black/30 border border-gold/20 text-xs text-[#E9D8BD]/80">
          <p className="flex items-center justify-center gap-1.5 font-hindi">
            <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span>
              शुभ पाणिग्रहण संस्कार: <strong className="text-gold font-bold">रात्रि शुभलग्नानुसार</strong> (Shubh Lagna)
            </span>
          </p>
          <p className="text-[11px] text-white/50 font-serif italic mt-0.5">
            Counting down to the auspicious wedding date. Exact ritual timings will unfold in the night under Vedic planetary alignment.
          </p>
        </div>
      </div>
    </section>
  );
}

