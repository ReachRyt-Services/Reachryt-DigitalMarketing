import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PenTool, Settings, TrendingUp, ArrowRight } from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '../animations/variants';

const STEPS = [
  {
    number: '01',
    title: 'We Listen',
    description: 'Tell us about your institution, courses, and goals.',
    tag: 'Quick 15-min call',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'We Plan',
    description: 'We write simple, friendly chat replies tailored to your brand.',
    tag: 'Custom chat flow',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'We Set Up',
    description: 'We connect WhatsApp and Instagram so replies happen automatically.',
    tag: 'Done for you',
    icon: Settings,
  },
  {
    number: '04',
    title: 'You Grow',
    description: 'Receive ready-to-talk enquiries and grow your admissions.',
    tag: '24/7 live replies',
    icon: TrendingUp,
  },
];

export const HowWeWorkSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STEPS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="how-we-work"
      className="relative py-24 lg:py-28 bg-brand-deepNavy border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-16"
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

        {/* Animated Wave Timeline */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Animated Connecting Beam on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-white/10 -translate-y-1/2 pointer-events-none overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-blue via-cyan-400 to-emerald-400"
              animate={{ width: `${((activeIdx + 1) / STEPS.length) * 100}%` }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeIdx === idx;
              const isOdd = idx % 2 === 1;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`cursor-pointer relative rounded-3xl p-6 transition-all duration-500 ${
                    isOdd ? 'lg:translate-y-8' : 'lg:-translate-y-2'
                  } ${
                    isActive
                      ? 'bg-slate-900/95 border-2 border-brand-blue shadow-glow scale-[1.03]'
                      : 'bg-slate-900/70 border border-white/10 hover:border-white/25'
                  }`}
                >
                  {/* Floating Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      animate={isActive ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                      transition={{ duration: 1.6, repeat: isActive ? Infinity : 0 }}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-brand-blue text-white shadow-glow'
                          : 'bg-brand-blue/15 text-blue-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>

                    <span className="font-display font-extrabold text-2xl text-slate-400/40">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-blue-400">{step.tag}</span>
                    <motion.span
                      animate={isActive ? { x: [0, 4, 0] } : { x: 0 }}
                      transition={{ duration: 1.2, repeat: isActive ? Infinity : 0 }}
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
