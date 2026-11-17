# Kishan & Gayatri — The Royal Wedding Invitation
### ॥ श्री गणेशाय नमः ॥ शुभ परिणय सूत्र बंधन

An extraordinary, cinematic, and culturally authentic digital wedding invitation web application for **Kishan & Gayatri**, crafted in the regal aesthetic of Rajasthani royalty (70% Rajasthani royal heritage, 20% Western luxury editorial, 10% contemporary interactive design).

---

## 🌟 Highlights & Features

1. **Cinematic Opening Experience (`RoyalInvitationIntro`)**:
   - Royal antique envelope with traditional Lord Ganesha illustration and authentic Hindi calligraphy.
   - 3D interactive unfolding animation with golden light, auspicious rose/gold petals, and transition into the royal palace.
   - Accessible skip option.

2. **Full-Screen Cinematic Hero Section (`HeroSection`)**:
   - Royal couple photography featuring the actual couple (Kishan & Gayatri) from `images/`.
   - Subtle zoom, romantic parallax, traditional Rajasthani arches, and call-to-action buttons.

3. **Traditional Printed Invitation Recreation (`TraditionalInvitation`)**:
   - Recreates the emotional soul of the physical wedding card with antique parchment textures (`#D9BD91`, `#FAF6EE`), vermilion red calligraphy (`#A84B40`), antique gold accents (`#B58C52`), and deep royal maroon (`#713C43`).
   - "॥ श्री गणेशाय नमः ॥", "सप्रेम आमंत्रण", "कार्तिक सुदी 13, संवत 2083", "22 नवम्बर 2026" (No weekdays displayed).

4. **Complete 5-Event Celebrations Timeline (`WeddingEventTimeline`)**:
   - **Event 01 — हल्दी बान**: 20 November 2026, प्रातः 9:15 बजे (Haldi Baan Ceremony)
   - **Event 02 — प्रीतिभोज**: 21 November 2026, शाम 7:15 बजे से (Preetibhoj / Wedding Feast)
   - **Event 03 — महिला संगीत**: 21 November 2026, रात्रि में (Mahila Sangeet)
   - **Event 04 — कुआं पूजन**: 22 November 2026, शाम 6:15 बजे (Kuan Poojan)
   - **Event 05 — पाणिग्रहण संस्कार**: 22 November 2026, रात्रि शुभलग्नानुसार (Sacred Wedding Ceremony with featured visual prominence)

5. **Countdown to Forever (`WeddingCountdown`)**:
   - Counts down days, hours, minutes, and seconds to 22 November 2026 (Asia/Kolkata timezone).
   - Clear note respecting the sacred tradition: ritual timings unfold at night per Vedic *shubh lagna*.

6. **Editorial Couple Story (`CoupleStory`)**:
   - Beautiful editorial chapters highlighting the bond of Kishan & Gayatri with real photographs and respectful narrative.

7. **Photo Gallery & Lightbox (`PhotoGallery`)**:
   - Editorial masonry cards with full-screen lightbox modal and smooth image transitions.

8. **Royal Floating Music Experience (`MusicPlayer`)**:
   - Plays the user-provided classical fusion audio (`Night Changes - Indian Classical Fusion` with Bansuri, Santoor, Sitar, and strings).
   - Audio smoothly triggers upon clicking "OPEN YOUR INVITATION".
   - Play, Pause, Mute, Unmute, and animated visualizer bars.

9. **Venue & Destination (`VenueSection`)**:
   - Prominently showcases **Sardarshahr (सरदारशहर), Rajasthan**:
     *"समस्त मांगलिक कार्यक्रम सरदारशहर (राजस्थान) में आयोजित होंगे। विशिष्ट स्थल एवं मार्ग की विस्तृत जानकारी शीघ्र साझा की जाएगी।"*
   - Includes one-click Google Maps exploration link for Sardarshahr.

---

## 🛠️ Central Configuration

All names, dates, timings, images, audio, venue, and text are centrally managed in:
👉 [`src/data/weddingData.ts`](file:///d:/krishnawedsgaytri/src/data/weddingData.ts)

---

## 🚀 Running Locally

```bash
# Start development server
npm run dev

# Or run the production build
npm run build
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the wedding invitation website.
