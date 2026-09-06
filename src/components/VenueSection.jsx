import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function VenueSection() {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-0 pb-6 px-4 max-w-xl mx-auto">
      
      {/* Header Graphic (7.png: "The Venue") - Positioned High Up */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[250px] sm:max-w-[310px] -mt-6 sm:-mt-10 mb-8 sm:mb-12"
      >
        <img 
          src="/assets/padam/7.png" 
          alt="The Venue" 
          className="w-full h-auto object-contain filter drop-shadow-sm"
        />
      </motion.div>

      {/* Resort Photo Card (9.png in Gold Bordered Rounded Frame) - Positioned with Clear Gap */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-[340px] sm:max-w-[420px] rounded-3xl p-1 bg-gradient-to-b from-[#d4af37] via-[#fff0b3] to-[#aa7c11] shadow-[0_12px_35px_rgba(0,0,0,0.15)] mb-5 transition-transform hover:scale-[1.01]"
      >
        <div className="w-full aspect-[16/10] rounded-[22px] overflow-hidden bg-[#2a060a]">
          <img 
            src="/assets/padam/9.png" 
            alt="Ramee Royal Resort & Spa Udaipur (Raj.)" 
            className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.02]"
          />
        </div>
      </motion.div>

      {/* Venue Name & Location Text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-center mb-6"
      >
        <h2 className="font-serif-royal text-2xl sm:text-3xl font-semibold text-[#5c131a] tracking-wide mb-1">
          Ramee Royal Resort &amp; Spa
        </h2>
        <span className="font-serif-royal text-lg sm:text-xl text-[#5c131a]/90 font-medium block">
          Udaipur (Raj.)
        </span>
      </motion.div>

      {/* Action Button: Google Maps Directions */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="w-full max-w-xs sm:max-w-sm mb-2"
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
