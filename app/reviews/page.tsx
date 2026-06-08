"use client";

import { useState } from "react";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const allReviews = [
  {
    name: "RocketLeaguePro",
    rank: "GC3",
    rating: 5,
    date: "2 days ago",
    content: "Absolutely insane bot. Went from C1 to GC in 3 weeks using the training routines. The aerial mechanics training is next level.",
    helpful: 47,
    product: "marlbot SSL",
  },
  {
    name: "TrainingWheels",
    rank: "D3",
    rating: 5,
    date: "1 week ago",
    content: "Best investment I've made for RL. The bot actually adapts to my playstyle and pushes me to improve. Worth every penny.",
    helpful: 32,
    product: "marlbot Pro",
  },
  {
    name: "SSLGrinder",
    rank: "SSL",
    rating: 5,
    date: "2 weeks ago",
    content: "As an SSL player, I was skeptical. But marlbot actually provides decent training partners. The team coordination mode is clutch.",
    helpful: 28,
    product: "marlbot SSL",
  },
  {
    name: "CasualPlayer",
    rank: "P2",
    rating: 4,
    date: "3 weeks ago",
    content: "Great for learning mechanics. Sometimes the bot is too good for my level but that's good motivation I guess!",
    helpful: 15,
    product: "marlbot Lite",
  },
  {
    name: "AerialKing",
    rank: "C2",
    rating: 5,
    date: "1 month ago",
    content: "The aerial training module is insane. My consistency has gone through the roof. Musty flicks on command now.",
    helpful: 23,
    product: "marlbot Pro",
  },
  {
    name: "FreeStyleFred",
    rank: "GC1",
    rating: 4,
    date: "1 month ago",
    content: "Solid bot overall. Wish there were more customization options for training routines but the base package is excellent value.",
    helpful: 19,
    product: "marlbot SSL",
  },
  {
    name: "Quantum_Q",
    rank: "P1",
    rating: 5,
    date: "2 months ago",
    content: "Went from Silver to Plat in two months of consistent training. The progress tracking feature keeps me accountable. Best purchase I've made.",
    helpful: 41,
    product: "marlbot Lite",
  },
  {
    name: "TournamentPro",
    rank: "GC2",
    rating: 5,
    date: "2 months ago",
    content: "Use it for tournament prep exclusively. The tournament mode in the SSL version is incredibly realistic — it mirrors pro lobbies.",
    helpful: 31,
    product: "marlbot SSL",
  },
];

const INITIAL_COUNT = 4;

export default function ReviewsPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? allReviews : allReviews.slice(0, INITIAL_COUNT);

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Customer <span className="text-blue-500">Reviews</span>
        </h1>
        <p className="text-slate-500 text-lg">
          See what the community is saying about marlbot
        </p>
      </div>

      {/* Rating Summary */}
      <div className="glass-panel p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-slate-900 mb-2">4.9</div>
            <div className="flex gap-1 justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} className="fill-blue-500 text-blue-500" />
              ))}
            </div>
            <div className="text-slate-400 text-sm">Based on 200+ reviews</div>
          </div>

          <div className="flex-1 w-full space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-slate-700 text-sm w-4">{rating}</span>
                <Star size={14} className="text-slate-300" />
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.08)" }}>
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: rating === 5 ? "85%" : rating === 4 ? "12%" : "3%" }}
                  />
                </div>
                <span className="text-slate-400 text-sm w-12 text-right">
                  {rating === 5 ? "85%" : rating === 4 ? "12%" : "3%"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        <AnimatePresence>
          {visibleReviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, delay: index >= INITIAL_COUNT ? (index - INITIAL_COUNT) * 0.07 : 0 }}
              className="glass-panel p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: "linear-gradient(135deg, #3b82f6, #60a5fa)" }}>
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold flex items-center gap-2">
                      {review.name}
                      <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(59,130,246,0.1)", color: "#3b82f6" }}>
                        {review.rank}
                      </span>
                    </div>
                    <div className="text-slate-400 text-sm">{review.product}</div>
                  </div>
                </div>
                <span className="text-slate-400 text-sm">{review.date}</span>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                ))}
              </div>

              <p className="text-slate-600 mb-4">{review.content}</p>

              <div className="flex items-center gap-4 text-sm text-slate-400">
                <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <ThumbsUp size={16} />
                  Helpful ({review.helpful})
                </button>
                <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} />
                  Reply
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More / Show Less */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowAll((v) => !v)}
          className="btn-secondary"
        >
          {showAll
            ? `Show Less`
            : `Load More Reviews (${allReviews.length - INITIAL_COUNT} more)`}
        </motion.button>
      </div>
    </div>
  );
}
