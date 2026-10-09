import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, Flame } from 'lucide-react';
import { useYadahCart } from '../../context/YadahCartContext';
import { YADAH_BRAND } from '../../data/yadahData';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'products' | 'wholesale' | 'contact';
  onNavigate: (page: 'home' | 'about' | 'products' | 'wholesale' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { totalItems, setIsCartOpen } = useYadahCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: 'home' | 'about' | 'products' | 'wholesale' | 'contact' }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Products', page: 'products' },
    { label: 'Wholesale', page: 'wholesale' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleLinkClick = (page: 'home' | 'about' | 'products' | 'wholesale' | 'contact') => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Alert */}
      <div className="bg-gradient-to-r from-red-700 via-amber-600 to-red-700 text-white text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Flame className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
        <span>Authentic Nigerian Peppered Flat Kulikuli · Fresh from Lokoja, Kogi State · Nationwide Delivery</span>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#121215]/95 backdrop-blur-md border-b border-stone-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            
            {/* Brand Logo with golden crown and stylized cursive script */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              {/* Crown Icon */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5">
                  <svg className="w-6 h-5 text-amber-400 fill-current drop-shadow-sm" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                  <span className="font-serif italic text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    Yadah’s
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-sans font-extrabold tracking-[0.22em] text-red-500 uppercase -mt-1 pl-1">
                  CRUNCHIES
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs font-semibold uppercase tracking-wider text-stone-300">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`cursor-pointer transition-colors hover:text-amber-400 py-1 relative ${
                    currentPage === link.page
                      ? 'text-amber-400 font-bold'
                      : 'text-stone-300'
                  }`}
                >
                  {link.label}
                  {currentPage === link.page && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Actions: Phone/WhatsApp + Cart */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Quick WhatsApp order button */}
              <a
                href="https://wa.me/2348162095850?text=Hello%20Yadah's%20Crunchies!%20I%20would%20like%20to%20order%20Peppered%20Flat%20Kulikuli."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 text-xs font-medium hover:bg-emerald-600/30 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+234 816 209 5850</span>
              </a>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-wider transition-all shadow-md cursor-pointer"
                aria-label="View Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="font-mono tabular-nums">{totalItems}</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-300 hover:text-white cursor-pointer"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#121215]/98 backdrop-blur-xl pt-28 px-6 md:hidden flex flex-col justify-between pb-10">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.25em] uppercase text-stone-500 font-sans font-semibold">
              Yadah’s Crunchies Navigation
            </p>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-left text-lg font-serif font-bold py-2 border-b border-stone-800 flex items-center justify-between ${
                    currentPage === link.page ? 'text-amber-400' : 'text-stone-200'
                  }`}
                >
                  <span>{link.label}</span>
                  {currentPage === link.page && <span className="text-xs text-red-500 font-sans font-bold uppercase">Active</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-stone-800">
            <a
              href="https://wa.me/2348162095850?text=Hello%20Yadah's%20Crunchies!%20I%20would%20like%20to%20order%20Peppered%20Flat%20Kulikuli."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Order on WhatsApp: 08162095850</span>
            </a>
            <div className="text-center text-[11px] text-stone-400">
              Off Hassan Katsina Road, Zone 8, Lokoja, Kogi State
            </div>
          </div>
        </div>
      )}
    </>
  );
};
