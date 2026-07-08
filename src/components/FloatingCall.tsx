/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface FloatingCallProps {
  onOpenQuote: () => void;
}

export default function FloatingCall({ onOpenQuote }: FloatingCallProps) {
  const primaryPhone = BUSINESS_INFO.phones[0].replace(/\s/g, '');

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-4 bg-white/90 backdrop-blur-md border-t border-taupe/15 flex gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      id="mobile-floating-dock"
    >
      {/* Call Luke Button */}
      <a
        href={`tel:${primaryPhone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#f2ede4] hover:bg-[#eae1d3] text-navy font-bold rounded-xl transition-all text-xs uppercase tracking-wider border border-taupe/20"
        id="mobile-dock-call"
      >
        <Phone className="w-4 h-4 text-taupe shrink-0 animate-pulse" />
        Call Now
      </a>

      {/* Quote request button */}
      <button
        onClick={onOpenQuote}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-navy hover:bg-navy-light text-white font-bold rounded-xl transition-all text-xs uppercase tracking-wider shadow-sm cursor-pointer border border-gold/20"
        id="mobile-dock-quote"
      >
        <Calendar className="w-4 h-4 text-gold shrink-0" />
        Free Quote
      </button>
    </div>
  );
}
