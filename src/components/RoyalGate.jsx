import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function RoyalGate({ onGateOpened }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenGate = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Burst golden celebratory fireworks / confetti
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.55 },
      colors: ['#FFD700', '#FFA500', '#D4AF37', '#FFF0B3', '#8B1E3F', '#E75A7C']
    });

    // Allow 1.85s for the smooth 3D realistic door open animation then scroll down
    setTimeout(() => {
      onGateOpened();
    }, 1850);
  };

  // Generate 14 floating flower petal particles inside the arch
  const petalList = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    left: `${(i * 7 + 4) % 92}%`,
    delay: `${(i * 0.35).toFixed(2)}s`,
    duration: `${(3.5 + (i % 3) * 0.8).toFixed(2)}s`,
    size: 14 + (i % 4) * 4,
    color: i % 2 === 0 ? '#d95d39' : '#f4a261' // Rose / Marigold petal tones
  }));

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-between py-4 px-4 overflow-hidden">
      
      {/* Top Header Section with Hanging Chain Logo & Mystical Teaser Text (Gate Closed) */}
      <div className="flex flex-col items-center text-center z-10 max-w-lg w-full pt-1">
        
        {/* Hanging Floral Leaf Vine & PS Monogram Medallion (1.png) */}
        <div className="flex flex-col items-center animate-hanging-chain mb-2">
          {/* Floral Leaf Vine String hanging from top floral arch */}
          <div className="w-8 h-10 sm:h-14 flex items-center justify-center">
            <svg viewBox="0 0 30 60" fill="none" className="w-full h-full">
              {/* Central Vine Line */}
              <path d="M15,0 Q12,20 15,40 Q18,50 15,60" stroke="#4a6b48" strokeWidth="2" fill="none" />
              {/* Green Leaf Pairs along Vine */}
              <path d="M15,10 Q5,5 8,15 Q12,14 15,10" fill="#6b8e68" stroke="#375235" strokeWidth="0.8" />
              <path d="M15,15 Q25,10 22,20 Q18,19 15,15" fill="#587955" stroke="#375235" strokeWidth="0.8" />
              <path d="M15,30 Q5,25 7,35 Q12,34 15,30" fill="#4a6b48" stroke="#375235" strokeWidth="0.8" />
              <path d="M15,35 Q25,30 23,40 Q18,39 15,35" fill="#6b8e68" stroke="#375235" strokeWidth="0.8" />
              {/* Tiny Blossom accents */}
              <circle cx="15" cy="22" r="2" fill="#d95d39" />
              <circle cx="15" cy="45" r="2.5" fill="#f4a261" />
            </svg>
          </div>

          {/* Logo Medallion */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 -mt-1 hover:scale-105 transition-transform drop-shadow-md cursor-pointer">
            <img 
              src="/assets/padam/1.png" 
              alt="PS Monogram Medallion" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Mysterious Premium Header Text (No names before gate opens!) */}
        <h1 className="font-serif-royal text-base sm:text-lg font-bold tracking-[0.25em] uppercase text-[#7a121c] block mb-1 drop-shadow-xs">
          A JOURNEY TO FOREVER
        </h1>
        <p className="font-serif-royal text-xs sm:text-sm font-semibold text-[#5c131a] tracking-widest uppercase">
          4–5 DECEMBER 2026 • UDAIPUR
        </p>
      </div>

      {/* Realistic 3D Arch Wooden Gate Container */}
      <div className="relative z-20 w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] mx-auto my-auto">
        
        {/* Gate Arch Outer Frame */}
        <div className="relative w-full h-full rounded-t-[140px] border-4 border-[#6e1e24] bg-[#230508] shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden gate-container">
          
          {/* MAIN REVEAL CONTENT INSIDE GATE (Only visible when doors open!) */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center bg-no-repeat bg-center overflow-hidden transition-opacity duration-700 ${
              isOpening ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            }`}
            style={{
              backgroundImage: `url('/assets/padam/gate_inner_clean_bg.jpg')`,
              backgroundSize: '100% 100%'
            }}
          >
            {/* Soft Warm Vignette Overlay for High Premium Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#4a0d13]/10 via-transparent to-[#4a0d13]/20 pointer-events-none" />

            {/* Falling Animated Flower Petals inside the arch */}
            {isOpening && petalList.map((p) => (
              <div
                key={p.id}
                className="absolute top-0 pointer-events-none animate-petal"
                style={{
                  left: p.left,
                  animationDelay: p.delay,
                  animationDuration: p.duration
                }}
              >
                <svg width={p.size} height={p.size * 1.3} viewBox="0 0 30 40" fill={p.color} className="opacity-90 filter drop-shadow-sm">
                  <path d="M15,0 Q30,15 15,40 Q0,15 15,0 Z" />
                </svg>
              </div>
            ))}

            {/* Main Invitation Reveal Text Content (Directly on Parchment, No White Box) */}
            <div className="relative z-10 text-center px-3 py-2 flex flex-col items-center my-auto max-w-[240px] sm:max-w-[260px]">
              
              <span className="font-serif-royal text-[10px] sm:text-xs font-bold text-[#8c5a1e] tracking-[0.2em] uppercase block mb-1 drop-shadow-xs">
                TOGETHER WITH THEIR FAMILIES
              </span>

              <h2 className="font-script-royal text-3xl sm:text-4xl text-[#5c131a] font-extrabold my-0.5 leading-tight drop-shadow-xs">
                Pooja &amp; Siddharth
              </h2>

              <p className="font-serif-royal text-xs text-[#4a0d13] italic leading-tight mt-0.5 font-bold">
                invite you to celebrate<br />
                the beginning of their forever
              </p>

              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent my-2 rounded-full" />

              <span className="font-serif-royal text-xs font-bold text-[#7a121c] uppercase tracking-wider block">
                4–5 DECEMBER 2026
              </span>
              <span className="font-serif-royal text-[10px] sm:text-xs font-bold text-[#8c5a1e] uppercase tracking-widest block">
                UDAIPUR, RAJASTHAN
              </span>

              <p className="font-script-royal text-sm sm:text-base text-[#5c131a] italic mt-2 font-extrabold">
                With love, laughter &amp; a lifetime of memories
              </p>

            </div>
          </div>

          {/* Left Door Panel (Solid Opaque 100% Opaque Wood) */}
          <div 
            className={`gate-door gate-door-left absolute top-0 left-0 w-1/2 h-full bg-[#3d090d] border-r border-[#6e1e24] shadow-2xl origin-left z-20 transition-transform duration-1000 ease-in-out ${
              isOpening ? 'gate-open-left' : ''
            }`}
            style={{
              transformOrigin: 'left center',
              transform: isOpening ? 'rotateY(-118deg)' : 'rotateY(0deg)',
              transition: 'transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)'
            }}
          >
            {/* Door Texture & Panel Inset */}
            <div className="absolute inset-2 border-2 border-[#8b2630]/60 rounded-tl-[130px] flex flex-col items-center justify-between p-3 bg-gradient-to-r from-[#2d0508] via-[#3a080c] to-[#470b10]">
              {/* Top Arched Recessed Panel */}
              <div className="w-full h-1/2 border border-[#8b2630]/40 rounded-t-[100px] bg-[#250407] shadow-inner" />
              {/* Bottom Recessed Panel */}
              <div className="w-full h-2/5 border border-[#8b2630]/40 rounded-md bg-[#250407] shadow-inner" />
            </div>
            {/* Left Door Handle */}
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2.5 h-10 rounded-l-sm bg-gradient-to-l from-[#d4af37] via-[#fff0b3] to-[#997312] border border-[#d4af37] shadow-md" />
          </div>

          {/* Right Door Panel (Solid Opaque 100% Opaque Wood) */}
          <div 
            className={`gate-door gate-door-right absolute top-0 right-0 w-1/2 h-full bg-[#3d090d] border-l border-[#6e1e24] shadow-2xl origin-right z-20 transition-transform duration-1000 ease-in-out ${
              isOpening ? 'gate-open-right' : ''
            }`}
            style={{
              transformOrigin: 'right center',
              transform: isOpening ? 'rotateY(118deg)' : 'rotateY(0deg)',
              transition: 'transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)'
            }}
          >
            {/* Door Texture & Panel Inset */}
            <div className="absolute inset-2 border-2 border-[#8b2630]/60 rounded-tr-[130px] flex flex-col items-center justify-between p-3 bg-gradient-to-l from-[#2d0508] via-[#3a080c] to-[#470b10]">
              {/* Top Arched Recessed Panel */}
              <div className="w-full h-1/2 border border-[#8b2630]/40 rounded-t-[100px] bg-[#250407] shadow-inner" />
              {/* Bottom Recessed Panel */}
              <div className="w-full h-2/5 border border-[#8b2630]/40 rounded-md bg-[#250407] shadow-inner" />
            </div>
            {/* Right Door Handle */}
            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2.5 h-10 rounded-r-sm bg-gradient-to-r from-[#d4af37] via-[#fff0b3] to-[#997312] border border-[#d4af37] shadow-md" />
          </div>

          {/* Center Plaque: "Open me" (Positioned across the door crack) */}
          {!isOpening && (
            <button
              onClick={handleOpenGate}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group px-6 py-4 bg-[#fffcf7] border-2 border-[#d4af37] shadow-[0_10px_25px_rgba(0,0,0,0.4)] rounded-md transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer flex flex-col items-center"
            >
              <span className="font-serif-royal text-2xl font-semibold text-[#5c131a] tracking-wide">
                Open me
              </span>
            </button>
          )}

        </div>

      </div>

    </div>
  );
}
