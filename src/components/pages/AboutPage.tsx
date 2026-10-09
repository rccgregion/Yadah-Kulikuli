import React from 'react';
import { MapPin, ShieldCheck, Sparkles, Users, Award, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const AboutPage: React.FC = () => {
  const { setActivePage } = useCart();

  return (
    <div className="pt-28 lg:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* 1. Header Intro */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="font-serif text-xs tracking-[0.35em] uppercase text-[#cca578] font-light block">
          HERITAGE · CRAFTSMANSHIP · LOKOJA
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-tight">
          Redefining Nigerian Kulikuli with Royal Delicacy
        </h1>
        <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
          From the confluence hills of Kogi State, Yadah Crunchies bridges century-old Nigerian peanut culinary craft with modern hygienic perfection.
        </p>
      </div>

      {/* 2. Roots in Lokoja & The Facility */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center gap-2 text-[#cca578]">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-xs uppercase tracking-widest font-mono">
              Zone 8, Lokoja, Kogi State, Nigeria
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white">
            Rooted in the Confluence Capital
          </h2>
          <p className="text-stone-300 text-sm font-light leading-relaxed">
            Our artisanal kitchen is located <strong>Off Hassan Katsina Road, Zone 8, Lokoja, Kogi State</strong>. Positioned at the geographical heart of Nigeria where the Niger and Benue rivers meet, Lokoja gives us direct access to prime northern savanna groundnut farmlands and central transport corridors reaching all 36 states.
          </p>
          <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
            Every batch of Yadah Crunchies is freshly pressed, roasted, seasoned, and vacuum-sealed right here in Lokoja before embarking on interstate waybills to distributors and snackers nationwide.
          </p>

          <div className="pt-2 flex items-center gap-6 text-xs text-stone-400 border-t border-stone-800">
            <div>
              <span className="block font-mono text-lg font-semibold text-amber-200">Zone 8</span>
              <span>Lokoja Headquarters</span>
            </div>
            <div>
              <span className="block font-mono text-lg font-semibold text-amber-200">36 States</span>
              <span>Nationwide Reach</span>
            </div>
            <div>
              <span className="block font-mono text-lg font-semibold text-amber-200">100%</span>
              <span>Zero-Grit Promise</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl">
            <img
              src="/src/assets/images/artisan_lokoja_workshop_1791573367292.jpg"
              alt="Hygienic artisanal flat kulikuli pressing atelier"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. The Flat Kulikuli Difference */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#0f0f14] border border-stone-800 space-y-8">
        <div className="max-w-2xl">
          <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#cca578] font-light block mb-2">
            THE REVOLUTIONARY FORM FACTOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white">
            The Flat Kulikuli Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/40 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold block">
              Traditional Kulikuli (The Problem)
            </span>
            <ul className="space-y-2 text-xs text-stone-400 font-light list-disc list-inside">
              <li>Dense, hard round balls or rods that risk cracking teeth.</li>
              <li>Often contains stone grit and sand due to crude open-air processing.</li>
              <li>Inconsistent frying leading to burnt outer shells and raw centers.</li>
              <li>Packed in flimsy non-resealable nylons that lose crispness in hours.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-amber-950/20 border border-[#cca578]/50 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#cca578] font-semibold block">
              Yadah Crunchies (Our Solution)
            </span>
            <ul className="space-y-2 text-xs text-stone-200 font-light list-disc list-inside">
              <li><strong>Wafer-Thin Pressing:</strong> Shatters effortlessly with a crisp, airy snap.</li>
              <li><strong>Zero Grit Guaranteed:</strong> Multi-stage manual and water destoning.</li>
              <li><strong>Consistent Golden Roasting:</strong> Uniform spice absorption and even crunch.</li>
              <li><strong>Airtight Zip-Lock Stand-up Pouch:</strong> Stays fresh and crunchy for 6 months.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Hygienic Modern Atelier & Community Sourcing */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-8 rounded-2xl bg-[#121217] border border-stone-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-[#cca578]/40 flex items-center justify-center text-[#cca578]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-white font-normal">
            Hygienic Modern Atelier
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
            We banish the unhygienic shortcuts of street kulikuli. Our facility uses food-grade stainless steel pressing tables, thorough stone separation, oil extraction monitoring, and clean packaging suites. You can crunch with complete peace of mind.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[#121217] border border-stone-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-[#cca578]/40 flex items-center justify-center text-[#cca578]">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-white font-normal">
            Community & Farmer Sourcing
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
            We purchase directly from smallholder Nigerian groundnut farmers across Kogi, Niger, and Kano states. By cutting out predatory middlemen, we guarantee premium prices to farming families while selecting only the highest-grade plump peanuts for your crunch.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center py-10 border-t border-stone-800">
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mb-4">
          Ready to Taste the Lokoja Crunch?
        </h3>
        <button
          onClick={() => setActivePage('products')}
          className="px-8 py-3.5 rounded-full bg-[#cca578] hover:bg-[#e2c29d] text-stone-950 font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
        >
          Explore All Pack Sizes & Bundles
        </button>
      </div>

    </div>
  );
};
