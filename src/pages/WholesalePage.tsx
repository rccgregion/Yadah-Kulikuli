import React, { useState } from 'react';
import { Truck, Calculator, Phone, ShoppingBag, CheckCircle, Percent, ArrowRight, MessageSquare } from 'lucide-react';
import { WHOLESALE_TIERS, YADAH_BRAND } from '../data/yadahData';
import { useYadahCart } from '../context/YadahCartContext';

interface WholesalePageProps {
  onNavigate: (page: 'home' | 'about' | 'products' | 'wholesale' | 'contact') => void;
}

export const WholesalePage: React.FC<WholesalePageProps> = ({ onNavigate }) => {
  const { addToCart } = useYadahCart();

  const [cartonQuantities, setCartonQuantities] = useState<Record<string, number>>({
    'carton-l': 1,
    'carton-xl': 1,
    'carton-xxl': 0
  });

  const totalCartons = Object.values(cartonQuantities).reduce((a, b) => a + b, 0);

  const totalWholesaleInvestment = WHOLESALE_TIERS.reduce((sum, tier) => {
    const qty = cartonQuantities[tier.id] || 0;
    return sum + tier.cartonPriceNgn * qty;
  }, 0);

  const estimatedRetailRevenue = WHOLESALE_TIERS.reduce((sum, tier) => {
    const qty = cartonQuantities[tier.id] || 0;
    // retail price per unit: L is 500, XL is 1000, XXL is 1500
    const unitRetailPrice = tier.id === 'carton-l' ? 500 : tier.id === 'carton-xl' ? 1000 : 1500;
    return sum + unitRetailPrice * tier.unitsPerCarton * qty;
  }, 0);

  const estimatedProfit = estimatedRetailRevenue - totalWholesaleInvestment;

  const handleWhatsAppWholesale = () => {
    let msg = `*Wholesale Order Inquiry - Yadah's Crunchies*\n\n`;
    WHOLESALE_TIERS.forEach((tier) => {
      const qty = cartonQuantities[tier.id] || 0;
      if (qty > 0) {
        msg += `• ${tier.name}: ${qty} cartons (₦${(tier.cartonPriceNgn * qty).toLocaleString()})\n`;
      }
    });
    msg += `\n*Total Cartons:* ${totalCartons}\n`;
    msg += `*Estimated Investment:* ₦${totalWholesaleInvestment.toLocaleString()}\n\n`;
    msg += `Kindly confirm shipping waybill costs to my city.`;

    const url = `https://wa.me/${YADAH_BRAND.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Percent className="w-3.5 h-3.5" />
            <span>ATTRACTIVE DISTRIBUTOR MARGINS · NATIONWIDE SUPPLY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
            Wholesale, Supermarkets & Distribution
          </h1>

          <p className="text-stone-300 text-base font-light leading-relaxed">
            Partner with Nigeria’s fastest-growing premium snack brand. We supply supermarkets, school tuck shops, grocery stores, hotels, and corporate hampers with high-demand Peppered Flat Kulikuli.
          </p>
        </div>
      </section>

      {/* Carton Pricing Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 block mb-1">
            STANDARD CARTON SPECIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Wholesale Cartons & Profit Breakdown
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHOLESALE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="bg-[#141418] rounded-2xl border border-stone-800 p-6 flex flex-col justify-between space-y-6 hover:border-amber-500/60 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-800/60">
                    {tier.unitsPerCarton} Units / Carton
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    {tier.retailProfitMargin}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display">
                  {tier.name}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Pack format: {tier.packSize}
                </p>

                <div className="my-6 p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-400">Carton Price:</span>
                    <span className="font-mono text-xl font-black text-amber-400">
                      ₦{tier.cartonPriceNgn.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-stone-400 pt-2 border-t border-stone-800/80">
                    <span>Wholesale Unit Cost:</span>
                    <span className="font-mono font-bold text-white">
                      ₦{tier.unitEquivalentNgn} each
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-stone-400">
                    <span>Recommended Retail:</span>
                    <span className="font-mono font-bold text-emerald-400">
                      ₦{tier.id === 'carton-l' ? 500 : tier.id === 'carton-xl' ? 1000 : 1500} each
                    </span>
                  </div>
                </div>

                <div className="text-xs text-stone-300 font-light">
                  <strong className="text-stone-200">Best for:</strong> {tier.recommendedFor}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-stone-800">
                <button
                  onClick={() =>
                    addToCart({
                      id: tier.id,
                      title: tier.name,
                      weight: `${tier.unitsPerCarton} packs`,
                      priceNgn: tier.cartonPriceNgn,
                      image: '/src/assets/images/yadah_hero_banner_1791568533893.jpg',
                      isWholesale: true
                    })
                  }
                  className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add Carton to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Wholesale Margin & Quantity Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121217] border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-amber-400" />
            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                Wholesale Profit Calculator
              </h3>
              <p className="text-xs text-stone-400 font-light">
                Calculate your potential margins when stocking Yadah’s Crunchies in your retail outlet.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Steppers */}
            <div className="lg:col-span-7 space-y-4">
              {WHOLESALE_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white">{tier.name}</h4>
                    <span className="text-xs text-amber-400 font-mono">
                      ₦{tier.cartonPriceNgn.toLocaleString()} per carton
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setCartonQuantities({
                          ...cartonQuantities,
                          [tier.id]: Math.max(0, (cartonQuantities[tier.id] || 0) - 1)
                        })
                      }
                      className="w-8 h-8 rounded-lg bg-stone-800 text-white flex items-center justify-center text-lg font-mono hover:bg-stone-700 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-white text-base w-8 text-center">
                      {cartonQuantities[tier.id] || 0}
                    </span>
                    <button
                      onClick={() =>
                        setCartonQuantities({
                          ...cartonQuantities,
                          [tier.id]: (cartonQuantities[tier.id] || 0) + 1
                        })
                      }
                      className="w-8 h-8 rounded-lg bg-stone-800 text-white flex items-center justify-center text-lg font-mono hover:bg-stone-700 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Calculations Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-stone-900 to-[#181822] border border-amber-600/40 space-y-4 shadow-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block">
                PROJECTED RETAIL OUTCOME
              </span>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-stone-300">
                  <span>Total Cartons:</span>
                  <span className="font-mono font-bold text-white">{totalCartons} Cartons</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Wholesale Investment:</span>
                  <span className="font-mono font-bold text-white text-sm">
                    ₦{totalWholesaleInvestment.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Expected Gross Sales:</span>
                  <span className="font-mono font-bold text-white text-sm">
                    ₦{estimatedRetailRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-400 pt-3 border-t border-stone-800 text-base font-bold">
                  <span>Estimated Profit:</span>
                  <span className="font-mono text-xl">
                    +₦{estimatedProfit.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppWholesale}
                disabled={totalCartons === 0}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Wholesale Order via WhatsApp</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Logistics & Nationwide Shipping */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#141418] border border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center justify-center text-red-400">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Motor Park & Inter-State Waybill</h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              We dispatch daily from Lokoja central motor parks with direct waybills to Lagos, Abuja, Port Harcourt, Ibadan, Kaduna, and all 36 states.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Sturdy Corrugated Cartons</h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Every carton is packed securely with protective liners to ensure the flat kulikuli arrives uncrushed and display-ready for supermarket shelves.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Direct Distributor Desk</h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Dedicated account manager for regular reorders, invoice generation, and custom corporate branding for festive events.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
