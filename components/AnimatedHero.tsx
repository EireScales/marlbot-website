"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
        style={{ background: "rgba(59,130,246,0.12)" }}
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(96,165,250,0.10)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap size={14} className="text-blue-500" />
            </motion.div>
            <span className="text-blue-600 text-sm font-medium tracking-wide">
              v2.0 Now Available
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-glow text-5xl md:text-7xl font-semibold text-slate-900 mb-6"
          >
            Get the best{" "}
            <span className="gradient-text">bots.</span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-blue-500 inline-block"
            >
              Rank up faster.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-slate-500 max-w-xl mx-auto mb-10"
            style={{ lineHeight: 1.7 }}
          >
            Advanced Rocket League AI bots built by SSL/GC players.
            Train smarter, play better, and dominate the leaderboard.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://discord.gg/8ATPhSTKjG" target="_blank" rel="noopener noreferrer">
              <MagneticButton className="btn-primary flex items-center gap-2 text-base">
                Get Access
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </MagneticButton>
            </a>

            <MagneticButton className="btn-secondary flex items-center gap-2 text-base">
              Watch Demo
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "10k+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-semibold text-slate-900 mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
