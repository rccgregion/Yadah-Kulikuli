import React from 'react';
import { MapPin, Phone, MessageSquare, Instagram, ShieldAlert, PackageCheck, Heart } from 'lucide-react';
import { YADAH_BRAND } from '../../data/yadahData';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'products' | 'wholesale' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0b0b0e] border-t border-stone-800 text-stone-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
              <span className="font-serif italic text-2xl font-bold text-white">
                Yadah’s Crunchies
              </span>
            </div>
            
            <p className="text-sm text-stone-400 leading-relaxed font-light">
              Premium Crunchy Kulikuli (Peppered Flat Kulikuli). Authentic Nigerian spicy peanut snack made from selected groundnuts, rich in protein, and peppered to perfection.
            </p>

            <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold uppercase text-[11px] tracking-wider">
                <PackageCheck className="w-3.5 h-3.5" />
                <span>Storage & Freshness</span>
              </div>
              <p className="text-stone-300 font-light">
                {YADAH_BRAND.storageInstructions}
              </p>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Products & Packs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('wholesale')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Wholesale & Retail
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Contact & Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Product Sizes */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pack Sizes
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <span className="text-stone-300 font-medium">Size L (150g)</span> — ₦500
              </li>
              <li>
                <span className="text-stone-300 font-medium">Size XL (250g)</span> — ₦1,000
              </li>
              <li>
                <span className="text-stone-300 font-medium">Size XXL (400g)</span> — ₦1,500
              </li>
              <li>
                <span className="text-stone-300 font-medium">Wholesale Cartons</span> — From ₦17,000
              </li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Order Hotline
            </h4>

            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{YADAH_BRAND.physicalAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${YADAH_BRAND.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-emerald-400 font-mono"
                >
                  {YADAH_BRAND.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${YADAH_BRAND.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-mono text-emerald-400"
                >
                  WhatsApp: +234 816 209 5850
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Social Media: <strong className="text-white">{YADAH_BRAND.socialMedia}</strong></span>
              </div>
            </div>

            {/* Allergen Notice */}
            <div className="mt-3 p-3 rounded-lg bg-red-950/30 border border-red-900/50 flex items-start gap-2 text-[11px] text-red-300">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{YADAH_BRAND.allergenAdvice}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {YADAH_BRAND.brandName}. Produced with pride in Kogi State, Nigeria.</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span>“Crunchy. Spicy. Irresistible.”</span>
            <span>·</span>
            <span>Made to Crunch!</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
