"use client";

import { motion } from "framer-motion";

const items = [
  "Bitcoin", "Ethereum", "USDT", "BNB", "Solana",
  "PayPal", "Apple Pay", "Google Pay",
];

function Icon({ name }: { name: string }) {
  switch (name) {
    /* ── Bitcoin ───────────────────────────────────────── */
    case "Bitcoin":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#F7931A"/>
          {/* Vertical bars above and below the B */}
          <rect x="14" y="7"  width="3" height="5" rx="1.5" fill="white"/>
          <rect x="20" y="7"  width="3" height="5" rx="1.5" fill="white"/>
          <rect x="14" y="28" width="3" height="5" rx="1.5" fill="white"/>
          <rect x="20" y="28" width="3" height="5" rx="1.5" fill="white"/>
          {/* B body */}
          <path
            d="M14 11 h7 c3 0 5 1.5 5 4 0 1.5-0.8 2.8-2 3.5 1.8 0.7 3 2.2 3 4 0 2.8-2.2 4.5-5.5 4.5 H14 Z
               M17 14 v4 h3.5 c1.5 0 2.5-0.8 2.5-2s-1-2-2.5-2Z
               M17 21 v4.5 h4 c1.7 0 2.7-0.9 2.7-2.2 0-1.4-1-2.3-2.7-2.3Z"
            fill="white"
          />
        </svg>
      );

    /* ── Ethereum ──────────────────────────────────────── */
    case "Ethereum":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#343444"/>
          {/* Upper-left face (bright) */}
          <polygon points="20,6 10,21 20,17" fill="#C8D0F0"/>
          {/* Upper-right face (shadow) */}
          <polygon points="20,6 30,21 20,17" fill="#8A92B2"/>
          {/* Waist band */}
          <polygon points="10,21 20,17 30,21 20,25" fill="#8A92B2" opacity="0.75"/>
          {/* Lower-left face (bright) */}
          <polygon points="10,22 20,36 20,25" fill="#C8D0F0"/>
          {/* Lower-right face (shadow) */}
          <polygon points="30,22 20,36 20,25" fill="#8A92B2"/>
        </svg>
      );

    /* ── USDT ──────────────────────────────────────────── */
    case "USDT":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#26A17B"/>
          {/* T horizontal bar */}
          <rect x="8"  y="9"  width="24" height="5"   rx="2.5" fill="white"/>
          {/* T stem */}
          <rect x="17.5" y="9"  width="5"  height="17"  rx="2.5" fill="white"/>
          {/* Tether underline */}
          <rect x="10" y="27" width="20" height="3.5" rx="1.75" fill="white" opacity="0.6"/>
        </svg>
      );

    /* ── BNB ───────────────────────────────────────────── */
    case "BNB":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#F3BA2F"/>
          {/* Center diamond */}
          <polygon points="20,14 26,20 20,26 14,20" fill="#0B0E11"/>
          {/* Top small diamond */}
          <polygon points="20,6 23,9 20,12 17,9"   fill="#0B0E11"/>
          {/* Bottom small diamond */}
          <polygon points="20,28 23,31 20,34 17,31" fill="#0B0E11"/>
          {/* Left small diamond */}
          <polygon points="8,20 11,17 14,20 11,23"  fill="#0B0E11"/>
          {/* Right small diamond */}
          <polygon points="26,20 29,17 32,20 29,23" fill="#0B0E11"/>
        </svg>
      );

    /* ── Solana ────────────────────────────────────────── */
    case "Solana":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <defs>
            <linearGradient id="sg" x1="5" y1="35" x2="35" y2="5" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#9945FF"/>
              <stop offset="100%" stopColor="#14F195"/>
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="20" fill="url(#sg)"/>
          {/* Three signature slanted bars */}
          <polygon points="7,12 33,9  35,14 9,17"  fill="white"/>
          <polygon points="7,19 33,16 35,21 9,24"  fill="white"/>
          <polygon points="7,26 33,23 35,28 9,31"  fill="white"/>
        </svg>
      );

    /* ── PayPal ────────────────────────────────────────── */
    case "PayPal":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#003087"/>
          {/* Light-blue P (back, shifted right+down) */}
          <text x="24" y="27" textAnchor="middle"
            fill="#169BD7" fontSize="24" fontWeight="900"
            fontFamily="Arial, sans-serif">P</text>
          {/* White P (front, shifted left+up) */}
          <text x="18" y="22" textAnchor="middle"
            fill="white" fontSize="24" fontWeight="900"
            fontFamily="Arial, sans-serif">P</text>
        </svg>
      );

    /* ── Apple Pay ─────────────────────────────────────── */
    case "Apple Pay":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#000"/>
          {/* Leaf */}
          <path d="M21 9 C21 8 22.5 7 24 7 C24 9 22 10 21 9 Z" fill="white"/>
          {/* Apple body – rounded shape with natural right-side concavity */}
          <path d="
            M16.5 11
            C13 11 10.5 13.5 10.5 17
            C10.5 22 13.5 27 16.5 28
            C18 28.5 19.5 28 20.5 27
            C21.5 28 23 28.5 24.5 28
            C27.5 27 30.5 22 30.5 17
            C30.5 13.5 28 11 24.5 11
            C23 11 21.5 12 20.5 13
            C19.5 12 18 11 16.5 11 Z
          " fill="white"/>
          <text x="20.5" y="36.5" textAnchor="middle"
            fill="white" fontSize="7" fontWeight="400"
            fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">Pay</text>
        </svg>
      );

    /* ── Google Pay ────────────────────────────────────── */
    case "Google Pay":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.5"/>
          {/* G ring: 3 arcs CCW, upper-right deliberately open */}
          {/* Red – top CCW to left */}
          <path d="M20,8 A9,9 0 0,0 11,17" stroke="#EA4335" strokeWidth="4.5" fill="none" strokeLinecap="butt"/>
          {/* Yellow – left CCW to bottom */}
          <path d="M11,17 A9,9 0 0,0 20,26" stroke="#FBBC05" strokeWidth="4.5" fill="none" strokeLinecap="butt"/>
          {/* Green – bottom CCW to right */}
          <path d="M20,26 A9,9 0 0,0 29,17" stroke="#34A853" strokeWidth="4.5" fill="none" strokeLinecap="butt"/>
          {/* Blue horizontal bar */}
          <rect x="20" y="14.8" width="10" height="4.5" fill="#4285F4"/>
          {/* Inner white circle creates the donut */}
          <circle cx="20" cy="17" r="5" fill="white"/>
          <text x="20" y="36" textAnchor="middle"
            fill="#5f6368" fontSize="7" fontWeight="600"
            fontFamily="Arial, sans-serif">Pay</text>
        </svg>
      );

    default:
      return null;
  }
}

export default function PaymentMarquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4 rounded-xl"
      style={{
        border: "1px solid rgba(59,130,246,0.15)",
        animation: "borderPulse 3s ease-in-out infinite",
        maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="marquee-track gap-2">
        {doubled.map((name, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-pointer"
            style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.07)" }}
            whileHover={{
              y: -4,
              background: "rgba(59,130,246,0.06)",
              borderColor: "rgba(59,130,246,0.25)",
              boxShadow: "0 8px 24px rgba(59,130,246,0.12)",
              transition: { duration: 0.2 },
            }}
          >
            <Icon name={name} />
            <span className="text-slate-600 text-xs font-medium whitespace-nowrap">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
