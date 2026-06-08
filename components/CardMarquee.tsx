"use client";

import { motion } from "framer-motion";

const cardBrands = [
  "Visa",
  "Mastercard",
  "Amex",
  "Discover",
  "Maestro",
  "UnionPay",
  "JCB",
  "Diners",
];

function CardIcon({ name }: { name: string }) {
  switch (name) {
    case "Visa":
      return (
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
          <rect width="56" height="36" rx="4" fill="#1434CB" />
          {/* gold stripe at bottom */}
          <rect y="26" width="56" height="10" rx="0" fill="#0E238E" />
          <rect y="26" width="56" height="10" rx="0" fill="#C8A84B" opacity="0.3" />
          <text
            x="28" y="22" textAnchor="middle"
            fill="white" fontSize="14" fontWeight="900" fontStyle="italic"
            fontFamily="Arial, sans-serif" letterSpacing="2"
          >
            VISA
          </text>
        </svg>
      );

    case "Mastercard":
      return (
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
          <rect width="56" height="36" rx="4" fill="#1A1A1A" />
          <circle cx="21" cy="18" r="11" fill="#EB001B" />
          <circle cx="35" cy="18" r="11" fill="#F79E1B" />
          <path
            d="M28 8.9a11 11 0 0 1 0 18.2A11 11 0 0 1 28 8.9z"
            fill="#FF5F00"
          />
        </svg>
      );

    case "Amex":
      return (
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
          <rect width="56" height="36" rx="4" fill="#016FD0" />
          {/* Centurion silhouette simplified */}
          <text
            x="28" y="14" textAnchor="middle"
            fill="white" fontSize="6" fontWeight="700"
            fontFamily="Arial, sans-serif" letterSpacing="0.8"
          >
            AMERICAN
          </text>
          <text
            x="28" y="23" textAnchor="middle"
            fill="white" fontSize="6" fontWeight="700"
            fontFamily="Arial, sans-serif" letterSpacing="0.8"
          >
            EXPRESS
          </text>
          {/* Centurion helmet outline (simplified) */}
          <path
            d="M27 27 Q28 25 29 27 L30 32 Q28 33 26 32 Z"
            fill="white" opacity="0.35"
          />
        </svg>
      );

    case "Discover":
      return (
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
          <rect width="56" height="36" rx="4" fill="white" />
          <rect width="56" height="36" rx="4" stroke="#d1d5db" strokeWidth="0.6" />
          {/* Orange "globe" circle bleeds off right edge */}
          <circle cx="45" cy="18" r="15" fill="#F76F20" />
          <text
            x="21" y="20" textAnchor="middle"
            fill="#231F20" fontSize="5.5" fontWeight="700"
            fontFamily="Arial, sans-serif" letterSpacing="0.4"
          >
            DISCOVER
          </text>
        </svg>
      );

    case "Maestro":
      return (
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
          <rect width="56" height="36" rx="4" fill="white" />
          <rect width="56" height="36" rx="4" stroke="#d1d5db" strokeWidth="0.6" />
          <circle cx="21" cy="17" r="10" fill="#0099DF" />
          <circle cx="35" cy="17" r="10" fill="#E8192C" opacity="0.88" />
          {/* overlap — purple-ish blend */}
          <path
            d="M28 8.4a10 10 0 0 1 0 17.2A10 10 0 0 1 28 8.4z"
            fill="#6B11A0" opacity="0.45"
          />
          <text
            x="28" y="32" textAnchor="middle"
            fill="#333" fontSize="5" fontWeight="600"
            fontFamily="Arial, sans-serif" letterSpacing="0.3"
          >
            maestro
          </text>
        </svg>
      );

    case "UnionPay":
      return (
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
          {/* Red left section */}
          <rect width="56" height="36" rx="4" fill="#EB0029" />
          {/* Dark blue right section */}
          <path d="M24 0 H52 A4 4 0 0 1 56 4 V32 A4 4 0 0 1 52 36 H24 Z" fill="#00447C" />
          {/* White "UP" text */}
          <text
            x="40" y="23" textAnchor="middle"
            fill="white" fontSize="12" fontWeight="900"
            fontFamily="Arial, sans-serif" letterSpacing="1"
          >
            UP
          </text>
          {/* Small swoosh accent */}
          <path
            d="M10 12 Q16 8 14 18 Q12 26 18 26"
            stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.9"
          />
        </svg>
      );

    case "JCB":
      return (
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
          <rect width="56" height="36" rx="4" fill="white" />
          <rect width="56" height="36" rx="4" stroke="#d1d5db" strokeWidth="0.6" />
          {/* Three rounded pill shapes */}
          <rect x="5"  y="5" width="15" height="26" rx="7.5" fill="#003087" />
          <rect x="21" y="5" width="15" height="26" rx="7.5" fill="#CC0000" />
          <rect x="37" y="5" width="15" height="26" rx="7.5" fill="#009A44" />
          <text
            x="12.5" y="22" textAnchor="middle"
            fill="white" fontSize="10" fontWeight="900"
            fontFamily="Arial, sans-serif"
          >
            J
          </text>
          <text
            x="28.5" y="22" textAnchor="middle"
            fill="white" fontSize="10" fontWeight="900"
            fontFamily="Arial, sans-serif"
          >
            C
          </text>
          <text
            x="44.5" y="22" textAnchor="middle"
            fill="white" fontSize="10" fontWeight="900"
            fontFamily="Arial, sans-serif"
          >
            B
          </text>
        </svg>
      );

    case "Diners":
      return (
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
          <rect width="56" height="36" rx="4" fill="white" />
          <rect width="56" height="36" rx="4" stroke="#d1d5db" strokeWidth="0.6" />
          {/* Diners Club logo: circle split by vertical line */}
          <circle cx="28" cy="16" r="12" fill="none" stroke="#004A97" strokeWidth="1.8" />
          <line x1="28" y1="4" x2="28" y2="28" stroke="#004A97" strokeWidth="1.8" />
          <text
            x="28" y="34" textAnchor="middle"
            fill="#004A97" fontSize="4" fontWeight="600"
            fontFamily="Arial, sans-serif" letterSpacing="0.5"
          >
            DINERS CLUB
          </text>
        </svg>
      );

    default:
      return null;
  }
}

export default function CardMarquee() {
  const doubled = [...cardBrands, ...cardBrands];

  return (
    <div
      className="relative overflow-hidden py-4 rounded-xl"
      style={{
        border: "1px solid rgba(59,130,246,0.15)",
        animation: "borderPulse 3s ease-in-out infinite",
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="marquee-track gap-2">
        {doubled.map((name, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-pointer"
            style={{
              background: "rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.07)",
            }}
            whileHover={{
              y: -4,
              background: "rgba(59,130,246,0.06)",
              borderColor: "rgba(59,130,246,0.25)",
              boxShadow: "0 8px 24px rgba(59,130,246,0.12)",
              transition: { duration: 0.2 },
            }}
          >
            <CardIcon name={name} />
            <span className="text-slate-600 text-xs font-medium whitespace-nowrap">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
