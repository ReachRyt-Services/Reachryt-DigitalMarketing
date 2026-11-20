/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1769F5',
          darkBlue: '#1055D8',
          deepBlue: '#123A83',
          navy: '#101B33',
          deepNavy: '#070D1B',
          surface: '#0B1326',
          card: '#111D38',
          light: '#F8FAFC',
          softBlue: '#EFF5FF',
          whatsapp: '#25D366',
          whatsappDark: '#128C7E',
          instagramPink: '#E1306C',
          instagramPurple: '#833AB4',
          instagramOrange: '#F77737',
        },
      },
      fontFamily: {
        display: ['"Sora"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', '"Sora"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(23, 105, 245, 0.45)',
        'glow-lg': '0 0 65px -12px rgba(23, 105, 245, 0.55)',
        'glow-whatsapp': '0 0 45px -10px rgba(37, 211, 102, 0.35)',
        'glow-instagram': '0 0 45px -10px rgba(225, 48, 108, 0.35)',
        'card-elevated': '0 24px 60px -15px rgba(7, 13, 27, 0.12)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(to right, rgba(16,27,51,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,27,51,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
