/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Info } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage('Please provide either a phone number or an email address so we can contact you.');
      return;
    }
    if (!formData.consent) {
      setErrorMessage('Please agree to our privacy policy consent.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('📬 General Enquiry submitted successfully:', formData);
      
      // Save locally as well
      try {
        const existingEnquiries = JSON.parse(localStorage.getItem('chivers_enquiries') || '[]');
        localStorage.setItem('chivers_enquiries', JSON.stringify([{ ...formData, id: `enq-${Date.now()}`, submittedAt: new Date().toISOString() }, ...existingEnquiries]));
      } catch (err) {
        console.error('Error saving general enquiry:', err);
      }
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#faf9f6] border-t border-taupe/10 relative" aria-label="Contact details and enquiry form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-taupe">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display tracking-tight mt-2" id="contact-heading">
            Let's Discuss Your Next Build
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-taupe mx-auto mt-4 rounded-full" />
          <p className="text-base text-gray-600 mt-4 font-light leading-relaxed">
            Ready to upgrade your home? Reach out via our enquiry form, call our specialist team directly, or drop us an email. We offer completely free site visits and non-obligation estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Contact Details & Trust Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-taupe/15 rounded-2xl p-6 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-navy border-b border-gray-100 pb-3">
                Office & Director Contacts
              </h3>
              
              <div className="space-y-5" id="contact-details-list">
                {/* Director Direct Number */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0 border border-taupe/15">
                    <Phone className="w-5 h-5 text-taupe" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Call Luke Chivers (Direct)</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phones[0].replace(/\s/g, '')}`}
                      className="text-base font-bold text-navy hover:text-gold transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phones[0]}
                    </a>
                  </div>
                </div>

                {/* Team Direct Number */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0 border border-taupe/15">
                    <Phone className="w-5 h-5 text-taupe" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Luke's Team Line / Office</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phones[1].replace(/\s/g, '')}`}
                      className="text-base font-bold text-navy hover:text-gold transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phones[1]}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0 border border-taupe/15">
                    <Mail className="w-5 h-5 text-taupe" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Enquiries</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-base font-bold text-navy hover:text-gold transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Operational Area */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0 border border-taupe/15">
                    <MapPin className="w-5 h-5 text-taupe" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Our Working Area</p>
                    <p className="text-sm font-semibold text-navy leading-normal mt-0.5">
                      {BUSINESS_INFO.areaServed}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-navy text-white rounded-2xl p-6 border border-gold/20 shadow-md relative overflow-hidden" id="working-hours-card">
              <div className="absolute right-0 top-0 w-24 h-24 bg-gold/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gold">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-display font-bold text-base tracking-wide text-white">Our Business Hours</h4>
              </div>
              <div className="space-y-2.5 text-sm text-gray-300">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-white">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Saturday</span>
                  <span className="font-medium text-white">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday & Bank Holidays</span>
                  <span className="text-gold font-semibold uppercase text-xs">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-taupe/15 rounded-2xl p-6 sm:p-10 shadow-sm">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-enquiry-form">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-navy font-display tracking-tight">
                    Send a Message Directly
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill out the form below and Luke’s office will get right back to you.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Johnathan Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white text-gray-900 transition-all text-sm"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 07903 637 829"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white text-gray-900 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.co.uk"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white text-gray-900 transition-all text-sm"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Select Project Type
                    </label>
                    <select
                      name="service"
                      id="contact-service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white text-gray-900 transition-all text-sm"
                    >
                      <option value="">General Inquiry</option>
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                    How Can We Help You?
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your project: approximate sizes, desired starting timeframe, etc..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white text-gray-900 transition-all text-sm resize-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    id="contact-consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 rounded text-navy border-gray-300 focus:ring-navy mt-1 shrink-0 cursor-pointer"
                    required
                  />
                  <label htmlFor="contact-consent" className="text-xs text-gray-600 leading-normal select-none cursor-pointer">
                    I consent to Chivers Property Developments storing my contact details securely to address this property enquiry. See our <span className="font-semibold text-navy hover:underline">Privacy Policy</span>.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-navy hover:bg-navy-light text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all text-xs sm:text-sm uppercase tracking-wider cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send General Enquiry
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center flex flex-col items-center justify-center" id="contact-success-container">
                <div className="mb-4 text-green-600 bg-green-50 p-4 rounded-full border border-green-200">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-navy font-display tracking-tight mb-2">
                  Enquiry Transmitted!
                </h3>
                <p className="text-gray-700 text-sm max-w-sm mx-auto mb-6">
                  Thank you. Your enquiry was logged successfully. Luke Chivers and the team will review details and reply to you as soon as possible.
                </p>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl w-full text-left space-y-2 mb-6">
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-taupe uppercase tracking-wider">
                    <Info className="w-4 h-4" />
                    <span>Your Submitted Details:</span>
                  </div>
                  <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Name:</span> {formData.name}</p>
                  {formData.phone && <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Phone:</span> {formData.phone}</p>}
                  {formData.email && <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Email:</span> {formData.email}</p>}
                  <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Category:</span> {formData.service || 'General Inquiry'}</p>
                </div>
                <button
                  onClick={() => {
                    setFormData({ name: '', email: '', phone: '', service: '', message: '', consent: false });
                    setIsSuccess(false);
                  }}
                  className="px-6 py-2.5 bg-navy text-white hover:bg-navy-light rounded-lg font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  id="reset-contact-btn"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
