"use client";

import { motion } from "framer-motion";

const payments = [
  { name: "Bitcoin", icon: "₿" },
  { name: "Ethereum", icon: "Ξ" },
  { name: "PayPal", icon: "PP" },
  { name: "Visa", icon: "V" },
  { name: "Mastercard", icon: "M" },
  { name: "Apple Pay", icon: "A" },
  { name: "Google Pay", icon: "G" },
  { name: "USDT", icon: "T" },
];

export default function PaymentMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10" />

      <div className="marquee-track">
        {[...payments, ...payments].map((payment, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 mx-4 glass-panel px-6 py-3 flex items-center gap-3 hover:border-blue-500/50 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">
              {payment.icon}
            </div>
            <span className="text-white font-medium whitespace-nowrap">{payment.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
