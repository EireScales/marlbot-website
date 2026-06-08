"use client";

import { motion } from "framer-motion";
import { Check, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  image?: string;
}

export default function AnimatedProductCard({
  name,
  description,
  price,
  features,
  popular = false,
  image,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="relative glass-panel overflow-hidden"
      style={
        popular
          ? {
              border: "1px solid rgba(99,102,241,0.35)",
              boxShadow: "0 0 40px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
            }
          : {}
      }
    >
      {popular && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 z-20"
        >
          <span
            className="text-white text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          >
            BEST SELLER
          </span>
        </motion.div>
      )}

      {/* Image area */}
      <div
        className="relative h-64 overflow-hidden"
        style={{ borderRadius: "1rem 1rem 0 0" }}
      >
        {image ? (
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(17,17,24,0.9))",
            }}
          />
        )}

        {/* Bottom gradient overlay for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 35%, rgba(10,10,15,0.75) 70%, rgba(10,10,15,0.98) 100%)",
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">{name}</h3>
        <p className="text-zinc-500 text-sm mb-4" style={{ lineHeight: 1.6 }}>
          {description}
        </p>

        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-3xl font-semibold text-white tracking-tight">{price}</span>
          <span className="text-zinc-600 text-sm">/mo</span>
        </div>

        <ul className="space-y-2.5 mb-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-2.5 text-zinc-400 text-sm"
            >
              <Check size={14} className="text-indigo-400 flex-shrink-0" />
              {feature}
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
          style={
            popular
              ? {
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                }
              : {
                  background: "rgba(255,255,255,0.04)",
                  color: "#fafafa",
                  border: "1px solid rgba(255,255,255,0.08)",
                }
          }
        >
          <ShoppingCart size={16} />
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  );
}
