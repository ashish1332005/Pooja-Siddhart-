import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function RoyalGate({ onGateOpened }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenGate = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Burst festive royal fireworks & golden flower confetti
    confetti({
      particleCount: 160,
      spread: 160,
      origin: { y: 0.65 },
      colors: ['#FFB703', '#D90429', '#FF85A1', '#FFD166', '#D4AF37', '#FFF0B3', '#FFFFFF'],
      ticks: 320,
      gravity: 0.8,
      scalar: 1.25
    });

    // Secondary petal burst
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFF0B3', '#FF85A1', '#D90429'],
        ticks: 250,
        gravity: 0.9,
        scalar: 1.0
      });
    }, 200);

    // Smoothly transition into the main invitation
    setTimeout(() => {
      onGateOpened();
    }, 1100);
  };

  // 24 Flower Surprise Burst Petals
  const surprisePetals = Array.from({ length: 24 }).map((_, i) => {
    const angle = (i / 24) * 360;
    const distance = 90 + (i % 6) * 30;
    const tx = Math.cos((angle * Math.PI) / 180) * distance;
    const ty = Math.sin((angle * Math.PI) / 180) * distance - 30;
    const colors = ['#d90429', '#ffb703', '#ff85a1', '#ffd166', '#d4af37', '#ffffff'];
    return {
      id: i,
      tx: `${tx.toFixed(1)}px`,
      ty: `${ty.toFixed(1)}px`,
      delay: `${(0.04 + (i % 5) * 0.05).toFixed(2)}s`,
      size: 14 + (i % 4) * 5,
      color: colors[i % colors.length]
    };
  });

  return (
    <div 
      className={`fixed inset-0 w-full h-full h-[100dvh] flex items-center justify-center overflow-hidden select-none cursor-pointer bg-no-repeat bg-center transition-transform duration-[1100ms] ease-out ${
        isOpening ? 'scale-[2.6] sm:scale-[3.0] -translate-y-[8%]' : 'scale-100 translate-y-0'
      }`}
      style={{
        backgroundImage: `url('/assets/royal-gate-full.jpg')`,
        backgroundSize: '100% 100%',
        transformOrigin: '50% 72%'
      }}
      onClick={handleOpenGate}
    >
      {/* RADIANT GOLDEN LIGHT & BURSTING PETALS */}
      <div 
        className={`absolute z-20 pointer-events-none transition-all duration-700 ease-out flex items-center justify-center ${
          isOpening ? 'opacity-100 scale-125' : 'opacity-0 scale-50'
        }`}
        style={{
          top: '52%',
          left: '29%',
          width: '42%',
          height: '37%'
        }}
      >
        {/* Radiant Sunburst Glow filling the arch doorway */}
        <div className="w-full h-full rounded-t-full bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#fff5b8_40%,_#ffd255_75%,_#c8861e_100%)] opacity-95 blur-xs shadow-[0_0_50px_#ffd700]" />
        <div className="absolute w-[220%] h-[220%] bg-gradient-to-tr from-transparent via-white/90 to-transparent rotate-45 animate-spin blur-md opacity-85" />

        {/* Surprise Burst Petals */}
        {isOpening && surprisePetals.map((p) => (
          <div
            key={p.id}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-flower-surprise z-30"
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

      {/* TAP TO OPEN BADGE (Positioned directly inside the white cartouche in the image) */}
      {!isOpening && (
        <div 
          className="absolute z-30 pointer-events-auto cursor-pointer flex items-center justify-center"
          style={{
            top: '69.8%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '32%',
            maxWidth: '200px',
            height: '5%'
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleOpenGate();
          }}
        >
          <button 
            type="button"
            className="w-full h-full flex items-center justify-center text-center transition-transform duration-300 hover:scale-105 active:scale-95 group focus:outline-none bg-transparent"
            aria-label="Tap to Open Gate"
          >
            <span className="font-serif-royal text-[12px] sm:text-[14px] font-bold text-[#5c131a] tracking-[0.15em] uppercase flex items-center gap-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] group-hover:text-[#801824] transition-colors whitespace-nowrap animate-pulse">
              <span className="text-[#b88628] text-[9px]">✦</span>
              <span>TAP TO OPEN</span>
              <span className="text-[#b88628] text-[9px]">✦</span>
            </span>
          </button>
        </div>
      )}

    </div>
  );
}
