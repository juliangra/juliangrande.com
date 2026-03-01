export const SITE = {
  name: 'Julian Grande',
  title: 'Julian Grande — Software Developer',
  description:
    'Software developer based in Norway, building fast, accessible, and delightful web experiences.',
  url: 'https://juliangrande.com',
  author: 'Julian Grande',
  locale: 'en',
  email: 'hello@juliangrande.com',

  social: {
    github: 'https://github.com/juliangra',
    linkedin: 'https://linkedin.com/in/juliangra',
    twitter: '', // add if desired
  },

  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  now: [
    { emoji: '💼', label: 'Working at Bekk as a Software Developer in Oslo' },
    { emoji: '🏎️', label: 'Watching Formula 1' },
    { emoji: '🌍', label: 'Based in Oslo, Norway' },
    { emoji: '🛠️', label: 'Building side projects and contributing to open-source software using new and exciting technologies' },
  ],
} as const;
