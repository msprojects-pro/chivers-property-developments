/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll height to apply a premium transparent-to-opaque blur transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of the navbar
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 border-b border-taupe/15 shadow-sm backdrop-blur-md py-3'
            : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}
        id="main-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
              id="navbar-logo-link"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-navy border-2 border-gold font-display font-black text-lg text-gold shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-gold-light" id="navbar-logo-text">
                C
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-display font-extrabold tracking-tight leading-none text-base sm:text-lg transition-colors ${
                    isScrolled ? 'text-navy' : 'text-white'
                  }`}
                  id="navbar-brand-name"
                >
                  CHIVERS
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] tracking-widest font-semibold uppercase leading-none mt-1 transition-colors ${
                    isScrolled ? 'text-taupe' : 'text-gold-light'
                  }`}
                  id="navbar-brand-sub"
                >
                  Property Developments
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7">
              <div className="flex gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-gold relative py-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                    id={`desktop-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Header Contacts & Action Button */}
              <div className="flex items-center gap-4 border-l border-taupe/20 pl-6">
                <div className="flex flex-col text-right">
                  <span className={`text-[10px] font-medium uppercase tracking-wider ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                    Call Luke Direct:
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phones[0].replace(/\s/g, '')}`}
                    className={`font-bold font-display text-sm flex items-center gap-1.5 transition-colors ${
                      isScrolled ? 'text-navy hover:text-tau' : 'text-white hover:text-gold-light'
                    }`}
                    id="desktop-call-direct"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    {BUSINESS_INFO.phones[0]}
                  </a>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="px-5 py-2.5 bg-navy hover:bg-navy-light text-white hover:text-gold-light font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-gold/30"
                  id="desktop-quote-btn"
                >
                  Free Quote
                </button>
              </div>
            </div>

            {/* Mobile Menu Controller */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].replace(/\s/g, '')}`}
                className={`p-2 rounded-lg border transition-colors ${
                  isScrolled
                    ? 'border-taupe/25 text-navy bg-taupe/5'
                    : 'border-white/20 text-white bg-white/5'
                }`}
                aria-label="Call directly"
                id="mobile-nav-call"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isScrolled ? 'text-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-sm bg-white shadow-2xl border-l border-taupe/20 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-nav-drawer"
      >
        {/* Mobile menu header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-navy text-white">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-dark border border-gold/70 font-display font-black text-sm text-gold" id="mobile-logo-text">
              C
            </div>
            <span className="font-display font-bold text-sm tracking-tight">CHIVERS DEVELOPMENTS</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-full bg-navy-dark text-white/80 hover:text-white cursor-pointer"
            id="mobile-menu-close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="p-6 flex-1 space-y-4 overflow-y-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Navigation</p>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="block py-2 text-base font-semibold text-gray-800 hover:text-navy hover:translate-x-1 transition-all"
              id={`mobile-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contacts & actions bottom lock */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
          <div className="space-y-2">
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Direct Contact Numbers</p>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4 text-taupe shrink-0" />
              <div className="flex flex-col">
                <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\s/g, '')}`} className="hover:text-navy font-semibold">
                  {BUSINESS_INFO.phones[0]} (Luke)
                </a>
                <a href={`tel:${BUSINESS_INFO.phones[1].replace(/\s/g, '')}`} className="hover:text-navy text-xs text-gray-500">
                  {BUSINESS_INFO.phones[1]} (Office)
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all text-xs uppercase tracking-widest cursor-pointer"
            id="mobile-drawer-quote-btn"
          >
            <Calendar className="w-4 h-4 text-gold" />
            Get A Free Quote
          </button>
        </div>
      </div>

      {/* Mobile Drawer backdrop shadow */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
          id="mobile-drawer-backdrop"
        />
      )}
    </>
  );
}
