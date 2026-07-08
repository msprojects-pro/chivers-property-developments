/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: 'Chivers Property Developments',
  tagline: 'Building Better Spaces. Creating Value.',
  description: 'Complete property development, renovation & maintenance services. High-quality work including home offices, garden rooms, bathrooms, kitchens, UPVC, landscaping, garage conversions and more — all under one roof.',
  established: 2020,
  phones: ['07903 637 829', '07592 634 661'],
  email: 'info@chiversproperty.co.uk',
  address: 'Somerset & Bristol Area, United Kingdom',
  areaServed: 'Somerset, Bristol, Bath, Wiltshire & the South West',
  logo: '',
};

export const SERVICES: Service[] = [
  {
    id: 'developments',
    title: 'Property Developments & Renovations',
    tagline: 'Bespoke extensions, structural updates, and luxury upgrades.',
    description: 'From major structural extensions and loft conversions to complete whole-house transformations, we manage your project from concept to key handover with seamless coordination.',
    details: [
      'Single & double storey home extensions',
      'Structural wall removals & open-plan layouts',
      'Full house strip-outs & turnkey renovations',
      'Loft and attic conversions',
      'Building regulations & planning support'
    ],
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'kitchen-bathroom',
    title: 'Kitchen & Bathroom Refurbishments',
    tagline: 'Exquisite kitchen designs and spa-like bathroom retreats.',
    description: 'We design and install stunning high-end kitchens and luxury bathrooms tailored to your lifestyle. Combining premium craftsmanship with top-quality materials.',
    details: [
      'Bespoke kitchen fitting & layout design',
      'Luxury walk-in showers & wet rooms',
      'Freestanding baths & premium stone tiling',
      'Integrated lighting & custom vanity units',
      'Underfloor heating installations'
    ],
    icon: 'Bath',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'garden-rooms',
    title: 'Home Offices & Garden Rooms',
    tagline: 'Premium, fully-insulated standalone workspaces and garden lodges.',
    description: 'Expand your living space with a custom-designed, fully insulated garden room. Ideal for professional home offices, gyms, studios, or recreation rooms.',
    details: [
      'Full structural insulation for year-round use',
      'UPVC or Aluminium double-glazed doors & windows',
      'Custom internal electrics, internet & heating',
      'Premium western red cedar or larch cladding',
      'Timber frame construction on pile foundations'
    ],
    icon: 'Trees',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'garage-conversions',
    title: 'Garage Conversions',
    tagline: 'Transform underutilised space into high-value living areas.',
    description: 'A cost-effective way to add an extra room to your home. We convert unused garages into premium lounges, extra bedrooms, home cinemas, or playrooms.',
    details: [
      'Full floor, wall, and ceiling insulation',
      'Window and door integration matching existing brickwork',
      'Partitions, plastering, and custom lighting',
      'Heating extension & electrical ring circuits',
      'Structural sign-offs & building sign-off'
    ],
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Garden Transformations',
    tagline: 'Elegant patios, premium decking, and modern outdoor layouts.',
    description: 'Extend your living space outdoors. We design and construct beautiful, durable patios, composite decks, lawns, and modern block paving.',
    details: [
      'Porcelain & natural sandstone patio paving',
      'Premium timber & composite decking installation',
      'Retaining sleeper walls & raised planters',
      'Artificial turf & natural lawn turfing',
      'Fencing, side gates, and outdoor accent lighting'
    ],
    icon: 'Flower',
    image: 'https://images.unsplash.com/photo-1534710961216-75c9760229ce?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'upvc',
    title: 'UPVC Windows & Doors',
    tagline: 'Highly secure, energy-efficient modern glazing solutions.',
    description: 'Upgrade your home security and thermal efficiency with our premium double or triple-glazed UPVC windows and doors, available in a variety of styles.',
    details: [
      'UPVC window installations & replacements',
      'Composite front doors with multi-point locking',
      'Bi-folding & French patio doors',
      'A-rated energy efficiency glazing',
      'Fascias, soffits, and guttering maintenance'
    ],
    icon: 'DoorClosed',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'maintenance',
    title: 'General Building & Maintenance',
    tagline: 'Reliable building repair, maintenance, and structural upkeep.',
    description: 'No job is too small. We offer comprehensive building maintenance and repair services to keep your residential or commercial properties in peak condition.',
    details: [
      'Brickwork repairs & repointing',
      'Internal plastering, skimming & dry-lining',
      'Roof repairs & gutter clearing',
      'General joinery & carpentry',
      'Landlord maintenance & property safety repairs'
    ],
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'High-End Kitchen Extension',
    category: 'Developments',
    description: 'A grand single-storey rear extension creating a light-filled open-plan kitchen and dining layout, featuring a spectacular marble island and bespoke dark cabinetry.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    stats: 'Completed in 6 Weeks'
  },
  {
    id: 'proj-2',
    title: 'Luxury Insulated Garden Office',
    category: 'Garden Rooms',
    description: 'A premium larch-clad cedar garden room built to act as a permanent dual-workstation home office, complete with underfloor heating, ethernet wiring, and premium double glazing.',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    stats: 'Completed in 3 Weeks'
  },
  {
    id: 'proj-3',
    title: 'Elegant Marble Bathroom Sanctuary',
    category: 'Bathrooms',
    description: 'Complete luxury bathroom strip-out and redesign. Installed a freestanding tub, premium brass water fittings, beautiful book-matched marble tiles, and custom ambient lighting.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    stats: 'Completed in 2 Weeks'
  },
  {
    id: 'proj-4',
    title: 'Bespoke Sandstone Patio & Lawn',
    category: 'Landscaping',
    description: 'Complete rear garden excavation and landscaping. Laid modern Indian sandstone pavers, built timber raised vegetable beds, installed a premium lawn, and completed custom fencing.',
    image: 'https://images.unsplash.com/photo-1534710961216-75c9760229ce?auto=format&fit=crop&w=1200&q=80',
    stats: 'Completed in 10 Days'
  },
  {
    id: 'proj-5',
    title: 'Double Garage conversion into snug',
    category: 'Conversions',
    description: 'Converted an underutilised double garage into a cozy secondary lounge/cinema room, with insulated concrete floor, fully insulated walls, and matching front brick facade with UPVC window.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    stats: 'Completed in 2.5 Weeks'
  },
  {
    id: 'proj-6',
    title: 'Modern House Refurbishment & UPVC Windows',
    category: 'UPVC',
    description: 'Full house window refurbishment replacing outdated wooden frames with high-efficiency charcoal grey UPVC frames, and fitting a gorgeous matching modern composite front door.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    stats: 'Completed in 5 Days'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mark & Sarah Jennings',
    location: 'Bath',
    rating: 5,
    text: 'Chivers Property Developments completely transformed our downstairs with an open-plan kitchen extension. The quality of work is outstanding. From the steel beam installations to the bespoke painting, their attention to detail is remarkable. Reliable, tidy, and absolute professionals!',
    service: 'Kitchen Extension',
    date: 'March 2026'
  },
  {
    id: 'test-2',
    name: 'Rebecca Thorne',
    location: 'Clifton, Bristol',
    rating: 5,
    text: 'I hired Chivers to build a garden room for my business, and I could not be happier. It is beautifully insulated, warm even in winter, and looks incredibly premium in my garden. It was completed exactly on budget and within three weeks. Highly recommended!',
    service: 'Garden Office Build',
    date: 'January 2026'
  },
  {
    id: 'test-3',
    name: 'David Collins',
    location: 'Keynsham',
    rating: 5,
    text: 'The team converted my single garage into a guest room and utility space. Outstanding communication throughout. They handled everything including the concrete screeding, full insulation, electrical fitments, and plastering. Extremely tidy and courteous crew.',
    service: 'Garage Conversion',
    date: 'November 2025'
  },
  {
    id: 'test-4',
    name: 'Fiona McArthur',
    location: 'Wells, Somerset',
    rating: 5,
    text: 'Excellent patio installation and garden landscaping. Chivers laid beautiful porcelain flags and installed a gorgeous wooden deck. They cleaned up perfectly every day and worked super hard. Best building company I have dealt with in years.',
    service: 'Garden Landscaping',
    date: 'September 2025'
  }
];
