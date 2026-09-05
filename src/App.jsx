import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RoyalGate from './components/RoyalGate';
import AnnouncementSection from './components/AnnouncementSection';
import WardrobeGuide from './components/WardrobeGuide';
import VenueSection from './components/VenueSection';
import AudioPlayer from './components/AudioPlayer';
import FlyingGuideBird from './components/FlyingGuideBird';

export default function App() {
  const [isGateOpened, setIsGateOpened] = useState(false);
  const [startMusic, setStartMusic] = useState(false);

  // Lock scrolling until gate is opened
  useEffect(() => {
    if (!isGateOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isGateOpened]);

  const handleGateOpened = () => {
    setIsGateOpened(true);
    setStartMusic(true);

    // Smoothly scroll down to announcement section after gate opens
    setTimeout(() => {
      const el = document.getElementById('announcement-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 450);
  };

  return (
    <div className={`relative w-full ${!isGateOpened ? 'h-screen overflow-hidden' : 'min-h-screen'} bg-[#f6eee2] text-[#3a080d] select-none font-serif-royal`}>
      
      {/* Background Audio Player */}
      <AudioPlayer autoPlayTrigger={startMusic} />

      {/* Flying Guide Bird (Scroll-driven animated dove) */}
      {isGateOpened && <FlyingGuideBird />}

      {/* SECTION 1: HERO GATE LANDING (Vibrant 100% Fit Background) */}
      <section 
        id="hero-section" 
        className="relative w-full min-h-screen flex flex-col items-center justify-center border-b border-[#d4af37]/30 shadow-md overflow-hidden bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/assets/padam/hero-bg-BoJZa16A.webp')`,
          backgroundSize: '100% 100%'
        }}
      >
        {/* Very Light Subtle Tint for High Background Clarity */}
        <div className="absolute inset-0 bg-[#f6eee2]/10 pointer-events-none" />

        <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">
          <RoyalGate onGateOpened={handleGateOpened} />
        </div>
      </section>

      {/* VERTICAL SCROLLING CONTENT SECTIONS (Revealed after gate opening) */}
      {isGateOpened && (
        <div className="w-full animate-fadeIn">
          
          {/* SECTION 2: ANNOUNCEMENT & LIVE COUNTDOWN (Background: families-bg-Bdmrjm8V.webp) */}
          <section 
            id="announcement-section" 
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 border-b border-[#d4af37]/30 overflow-hidden bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('/assets/padam/families-bg-Bdmrjm8V.webp')`,
              backgroundSize: '100% 100%'
            }}
          >
            <div className="absolute inset-0 bg-[#f6eee2]/10 pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center justify-center">
              <AnnouncementSection />
            </div>
          </section>

          {/* SECTION 3: WARDROBE GUIDE 3D AUTO-CAROUSEL (Background: schedule-bg-CrjkodkA.webp) */}
          <section 
            id="wardrobe-section" 
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 border-b border-[#d4af37]/30 overflow-hidden bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('/assets/padam/schedule-bg-CrjkodkA.webp')`,
              backgroundSize: '100% 100%'
            }}
          >
            <div className="absolute inset-0 bg-[#f6eee2]/10 pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
              <WardrobeGuide />
            </div>
          </section>

          {/* SECTION 4: THE VENUE - RAMEE ROYAL RESORT (Background: reception-bg-Bhu2sMue.webp) */}
          <section 
            id="venue-section" 
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 border-b border-[#d4af37]/30 overflow-hidden bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('/assets/padam/reception-bg-Bhu2sMue.webp')`,
              backgroundSize: '100% 100%'
            }}
          >
            <div className="absolute inset-0 bg-[#f6eee2]/10 pointer-events-none" />

            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center justify-center">
              <VenueSection />
            </div>
          </section>

          {/* SECTION 5: FOOTER (Background: rsvp-bg-I-N3en4m.webp) */}
          <footer 
            id="footer-section" 
            className="relative w-full py-16 px-4 flex flex-col items-center justify-center text-center overflow-hidden bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('/assets/padam/rsvp-bg-I-N3en4m.webp')`,
              backgroundSize: '100% 100%'
            }}
          >
            <div className="absolute inset-0 bg-[#f6eee2]/15 pointer-events-none" />

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center gap-3 max-w-md"
            >
              <div className="w-16 h-16 mb-1">
                <img 
                  src="/assets/padam/1.png" 
                  alt="PS Logo" 
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              
              <h3 className="font-serif-royal text-xl sm:text-2xl font-bold text-[#5c131a]">
                Pooja &amp; Siddharth
              </h3>
              
              <span className="font-serif-royal text-sm text-[#8c6227] tracking-wider uppercase font-semibold">
                4–5 December 2026 • Udaipur (Raj.)
              </span>

              <p className="font-serif-royal text-xs text-[#5c131a]/80 italic mt-2">
                "We look forward to celebrating our special moments with you!"
              </p>
            </motion.div>
          </footer>

        </div>
      )}

    </div>
  );
}
