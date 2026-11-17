"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  hindiLabel: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", hindiLabel: "मुख्य" },
  { id: "traditional-invitation", label: "Invitation", hindiLabel: "आमंत्रण" },
  { id: "our-story", label: "Our Story", hindiLabel: "प्रेम गाथा" },
  { id: "celebrations", label: "Celebrations", hindiLabel: "उत्सव" },
  { id: "gallery", label: "Gallery", hindiLabel: "तस्वीरें" },
  { id: "venue", label: "Venue", hindiLabel: "स्थान" },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Determine active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Floating Navigation Bar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-40 hidden md:block"
      >
        <div
          className={`px-5 py-2 rounded-full flex items-center gap-1 transition-all duration-300 border ${
            isScrolled
              ? "bg-[#2D1B1F]/90 text-[#FAF6EE] border-gold/40 shadow-2xl backdrop-blur-md"
              : "bg-[#2D1B1F]/60 text-[#FAF6EE] border-gold/30 shadow-lg backdrop-blur-sm"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-cinzel tracking-wider font-semibold transition-all ${
                  isActive
                    ? "text-[#FAF6EE] font-bold"
                    : "text-[#E9D8BD]/80 hover:text-[#FAF6EE] hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-vermilion to-gold/80 shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Top Pill & Menu Button */}
      <div className="fixed top-4 left-4 right-4 z-40 flex items-center justify-between md:hidden">
        {/* Left Mini Badge */}
        <div className="px-3.5 py-1.5 rounded-full bg-[#2D1B1F]/90 border border-gold/40 text-gold-shimmer font-serif text-sm font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>K & G</span>
        </div>

        {/* Right Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2.5 rounded-full bg-[#2D1B1F]/90 border border-gold/50 text-[#FAF6EE] shadow-lg backdrop-blur-md transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-30 bg-[#200F13]/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center md:hidden"
          >
            <div className="mb-6">
              <span className="font-hindi text-gold text-lg font-bold">॥ श्री गणेशाय नमः ॥</span>
              <h3 className="font-serif text-2xl text-white font-bold mt-1">KRISHAN & GAYATRI</h3>
              <p className="font-cinzel text-xs text-gold/80 tracking-widest mt-0.5">22 NOVEMBER 2026</p>
            </div>

            <div className="space-y-3 w-full max-w-xs">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full py-3 px-4 rounded-xl font-cinzel text-sm tracking-widest font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-vermilion text-white border border-gold"
                        : "bg-white/5 text-[#E9D8BD] hover:bg-white/10"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-hindi text-xs opacity-70">{item.hindiLabel}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

