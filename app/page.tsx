"use client";

import { motion, useAnimation } from "framer-motion";
import { Lock, Zap, Check } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedProductCard from "@/components/AnimatedProductCard";
import ComparisonSlider from "@/components/ComparisonSlider";
import PaymentMarquee from "@/components/PaymentMarquee";
import AnimatedReviews from "@/components/AnimatedReviews";

function SafeQualityIcon() {
  const controls = useAnimation();
  return (
    <div
      className="relative w-16 h-16 cursor-default"
      onMouseEnter={() =>
        controls.start({ rotate: 360, transition: { duration: 2.5, repeat: Infinity, ease: "linear" } })
      }
      onMouseLeave={() => controls.stop()}
    >
      <motion.div
        animate={controls}
        className="absolute inset-[-2px] rounded-full"
        style={{ background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, rgba(99,102,241,0) 60%)" }}
      />
      <div
        className="absolute inset-[2px] rounded-full flex items-center justify-center text-2xl z-10"
        style={{ background: "rgba(10,10,15,0.95)" }}
      >
        🛡️
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedHero />

      {/* Products Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          <h2 className="heading-glow text-4xl md:text-5xl font-semibold text-white mb-4">
            Choose Your <span className="gradient-text">Product</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            The most advanced Rocket League bots on the market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedProductCard
            name="marlbot Lite"
            description="Perfect for beginners. Basic mechanics and positioning training."
            price="$9.99"
            image="/images/lite-bot.png"
            features={["Basic mechanics", "Casual mode", "Standard training", "Email support"]}
          />
          <AnimatedProductCard
            name="marlbot Pro"
            description="Advanced AI with machine learning. Rank up faster."
            price="$29.99"
            image="/images/pro-bot.png"
            features={["Advanced mechanics", "Ranked ready", "Custom routines", "AI learning", "Discord support"]}
            popular
          />
          <AnimatedProductCard
            name="marlbot SSL"
            description="Professional grade. SSL-level gameplay simulation."
            price="$49.99"
            image="/images/ssl-bot.png"
            features={["SSL mechanics", "Tournament mode", "Team coordination", "Priority support", "Custom bot creation"]}
          />
        </div>
      </section>

      {/* Comparison Section */}
      <section
        className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-5xl mx-auto"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-xs font-medium tracking-wide uppercase">Working</span>
          </div>
          <h2 className="heading-glow text-4xl font-semibold text-white mb-3">How it works</h2>
          <p className="text-zinc-500 text-sm">Drag the slider to see the difference</p>
        </motion.div>

        <ComparisonSlider />
      </section>

      {/* Features Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Instant Delivery */}
          <motion.div whileHover={{ scale: 1.01 }} className="glass-panel p-8">
            <h3 className="text-base font-semibold text-indigo-400 mb-2 tracking-tight">
              Instant Delivery
            </h3>
            <p className="text-zinc-500 text-sm mb-8" style={{ lineHeight: 1.6 }}>
              Automated dispatch system. Get your license keys immediately after purchase.
            </p>
            <div className="flex items-center gap-0">
              {[
                { Icon: Lock,  label: "Order",   active: false },
                { Icon: Zap,   label: "Process", active: false },
                { Icon: Check, label: "Done",    active: true  },
              ].map(({ Icon, label, active }, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <motion.div
                      whileHover={{
                        boxShadow: "0 0 20px rgba(99,102,241,0.5)",
                        borderColor: "rgba(99,102,241,0.6)",
                      }}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
                      style={{
                        background: active ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.04)",
                        border: active
                          ? "1px solid rgba(99,102,241,0.35)"
                          : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Icon size={16} className={active ? "text-indigo-400" : "text-zinc-500"} />
                    </motion.div>
                    <span className="text-xs text-zinc-600">{label}</span>
                  </div>
                  {i < 2 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 + i * 0.25, ease: "easeOut" }}
                      className="h-px w-10 mx-1 origin-left mb-5"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(99,102,241,0.5), rgba(99,102,241,0.1))",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Safe & Quality */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-panel p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="relative mb-6">
              <div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ background: "rgba(99,102,241,0.2)" }}
              />
              <SafeQualityIcon />
            </div>
            <h3 className="text-base font-semibold text-white mb-2 tracking-tight">Safe & Quality</h3>
            <p className="text-zinc-500 text-sm max-w-[180px]" style={{ lineHeight: 1.65 }}>
              The safest and best premium products on the market.
            </p>
          </motion.div>

          {/* Secure Payments — spans 2 rows */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-panel p-7 lg:row-span-2 overflow-hidden flex flex-col"
          >
            <p className="text-zinc-600 text-xs uppercase tracking-widest mb-1">We accept</p>
            <h3 className="text-base font-semibold text-indigo-400 mb-2 tracking-tight">
              Secure Payments
            </h3>
            <p className="text-zinc-500 text-sm mb-6" style={{ lineHeight: 1.6 }}>
              Cards, crypto, and local methods globally. Checkout in seconds.
            </p>
            <div className="flex-1 flex items-center">
              <PaymentMarquee />
            </div>
          </motion.div>

          {/* Instant Setup — spans 2 cols, has grid bg */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-panel lg:col-span-2 relative overflow-hidden p-10"
          >
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

            {/* Badge — top right */}
            <div
              className="absolute top-7 right-7 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#818cf8",
              }}
            >
              ⚡ Instant Setup
            </div>

            <div className="relative z-10">
              <h3
                className="heading-glow text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight"
                style={{ maxWidth: "26rem" }}
              >
                Designed for{" "}
                <span className="gradient-text">Simplicity</span>
              </h3>
              <p className="text-zinc-500 max-w-sm text-sm" style={{ lineHeight: 1.75 }}>
                Forget complex configurations. Built with a plug-and-play philosophy —
                you're in the game in seconds.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          <h2 className="heading-glow text-4xl font-semibold text-white mb-3">
            Customer <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-zinc-500 text-sm">See what our customers are saying about their experience.</p>
        </motion.div>

        <AnimatedReviews />
      </section>
    </div>
  );
}
