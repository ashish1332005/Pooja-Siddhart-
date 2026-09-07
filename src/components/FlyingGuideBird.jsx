import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FlyingGuideBird() {
  const { scrollYProgress } = useScroll();

  // Vertical flight path
  const topPos = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['14vh', '30vh', '50vh', '68vh', '78vh']
  );

  // Smooth S-curve
  const leftPos = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['8%', '78%', '12%', '82%', '48%']
  );

  // Bird direction
  const rotateAngle = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [12, -18, 16, -12, 0]
  );

  return (
    <motion.div
      style={{
        top: topPos,
        left: leftPos,
        rotate: rotateAngle,
      }}
      className="
        fixed
        z-40
        pointer-events-none
        flex
        items-center
        justify-center
        opacity-90
        will-change-transform
      "
    >
      {/* Golden Glow */}
      <div className="relative">
        <motion.div
          animate={{
            scale: [0.9, 1.15, 0.9],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -inset-3
            rounded-full
            bg-[#d4af37]/30
            blur-md
          "
        />

        {/* Dove */}
        <motion.div
          animate={{
            y: [0, -3, 0, 3, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            relative
            w-12
            h-10
            sm:w-14
            sm:h-12
            drop-shadow-[0_3px_7px_rgba(92,19,26,0.35)]
          "
        >
          <svg
            viewBox="0 0 140 100"
            className="w-full h-full overflow-visible"
          >
            <defs>
              {/* Body Gradient */}
              <linearGradient
                id="doveBodyGold"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#fff3c4" />
                <stop offset="45%" stopColor="#e8ce84" />
                <stop offset="100%" stopColor="#b88a2d" />
              </linearGradient>

              {/* Wing Gradient */}
              <linearGradient
                id="doveWingGold"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#fff8dc" />
                <stop offset="55%" stopColor="#e8ce84" />
                <stop offset="100%" stopColor="#c49b42" />
              </linearGradient>

              {/* Soft Glow */}
              <filter id="goldGlow">
                <feGaussianBlur
                  stdDeviation="1.5"
                  result="blur"
                />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* LEFT WING */}
            <motion.path
              d="
                M68 48
                C48 34 27 13 5 18
                C19 25 28 38 43 49
                C29 45 17 44 7 48
                C28 61 49 62 68 53
                Z
              "
              fill="url(#doveWingGold)"
              stroke="#9a7224"
              strokeWidth="1.3"
              filter="url(#goldGlow)"
              style={{
                transformOrigin: '68px 48px',
              }}
              animate={{
                rotate: [0, -10, 4, -12, 0],
                scaleY: [1, 0.82, 1.08, 0.85, 1],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* RIGHT WING */}
            <motion.path
              d="
                M72 48
                C92 34 113 13 135 18
                C121 25 112 38 97 49
                C111 45 123 44 133 48
                C112 61 91 62 72 53
                Z
              "
              fill="url(#doveWingGold)"
              stroke="#9a7224"
              strokeWidth="1.3"
              filter="url(#goldGlow)"
              style={{
                transformOrigin: '72px 48px',
              }}
              animate={{
                rotate: [0, 10, -4, 12, 0],
                scaleY: [1, 0.82, 1.08, 0.85, 1],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* BODY */}
            <motion.path
              d="
                M62 37
                C53 42 48 55 53 69
                C57 80 67 87 72 89
                C78 81 87 68 86 54
                C85 43 76 36 68 34
                Z
              "
              fill="url(#doveBodyGold)"
              stroke="#8c6227"
              strokeWidth="1.2"
            />

            {/* CHEST */}
            <path
              d="
                M59 48
                C54 58 57 72 65 79
                C69 82 73 84 76 85
                C71 72 72 58 77 45
                Z
              "
              fill="#f6df9a"
              opacity="0.7"
            />

            {/* HEAD */}
            <circle
              cx="69"
              cy="30"
              r="10"
              fill="url(#doveBodyGold)"
              stroke="#8c6227"
              strokeWidth="1.2"
            />

            {/* Head Highlight */}
            <circle
              cx="66"
              cy="27"
              r="3"
              fill="#fff8dc"
              opacity="0.8"
            />

            {/* EYE */}
            <circle
              cx="72"
              cy="28"
              r="1.6"
              fill="#5c131a"
            />

            {/* BEAK */}
            <path
              d="M78 31 L91 35 L78 38 Z"
              fill="#a84323"
              stroke="#7a3a21"
              strokeWidth="0.8"
            />

            {/* Small Gold Feather Detail */}
            <path
              d="M57 57 Q67 62 79 57"
              fill="none"
              stroke="#b88a2d"
              strokeWidth="1"
              opacity="0.7"
            />

            <path
              d="M56 63 Q67 68 78 63"
              fill="none"
              stroke="#b88a2d"
              strokeWidth="0.8"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
