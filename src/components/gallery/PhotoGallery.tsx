"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { RoyalDivider } from "../common/RoyalOrnaments";
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

export function PhotoGallery() {
  const { gallery } = weddingData;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 bg-[#F7F0E3] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E9D8BD] border border-gold/40 text-gold-dark text-xs font-cinzel tracking-[0.25em] font-bold mb-3"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>MOMENTS OF TOGETHERNESS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl text-vermilion-deep font-bold tracking-wide"
          >
            The Royal Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-hindi text-base sm:text-lg text-[#713C43] mt-2 font-medium"
          >
            मधुर स्मृतियां एवं प्रेम के अनमोल क्षण
          </motion.p>

          <RoyalDivider className="my-6" />

          <p className="font-serif italic text-sm sm:text-base text-[#57252C] max-w-lg mx-auto">
            Capturing the serenity, traditional grace, and genuine joy of Krishan and Gayatri as they unite in holy matrimony.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#FAF6EE] shadow-xl border-2 border-gold/30 hover:border-gold transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B1F]/90 via-[#2D1B1F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#FAF6EE]">
                  <div className="flex items-center gap-2 text-gold-light text-xs font-cinzel tracking-widest font-semibold mb-1">
                    <ZoomIn className="w-4 h-4 text-gold" />
                    <span>VIEW FULL PHOTO</span>
                  </div>
                  <h4 className="font-serif text-lg text-white font-semibold">{item.caption}</h4>
                  <p className="font-hindi text-sm text-beige-heritage/90 font-medium mt-0.5">
                    {item.hindiCaption}
                  </p>
                </div>
              </div>

              {/* Bottom Label visible by default */}
              <div className="p-4 bg-[#FAF6EE] border-t border-gold/20 text-center">
                <p className="font-serif text-sm font-semibold text-[#41171D]">{item.caption}</p>
                <p className="font-hindi text-xs text-gold-dark mt-0.5">{item.hindiCaption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-screen Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close photo viewer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 sm:left-8 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 sm:right-8 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Image & Caption */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[70vh] rounded-xl overflow-hidden shadow-2xl border-2 border-gold/40">
                  <Image
                    src={gallery[selectedImageIndex].src}
                    alt={gallery[selectedImageIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="mt-4 text-center text-white">
                  <h3 className="font-serif text-xl sm:text-2xl text-gold-shimmer font-bold">
                    {gallery[selectedImageIndex].caption}
                  </h3>
                  <p className="font-hindi text-base text-beige-heritage mt-1">
                    {gallery[selectedImageIndex].hindiCaption}
                  </p>
                  <span className="font-cinzel text-xs text-white/50 tracking-widest mt-2 block">
                    {selectedImageIndex + 1} OF {gallery.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

