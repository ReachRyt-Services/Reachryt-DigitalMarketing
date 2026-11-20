/**
 * Verified Reachryt Business & Brand Information
 * Extracted strictly from https://reachryt.com/ and https://reachryt-web-beta.vercel.app/
 * Zero fabricated metrics, fake client names, or unverified social URLs.
 */
export const BRAND_CONFIG = {
  name: 'Reachryt',
  tagline: 'Digital Marketing & Automation Partner for Educational Institutions',
  legalCopyright: '© 2026 Saventevo Solution Pvt Ltd. All Rights Reserved.',
  logos: {
    primaryLightBg: '/brand/logo-primary.webp',
    inverseDarkBg: '/brand/logo-inverse.webp',
    alt: 'Reachryt - Digital Marketing',
    width: 1288,
    height: 331,
  },
  contact: {
    email: 'reachryt.services@gmail.com',
    emailHref: 'mailto:reachryt.services@gmail.com',
    phoneDisplay: '+91 90929 34889',
    phoneHref: 'tel:+919092934889',
    whatsappHref:
      'https://wa.me/919092934889?text=Hello%20Reachryt%2C%20I%20would%20like%20to%20enquire%20about%20your%20automation%20and%20digital%20marketing%20solutions.',
    addressShort: '111 Siruthuli Ave, CBE 641047',
    addressFull: '111 Siruthuli Avenue, Periyanaykanpalayam, Coimbatore, Tamil Nadu 641047',
    googleMapsHref:
      'https://www.google.com/maps/search/?api=1&query=111+Siruthuli+Ave%2C+Coimbatore+641047',
    officeHours: {
      weekdays: 'Monday – Friday: 9:00 AM – 6:00 PM IST',
      saturday: 'Saturday: 10:00 AM – 4:00 PM IST',
      sunday: 'Sunday: Closed (By appointment only)',
    },
  },
} as const;
