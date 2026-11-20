import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../utils/brandConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050A14] border-t border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Official Updated Reachryt Branding */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block" aria-label="Reachryt Digital Marketing">
              <img
                src={BRAND_CONFIG.logos.inverseDarkBg}
                alt={BRAND_CONFIG.logos.alt}
                width={176}
                height={45}
                className="w-[168px] h-auto block object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Technology-driven digital marketing and conversational automation partner for schools,
              colleges, universities, coaching institutions, and white-label agency partners.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-display font-semibold uppercase tracking-wider text-white">Navigation</div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#how-we-work" className="hover:text-white transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#why-reachryt" className="hover:text-white transition-colors">
                  Why Reachryt
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-display font-semibold uppercase tracking-wider text-white">
              Core Solutions
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#service-whatsapp" className="hover:text-emerald-300 transition-colors">
                  01. WhatsApp Automation
                </a>
              </li>
              <li>
                <a href="#service-instagram" className="hover:text-pink-300 transition-colors">
                  02. Instagram DM Workflows
                </a>
              </li>
              <li>
                <a href="#service-whitelabel" className="hover:text-blue-300 transition-colors">
                  03. White-Label Services (Your Brand, Our Engine)
                </a>
              </li>
              <li>
                <a href="#why-reachryt" className="hover:text-white transition-colors">
                  Education SEO &amp; Admission Campaigns
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-display font-semibold uppercase tracking-wider text-white">
              Verified Contact
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={BRAND_CONFIG.contact.emailHref}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{BRAND_CONFIG.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.contact.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{BRAND_CONFIG.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.contact.googleMapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{BRAND_CONFIG.contact.addressShort}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Exact Mandatory Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-medium text-slate-300">{BRAND_CONFIG.legalCopyright}</p>
          <p className="text-slate-500">
            Coimbatore, Tamil Nadu • Engineered for Educational Institutions &amp; Agency Partners
          </p>
        </div>
      </div>
    </footer>
  );
};
