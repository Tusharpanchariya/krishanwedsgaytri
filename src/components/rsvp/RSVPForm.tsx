"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { RoyalDivider } from "../common/RoyalOrnaments";
import { CheckCircle2, AlertCircle, HeartHandshake, Loader2, Send } from "lucide-react";
import confetti from "canvas-confetti";

export function RSVPForm() {
  const { events } = weddingData;

  const [formData, setFormData] = useState({
    guest_name: "",
    family_name: "",
    mobile_number: "",
    number_of_guests: 2,
    attendance_status: "accept" as "accept" | "decline",
    events_attending: events.map((e) => e.hindiTitle), // Default all checked
    personal_message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAttendanceChange = (status: "accept" | "decline") => {
    setFormData((prev) => ({
      ...prev,
      attendance_status: status,
      events_attending: status === "accept" ? events.map((e) => e.hindiTitle) : [],
    }));
  };

  const handleEventToggle = (eventTitle: string) => {
    setFormData((prev) => {
      const exists = prev.events_attending.includes(eventTitle);
      const updated = exists
        ? prev.events_attending.filter((t) => t !== eventTitle)
        : [...prev.events_attending, eventTitle];
      return { ...prev, events_attending: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Frontend validation
    if (!formData.guest_name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.family_name.trim()) {
      setErrorMessage("Please enter your family name.");
      return;
    }
    if (!formData.mobile_number.trim() || formData.mobile_number.trim().length < 8) {
      setErrorMessage("Please enter a valid mobile number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSubmissionStatus("success");
      setSuccessMessage(data.message || "Thank you! Your RSVP has been joyfully recorded.");

      if (formData.attendance_status === "accept") {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#D4AF37", "#A84B40", "#B58C52", "#E9D8BD"],
        });
      }
    } catch (err: any) {
      setSubmissionStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="relative py-24 px-4 sm:px-6 bg-[#FAF6EE] subtle-parchment-bg overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E9D8BD] border border-gold/40 text-gold-dark text-xs font-cinzel tracking-[0.25em] font-bold mb-3"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-vermilion" />
            <span>KINDLY RESPOND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-vermilion-deep font-bold leading-tight"
          >
            &ldquo;YOUR PRESENCE WOULD MAKE OUR CELEBRATION COMPLETE.&rdquo;
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-hindi text-base sm:text-lg text-[#713C43] mt-2 font-medium"
          >
            कृपया अपनी उपस्थिति की सूचना देकर हमें अनुगृहीत करें
          </motion.p>

          <RoyalDivider className="my-6" />
        </div>

        {/* RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-6 sm:p-10 md:p-12 bg-[#FFFDF9] parchment-texture rajasthani-card-border shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {submissionStatus === "success" ? (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <h3 className="font-serif text-3xl text-vermilion-deep font-bold">
                  {formData.attendance_status === "accept"
                    ? "Welcome to Our Royal Celebration!"
                    : "Warm Regards & Blessings Received"}
                </h3>

                <p className="font-hindi text-lg text-gold-dark font-medium">
                  {successMessage}
                </p>

                <p className="font-sans text-sm text-[#57252C] max-w-md mx-auto">
                  {formData.attendance_status === "accept"
                    ? `We are delighted to celebrate with ${formData.guest_name} and family.`
                    : `We will miss your physical presence, but keep your heartfelt blessings in our hearts.`}
                </p>

                <button
                  onClick={() => setSubmissionStatus("idle")}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#E9D8BD] text-[#713C43] font-cinzel text-xs tracking-widest font-bold border border-gold/50 hover:bg-[#FAF6EE] transition-all"
                >
                  SUBMIT ANOTHER RESPONSE
                </button>
              </motion.div>
            ) : (
              <form key="rsvp-form" onSubmit={handleSubmit} className="space-y-6">
                {/* Attendance Decision Buttons */}
                <div className="space-y-2">
                  <label className="block font-cinzel text-xs tracking-widest text-[#713C43] font-bold text-center">
                    WILL YOU BE JOINING US?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <button
                      type="button"
                      onClick={() => handleAttendanceChange("accept")}
                      className={`py-3.5 px-4 rounded-xl font-cinzel text-xs tracking-wider font-bold transition-all border flex items-center justify-center gap-2 ${
                        formData.attendance_status === "accept"
                          ? "bg-vermilion text-[#FAF6EE] border-gold shadow-md scale-[1.02]"
                          : "bg-[#E9D8BD]/40 text-[#713C43] border-gold/40 hover:bg-[#E9D8BD]"
                      }`}
                    >
                      <span>JOYFULLY ACCEPT</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAttendanceChange("decline")}
                      className={`py-3.5 px-4 rounded-xl font-cinzel text-xs tracking-wider font-bold transition-all border flex items-center justify-center gap-2 ${
                        formData.attendance_status === "decline"
                          ? "bg-[#713C43] text-[#FAF6EE] border-gold shadow-md scale-[1.02]"
                          : "bg-[#E9D8BD]/40 text-[#713C43] border-gold/40 hover:bg-[#E9D8BD]"
                      }`}
                    >
                      <span>REGRETFULLY DECLINE</span>
                    </button>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cinzel text-xs tracking-widest text-[#713C43] font-bold mb-1.5">
                      GUEST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rameshwar Sharma"
                      value={formData.guest_name}
                      onChange={(e) => setFormData({ ...formData, guest_name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gold/40 focus:border-vermilion focus:ring-1 focus:ring-vermilion outline-none text-[#41171D] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-cinzel text-xs tracking-widest text-[#713C43] font-bold mb-1.5">
                      FAMILY / HOUSEHOLD NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sharma Parivaar"
                      value={formData.family_name}
                      onChange={(e) => setFormData({ ...formData, family_name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gold/40 focus:border-vermilion focus:ring-1 focus:ring-vermilion outline-none text-[#41171D] text-sm"
                    />
                  </div>
                </div>

                {/* Mobile & Guest Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cinzel text-xs tracking-widest text-[#713C43] font-bold mb-1.5">
                      MOBILE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.mobile_number}
                      onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gold/40 focus:border-vermilion focus:ring-1 focus:ring-vermilion outline-none text-[#41171D] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-cinzel text-xs tracking-widest text-[#713C43] font-bold mb-1.5">
                      TOTAL NUMBER OF GUESTS
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={20}
                      value={formData.number_of_guests}
                      onChange={(e) => setFormData({ ...formData, number_of_guests: parseInt(e.target.value) || 1 })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gold/40 focus:border-vermilion focus:ring-1 focus:ring-vermilion outline-none text-[#41171D] text-sm"
                    />
                  </div>
                </div>

                {/* Events Attending Checkboxes (when accepting) */}
                {formData.attendance_status === "accept" && (
                  <div className="pt-2">
                    <label className="block font-cinzel text-xs tracking-widest text-[#713C43] font-bold mb-2">
                      FUNCTIONS YOU WILL ATTEND (CHOOSE ALL THAT APPLY):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {events.map((evt) => {
                        const isChecked = formData.events_attending.includes(evt.hindiTitle);
                        return (
                          <div
                            key={evt.id}
                            onClick={() => handleEventToggle(evt.hindiTitle)}
                            className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                              isChecked
                                ? "bg-[#FAF6EE] border-vermilion text-vermilion-deep font-semibold shadow-sm"
                                : "bg-white border-gold/30 text-gray-600 hover:border-gold"
                            }`}
                          >
                            <div className="text-left">
                              <p className="font-hindi text-sm">{evt.hindiTitle}</p>
                              <p className="font-cinzel text-[10px] text-gold-dark">
                                {evt.englishLabel} ({evt.date.split(" ")[0]} Nov)
                              </p>
                            </div>
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="w-4 h-4 text-vermilion rounded border-gold/50 focus:ring-vermilion"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Personal Message */}
                <div>
                  <label className="block font-cinzel text-xs tracking-widest text-[#713C43] font-bold mb-1.5">
                    WARM BLESSINGS & PERSONAL MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share your love, blessings and wishes for Krishan & Gayatri..."
                    value={formData.personal_message}
                    onChange={(e) => setFormData({ ...formData, personal_message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gold/40 focus:border-vermilion focus:ring-1 focus:ring-vermilion outline-none text-[#41171D] text-sm resize-none"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-vermilion via-[#B58C52] to-vermilion text-[#FAF6EE] font-cinzel text-xs sm:text-sm tracking-[0.25em] font-bold shadow-xl hover:shadow-gold/30 hover:scale-[1.01] active:scale-[0.99] transition-all border border-gold/50 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>RECORDING YOUR RSVP...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>CONFIRM ROYAL RSVP</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

