import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, PhoneCall, Sparkles } from 'lucide-react';
import { useCart, PageSection } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { cart, setIsBagOpen, activePage, setActivePage, getWhatsAppOrderUrl } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageSection }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Products', page: 'products' },
    { label: 'Wholesale', page: 'wholesale' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (page: PageSection) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/95 backdrop-blur-md border-b border-amber-900/30 py-3 shadow-2xl'
            : 'bg-transparent py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Zone 1: Logo Concept (Stylized cursive brand name topped with golden royal crown) */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex flex-col items-center cursor-pointer text-left shrink-0"
              aria-label="Yadah Crunchies Home"
            >
              {/* Golden Royal Crown Insignia */}
              <div className="flex items-center justify-center text-[#e5b95b] group-hover:scale-105 transition-transform mb-[-4px]">
                <svg
                  className="w-5 h-4 filter drop-shadow-[0_2px_4px_rgba(229,185,91,0.4)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                </svg>
              </div>

              {/* Stylized Brand Name */}
              <div className="flex items-baseline gap-1.5">
                <span
                  style={{ fontFamily: "'Alex Brush', cursive" }}
                  className="text-2xl sm:text-3xl text-metallic-gold tracking-wide leading-none"
                >
                  Yadah
                </span>
                <span className="font-serif text-[11px] sm:text-xs tracking-[0.24em] uppercase text-stone-300 font-light">
                  CRUNCHIES
                </span>
              </div>
            </button>

            {/* Zone 2: Primary Navigation (Home, About Us, Products, Wholesale, Contact) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-sans tracking-[0.18em] uppercase font-medium text-stone-300/80">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`cursor-pointer transition-all duration-200 whitespace-nowrap shrink-0 hover:text-amber-200 relative py-1 ${
                    activePage === link.page ? 'text-amber-300 font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {activePage === link.page && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#e5b95b] to-transparent" />
                  )}
                </button>
              ))}
            </nav>

            {/* Zone 3: Instant WhatsApp Hotline & Interactive Crunch Bag */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              
              {/* Instant WhatsApp Order Hotline */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-700/50 hover:bg-emerald-900/60 hover:border-emerald-500/80 transition-all text-emerald-300 text-xs font-sans tracking-wide cursor-pointer"
                title="Instant WhatsApp Hotline (+234 816 209 5850)"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                <span className="font-mono text-[11px] tracking-normal font-medium">
                  +234 816 209 5850
                </span>
              </a>

              {/* Interactive Crunch Bag Trigger */}
              <button
                onClick={() => setIsBagOpen(true)}
                className="group relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-amber-900/50 bg-[#141418] hover:bg-amber-950/40 hover:border-amber-600/70 transition-all cursor-pointer shadow-lg"
                aria-label="View Crunch Bag"
              >
                <ShoppingBag className="w-4 h-4 text-[#e5b95b] group-hover:text-amber-200 transition-colors stroke-[1.8]" />
                <span className="text-xs tracking-wider text-amber-100 font-mono tabular-nums font-semibold">
                  Bag ({totalItems})
                </span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#e5b95b] ring-2 ring-[#08080a]" />
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-300 hover:text-white cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#08080a]/98 backdrop-blur-2xl pt-24 px-6 md:hidden flex flex-col justify-between pb-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-stone-800">
              <svg className="w-4 h-4 text-[#e5b95b]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
              <span className="text-xs uppercase tracking-[0.2em] text-[#cca578] font-sans">
                Yadah Crunchies Menu
              </span>
            </div>

            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-left font-serif text-2xl tracking-[0.08em] py-2 border-b border-stone-800/60 ${
                    activePage === link.page
                      ? 'text-amber-300 font-normal pl-2 border-amber-600/60'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 space-y-3">
            <a
              href="https://wa.me/2348162095850"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-xs font-mono flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Hotline: +234 816 209 5850</span>
            </a>
            <div className="text-center text-[11px] text-stone-500 font-light">
              Zone 8, Lokoja, Kogi State · Interstate Dispatch to 36 States
            </div>
          </div>
        </div>
      )}
    </>
  );
};
