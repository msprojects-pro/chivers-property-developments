/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, UserCheck, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface AboutProps {
  onOpenQuote: () => void;
}

export default function About({ onOpenQuote }: AboutProps) {
  const gardenRoomImg = 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80';

  const coreValues = [
    {
      title: 'Reliable & Professional',
      desc: 'We show up on time, maintain tidy workspaces, and respect your property.',
      icon: Clock,
    },
    {
      title: 'Expert Craftsmanship',
      desc: 'All projects are finished to the highest UK building standards with zero shortcuts.',
      icon: ShieldCheck,
    },
    {
      title: 'Customer Focused',
      desc: 'We collaborate closely with you on designs, budgets, and schedules.',
      icon: UserCheck,
    },
  ];

  const valueBullets = [
    'Complete start-to-finish management — all trades under one roof',
    'Fully compliant with local South West UK building regulations',
    'Comprehensive £5M Public Liability Insurance coverage',
    'Prompt, clear, transparent itemised estimates',
    'Local, friendly, trusted team based in Somerset',
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#faf9f6]" aria-label="About Chivers Property Developments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Grid Column */}
          <div className="lg:col-span-5 relative">
            {/* Main Picture */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-taupe/10 z-10 scale-100 hover:scale-[1.01] transition-transform duration-500">
              <img
                src={gardenRoomImg}
                alt="High-end Garden Room and Home Office completed by Chivers Property Developments"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
                id="about-main-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent pointer-events-none" />
            </div>

            {/* Float Experience Card */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-navy to-navy-dark border border-gold/30 text-white rounded-2xl p-6 shadow-xl z-20 max-w-[200px]"
              id="about-experience-card"
            >
              <p className="text-4xl font-extrabold font-display text-gold leading-none">
                Est.
              </p>
              <p className="text-3xl font-extrabold font-display text-white mt-1">
                {BUSINESS_INFO.established}
              </p>
              <div className="h-[1px] bg-white/20 my-3" />
              <p className="text-[11px] uppercase tracking-wider text-gray-300 font-medium leading-normal">
                Serving Somerset, Bath & Bristol with absolute pride.
              </p>
            </div>

            {/* Structural accent background design */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-gold/20 rounded-bl-2xl pointer-events-none" />
          </div>

          {/* Copy Description Column */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-taupe block mb-2">
                  OUR PROFESSIONAL FOUNDATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display tracking-tight leading-none" id="about-heading">
                  High-End Renovation & Maintenance, All Under One Roof
                </h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed font-light" id="about-intro">
                Founded in <strong>{BUSINESS_INFO.established}</strong>, Chivers Property Developments has built a sterling reputation as Somerset and Bristol’s go-to specialist contractor. We bring absolute reliability, clear communication, and impeccable standards of work to every property project.
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-light">
                Whether you are seeking a stunning modern kitchen extension, a quiet cedar-clad garden office snug, a complete bathroom sanctuary, or simply general structural upkeep, our fully insured builders make home transformations seamless and entirely stress-free.
              </p>

              {/* Checkbullets list */}
              <div className="py-2 space-y-2.5" id="about-bullets-container">
                {valueBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-800">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* CTA and owner sign-off bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t border-gray-100" id="about-footer-bar">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg shadow-md transition-all text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer group"
                  id="about-quote-btn"
                >
                  Discuss Your Project
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <div className="flex flex-col text-left">
                  <p className="text-sm font-semibold text-navy">Luke & Team Chivers</p>
                  <p className="text-xs text-gray-500 font-medium">Founding Directors, Somerset</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values grid row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20" id="about-values-grid">
          {coreValues.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-taupe/15 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4">
                  <IconComponent className="w-6 h-6 text-taupe" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
