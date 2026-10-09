import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Phone, MessageCircle } from 'lucide-react';
import { useCart, PageSection } from '../context/CartContext';

export const Footer: React.FC = () => {
  const { setActivePage } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleNav = (page: PageSection) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-stone-800/80 pt-16 pb-12 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800/60">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-4 text-[#e5b95b]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
              <div className="flex items-baseline gap-1.5">
                <span
                  style={{ fontFamily: "'Alex Brush', cursive" }}
                  className="text-3xl text-metallic-gold"
                >
                  Yadah
                </span>
                <span className="font-serif text-xs tracking-[0.2em] uppercase text-stone-300">
                  CRUNCHIES
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              Artisanal flat kulikuli peanut crisps crafted with botanical Nigerian spices. 100% natural, protein-rich, zero grit, and easy on the teeth.
            </p>

            <div className="text-[11px] text-stone-500 font-mono space-y-1">
              <div>📍 Off Hassan Katsina Road, Zone 8, Lokoja, Kogi State</div>
              <div>📞 +234 816 209 5850 / 08162095850</div>
              <div>📱 @YadahCrunchies</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-stone-300 font-medium">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  About Us (Lokoja)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Products & Bundles
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('wholesale')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Wholesale Cartons
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Contact & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Pack Sizes */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-stone-300 font-medium">
              Popular Sizes
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Size L (150g) — ₦500
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Size XL (250g) — ₦1,000
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Size XXL (400g) — ₦1,500
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('wholesale')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Wholesale Cartons
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-stone-300 font-medium">
              Yadah Snacker Club
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Sign up for fresh batch announcements, wholesale promotions, and interstate waybill discounts.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-amber-950/30 border border-[#cca578]/40 text-xs text-amber-200 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#cca578]" />
                <span>You're registered for fresh batch updates!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your phone or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-stone-900/80 border border-stone-800 rounded-full px-4 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-400 flex-grow"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-[#cca578] hover:bg-[#e2c29d] text-stone-950 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light gap-4">
          <div>
            © {new Date().getFullYear()} Yadah Crunchies. All rights reserved. Made with love in Lokoja, Nigeria.
          </div>
          <div className="flex gap-6">
            <span>Clean Peanut Standard</span>
            <span>Zero Grit Certified</span>
            <span>Interstate Dispatch</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
