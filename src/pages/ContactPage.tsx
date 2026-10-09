import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Instagram, Mail, Clock, Send, CheckCircle2, HelpCircle } from 'lucide-react';
import { YADAH_BRAND, FAQS } from '../data/yadahData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'retail',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = `Hello Yadah's Crunchies!\n\nName: ${formData.name || 'Customer'}\nPhone: ${formData.phone || 'N/A'}\nTopic: ${formData.inquiryType}\nMessage: ${formData.message || 'I have an inquiry regarding your Peppered Flat Kulikuli.'}`;
    window.open(`https://wa.me/${YADAH_BRAND.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-700/50 text-red-300 text-xs font-semibold uppercase tracking-wider font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WE ARE ALWAYS READY TO CRUNCH</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
            Contact & Order Information
          </h1>

          <p className="text-stone-300 text-base font-light leading-relaxed">
            Reach out directly for retail orders, nationwide interstate delivery, supermarket stocking, or bulk orders in Lokoja and across Nigeria.
          </p>
        </div>
      </section>

      {/* Contact Cards & Form Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-[#141418] border border-emerald-500/40 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>FASTEST RESPONSE CHANNEL</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Chat With Us On WhatsApp
              </h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Connect instantly with our customer desk for fast order placement, bank transfer confirmations, or waybill track updates.
              </p>
              <a
                href={`https://wa.me/${YADAH_BRAND.whatsappNumber}?text=Hello%20Yadah's%20Crunchies!%20I%20would%20like%20to%20make%20an%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Open WhatsApp (+234 816 209 5850)</span>
              </a>
            </div>

            {/* Address & Operations Card */}
            <div className="p-6 rounded-2xl bg-[#141418] border border-stone-800 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 font-mono">
                    PHYSICAL FACTORY & PICKUP LOCATION
                  </h4>
                  <p className="text-sm font-semibold text-white mt-1">
                    {YADAH_BRAND.physicalAddress}
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Zone 8, Lokoja, Kogi State, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-800">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 font-mono">
                    PHONE HOTLINE
                  </h4>
                  <a
                    href="tel:+2348162095850"
                    className="text-sm font-semibold text-white hover:text-amber-400 font-mono mt-1 block"
                  >
                    {YADAH_BRAND.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-800">
                <Instagram className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 font-mono">
                    SOCIAL MEDIA
                  </h4>
                  <p className="text-sm font-semibold text-white mt-1">
                    {YADAH_BRAND.socialMedia}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-800">
                <Clock className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 font-mono">
                    DISPATCH & OFFICE HOURS
                  </h4>
                  <p className="text-xs text-stone-300 mt-1">
                    Monday – Saturday: 8:00 AM – 6:30 PM (WAT)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#141418] border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500 mx-auto flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Message Dispatched!
                </h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our team in Lokoja has received your message and will reach out promptly via phone or email.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-stone-800 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Note
                  </button>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="px-6 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Continue on WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 block mb-1">
                    SEND A NOTE
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Drop Us a Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-mono">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amina Bello"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-mono">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="080... or +234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-mono">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="retail">Retail Pack Order (L, XL, XXL)</option>
                      <option value="wholesale">Wholesale & Supermarket Supply</option>
                      <option value="events">Events, Party Favors & Souvenirs</option>
                      <option value="general">General Inquiries / Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1 font-mono">
                    Your Message / Order Specifics
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what pack sizes you'd like, delivery location, or wholesale questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-grow py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-1">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Answers for Customers & Vendors
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#141418] border border-stone-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-900/60 transition-colors"
              >
                <span className="text-sm font-semibold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-red-500 shrink-0" />
                  {faq.q}
                </span>
                <span className="text-stone-400 font-mono text-lg shrink-0">
                  {openFaq === idx ? '−' : '+'}
                </span>
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs text-stone-300 font-light leading-relaxed border-t border-stone-800/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
