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
        <span className="text-gray-400">Without marlbot</span>
        <span className="text-blue-400">With marlbot</span>
      </div>

      <div
        ref={containerRef}
        className="relative h-80 md:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After (right side) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-gray-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-white font-bold text-xl">SSL Level Gameplay</p>
              <p className="text-blue-400">Perfect positioning & mechanics</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        {/* Before (left side, clipped) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">😅</div>
              <p className="text-gray-400 font-bold text-xl">Struggling in Plat</p>
              <p className="text-gray-500">Inconsistent mechanics</p>
            </div>
          </div>
        </div>

        {/* Slider Line */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-blue-500 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          whileHover={{ scaleX: 1.5 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-gray-900/80 rounded-full text-xs text-gray-400">
          Before
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-blue-500/80 rounded-full text-xs text-white">
          After
        </div>
      </div>
    </div>
  );
}
