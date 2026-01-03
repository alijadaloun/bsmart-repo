import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Call Us', href: 'tel:+96181501832', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'School Tutoring', href: getPermalink('/services') },
        { text: 'Exam Preparation', href: getPermalink('/services') },
        { text: 'Coding & Technology', href: getPermalink('/services') },
        { text: 'Languages', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Our Mission', href: getPermalink('/about') },
        { text: 'Teaching Philosophy', href: getPermalink('/about') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Call Us', href: 'tel:+96181501832' },
        { text: 'FAQ', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/96181501832' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/B-Smart' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/__bsmart__/' },
  ],
  footNote: `
    © 2025 B-Smart. <span aria-label="Location" role="img">📍</span> West Beqaa, Jeb Jannine, Lebanon. All rights reserved. <span class="text-muted">Smarter Learning. Better Results.</span>
  `,
};
