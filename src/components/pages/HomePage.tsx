import React from 'react';
import { ArrowRight, Plus, Check, Sparkles, MessageCircle, Heart, Flame, ShieldCheck, Leaf } from 'lucide-react';
import { KULIKULI_PRODUCTS, REVIEWS } from '../../data/kulikuli';
import { useCart, PageSection } from '../../context/CartContext';

interface HomePageProps {
  onNavigate: (page: PageSection) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { addToCart, formatNaira, getWhatsAppOrderUrl } = useCart();
  const signaturePouch = KULIKULI_PRODUCTS.find((p) => p.id === 'size-xl-250g') || KULIKULI_PRODUCTS[1];

  const packSizes = KULIKULI_PRODUCTS.filter((p) => p.type === 'single');

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] bg-[#08080a] overflow-hidden pt-28 lg:pt-36 flex items-center">
        {/* Organic curved luxury backdrops matching the design theme */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#cca578]/15 via-[#8c683f]/05 to-transparent rounded-full blur-[140px]" />
          
          <svg
            className="absolute right-0 top-0 h-full w-full lg:w-3/4 object-cover opacity-50"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M500,0 C650,200 480,450 680,700 C780,820 900,900 1000,1000 L1000,0 Z"
              fill="url(#kulikuliBronze)"
              opacity="0.3"
            />
            <path
              d="M400,0 C550,250 380,500 580,750 C680,880 750,960 900,1000 L1000,1000 L1000,0 Z"
              fill="#121217"
              opacity="0.7"
            />
            <defs>
              <linearGradient id="kulikuliBronze" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8c683f" />
                <stop offset="50%" stopColor="#4a3525" />
                <stop offset="100%" stopColor="#141418" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Brand, Highlights, Title, & Action */}
            <div className="lg:col-span-6 z-20 flex flex-col justify-center">
              
              {/* Crown + Cursive Brand Lockup */}
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-4 text-[#e5b95b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                </svg>
                <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#cca578] font-light">
                  ROYAL ARTISANAL DELICACY · LOKOJA, NIGERIA
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.08] mb-4">
                THE GOLDEN
                <br />
                <span className="text-metallic-gold font-normal">FLAT KULIKULI</span>
              </h1>

              {/* Front Highlights Ribbon */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-sans tracking-wide text-amber-200/90 mb-5">
                <span className="bg-stone-900/80 border border-amber-900/40 rounded-full px-3 py-1">Fresh Crunchy Spicy</span>
                <span className="bg-stone-900/80 border border-amber-900/40 rounded-full px-3 py-1">100% Natural</span>
                <span className="bg-stone-900/80 border border-amber-900/40 rounded-full px-3 py-1">Rich in Protein</span>
                <span className="bg-stone-900/80 border border-amber-900/40 rounded-full px-3 py-1">Bold & Spicy</span>
              </div>

              {/* Description */}
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-light">
                Sculpted from selected Nigerian groundnuts and authentic spices. Pressed wafer-thin for a shatteringly light, addictive crunch with zero grit. <em>“Crunch You Can’t Resist.”</em>
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={() => addToCart(signaturePouch)}
                  className="luxury-btn-glow px-8 py-3.5 rounded-full text-xs font-sans tracking-[0.2em] uppercase text-amber-100 font-semibold cursor-pointer flex items-center gap-3"
                >
                  <span>Order Signature 250g (₦1,000)</span>
                  <ArrowRight className="w-4 h-4 text-[#cca578]" />
                </button>

                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full border border-emerald-700/60 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 text-xs font-sans tracking-wide transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>

              {/* 3 Quick Spec Callouts with hairline leader lines */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800/80 max-w-lg">
                <div>
                  <span className="block font-mono text-sm sm:text-base font-semibold text-amber-200">
                    ₦500 – ₦1,500
                  </span>
                  <span className="text-[11px] text-stone-400 font-light">Retail Pouches</span>
                </div>
                <div>
                  <span className="block font-mono text-sm sm:text-base font-semibold text-amber-200">
                    Wafer-Thin
                  </span>
                  <span className="text-[11px] text-stone-400 font-light">Zero Tooth Strain</span>
                </div>
                <div>
                  <span className="block font-mono text-sm sm:text-base font-semibold text-amber-200">
                    36 States
                  </span>
                  <span className="text-[11px] text-stone-400 font-light">Interstate Waybill</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Centerpiece (250g Pouch + Crispy Golden Bowl + Chilies) */}
            <div className="lg:col-span-6 relative flex flex-col items-center">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl group bg-[#0e0e13]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/src/assets/images/yadah_hero_pouch_1791573345495.jpg"
                    alt="Yadah Crunchies Signature 250g Pouch with Crispy Flat Kulikuli and Red Chilies"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Scrim bar below the centerpiece */}
                <div className="p-4 sm:p-5 bg-[#121217]/95 border-t border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#cca578] uppercase block">
                      FLAGSHIP CREATION
                    </span>
                    <h3 className="font-serif text-lg text-white font-normal">
                      Signature 250g Flat Kulikuli Pouch
                    </h3>
                  </div>

                  <button
                    onClick={() => addToCart(signaturePouch)}
                    className="px-5 py-2.5 rounded-full bg-[#cca578] hover:bg-[#e2c29d] text-stone-950 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap"
                  >
                    Add ₦1,000
                  </button>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between w-full max-w-xl px-2 text-[11px] text-stone-500 font-sans tracking-wide">
                <span>Off Hassan Katsina Rd, Zone 8, Lokoja</span>
                <span>·</span>
                <span>Zero Grit Certified</span>
                <span>·</span>
                <span>Airtight Zip-Lock</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. KEY PRODUCT ATTRIBUTES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#cca578] block mb-2 font-light">
            THE CRAFTSMANSHIP PILLARS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-wide">
            Key Product Attributes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Attribute 1: 100% Natural */}
          <div className="p-6 rounded-2xl bg-[#0f0f14] border border-stone-800/80 hover:border-amber-900/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-[#cca578]/40 flex items-center justify-center text-[#cca578] mb-4 group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-serif text-xl text-white mb-2 font-normal">
              🌱 100% Natural
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              No artificial additives, chemical preservatives, or synthetic food colorings. Pure, unadulterated Nigerian groundnut goodness.
            </p>
          </div>

          {/* Attribute 2: Rich in Protein */}
          <div className="p-6 rounded-2xl bg-[#0f0f14] border border-stone-800/80 hover:border-amber-900/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-[#cca578]/40 flex items-center justify-center text-[#cca578] mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="font-serif text-xl text-white mb-2 font-normal">
              💪 Rich in Protein
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Wholesome plant-based peanut energy fuel. High satiety, heart-healthy fats, and essential amino acids for active days.
            </p>
          </div>

          {/* Attribute 3: Bold & Spicy */}
          <div className="p-6 rounded-2xl bg-[#0f0f14] border border-stone-800/80 hover:border-amber-900/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-[#cca578]/40 flex items-center justify-center text-[#cca578] mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="font-serif text-xl text-white mb-2 font-normal">
              🔥 Bold & Spicy
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Seasoned with an authentic proprietary blend of sun-dried Nigerian chili peppers, ginger, and aromatic local spices.
            </p>
          </div>

          {/* Attribute 4: Crunch You Can Trust */}
          <div className="p-6 rounded-2xl bg-[#0f0f14] border border-stone-800/80 hover:border-amber-900/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-[#cca578]/40 flex items-center justify-center text-[#cca578] mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-[#cca578]" />
            </div>
            <h3 className="font-serif text-xl text-white mb-2 font-normal">
              ❤️ Crunch You Can Trust
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Carefully hand-sorted and destoned groundnuts with guaranteed zero sand grit. Clean, hygienic, and easy on teeth.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PACK SIZES QUICK-SHOP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#cca578] block mb-2 font-light">
              RETAIL POUCHES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-wide">
              Pack Sizes Quick-Shop
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-sans tracking-widest uppercase text-[#cca578] hover:text-amber-200 transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>View All Bundles & Nutrition</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packSizes.map((pack) => (
            <div
              key={pack.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                pack.isPopular
                  ? 'bg-[#121218] border-amber-500/60 shadow-xl ring-1 ring-amber-500/20'
                  : 'bg-[#0f0f14] border-stone-800/80 hover:border-amber-900/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-[#cca578] uppercase">
                    {pack.tag}
                  </span>
                  <span className="text-xs font-mono text-stone-400 font-medium">
                    {pack.weight}
                  </span>
                </div>

                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/60 mb-4 border border-stone-800">
                  <img
                    src={pack.image}
                    alt={pack.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-serif text-2xl text-white font-normal mb-1">
                  {pack.name}
                </h3>
                <p className="text-xs text-stone-400 font-light mb-4 leading-relaxed">
                  {pack.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-stone-500 block">Unit Price</span>
                  <span className="font-mono text-xl font-bold text-amber-200">
                    {formatNaira(pack.priceNaira)}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(pack)}
                  className="px-5 py-2.5 rounded-full bg-[#cca578] hover:bg-[#e2c29d] text-stone-950 font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE CLASSIC PAIRING STORY (Soaked Chilled Garri Combo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121217] via-[#0d0d12] to-[#08080a] border border-amber-900/40 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#cca578] font-light block">
              THE NOSTALGIC NIGERIAN TRADITION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white leading-tight">
              The Iconic Chilled Soaked Garri Pairing
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Nothing in African culinary culture rivals the afternoon ceremony of ice-cold soaked cassava garri paired with wafer-thin flat kulikuli.
            </p>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              While ordinary dense kulikuli gets gummy or cracks teeth, Yadah Crunchies’ flat shape retains its crisp snap even when spooned alongside chilled evaporated milk, crunchy roasted peanuts, and ice cubes. The spicy ginger-chili warmth dances against the refreshing cool tang of the garri.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="px-6 py-3 rounded-full bg-[#cca578] text-stone-950 text-xs font-semibold uppercase tracking-wider hover:bg-[#e2c29d] transition-all cursor-pointer"
              >
                Stock Up for Garri Soakings
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-full border border-stone-700 text-stone-300 hover:text-white text-xs font-sans tracking-wider uppercase transition-all cursor-pointer"
              >
                Read Our Lokoja Story
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-amber-900/30 shadow-2xl">
              <img
                src="/src/assets/images/kulikuli_garri_pairing_1791573356450.jpg"
                alt="Chilled soaked garri with milk, peanuts, and crispy flat kulikuli"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. SNACKER REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#cca578] block mb-2 font-light">
            VOICES OF NIGERIAN SNACKERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-wide">
            Loved Across Lagos, Abuja & Lokoja
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-2xl bg-[#0f0f14] border border-stone-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#e5b95b] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif text-white font-medium text-sm">
                    {review.author}
                  </h4>
                  <span className="text-[#cca578] font-sans text-[11px]">
                    {review.location}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded">
                  Verified Snacker
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
