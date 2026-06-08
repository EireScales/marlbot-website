"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, ShoppingCart, Star, Package, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { items } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: Package },
    { href: "/reviews", label: "Reviews", icon: Star },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(false);
    setSearchQuery("");
    router.push("/products");
  };

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
            style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.07)" }}
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
                            background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(96,165,250,0.12))",
                            border: "1px solid rgba(59,130,246,0.3)",
                            color: "#1d4ed8",
                          }
                        : { color: "#64748b", border: "1px solid transparent" }
                    }
                    whileHover={
                      !isActive
                        ? {
                            backgroundColor: "rgba(59,130,246,0.06)",
                            borderColor: "rgba(59,130,246,0.18)",
                            color: "#1e40af",
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
            {/* Search */}
            <AnimatePresence mode="wait">
              {searchOpen ? (
                <motion.form
                  key="search-form"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 200 }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSearch}
                  className="flex items-center gap-1 overflow-hidden"
                  style={{
                    background: "rgba(0,0,0,0.04)",
                    border: "1px solid rgba(59,130,246,0.25)",
                    borderRadius: "0.75rem",
                    padding: "4px 8px",
                  }}
                >
                  <Search size={14} className="text-slate-400 flex-shrink-0" />
                  <input
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none min-w-0"
                  />
                  <button
                    type="button"
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                    className="text-slate-400 hover:text-slate-600 flex-shrink-0"
                  >
                    <X size={14} />
                  </button>
                </motion.form>
              ) : (
                <motion.button
                  key="search-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <Search size={18} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Cart */}
            <Link href="/cart">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #3b82f6, #60a5fa)" }}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            <MagneticButton className="bg-slate-900 hover:bg-slate-800 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm transition-colors text-white">
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
            className="md:hidden p-2 text-slate-500"
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
                          background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(96,165,250,0.08))",
                          border: "1px solid rgba(59,130,246,0.25)",
                          color: "#1d4ed8",
                        }
                      : { color: "#64748b" }
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/cart"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingCart size={18} />
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
