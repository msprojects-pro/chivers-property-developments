/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Home, Bath, Trees, Wrench, Flower, DoorClosed, Hammer, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data';

// Map icon string keys to actual Lucide component references
const iconMap: Record<string, React.ComponentType<any>> = {
  Home: Home,
  Bath: Bath,
  Trees: Trees,
  Wrench: Wrench,
  Flower: Flower,
  DoorClosed: DoorClosed,
  Hammer: Hammer,
};

interface ServicesProps {
  onOpenQuoteWithService: (serviceTitle: string) => void;
}

export default function Services({ onOpenQuoteWithService }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#faf9f6] border-t border-taupe/10 relative" aria-label="Services offered by Chivers Property Developments">
      {/* Background design elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-taupe/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-taupe">
            OUR PROFESSIONAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display tracking-tight mt-2" id="services-heading">
            Complete Renovation & Building Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-taupe mx-auto mt-4 rounded-full" />
          <p className="text-base text-gray-600 mt-4 font-light leading-relaxed">
            From initial design support to flawless final finishes. We handle all planning, carpentry, plumbing, plastering, electrical, and structural works. One point of contact, absolute peace of mind.
          </p>
        </div>

        {/* Services Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES.map((srv, idx) => {
            const IconComponent = iconMap[srv.icon] || Home;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={srv.id}
                className="group relative bg-white border border-taupe/15 hover:border-taupe/30 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col scale-100 hover:scale-[1.01]"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                id={`service-card-${srv.id}`}
              >
                {/* Service Card Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    id={`service-img-${srv.id}`}
                    onError={(e) => {
                      // Handled fallback if link breaks
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/' + srv.id + '/800/600';
                    }}
                  />
                  {/* Subtle decorative gold/navy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
                  
                  {/* Category floating icon in gold */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gold/90 backdrop-blur-xs flex items-center justify-center text-navy shadow-md">
                      <IconComponent className="w-5 h-5 text-navy-dark" />
                    </div>
                    <span className="text-xs font-semibold text-white uppercase tracking-wider font-display drop-shadow-md">
                      CHIVERS SPEC
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-navy tracking-tight group-hover:text-taupe transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-medium text-taupe italic mt-0.5">
                        {srv.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed font-light">
                      {srv.description}
                    </p>

                    {/* Bullet inclusions */}
                    <div className="pt-2 space-y-1.5 border-t border-gray-50">
                      {srv.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span className="text-[11px] font-medium text-gray-700 leading-normal">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trigger Action */}
                  <button
                    onClick={() => onOpenQuoteWithService(srv.title)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 bg-navy/5 hover:bg-navy text-navy hover:text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all mt-6 cursor-pointer group-hover:bg-navy group-hover:text-white"
                    id={`service-btn-${srv.id}`}
                  >
                    Get Free Estimate
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
