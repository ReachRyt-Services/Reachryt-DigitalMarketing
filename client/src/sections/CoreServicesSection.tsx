import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Sparkles,
  Layers,
  CheckCheck,
  Play,
  RotateCcw,
  Send,
  Zap,
  Bot,
  UserCheck,
  Calendar,
  FileText,
  ArrowRight,
  GitMerge,
  Shield,
  Sliders,
  Cpu,
  Building2,
  GraduationCap,
  Heart,
  MessageCircle,
  Bookmark,
} from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '../animations/variants';

/* -------------------------------------------------------------------------- */
/* SERVICE 01: INTERACTIVE WHATSAPP AUTOMATION SIMULATOR                      */
/* -------------------------------------------------------------------------- */
interface WhatsAppScenario {
  id: string;
  label: string;
  triggerText: string;
  studentMessage: string;
  workflowNode: string;
  botResponse: string;
  quickReplies: string[];
  followUpAction: string;
}

const WHATSAPP_SCENARIOS: WhatsAppScenario[] = [
  {
    id: 'admission',
    label: 'Admission Enquiry',
    triggerText: 'Prospective Student Enquires About Admissions',
    studentMessage:
      'Hello! I want to check admission eligibility and application deadlines for the upcoming academic year.',
    workflowNode: 'Admission Enquiry Router → Programme Selection + Instant Prospectus PDF',
    botResponse:
      'Welcome to the Admissions Desk! 🎓 Admissions for the upcoming session are open. I have attached our complete Programme & Eligibility Guide PDF. Please choose your desired stream below so we can guide you further:',
    quickReplies: ['Undergraduate Programmes', 'Postgraduate Programmes', 'Request Counsellor Call'],
    followUpAction: 'Lead automatically tagged as [High-Intent Admission] & assigned to counsellor queue.',
  },
  {
    id: 'fees',
    label: 'Fee & Scholarship FAQ',
    triggerText: 'Parent Requests Fee Structure & Scholarship Info',
    studentMessage:
      'Good morning, could you share the semester fee breakdown, hostel availability, and merit scholarship criteria?',
    workflowNode: 'FAQ Knowledge Engine → Instant Structured Response + Fee Calculator Link',
    botResponse:
      'Good morning! Here is the official fee structure and hostel information sheet. We also offer merit-based scholarships based on qualifying exam scores. Would you like to check scholarship eligibility right now?',
    quickReplies: ['Check Scholarship Eligibility', 'Hostel & Transport Details', 'Download Fee Structure'],
    followUpAction: 'Automated 24-hour reminder scheduled if parent does not complete the eligibility step.',
  },
  {
    id: 'campus-tour',
    label: 'Campus Visit & Follow-Up',
    triggerText: 'Student Schedules a Campus Visit & Counselling Slot',
    studentMessage:
      'Can my parents and I visit the campus this Saturday to tour the labs and meet the faculty?',
    workflowNode: 'Calendar Booking Workflow → Slot Confirmation + Automated Directions Reminder',
    botResponse:
      'We would love to host you and your parents! 🏛️ Select a preferred Saturday slot below, and you will immediately receive a visitor pass along with Google Maps directions.',
    quickReplies: ['Saturday • 10:30 AM Slot', 'Saturday • 02:00 PM Slot', 'Reschedule for Next Week'],
    followUpAction: 'Instant confirmation + automated WhatsApp reminder queued 2 hours prior to visit.',
  },
];

/* -------------------------------------------------------------------------- */
/* SERVICE 02: INTERACTIVE INSTAGRAM DM WORKFLOW SIMULATOR                    */
/* -------------------------------------------------------------------------- */
interface InstagramScenario {
  id: string;
  keyword: string;
  postCaption: string;
  commentText: string;
  publicAutoReply: string;
  dmGreeting: string;
  dmCtaButtons: string[];
  leadCaptureStep: string;
}

