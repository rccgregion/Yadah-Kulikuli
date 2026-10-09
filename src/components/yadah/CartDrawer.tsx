import React, { useState } from 'react';
import { X, Trash2, Phone, ShoppingBag, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { useYadahCart } from '../../context/YadahCartContext';
import { YADAH_BRAND } from '../../data/yadahData';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalNgn,
    totalItems,
    clearCart,
    createWhatsAppOrderUrl
  } = useYadahCart();

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    state: 'Lokoja, Kogi State',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    const url = createWhatsAppOrderUrl(customer.name ? customer : undefined);
    window.open(url, '_blank');
  };

  const handleSimulatedCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="relative w-full max-w-md bg-[#141418] border-l border-stone-800 h-full flex flex-col justify-between p-6 overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-red-500" />
              <h3 className="font-serif text-xl font-bold text-white">
                Your Crunch Bag
              </h3>
              <span className="text-xs bg-red-600/30 text-red-400 px-2 py-0.5 rounded-full font-mono font-bold">
                {totalItems} items
              </span>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setOrderComplete(false);
              }}
              className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Order Completed Confirmation State */}
          {orderComplete ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500 mx-auto flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-white font-bold">
                Order Received!
              </h4>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Thank you, <strong className="text-white">{customer.name}</strong>. Your order has been placed with Yadah’s Crunchies dispatch in Lokoja.
              </p>
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-left text-xs text-stone-400 space-y-1">
                <div>Delivery Address: <span className="text-stone-200">{customer.address}, {customer.state}</span></div>
                <div>Phone: <span className="text-stone-200">{customer.phone}</span></div>
                <div>Total to Pay: <span className="text-amber-400 font-bold font-mono">₦{totalNgn.toLocaleString()}</span></div>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <a
                  href={createWhatsAppOrderUrl(customer)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation to WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    clearCart();
                    setOrderComplete(false);
                    setIsCartOpen(false);
                  }}
                  className="py-2 text-xs text-stone-400 hover:text-white"
                >
                  Back to Store
                </button>
              </div>
            </div>
          ) : (
            /* Cart Item List */
            <div className="divide-y divide-stone-800 my-4 max-h-[45vh] overflow-y-auto">
              {cart.length === 0 ? (
                <div className="py-16 text-center text-stone-400 text-xs space-y-3">
                  <p className="text-base text-stone-300 font-serif">Your bag is empty!</p>
                  <p>Choose your favorite pack size of Yadah’s Peppered Flat Kulikuli to start snacking.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="py-3.5 flex gap-3.5 items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover bg-black border border-stone-800 shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-sm text-white">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-500 hover:text-red-400 p-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-amber-400 font-mono">
                        {item.weight}
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-2 border border-stone-800 rounded px-2 py-0.5 text-xs font-mono">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-stone-400 hover:text-white px-1"
                          >
                            -
                          </button>
                          <span className="text-stone-200">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-stone-400 hover:text-white px-1"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-mono text-xs font-bold text-white tabular-nums">
                          ₦{(item.priceNgn * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer Checkout Module */}
        {!orderComplete && cart.length > 0 && (
          <div className="pt-4 border-t border-stone-800 space-y-4">
            
            {/* Customer Quick Address inputs */}
            <div className="space-y-2 p-3 rounded-xl bg-stone-900/80 border border-stone-800 text-xs">
              <span className="block text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Quick Delivery Details (Optional)
              </span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  className="bg-stone-950 border border-stone-800 rounded px-2.5 py-1.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  className="bg-stone-950 border border-stone-800 rounded px-2.5 py-1.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                />
              </div>
              <input
                type="text"
                placeholder="Delivery Address / City / State"
                value={customer.address}
                onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                className="w-full bg-stone-950 border border-stone-800 rounded px-2.5 py-1.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center text-sm font-bold text-white">
              <span>Order Total:</span>
              <span className="font-mono text-xl text-yellow-400 tabular-nums">
                ₦{totalNgn.toLocaleString()}
              </span>
            </div>

            {/* Two Convenient Checkout Options */}
            <div className="space-y-2">
              {/* WhatsApp Checkout Button */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order Directly on WhatsApp</span>
              </button>

              {/* Instant Web Order Button */}
              <button
                onClick={handleSimulatedCheckout}
                className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Submit Order Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[10px] text-stone-500 text-center font-light">
              Cash on Delivery (Lokoja) or Bank Transfer nationwide dispatch.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
