import React from 'react';
import { motion } from 'framer-motion';
import { School, Building2, GraduationCap, BookOpenCheck } from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant, cardRevealVariant } from '../animations/variants';

const SECTORS = [
  {
    title: 'Schools',
    description:
      'Share admission dates, fee details, and book school tours with parents automatically.',
    icon: School,
  },
  {
    title: 'Colleges',
    description:
      'Send course brochures, eligibility details, and connect students with your counsellors.',
    icon: Building2,
  },
  {
    title: 'Universities',
    description:
      'Guide students to the right department and answer admission questions 24/7.',
    icon: GraduationCap,
  },
  {
    title: 'Coaching Centers',
    description:
      'Share batch timings, send demo class links, and follow up with interested learners.',
    icon: BookOpenCheck,
  },
];

export const IndustriesSection: React.FC = () => {
  return (
    <section
      id="industries"
      className="relative py-20 lg:py-24 bg-brand-surface border-t border-white/10 overflow-hidden"
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-blue-300 text-xs font-display font-semibold uppercase tracking-widest mb-3"
          >
            <span>Who We Help</span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Built for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Education.
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
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.title}
                variants={cardRevealVariant}
                className="rounded-2xl bg-slate-900/80 border border-white/10 p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/15 flex items-center justify-center text-blue-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">{sector.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
