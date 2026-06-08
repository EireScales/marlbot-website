import { Check, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
}

export default function ProductCard({ name, description, price, features, popular }: ProductCardProps) {
  return (
    <div className={`relative glass-panel p-6 hover:border-marl-blue/30 transition-all duration-300 hover:transform hover:-translate-y-1 ${
      popular ? "border-marl-blue/50 shadow-lg shadow-blue-500/10" : ""
    }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-marl-blue text-white text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-marl-grey-light text-sm mb-4">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-marl-grey">/mo</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-marl-grey-light text-sm">
            <Check size={16} className="text-marl-blue flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <button className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-200 ${
        popular
          ? "bg-marl-blue hover:bg-marl-blue-glow text-white shadow-lg shadow-blue-500/25"
          : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
      }`}>
        <ShoppingCart size={18} />
        Buy Now
      </button>
    </div>
  );
}
