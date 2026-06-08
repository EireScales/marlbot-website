"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, Package, Zap } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, addItem, clearCart, total } = useCart();

  const decreaseQty = (name: string, price: string, qty: number) => {
    if (qty <= 1) {
      removeItem(name);
    } else {
      removeItem(name);
      for (let i = 0; i < qty - 1; i++) addItem({ name, price });
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-500 text-sm mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>
        <h1 className="heading-glow text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
          Your <span className="gradient-text">Cart</span>
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          {items.length === 0
            ? "No items yet"
            : `${items.reduce((s, i) => s + i.qty, 0)} item${items.reduce((s, i) => s + i.qty, 0) === 1 ? "" : "s"}`}
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {items.length === 0 ? (
          /* Empty state */
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-panel p-16 flex flex-col items-center justify-center text-center"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}
            >
              <ShoppingCart size={32} className="text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Your cart is empty</h2>
            <p className="text-slate-400 text-sm mb-8 max-w-xs">
              Add a marlbot product to get started with the best Rocket League training.
            </p>
            <Link href="/products">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Package size={16} />
                Browse Products
              </motion.div>
            </Link>
          </motion.div>
        ) : (
          /* Cart content */
          <motion.div
            key="cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {/* Items list */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20, height: 0 }}
                    className="glass-panel p-5 flex items-center gap-4"
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(96,165,250,0.08))",
                        border: "1px solid rgba(59,130,246,0.2)",
                      }}
                    >
                      <Zap size={20} className="text-blue-500" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm truncate">{item.name}</h3>
                      <p className="text-slate-400 text-xs mt-0.5">Monthly subscription</p>
                      <p className="text-blue-600 font-semibold text-sm mt-1">{item.price}/mo</p>
                    </div>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => decreaseQty(item.name, item.price, item.qty)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                        style={{
                          background: "rgba(0,0,0,0.05)",
                          border: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Minus size={12} className="text-slate-500" />
                      </motion.button>
                      <span className="w-6 text-center text-sm font-semibold text-slate-900">
                        {item.qty}
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => addItem({ name: item.name, price: item.price })}
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                        style={{
                          background: "rgba(59,130,246,0.08)",
                          border: "1px solid rgba(59,130,246,0.2)",
                        }}
                      >
                        <Plus size={12} className="text-blue-500" />
                      </motion.button>
                    </div>

                    {/* Remove */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeItem(item.name)}
                      className="p-2 text-slate-300 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={16} />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>

              <button
                onClick={clearCart}
                className="text-slate-400 hover:text-red-400 text-xs transition-colors mt-2"
              >
                Clear cart
              </button>
            </div>

            {/* Order summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6 h-fit"
            >
              <h2 className="font-semibold text-slate-900 mb-5 text-base">Order Summary</h2>

              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.name} className="flex justify-between text-sm">
                    <span className="text-slate-500 truncate pr-2">
                      {item.name} ×{item.qty}
                    </span>
                    <span className="text-slate-700 font-medium flex-shrink-0">
                      ${(parseFloat(item.price.replace("$", "")) * item.qty).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="pt-4 mb-5"
                style={{ borderTop: "1px solid rgba(59,130,246,0.15)" }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-900 text-sm">Total / mo</span>
                  <span className="text-xl font-semibold text-slate-900">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <p className="text-slate-400 text-xs mt-1">Billed monthly. Cancel anytime.</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2 text-sm"
              >
                <Zap size={15} />
                Checkout Now
              </motion.button>

              <p className="text-slate-400 text-xs text-center mt-3">
                Secure checkout · 7-day refund guarantee
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
