/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Eye, X, Calendar, MapPin, Tag } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Developments', 'Bathrooms', 'Garden Rooms', 'Conversions', 'Landscaping', 'UPVC'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(proj => proj.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#faf9f6] border-t border-taupe/10" aria-label="Portfolio gallery of completed building projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-taupe">
            OUR COMPLETED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display tracking-tight mt-2" id="gallery-heading">
            Showcase of Local Craftsmanship
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-taupe mx-auto mt-4 rounded-full" />
          <p className="text-base text-gray-600 mt-4 font-light leading-relaxed">
            Take a look at some of our recent residential transformations across Somerset, Bath, and Bristol. All photos represent genuine, high-quality projects executed by Luke Chivers and the team.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10" id="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-navy text-white shadow-md border-navy'
                  : 'bg-white text-gray-700 hover:text-navy border border-taupe/20 hover:border-taupe/40'
              }`}
              id={`filter-btn-${cat.toLowerCase().replace(/\s/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-taupe/15 bg-white cursor-pointer"
                id={`project-card-${proj.id}`}
              >
                {/* Project Image */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  id={`project-img-${proj.id}`}
                />

                {/* Glassmorphic card info overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-gold/90 text-navy-dark text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2.5">
                      {proj.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white leading-tight mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-[11px] text-gray-300 line-clamp-2 font-light">
                      {proj.description}
                    </p>
                    
                    {/* View project hint on hover */}
                    <div className="flex items-center gap-1.5 text-gold text-xs font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-4 h-4" />
                      <span>View Project Details</span>
                    </div>
                  </div>
                </div>

                {/* Floating duration stat in upper right */}
                {proj.stats && (
                  <div className="absolute top-4 right-4 bg-navy-dark/80 backdrop-blur-xs border border-white/15 px-3 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
                    {proj.stats}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-sm"
                id="lightbox-backdrop"
              />

              {/* Lightbox container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full border border-taupe/20 z-10 grid grid-cols-1 md:grid-cols-12"
                id="lightbox-container"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white z-20 cursor-pointer"
                  aria-label="Close Lightbox"
                  id="lightbox-close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image Section */}
                <div className="md:col-span-7 h-64 sm:h-96 md:h-full relative min-h-[300px] bg-black">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details Section */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#faf9f6]">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-taupe" />
                      <span className="text-xs font-bold uppercase tracking-wider text-taupe leading-none">
                        {selectedProject.category}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-navy tracking-tight leading-snug">
                      {selectedProject.title}
                    </h3>

                    <div className="h-[1px] bg-taupe/15 my-3" />

                    <p className="text-sm text-gray-700 leading-relaxed font-light">
                      {selectedProject.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <div className="flex items-center gap-3 text-xs text-gray-600 font-medium">
                        <MapPin className="w-4 h-4 text-gold shrink-0" />
                        <span>Somerset & South West Region</span>
                      </div>
                      
                      {selectedProject.stats && (
                        <div className="flex items-center gap-3 text-xs text-gray-600 font-medium">
                          <Calendar className="w-4 h-4 text-gold shrink-0" />
                          <span>Timeline: {selectedProject.stats}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-taupe/10 mt-6 flex flex-col gap-2">
                    <p className="text-[11px] text-gray-500 font-light italic">
                      Inspired by this project? Request a matching design tailored to your specifications.
                    </p>
                    <a
                      href="#contact"
                      onClick={() => {
                        setSelectedProject(null);
                        const contactSec = document.querySelector('#contact');
                        if (contactSec) {
                          contactSec.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full text-center py-2.5 px-4 bg-navy hover:bg-navy-light text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all block cursor-pointer"
                    >
                      Enquire About This Build
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
