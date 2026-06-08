"use client";

import { motion } from "framer-motion";

const payments = [
  { name: "Bitcoin",    color: "#f7931a", bg: "rgba(247,147,26,0.12)",  symbol: "₿"  },
  { name: "Ethereum",   color: "#627eea", bg: "rgba(98,126,234,0.12)",  symbol: "Ξ"  },
  { name: "PayPal",     color: "#009cde", bg: "rgba(0,156,222,0.12)",   symbol: "PP" },
  { name: "Visa",       color: "#1a56db", bg: "rgba(59,130,246,0.10)",  symbol: "VISA" },
  { name: "USDT",       color: "#26a17b", bg: "rgba(38,161,123,0.12)",  symbol: "₮"  },
  { name: "Apple Pay",  color: "#0f172a", bg: "rgba(15,23,42,0.08)",    symbol: ""  },
  { name: "Google Pay", color: "#4285f4", bg: "rgba(66,133,244,0.12)",  symbol: "G"  },
  { name: "Mastercard", color: null,       bg: null,                     symbol: "MC" },
];

function PaymentIcon({ p }: { p: typeof payments[0] }) {
  if (p.name === "Mastercard") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="15" cy="20" r="12" fill="#eb001b" opacity="0.9" />
        <circle cx="25" cy="20" r="12" fill="#f79e1b" opacity="0.9" />
        <path
          d="M20 10.4a12 12 0 0 1 0 19.2A12 12 0 0 1 20 10.4z"
          fill="#ff5f00"
        />
      </svg>
    );
  }
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill={p.bg!} />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontSize={p.symbol.length > 2 ? "9" : "16"}
        fontWeight="700"
        fill={p.color!}
        fontFamily="system-ui, sans-serif"
        letterSpacing={p.symbol.length > 2 ? "0.5" : "0"}
      >
        {p.symbol}
      </text>
    </svg>
  );
}

export default function PaymentMarquee() {
  const doubled = [...payments, ...payments];

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
        {doubled.map((p, i) => (
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
            <PaymentIcon p={p} />
            <span className="text-slate-600 text-xs font-medium whitespace-nowrap">
              {p.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
