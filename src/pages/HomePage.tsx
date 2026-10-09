import React from 'react';
import { Flame, Sparkles, Sprout, Dumbbell, Heart, ShieldCheck, ArrowRight, ShoppingBag, Phone, CheckCircle, Star } from 'lucide-react';
import { YADAH_BRAND, PRODUCT_SIZES, KEY_ATTRIBUTES } from '../data/yadahData';
import { useYadahCart } from '../context/YadahCartContext';

interface HomePageProps {
  onNavigate: (page: 'home' | 'about' | 'products' | 'wholesale' | 'contact') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { addToCart } = useYadahCart();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-emerald-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-red-500" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-pink-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#181820] via-[#121216] to-[#0f0f12] overflow-hidden pt-10 lg:pt-16 pb-16 border-b border-stone-800">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Top Highlights Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-700/50 text-red-300 text-xs font-semibold tracking-wider uppercase">
                <Flame className="w-3.5 h-3.5 text-red-400 fill-current" />
                <span>FRESH · CRUNCHY · SPICY · 100% NATURAL</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-7 h-6 text-amber-400 fill-current" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                  <span className="font-serif italic text-3xl sm:text-4xl text-amber-300 font-bold">
                    Yadah’s Crunchies
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
                  Peppered Flat <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300">
                    Kulikuli
                  </span>
                </h1>
                <p className="font-serif italic text-xl sm:text-2xl text-stone-300 font-normal">
                  “Crunchy. Spicy. Irresistible.”
                </p>
              </div>

              {/* Sub-copy */}
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                Handcrafted in Lokoja, Kogi State from carefully selected Nigerian groundnuts and authentic peppered spices. High in plant protein, zero artificial additives, and pressed for that legendary, dependable crunch!
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-stone-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Selected Peanuts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Rich Plant Protein</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Artificial Additives</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bold Local Spices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Resealable Airtight Zip</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Nationwide Dispatch</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="crunch-btn-glow px-7 py-3.5 rounded-full text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xl"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Choose Your Pack Size</span>
                </button>

