"use client";

import { motion } from "framer-motion";
import { Check, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function AnimatedProductCard({
  name,
  description,
  price,
  features,
  popular = false,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative glass-panel overflow-hidden ${
        popular ? "border-blue-500/50 shadow-lg shadow-blue-500/20" : ""
      }`}
    >
      {popular && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 z-10"
        >
          <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            BEST SELLER
          </span>
        </motion.div>
      )}

      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-gray-900 flex items-center justify-center"
        >
          <span className="text-6xl">🚗</span>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-gray-500">/mo</span>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <Check size={16} className="text-blue-500 flex-shrink-0" />
              {feature}
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-200 ${
            popular
              ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/25"
              : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
          }`}
        >
          <ShoppingCart size={18} />
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  );
}
