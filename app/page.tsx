"use client";

import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedProductCard from "@/components/AnimatedProductCard";
import ComparisonSlider from "@/components/ComparisonSlider";
import PaymentMarquee from "@/components/PaymentMarquee";
import AnimatedReviews from "@/components/AnimatedReviews";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedHero />

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Choose Your <span className="text-blue-400">Product</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The most advanced Rocket League bots on the market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedProductCard
            name="marlbot Lite"
            description="Perfect for beginners. Basic mechanics and positioning training."
            price="$9.99"
            features={["Basic mechanics", "Casual mode", "Standard training", "Email support"]}
          />
          <AnimatedProductCard
            name="marlbot Pro"
            description="Advanced AI with machine learning. Rank up faster."
            price="$29.99"
            features={["Advanced mechanics", "Ranked ready", "Custom routines", "AI learning", "Discord support"]}
            popular
          />
          <AnimatedProductCard
            name="marlbot SSL"
            description="Professional grade. SSL-level gameplay simulation."
            price="$49.99"
            features={["SSL mechanics", "Tournament mode", "Team coordination", "Priority support", "Custom bot creation"]}
          />
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-sm">Working</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">How it works?</h2>
          <p className="text-gray-400">Drag the slider to see the difference</p>
        </motion.div>

        <ComparisonSlider />
      </section>

      {/* Features Bento Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Instant Delivery */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-8"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">Instant Delivery</h3>
            <p className="text-gray-400 text-sm mb-6">Automated dispatch system. Get your license keys immediately.</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="h-0.5 w-8 bg-gray-700" />
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="h-0.5 w-8 bg-gray-700" />
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
            </div>
          </motion.div>

          {/* Safe & Quality */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl" />
              <div className="relative w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <span className="text-3xl">🛡️</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Safe & Quality</h3>
            <p className="text-gray-400 text-sm">We offer you the safest and best premium products on the market.</p>
          </motion.div>

          {/* Secure Payments */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-8 lg:row-span-2"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">Secure Payments</h3>
            <p className="text-gray-400 text-sm mb-6">
              Checkout instantly using your favorite provider. We support cards, crypto, and local methods globally.
            </p>
            <PaymentMarquee />
          </motion.div>

          {/* Instant Setup */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-8 lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <span className="text-blue-400 text-sm">⚡ Instant Setup</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Designed for <span className="text-blue-400">Simplicity</span>
            </h3>
            <p className="text-gray-400 max-w-xl">
              Forget complex configurations. Our software is built with a plug-and-play philosophy,
              getting you into the game in seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Customer <span className="text-blue-400">Reviews</span>
          </h2>
          <p className="text-gray-400">See what our customers are saying about their experience.</p>
        </motion.div>

        <AnimatedReviews />
      </section>
    </div>
  );
}
