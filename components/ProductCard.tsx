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
    <div
      className={`relative glass-panel p-6 transition-all duration-300 hover:-translate-y-1 ${
        popular ? "shadow-lg" : ""
      }`}
      style={
        popular
          ? { border: "1px solid rgba(59,130,246,0.35)", boxShadow: "0 8px 30px rgba(59,130,246,0.12)" }
          : {}
      }
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #3b82f6, #60a5fa)" }}>
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-slate-500 text-sm mb-4">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-slate-900">{price}</span>
          <span className="text-slate-400">/mo</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-slate-600 text-sm">
            <Check size={16} className="text-blue-500 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-200 ${
          popular
            ? "text-white"
            : "text-slate-700 border hover:border-blue-300 hover:text-blue-600"
        }`}
        style={
          popular
            ? { background: "linear-gradient(135deg, #3b82f6, #60a5fa)", boxShadow: "0 4px 20px rgba(59,130,246,0.3)" }
            : { background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.10)" }
        }
      >
        <ShoppingCart size={18} />
        Buy Now
      </button>
    </div>
  );
}
