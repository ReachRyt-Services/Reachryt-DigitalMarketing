import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  CheckCheck,
  ShieldCheck,
  Users,
  GraduationCap,
  Phone,
  Video,
  Smile,
  Mic,
  Camera,
  Image as ImageIcon,
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
    }, 5000);
    return () => clearInterval(timer);
  }, [autoCycle]);

  const handleSelectTab = (tab: HeroEngineTab) => {
    setAutoCycle(false);
    setActiveTab(tab);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center overflow-hidden bg-brand-deepNavy"
    >
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 bg-grid-dark bg-[size:44px_44px] opacity-50 pointer-events-none" />
      <div className="absolute -top-36 -left-36 w-[500px] h-[500px] rounded-full bg-brand-blue/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Simple, Friendly Headline & CTAs */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Friendly Pill */}
            <motion.div
              variants={fadeUpVariant}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15"
            >
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              <span className="text-xs font-display font-semibold uppercase tracking-wider text-blue-300">
                We Build Brands That Buzz
              </span>
            </motion.div>

            {/* Simple, Bold Headline */}
            <motion.h1
              variants={fadeUpVariant}
              className="font-display font-extrabold text-4xl sm:text-5xl xl:text-[3.75rem] leading-[1.08] tracking-tight text-white"
            >
              Turn Every Conversation Into an{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Opportunity.
              </span>
            </motion.h1>

            {/* Easy-to-Read Subtitle */}
            <motion.p
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              We help schools, colleges, and growing brands reply instantly on{' '}
              <strong className="text-white font-semibold">WhatsApp</strong> and{' '}
              <strong className="text-white font-semibold">Instagram</strong>, so you never miss an
              enquiry.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <MagneticButton href="#services" variant="primary">
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton href="#contact" variant="secondary">
                <span>Let&apos;s Talk</span>
              </MagneticButton>
            </motion.div>

            {/* 3 Simple Service Tabs */}
            <motion.div variants={fadeUpVariant} className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => handleSelectTab('whatsapp')}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-300 ${
                    activeTab === 'whatsapp'
                      ? 'bg-emerald-500/15 border-emerald-400/50 shadow-glow-whatsapp'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 mb-1.5" />
                  <div className="font-display font-bold text-sm text-white">WhatsApp Chat</div>
                  <p className="text-xs text-slate-400 mt-0.5">Instant 24/7 replies</p>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectTab('instagram')}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-300 ${
                    activeTab === 'instagram'
                      ? 'bg-pink-500/15 border-pink-400/50 shadow-glow-instagram'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-pink-400 mb-1.5" />
                  <div className="font-display font-bold text-sm text-white">Instagram DM</div>
                  <p className="text-xs text-slate-400 mt-0.5">Auto-reply to comments</p>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectTab('whitelabel')}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-300 ${
                    activeTab === 'whitelabel'
                      ? 'bg-brand-blue/20 border-blue-400/60 shadow-glow'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  }`}
                >
                  <Layers className="w-4 h-4 text-blue-400 mb-1.5" />
                  <div className="font-display font-bold text-sm text-white">White-Label</div>
                  <p className="text-xs text-slate-400 mt-0.5">Your brand, our team</p>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean, Friendly Chat Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="native-chat-sim relative rounded-3xl bg-[#0B141A] border border-white/15 shadow-2xl overflow-hidden">
              {/* Top Tabs */}
              <div className="grid grid-cols-3 border-b border-white/10 bg-[#111B21] text-xs font-medium">
                <button
                  type="button"
                  onClick={() => handleSelectTab('whatsapp')}
                  className={`py-3 px-3 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === 'whatsapp'
                      ? 'border-[#25D366] text-[#25D366] bg-[#25D366]/10'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectTab('instagram')}
                  className={`py-3 px-3 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === 'instagram'
                      ? 'border-[#E1306C] text-[#E1306C] bg-[#E1306C]/10'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectTab('whitelabel')}
                  className={`py-3 px-3 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === 'whitelabel'
                      ? 'border-blue-400 text-blue-300 bg-blue-500/10'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>White-Label</span>
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'whatsapp' && (
                  <motion.div
                    key="hero-whatsapp"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col"
                  >
                    {/* Original WhatsApp Header */}
                    <div className="bg-[#202C33] px-4 py-3 flex items-center justify-between border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#00A884] flex items-center justify-center text-white">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Admissions Helpdesk</div>
                          <div className="text-[11px] text-[#8696A0]">online</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-[#8696A0]">
                        <Video className="w-4 h-4" />
                        <Phone className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Original WhatsApp Doodle Wallpaper Body */}
                    <div className="wa-chat-wallpaper p-4 space-y-3 min-h-[260px] flex flex-col justify-center">
                      <div className="flex justify-start">
                        <div className="max-w-[80%] rounded-lg rounded-tl-none bg-[#202C33] px-3 py-2 text-xs text-[#E9EDEF] shadow">
                          <p>Hi! Are admissions open? Can I get the brochure?</p>
                          <span className="block text-[10px] text-[#8696A0] mt-1 text-right">
                            10:14 AM
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="max-w-[85%] rounded-lg rounded-tr-none bg-[#005C4B] px-3 py-2 text-xs text-[#E9EDEF] shadow">
                          <p className="mb-1.5">
                            Hello! 😊 Yes, admissions are open. Here is our brochure. What would you
                            like to check?
                          </p>
                          <div className="space-y-1 mt-2">
                            {['Course Details', 'Fee Structure', 'Book a Campus Visit'].map(
                              (opt) => (
                                <div
                                  key={opt}
                                  className="px-2.5 py-1.5 rounded bg-[#0b141a]/35 text-center text-[11px] font-medium text-[#53BDEB]"
                                >
                                  {opt}
                                </div>
                              )
                            )}
                          </div>
                          <div className="flex items-center justify-end gap-1 text-[10px] text-[#8696A0] mt-1.5">
                            <span>10:14 AM</span>
                            <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Original WhatsApp Input Bar */}
                    <div className="bg-[#202C33] px-3 py-2 flex items-center gap-2">
                      <div className="flex-1 rounded-full bg-[#2A3942] px-3.5 py-1.5 flex items-center justify-between text-xs text-[#8696A0]">
                        <span className="flex items-center gap-2">
                          <Smile className="w-4 h-4" />
                          <span>Message</span>
                        </span>
                        <Camera className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#00A884] flex items-center justify-center text-white">
                        <Mic className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'instagram' && (
                  <motion.div
                    key="hero-instagram"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col"
                  >
                    {/* Original Instagram DM Header */}
                    <div className="bg-[#000000] px-4 py-3 flex items-center justify-between border-b border-[#262626]">
                      <div className="flex items-center gap-2.5">
                        <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]">
                          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[11px] font-bold text-white">
                            ED
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">campus_official</div>
                          <div className="text-[10px] text-[#A8A8A8]">Active now</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-white">
                        <Phone className="w-4 h-4" />
                        <Video className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Original Instagram DM Background */}
                    <div className="ig-dm-wallpaper p-4 space-y-3 min-h-[260px] flex flex-col justify-center">
                      <div className="flex justify-end">
                        <div className="rounded-2xl rounded-br-sm bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] px-3.5 py-2 text-xs text-white">
                          Interested in admissions!
                        </div>
                      </div>

                      <div className="flex items-end gap-2 justify-start">
                        <div className="w-6 h-6 rounded-full bg-[#262626] flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                          ED
                        </div>
                        <div className="max-w-[82%] rounded-2xl rounded-bl-sm bg-[#262626] p-3 text-xs text-white space-y-2">
                          <p>Hey there! 👋 Tap below to get our brochure or apply online:</p>
                          <div className="space-y-1.5 pt-1">
                            <div className="py-1.5 px-3 rounded-xl bg-[#363636] text-center text-[11px] font-semibold text-white">
                              📥 Download Brochure
                            </div>
                            <div className="py-1.5 px-3 rounded-xl bg-[#363636] text-center text-[11px] font-semibold text-[#0095F6]">
                              🎓 Talk to Admissions
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Original Instagram DM Input Bar */}
                    <div className="bg-[#000000] px-3 py-2.5 border-t border-[#262626]">
                      <div className="rounded-full bg-[#262626] px-3 py-1.5 flex items-center justify-between text-xs text-[#A8A8A8]">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0095F6] flex items-center justify-center text-white">
                            <Camera className="w-3.5 h-3.5" />
                          </span>
                          <span>Message...</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-white">
                          <Mic className="w-4 h-4" />
                          <ImageIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'whitelabel' && (
                  <motion.div
                    key="hero-whitelabel"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 min-h-[348px] bg-[#0B1326] flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="rounded-xl bg-[#13203B] border border-white/10 p-4">
                        <div className="text-xs font-bold text-white mb-1">
                          Your Brand. Our Team.
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          You handle the client relationship. We do all the setup and marketing work
                          under your brand name.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5 items-center text-center">
                        <div className="p-3.5 rounded-xl bg-[#13203B] border border-white/10">
                          <ShieldCheck className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
                          <div className="text-xs font-bold text-white">Your Brand</div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#13203B] border border-white/10">
                          <Users className="w-5 h-5 text-blue-400 mx-auto mb-1.5" />
                          <div className="text-xs font-bold text-white">Our Team</div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#13203B] border border-white/10">
                          <GraduationCap className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                          <div className="text-xs font-bold text-white">Happy Client</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-400">100% private &amp; confidential</span>
                      <a
                        href="#service-whitelabel"
                        className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
