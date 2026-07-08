/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Phone, Mail } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuoteModal({ isOpen, onClose, initialService = '' }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
    preferredContact: 'phone',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected service if the modal is opened with a specific initial service
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, service: initialService }));
      setIsSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen, initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactMethodChange = (method: 'phone' | 'email') => {
    setFormData((prev) => ({ ...prev, preferredContact: method }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Quick client-side validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage('Please provide either a phone number or an email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('✅ Quote request submitted successfully:', formData);

      // Persist submission history locally in localStorage
      try {
        const existingSubmissions = JSON.parse(localStorage.getItem('chivers_quotes') || '[]');
        const newSubmission = {
          ...formData,
          id: `quote-${Date.now()}`,
          submittedAt: new Date().toISOString(),
        };
        localStorage.setItem('chivers_quotes', JSON.stringify([newSubmission, ...existingSubmissions]));
      } catch (err) {
        console.error('Error saving quote submission:', err);
      }
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#faf9f6] border border-taupe/20 shadow-2xl z-10"
            id="quote-modal-container"
          >
            {/* Header branding stripe */}
            <div className="h-2 bg-gradient-to-r from-navy via-taupe to-gold" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-navy transition-colors cursor-pointer"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-navy font-display tracking-tight" id="modal-title">
                      Request a Free Quote
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      No obligation. Complete the details below and our specialists will contact you.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg" id="modal-error">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4" id="quote-request-form">
                    {/* Name */}
                    <div>
                      <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="modal-name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white text-gray-900 transition-all text-sm"
                        required
                      />
                    </div>

                    {/* Contact fields in half size on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="modal-phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 07903 637 829"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white text-gray-900 transition-all text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="modal-email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white text-gray-900 transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="modal-service" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                        Project / Service Needed
                      </label>
                      <select
                        name="service"
                        id="modal-service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white text-gray-900 transition-all text-sm"
                      >
                        <option value="">-- Select a Service --</option>
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="Other / General Enquiry">Other / General Enquiry</option>
                      </select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => handleContactMethodChange('phone')}
                          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border transition-all text-sm cursor-pointer ${
                            formData.preferredContact === 'phone'
                              ? 'bg-navy/5 border-navy text-navy font-medium'
                              : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                          }`}
                          id="pref-contact-phone"
                        >
                          <Phone className="w-4 h-4" />
                          Phone
                        </button>
                        <button
                          type="button"
                          onClick={() => handleContactMethodChange('email')}
                          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border transition-all text-sm cursor-pointer ${
                            formData.preferredContact === 'email'
                              ? 'bg-navy/5 border-navy text-navy font-medium'
                              : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                          }`}
                          id="pref-contact-email"
                        >
                          <Mail className="w-4 h-4" />
                          Email
                        </button>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="modal-message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                        Project Description / Message
                      </label>
                      <textarea
                        name="message"
                        id="modal-message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, dimensions, requirements or preferred starting dates..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white text-gray-900 transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all text-sm cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed uppercase tracking-wider mt-2"
                      id="submit-modal-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Quote Request
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center flex flex-col items-center justify-center" id="success-screen">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="mb-4 text-green-600 bg-green-50 p-3.5 rounded-full border border-green-200"
                  >
                    <CheckCircle className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-navy font-display tracking-tight mb-2">
                    Request Received!
                  </h3>
                  <p className="text-gray-700 text-sm max-w-xs mx-auto mb-6">
                    Thank you for contacting Chivers Property Developments. A member of our specialist team will call or email you within 24 hours.
                  </p>
                  <div className="bg-white/80 border border-taupe/20 p-4 rounded-xl w-full text-left space-y-2 mb-6">
                    <p className="text-xs font-semibold text-taupe uppercase tracking-wider">Direct Office Contacts:</p>
                    <div className="flex justify-between items-center text-sm font-medium text-navy">
                      <span className="text-gray-500 font-normal">Luke Chivers:</span>
                      <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\s/g, '')}`} className="hover:underline">{BUSINESS_INFO.phones[0]}</a>
                    </div>
                    <div className="flex justify-between items-center text-sm font-medium text-navy">
                      <span className="text-gray-500 font-normal">Team Line:</span>
                      <a href={`tel:${BUSINESS_INFO.phones[1].replace(/\s/g, '')}`} className="hover:underline">{BUSINESS_INFO.phones[1]}</a>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-navy text-white hover:bg-navy-light rounded-lg font-medium text-sm transition-all cursor-pointer"
                    id="success-close-btn"
                  >
                    Back to Website
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
