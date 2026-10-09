import React, { useState } from 'react';
import { Plus, Check, Sparkles, ShieldCheck, Heart, Info } from 'lucide-react';
import { KULIKULI_PRODUCTS, KulikuliProduct } from '../../data/kulikuli';
import { useCart } from '../../context/CartContext';

export const ProductsPage: React.FC = () => {
  const { addToCart, formatNaira } = useCart();
  const [selectedPackId, setSelectedPackId] = useState<string>('size-xl-250g');

  const singlePacks = KULIKULI_PRODUCTS.filter((p) => p.type === 'single');
  const bundlePacks = KULIKULI_PRODUCTS.filter((p) => p.type === 'bundle');

  const currentSelectedSingle =
    singlePacks.find((p) => p.id === selectedPackId) || singlePacks[1];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
      
      {/* 1. Page Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <span className="font-serif text-xs sm:text-sm tracking-[0.35em] uppercase text-[#cca578] font-medium block">
          THE ARTISANAL ROSTER
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-light text-white leading-tight">
          Our Products & Bundles
        </h1>
        <p className="text-stone-300 text-sm sm:text-base lg:text-lg font-light max-w-xl mx-auto">
          Each pouch is sealed fresh with pure Nigerian groundnuts, local chili warmth, and zero grit.
        </p>
      </div>

      {/* 2. Interactive Size Selector Showcase */}
      <section className="p-6 sm:p-10 lg:p-14 rounded-3xl bg-[#0f0f14] border border-amber-900/40 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Visual Showcase */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-800 bg-black shadow-2xl">
            <img
              src={currentSelectedSingle.image}
              alt={currentSelectedSingle.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-amber-900/60 px-4 py-2 rounded-full text-sm sm:text-base font-mono text-[#cca578] font-bold shadow-md">
              {currentSelectedSingle.weight}
            </div>
          </div>
        </div>

        {/* Right Column: Size Switching & Buy Module */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#cca578] uppercase block mb-1.5 font-semibold">
              INTERACTIVE SIZE SELECTOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
              {currentSelectedSingle.name}
            </h2>
            <p className="text-base sm:text-lg text-stone-200 font-light mt-2.5 leading-relaxed">
              {currentSelectedSingle.description}
            </p>
          </div>

          {/* Size Choice Buttons */}
          <div>
            <label className="block text-xs sm:text-sm uppercase tracking-wider text-stone-300 mb-2.5 font-medium">
              Select Pouch Size:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {singlePacks.map((pack) => (
                <button
                  key={pack.id}
                  onClick={() => setSelectedPackId(pack.id)}
                  className={`p-4 sm:p-4.5 rounded-xl border text-left transition-all cursor-pointer active:scale-98 ${
                    selectedPackId === pack.id
                      ? 'bg-amber-950/40 border-[#cca578] ring-1 ring-[#cca578] shadow-md'
                      : 'bg-stone-900/70 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <span className="block font-mono text-sm sm:text-base font-bold text-white">
                    {pack.name.split(' ')[1]} ({pack.weight})
                  </span>
                  <span className="font-mono text-base sm:text-lg text-amber-200 mt-1 block font-bold">
                    {formatNaira(pack.priceNaira)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Price & Add to Bag */}
          <div className="pt-5 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm uppercase text-stone-400 block font-medium">Active Selection Price</span>
              <span className="font-mono text-2xl sm:text-4xl font-bold text-amber-200">
                {formatNaira(currentSelectedSingle.priceNaira)}
              </span>
            </div>

            <button
              onClick={() => addToCart(currentSelectedSingle)}
              className="w-full sm:w-auto px-8 py-4 sm:py-4.5 rounded-full bg-[#cca578] hover:bg-[#e2c29d] text-stone-950 font-bold text-sm sm:text-base tracking-wider uppercase transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2.5 active:scale-98"
            >
              <Plus className="w-5 h-5 stroke-[2.5]" />
              <span>Add to Crunch Bag</span>
            </button>
          </div>
        </div>

      </section>

      {/* 3. Party & Gifting Bundles */}
      <section className="space-y-8">
        <div>
          <span className="font-serif text-xs sm:text-sm tracking-[0.3em] uppercase text-[#cca578] font-medium block mb-1.5">
            CELEBRATION & SHARING
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-light text-white">
            Party & Gifting Bundles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bundlePacks.map((bundle) => (
            <div
              key={bundle.id}
              className="p-6 sm:p-9 rounded-2xl bg-[#111116] border border-amber-900/40 hover:border-amber-600/60 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs sm:text-sm font-mono tracking-widest text-[#cca578] bg-amber-950/40 border border-amber-900/60 px-3.5 py-1.5 rounded-full uppercase font-semibold">
                    {bundle.tag}
                  </span>
                  <span className="text-sm sm:text-base font-mono text-stone-200 font-bold">
                    {bundle.weight}
                  </span>
                </div>

                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black mb-5 border border-stone-800">
                  <img
                    src={bundle.image}
                    alt={bundle.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal mb-2.5">
                  {bundle.name}
                </h3>
                <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-6">
                  {bundle.description}
                </p>
              </div>

              <div className="pt-5 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                <div>
                  <span className="text-xs sm:text-sm uppercase text-stone-400 block font-medium">Bundle Price</span>
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-amber-200">
                    {formatNaira(bundle.priceNaira)}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(bundle)}
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-[#cca578] hover:bg-[#e2c29d] text-stone-950 font-bold text-sm sm:text-base tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md active:scale-98"
                >
                  <Plus className="w-5 h-5 stroke-[2.5]" />
                  <span>Add Bundle</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Nutrition Facts Table (per 100g) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Nutrition Table */}
        <div className="lg:col-span-7 p-6 sm:p-9 rounded-2xl bg-[#0f0f14] border border-stone-800 space-y-6">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#cca578] uppercase block mb-1 font-semibold">
              DIETARY TRANSPARENCY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal">
              Nutrition Facts Table (per 100g)
            </h3>
            <p className="text-base text-stone-300 font-light mt-1">
              Tested and verified plant-based groundnut energy.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-base sm:text-lg min-w-[280px]">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400 font-mono text-xs sm:text-sm uppercase">
                  <th className="text-left py-3">Component</th>
                  <th className="text-right py-3">Amount per 100g</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 font-mono text-base sm:text-lg">
                <tr>
                  <td className="py-3.5 text-stone-200 font-medium">Energy</td>
                  <td className="py-3.5 text-right text-amber-200 font-bold">750 kcal</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-stone-200">Carbohydrate</td>
                  <td className="py-3.5 text-right text-stone-300">10 g</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-stone-400 pl-4">└ Of which Sugars</td>
                  <td className="py-3.5 text-right text-stone-400">5 g</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-stone-200">Fat</td>
                  <td className="py-3.5 text-right text-stone-300">3 g</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-stone-400 pl-4">└ Of which Saturates</td>
                  <td className="py-3.5 text-right text-stone-400">1 g</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-stone-200 font-medium">Protein</td>
                  <td className="py-3.5 text-right text-amber-200 font-bold">5 g</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-stone-200">Salt</td>
                  <td className="py-3.5 text-right text-stone-300">30 mg</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-stone-200 font-medium">Vitamin B12</td>
                  <td className="py-3.5 text-right text-emerald-400 font-semibold">Healthy daily source</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Ingredients & Storage Instructions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111116] border border-stone-800 space-y-3.5">
            <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Ingredients List & Allergen Advice
            </h4>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              <strong>Ingredients:</strong> Selected Groundnuts (Peanuts), Chili Pepper, Spices, Salt, Vegetable Oil.
            </p>
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-900/50 text-sm sm:text-base text-amber-200/95 font-light leading-relaxed">
              <strong>Allergen Notice:</strong> Contains Peanuts (Groundnuts). Made in a dedicated peanut processing facility free from gluten and shellfish.
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#111116] border border-stone-800 space-y-3.5">
            <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Storage Instructions
            </h4>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              Store in a cool, dry place away from direct sunlight. After opening, tightly re-press the airtight zip-lock seal to lock in maximum crispness.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
};