const INSTAGRAM_SCENARIOS: InstagramScenario[] = [
  {
    id: 'comment-admission',
    keyword: 'ADMISSION',
    postCaption: 'Admissions Open for the New Academic Session! Comment "ADMISSION" below and we will DM you the complete guide & application link instantly. 🎓✨',
    commentText: 'ADMISSION — please send the brochure and deadline details!',
    publicAutoReply: 'Sent! Check your Instagram DMs for the official admission guide & registration link. 🚀',
    dmGreeting:
      'Hey! 👋 Thanks for commenting "ADMISSION" on our post. Here is your direct access to our Admissions Portal and course guide. Tap an option below to proceed:',
    dmCtaButtons: ['📘 View Course Brochure', '📝 Start Online Application', '💬 Chat with Admissions'],
    leadCaptureStep: 'Captures student name, preferred stream & contact number directly inside Instagram DM.',
  },
  {
    id: 'story-syllabus',
    keyword: 'SYLLABUS',
    postCaption: 'Curious about our updated curriculum and industry-aligned modules? Comment "SYLLABUS" to get the curriculum breakdown in your inbox! 📚',
    commentText: 'SYLLABUS please!',
    publicAutoReply: 'Just dropped the full curriculum breakdown in your DMs! 📩',
    dmGreeting:
      'Hello! Here is the detailed module-by-module syllabus you requested. Which department curriculum would you like to explore first?',
    dmCtaButtons: ['💻 Technology & Computing', '📊 Management & Commerce', '🔬 Science & Research'],
    leadCaptureStep: 'Qualifies academic interest and enrolls student in an automated engagement sequence.',
  },
  {
    id: 'reel-campus',
    keyword: 'VISIT',
    postCaption: 'Experience our campus life, laboratories, and learning spaces first-hand. Comment "VISIT" to book an exclusive guided campus walk! 🏛️',
    commentText: 'VISIT this weekend!',
    publicAutoReply: 'Awesome! Check your DM to pick your campus tour time slot. 🙌',
    dmGreeting:
      'Welcome! We are excited to show you around campus. Tap below to reserve your guided campus visit pass in 15 seconds:',
    dmCtaButtons: ['🗓️ Book Saturday Morning', '🗓️ Book Saturday Afternoon', '📍 Get Campus Location'],
    leadCaptureStep: 'Syncs visitor details directly to the institution enquiry sheet.',
  },
];

/* -------------------------------------------------------------------------- */
/* SERVICE 03: WHITE-LABEL ARCHITECTURE MODES                                 */
/* -------------------------------------------------------------------------- */
interface WhiteLabelPillar {
  id: string;
  title: string;
  partnerSide: string;
  engineCore: string;
  clientOutcome: string;
  deliverables: string[];
}

const WHITELABEL_PILLARS: WhiteLabelPillar[] = [
  {
    id: 'automation-delivery',
    title: 'White-Label WhatsApp & Instagram Automation',
    partnerSide: 'Your Agency Brand & Client Discovery',
    engineCore: 'Reachryt Conversation Architecture, Flow Engineering & Webhook Setup',
    clientOutcome: 'Client experiences seamless automation branded 100% under your agency.',
    deliverables: [
      'Custom conversational flow blueprints under your brand guidelines',
      'End-to-end technical setup, keyword triggers & enquiry routing',
      'Zero Reachryt branding on any client-facing dashboard or asset',
    ],
  },
  {
    id: 'campaign-execution',
    title: 'White-Label Education Performance & SEO Delivery',
    partnerSide: 'Your Client Account Management & Strategy Calls',
    engineCore: 'Reachryt Search, Social, Landing Page & Admission Campaign Execution',
    clientOutcome: 'Scalable campaign fulfilment without expanding your internal payroll.',
    deliverables: [
      'Admission campaign landing pages & conversion optimization',
      'Education SEO, Google Ads & paid social campaign management',
      'Unbranded or partner-branded reporting decks ready for client presentation',
    ],
  },
  {
    id: 'custom-workflows',
    title: 'Custom Agency Partner Workflows & Multi-Account Scale',
    partnerSide: 'Your Growth Roadmap & Multi-Client Retainers',
    engineCore: 'Dedicated Reachryt Execution Pods & Standardized QA Pipelines',
    clientOutcome: 'Onboard multiple institutions simultaneously with reliable delivery.',
    deliverables: [
      'Strict NDA protection and behind-the-scenes execution guarantee',
      'Modular workflow templates adaptable across schools, colleges & academies',
      'Dedicated technical support for your account managers',
    ],
  },
];

