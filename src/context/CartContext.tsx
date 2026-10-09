import React, { createContext, useContext, useState, useEffect } from 'react';
import { KulikuliProduct } from '../data/kulikuli';

export interface CartItem {
  id: string;
  name: string;
  weight: string;
  priceNaira: number;
  image: string;
  quantity: number;
  isWholesale?: boolean;
}

export type PageSection = 'home' | 'about' | 'products' | 'wholesale' | 'contact';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: { id: string; name: string; weight: string; priceNaira: number; image: string; isWholesale?: boolean }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  isBagOpen: boolean;
  setIsBagOpen: (open: boolean) => void;
  formatNaira: (amount: number) => string;
  activePage: PageSection;
  setActivePage: (page: PageSection) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  getWhatsAppOrderUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('yadah_crunch_bag');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isBagOpen, setIsBagOpen] = useState(false);
  const [activePage, setActivePage] = useState<PageSection>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('yadah_crunch_bag', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product: {
    id: string;
    name: string;
    weight: string;
    priceNaira: number;
    image: string;
    isWholesale?: boolean;
  }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          weight: product.weight,
          priceNaira: product.priceNaira,
          image: product.image,
          quantity: 1,
          isWholesale: product.isWholesale
        }
      ];
    });

    showToast(`Added ${product.name} to Crunch Bag`);
    setIsBagOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const formatNaira = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  const getWhatsAppOrderUrl = () => {
    const phoneNumber = '2348162095850';
    if (cart.length === 0) {
      const msg = encodeURIComponent(
        'Hello Yadah Crunchies! I want to order some fresh, spicy artisanal flat kulikuli. Please share your current available stock and delivery details.'
      );
      return `https://wa.me/${phoneNumber}?text=${msg}`;
    }

    const itemsSummary = cart
      .map((item) => `• ${item.name} (${item.weight}) x${item.quantity} = ${formatNaira(item.priceNaira * item.quantity)}`)
      .join('\n');
    const total = cart.reduce((sum, item) => sum + item.priceNaira * item.quantity, 0);

    const message = encodeURIComponent(
      `Hello Yadah Crunchies! 👑\nI would like to place an order from your website:\n\n${itemsSummary}\n\n*Total Amount:* ${formatNaira(total)}\n\nPlease provide payment details and arrange delivery/waybill to my location.`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isBagOpen,
        setIsBagOpen,
        formatNaira,
        activePage,
        setActivePage,
        toastMessage,
        showToast,
        getWhatsAppOrderUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
