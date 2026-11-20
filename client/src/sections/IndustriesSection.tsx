import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  School,
  Building2,
  GraduationCap,
  BookOpenCheck,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '../animations/variants';

const SECTORS = [
  {
    id: 'schools',
    title: 'Schools',
    subtitle: 'CBSE, ICSE & Matriculation',
    description:
      'Share admission dates, fee details, and book school tours with parents automatically.',
    highlights: ['Parent enquiry replies', 'Digital school brochure', 'Saturday campus visits'],
    sampleChat: '"Hi! What is the admission age and fee for Grade 1?" → Answered instantly!',
    icon: School,
  },
  {
    id: 'colleges',
    title: 'Colleges',
    subtitle: 'Engineering, Arts & Management',
    description:
      'Send course brochures, eligibility details, and connect students with your counsellors.',
    highlights: ['Department brochures', 'Course eligibility check', 'Counsellor call booking'],
    sampleChat: '"Can I get the B.E. CSE brochure & hostel fee?" → PDF sent in 1 second!',
    icon: Building2,
  },
  {
    id: 'universities',
    title: 'Universities',
    subtitle: 'Multi-Faculty Campuses',
    description:
      'Guide students to the right department and answer admission questions 24/7.',
    highlights: ['Multi-course guidance', 'Scholarship info', '24/7 admission helpdesk'],
    sampleChat: '"Are MBA applications still open?" → Application link sent right away!',
    icon: GraduationCap,
  },
  {
    id: 'coaching',
    title: 'Coaching Centers',
    subtitle: 'Test-Prep & Skill Academies',
    description:
      'Share batch timings, send demo class links, and follow up with interested learners.',
    highlights: ['Free demo class links', 'Weekend batch timings', 'Auto class reminders'],
    sampleChat: '"When does the next batch start?" → Batch schedule & demo link shared!',
    icon: BookOpenCheck,
  },
];

export const IndustriesSection: React.FC = () => {
  const [activeId, setActiveId] = useState('schools');
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveId((prev) => {
        const idx = SECTORS.findIndex((s) => s.id === prev);
        return SECTORS[(idx + 1) % SECTORS.length].id;
      });
    }, 3600);
    return () => clearInterval(timer);
  }, [paused]);

  const activeSector = SECTORS.find((s) => s.id === activeId) || SECTORS[0];
  const ActiveIcon = activeSector.icon;

  return (
    <section
      id="industries"
      className="relative py-24 lg:py-28 bg-brand-surface border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left Column: Title + Interactive Sliding Pill Selector */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
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
            </div>

            <div className="space-y-2.5">
              {SECTORS.map((sector) => {
                const Icon = sector.icon;
                const isSelected = sector.id === activeId;
                return (
                  <button
                    key={sector.id}
                    type="button"
                    onClick={() => setActiveId(sector.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? 'bg-slate-900/95 border-brand-blue shadow-glow translate-x-2'
                        : 'bg-slate-900/60 border-white/10 hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-brand-blue text-white'
                            : 'bg-brand-blue/15 text-blue-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-base text-white">
                          {sector.title}
                        </div>
                        <div className="text-xs text-slate-400">{sector.subtitle}</div>
                      </div>
                    </div>

                    <div
                      className={`w-2 h-2 rounded-full transition-all ${
                        isSelected ? 'bg-brand-blue scale-125' : 'bg-slate-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Animated Spotlight Stage */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector.id}
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.97 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative rounded-3xl bg-slate-900/90 border border-white/15 p-7 sm:p-10 shadow-2xl overflow-hidden"
              >
                {/* Floating Background Icon Watermark */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-6 -top-6 w-36 h-36 rounded-full bg-brand-blue/10 flex items-center justify-center pointer-events-none"
                >
                  <ActiveIcon className="w-16 h-16 text-blue-400/25" />
                </motion.div>

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-blue/15 text-blue-300 text-xs font-display font-semibold">
                    <ActiveIcon className="w-4 h-4" />
                    <span>{activeSector.subtitle}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
                      {activeSector.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                      {activeSector.description}
                    </p>
                  </div>

                  {/* Animated Staggered Highlight Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeSector.highlights.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.1 }}
                        className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Live Example Banner */}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="rounded-2xl bg-emerald-950/30 border border-emerald-500/30 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{activeSector.sampleChat}</span>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-display font-bold text-blue-400 hover:text-blue-300 shrink-0"
                    >
                      <span>Get Started</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
