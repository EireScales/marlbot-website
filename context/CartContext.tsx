"use client";

import { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  name: string;
  price: string;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("marlbot-cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("marlbot-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CartItem, "qty">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing)
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (name: string) =>
    setItems((prev) => prev.filter((i) => i.name !== name));

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.qty;
  }, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
