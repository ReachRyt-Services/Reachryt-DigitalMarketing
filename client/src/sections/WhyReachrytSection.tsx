import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Cpu,
  Sliders,
  Layers,
  ShieldCheck,
  Zap,
  Globe,
  Megaphone,
  Search,
  Video,
} from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant, cardRevealVariant } from '../animations/variants';

const VALUE_PILLARS = [
  {
    title: 'Education-Focused Solutions',
    description:
      'Designed specifically around student and parent decision journeys, academic calendars, counselling cycles, and institutional communication ethics.',
    icon: GraduationCap,
    accent: 'text-blue-400 bg-blue-500/15 border-blue-400/30',
  },
  {
    title: 'Intelligent Conversational Automation',
    description:
      'Move beyond static web forms. Respond to admission and course enquiries at the exact moment of interest across WhatsApp and Instagram DMs.',
    icon: Cpu,
    accent: 'text-emerald-400 bg-emerald-500/15 border-emerald-400/30',
  },
  {
    title: 'Customised Institutional Workflows',
    description:
      'Every school, college, and university operates differently. We build bespoke conversation paths tailored to your departments, fee tiers, and intake processes.',
    icon: Sliders,
    accent: 'text-cyan-400 bg-cyan-500/15 border-cyan-400/30',
  },
  {
    title: 'Scalable Execution Architecture',
    description:
      'Whether handling daily off-season course questions or high-volume admission season spikes, our automated pipelines respond reliably without bottlenecks.',
    icon: Zap,
    accent: 'text-amber-400 bg-amber-500/15 border-amber-400/30',
  },
  {
    title: 'White-Label Partner Capabilities',
    description:
      'Agencies and growth consultants can offer our complete WhatsApp, Instagram DM, and digital marketing suite under their own brand with strict NDA protection.',
    icon: Layers,
    accent: 'text-indigo-400 bg-indigo-500/15 border-indigo-400/30',
  },
  {
    title: 'Technology-Driven & Transparent Delivery',
    description:
      'Clear scope, structured enquiry routing, account ownership, and responsible digital marketing execution from our team based in Coimbatore.',
    icon: ShieldCheck,
    accent: 'text-pink-400 bg-pink-500/15 border-pink-400/30',
  },
];

const COMPLEMENTARY_CAPABILITIES = [
  {
    label: 'Education SEO & Organic Discovery',
    detail: 'Course & institution search visibility for parents and students.',
    icon: Search,
  },
  {
    label: 'Admission Campaign Marketing & PPC',
    detail: 'Targeted Google & social campaigns aligned with conversion flows.',
    icon: Megaphone,
  },
  {
    label: 'Social Media & Content Strategy',
    detail: 'Campus stories, academic highlights, and engagement calendars.',
    icon: Globe,
  },
  {
    label: 'Campus & Programme Video Storytelling',
    detail: 'Short-form reels and campus showcases engineered to trigger DM flows.',
    icon: Video,
  },
];

export const WhyReachrytSection: React.FC = () => {
  return (
    <section
      id="why-reachryt"
      className="relative py-24 lg:py-32 bg-brand-deepNavy border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mb-16"
        >
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-blue-300 text-xs font-display font-semibold uppercase tracking-widest mb-4"
          >
            <span>06 • Why Reachryt</span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]"
          >
            Engineered for Impact.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Built on Real Capability.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            We combine conversational automation engineering with education-focused digital
            marketing—helping institutions capture, nurture, and convert enquiries while empowering
            partner agencies with reliable white-label delivery.
          </motion.p>
        </motion.div>

        {/* 6 Core Value Proposition Cards */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={cardRevealVariant}
                className="group rounded-2xl bg-slate-900/75 hover:bg-slate-900 border border-white/10 hover:border-blue-400/40 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${pillar.accent}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Complementary Full-Funnel Digital Marketing Capabilities Bar */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-white/15 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-display font-semibold uppercase tracking-wider text-blue-300">
                COMPLETE DIGITAL GROWTH ECOSYSTEM
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                Powered by Automation, Backed by Full-Funnel Education Marketing
              </h3>
            </div>
            <span className="text-xs font-display font-semibold text-slate-400">
              Coimbatore, Tamil Nadu • Serving Institutions &amp; Partners
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPLEMENTARY_CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.label}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2"
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                  <div className="font-display font-semibold text-sm text-white">{cap.label}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{cap.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
