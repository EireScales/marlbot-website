import { ArrowRight, Play, Zap, ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-marl-blue/10 border border-marl-blue/20 mb-8">
            <Zap size={16} className="text-marl-blue" />
            <span className="text-marl-blue-glow text-sm font-medium">
              v2.0 Now Available
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Get the best{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marl-blue to-blue-400">
              bots.
            </span>
            <br />
            Rank up{" "}
            <span className="text-marl-blue">faster.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-marl-grey-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Advanced Rocket League AI bots built by SSL/GC players.
            Train smarter, play better, and dominate the leaderboard.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
              Get Access
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary flex items-center gap-2 text-lg px-8 py-4">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-2 text-marl-grey-light">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-marl-blue to-blue-600 border-2 border-marl-dark flex items-center justify-center text-xs font-bold text-white"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="ml-3 text-sm">
              <span className="text-white font-semibold">70+</span> members online
            </span>
          </div>
        </div>

        {/* Product Preview Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-panel p-1 overflow-hidden">
            <div className="bg-gradient-to-br from-marl-navy to-marl-dark rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="text-sm text-marl-blue font-semibold mb-2 uppercase tracking-wider">
                    Featured
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    marlbot <span className="text-marl-blue">SSL Multi-Bot</span>
                  </h3>
                  <p className="text-marl-grey-light mb-6">
                    The ultimate training companion. Multiple bot personalities,
                    adaptive difficulty, and real-time performance analytics.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="btn-primary flex items-center gap-2">
                      <ShoppingCart size={18} />
                      Buy Now
                    </button>
                    <div className="px-4 py-3 bg-white/5 rounded-lg text-white font-semibold">
                      $13.34 to $333.78
                    </div>
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-40 bg-gradient-to-br from-marl-blue/20 to-blue-600/20 rounded-lg border border-marl-blue/30 flex items-center justify-center">
                    <span className="text-marl-blue-glow text-sm">Your Bot Graphic Here</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-marl-blue/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
