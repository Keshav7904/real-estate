import type { PropertyType } from './types';

export const site = {
  name: 'VK Realty',
  tagline: 'Land & Plot Specialists',
  legalName: 'VK Realty Pvt. Ltd.',
  city: 'Chennai',
  state: 'Tamil Nadu',
  since: 2015,
  phone: '+91 98765 43210',
  phoneAlt: '+91 44 2815 4321',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  email: 'enquiry@vkrealty.in',
  salesEmail: 'sales@vkrealty.in',
  address: '18, Poes Garden Road, Teynampet, Chennai – 600018, Tamil Nadu',
  addressLines: ['18, Poes Garden Road, Teynampet,', 'Chennai – 600018, Tamil Nadu'],
  reraId: 'TN/29/Layout/0418/2024',
};

/**
 * Categories the public site currently sells. Apartment, villa and commercial
 * records stay in the dataset so they can be switched back on by adding the
 * type here — nothing needs to be re-imported.
 */
export const ACTIVE_CATEGORIES: PropertyType[] = ['Plot'];

export const isActiveCategory = (type: PropertyType) => ACTIVE_CATEGORIES.includes(type);

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
