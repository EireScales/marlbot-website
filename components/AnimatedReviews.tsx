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

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="glass-card glass-panel p-6 mb-4 shrink-0">
      <div className="flex items-center justify-between mb-3">
        <span className="text-slate-400 text-xs uppercase tracking-wider">{review.access}</span>
        <span className="text-blue-500 font-bold text-sm">{review.rating}/10</span>
      </div>
      <p className="text-slate-700 text-sm leading-relaxed mb-4">{review.text}</p>
      <p className="text-slate-400 text-xs">
        Reached: <span className="text-slate-600">{review.reached}</span>
      </p>
    </div>
  );
}

function Column({ items, direction }: { items: typeof reviews; direction: "up" | "down" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden h-[520px]">
      <motion.div
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col"
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} review={review} />
        ))}
      </motion.div>
    </div>
  );
}

export default function AnimatedReviews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Column items={reviews.slice(0, 4)} direction="up" />
      <Column items={reviews.slice(4, 8)} direction="down" />
      <Column items={reviews.slice(8, 12)} direction="up" />
    </div>
  );
}
