/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, Quote, ShieldAlert, BadgeCheck, Users } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white border-t border-taupe/10 relative overflow-hidden" aria-label="Customer recommendations and testimonials">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-taupe">
            CLIENT SATISFACTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display tracking-tight mt-2" id="testimonials-heading">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-taupe mx-auto mt-4 rounded-full" />
          <p className="text-base text-gray-600 mt-4 font-light leading-relaxed">
            Client trust is our primary asset. Read reviews from local property owners who have experienced Chivers’ dedicated, reliable craftsmanship.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" id="testimonials-grid">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="relative bg-[#faf9f6] border border-taupe/15 hover:border-taupe/30 p-6 sm:p-8 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              id={`testimonial-card-${test.id}`}
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-6 right-6 text-gold/25 pointer-events-none">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              <div className="space-y-4">
                {/* Five star indicator */}
                <div className="flex items-center gap-1" aria-label={`Rating: ${test.rating} out of 5 stars`}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-sm sm:text-base text-gray-700 font-light leading-relaxed italic">
                  "{test.text}"
                </blockquote>
              </div>

              {/* Author and Metadata footer */}
              <div className="mt-6 pt-4 border-t border-taupe/10 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-navy text-sm sm:text-base">
                    {test.name}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    Homeowner in {test.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-navy/5 text-navy text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                    {test.service}
                  </span>
                  <p className="text-[10px] text-gray-400 mt-1 font-light">
                    {test.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual trust stats banner */}
        <div className="mt-16 sm:mt-24 p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-navy to-navy-dark border border-gold/30 text-white text-center sm:text-left grid grid-cols-1 sm:grid-cols-3 gap-8 items-center" id="testimonials-trust-banner">
          <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold font-display leading-none text-white">100%</p>
              <p className="text-xs text-gray-300 font-medium tracking-wider uppercase mt-1">Recommended Local Builders</p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <BadgeCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold font-display leading-none text-white">Fully Verified</p>
              <p className="text-xs text-gray-300 font-medium tracking-wider uppercase mt-1">£5M Liability Insurance</p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Star className="w-6 h-6 fill-gold" />
            </div>
            <div>
              <p className="text-2xl font-extrabold font-display leading-none text-white">5.0 / 5.0</p>
              <p className="text-xs text-gray-300 font-medium tracking-wider uppercase mt-1">Average Project Rating</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
