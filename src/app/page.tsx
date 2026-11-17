"use client";

import React, { useState } from "react";
import { RoyalInvitationIntro } from "@/components/invitation/RoyalInvitationIntro";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { HeroSection } from "@/components/home/HeroSection";
import { TraditionalInvitation } from "@/components/invitation/TraditionalInvitation";
import { WeddingCountdown } from "@/components/countdown/WeddingCountdown";
import { WeddingEventTimeline } from "@/components/events/WeddingEventTimeline";
import { CoupleStory } from "@/components/story/CoupleStory";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { VenueSection } from "@/components/venue/VenueSection";
import { FinalInvitation } from "@/components/home/FinalInvitation";
import { Footer } from "@/components/common/Footer";
import { MusicPlayer } from "@/components/audio/MusicPlayer";

export default function WeddingPage() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#F7F0E3] selection:bg-[#A84B40] selection:text-[#FAF6EE]">
      {/* 1. Full-screen Royal Envelope Opening Experience */}
      <RoyalInvitationIntro
        isOpen={isInvitationOpened}
        onOpen={() => setIsInvitationOpened(true)}
      />

      {/* 2. Floating Minimal Navigation */}
      <FloatingNav />

      {/* 3. Cinematic Hero Section */}
      <HeroSection />

      {/* 4. Traditional Invitation Section (सप्रेम आमंत्रण) */}
      <TraditionalInvitation />

      {/* 5. Countdown to Forever */}
      <WeddingCountdown />

      {/* 6. Wedding Celebrations Timeline (All 5 functions) */}
      <WeddingEventTimeline />

      {/* 7. Our Story */}
      <CoupleStory />

      {/* 8. Photo Gallery */}
      <PhotoGallery />

      {/* 9. Venue & Destination (Sardarshahr, Rajasthan) */}
      <VenueSection />

      {/* 10. Final Closing Blessing */}
      <FinalInvitation />

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating Royal Music Experience */}
      <MusicPlayer autoStartTrigger={isInvitationOpened} />
    </main>
  );
}
