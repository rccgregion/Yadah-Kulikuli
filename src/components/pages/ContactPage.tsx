import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, ChevronDown, ChevronUp, Send, CheckCircle2, Share2 } from 'lucide-react';
import { FAQS } from '../../data/kulikuli';
import { useCart } from '../../context/CartContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'retail',
    message: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    showToast('Inquiry received! Our Lokoja desk will reach you shortly.');
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
      
      {/* 1. Page Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3.5">
        <span className="font-serif text-sm sm:text-base tracking-[0.35em] uppercase text-[#cca578] font-medium block">
          LIAISON & SUPPORT
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-light text-white leading-tight">
          Contact Yadah Crunchies
        </h1>
        <p className="text-stone-200 text-base sm:text-lg lg:text-xl font-light max-w-xl mx-auto">
          Whether you need a quick personal pack, a 50-carton wholesale consignment, or party favors for a wedding in Abuja or Lagos, we are here for you.
        </p>
      </div>

      {/* 2. Contact Details & Inquiry Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-9 rounded-2xl bg-[#0f0f14] border border-stone-800 space-y-7 shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-light border-b border-stone-800 pb-3.5">
              Maison Information
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <MapPin className="w-6 h-6 text-[#cca578] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs sm:text-sm uppercase tracking-wider text-stone-300 block font-sans font-semibold">
                  Physical Kitchen & Office
                </span>
                <p className="text-base sm:text-lg text-stone-200 font-light mt-1 leading-relaxed">
                  Off Hassan Katsina Road, Zone 8, Lokoja, Kogi State, Nigeria.
                </p>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-3.5">
              <MessageCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs sm:text-sm uppercase tracking-wider text-stone-300 block font-sans font-semibold">
                  Phone & WhatsApp Hotline
                </span>
                <a
                  href="https://wa.me/2348162095850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-lg sm:text-xl text-amber-200 hover:text-white transition-colors block mt-1 font-bold"
                >
                  +234 (0) 816 209 5850 / 08162095850
                </a>
                <span className="text-xs sm:text-sm text-stone-400 font-light mt-0.5 block">
                  Direct WhatsApp messaging 7 days a week
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start gap-3.5">
              <Share2 className="w-6 h-6 text-[#cca578] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs sm:text-sm uppercase tracking-wider text-stone-300 block font-sans font-semibold">
                  Official Social Channels
                </span>
                <span className="font-mono text-lg sm:text-xl text-stone-100 block mt-1 font-semibold">
                  @YadahCrunchies
                </span>
                <span className="text-xs sm:text-sm text-stone-400 font-light mt-0.5 block">
                  Instagram, TikTok, X (Twitter) & Facebook
                </span>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Action Button */}
          <a
            href="https://wa.me/2348162095850"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4.5 rounded-2xl bg-emerald-950/80 border border-emerald-600/70 hover:bg-emerald-900/80 text-emerald-300 flex items-center justify-center gap-3 transition-all cursor-pointer font-sans text-sm sm:text-base tracking-wider uppercase font-bold shadow-xl active:scale-98"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Chat on WhatsApp (+234 816 209 5850)</span>
          </a>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7 p-6 sm:p-9 rounded-2xl bg-[#111116] border border-amber-900/40 shadow-xl">
          {formSubmitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-950/40 border border-[#cca578] mx-auto flex items-center justify-center text-[#cca578]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Inquiry Received!
              </h3>
              <p className="text-base sm:text-lg text-stone-200 font-light max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-amber-200">{inquiryData.name}</strong>. Our Lokoja customer team will reach you via WhatsApp / phone (<span className="font-mono text-stone-200 font-semibold">{inquiryData.phone}</span>) within 2 business hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-8 py-3.5 rounded-full bg-[#cca578] text-stone-950 text-sm font-bold uppercase tracking-wider cursor-pointer shadow-md active:scale-98"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-5">
              <div>
                <span className="text-xs sm:text-sm font-mono tracking-widest text-[#cca578] uppercase block mb-1 font-semibold">
                  FAST RESPONSE DESK
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-light">
                  Interactive Inquiry Form
                </h3>
              </div>

              <div>
                <label className="block text-xs sm:text-sm uppercase tracking-wider text-stone-300 mb-1.5 font-semibold">
                  Inquiry Nature
                </label>
                <select
                  value={inquiryData.type}
                  onChange={(e) => setInquiryData({ ...inquiryData, type: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-base text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="retail">Personal & Retail Order</option>
                  <option value="wholesale">Wholesale & Distributor Consignment</option>
                  <option value="party">Party & Wedding Favors (Custom Bundles)</option>
                  <option value="tracking">Interstate Waybill Tracking Status</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm uppercase tracking-wider text-stone-300 mb-1.5 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Mohammed"
                    value={inquiryData.name}
                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-base text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm uppercase tracking-wider text-stone-300 mb-1.5 font-semibold">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0816 209 5850"
                    value={inquiryData.phone}
                    onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-base text-white focus:border-amber-400 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm uppercase tracking-wider text-stone-300 mb-1.5 font-semibold">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={inquiryData.email}
                  onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-base text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm uppercase tracking-wider text-stone-300 mb-1.5 font-semibold">
                  Message / Order Specifications
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Kindly describe your destination city, desired pack sizes, or delivery inquiries..."
                  value={inquiryData.message}
                  onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-base text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4.5 rounded-full bg-gradient-to-r from-[#cca578] via-[#e5b95b] to-[#cca578] text-stone-950 font-bold text-sm sm:text-base tracking-wider uppercase hover:opacity-95 cursor-pointer flex items-center justify-center gap-2.5 shadow-xl active:scale-98"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </section>

      {/* 3. Frequently Asked Questions (FAQ) Accordion */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="font-serif text-sm sm:text-base tracking-[0.3em] uppercase text-[#cca578] font-medium block mb-1.5">
            CLARITY & ASSURANCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-light text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#0f0f14] border border-stone-800/80 overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-900/40"
                >
                  <span className="font-serif text-xl sm:text-2xl text-white font-normal">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#cca578] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-7 pt-0 text-base sm:text-lg text-stone-200 font-light leading-relaxed border-t border-stone-800/60 bg-stone-950/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
