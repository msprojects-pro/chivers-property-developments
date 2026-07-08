/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCall from './components/FloatingCall';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('');

  const handleOpenQuote = () => {
    setQuoteService('');
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setQuoteService(serviceTitle);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteService('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#faf9f6]" id="app-root">
      {/* Structural sticky top navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main landing sections */}
      <main className="flex-1" id="main-content">
        <Hero onOpenQuote={handleOpenQuote} />
        
        <About onOpenQuote={handleOpenQuote} />
        
        <Services onOpenQuoteWithService={handleOpenQuoteWithService} />
        
        <Gallery />
        
        <Testimonials />
        
        <Contact />
      </main>

      {/* Structured visual footer */}
      <Footer />

      {/* Mobile-only action dock */}
      <FloatingCall onOpenQuote={handleOpenQuote} />

      {/* Interactive modal form for quotes */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialService={quoteService}
      />
    </div>
  );
}
