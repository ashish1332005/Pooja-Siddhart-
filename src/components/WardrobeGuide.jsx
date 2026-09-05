import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function WardrobeGuide() {
  const wardrobeCards = [
    {
      id: 1,
      title: 'The Sunshine Soirée',
      date: 'FRIDAY 4TH DECEMBER 2026',
      dressCode: 'HALDI COLOUR',
      image: '/assets/padam/WhatsApp Image 2026-09-05 at 4.02.10 PM.jpeg'
    },
    {
      id: 2,
      title: 'Glam, Groove & Gala',
      date: 'FRIDAY 4TH DECEMBER 2026',
      dressCode: 'INDO-WESTERN, PRE-DRAPED SAREES',
      image: '/assets/padam/WhatsApp Image 2026-09-05 at 4.02.10 PM (1).jpeg'
    },
    {
      id: 3,
      title: 'The Wedding Gala',
      date: 'FRIDAY 4TH DECEMBER 2026',
      dressCode: 'COCKTAIL DRESSES & SUMMER SUITS',
      image: '/assets/padam/WhatsApp Image 2026-09-05 at 4.02.10 PM (2).jpeg'
    },
    {
      id: 4,
      title: 'Shubh Vivah',
      date: 'FRIDAY 4TH DECEMBER 2026',
      dressCode: 'PASTEL COLOURS & TRADITIONAL INDIAN',
      image: '/assets/padam/WhatsApp Image 2026-09-05 at 4.02.10 PM (3).jpeg'
    },
    {
      id: 5,
      title: 'Starry Mic Night',
      date: 'THURSDAY 3RD DECEMBER 2026',
      dressCode: 'OF WHITE COLOUR',
      image: '/assets/padam/WhatsApp Image 2026-09-05 at 4.02.10 PM (4).jpeg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll effect: advances every 3.5 seconds
  useEffect(() => {
    if (!isAutoScrolling) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wardrobeCards.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isAutoScrolling, wardrobeCards.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % wardrobeCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + wardrobeCards.length) % wardrobeCards.length);
  };

  // Helper to determine position relative to active card (-1 left, 0 center, +1 right)
  const getCardStyle = (index) => {
    const total = wardrobeCards.length;
    let diff = (index - currentIndex + total) % total;
    if (diff > total / 2) diff -= total;

    if (diff === 0) {
      // Center Active Card
      return {
        zIndex: 30,
        transform: 'translateX(0%) scale(1.05) rotate(0deg)',
        opacity: 1,
        filter: 'brightness(1)'
      };
    } else if (diff === -1 || diff === total - 1) {
      // Left Peek Card
      return {
        zIndex: 20,
        transform: 'translateX(-45%) scale(0.85) rotate(-4deg)',
        opacity: 0.82,
        filter: 'brightness(0.9)'
      };
    } else if (diff === 1 || diff === -(total - 1)) {
      // Right Peek Card
      return {
        zIndex: 20,
        transform: 'translateX(45%) scale(0.85) rotate(4deg)',
        opacity: 0.82,
        filter: 'brightness(0.9)'
      };
    } else {
      // Hidden cards in background
      return {
        zIndex: 10,
        transform: diff < 0 ? 'translateX(-80%) scale(0.7)' : 'translateX(80%) scale(0.7)',
        opacity: 0,
        pointerEvents: 'none'
      };
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-4 max-w-2xl mx-auto my-auto">
      
      {/* Title Graphic (3.png / 8.png) */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[280px] sm:max-w-[340px] mb-1"
      >
        <img 
          src="/assets/padam/3.png" 
          alt="Wardrobe Guide" 
          className="w-full h-auto object-contain drop-shadow-sm"
        />
      </motion.div>

      {/* Subtitle Graphic (2.png) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="max-w-[240px] sm:max-w-[290px] mb-6"
      >
        <img 
          src="/assets/padam/2.png" 
          alt="Let's help you pack for the wedding" 
          className="w-full h-auto object-contain drop-shadow-sm opacity-90"
        />
      </motion.div>

      {/* 3D Wardrobe Cards Carousel Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-[3/4.2] flex items-center justify-center my-4 overflow-visible"
      >
        {wardrobeCards.map((card, idx) => {
          const style = getCardStyle(idx);
          return (
            <div
              key={card.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoScrolling(false);
              }}
              style={style}
              className="absolute inset-0 w-full h-full cursor-pointer transition-all duration-700 ease-out flex items-center justify-center"
            >
              <div className="w-full h-full rounded-sm overflow-hidden bg-white shadow-[0_15px_35px_rgba(0,0,0,0.25)] border border-[#d4af37]/40 p-1.5 sm:p-2 bg-gradient-to-b from-[#ffffff] to-[#faf5ec]">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            </div>
          );
        })}

        {/* Carousel Arrow Controls */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
            setIsAutoScrolling(false);
          }}
          className="absolute -left-6 sm:-left-12 z-40 p-2 sm:p-3 rounded-full bg-[#5c131a] text-[#fff8ea] border border-[#d4af37] shadow-lg hover:scale-110 transition-transform cursor-pointer"
          title="Previous Card"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
            setIsAutoScrolling(false);
          }}
          className="absolute -right-6 sm:-right-12 z-40 p-2 sm:p-3 rounded-full bg-[#5c131a] text-[#fff8ea] border border-[#d4af37] shadow-lg hover:scale-110 transition-transform cursor-pointer"
          title="Next Card"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      </motion.div>

      {/* Button: "SCROLL THE NEXT" (Burgundy Red Capsule Button) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-6 flex flex-col items-center gap-3 z-30"
      >
        <button
          onClick={() => {
            handleNext();
          }}
          className="px-8 py-3.5 rounded-full bg-[#8c1823] hover:bg-[#6b1018] text-[#fff8ea] font-serif-royal text-sm font-semibold tracking-wider uppercase border border-[#d4af37]/50 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          SCROLL THE NEXT
        </button>

        {/* Auto-play indicator / toggle */}
        <div className="flex items-center gap-2 text-xs font-serif-royal text-[#5c131a]/80">
          <button 
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            className="flex items-center gap-1 hover:text-[#8c1823] transition-colors cursor-pointer"
          >
            {isAutoScrolling ? <Pause className="w-3.5 h-3.5 text-[#d4af37]" /> : <Play className="w-3.5 h-3.5 text-[#d4af37]" />}
            <span>{isAutoScrolling ? 'Auto-Scrolling Active' : 'Auto-Scroll Paused (Click to resume)'}</span>
          </button>
        </div>
      </motion.div>

    </div>
  );
}
