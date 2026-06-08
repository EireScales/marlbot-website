"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingCart, Star, Package, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: Package },
    { href: "/reviews", label: "Reviews", icon: Star },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-4 z-50 mx-4"
    >
      <div className="glass-panel px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.img
              src="/images/rllogo.jpg"
              alt="marlbot logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="h-10 w-auto rounded-lg object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center gap-1 rounded-2xl p-1"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 text-sm font-medium"
                    style={
                      isActive
                        ? {
                            background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.2))",
                            border: "1px solid rgba(99,102,241,0.35)",
                            color: "#fafafa",
                          }
                        : { color: "#a1a1aa", border: "1px solid transparent" }
                    }
                    whileHover={
                      !isActive
                        ? {
                            backgroundColor: "rgba(99,102,241,0.08)",
                            borderColor: "rgba(99,102,241,0.2)",
                            color: "#fafafa",
                          }
                        : {}
                    }
                  >
                    <Icon size={16} />
                    {link.label}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Search size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <ShoppingCart size={18} />
            </motion.button>
            <MagneticButton className="bg-white text-black hover:bg-zinc-100 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm transition-colors">
              Client Login
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 glass-panel p-4"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium"
                  style={
                    isActive
                      ? {
                          background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))",
                          border: "1px solid rgba(99,102,241,0.3)",
                          color: "#fafafa",
                        }
                      : { color: "#a1a1aa" }
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
