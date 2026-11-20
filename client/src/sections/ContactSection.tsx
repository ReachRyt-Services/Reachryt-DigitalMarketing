import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
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
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (formData.institutionName.trim().length < 2) {
      nextErrors.institutionName = 'Please enter your institution or agency name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail.trim())) {
      nextErrors.workEmail = 'Please enter a valid work email address.';
    }
    if (!/^[+\d\s\-()]{7,25}$/.test(formData.phoneNumber.trim())) {
      nextErrors.phoneNumber = 'Please enter a valid contact phone or WhatsApp number.';
    }
    if (formData.message.trim().length < 10) {
      nextErrors.message = 'Please share a brief overview of your requirements (at least 10 characters).';
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
        error:
          'Unable to reach the consultation API server. Please ensure the backend service is running or reach out directly via Email / Phone.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-brand-surface border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-40 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-blue/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Final CTA & Verified Business Contact Information */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                variants={fadeUpVariant}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-blue-300 text-xs font-display font-semibold uppercase tracking-widest"
              >
                <span>Contact Us</span>
              </motion.div>

              <motion.h2
                variants={fadeUpVariant}
                className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]"
              >
                Let&apos;s{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  Talk.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUpVariant}
                className="text-slate-300 text-sm sm:text-base leading-relaxed"
              >
                Have a question or want to get started? Reach out to us anytime.
              </motion.p>
            </div>

            {/* Direct Action Buttons: WhatsApp CTA & Email CTA */}
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-3">
              <a
                href={BRAND_CONFIG.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5a] text-slate-950 font-display font-bold text-xs sm:text-sm shadow-glow-whatsapp transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={BRAND_CONFIG.contact.emailHref}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-display font-semibold text-xs sm:text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Email Us Directly</span>
              </a>
            </motion.div>

            {/* Verified Contact Details Card */}
            <motion.div
              variants={fadeUpVariant}
              className="rounded-2xl bg-slate-900/90 border border-white/10 p-6 space-y-4"
            >
              <div className="text-xs font-display font-semibold uppercase tracking-wider text-blue-300">
                Verified Contact Details
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <a
                  href={BRAND_CONFIG.contact.emailHref}
                  className="flex items-start gap-3 text-slate-200 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-display font-semibold text-slate-400">EMAIL</div>
                    <div className="font-medium">{BRAND_CONFIG.contact.email}</div>
                  </div>
                </a>

                <a
                  href={BRAND_CONFIG.contact.phoneHref}
                  className="flex items-start gap-3 text-slate-200 hover:text-blue-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-display font-semibold text-slate-400">PHONE / WHATSAPP</div>
                    <div className="font-medium">{BRAND_CONFIG.contact.phoneDisplay}</div>
                  </div>
                </a>

                <a
                  href={BRAND_CONFIG.contact.googleMapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-200 hover:text-blue-300 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-display font-semibold text-slate-400">OFFICE LOCATION</div>
                    <div className="font-medium">{BRAND_CONFIG.contact.addressFull}</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-slate-300 pt-2 border-t border-white/10">
                  <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-xs">
                    <div className="text-[11px] font-display font-semibold text-slate-400">OFFICE HOURS</div>
                    <div>{BRAND_CONFIG.contact.officeHours.weekdays}</div>
                    <div>{BRAND_CONFIG.contact.officeHours.saturday}</div>
                    <div className="text-slate-400">{BRAND_CONFIG.contact.officeHours.sunday}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Consultation & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/95 border border-white/15 p-6 sm:p-10 shadow-2xl">
              <div className="pb-6 mb-6 border-b border-white/10">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Book a Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Share your requirements and our team will reach out shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Column A: Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium text-slate-200 mb-1.5"
                    >
                      Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g., Dr. Karthik Sundaram"
                      className={`w-full rounded-xl bg-slate-950/90 border px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                        errors.fullName ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Column B: Institution or Agency Name */}
                  <div>
                    <label
                      htmlFor="institutionName"
                      className="block text-xs font-medium text-slate-200 mb-1.5"
                    >
                      Institution or Agency Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="institutionName"
                      name="institutionName"
                      type="text"
                      required
                      value={formData.institutionName}
                      onChange={handleChange}
                      placeholder="Your School, College, or Agency"
                      className={`w-full rounded-xl bg-slate-950/90 border px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                        errors.institutionName ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.institutionName && (
                      <p className="text-xs text-rose-400 mt-1">{errors.institutionName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Column C: Work Email Address */}
                  <div>
                    <label
                      htmlFor="workEmail"
                      className="block text-xs font-medium text-slate-200 mb-1.5"
                    >
                      Work Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="workEmail"
                      name="workEmail"
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="you@institution.edu"
                      className={`w-full rounded-xl bg-slate-950/90 border px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                        errors.workEmail ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-xs text-rose-400 mt-1">{errors.workEmail}</p>
                    )}
                  </div>

                  {/* Column D: Phone / WhatsApp Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs font-medium text-slate-200 mb-1.5"
                    >
                      Phone / WhatsApp Number <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 90000 00000"
                      className={`w-full rounded-xl bg-slate-950/90 border px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                        errors.phoneNumber ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-xs text-rose-400 mt-1">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Column E: Organisation Type */}
                  <div>
                    <label
                      htmlFor="institutionType"
                      className="block text-xs font-medium text-slate-200 mb-1.5"
                    >
                      Organisation Type <span className="text-blue-400">*</span>
                    </label>
                    <select
                      id="institutionType"
                      name="institutionType"
                      value={formData.institutionType}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-slate-950/90 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      <option value="school">School (Primary / Secondary / K-12)</option>
                      <option value="college">College (Arts / Science / Engineering / Management)</option>
                      <option value="university">University / Higher Education Institution</option>
                      <option value="coaching-training">Coaching / Training Institution</option>
                      <option value="educational-organization">Educational Organization / Trust</option>
                      <option value="agency-partner">Digital Agency (White-Label Partnership)</option>
                    </select>
                  </div>

                  {/* Column F: Primary Service Interest */}
                  <div>
                    <label
                      htmlFor="serviceInterest"
                      className="block text-xs font-medium text-slate-200 mb-1.5"
                    >
                      Primary Service Interest <span className="text-blue-400">*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
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
                </div>

                {/* Column G: Tell Us */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-200 mb-1.5"
                  >
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`w-full rounded-xl bg-slate-950/90 border px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                      errors.message ? 'border-rose-500' : 'border-white/15'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-darkBlue disabled:opacity-60 text-white font-display font-semibold text-sm px-7 py-3.5 rounded-full shadow-glow transition-all"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Transparent Backend & Google Sheets Integration Status Response */}
              {apiResponse && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 rounded-2xl border p-5 text-xs sm:text-sm ${
                    apiResponse.success
                      ? apiResponse.synced
                        ? 'bg-emerald-950/50 border-emerald-400/40 text-emerald-100'
                        : 'bg-blue-950/50 border-blue-400/40 text-blue-100'
                      : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                  }`}
                >
                  {apiResponse.success ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-display font-bold text-white">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          <span>Consultation Request Received</span>
                        </div>
                        <span className="font-display font-semibold text-xs px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-200">
                          Ref: {apiResponse.submissionId}
                        </span>
                      </div>

                      <p className="text-slate-300 leading-relaxed">
                        Thank you for reaching out. Our team has received your consultation details and will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white">Submission Error</div>
                        <p className="mt-0.5">{apiResponse.error}</p>
                      </div>
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
