import type { CartContextType } from "@/components/features/type";
import { createContext, useState, type ReactNode } from "react";

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: { children: ReactNode }) {
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    setInCart(true);
    setQuantity((prev) => (prev > 0 ? prev : 1));
  };

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  const remove = () => {
    setInCart(false);
    setQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{ inCart, quantity, addToCart, increase, decrease, remove }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
