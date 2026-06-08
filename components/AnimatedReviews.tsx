"use client";

import { motion } from "framer-motion";

const reviews = [
  { id: 1, name: "Customer", access: "3 MONTH ACCESS", rating: 10, text: "Exactly as described. Got me to GC2 over the access period.", reached: "GC2" },
  { id: 2, name: "Customer", access: "3 MONTH ACCESS", rating: 8, text: "Climbed to GC2. Awesome experience.", reached: "GC2" },
  { id: 3, name: "Customer", access: "1 WEEK ACCESS", rating: 8, text: "One week was enough to lock in real improvements. Hit GC1 — perfect.", reached: "GC1" },
  { id: 4, name: "Customer", access: "3 MONTH ACCESS", rating: 7, text: "Took me to GC3. Great service throughout.", reached: "GC3" },
  { id: 5, name: "Customer", access: "LIFETIME ACCESS", rating: 9, text: "Quick response, GC2 reached. Lifetime is worth it.", reached: "GC2" },
  { id: 6, name: "Customer", access: "1 WEEK ACCESS", rating: 7, text: "1 week deal works as advertised. Now at GC2.", reached: "GC2" },
  { id: 7, name: "Customer", access: "3 MONTH ACCESS", rating: 7, text: "Fast delivery and got me to GC2. Solid all around.", reached: "GC2" },
  { id: 8, name: "Customer", access: "3 MONTH ACCESS", rating: 8, text: "Bot is actually insane and quick response throughout.", reached: "SSL" },
  { id: 9, name: "Customer", access: "LIFETIME ACCESS", rating: 10, text: "Reached SSL with the lifetime access. Great service from start to finish.", reached: "SSL" },
  { id: 10, name: "Customer", access: "1 WEEK ACCESS", rating: 8, text: "Ts is acc crazy. Worth every cent.", reached: "SSL" },
  { id: 11, name: "Customer", access: "1 WEEK ACCESS", rating: 10, text: "Hit GC1 in a week. Would recommend without hesitation.", reached: "GC1" },
  { id: 12, name: "Customer", access: "1 DAY ACCESS", rating: 9, text: "One day pass and I was amazed at the quality. Now sitting at GC3.", reached: "GC3" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AnimatedReviews() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
    >
      {reviews.map((review) => (
        <motion.div
          key={review.id}
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="glass-card glass-panel p-6 break-inside-avoid"
        >
          {/* Top row: access type + rating */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500 text-xs uppercase tracking-wider">
              {review.access}
            </span>
            <span className="text-red-500 font-bold text-sm">
              {review.rating}/10
            </span>
          </div>

          {/* Review text */}
          <p className="text-white text-sm leading-relaxed mb-4">{review.text}</p>

          {/* Bottom: reached rank */}
          <p className="text-gray-500 text-xs">
            Reached: <span className="text-gray-400">{review.reached}</span>
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
