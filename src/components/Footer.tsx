/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight, Shield } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-navy-dark text-white border-t-2 border-gold/40 pt-16 pb-8 relative z-20" aria-label="Footer metadata">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand/Bio Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-navy border border-gold font-display font-black text-sm text-gold shadow-sm" id="footer-logo-text">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-sm tracking-tight text-white leading-none">CHIVERS</span>
                <span className="text-[8px] tracking-widest font-semibold uppercase text-gold-light mt-0.5">Property Developments</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Complete professional building, renovations, garden snugs, and general maintenance. Delivering stellar craftsmanship, full project management, and trusted local service since {BUSINESS_INFO.established}.
            </p>

            <div className="flex items-center gap-2.5 text-xs text-gray-400 font-medium">
              <Shield className="w-4 h-4 text-gold shrink-0" />
              <span>£5 Million Public Liability Protection</span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-gold">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              {SERVICES.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#services');
                    }}
                    className="hover:text-gold transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 text-gold/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-gold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#about');
                  }}
                  className="hover:text-gold transition-colors"
                >
                  About Our Team
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#services');
                  }}
                  className="hover:text-gold transition-colors"
                >
                  What We Do
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#gallery');
                  }}
                  className="hover:text-gold transition-colors"
                >
                  Our Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#testimonials');
                  }}
                  className="hover:text-gold transition-colors"
                >
                  Client Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#contact');
                  }}
                  className="hover:text-gold transition-colors"
                >
                  Contact Office
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-gold">
              Business Contacts
            </h4>
            <div className="space-y-3 text-xs text-gray-400 font-light">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\s/g, '')}`} className="hover:text-white font-medium transition-colors">
                    {BUSINESS_INFO.phones[0]} (Luke Direct)
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phones[1].replace(/\s/g, '')}`} className="hover:text-white font-medium transition-colors mt-0.5">
                    {BUSINESS_INFO.phones[1]} (Office Line)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Serving {BUSINESS_INFO.areaServed}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row: Divider and credits */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-400 font-light text-center sm:text-left">
            © {new Date().getFullYear()} Chivers Property Developments. All rights reserved. Registered in Somerset, United Kingdom.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-lg bg-navy/45 hover:bg-navy border border-white/10 text-gold-light hover:text-white transition-all cursor-pointer"
              aria-label="Scroll to top"
              id="scroll-to-top-footer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
