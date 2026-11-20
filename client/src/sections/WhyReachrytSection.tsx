import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, PenTool, Megaphone, Sparkles, TrendingUp, Heart } from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '../animations/variants';

const MARQUEE_TAGS = [
  'WhatsApp Automation',
  'Instagram DM',
  'Social Media Marketing',
  'SEO Optimization',
  'Content Strategy',
  'Paid Advertising',
  'White-Label Partner',
  'Campus Branding',
];

export const WhyReachrytSection: React.FC = () => {
  return (
    <section
      id="why-reachryt"
      className="relative py-24 lg:py-28 bg-brand-deepNavy border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
        >
          <div>
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
          </div>
          <motion.p
            variants={fadeUpVariant}
            className="text-sm sm:text-base text-slate-300 max-w-sm"
          >
            Creative digital marketing solutions to help you stand out and grow.
          </motion.p>
        </motion.div>

        {/* Asymmetric 12-Column Bento Grid with Live Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          {/* Bento Card 1 (7 Cols): Social Media Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-blue-400/50 p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden relative"
          >
            <div className="space-y-3 max-w-md">
              <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Social Media Marketing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Build an active community and drive real conversations across social platforms.
              </p>
            </div>

            {/* Animated Floating Engagement Badges */}
            <div className="flex flex-col gap-2.5 shrink-0 w-full sm:w-auto">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5 text-xs font-semibold text-white"
              >
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                <span>Engaged Community</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                className="px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5 text-xs font-semibold text-blue-300"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Daily Brand Stories</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bento Card 2 (5 Cols): SEO Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-emerald-400/50 p-7 sm:p-8 flex flex-col justify-between gap-5 overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <Search className="w-5 h-5" />
                </div>
                {/* Animated Search Bar Pill */}
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-display font-bold flex items-center gap-1.5"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Top Google Visibility</span>
                </motion.div>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                SEO Optimization
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Improve your Google rankings so students and parents find you first.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 3 (5 Cols): Content Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 p-7 sm:p-8 flex flex-col justify-between gap-5"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <PenTool className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Content Strategy
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Creative stories, reels, and videos that connect with your audience.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Reels & Shorts', 'Campus Stories', 'Creative Posts'].map((t, i) => (
                <motion.span
                  key={t}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                  className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-200"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 4 (7 Cols): Paid Advertising */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-pink-400/50 p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="space-y-3 max-w-md">
              <div className="w-11 h-11 rounded-2xl bg-pink-500/15 border border-pink-400/30 flex items-center justify-center text-pink-400">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Paid Advertising
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Targeted Google and social media ads that bring quality enquiries.
              </p>
            </div>

            {/* Animated Bars */}
            <div className="flex items-end gap-2 h-20 px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0">
              {[40, 65, 55, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: '20%' }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.12,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 1.5,
                  }}
                  className="w-3 rounded-t-md bg-gradient-to-t from-brand-blue to-cyan-400"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Continuous Smooth Marquee Strip */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-900/70 border border-white/10 py-3.5">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 whitespace-nowrap w-max"
          >
            {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, idx) => (
              <span
                key={`${tag}-${idx}`}
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-display font-semibold text-slate-300"
              >
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                <span>{tag}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
