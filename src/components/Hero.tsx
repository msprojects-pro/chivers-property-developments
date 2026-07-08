/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ShieldCheck, Star, Award, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const heroImage = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80';

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" aria-label="Welcome and hero banner">
      {/* Background Image with Referrer Policy and Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Modern luxury kitchen renovation by Chivers Property Developments"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to high-end architectural Unsplash background if image load fails
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80';
            }}
          />
        </motion.div>

        {/* Navy Blue & Gold-tinged Gradient Overlay for superior text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-black/30" />
        
        {/* Abstract Gold Glow vector lines */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      </div>

      {/* Main Hero Contents */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Tagline / Establishment Tag */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-dark/90 to-taupe/90 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold tracking-wider uppercase mb-6 border border-gold-light/20 shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-gold-light" />
            <span>ESTABLISHED {BUSINESS_INFO.established} | PREMIUM CONTRACTOR</span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.1]"
            id="hero-heading"
          >
            Building Better Spaces. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-[#f5e9d3]">
              Creating Value.
            </span>
          </motion.h1>

          {/* Subheading text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-gray-200 mt-6 leading-relaxed font-light max-w-2xl"
            id="hero-subheading"
          >
            Complete high-quality property development, renovation, and maintenance services across{' '}
            <strong className="text-white font-semibold">{BUSINESS_INFO.areaServed}</strong>. Fully insured home extensions, kitchens, bathrooms, garden rooms, and conversions under one roof.
          </motion.p>

          {/* Call-to-Actions (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
            id="hero-cta-buttons"
          >
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark hover:from-gold-light hover:to-gold-light text-navy-dark font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer border border-gold-light/40 group scale-100 hover:scale-[1.02]"
              id="hero-quote-btn"
            >
              <Calendar className="w-4 h-4 shrink-0 transition-transform group-hover:rotate-6" />
              Request a Free Quote
            </button>

            <button
              onClick={handleLearnMoreClick}
              className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-bold rounded-xl transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs scale-100 hover:scale-[1.02]"
              id="hero-explore-btn"
            >
              Explore Our Services
            </button>
          </motion.div>

          {/* Mini trust checklist bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 border-t border-white/10 pt-8 mt-12 text-white/90"
            id="hero-trust-bar"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider leading-none">Fully Insured</span>
                <span className="text-[10px] text-gray-400 mt-0.5">£5M Public Liability</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Star className="w-5 h-5 text-gold fill-gold shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider leading-none">5-Star Rated</span>
                <span className="text-[10px] text-gray-400 mt-0.5">100% Client Satisfaction</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider leading-none">South West Based</span>
                <span className="text-[10px] text-gray-400 mt-0.5">Bath, Bristol & Somerset</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Curved Divider at Hero base */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#faf9f6] rounded-t-[2.5rem] z-20 pointer-events-none" />
    </section>
  );
}
