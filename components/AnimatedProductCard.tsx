"use client";

import { motion } from "framer-motion";
import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

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
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({ name, price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="relative glass-panel overflow-hidden group"
      style={
        popular
          ? {
              border: "1px solid rgba(59,130,246,0.35)",
              boxShadow: "0 0 40px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
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
            style={{ background: "linear-gradient(135deg, #3b82f6, #60a5fa)" }}
          >
            BEST SELLER
          </span>
        </motion.div>
      )}

      {/* Image area */}
      <div
        className="relative h-56 overflow-hidden"
        style={{ borderRadius: "1rem 1rem 0 0" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.18), rgba(191,219,254,0.9))",
          }}
        />

        {image && (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 30%, rgba(191,219,254,0.6) 65%, rgba(191,219,254,0.95) 100%)",
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">{name}</h3>
        <p className="text-slate-500 text-sm mb-4" style={{ lineHeight: 1.6 }}>
          {description}
        </p>

        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-3xl font-semibold text-slate-900 tracking-tight">{price}</span>
          <span className="text-slate-400 text-sm">/mo</span>
        </div>

        <ul className="space-y-2.5 mb-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-2.5 text-slate-600 text-sm"
            >
              <Check size={14} className="text-blue-500 flex-shrink-0" />
              {feature}
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
          style={
            added
              ? {
                  background: "linear-gradient(135deg, #22c55e, #4ade80)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(34,197,94,0.3)",
                }
              : popular
              ? {
                  background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
                }
              : {
                  background: "rgba(0,0,0,0.04)",
                  color: "#334155",
                  border: "1px solid rgba(0,0,0,0.10)",
                }
          }
        >
          {added ? (
            <>
              <Check size={16} />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart size={16} />
              Add to Cart
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
