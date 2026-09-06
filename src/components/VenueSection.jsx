import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function VenueSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center max-w-xl mx-auto pt-0 pb-2 px-3 sm:px-4">

      {/* 1. Header Graphic (7.png: "The Venue") - Moved higher up with clear bottom space */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[260px] sm:max-w-[320px] -mt-1 sm:-mt-3 mb-6 sm:mb-8"
      >
        <img
          src="/assets/padam/7.png"
          alt="The Venue"
          className="w-full h-auto object-contain filter drop-shadow-sm mx-auto"
        />
      </motion.div>

      {/* 2. Resort Photo Card (9.png) - Spaced below 'The Venue' */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="w-full max-w-[360px] sm:max-w-[480px] rounded-3xl p-1 bg-gradient-to-b from-[#d4af37] via-[#fff0b3] to-[#aa7c11] shadow-[0_12px_35px_rgba(0,0,0,0.15)] transition-transform hover:scale-[1.01] mb-3 sm:mb-4"
      >
        <div className="w-full aspect-[4/3] sm:aspect-[16/11] rounded-[22px] overflow-hidden bg-[#2a060a]">
          <img
            src="/assets/padam/9.png"
            alt="Ramee Royal Resort & Spa Udaipur (Raj.)"
            className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.02]"
          />
        </div>
      </motion.div>

      {/* 3. Venue Name & Location Text - Placed directly below the resort photo */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        className="text-center mb-3 sm:mb-4"
      >
        <h2 className="font-serif-royal text-2xl sm:text-3xl font-semibold text-[#5c131a] tracking-wide mb-0.5">
          Ramee Royal Resort &amp; Spa
        </h2>
        <span className="font-serif-royal text-base sm:text-lg text-[#5c131a]/90 font-medium block">
          Udaipur (Raj.)
        </span>
      </motion.div>

      {/* 4. Action Button: Google Maps Directions - Placed directly below the venue text */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        className="w-full max-w-xs sm:max-w-sm"
      >
        <a
          href="https://maps.google.com/?q=Ramee+Royal+Resort+and+Spa+Udaipur"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-6 rounded-full bg-[#8c1823] hover:bg-[#6b1018] text-[#fff8ea] font-serif-royal text-sm font-semibold tracking-wider text-center border border-[#d4af37]/60 shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
        >
          <MapPin className="w-4 h-4 text-[#fff0b3]" />
          <span>Get Directions</span>
        </a>
      </motion.div>

    </div>
  );
}