export const CoreServicesSection: React.FC = () => {
  // WhatsApp Simulator State
  const [waIndex, setWaIndex] = useState(0);
  const [waStep, setWaStep] = useState<number>(3); // 0: start, 1: student sent, 2: typing, 3: bot replied
  const [selectedQuickReply, setSelectedQuickReply] = useState<string | null>(null);

  // Instagram Simulator State
  const [igIndex, setIgIndex] = useState(0);
  const [igStage, setIgStage] = useState<'comment' | 'processing' | 'dm_delivered'>('dm_delivered');
  const [selectedIgCta, setSelectedIgCta] = useState<string | null>(null);

  // White-Label State
  const [wlIndex, setWlIndex] = useState(0);

  const currentWa = WHATSAPP_SCENARIOS[waIndex];
  const currentIg = INSTAGRAM_SCENARIOS[igIndex];
  const currentWl = WHITELABEL_PILLARS[wlIndex];

  // Replay WhatsApp conversation animation when scenario changes
  useEffect(() => {
    setSelectedQuickReply(null);
    setWaStep(1);
    const t1 = setTimeout(() => setWaStep(2), 550);
    const t2 = setTimeout(() => setWaStep(3), 1350);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [waIndex]);

  // Replay Instagram Comment-to-DM transition when scenario changes
  useEffect(() => {
    setSelectedIgCta(null);
    setIgStage('comment');
    const t1 = setTimeout(() => setIgStage('processing'), 500);
    const t2 = setTimeout(() => setIgStage('dm_delivered'), 1250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [igIndex]);

  const replayWhatsApp = () => {
    setSelectedQuickReply(null);
    setWaStep(0);
    setTimeout(() => setWaStep(1), 200);
    setTimeout(() => setWaStep(2), 750);
    setTimeout(() => setWaStep(3), 1500);
  };

  const replayInstagram = () => {
    setSelectedIgCta(null);
    setIgStage('comment');
    setTimeout(() => setIgStage('processing'), 450);
    setTimeout(() => setIgStage('dm_delivered'), 1200);
  };

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-brand-surface border-t border-white/10 overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 bg-grid-dark bg-[size:52px_52px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mb-20"
        >
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-blue-300 text-xs font-display font-semibold uppercase tracking-widest mb-4"
          >
            <span>First Scroll • Core Engines</span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]"
          >
            Three High-Velocity Engines Built for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Modern Education &amp; Agencies.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Every missed message is a lost student enquiry. Experience how Reachryt transforms
            WhatsApp, Instagram DMs, and white-label partner execution into automated conversion
            systems.
          </motion.p>
        </motion.div>

        {/* ==================================================================== */}
        {/* SERVICE 01 — WHATSAPP AUTOMATION                                     */}
        {/* ==================================================================== */}
        <div
          id="service-whatsapp"
          className="scroll-mt-28 mb-24 lg:mb-32 rounded-3xl bg-gradient-to-br from-emerald-950/35 via-slate-900/90 to-slate-950 border border-emerald-500/25 p-6 sm:p-10 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Copy & Capability Architecture */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-display font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>SERVICE 01 • WHATSAPP AUTOMATION</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                Instant Admission &amp; Student Communication on WhatsApp.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Students and parents expect immediate answers when researching admissions, courses,
                and campus facilities. Our intelligent WhatsApp workflows handle enquiries 24/7,
                qualify prospective students, and route high-intent leads straight to your
                counsellors.
              </p>

              {/* Capabilities Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Automated student enquiries',
                  'Admission enquiry management',
                  'Instant responses to FAQs',
                  'Automated follow-up sequences',
                  'Lead qualification & nurturing',
                  'Student & parent engagement',
                ].map((cap) => (
                  <div
                    key={cap}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10"
                  >
                    <CheckCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{cap}</span>
                  </div>
                ))}
              </div>

              {/* Scenario Switcher Controls */}
              <div className="pt-3">
                <div className="text-xs font-display font-semibold uppercase tracking-wider text-emerald-300/90 mb-2.5">
                  Select a Live Educational Workflow to Simulate:
                </div>
                <div className="flex flex-wrap gap-2">
                  {WHATSAPP_SCENARIOS.map((sc, idx) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setWaIndex(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                        waIndex === idx
                          ? 'bg-emerald-500 text-slate-950 shadow-glow-whatsapp'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive WhatsApp Conversation Interface */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-slate-950 border border-emerald-500/30 overflow-hidden shadow-2xl">
                {/* WhatsApp Top Bar */}
                <div className="bg-[#075E54]/90 border-b border-emerald-400/20 px-4 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-400/20 border border-emerald-300/40 flex items-center justify-center text-emerald-200 font-display font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-sm text-white">
                          Institution Admissions Hub
                        </span>
                        <span className="text-[10px] font-display font-semibold px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-300/30">
                          Verified Workflow
                        </span>
                      </div>
                      <div className="text-xs text-emerald-200/80">
                        {waStep === 2 ? 'typing automated response...' : 'Online • Instant Auto-Reply Active'}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={replayWhatsApp}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/25 hover:bg-black/40 text-xs font-display font-semibold text-emerald-200 border border-white/15 transition-colors"
                    title="Replay conversation simulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Replay</span>
                  </button>
                </div>

                {/* Chat Body */}
                <div className="p-5 sm:p-6 space-y-4 min-h-[370px] bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_60%)]">
                  {/* Trigger Banner */}
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[11px] font-display font-semibold text-slate-400">
                      <Play className="w-3 h-3 text-emerald-400" />
                      {currentWa.triggerText}
                    </span>
                  </div>

                  {/* Step 1: Student Enquiry Bubble */}
                  <AnimatePresence>
                    {waStep >= 1 && (
                      <motion.div
                        key={`wa-user-${currentWa.id}`}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex justify-start"
                      >
                        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800/95 border border-white/10 px-4 py-3 text-xs sm:text-sm text-slate-100 shadow">
                          <div className="text-[11px] font-semibold text-emerald-400 mb-1">
                            Prospective Student / Parent
                          </div>
                          <p>{currentWa.studentMessage}</p>
                          <div className="text-[10px] text-slate-400 text-right mt-1">Just now</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Workflow Execution Node Indicator */}
                  <AnimatePresence>
                    {waStep >= 2 && (
                      <motion.div
                        key={`wa-node-${currentWa.id}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-display font-semibold text-emerald-300"
                      >
                        <Zap className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />
                        <span className="truncate">{currentWa.workflowNode}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Step 2: Typing Indicator */}
                  {waStep === 2 && (
                    <div className="flex justify-end">
                      <div className="rounded-2xl bg-emerald-900/40 border border-emerald-500/30 px-4 py-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:150ms]" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Automated WhatsApp Response + Interactive Quick Reply Buttons */}
                  <AnimatePresence>
                    {waStep >= 3 && (
                      <motion.div
                        key={`wa-bot-${currentWa.id}`}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col items-end space-y-2.5"
                      >
                        <div className="max-w-[90%] rounded-2xl rounded-tr-sm bg-[#064E3B] border border-emerald-400/40 px-4 py-3.5 text-xs sm:text-sm text-emerald-50 shadow-lg">
                          <div className="flex items-center justify-between text-[11px] text-emerald-300 font-display font-semibold mb-1.5">
                            <span className="flex items-center gap-1">
                              <Bot className="w-3.5 h-3.5" /> Reachryt WhatsApp Bot
                            </span>
                            <span>PDF Attached • 1.4 MB</span>
                          </div>
                          <p className="leading-relaxed">{currentWa.botResponse}</p>

                          {/* Interactive Quick Reply Buttons */}
                          <div className="mt-3 pt-2.5 border-t border-emerald-400/20 flex flex-wrap gap-2">
                            {currentWa.quickReplies.map((qr) => (
                              <button
                                key={qr}
                                type="button"
                                onClick={() => setSelectedQuickReply(qr)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                  selectedQuickReply === qr
                                    ? 'bg-emerald-400 text-slate-950 font-bold'
                                    : 'bg-emerald-950/70 hover:bg-emerald-900 text-emerald-200 border border-emerald-400/30'
                                }`}
                              >
                                {qr}
                              </button>
                            ))}
                          </div>

                          <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-300 mt-2">
                            <span>Delivered &amp; Read</span>
                            <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                          </div>
                        </div>

                        {/* Interactive Follow-Up Response when visitor clicks a quick reply button */}
                        {selectedQuickReply && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full rounded-xl bg-slate-900/90 border border-emerald-400/40 p-3 flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-2 text-emerald-300">
                              <UserCheck className="w-4 h-4 shrink-0" />
                              <span>
                                You selected <strong>&quot;{selectedQuickReply}&quot;</strong> —{' '}
                                {currentWa.followUpAction}
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Status Bar */}
                <div className="px-4 py-3 bg-slate-900/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span>Click any green quick-reply button inside the chat bubble to test qualification</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <span>Deploy WhatsApp Automation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* SERVICE 02 — INSTAGRAM DM WORKFLOWS                                  */}
        {/* ==================================================================== */}
        <div
          id="service-instagram"
          className="scroll-mt-28 mb-24 lg:mb-32 rounded-3xl bg-gradient-to-br from-pink-950/30 via-slate-900/90 to-purple-950/30 border border-pink-500/25 p-6 sm:p-10 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Interactive Simulated Instagram Comment-to-DM Interface (Alternating Layout) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-2xl bg-slate-950 border border-pink-500/30 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-900/80 via-pink-900/75 to-orange-900/70 border-b border-pink-400/25 px-4 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-pink-300" />
                    <div>
                      <div className="font-display font-bold text-sm text-white">
                        Instagram Comment-to-DM Workflow Simulator
                      </div>
                      <div className="text-xs text-pink-200/80">
                        Keyword Trigger: <span className="font-display font-semibold font-bold">&quot;{currentIg.keyword}&quot;</span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={replayInstagram}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/25 hover:bg-black/40 text-xs font-display font-semibold text-pink-200 border border-white/15 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Replay Flow</span>
                  </button>
                </div>

                {/* Split View: Left Post Comment -> Right Automated DM */}
                <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-5 bg-[radial-gradient(circle_at_bottom_left,rgba(225,48,108,0.09),transparent_65%)]">
                  {/* Column 1: Institution Instagram Post & Comment Trigger */}
                  <div className="rounded-xl bg-slate-900/90 border border-white/10 p-4 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-0.5">
                            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-[11px] font-bold text-white">
                              ED
                            </div>
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">campus_official</div>
                            <div className="text-[10px] text-slate-400">Educational Institution</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-display font-semibold px-2 py-0.5 rounded bg-pink-500/15 text-pink-300">
                          STEP 1: POST
                        </span>
                      </div>

                      {/* Simulated Post Card */}
                      <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-3 mb-3">
                        <p className="text-xs text-slate-200 leading-relaxed">{currentIg.postCaption}</p>
                        <div className="flex items-center justify-between text-slate-400 pt-2.5 mt-2.5 border-t border-white/5">
                          <div className="flex items-center gap-3">
                            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                            <MessageCircle className="w-4 h-4 text-white" />
                            <Send className="w-4 h-4" />
                          </div>
                          <Bookmark className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Student Comment */}
                      <div className="space-y-2">
                        <div className="rounded-lg bg-slate-800/80 border border-pink-400/30 p-2.5 text-xs">
                          <span className="font-semibold text-pink-300">@student_applicant: </span>
                          <span className="text-white">{currentIg.commentText}</span>
                        </div>

                        {/* Automated Public Comment Reply */}
                        {igStage !== 'comment' && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="ml-4 rounded-lg bg-pink-500/10 border border-pink-500/25 p-2.5 text-xs"
                          >
                            <span className="font-semibold text-pink-200">
                              ↳ @campus_official (Auto-Reply):{' '}
                            </span>
                            <span className="text-slate-200">{currentIg.publicAutoReply}</span>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    <div className="text-[11px] font-display font-semibold text-pink-300 flex items-center gap-1.5 pt-2 border-t border-white/10">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Webhook detects keyword &quot;{currentIg.keyword}&quot;</span>
                    </div>
                  </div>

                  {/* Column 2: Instant Automated Instagram Direct Message */}
                  <div className="rounded-xl bg-slate-900/90 border border-pink-400/30 p-4 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Send className="w-3.5 h-3.5 text-pink-400" />
                          Instagram Direct Message
                        </span>
                        <span className="text-[10px] font-display font-semibold px-2 py-0.5 rounded bg-purple-500/20 text-purple-200">
                          STEP 2: AUTO-DM
                        </span>
                      </div>

                      {igStage === 'dm_delivered' ? (
                        <motion.div
                          key={`ig-dm-${currentIg.id}`}
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-3"
                        >
                          <div className="rounded-2xl rounded-tl-sm bg-gradient-to-br from-purple-900/50 to-pink-900/40 border border-pink-400/35 p-3.5 text-xs text-slate-100 leading-relaxed">
                            {currentIg.dmGreeting}
                          </div>

                          {/* Interactive DM Buttons */}
                          <div className="space-y-1.5">
                            {currentIg.dmCtaButtons.map((btn) => (
                              <button
                                key={btn}
                                type="button"
                                onClick={() => setSelectedIgCta(btn)}
                                className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                                  selectedIgCta === btn
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-glow-instagram'
                                    : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10'
                                }`}
                              >
                                <span>{btn}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            ))}
                          </div>

                          {selectedIgCta && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-2.5 text-[11px] text-emerald-200"
                            >
                              <strong>Lead Captured:</strong> {currentIg.leadCaptureStep}
                            </motion.div>
                          )}
                        </motion.div>
                      ) : (
                        <div className="h-48 flex flex-col items-center justify-center text-xs text-pink-300 font-display font-semibold gap-2">
                          <div className="w-6 h-6 rounded-full border-2 border-pink-400 border-t-transparent animate-spin" />
                          <span>Triggering Comment-to-DM Workflow...</span>
                        </div>
                      )}
                    </div>

                    <div className="text-[11px] text-slate-400 pt-2 border-t border-white/10">
                      Click any DM action button above to preview lead capture
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy & Capability Architecture */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-pink-500/15 border border-pink-400/30 text-pink-300 text-xs font-display font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SERVICE 02 • INSTAGRAM DM WORKFLOWS</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                Convert Every Comment, Story Reply &amp; Reel View Into an Enquiry.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Prospective students discover campus life, achievements, and admission announcements
                on Instagram. Instead of telling them to &quot;check the link in bio,&quot; our
                keyword-triggered Instagram DM workflows immediately deliver brochures, answer
                questions, and capture qualified leads inside their inbox.
              </p>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Automated DM responses',
                  'Keyword-triggered conversations',
                  'Comment-to-DM automation',
                  'Automated enquiry collection',
                  'In-chat lead capture',
                  'Admission enquiry workflows',
                ].map((cap) => (
                  <div
                    key={cap}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10"
                  >
                    <Sparkles className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{cap}</span>
                  </div>
                ))}
              </div>

              {/* Scenario Switcher */}
              <div className="pt-3">
                <div className="text-xs font-display font-semibold uppercase tracking-wider text-pink-300/90 mb-2.5">
                  Test Keyword Triggers:
                </div>
                <div className="flex flex-wrap gap-2">
                  {INSTAGRAM_SCENARIOS.map((sc, idx) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setIgIndex(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                        igIndex === idx
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-glow-instagram'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      Keyword: &quot;{sc.keyword}&quot;
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* SERVICE 03 — WHITE-LABEL SERVICES (YOUR BRAND, OUR ENGINE)           */}
        {/* ==================================================================== */}
        <div
          id="service-whitelabel"
          className="scroll-mt-28 rounded-3xl bg-gradient-to-br from-blue-950/55 via-slate-900/95 to-indigo-950/50 border border-blue-400/35 p-6 sm:p-10 lg:p-14 shadow-glow relative overflow-hidden"
        >
          {/* Decorative Schematic Grid */}
          <div className="absolute inset-0 bg-grid-dark bg-[size:36px_36px] opacity-30 pointer-events-none" />

          <div className="relative z-10 space-y-10">
            {/* Top Banner Headline */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-blue-400/40 text-blue-200 text-xs font-display font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>SERVICE 03 • WHITE-LABEL SERVICES</span>
                </div>
                <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                  Your Brand,{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    Our Engine.
                  </span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Reachryt partners with agencies, consultants, and growth providers who want to
                  deliver enterprise-grade WhatsApp automation, Instagram DM workflows, and digital
                  marketing under their own brand identity—while we power the architecture and
                  execution behind the scenes.
                </p>
              </div>

              {/* Pillar Selector */}
              <div className="flex flex-wrap gap-2">
                {WHITELABEL_PILLARS.map((pillar, idx) => (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setWlIndex(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-display font-semibold transition-all ${
                      wlIndex === idx
                        ? 'bg-brand-blue text-white shadow-glow border border-blue-300/40'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    0{idx + 1}. {pillar.title.split(' ')[1]} Mode
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive 3-Tier Architecture Pipeline Diagram */}
            <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-stretch">
              {/* Node 1: Partner Agency Brand */}
              <div className="lg:col-span-3 rounded-2xl bg-slate-900/90 border border-cyan-400/30 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-cyan-300 px-2.5 py-1 rounded bg-cyan-500/15">
                      FRONT STAGE • PARTNER
                    </span>
                    <Shield className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Your Agency Brand
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentWl.partnerSide}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-cyan-200 font-display font-semibold">
                  ✓ You own 100% of the client relationship
                </div>
              </div>

              {/* Animated Connector 1 */}
              <div className="lg:col-span-1 flex lg:flex-col items-center justify-center py-2">
                <div className="w-full lg:w-0.5 h-0.5 lg:h-full bg-gradient-to-r lg:bg-gradient-to-b from-cyan-400 via-brand-blue to-indigo-400 relative flex items-center justify-center">
                  <div className="px-2 py-1 rounded-full bg-slate-950 border border-blue-400/50 text-[10px] font-display font-semibold text-blue-300 whitespace-nowrap">
                    API / SLA
                  </div>
                </div>
              </div>

              {/* Node 2: Reachryt Core Execution Engine */}
              <div className="lg:col-span-3 rounded-2xl bg-gradient-to-b from-brand-blue/25 to-blue-950/60 border-2 border-blue-400/60 p-6 shadow-glow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-white px-2.5 py-1 rounded bg-brand-blue">
                      BACKSTAGE • REACHRYT ENGINE
                    </span>
                    <Cpu className="w-5 h-5 text-blue-300 animate-spin [animation-duration:12s]" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Invisible Execution Core
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                    {currentWl.engineCore}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-400/30 text-xs text-blue-200 font-display font-semibold">
                  ⚡ Configured, tested &amp; maintained by Reachryt
                </div>
              </div>

              {/* Animated Connector 2 */}
              <div className="lg:col-span-1 flex lg:flex-col items-center justify-center py-2">
                <div className="w-full lg:w-0.5 h-0.5 lg:h-full bg-gradient-to-r lg:bg-gradient-to-b from-brand-blue to-emerald-400 relative flex items-center justify-center">
                  <div className="px-2 py-1 rounded-full bg-slate-950 border border-emerald-400/50 text-[10px] font-display font-semibold text-emerald-300 whitespace-nowrap">
                    WHITE-LABEL
                  </div>
                </div>
              </div>

              {/* Node 3: End Client Experience */}
              <div className="lg:col-span-3 rounded-2xl bg-slate-900/90 border border-emerald-400/30 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-emerald-300 px-2.5 py-1 rounded bg-emerald-500/15">
                      CLIENT EXPERIENCE
                    </span>
                    <Building2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Brand-Aligned Delivery
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentWl.clientOutcome}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-emerald-300 font-display font-semibold">
                  ✓ Scalable delivery under your nameplate
                </div>
              </div>
            </div>

            {/* Bottom Capabilities & Deliverables Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {currentWl.deliverables.map((item, i) => (
                <div
                  key={item}
                  className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-lg bg-brand-blue/25 border border-blue-400/40 text-blue-300 font-display font-semibold text-xs flex items-center justify-center shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* White-Label Highlights Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <GitMerge className="w-4 h-4 text-blue-400" /> Behind-the-scenes execution
                </span>
                <span className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" /> Customised partner workflows
                </span>
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" /> Brand-aligned implementation
                </span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue hover:bg-brand-darkBlue text-white font-display font-semibold text-xs sm:text-sm shadow-glow transition-all"
              >
                <span>Partner With Reachryt</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
