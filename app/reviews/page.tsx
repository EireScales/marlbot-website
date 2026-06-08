import { Star, ThumbsUp, MessageCircle } from "lucide-react";

const reviews = [
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
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Customer <span className="text-marl-blue">Reviews</span>
        </h1>
        <p className="text-marl-grey-light text-lg">
          See what the community is saying about marlbot
        </p>
      </div>

      {/* Rating Summary */}
      <div className="glass-panel p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">4.9</div>
            <div className="flex gap-1 justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} className="fill-marl-blue text-marl-blue" />
              ))}
            </div>
            <div className="text-marl-grey-light text-sm">Based on 200+ reviews</div>
          </div>

          <div className="flex-1 w-full space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-white text-sm w-4">{rating}</span>
                <Star size={14} className="text-marl-grey" />
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-marl-blue rounded-full"
                    style={{ width: rating === 5 ? "85%" : rating === 4 ? "12%" : "3%" }}
                  />
                </div>
                <span className="text-marl-grey text-sm w-12 text-right">
                  {rating === 5 ? "85%" : rating === 4 ? "12%" : "3%"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="glass-panel p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-marl-blue to-blue-600 flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold flex items-center gap-2">
                    {review.name}
                    <span className="text-xs bg-marl-blue/20 text-marl-blue px-2 py-0.5 rounded">
                      {review.rank}
                    </span>
                  </div>
                  <div className="text-marl-grey text-sm">{review.product}</div>
                </div>
              </div>
              <span className="text-marl-grey text-sm">{review.date}</span>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-marl-blue text-marl-blue" />
              ))}
            </div>

            <p className="text-marl-grey-light mb-4">{review.content}</p>

            <div className="flex items-center gap-4 text-sm text-marl-grey">
              <button className="flex items-center gap-2 hover:text-marl-blue transition-colors">
                <ThumbsUp size={16} />
                Helpful ({review.helpful})
              </button>
              <button className="flex items-center gap-2 hover:text-marl-blue transition-colors">
                <MessageCircle size={16} />
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="btn-secondary">Load More Reviews</button>
      </div>
    </div>
  );
}
