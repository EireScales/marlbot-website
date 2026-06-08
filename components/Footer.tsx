import { Share2, MessageCircle, Code2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-marl-navy/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-marl-blue to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-white">marlbot</span>
            </div>
            <p className="text-marl-grey-light max-w-sm mb-4">
              Advanced Rocket League bots built by players, for players.
              Train smarter, rank up faster.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-marl-grey hover:text-marl-blue transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-marl-grey hover:text-marl-blue transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-marl-grey hover:text-marl-blue transition-colors">
                <Code2 size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-marl-grey-light">
              <li><Link href="/products" className="hover:text-marl-blue transition-colors">Pricing</Link></li>
              <li><a href="#" className="hover:text-marl-blue transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-marl-blue transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-marl-grey-light">
              <li><a href="#" className="hover:text-marl-blue transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-marl-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-marl-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-marl-grey text-sm">
            © 2026 marlbot. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-marl-grey">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
