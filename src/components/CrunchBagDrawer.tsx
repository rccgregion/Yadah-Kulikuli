import React, { useState } from 'react';
import { X, Trash2, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CrunchBagDrawer: React.FC = () => {
  const {
    cart,
    isBagOpen,
    setIsBagOpen,
    removeFromCart,
    updateQuantity,
    formatNaira,
    clearCart,
    getWhatsAppOrderUrl
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    state: 'Lagos',
    city: '',
    address: '',
    deliveryMethod: 'waybill'
  });

  const total = cart.reduce((sum, item) => sum + item.priceNaira * item.quantity, 0);

  if (!isBagOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderConfirmed(true);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex justify-end">
      <div className="relative w-full max-w-md bg-[#0e0e13] border-l border-amber-900/40 h-full flex flex-col justify-between p-6 sm:p-8 shadow-2xl overflow-y-auto">
        
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-4 text-[#e5b95b]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#cca578] uppercase block">
                  YADAH CRUNCHIES
                </span>
                <h3 className="font-serif text-xl text-white font-light">
                  Your Crunch Bag
                </h3>
              </div>
            </div>
            
            <button
              onClick={() => {
                setIsBagOpen(false);
                setIsCheckingOut(false);
                setOrderConfirmed(false);
              }}
              className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white cursor-pointer"
              aria-label="Close crunch bag"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* If Order Confirmed State */}
          {orderConfirmed ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-950/40 border border-[#e5b95b] mx-auto flex items-center justify-center text-[#e5b95b]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-white font-light">
                Crunch Order Placed!
              </h4>
              <p className="text-xs text-stone-300 font-light leading-relaxed max-w-xs mx-auto">
                Thank you, <strong className="text-amber-200">{customer.name}</strong>! Your order reference <span className="font-mono text-amber-200">#YADAH-{Math.floor(1000 + Math.random() * 9000)}</span> has been registered for packaging at our Lokoja facility.
              </p>
              
              <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 text-left text-xs text-stone-400 space-y-2">
                <div>Recipient: <span className="text-stone-200">{customer.name} ({customer.phone})</span></div>
                <div>Destination: <span className="text-stone-200">{customer.address}, {customer.city}, {customer.state} State</span></div>
                <div>Dispatch Method: <span className="text-[#cca578] capitalize">{customer.deliveryMethod} Dispatch</span></div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/2348162095850?text=${encodeURIComponent(
                    `Hello Yadah Crunchies! I just submitted an order on the website for ${customer.name}. My phone is ${customer.phone}. Please confirm receipt and account details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notify via WhatsApp (+234 816 209 5850)</span>
                </a>

                <button
                  onClick={() => {
                    setOrderConfirmed(false);
                    setIsCheckingOut(false);
                    setIsBagOpen(false);
                  }}
                  className="px-6 py-2.5 rounded-full border border-stone-700 text-stone-300 text-xs tracking-wider uppercase hover:text-white"
                >
                  Done
                </button>
              </div>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Details Form */
            <form onSubmit={handleCheckoutSubmit} className="py-4 space-y-3.5">
              <span className="text-xs uppercase tracking-widest text-[#cca578] block font-sans">
                Delivery & Waybill Information
              </span>

              <div>
                <label className="block text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bukola Adeleke"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                  Active Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0816 209 5850"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                    State (Nigeria)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kogi, Abuja, Lagos"
                    value={customer.state}
                    onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                    Town / City
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lokoja, Ikeja, Garki"
                    value={customer.city}
                    onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                  Detailed Address / Nearest Park Landmark
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zone 8 near State Secretariat"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800 text-[11px] text-stone-300">
                <span className="text-[#cca578] font-semibold block mb-0.5">Order Total: {formatNaira(total)}</span>
                Payment is finalized via Direct Bank Transfer or WhatsApp Confirmation upon waybill issuance.
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="w-1/3 py-2.5 rounded-full border border-stone-700 text-xs text-stone-400 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-2.5 rounded-full bg-gradient-to-r from-[#cca578] to-[#936e43] text-stone-950 font-semibold text-xs tracking-wider uppercase hover:opacity-95"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          ) : (
            /* Bag Items View */
            <div className="divide-y divide-stone-800/80 my-4 max-h-[50vh] overflow-y-auto">
              {cart.length === 0 ? (
                <div className="py-16 text-center text-stone-500 text-xs space-y-3">
                  <p className="text-stone-400">Your Crunch Bag is currently empty.</p>
                  <p className="text-stone-500 italic">Add some crispy flat kulikuli to experience the golden crunch!</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="py-4 flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover bg-black border border-stone-800 shrink-0"
                    />
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm text-white font-normal">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-500 hover:text-red-400 p-1 cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-[#cca578] font-sans">
                          {item.weight}
                        </span>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-2 border border-stone-800 rounded px-2 py-0.5 text-xs font-mono">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-stone-400 hover:text-white px-1 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-stone-200">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-stone-400 hover:text-white px-1 cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-mono text-xs text-amber-200 font-semibold tabular-nums">
                          {formatNaira(item.priceNaira * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer Actions (Only when items exist and not in confirmed state) */}
        {!orderConfirmed && !isCheckingOut && cart.length > 0 && (
          <div className="pt-4 border-t border-stone-800 space-y-3">
            <div className="flex justify-between text-sm font-semibold text-white">
              <span>Crunch Bag Total:</span>
              <span className="font-mono text-amber-200 tabular-nums">{formatNaira(total)}</span>
            </div>

            <div className="space-y-2">
              {/* Direct Checkout button */}
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#cca578] via-[#e5b95b] to-[#cca578] hover:opacity-95 text-stone-950 text-xs font-semibold tracking-[0.16em] uppercase transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Direct Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Instant WhatsApp Order Hotline */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-950/70 border border-emerald-700/60 hover:bg-emerald-900/80 text-emerald-300 text-xs font-mono tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant Order on WhatsApp (+234 816 209 5850)</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 font-sans text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[#cca578]" />
              <span>Hygienic Packaging · Dispatch from Lokoja to 36 States</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
