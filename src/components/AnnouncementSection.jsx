import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnnouncementSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 88,
    hours: 18,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    // 4 December 2026 (10:00 AM)
    const targetDate = new Date('2026-12-04T10:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-4 sm:py-6 px-3 max-w-lg mx-auto my-auto">
      
      {/* PS Monogram Medallion Logo (Enlarged for High Prominence) */}
      <motion.div 
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-36 h-36 sm:w-48 sm:h-48 mb-3 hover:scale-105 transition-transform flex items-center justify-center cursor-pointer"
      >
        <img 
          src="/assets/padam/1.png" 
          alt="PS Monogram Medallion" 
          className="w-full h-full object-contain filter drop-shadow-[0_6px_16px_rgba(92,19,26,0.18)]"
        />
      </motion.div>

      {/* Announcement Typography Graphic (88.png) */}
      <motion.div 
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="w-full max-w-[280px] sm:max-w-[360px] mb-3"
      >
        <img 
          src="/assets/padam/88.png" 
          alt="We are so happy to announce that Siddhart & Pooja are tying the knot." 
          className="w-full h-auto object-contain filter drop-shadow-sm"
        />
      </motion.div>

      {/* Mark Your Calender Date Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="w-full max-w-[280px] sm:max-w-[340px] bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-xl p-3 sm:p-4 text-center shadow-sm mb-4 transition-transform hover:scale-[1.01]"
      >
        <span className="font-serif-royal text-[10px] sm:text-xs text-[#8c5a1e] uppercase tracking-[0.2em] font-bold block mb-0.5">
          Mark Your Calender
        </span>
        <h2 className="font-serif-royal text-2xl sm:text-3xl font-extrabold text-[#5c131a] my-0.5">
          4–5 December
        </h2>
        <span className="font-serif-royal text-base text-[#5c131a] block font-bold">
          2026
        </span>
      </motion.div>

      {/* Countdown Timer Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="w-full max-w-[320px] sm:max-w-[380px] text-center"
      >
        {/* Compact Ribbon Badge for Title */}
        <div className="inline-flex items-center justify-center gap-1.5 mb-2.5 bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-full px-3.5 py-1 shadow-xs">
          <span className="text-[10px] text-[#b8860b]">★</span>
          <span className="font-serif-royal text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#4a0d13] font-bold">
            Counting Down To The Celebration
          </span>
          <span className="text-[10px] text-[#b8860b]">★</span>
        </div>

        {/* 4 Compact Countdown Unit Boxes */}
        <div className="grid grid-cols-4 gap-2">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-lg p-2 text-center shadow-xs"
          >
            <span className="font-serif-royal text-xl sm:text-2xl font-extrabold text-[#5c131a] block leading-none mb-0.5">
              {timeLeft.days}
            </span>
            <span className="font-serif-royal text-[9px] uppercase tracking-wider text-[#8c5a1e] font-extrabold block">
              Days
            </span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-lg p-2 text-center shadow-xs"
          >
            <span className="font-serif-royal text-xl sm:text-2xl font-extrabold text-[#5c131a] block leading-none mb-0.5">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-serif-royal text-[9px] uppercase tracking-wider text-[#8c5a1e] font-extrabold block">
              Hours
            </span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-lg p-2 text-center shadow-xs"
          >
            <span className="font-serif-royal text-xl sm:text-2xl font-extrabold text-[#5c131a] block leading-none mb-0.5">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-serif-royal text-[9px] uppercase tracking-wider text-[#8c5a1e] font-extrabold block">
              Mins
            </span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-lg p-2 text-center shadow-xs"
          >
            <span className="font-serif-royal text-xl sm:text-2xl font-extrabold text-[#5c131a] block leading-none mb-0.5">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-serif-royal text-[9px] uppercase tracking-wider text-[#8c5a1e] font-extrabold block">
              Secs
            </span>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
