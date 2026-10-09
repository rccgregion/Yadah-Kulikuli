import React, { useState } from 'react';
import { Calculator, Truck, Plus, MessageCircle, ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { WHOLESALE_TIERS, WholesaleTier } from '../../data/kulikuli';
import { useCart } from '../../context/CartContext';

export const WholesalePage: React.FC = () => {
  const { addToCart, formatNaira, getWhatsAppOrderUrl } = useCart();

  // State for interactive Profit Calculator
  const [cartonQuantities, setCartonQuantities] = useState<Record<string, number>>({
    'carton-l': 1,
    'carton-xl': 2,
    'carton-xxl': 1
  });

  const handleQtyChange = (tierId: string, val: number) => {
    setCartonQuantities((prev) => ({
      ...prev,
      [tierId]: Math.max(0, val)
    }));
  };

  // Calculations for Profit Calculator
  const totalInvestment = WHOLESALE_TIERS.reduce((sum, t) => {
    return sum + t.cartonPrice * (cartonQuantities[t.id] || 0);
  }, 0);

  const totalGrossRevenue = WHOLESALE_TIERS.reduce((sum, t) => {
    return sum + (t.packCount * t.retailPrice) * (cartonQuantities[t.id] || 0);
  }, 0);

  const totalEstimatedProfit = totalGrossRevenue - totalInvestment;

  const handleAddCartonToBag = (tier: WholesaleTier) => {
    addToCart({
      id: tier.id,
      name: tier.title,
      weight: `${tier.packCount} x ${tier.packSize}`,
      priceNaira: tier.cartonPrice,
      image: '/src/assets/images/yadah_pack_sizes_1791573376568.jpg',
      isWholesale: true
    });
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
      
      {/* 1. Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3.5">
        <span className="font-serif text-sm sm:text-base tracking-[0.35em] uppercase text-[#cca578] font-medium block">
          DISTRIBUTION & RETAIL PARTNERSHIPS
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-light text-white leading-tight">
          Wholesale Cartons & Distributor Program
        </h1>
        <p className="text-stone-200 text-base sm:text-lg lg:text-xl font-light max-w-xl mx-auto">
          High-margin, fast-moving artisanal snack cartons for supermarkets, lounges, university campuses, and retail stores across Nigeria.
        </p>
      </div>

      {/* 2. Standard Carton Tiers Grid */}
      <section className="space-y-8">
        <div>
          <span className="font-serif text-sm sm:text-base tracking-[0.3em] uppercase text-[#cca578] font-medium block mb-1.5">
            STANDARD CARTON TIERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-light text-white">
            Wholesale Carton Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHOLESALE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="p-6 sm:p-9 rounded-2xl bg-[#0f0f14] border border-amber-900/40 hover:border-amber-600/60 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs sm:text-sm font-mono tracking-widest text-[#cca578] bg-amber-950/40 border border-amber-900/60 px-3.5 py-1.5 rounded-full uppercase font-semibold">
                    {tier.badge}
                  </span>
                  <span className="text-sm sm:text-base font-mono text-stone-200 font-bold">
                    {tier.packCount} Packs / Box
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal mb-1.5">
                  {tier.title}
                </h3>
                <span className="text-base text-stone-300 font-sans block mb-6">
                  Contains {tier.packCount} units of {tier.packSize}
                </span>

                {/* Financial Breakdown Table */}
                <div className="p-4 sm:p-5 rounded-xl bg-stone-900/80 border border-stone-800 space-y-3 text-sm sm:text-base font-mono mb-6">
                  <div className="flex justify-between text-stone-200">
                    <span>Carton Cost:</span>
                    <span className="text-white font-bold">{formatNaira(tier.cartonPrice)}</span>
                  </div>
                  <div className="flex justify-between text-stone-300">
                    <span>Unit Cost:</span>
                    <span className="text-stone-200">{formatNaira(tier.unitCost)} / unit</span>
                  </div>
                  <div className="flex justify-between text-stone-300">
                    <span>Retail Price:</span>
                    <span className="text-stone-200">{formatNaira(tier.retailPrice)} / unit</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-stone-800 text-emerald-400 font-bold text-base sm:text-lg">
                    <span>Estimated Margin:</span>
                    <span>~{formatNaira(tier.estimatedMargin)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleAddCartonToBag(tier)}
                className="w-full py-4 rounded-full bg-[#cca578] hover:bg-[#e2c29d] text-stone-950 font-bold text-sm sm:text-base tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-lg active:scale-98"
              >
                <Plus className="w-5 h-5 stroke-[2.5]" />
                <span>Add Carton to Bag</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Profit Calculator */}
      <section className="p-6 sm:p-10 lg:p-14 rounded-3xl bg-[#111116] border border-amber-900/50 space-y-8">
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-xl bg-amber-950/50 border border-[#cca578]/50 flex items-center justify-center text-[#cca578] shrink-0">
            <Calculator className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-light">
              Interactive Distributor Profit Calculator
            </h3>
            <p className="text-sm sm:text-base text-stone-300 font-light mt-0.5">
              Adjust carton order quantities to forecast your revenue and gross margins.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Inputs for Carton Quantities */}
          <div className="lg:col-span-7 space-y-4">
            {WHOLESALE_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="p-4 sm:p-5 rounded-xl bg-stone-900/70 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
              >
                <div>
                  <h4 className="font-serif text-white font-normal text-lg sm:text-xl">
                    {tier.title}
                  </h4>
                  <span className="text-sm sm:text-base text-stone-300 font-mono mt-0.5 block">
                    {formatNaira(tier.cartonPrice)} · Margin ~{formatNaira(tier.estimatedMargin)}
                  </span>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 pt-2.5 sm:pt-0 border-t sm:border-t-0 border-stone-800/60">
                  <div className="flex items-center gap-2 bg-stone-950 border border-stone-700 rounded-lg p-1">
                    <button
                      onClick={() => handleQtyChange(tier.id, (cartonQuantities[tier.id] || 0) - 1)}
                      className="w-11 h-11 rounded text-stone-200 hover:text-white hover:bg-stone-800 flex items-center justify-center text-xl font-mono cursor-pointer active:scale-95"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="font-mono text-lg font-bold text-amber-200 w-11 text-center">
                      {cartonQuantities[tier.id] || 0}
                    </span>
                    <button
                      onClick={() => handleQtyChange(tier.id, (cartonQuantities[tier.id] || 0) + 1)}
                      className="w-11 h-11 rounded text-stone-200 hover:text-white hover:bg-stone-800 flex items-center justify-center text-xl font-mono cursor-pointer active:scale-95"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm sm:text-base text-stone-300 font-sans">cartons</span>
                </div>
              </div>
            ))}
          </div>

          {/* Calculator Output KPI Card */}
          <div className="lg:col-span-5 p-6 sm:p-9 rounded-2xl bg-[#09090c] border border-amber-900/60 space-y-5 shadow-2xl">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#cca578] uppercase block font-semibold">
              ESTIMATED PROJECTED RETURN
            </span>

            <div className="space-y-3.5 font-mono text-base sm:text-lg">
              <div className="flex justify-between text-stone-200">
                <span>Total Capital Investment:</span>
                <span className="text-white font-bold">{formatNaira(totalInvestment)}</span>
              </div>
              <div className="flex justify-between text-stone-200">
                <span>Expected Gross Retail:</span>
                <span className="text-stone-100 font-bold">{formatNaira(totalGrossRevenue)}</span>
              </div>
              <div className="pt-3 border-t border-stone-800 flex justify-between text-lg sm:text-xl font-bold text-emerald-400">
                <span>Net Projected Margin:</span>
                <span>+{formatNaira(totalEstimatedProfit)}</span>
              </div>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
              *Based on recommended retail pricing of ₦500 (L), ₦1,000 (XL), and ₦1,500 (XXL).
            </div>

            <a
              href={`https://wa.me/2348162095850?text=${encodeURIComponent(
                `Hello Yadah Crunchies! I ran your wholesale profit calculator and would like to order:\n• Size L: ${cartonQuantities['carton-l']} cartons\n• Size XL: ${cartonQuantities['carton-xl']} cartons\n• Size XXL: ${cartonQuantities['carton-xxl']} cartons\nTotal Investment: ${formatNaira(totalInvestment)}.\nPlease advise on shipping waybill to my state.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base tracking-wider uppercase transition-all flex items-center justify-center gap-2.5 shadow-lg active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Discuss Wholesale via WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 4. Nationwide Logistics & Waybill */}
      <section className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-[#0f0f14] border border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-[#cca578]">
            <Truck className="w-5 h-5 text-amber-400" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest font-semibold">
              Interstate Logistics
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-light">
            Nationwide Logistics & Waybill to All 36 States
          </h3>
          <p className="text-base sm:text-lg text-stone-200 font-light max-w-2xl leading-relaxed">
            Cartons are securely strapped and dispatched daily from Lokoja motor parks (Peace Mass, GIG Logistics, ABC, GUO) with instant waybill slips and driver tracking contacts sent directly to your phone.
          </p>
        </div>

        <a
          href="https://wa.me/2348162095850"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto px-8 py-4 rounded-full border border-stone-700 hover:border-amber-500 text-stone-200 text-sm sm:text-base font-sans tracking-wider uppercase transition-colors shrink-0 text-center font-semibold active:scale-98"
        >
          Inquire Waybill Rates
        </a>
      </section>

    </div>
  );
};
