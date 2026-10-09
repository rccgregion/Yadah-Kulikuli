import React, { useState } from 'react';
import { ShoppingBag, Phone, Sparkles, Check, ShieldAlert, Package, Flame, Award, HeartHandshake } from 'lucide-react';
import { PRODUCT_SIZES, NUTRITION_FACTS, YADAH_BRAND, ProductSize } from '../data/yadahData';
import { useYadahCart } from '../context/YadahCartContext';

interface ProductsPageProps {
  onNavigate: (page: 'home' | 'about' | 'products' | 'wholesale' | 'contact') => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const { addToCart } = useYadahCart();
  const [selectedSize, setSelectedSize] = useState<ProductSize>(PRODUCT_SIZES[1]); // Default to Size XL
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'nutrition' | 'ingredients' | 'storage'>('nutrition');

  const bundles = [
    {
      id: 'bundle-family',
      title: 'Party & Family Bundle (5x Size XL)',
      weight: '5 × 250g (1.25kg)',
      priceNgn: 4750,
      originalPriceNgn: 5000,
      image: '/src/assets/images/yadah_hero_banner_1791568533893.jpg',
      desc: 'Save ₦250 with five pouches of our best-selling 250g Peppered Flat Kulikuli. Perfect for house parties or garri-lovers.',
      badge: 'Save ₦250'
    },
    {
      id: 'bundle-variety',
      title: 'Ultimate Variety Sampler Pack',
      weight: '2x Size L + 2x Size XL + 1x Size XXL',
      priceNgn: 4250,
      originalPriceNgn: 4500,
      image: '/src/assets/images/yadah_three_sizes_lineup_1791568558953.jpg',
      desc: 'Try every size: 2 pocket packs for the car, 2 medium packs for work, and 1 giant pack for the living room.',
      badge: 'Best Variety'
    }
  ];

  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-700/50 text-red-300 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-red-400 fill-current" />
            <span>AUTHENTIC PEPPERED FLAT KULIKULI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
            Our Products & Pack Sizes
          </h1>

          <p className="text-stone-300 text-base font-light leading-relaxed">
            Every pouch is sealed airtight with authentic Nigerian spicy kulikuli crisps. Crafted with zero artificial additives and rich in natural peanut protein.
          </p>
        </div>
      </section>

