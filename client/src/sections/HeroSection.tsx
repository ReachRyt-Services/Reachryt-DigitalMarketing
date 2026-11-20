import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  CheckCheck,
  Send,
  Zap,
  ShieldCheck,
  GitBranch,
  GraduationCap,
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { fadeUpVariant, staggerContainerVariant } from '../animations/variants';

type HeroEngineTab = 'whatsapp' | 'instagram' | 'whitelabel';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HeroEngineTab>('whatsapp');
  const [autoCycle, setAutoCycle] = useState(true);

  useEffect(() => {
    if (!autoCycle) return;
    const timer = setInterval(() => {
      setActiveTab((prev) =>
        prev === 'whatsapp' ? 'instagram' : prev === 'instagram' ? 'whitelabel' : 'whatsapp'
      );
    }, 5200);
    return () => clearInterval(timer);
  }, [autoCycle]);

  const handleSelectTab = (tab: HeroEngineTab) => {
    setAutoCycle(false);
    setActiveTab(tab);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-between overflow-hidden bg-brand-deepNavy"
    >
      {/* Layered Ambient Background & Technical Grid */}
      <div className="absolute inset-0 bg-grid-dark bg-[size:44px_44px] opacity-60 pointer-events-none" />
      <div className="absolute -top-36 -left-36 w-[520px] h-[520px] rounded-full bg-brand-blue/20 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/4 -right-32 w-[460px] h-[460px] rounded-full bg-cyan-500/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[540px] h-[340px] rounded-full bg-indigo-600/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: High-Impact Headline, Value Proposition, and CTAs */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Education & Automation Eyebrow Pill */}
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              <span className="text-xs font-display font-semibold uppercase tracking-wider text-blue-200 font-medium">
                Digital Marketing &amp; Automation Engine for Education
              </span>
            </motion.div>

            {/* Expressive Display Headline */}
            <motion.h1
              variants={fadeUpVariant}
              className="font-display font-extrabold text-4xl sm:text-5xl xl:text-[3.85rem] leading-[1.06] tracking-tight text-white"
            >
              Turn Every Conversation Into an{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Opportunity.
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Smart <strong className="text-white font-semibold">WhatsApp automation</strong>,{' '}
              <strong className="text-white font-semibold">Instagram DM workflows</strong>, and{' '}
              <strong className="text-white font-semibold">white-label digital solutions</strong>{' '}
              engineered to help schools, colleges, universities, and training institutions grow,
              engage, and convert admission enquiries seamlessly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton href="#services" variant="primary">
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton href="#contact" variant="secondary">
                <span>Let&apos;s Talk</span>
              </MagneticButton>
            </motion.div>

            {/* First-Screen Core Service Dominance Pills (Immediate Clarity) */}
            <motion.div variants={fadeUpVariant} className="pt-4">
              <div className="text-[11px] font-display font-semibold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <span>Core Capabilities — Click to preview or scroll to deep-dive</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Pill 01: WhatsApp Automation */}
                <button
                  type="button"
                  onClick={() => handleSelectTab('whatsapp')}
                  className={`group text-left p-3.5 rounded-2xl border transition-all duration-300 ${
                    activeTab === 'whatsapp'
                      ? 'bg-emerald-500/15 border-emerald-400/50 shadow-glow-whatsapp'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-display font-semibold text-emerald-400 font-semibold">01 / CORE</span>
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="font-display font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                    WhatsApp Automation
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                    Instant admission &amp; parent enquiry flows
                  </p>
                </button>

                {/* Pill 02: Instagram DM Workflows */}
                <button
                  type="button"
                  onClick={() => handleSelectTab('instagram')}
                  className={`group text-left p-3.5 rounded-2xl border transition-all duration-300 ${
                    activeTab === 'instagram'
                      ? 'bg-pink-500/15 border-pink-400/50 shadow-glow-instagram'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-display font-semibold text-pink-400 font-semibold">02 / CORE</span>
                    <Sparkles className="w-4 h-4 text-pink-400" />
                  </div>
                  <div className="font-display font-bold text-sm text-white group-hover:text-pink-300 transition-colors">
                    Instagram DM Workflows
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                    Comment-to-DM &amp; keyword lead capture
                  </p>
                </button>

                {/* Pill 03: White-Label Services */}
                <button
                  type="button"
                  onClick={() => handleSelectTab('whitelabel')}
                  className={`group text-left p-3.5 rounded-2xl border transition-all duration-300 ${
                    activeTab === 'whitelabel'
                      ? 'bg-brand-blue/20 border-blue-400/60 shadow-glow'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-display font-semibold text-blue-400 font-semibold">03 / CORE</span>
                    <Layers className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="font-display font-bold text-sm text-white group-hover:text-blue-300 transition-colors">
                    White-Label Services
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                    Your Brand, Our Execution Engine
                  </p>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Live Multi-Engine Command Hub */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-slate-900/80 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-hidden">
              {/* Top Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-950/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs font-display font-semibold text-slate-300">
                    reachryt://automation-hub
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-display font-semibold text-emerald-400">LIVE SIMULATOR</span>
                </div>
              </div>

              {/* Engine Switcher Tabs inside Hub */}
              <div className="grid grid-cols-3 border-b border-white/10 bg-slate-950/40 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => handleSelectTab('whatsapp')}
                  className={`py-2.5 px-3 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === 'whatsapp'
                      ? 'border-emerald-400 text-emerald-300 bg-emerald-500/10'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectTab('instagram')}
                  className={`py-2.5 px-3 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === 'instagram'
                      ? 'border-pink-400 text-pink-300 bg-pink-500/10'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instagram DM</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectTab('whitelabel')}
                  className={`py-2.5 px-3 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === 'whitelabel'
                      ? 'border-blue-400 text-blue-300 bg-blue-500/10'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>White-Label</span>
                </button>
              </div>

              {/* Dynamic Preview Canvas */}
              <div className="p-5 min-h-[360px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === 'whatsapp' && (
                    <motion.div
                      key="hero-whatsapp"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3.5"
                    >
                      <div className="flex items-center justify-between bg-emerald-950/60 border border-emerald-500/30 rounded-xl px-3.5 py-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">
                              Admissions Desk • Automated Flow
                            </div>
                            <div className="text-[11px] text-emerald-400">
                              Instant Enquiry &amp; Qualification Bot
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-display font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                          ACTIVE
                        </span>
                      </div>

                      {/* Incoming Student Message */}
                      <div className="flex justify-start">
                        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 border border-white/10 px-3.5 py-2.5 text-xs text-slate-100">
                          <p>
                            Hi! Are admissions open for the upcoming academic intake? Can I get the
                            fee structure &amp; syllabus brochure?
                          </p>
                          <span className="block text-[10px] text-slate-400 mt-1 text-right">
                            10:14 AM
                          </span>
                        </div>
                      </div>

                      {/* Automated Trigger Tag */}
                      <div className="flex items-center gap-2 text-[11px] font-display font-semibold text-emerald-400 pl-2">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Intent detected: Admission Enquiry → Sending brochure + qualification prompt</span>
                      </div>

                      {/* Outgoing Automated WhatsApp Reply */}
                      <div className="flex justify-end">
                        <div className="max-w-[88%] rounded-2xl rounded-tr-sm bg-emerald-600/25 border border-emerald-400/35 px-3.5 py-2.5 text-xs text-emerald-50">
                          <p className="font-medium text-white mb-1">
                            Welcome! Admissions are currently open. Here is the digital programme
                            brochure. Which stream are you enquiring for?
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-[11px] text-emerald-200">
                              1. Undergraduate
                            </span>
                            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-[11px] text-emerald-200">
                              2. Postgraduate
                            </span>
                            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-[11px] text-emerald-200">
                              3. Book Campus Visit
                            </span>
                          </div>
                          <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-300 mt-1.5">
                            <span>10:14 AM</span>
                            <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'instagram' && (
                    <motion.div
                      key="hero-instagram"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3.5"
                    >
                      {/* Post Comment Trigger Card */}
                      <div className="rounded-xl bg-gradient-to-r from-purple-950/70 via-pink-950/60 to-orange-950/50 border border-pink-500/30 p-3">
                        <div className="flex items-center justify-between text-[11px] text-pink-300 font-display font-semibold mb-1">
                          <span>INSTAGRAM POST COMMENT TRIGGER</span>
                          <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-200">
                            KEYWORD: &quot;ADMISSION&quot;
                          </span>
                        </div>
                        <p className="text-xs text-white">
                          <span className="font-semibold text-pink-300">@prospective_student:</span>{' '}
                          &quot;Interested! Commenting <strong>ADMISSION</strong> for details!&quot;
                        </p>
                      </div>

                      {/* Workflow Bridge Arrow */}
                      <div className="flex items-center gap-2 text-[11px] font-display font-semibold text-pink-400 pl-2">
                        <Send className="w-3.5 h-3.5" />
                        <span>Comment-to-DM Workflow Triggered Instantly</span>
                      </div>

                      {/* Automated Instagram DM Bubble */}
                      <div className="rounded-2xl bg-slate-800/90 border border-pink-400/30 p-3.5 space-y-2.5">
                        <div className="text-xs text-slate-100 leading-relaxed">
                          Hey there! 👋 Thanks for commenting on our post. Tap below to receive the
                          application guide or schedule a counselling call right inside Instagram DM:
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-center py-2 px-2.5 rounded-xl bg-gradient-to-r from-pink-500/25 to-purple-500/25 border border-pink-400/40 text-[11px] font-semibold text-white">
                            📥 Download Prospectus
                          </div>
                          <div className="text-center py-2 px-2.5 rounded-xl bg-white/5 border border-white/15 text-[11px] font-semibold text-slate-200">
                            🎓 Talk to Admissions
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'whitelabel' && (
                    <motion.div
                      key="hero-whitelabel"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="rounded-xl bg-blue-950/60 border border-blue-400/30 p-3.5">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-display font-semibold text-blue-300 uppercase">
                            WHITE-LABEL ARCHITECTURE
                          </span>
                          <span className="text-[10px] font-display font-semibold px-2 py-0.5 rounded bg-brand-blue/30 text-blue-200">
                            YOUR BRAND, OUR ENGINE
                          </span>
                        </div>
                        <p className="text-xs text-slate-200">
                          You own the client relationship and brand identity. Reachryt powers the
                          automation workflows, campaign engineering, and execution behind the scenes.
                        </p>
                      </div>

                      {/* 3-Node Visual Pipeline */}
                      <div className="grid grid-cols-3 gap-2 items-center text-center">
                        <div className="p-3 rounded-xl bg-slate-800/80 border border-white/15">
                          <ShieldCheck className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                          <div className="text-xs font-bold text-white">Partner Agency</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">100% Your Branding</div>
                        </div>

                        <div className="p-3 rounded-xl bg-brand-blue/25 border border-blue-400/50 shadow-glow">
                          <GitBranch className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                          <div className="text-xs font-bold text-white">Reachryt Engine</div>
                          <div className="text-[10px] text-blue-200 mt-0.5">Invisible Execution</div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-800/80 border border-white/15">
                          <GraduationCap className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                          <div className="text-xs font-bold text-white">End Client</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">Seamless Delivery</div>
                        </div>
                      </div>

                      <div className="rounded-xl bg-white/[0.03] border border-white/10 px-3.5 py-2.5 flex items-center justify-between text-xs">
                        <span className="text-slate-300">Custom Workflows • Dedicated Delivery</span>
                        <span className="font-display font-semibold text-blue-400 font-semibold">NDA Protected</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Action Footer inside Simulator */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    Scroll down to test full interactive simulators
                  </span>
                  <a
                    href={
                      activeTab === 'whatsapp'
                        ? '#service-whatsapp'
                        : activeTab === 'instagram'
                        ? '#service-instagram'
                        : '#service-whitelabel'
                    }
                    className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Open Full Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom First-Scroll Anchor Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-blue" />
          <span>Built exclusively for Schools, Colleges, Universities, Coaching Institutions &amp; Agency Partners</span>
        </div>
        <a
          href="#services"
          className="inline-flex items-center gap-2 text-white hover:text-blue-400 font-display font-semibold uppercase tracking-wider transition-colors"
        >
          <span>First Scroll: Interactive Service Showcases</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-90" />
        </a>
      </div>
    </section>
  );
};
