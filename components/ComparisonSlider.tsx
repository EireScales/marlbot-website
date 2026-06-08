"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function ComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex justify-between mb-4 text-sm font-medium">
        <span className="text-slate-500">Without marlbot</span>
        <span className="text-blue-500">With marlbot</span>
      </div>

      <div
        ref={containerRef}
        className="relative h-80 md:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none"
        style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After (right side) */}
        <div className="absolute inset-0">
          <img
            src="/images/after.jpg"
            alt="After marlbot"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Before (left side, clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src="/images/before.jpg"
            alt="Before marlbot"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider Line */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, background: "#3b82f6" }}
          whileHover={{ scaleX: 1.5 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ background: "#3b82f6", boxShadow: "0 4px 20px rgba(59,130,246,0.5)" }}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs" style={{ background: "rgba(15,23,42,0.75)", color: "#94a3b8" }}>
          Before
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs text-white" style={{ background: "rgba(59,130,246,0.85)" }}>
          After
        </div>
      </div>
    </div>
  );
}
