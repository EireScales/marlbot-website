"use client";

import { motion, useAnimation } from "framer-motion";
import { Lock, Zap, Check } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedProductCard from "@/components/AnimatedProductCard";
import ComparisonSlider from "@/components/ComparisonSlider";
import PaymentMarquee from "@/components/PaymentMarquee";
import AnimatedReviews from "@/components/AnimatedReviews";
import CardMarquee from "@/components/CardMarquee";

// Shared wiggle variant for the three bento boxes
const wiggleVariants = {
  idle: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -1.5, 1.5, -1, 1, 0],
    scale: 1.015,
    transition: {
      rotate: {
        duration: 0.45,
        repeat: Infinity,
        repeatDelay: 1.2,
        ease: "easeInOut" as const,
      },
      scale: { duration: 0.15 },
    },
  },
};

function InstantDeliveryFlow() {
  const CYCLE = 3;

  const nodes = [
    { Icon: Lock, label: "Order" },
    { Icon: Zap, label: "Process" },
    { Icon: Check, label: "Done" },
  ];

  // Each entry: glow times + shadow keyframes for the 3-second cycle
  const nodeAnims = [
    {
      times: [0, 0.15, 0.28, 1],
      shadow: [
        "0 0 18px rgba(59,130,246,0.85)",
        "0 0 18px rgba(59,130,246,0.85)",
        "0 0 0px rgba(59,130,246,0)",
        "0 0 0px rgba(59,130,246,0)",
      ],
    },
    {
      times: [0, 0.39, 0.4, 0.55, 0.68, 1],
      shadow: [
        "0 0 0px rgba(59,130,246,0)",
        "0 0 0px rgba(59,130,246,0)",
        "0 0 18px rgba(59,130,246,0.85)",
        "0 0 18px rgba(59,130,246,0.85)",
        "0 0 0px rgba(59,130,246,0)",
        "0 0 0px rgba(59,130,246,0)",
      ],
    },
    {
      times: [0, 0.79, 0.8, 0.92, 1],
      shadow: [
        "0 0 0px rgba(59,130,246,0)",
        "0 0 0px rgba(59,130,246,0)",
        "0 0 18px rgba(59,130,246,0.85)",
        "0 0 18px rgba(59,130,246,0.85)",
        "0 0 0px rgba(59,130,246,0)",
      ],
    },
  ];

  // Connector light-sweep: [connector 0, connector 1]
  const connAnims = [
    {
      times: [0, 0.14, 0.4, 0.45, 0.55, 1],
      scaleX: [0, 0, 1, 1, 1, 1],
      opacity: [0, 0, 1, 1, 0, 0],
    },
    {
      times: [0, 0.54, 0.8, 0.85, 0.93, 1],
      scaleX: [0, 0, 1, 1, 1, 1],
      opacity: [0, 0, 1, 1, 0, 0],
    },
  ];

  return (
    <div className="relative flex items-center">
      {/* Traveling light dot — moves Order→Process→Done in a loop */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 20,
          height: 20,
          top: 12,
          left: -10,
          zIndex: 20,
          background:
            "radial-gradient(circle, #fff 0%, rgba(147,197,253,0.95) 30%, rgba(59,130,246,0.5) 60%, transparent 75%)",
          boxShadow: "0 0 8px rgba(59,130,246,0.7), 0 0 16px rgba(59,130,246,0.3)",
        }}
        animate={{ x: [22, 22, 114, 114, 206, 206] }}
        transition={{
          duration: CYCLE,
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.15, 0.4, 0.55, 0.8, 1],
          ease: "easeInOut",
        }}
      />

      {nodes.map(({ Icon, label }, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col items-center gap-1.5">
            <motion.div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              animate={{ boxShadow: nodeAnims[i].shadow }}
              transition={{
                duration: CYCLE,
                repeat: Infinity,
                times: nodeAnims[i].times,
                ease: "easeInOut",
              }}
              style={{
                background: "rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <Icon size={16} className="text-slate-400" />
            </motion.div>
            <span className="text-xs text-slate-400">{label}</span>
          </div>
          {i < 2 && (
            <div className="relative h-px w-10 mx-1 mb-5">
              <div
                className="absolute inset-0"
                style={{ background: "rgba(0,0,0,0.08)" }}
              />
              {/* Light sweep along the connector */}
              <motion.div
                className="absolute left-0 origin-left"
                style={{
                  height: 2,
                  top: -0.5,
                  right: 0,
                  background:
                    "linear-gradient(to right, rgba(147,197,253,1), rgba(59,130,246,0.3))",
                  boxShadow: "0 0 4px rgba(59,130,246,0.5)",
                }}
                animate={{
                  scaleX: connAnims[i].scaleX,
                  opacity: connAnims[i].opacity,
                }}
                transition={{
                  duration: CYCLE,
                  repeat: Infinity,
                  times: connAnims[i].times,
                  ease: "easeOut",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

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
        style={{ background: "conic-gradient(from 0deg, #3b82f6, #60a5fa, rgba(59,130,246,0) 60%)" }}
      />
      <div
        className="absolute inset-[2px] rounded-full flex items-center justify-center text-2xl z-10"
        style={{ background: "rgba(219,234,254,0.97)" }}
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
          <h2 className="heading-glow text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            Choose Your <span className="gradient-text">Product</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            The most advanced Rocket League bots on the market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedProductCard
            name="Marlbot Lite"
            description="Perfect for beginners. Basic mechanics and positioning training."
            price="$19.99"
            image="/images/lite-bot.jpg"
            features={["Basic mechanics", "Casual mode", "Standard training", "Email support"]}
          />
          <AnimatedProductCard
            name="Marlbot Pro"
            description="Advanced AI with machine learning. Rank up faster."
            price="$39.99"
            image="/images/pro-bot.jpg"
            features={["Advanced mechanics", "Ranked ready", "Custom routines", "AI learning", "Discord support"]}
            popular
          />
          <AnimatedProductCard
            name="Marlbot SSL"
            description="Professional grade. SSL-level gameplay simulation."
            price="$79.99"
            image="/images/ssl-bot.jpg"
            features={["SSL mechanics", "Tournament mode", "Team coordination", "Priority support", "Custom bot creation"]}
          />
        </div>
      </section>

      {/* Comparison Section */}
      <section
        className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{ borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
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
            <span className="text-green-600 text-xs font-medium tracking-wide uppercase">Working</span>
          </div>
          <h2 className="heading-glow text-4xl font-semibold text-slate-900 mb-3">How it works</h2>
          <p className="text-slate-400 text-sm">Drag the slider to see the difference</p>
        </motion.div>

        <ComparisonSlider />
      </section>

      {/* Features Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Instant Delivery — wiggle + traveling light */}
          <motion.div
            variants={wiggleVariants}
            initial="idle"
            whileHover="hover"
            className="glass-panel p-8"
          >
            <h3 className="text-base font-semibold text-blue-600 mb-2 tracking-tight">
              Instant Delivery
            </h3>
            <p className="text-slate-500 text-sm mb-8" style={{ lineHeight: 1.6 }}>
              Automated dispatch system. Get your license keys immediately after purchase.
            </p>
            <InstantDeliveryFlow />
          </motion.div>

          {/* Safe & Quality — wiggle */}
          <motion.div
            variants={wiggleVariants}
            initial="idle"
            whileHover="hover"
            className="glass-panel p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="relative mb-6">
              <div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ background: "rgba(59,130,246,0.15)" }}
              />
              <SafeQualityIcon />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">Safe & Quality</h3>
            <p className="text-slate-500 text-sm max-w-[180px]" style={{ lineHeight: 1.65 }}>
              The safest and best premium products on the market.
            </p>
          </motion.div>

          {/* Secure Payments — spans 2 rows (no wiggle, not requested) */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-panel p-7 lg:row-span-2 overflow-hidden flex flex-col"
          >
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">We accept</p>
            <h3 className="text-base font-semibold text-blue-600 mb-2 tracking-tight">
              Secure Payments
            </h3>
            <p className="text-slate-500 text-sm mb-6" style={{ lineHeight: 1.6 }}>
              Cards, crypto, and local methods globally. Checkout in seconds.
            </p>
            <div className="flex-1 flex flex-col gap-3 justify-center">
              <PaymentMarquee />
              <CardMarquee />
            </div>
          </motion.div>

          {/* Designed for Simplicity — spans 2 cols, wiggle */}
          <motion.div
            variants={wiggleVariants}
            initial="idle"
            whileHover="hover"
            className="glass-panel lg:col-span-2 relative overflow-hidden p-10"
          >
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

            {/* Badge — top right */}
            <div
              className="absolute top-7 right-7 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.2)",
                color: "#3b82f6",
              }}
            >
              ⚡ Instant Setup
            </div>

            <div className="relative z-10">
              <h3
                className="heading-glow text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight"
                style={{ maxWidth: "26rem" }}
              >
                Designed for{" "}
                <span className="gradient-text">Simplicity</span>
              </h3>
              <p className="text-slate-500 max-w-sm text-sm" style={{ lineHeight: 1.75 }}>
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
          <h2 className="heading-glow text-4xl font-semibold text-slate-900 mb-3">
            Customer <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-slate-400 text-sm">See what our customers are saying about their experience.</p>
        </motion.div>

        <AnimatedReviews />
      </section>
    </div>
  );
}
