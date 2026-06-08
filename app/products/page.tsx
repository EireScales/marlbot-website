import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const products = [
    {
      name: "Marlbot Lite",
      description: "Entry-level bot for casual players",
      price: "$19.99",
      features: ["Basic mechanics training", "Casual match simulation", "5 bot personalities", "Email support"],
      popular: false,
    },
    {
      name: "Marlbot Pro",
      description: "Advanced AI for serious players",
      price: "$39.99",
      features: ["Advanced mechanics", "Ranked match simulation", "15 bot personalities", "AI learning adaptation", "Discord support"],
      popular: true,
    },
    {
      name: "Marlbot SSL",
      description: "Professional grade bot system",
      price: "$79.99",
      features: ["SSL-level mechanics", "Tournament mode", "Unlimited personalities", "Team coordination", "Priority 24/7 support", "Custom bot creation"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Our <span className="text-blue-500">Products</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Choose the perfect marlbot package for your Rocket League journey.
          All purchases include lifetime updates.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      {/* Logo Marquee */}
      <div
        className="relative overflow-hidden py-6 mb-20 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(219,234,254,0.6) 0%, rgba(191,219,254,0.4) 100%)",
          border: "1px solid rgba(59,130,246,0.2)",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track-right gap-8">
          {[...Array(16)].map((_, i) => (
            <img
              key={i}
              src="/images/rllogo.jpg"
              alt="marlbot"
              className="h-12 w-auto rounded-lg object-contain flex-shrink-0 opacity-80"
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Is marlbot detectable by Psyonix?",
              a: "marlbot runs locally and simulates human input patterns. We maintain strict safety protocols to minimize detection risk.",
            },
            {
              q: "Can I use this in ranked matches?",
              a: "marlbot Pro and SSL versions support ranked simulation. We recommend using training modes for skill development.",
            },
            {
              q: "What platforms are supported?",
              a: "Currently marlbot supports PC (Steam/Epic). Console support is in development.",
            },
            {
              q: "Do you offer refunds?",
              a: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with your purchase.",
            },
          ].map((faq, i) => (
            <div key={i} className="glass-panel p-6">
              <h3 className="text-slate-900 font-semibold mb-2">{faq.q}</h3>
              <p className="text-slate-500 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
