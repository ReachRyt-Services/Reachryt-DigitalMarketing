import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageSquare, Sparkles, Layers, Sun, Moon } from 'lucide-react';
import { BRAND_CONFIG } from '../utils/brandConfig';
import { useTheme } from '../hooks/useTheme';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#why-reachryt' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = ['home', 'services', 'how-we-work', 'industries', 'why-reachryt', 'contact'];
      const scrollPos = window.scrollY + 240;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isLight
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3.5 shadow-lg shadow-slate-900/5'
            : 'bg-brand-deepNavy/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : isLight
          ? 'bg-white/70 backdrop-blur-md border-b border-slate-200/50 py-4'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Official Updated Reachryt Logo (Switches between Primary Light & Inverse Dark automatically) */}
        <a
          href="#home"
          className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg"
          aria-label="Reachryt Digital Marketing Home"
        >
          <img
            src={isLight ? BRAND_CONFIG.logos.primaryLightBg : BRAND_CONFIG.logos.inverseDarkBg}
            alt={BRAND_CONFIG.logos.alt}
            width={176}
            height={45}
            className="w-[148px] sm:w-[168px] h-auto block object-contain"
          />
        </a>

        {/* Center: Desktop Navigation Links (Balanced Equal Distances) */}
        <nav
          className={`hidden lg:flex items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-md transition-colors duration-300 ${
            isLight
              ? 'bg-slate-100/90 border border-slate-200/90 shadow-inner'
              : 'bg-white/[0.04] border border-white/10'
          }`}
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-normal transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-950'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-brand-blue shadow-glow"
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Equal-Distance Action Group -> [Dark/Light Switch] + [Book Consultation] */}
        <div className="hidden md:flex items-center gap-3.5 shrink-0">
          {/* Dark / Light Mode Switch */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            className={`relative inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200/80 border-slate-200 text-slate-800 shadow-sm'
                : 'bg-white/[0.06] hover:bg-white/[0.12] border-white/15 text-slate-100'
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                isLight
                  ? 'bg-amber-400/20 text-amber-600 rotate-0'
                  : 'bg-brand-blue/25 text-blue-300 rotate-0'
              }`}
            >
              {isLight ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </span>
            <span className="pr-0.5">{isLight ? 'Light' : 'Dark'}</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-darkBlue text-white font-display font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-200 border border-blue-400/30"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Controls: Theme Switch + Menu Trigger */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            className={`inline-flex items-center justify-center p-2.5 rounded-xl border transition-colors ${
              isLight
                ? 'bg-slate-100 border-slate-200 text-amber-600'
                : 'bg-white/10 border-white/15 text-blue-300'
            }`}
          >
            {isLight ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className={`inline-flex items-center justify-center p-2.5 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue ${
              isLight
                ? 'bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-200'
                : 'bg-white/10 border-white/15 text-white hover:bg-white/15'
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className={`lg:hidden overflow-hidden backdrop-blur-2xl border-b ${
              isLight
                ? 'bg-white/98 border-slate-200'
                : 'bg-brand-deepNavy/98 border-white/10'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 pt-4 pb-6 space-y-4">
              {/* Mobile Core Services Quick Jump */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <a
                  href="#service-whatsapp"
                  onClick={closeMobileMenu}
                  className="flex flex-col items-start p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-left"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500 mb-1" />
                  <span
                    className={`text-[11px] font-semibold leading-tight ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    WhatsApp Automation
                  </span>
                </a>
                <a
                  href="#service-instagram"
                  onClick={closeMobileMenu}
                  className="flex flex-col items-start p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/25 text-left"
                >
                  <Sparkles className="w-4 h-4 text-pink-500 mb-1" />
                  <span
                    className={`text-[11px] font-semibold leading-tight ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    Instagram DM Flows
                  </span>
                </a>
                <a
                  href="#service-whitelabel"
                  onClick={closeMobileMenu}
                  className="flex flex-col items-start p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-left"
                >
                  <Layers className="w-4 h-4 text-blue-500 mb-1" />
                  <span
                    className={`text-[11px] font-semibold leading-tight ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    White-Label Engine
                  </span>
                </a>
              </div>

              <div
                className={`flex flex-col space-y-1 border-t pt-3 ${
                  isLight ? 'border-slate-200' : 'border-white/10'
                }`}
              >
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isLight
                        ? 'text-slate-700 hover:text-brand-blue hover:bg-slate-100'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-display font-semibold text-sm px-5 py-3 rounded-xl shadow-glow"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
