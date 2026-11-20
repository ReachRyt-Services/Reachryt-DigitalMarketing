import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, PenTool, Megaphone } from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant, cardRevealVariant } from '../animations/variants';

const MARKETING_SERVICES = [
  {
    title: 'Social Media Marketing',
    description: 'Build an active community and drive real conversations across social platforms.',
    icon: Globe,
    accent: 'text-blue-400 bg-blue-500/15 border-blue-400/30',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your Google rankings so students and parents find you first.',
    icon: Search,
    accent: 'text-emerald-400 bg-emerald-500/15 border-emerald-400/30',
  },
  {
    title: 'Content Strategy',
    description: 'Creative stories, posts, and videos that connect with your audience.',
    icon: PenTool,
    accent: 'text-cyan-400 bg-cyan-500/15 border-cyan-400/30',
  },
  {
    title: 'Paid Advertising',
    description: 'Targeted Google and social media ads that bring quality enquiries.',
    icon: Megaphone,
    accent: 'text-pink-400 bg-pink-500/15 border-pink-400/30',
  },
];

export const WhyReachrytSection: React.FC = () => {
  return (
    <section
      id="why-reachryt"
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
            <span>Digital Marketing</span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            We Build Brands{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              That Buzz.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-3 text-base text-slate-300"
          >
            Creative digital marketing solutions to help you stand out and grow.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {MARKETING_SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardRevealVariant}
                className="rounded-2xl bg-slate-900/75 border border-white/10 p-6 space-y-3"
              >
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.accent}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
