import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Compass,
  Workflow,
  Rocket,
  Activity,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '../animations/variants';

interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: "Understand the Institution's Requirements",
    subtitle: 'Discovery & Communication Audit',
    description:
      'We analyse your admission cycle, academic programmes, enquiry volume, parent communication touchpoints, and current response bottlenecks.',
    icon: Search,
    deliverables: [
      'Enquiry channel & admission journey mapping',
      'Frequently asked student & parent question audit',
      'Counsellor handoff & routing requirement blueprint',
    ],
  },
  {
    stepNumber: '02',
    title: 'Design the Automation Strategy',
    subtitle: 'Conversational Architecture & Blueprinting',
    description:
      'We architect tailored WhatsApp conversation trees, Instagram keyword triggers, lead qualification logic, and white-label execution protocols.',
    icon: Compass,
    deliverables: [
      'Decision-tree flowcharts for WhatsApp & Instagram DM',
      'Keyword & comment-to-DM trigger matrix',
      'Custom brand voice & institutional tone alignment',
    ],
  },
  {
    stepNumber: '03',
    title: 'Build and Configure Workflows',
    subtitle: 'Engineering & System Configuration',
    description:
      'Our technical team builds the automated dialogue flows, brochure delivery triggers, lead capture prompts, and automated follow-up sequences.',
    icon: Workflow,
    deliverables: [
      'Interactive button & quick-reply message templates',
      'Automated admission brochure & syllabus delivery setup',
      'Multi-step student qualification & data capture fields',
    ],
  },
  {
    stepNumber: '04',
    title: 'Deploy and Integrate',
    subtitle: 'Launch, Testing & Handover Readiness',
    description:
      'We test every trigger path across devices, connect lead notifications to your admissions team, and launch the live automation workflows smoothly.',
    icon: Rocket,
    deliverables: [
      'End-to-end live conversation & edge-case QA testing',
      'Structured enquiry data routing for admissions teams',
      'Counsellor orientation for human takeover moments',
    ],
  },
  {
    stepNumber: '05',
    title: 'Optimise and Support',
    subtitle: 'Continuous Refinement & Seasonal Scaling',
    description:
      'As admission windows, open days, and new academic intakes evolve, we refine message flows, update programme information, and support your team.',
    icon: Activity,
    deliverables: [
      'Drop-off point refinement & prompt improvement',
      'Seasonal campaign & admission deadline updates',
      'Ongoing technical monitoring & dedicated partner support',
    ],
  },
];

export const HowWeWorkSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="how-we-work"
      className="relative py-24 lg:py-32 bg-brand-deepNavy border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mb-16"
        >
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-blue-300 text-xs font-display font-semibold uppercase tracking-widest mb-4"
          >
            <span>04 • Execution Methodology</span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]"
          >
            How We Engineer Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Automation Ecosystem.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            A transparent, five-stage engineering process designed to take educational institutions
            and agency partners from manual enquiry handling to intelligent automated workflows.
          </motion.p>
        </motion.div>

        {/* Interactive Connected 5-Step Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Step Selector Timeline */}
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isSelected = activeStep === index;
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-brand-blue/20 border-blue-400/60 shadow-glow'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-semibold text-xs font-bold shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-brand-blue text-white'
                        : 'bg-slate-800 text-slate-300 border border-white/10'
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-display font-semibold uppercase tracking-wider text-blue-300">
                      {step.subtitle}
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base text-white mt-0.5">
                      {step.title}
                    </div>
                  </div>
                  <Icon
                    className={`w-5 h-5 shrink-0 mt-1 ${
                      isSelected ? 'text-blue-300' : 'text-slate-500'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Active Stage Visualizer */}
          <div className="lg:col-span-7">
            <motion.div
              key={PROCESS_STEPS[activeStep].stepNumber}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-blue-950/40 border border-blue-400/30 p-6 sm:p-10 shadow-2xl space-y-6"
            >
              {/* Progress Indicator Bar */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-blue text-white font-display font-semibold text-xs font-bold">
                    STAGE {PROCESS_STEPS[activeStep].stepNumber} / 05
                  </span>
                  <span className="text-xs font-display font-semibold text-blue-300">
                    {PROCESS_STEPS[activeStep].subtitle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {PROCESS_STEPS.map((s, idx) => (
                    <span
                      key={s.stepNumber}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === activeStep
                          ? 'w-7 bg-brand-blue'
                          : idx < activeStep
                          ? 'w-3 bg-emerald-400'
                          : 'w-3 bg-white/15'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {PROCESS_STEPS[activeStep].description}
                </p>
              </div>

              {/* Stage Deliverables */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-display font-semibold uppercase tracking-wider text-slate-400">
                  Key Stage Outputs &amp; Execution Focus:
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-100 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Navigation Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() =>
                    setActiveStep((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length)
                  }
                  className="text-xs font-display font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
