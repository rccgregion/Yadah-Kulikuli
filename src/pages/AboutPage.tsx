import React from 'react';
import { MapPin, ShieldCheck, Heart, Users, Sparkles, CheckCircle2, Flame, Award } from 'lucide-react';
import { YADAH_BRAND } from '../data/yadahData';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'about' | 'products' | 'wholesale' | 'contact') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>AUTHENTIC HERITAGE · LOKOJA, KOGI STATE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
            Crafting the Purest, Crunchiest Kulikuli in Nigeria
          </h1>

          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            At Yadah’s Crunchies, our passion is simple: elevating one of Nigeria’s most cherished traditional peanut snacks into a hygienic, modern, and boldly spiced culinary experience.
          </p>
        </div>
      </section>

      {/* Production & Story Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl">
            <img
              src="/src/assets/images/yadah_lokoja_production_1791568569856.jpg"
              alt="Artisan production at Yadah's Crunchies in Lokoja"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 text-white">
              <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400">
                LOKOJA PRODUCTION ATELIER
              </span>
              <p className="text-xs text-stone-200 mt-1">
                Selected groundnuts being freshly ground and blended with local chili peppers under strict food hygiene standards.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              From Traditional Recipe to Peppered Flat Perfection
            </h2>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              For generations across Northern and Central Nigeria, <em>Kulikuli</em> has been an indispensable source of nutrition and joy. But too often, commercial kulikuli suffers from inconsistent textures, stone particles, or excessive hardness.
            </p>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              Yadah’s Crunchies was founded in <strong>Lokoja, Kogi State</strong> with a clear ambition: solve these problems once and for all. We re-engineered the classic shape into a delicate, wafer-thin <strong>Flat Kulikuli</strong>, ensuring every chip shatters with a crisp, effortless crunch without straining your teeth.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Premium Triple-Sorted Groundnuts</h4>
                  <p className="text-xs text-stone-400 font-light">
                    Every batch uses selected Nigerian peanuts, thoroughly inspected and stone-free before roasting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Artisanal Pepper Blend</h4>
                  <p className="text-xs text-stone-400 font-light">
                    Seasoned with sun-dried local red chili peppers, garlic, ginger, and natural spices for an unforgettable authentic Nigerian kick.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Zip-Lock Freshness Barrier</h4>
                  <p className="text-xs text-stone-400 font-light">
                    Packaged in multi-layer foil pouches with an airtight seal to lock out moisture and preserve crunchiness for up to 6 months.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-2">
            OUR PROMISE
          </span>
          <h2 className="text-3xl font-display font-bold text-white">
            Built on Real Goodness & Transparency
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#141418] border border-stone-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              100% All-Natural
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              No artificial colors, MSG, preservatives, or chemical flavor enhancers. What you see on our ingredient list is what you taste in every crunch.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#141418] border border-stone-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center justify-center text-red-400">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Plant-Based Protein Fuel
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Naturally dense in plant protein and essential fats, making it a wholesome alternative to overly processed fried potato chips and sugary snacks.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#141418] border border-stone-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Community & Agriculture
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              We source directly from smallholder groundnut farmers in Kogi State and northern farming belts, supporting local livelihoods and agricultural value addition.
            </p>
          </div>
        </div>
      </section>

      {/* Facility & Location Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#15151c] border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>HEADQUARTERS & PRODUCTION WORKSHOP</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Proudly Based in Lokoja, Kogi State
            </h3>
            <p className="text-stone-300 text-sm font-light max-w-xl">
              {YADAH_BRAND.physicalAddress}. Open for bulk pickups, retailer inquiries, and direct orders Monday through Saturday.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Contact Our Team
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="px-6 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Order Products
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
