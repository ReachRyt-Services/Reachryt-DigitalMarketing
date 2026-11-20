import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PenTool, Settings, TrendingUp } from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant, cardRevealVariant } from '../animations/variants';

const STEPS = [
  {
    number: '01',
    title: 'We Listen',
    description: 'Tell us about your institution, courses, and goals.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'We Plan',
    description: 'We write simple, friendly chat replies tailored to your brand.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'We Set Up',
    description: 'We connect WhatsApp and Instagram so replies happen automatically.',
    icon: Settings,
  },
  {
    number: '04',
    title: 'You Grow',
    description: 'Receive ready-to-talk enquiries and grow your admissions.',
    icon: TrendingUp,
  },
];

export const HowWeWorkSection: React.FC = () => {
  return (
    <section
      id="how-we-work"
      className="relative py-20 lg:py-24 bg-brand-deepNavy border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mb-12"
        >
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-blue-300 text-xs font-display font-semibold uppercase tracking-widest mb-3"
          >
            <span>How We Work</span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Getting Started is{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Easy.
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={cardRevealVariant}
                className="rounded-2xl bg-slate-900/80 border border-white/10 p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold px-2.5 py-1 rounded-lg bg-brand-blue/15 text-blue-300">
                    {step.number}
                  </span>
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
