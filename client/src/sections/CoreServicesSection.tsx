import React, { useState } from 'react';
import {
  MessageSquare,
  Sparkles,
  Layers,
  CheckCheck,
  Send,
  FileText,
  ArrowRight,
  Shield,
  Users,
  Building2,
  GraduationCap,
  Phone,
  Video,
  Smile,
  Mic,
  Camera,
  Image as ImageIcon,
} from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '../animations/variants';
import { motion } from 'framer-motion';

const WHATSAPP_EXAMPLES = [
  {
    id: 'admission',
    label: 'Admissions',
    question: 'Hi! Are admissions open? Can I get the brochure?',
    reply: 'Hello! 😊 Yes, admissions are open. Here is our brochure. How can we help you?',
    buttons: ['Course Details', 'Fee Structure', 'Talk to Us'],
  },
  {
    id: 'fees',
    label: 'Fee Details',
    question: 'Can you share the fee structure and hostel details?',
    reply: 'Sure! Here is the fee and hostel sheet. We also offer scholarships. Choose an option:',
    buttons: ['View Fees', 'Scholarships', 'Request a Call'],
  },
  {
    id: 'visit',
    label: 'Campus Visit',
    question: 'Can we visit the campus this Saturday?',
    reply: 'We would love to welcome you! 🏛️ Pick a time that works best for you:',
    buttons: ['Saturday 10:30 AM', 'Saturday 2:00 PM'],
  },
];

const INSTAGRAM_EXAMPLES = [
  {
    id: 'brochure',
    label: 'Brochure',
    studentMsg: 'Commented "ADMISSION" on your post',
    reply: 'Hey there! 👋 Thanks for your comment. Tap below to get our brochure or apply online:',
    buttons: ['📘 Download Brochure', '📝 Apply Online'],
  },
  {
    id: 'courses',
    label: 'Courses',
    studentMsg: 'Replied "COURSES" to your story',
    reply: 'Hello! 😊 Which course details would you like to see?',
    buttons: ['💻 Engineering & IT', '📊 Arts & Science'],
  },
  {
    id: 'visit',
    label: 'Campus Tour',
    studentMsg: 'Commented "VISIT" on your reel',
    reply: 'Welcome! Tap below to book a quick campus visit this weekend:',
    buttons: ['🗓️ Book Saturday Visit', '📍 View Location'],
  },
];

