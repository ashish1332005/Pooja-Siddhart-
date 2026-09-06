import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function RoyalGate({ onGateOpened }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenGate = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Burst rich festive fireworks & flower petal confetti
    confetti({
      particleCount: 140,
      spread: 160,
      origin: { y: 0.5 },
      colors: ['#FFB703', '#D90429', '#FF85A1', '#FFD166', '#D4AF37', '#FFF0B3'],
      ticks: 300,
      gravity: 0.8,
      scalar: 1.25
    });

    // At 1050ms as divine lighting show peaks, trigger transition into main content
    setTimeout(() => {
      onGateOpened();
    }, 1050);
  };

  // Generate 28 Flower Surprise Petals bursting outward when gate opens
  const surprisePetals = Array.from({ length: 28 }).map((_, i) => {
    const angle = (i / 28) * 360;
    const distance = 80 + (i % 5) * 25;
    const tx = Math.cos((angle * Math.PI) / 180) * distance;
    const ty = Math.sin((angle * Math.PI) / 180) * distance - 40;
    const colors = ['#d90429', '#ffb703', '#ff85a1', '#ffd166', '#d4af37'];
    return {
      id: i,
      tx: `${tx.toFixed(1)}px`,
      ty: `${ty.toFixed(1)}px`,
      delay: `${(0.05 + (i % 6) * 0.05).toFixed(2)}s`,
      size: 16 + (i % 4) * 4,
      color: colors[i % colors.length]
    };
  });

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-between py-4 px-4 overflow-hidden">
      
      {/* Top Header Section (Fades out when gate starts opening) */}
      <div 
        className={`flex flex-col items-center text-center z-10 max-w-lg w-full pt-1 transition-opacity duration-500 ${
          isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Hanging Floral Leaf Vine & PS Monogram Medallion */}
        <div className="flex flex-col items-center animate-hanging-chain mb-2">
          {/* Floral Leaf Vine String */}
          <div className="w-8 h-10 sm:h-14 flex items-center justify-center">
            <svg viewBox="0 0 30 60" fill="none" className="w-full h-full">
              <path d="M15,0 Q12,20 15,40 Q18,50 15,60" stroke="#4a6b48" strokeWidth="2" fill="none" />
              <path d="M15,10 Q5,5 8,15 Q12,14 15,10" fill="#6b8e68" stroke="#375235" strokeWidth="0.8" />
              <path d="M15,15 Q25,10 22,20 Q18,19 15,15" fill="#587955" stroke="#375235" strokeWidth="0.8" />
              <path d="M15,30 Q5,25 7,35 Q12,34 15,30" fill="#4a6b48" stroke="#375235" strokeWidth="0.8" />
              <path d="M15,35 Q25,30 23,40 Q18,39 15,35" fill="#6b8e68" stroke="#375235" strokeWidth="0.8" />
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

        {/* Mysterious Header Text */}
        <h1 className="font-serif-royal text-base sm:text-lg font-bold tracking-[0.25em] uppercase text-[#7a121c] block mb-1 drop-shadow-xs">
          A JOURNEY TO FOREVER
        </h1>
        <p className="font-serif-royal text-xs sm:text-sm font-semibold text-[#5c131a] tracking-widest uppercase">
          4–5 DECEMBER 2026 • UDAIPUR
        </p>
      </div>

      {/* Realistic 3D Arch Wooden Gate Container */}
      <div 
        className={`relative z-20 w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] mx-auto my-auto transition-transform duration-[1100ms] cubic-bezier(0.4, 0, 0.2, 1) ${
          isOpening ? 'scale-[3.8] sm:scale-[4.5] translate-y-[5%]' : 'scale-100 translate-y-0'
        }`}
        style={{
          transformOrigin: 'center 45%'
        }}
      >
        
        {/* Gate Arch Outer Frame */}
        <div className="relative w-full h-full rounded-t-[140px] border-4 border-[#6e1e24] bg-[#230508] shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden gate-container">
          
          {/* DIVINE LIGHTING SHOW OVERLAY */}
          <div 
            className={`absolute inset-0 z-30 pointer-events-none transition-all duration-500 ease-out flex items-center justify-center ${
              isOpening ? 'opacity-100 scale-125' : 'opacity-0 scale-75'
            }`}
          >
            {/* Bright Radial White-Gold Light Portal */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffffff] via-[#fff4b8] via-[#ffd700]/95 to-[#7a121c]/50" />
            
            {/* Rotating Divine Light Flare Rays */}
            <div className="w-[380px] h-[380px] bg-gradient-to-r from-transparent via-[#ffffff]/90 to-transparent rotate-45 animate-spin blur-md opacity-90" />
          </div>

          {/* INNER DOORWAY REVEAL */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center bg-no-repeat bg-center overflow-hidden bg-[#230508]"
          >
            {/* FLOWER SURPRISE BURST PETALS inside the archway when gate opens */}
            {isOpening && surprisePetals.map((p) => (
              <div
                key={p.id}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-flower-surprise z-40"
                style={{
                  '--tx': p.tx,
                  '--ty': p.ty,
                  animationDelay: p.delay
                }}
              >
                <svg width={p.size} height={p.size * 1.3} viewBox="0 0 30 40" fill={p.color} className="opacity-95 filter drop-shadow-md">
                  <path d="M15,0 Q30,15 15,40 Q0,15 15,0 Z" />
                </svg>
              </div>
            ))}
          </div>

          {/* Left Door Panel - Opens FULL 3D WIDE (-150deg) */}
          <div 
            className={`gate-door gate-door-left absolute top-0 left-0 w-1/2 h-full bg-[#3d090d] border-r border-[#6e1e24] shadow-2xl origin-left z-20 transition-transform duration-[1550ms] ease-in-out ${
              isOpening ? 'gate-open-left' : ''
            }`}
            style={{
              transformOrigin: 'left center',
              transform: isOpening ? 'rotateY(-150deg)' : 'rotateY(0deg)'
            }}
          >
            <div className="absolute inset-2 border-2 border-[#8b2630]/60 rounded-tl-[130px] flex flex-col items-center justify-between p-3 bg-gradient-to-r from-[#2d0508] via-[#3a080c] to-[#470b10]">
              <div className="w-full h-1/2 border border-[#8b2630]/40 rounded-t-[100px] bg-[#250407] shadow-inner" />
              <div className="w-full h-2/5 border border-[#8b2630]/40 rounded-md bg-[#250407] shadow-inner" />
            </div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2.5 h-10 rounded-l-sm bg-gradient-to-l from-[#d4af37] via-[#fff0b3] to-[#997312] border border-[#d4af37] shadow-md" />
          </div>

          {/* Right Door Panel - Opens FULL 3D WIDE (150deg) */}
          <div 
            className={`gate-door gate-door-right absolute top-0 right-0 w-1/2 h-full bg-[#3d090d] border-l border-[#6e1e24] shadow-2xl origin-right z-20 transition-transform duration-[1550ms] ease-in-out ${
              isOpening ? 'gate-open-right' : ''
            }`}
            style={{
              transformOrigin: 'right center',
              transform: isOpening ? 'rotateY(150deg)' : 'rotateY(0deg)'
            }}
          >
            <div className="absolute inset-2 border-2 border-[#8b2630]/60 rounded-tr-[130px] flex flex-col items-center justify-between p-3 bg-gradient-to-l from-[#2d0508] via-[#3a080c] to-[#470b10]">
              <div className="w-full h-1/2 border border-[#8b2630]/40 rounded-t-[100px] bg-[#250407] shadow-inner" />
              <div className="w-full h-2/5 border border-[#8b2630]/40 rounded-md bg-[#250407] shadow-inner" />
            </div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2.5 h-10 rounded-r-sm bg-gradient-to-r from-[#d4af37] via-[#fff0b3] to-[#997312] border border-[#d4af37] shadow-md" />
          </div>

          {/* Center Plaque: "Open me" */}
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