      {/* Main Product Showcase & Interactive Size Customizer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#141418] border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl items-center">
          
          {/* Left Column: Product Visuals */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 aspect-[4/3]">
            <img
              src={selectedSize.image}
              alt={`Yadah's Crunchies ${selectedSize.sizeName}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
              {selectedSize.badge || 'Made to Crunch'}
            </div>
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-amber-400 font-mono font-bold text-base px-4 py-1.5 rounded-xl border border-stone-700">
              {selectedSize.weight} Net Weight
            </div>
          </div>

          {/* Right Column: Details, Size Toggles, and Add to Bag */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400">
                PREMIUM CRUNCHY KULIKULI (SPICY PEANUT SNACK)
              </span>
              <h2 className="text-3xl font-display font-extrabold text-white mt-1">
                Yadah’s Peppered Flat Kulikuli
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <span className="font-mono text-3xl font-black text-amber-400">
                  ₦{selectedSize.priceNgn.toLocaleString()}
                </span>
                <span className="text-xs text-stone-400 bg-stone-900 px-2.5 py-1 rounded-full border border-stone-800 font-mono">
                  {selectedSize.weight} pack
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              {selectedSize.description}
            </p>

            {/* Pack Size Selector Buttons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2 font-mono">
                Select Your Pack Size:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {PRODUCT_SIZES.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => {
                      setSelectedSize(size);
                      setQty(1);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedSize.id === size.id
                        ? 'border-red-500 bg-red-950/30 text-white ring-1 ring-red-500'
                        : 'border-stone-800 bg-stone-900/60 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <span className="block font-bold text-sm text-white">{size.sizeName}</span>
                    <span className="block text-[11px] text-amber-400 font-mono">₦{size.priceNgn}</span>
                    <span className="block text-[10px] text-stone-500 font-mono">({size.weight})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add to Bag */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex items-center justify-between border border-stone-800 bg-stone-900 rounded-xl px-4 py-2 w-32 shrink-0">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="text-stone-400 hover:text-white font-mono text-lg px-2 cursor-pointer"
                >
                  -
                </button>
                <span className="font-mono font-bold text-white text-base">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="text-stone-400 hover:text-white font-mono text-lg px-2 cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  addToCart(
                    {
                      id: selectedSize.id,
                      title: `Yadah’s Kulikuli (${selectedSize.sizeName})`,
                      weight: selectedSize.weight,
                      priceNgn: selectedSize.priceNgn,
                      image: selectedSize.image
                    },
                    qty
                  )
                }
                className="flex-grow py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag · ₦{(selectedSize.priceNgn * qty).toLocaleString()}</span>
              </button>
            </div>

            {/* WhatsApp Quick Order Direct */}
            <a
              href={`https://wa.me/${YADAH_BRAND.whatsappNumber}?text=Hello%20Yadah's%20Crunchies!%20I%20would%20like%20to%20order%20${qty}x%20${selectedSize.sizeName}%20(${selectedSize.weight})%20for%20₦${selectedSize.priceNgn * qty}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Instant Order on WhatsApp</span>
            </a>

            {/* Quick trust notes */}
            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
              <span>✓ 100% Selected Groundnuts</span>
              <span>✓ Airtight Resealable Foil</span>
              <span>✓ Direct from Lokoja</span>
            </div>

          </div>

        </div>
      </section>

      {/* Multi-Pack & Party Bundles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-1">
            GREAT FOR SHARING & HAMPERS
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Party Bundles & Family Snack Packs
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="p-6 rounded-2xl bg-[#141418] border border-stone-800 flex flex-col sm:flex-row gap-6 items-center"
            >
              <img
                src={bundle.image}
                alt={bundle.title}
                referrerPolicy="no-referrer"
                className="w-36 h-36 rounded-xl object-cover bg-stone-900 border border-stone-800 shrink-0"
              />
              <div className="space-y-3 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-500/40">
                    {bundle.badge}
                  </span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-stone-500 line-through text-xs">₦{bundle.originalPriceNgn.toLocaleString()}</span>
                    <span className="text-amber-400 font-extrabold text-lg">₦{bundle.priceNgn.toLocaleString()}</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-white font-display">
                  {bundle.title}
                </h4>

                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {bundle.desc}
                </p>

                <button
                  onClick={() =>
                    addToCart({
                      id: bundle.id,
                      title: bundle.title,
                      weight: bundle.weight,
                      priceNgn: bundle.priceNgn,
                      image: bundle.image
                    })
                  }
                  className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Add Bundle to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Nutrition, Ingredients & Allergen Information (Exact user spec table) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121217] border border-stone-800 rounded-3xl p-6 sm:p-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-800 pb-6 mb-6 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 block">
                FULL DISCLOSURE & NUTRITION LABEL
              </span>
              <h3 className="text-2xl font-display font-bold text-white">
                Ingredients, Nutrition & Allergen Advisory
              </h3>
            </div>

            {/* Tab switchers */}
            <div className="flex gap-2 p-1 bg-stone-900 rounded-xl border border-stone-800 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('nutrition')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  activeTab === 'nutrition' ? 'bg-red-600 text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                Nutrition per 100g
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  activeTab === 'ingredients' ? 'bg-red-600 text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab('storage')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  activeTab === 'storage' ? 'bg-red-600 text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                Storage
              </button>
            </div>
          </div>

          {activeTab === 'nutrition' && (
            <div className="space-y-6">
              <p className="text-xs text-stone-400">
                Nutritional values based on standard laboratory analysis per 100g serving of Yadah's Crunchy Flat Kulikuli:
              </p>

              {/* Nutrition Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-stone-800 text-stone-400 uppercase font-mono tracking-wider">
                      <th className="py-3 px-4">Nutrient</th>
                      <th className="py-3 px-4">Amount per 100g</th>
                      <th className="py-3 px-4">Nutritional Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60 text-stone-300 font-light">
                    {NUTRITION_FACTS.map((fact, idx) => (
                      <tr key={idx} className="hover:bg-stone-900/40">
                        <td className="py-3 px-4 font-semibold text-white">{fact.nutrient}</td>
                        <td className="py-3 px-4 font-mono font-bold text-amber-400">{fact.amount}</td>
                        <td className="py-3 px-4 text-stone-400">{fact.dailyRef}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">
                  Official Ingredients List:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {YADAH_BRAND.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-xs text-stone-200"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="text-xs text-red-200">
                  <strong className="block font-bold mb-1">ALLERGEN ADVICE:</strong>
                  {YADAH_BRAND.allergenAdvice} Not suitable for individuals with peanut or tree nut allergies.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'storage' && (
            <div className="space-y-4 text-xs text-stone-300 font-light">
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <h4 className="text-sm font-bold text-white mb-2 font-mono">
                  Storage & Freshness Instructions:
                </h4>
                <p className="leading-relaxed mb-3">
                  {YADAH_BRAND.storageInstructions}
                </p>
                <ul className="list-disc list-inside space-y-1 text-stone-400">
                  <li>Store away from direct sunlight and heat sources.</li>
                  <li>Ensure the zip-lock is pressed firmly shut from end to end after every snack session.</li>
                  <li>In humid climates, keep in an airtight container for extra longevity.</li>
                </ul>
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