export const CoreServicesSection: React.FC = () => {
  const [waIndex, setWaIndex] = useState(0);
  const [igIndex, setIgIndex] = useState(0);

  const currentWa = WHATSAPP_EXAMPLES[waIndex];
  const currentIg = INSTAGRAM_EXAMPLES[igIndex];

  return (
    <section
      id="services"
      className="relative py-20 lg:py-24 bg-brand-surface border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mb-14"
        >
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-blue-300 text-xs font-display font-semibold uppercase tracking-widest mb-3"
          >
            <span>Our Services</span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Simple Tools to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-3 text-base text-slate-300"
          >
            Never miss a student or customer enquiry again.
          </motion.p>
        </motion.div>

        {/* ==================================================================== */}
        {/* 1. WHATSAPP CHAT                                                     */}
        {/* ==================================================================== */}
        <div
          id="service-whatsapp"
          className="scroll-mt-28 mb-16 lg:mb-20 rounded-3xl bg-gradient-to-br from-emerald-950/35 via-slate-900/90 to-slate-950 border border-emerald-500/25 p-6 sm:p-10 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-display font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WHATSAPP AUTOMATION</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                Instant Replies on WhatsApp.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Answer student and parent questions 24/7, share brochures automatically, and book
                campus visits right on WhatsApp.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  '24/7 Instant Replies',
                  'Auto Brochure Sharing',
                  'Easy Visit Booking',
                  'Connect With Team',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/10"
                  >
                    <CheckCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {WHATSAPP_EXAMPLES.map((ex, idx) => (
                  <button
                    key={ex.id}
                    type="button"
                    onClick={() => setWaIndex(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      waIndex === idx
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Authentic WhatsApp Chat Screen */}
            <div className="lg:col-span-7">
              <div className="native-chat-sim rounded-2xl bg-[#0B141A] border border-white/15 overflow-hidden shadow-2xl">
                {/* Original WhatsApp Top Bar */}
                <div className="bg-[#202C33] px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center text-white">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">
                        Admissions Desk
                      </div>
                      <div className="text-xs text-[#8696A0]">online</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#8696A0]">
                    <Video className="w-4 h-4" />
                    <Phone className="w-4 h-4" />
                  </div>
                </div>

                {/* Original WhatsApp Wallpaper & Messages */}
                <div className="wa-chat-wallpaper p-5 sm:p-6 space-y-4 min-h-[280px] flex flex-col justify-center">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg rounded-tl-none bg-[#202C33] px-3.5 py-2.5 text-xs sm:text-sm text-[#E9EDEF] shadow">
                      <p>{currentWa.question}</p>
                      <div className="text-[10px] text-[#8696A0] text-right mt-1">10:30 AM</div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-lg rounded-tr-none bg-[#005C4B] px-3.5 py-2.5 text-xs sm:text-sm text-[#E9EDEF] shadow-lg">
                      <div className="flex items-center justify-between px-2.5 py-1.5 mb-2 rounded bg-[#0b141a]/30 text-[11px] text-[#E9EDEF]">
                        <span className="flex items-center gap-1.5 font-medium">
                          <FileText className="w-3.5 h-3.5 text-[#25D366]" />
                          Brochure.pdf
                        </span>
                        <span className="text-[10px] text-[#8696A0]">PDF</span>
                      </div>

                      <p className="leading-relaxed">{currentWa.reply}</p>

                      <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                        {currentWa.buttons.map((btn) => (
                          <span
                            key={btn}
                            className="px-3 py-1.5 rounded bg-[#0b141a]/40 text-xs font-medium text-[#53BDEB]"
                          >
                            {btn}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-end gap-1 text-[10px] text-[#8696A0] mt-1.5">
                        <span>10:30 AM</span>
                        <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Original WhatsApp Input Bar */}
                <div className="bg-[#202C33] px-3 py-2.5 flex items-center gap-2">
                  <div className="flex-1 rounded-full bg-[#2A3942] px-4 py-2 flex items-center justify-between text-xs text-[#8696A0]">
                    <span className="flex items-center gap-2.5">
                      <Smile className="w-4 h-4" />
                      <span>Message</span>
                    </span>
                    <Camera className="w-4 h-4" />
                  </div>
                  <a
                    href="#contact"
                    className="w-9 h-9 rounded-full bg-[#00A884] flex items-center justify-center text-white"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 2. INSTAGRAM DM                                                      */}
        {/* ==================================================================== */}
        <div
          id="service-instagram"
          className="scroll-mt-28 mb-16 lg:mb-20 rounded-3xl bg-gradient-to-br from-pink-950/30 via-slate-900/90 to-purple-950/30 border border-pink-500/25 p-6 sm:p-10 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Authentic Instagram DM Screen */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="native-chat-sim rounded-2xl bg-[#000000] border border-[#262626] overflow-hidden shadow-2xl">
                {/* Original Instagram DM Header */}
                <div className="bg-[#000000] border-b border-[#262626] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]">
                      <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-xs font-bold text-white">
                        ED
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1">
                        <span>campus_official</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#0095F6] text-white text-[9px] inline-flex items-center justify-center">
                          ✓
                        </span>
                      </div>
                      <div className="text-[11px] text-[#A8A8A8]">Active now</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <Phone className="w-4 h-4" />
                    <Video className="w-4 h-4" />
                  </div>
                </div>

                {/* Original Instagram DM Chat Body */}
                <div className="ig-dm-wallpaper p-5 sm:p-6 space-y-4 min-h-[280px] flex flex-col justify-center">
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-br-sm bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] px-4 py-2 text-xs sm:text-sm text-white">
                      {currentIg.studentMsg}
                    </div>
                  </div>

                  <div className="flex items-end gap-2.5 justify-start">
                    <div className="w-7 h-7 rounded-full bg-[#262626] flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                      ED
                    </div>
                    <div className="max-w-[82%] rounded-2xl rounded-bl-sm bg-[#262626] p-3.5 text-xs sm:text-sm text-white space-y-2.5">
                      <p>{currentIg.reply}</p>
                      <div className="space-y-1.5">
                        {currentIg.buttons.map((btn) => (
                          <div
                            key={btn}
                            className="w-full px-3.5 py-2 rounded-xl bg-[#363636] text-xs font-semibold text-white flex items-center justify-between"
                          >
                            <span>{btn}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#0095F6]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Original Instagram Message Bar */}
                <div className="bg-[#000000] px-3 py-2.5 border-t border-[#262626]">
                  <div className="rounded-full bg-[#262626] px-3.5 py-2 flex items-center justify-between text-xs text-[#A8A8A8]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#0095F6] flex items-center justify-center text-white">
                        <Camera className="w-3.5 h-3.5" />
                      </span>
                      <span>Message...</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Mic className="w-4 h-4" />
                      <ImageIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-400/30 text-pink-300 text-xs font-display font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INSTAGRAM DM</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                Turn Comments Into Conversations.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When someone comments on your post or reel, we automatically send them the brochure
                or application link right in their Instagram DM.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  'Auto Comment Replies',
                  'Instant DM Brochures',
                  'Story Reply Messages',
                  'Easy Lead Collection',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/10"
                  >
                    <Sparkles className="w-4 h-4 text-pink-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {INSTAGRAM_EXAMPLES.map((ex, idx) => (
                  <button
                    key={ex.id}
                    type="button"
                    onClick={() => setIgIndex(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      igIndex === idx
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 3. WHITE-LABEL PARTNERSHIP                                           */}
        {/* ==================================================================== */}
        <div
          id="service-whitelabel"
          className="scroll-mt-28 rounded-3xl bg-gradient-to-br from-blue-950/55 via-slate-900/95 to-indigo-950/50 border border-blue-400/35 p-6 sm:p-10 shadow-xl"
        >
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 border border-blue-400/40 text-blue-200 text-xs font-display font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>FOR AGENCIES</span>
                </div>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  Your Brand.{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    Our Team.
                  </span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Offer WhatsApp, Instagram, and digital marketing services under your own brand
                  name while our team does all the work behind the scenes.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue hover:bg-brand-darkBlue text-white font-display font-semibold text-xs sm:text-sm shadow-glow transition-all shrink-0 self-start lg:self-center"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-slate-900/90 border border-white/10 p-5 space-y-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                <h4 className="font-display font-bold text-base text-white">1. Your Brand</h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  You manage the client under your own company name and logo.
                </p>
              </div>

              <div className="rounded-2xl bg-brand-blue/20 border border-blue-400/50 p-5 space-y-2">
                <Users className="w-5 h-5 text-blue-300" />
                <h4 className="font-display font-bold text-base text-white">2. Our Team</h4>
                <p className="text-xs sm:text-sm text-blue-100">
                  We handle the setup, campaigns, and daily work quietly in the background.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/90 border border-white/10 p-5 space-y-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <h4 className="font-display font-bold text-base text-white">3. Happy Clients</h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Your clients get great results without you hiring a bigger team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