                <a
                  href={`https://wa.me/${YADAH_BRAND.whatsappNumber}?text=Hello%20Yadah's%20Crunchies!%20I%20would%20like%20to%20order%20Peppered%20Flat%20Kulikuli.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </a>

                <button
                  onClick={() => onNavigate('wholesale')}
                  className="text-stone-400 hover:text-amber-300 text-xs font-semibold uppercase tracking-wider py-2 px-3 transition-colors cursor-pointer"
                >
                  Wholesale Cartons →
                </button>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl bg-stone-900 group">
                <img
                  src="/src/assets/images/yadah_hero_banner_1791568533893.jpg"
                  alt="Yadah's Crunchies Peppered Flat Kulikuli with fresh peppers and bowl"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Price Badge */}
                <div className="absolute top-4 right-4 bg-red-600 text-white p-3 rounded-2xl shadow-xl border border-red-400/50 text-center">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-yellow-300">
                    Starting From
                  </span>
                  <span className="font-mono text-2xl font-black">₦500</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 text-white">
                  <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Real Kulikuli. Bold Flavor. Made to Crunch!</span>
                  </div>
                  <p className="text-xs text-stone-300 font-light">
                    Available in Size L (₦500), Size XL (₦1000), and Size XXL (₦1500).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Product Attributes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-red-500 block mb-2 font-mono">
            WHY EVERYONE LOVES YADAH’S
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            The Golden Standard of Nigerian Kulikuli
          </h2>
          <p className="text-stone-400 text-sm mt-2 font-light">
            We don’t compromise on quality, hygiene, or authentic peppered spice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_ATTRIBUTES.map((attr, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141418] border border-stone-800 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(attr.icon)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {attr.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-3">
                  {attr.marketingText}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800 text-[11px] font-semibold text-amber-400">
                {attr.benefit}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products & Size Variants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-amber-400 block mb-2 font-mono">
              CHOOSE YOUR CRUNCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Pack Sizes for Every Moment
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs text-red-400 hover:text-red-300 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer self-start md:self-auto"
          >
            <span>View Nutritional Breakdown & Full Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCT_SIZES.map((size) => (
            <div
              key={size.id}
              className="bg-[#141418] rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src={size.image}
                  alt={size.sizeName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {size.badge && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    {size.badge}
                  </span>
                )}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-yellow-400 font-mono font-bold text-sm px-3 py-1 rounded-lg border border-stone-700">
                  {size.weight}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-white font-display">
                      {size.sizeName}
                    </h3>
                    <span className="font-mono text-xl font-extrabold text-amber-400">
                      ₦{size.priceNgn.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 font-light leading-relaxed mb-3">
                    {size.description}
                  </p>
                  <div className="text-[11px] text-stone-400">
                    <strong className="text-stone-300">Ideal for:</strong> {size.idealFor}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center gap-2">
                  <button
                    onClick={() =>
                      addToCart({
                        id: size.id,
                        title: `Yadah’s Kulikuli (${size.sizeName})`,
                        weight: size.weight,
                        priceNgn: size.priceNgn,
                        image: size.image
                      })
                    }
                    className="flex-grow py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>

                  <a
                    href={`https://wa.me/${YADAH_BRAND.whatsappNumber}?text=Hello!%20I%20want%20to%20order%20Yadah's%20Crunchies%20${size.sizeName}%20(${size.weight})%20for%20₦${size.priceNgn}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/50 text-emerald-400 cursor-pointer"
                    title="Quick Order on WhatsApp"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Kulikuli Tradition & Garri Pairing Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-[#181820] to-stone-900 border border-stone-800 p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 font-mono">
                THE ULTIMATE NIGERIAN COMBINATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Best Enjoyed With Soaked Garri, Cold Drinks or On The Go!
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed font-light">
                Nothing beats the historic combo of chilled, floating ice-soaked Ijebu garri, ground sugar, evaporated milk, and the crunchy spicy kick of Yadah's Peppered Flat Kulikuli. It's comfort food, smart energy, and pure nostalgia in every spoon!
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Read Our Lokoja Heritage Story
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Order Your Pack
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-700 shadow-xl">
                <img
                  src="/src/assets/images/yadah_kulikuli_crispy_bowl_1791568546489.jpg"
                  alt="Crunchy bowl of Kulikuli with pepper"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Reviews & Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-400 block mb-1 font-mono">
            WHAT SNACKERS ARE SAYING
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Loved Across Nigeria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#141418] border border-stone-800 space-y-3">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-stone-300 italic leading-relaxed">
              “The pepper level is just right — not overwhelming, but has that authentic punch. And it never goes soggy! Reseals tightly.”
            </p>
            <div className="text-xs font-bold text-white">
              Tunde A. <span className="text-stone-500 font-normal">· Abuja FCT</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#141418] border border-stone-800 space-y-3">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-stone-300 italic leading-relaxed">
              “We stocked 5 cartons of Size L for our school tuck shop and it sold out in 4 days. The kids and teachers both love the crunch.”
            </p>
            <div className="text-xs font-bold text-white">
              Mrs. Gloria O. <span className="text-stone-500 font-normal">· Lokoja, Kogi State</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#141418] border border-stone-800 space-y-3">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-stone-300 italic leading-relaxed">
              “Best accompaniment for soaked Ijebu garri on a hot afternoon! No sand, clean groundnuts, pure protein goodness.”
            </p>
            <div className="text-xs font-bold text-white">
              Chidinma E. <span className="text-stone-500 font-normal">· Lekki, Lagos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Banner Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-red-900/40 via-stone-900 to-amber-900/40 border border-red-700/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-1">
              RETAILERS & SUPERMARKET VENDORS
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              Become an Authorized Distributor
            </h3>
            <p className="text-xs text-stone-300 font-light mt-1">
              Attractive retailer profit margins (up to 24%), protective carton packaging, and fast interstate logistics.
            </p>
          </div>

          <button
            onClick={() => onNavigate('wholesale')}
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer shadow-lg"
          >
            Explore Wholesale Pricing
          </button>
        </div>
      </section>

    </div>
  );
};
