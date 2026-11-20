import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { BRAND_CONFIG } from '../utils/brandConfig';
import {
  ConsultationPayload,
  ConsultationApiResponse,
  submitConsultationRequest,
} from '../services/consultationApi';
import { fadeUpVariant, staggerContainerVariant } from '../animations/variants';

const INITIAL_FORM: ConsultationPayload = {
  fullName: '',
  institutionName: '',
  institutionType: 'school',
  workEmail: '',
  phoneNumber: '',
  serviceInterest: 'whatsapp-automation',
  message: '',
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationPayload>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState<ConsultationApiResponse | null>(null);

  const validateClientSide = (): boolean => {
    const nextErrors: Record<string, string> = {};

    if (formData.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your name.';
    }
    if (formData.institutionName.trim().length < 2) {
      nextErrors.institutionName = 'Please enter your organisation name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail.trim())) {
      nextErrors.workEmail = 'Please enter a valid email.';
    }
    if (!/^[+\d\s\-()]{7,25}$/.test(formData.phoneNumber.trim())) {
      nextErrors.phoneNumber = 'Please enter a valid phone number.';
    }
    if (formData.message.trim().length < 10) {
      nextErrors.message = 'Please enter a short message (at least 10 characters).';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiResponse(null);

    if (!validateClientSide()) return;

    setIsSubmitting(true);
    try {
      const result = await submitConsultationRequest(formData);
      setApiResponse(result);
      if (result.success) {
        setFormData(INITIAL_FORM);
      } else if (result.fieldErrors) {
        setErrors(result.fieldErrors);
      }
    } catch {
      setApiResponse({
        success: false,
        error: 'Could not send message right now. Please reach out directly via WhatsApp or Email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-24 bg-brand-surface border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Minimalist Contact Info */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-3">
              <motion.div
                variants={fadeUpVariant}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-blue-300 text-xs font-display font-semibold uppercase tracking-widest"
              >
                <span>Contact Us</span>
              </motion.div>

              <motion.h2
                variants={fadeUpVariant}
                className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
              >
                Let&apos;s{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  Talk.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUpVariant}
                className="text-slate-300 text-sm sm:text-base"
              >
                Have a question or ready to get started? Drop us a message.
              </motion.p>
            </div>

            {/* Clean Contact Links */}
            <motion.div variants={fadeUpVariant} className="space-y-3 text-sm">
              <a
                href={BRAND_CONFIG.contact.phoneHref}
                className="flex items-center gap-3 text-slate-200 hover:text-blue-400 transition-colors"
              >
                <span className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="font-medium">{BRAND_CONFIG.contact.phoneDisplay}</span>
              </a>

              <a
                href={BRAND_CONFIG.contact.emailHref}
                className="flex items-center gap-3 text-slate-200 hover:text-blue-400 transition-colors"
              >
                <span className="w-9 h-9 rounded-xl bg-brand-blue/15 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="font-medium">{BRAND_CONFIG.contact.email}</span>
              </a>

              <a
                href={BRAND_CONFIG.contact.googleMapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-blue-400 transition-colors"
              >
                <span className="w-9 h-9 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="font-medium">{BRAND_CONFIG.contact.addressShort}</span>
              </a>
            </motion.div>

            {/* Quick WhatsApp Button */}
            <motion.div variants={fadeUpVariant} className="pt-1">
              <a
                href={BRAND_CONFIG.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-slate-950 font-display font-bold text-xs sm:text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean, Minimalistic Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/95 border border-white/15 p-6 sm:p-8 shadow-xl">
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className={`w-full rounded-xl bg-slate-950/90 border px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                        errors.fullName ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <input
                      id="institutionName"
                      name="institutionName"
                      type="text"
                      required
                      value={formData.institutionName}
                      onChange={handleChange}
                      placeholder="School / College / Company *"
                      className={`w-full rounded-xl bg-slate-950/90 border px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                        errors.institutionName ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.institutionName && (
                      <p className="text-xs text-rose-400 mt-1">{errors.institutionName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      id="workEmail"
                      name="workEmail"
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className={`w-full rounded-xl bg-slate-950/90 border px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                        errors.workEmail ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-xs text-rose-400 mt-1">{errors.workEmail}</p>
                    )}
                  </div>

                  <div>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone / WhatsApp *"
                      className={`w-full rounded-xl bg-slate-950/90 border px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                        errors.phoneNumber ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-xs text-rose-400 mt-1">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                <div>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    aria-label="Service Interest"
                    className="w-full rounded-xl bg-slate-950/90 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="whatsapp-automation">WhatsApp Automation</option>
                    <option value="instagram-dm-workflows">Instagram DM</option>
                    <option value="white-label-services">White-Label Partnership</option>
                    <option value="admission-campaign-marketing">Paid Advertising</option>
                    <option value="education-seo-digital-growth">SEO &amp; Social Media</option>
                    <option value="full-stack-education-automation">Complete Digital Marketing</option>
                  </select>
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you? *"
                    className={`w-full rounded-xl bg-slate-950/90 border px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                      errors.message ? 'border-rose-500' : 'border-white/15'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-darkBlue disabled:opacity-60 text-white font-display font-semibold text-sm px-6 py-3.5 rounded-xl shadow-glow transition-all"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {apiResponse && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 rounded-xl border p-4 text-xs sm:text-sm ${
                    apiResponse.success
                      ? 'bg-emerald-950/50 border-emerald-400/40 text-emerald-100'
                      : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                  }`}
                >
                  {apiResponse.success ? (
                    <div className="flex items-center gap-2 font-medium text-white">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Thank you! Your message has been sent.</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{apiResponse.error}</span>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
