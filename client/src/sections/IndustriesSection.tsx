import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  School,
  Building2,
  GraduationCap,
  BookOpenCheck,
  MessageSquare,
  Sparkles,
  CheckCircle,
  ArrowUpRight,
} from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant, cardRevealVariant } from '../animations/variants';

interface EducationSector {
  id: string;
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  communicationChallenges: string[];
  automationSolutions: string[];
  whatsappUseCase: string;
  instagramUseCase: string;
}

const EDUCATION_SECTORS: EducationSector[] = [
  {
    id: 'schools',
    title: 'Schools (Primary, Secondary, CBSE, ICSE & Matriculation)',
    tag: 'K-12 EDUCATION',
    icon: School,
    summary:
      'Streamline parent enquiries during admission windows, share curriculum and facility brochures instantaneously, and automate campus visit scheduling.',
    communicationChallenges: [
      'High volume of repetitive parent phone calls asking about age criteria, fee structure, and transport routes',
      'Missed social media comments during peak school admission announcements',
    ],
    automationSolutions: [
      'Grade-wise automated WhatsApp admission assistant for parents',
      'Instant brochure, curriculum & transport route map delivery',
      'Automated Saturday school tour booking & parent reminder alerts',
    ],
    whatsappUseCase:
      'Parents select their child’s grade level on WhatsApp to receive the exact admission checklist and schedule a principal/counsellor interaction.',
    instagramUseCase:
      'Parents commenting on school event reels or admission posts automatically receive an interactive DM with the school prospectus.',
  },
  {
    id: 'colleges',
    title: 'Colleges (Arts, Science, Engineering, Management & Professional)',
    tag: 'HIGHER EDUCATION',
    icon: Building2,
    summary:
      'Engage prospective undergraduate and postgraduate applicants across departments with instant course counselling workflows and eligibility guidance.',
    communicationChallenges: [
      'Students comparing multiple colleges simultaneously and dropping off when enquiry forms take days to receive a response',
      'Fragmented department-level enquiries across Engineering, Commerce, Arts, and Science streams',
    ],
    automationSolutions: [
      'Department-specific WhatsApp qualification & syllabus routing',
      'Instagram Comment-to-DM workflows for campus life, lab tours & placement highlights',
      'Automated application deadline & counselling slot follow-ups',
    ],
    whatsappUseCase:
      'Prospective students pick their stream (e.g., B.E., B.Sc., BBA, MBA) and immediately receive syllabus PDFs, hostel details, and counsellor connect options.',
    instagramUseCase:
      'Keyword triggers on department reels (e.g., comment "CSE" or "MBA") send tailored programme guides directly to the student’s Instagram inbox.',
  },
  {
    id: 'universities',
    title: 'Universities & Multi-Faculty Educational Organizations',
    tag: 'UNIVERSITIES',
    icon: GraduationCap,
    summary:
      'Unify multi-campus and multi-faculty admission communication with scalable conversational workflows that qualify and route enquiries to the right admissions desk.',
    communicationChallenges: [
      'Complex programme catalogues spanning dozens of degrees, research tracks, and entrance requirements',
      'Need for structured lead qualification before assigning enquiries to specialized admission counsellors',
    ],
    automationSolutions: [
      'Multi-tier conversational routing across faculties, campuses, and degree levels',
      'Automated entrance registration & scholarship eligibility workflows',
      'Structured enquiry capture ready for institutional admissions workflows',
    ],
    whatsappUseCase:
      'Automated pre-qualification bot captures academic background, preferred faculty, and intake term before routing to the respective university admissions officer.',
    instagramUseCase:
      'Interactive DM sequences guide prospective students from campus discovery posts straight to virtual open-day registrations.',
  },
  {
    id: 'coaching',
    title: 'Coaching, Test-Prep & Training Institutions',
    tag: 'COACHING & SKILL ACADEMIES',
    icon: BookOpenCheck,
    summary:
      'Convert high-velocity batch enquiries, demo class registrations, and course syllabus requests into enrolled learners through instant conversational follow-ups.',
    communicationChallenges: [
      'Fast-moving rolling batch intakes where delayed responses result in students joining a competitor batch',
      'High manual effort required to send demo class links, batch timings, and fee structures individually',
    ],
    automationSolutions: [
      'Automated demo session & orientation webinar registration via WhatsApp & Instagram DM',
      'Instant batch schedule, weekday/weekend timing, and syllabus delivery',
      'Automated reminder sequences before live demo classes',
    ],
    whatsappUseCase:
      'Learners enquire about upcoming batches and immediately receive batch start dates, demo class links, and automated attendance reminders.',
    instagramUseCase:
      'Commenting a keyword on an educational tip reel triggers an instant DM with a free study resource and demo batch invitation.',
  },
];

export const IndustriesSection: React.FC = () => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>('schools');
  const activeSector =
    EDUCATION_SECTORS.find((s) => s.id === selectedSectorId) || EDUCATION_SECTORS[0];

  return (
    <section
      id="industries"
      className="relative py-24 lg:py-32 bg-brand-surface border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mb-14"
        >
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-blue-300 text-xs font-display font-semibold uppercase tracking-widest mb-4"
          >
            <span>05 • Industries We Serve</span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]"
          >
            Purpose-Built for the{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Education Ecosystem.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Educational admission journeys are unique—involving both students and parents, academic
            counselling, and seasonal intake cycles. Explore how our automation and digital
            marketing solutions adapt to each educational sector.
          </motion.p>
        </motion.div>

        {/* Sector Selector Cards */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {EDUCATION_SECTORS.map((sector) => {
            const Icon = sector.icon;
            const isSelected = sector.id === selectedSectorId;
            return (
              <motion.button
                key={sector.id}
                variants={cardRevealVariant}
                type="button"
                onClick={() => setSelectedSectorId(sector.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-brand-blue/25 to-slate-900 border-blue-400/60 shadow-glow'
                    : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-display font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-white/10 text-blue-200">
                      {sector.tag}
                    </span>
                    <Icon
                      className={`w-5 h-5 ${isSelected ? 'text-blue-300' : 'text-slate-400'}`}
                    />
                  </div>
                  <h3 className="font-display font-bold text-base text-white leading-snug">
                    {sector.title.split(' (')[0]}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">{sector.summary}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-display font-semibold">
                  <span className={isSelected ? 'text-blue-300 font-semibold' : 'text-slate-400'}>
                    {isSelected ? 'Viewing Blueprint' : 'Inspect Blueprint'}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active Sector Deep-Dive Blueprint Panel */}
        <motion.div
          key={activeSector.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-slate-900/90 border border-white/15 p-6 sm:p-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Overview & Automation Solutions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-display font-semibold uppercase tracking-widest text-blue-400">
                  {activeSector.tag} • SECTOR BLUEPRINT
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                  {activeSector.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  {activeSector.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-2.5">
                  <div className="text-xs font-display font-semibold uppercase tracking-wider text-rose-300 font-semibold">
                    Common Communication Bottlenecks
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {activeSector.communicationChallenges.map((ch) => (
                      <li key={ch} className="leading-relaxed">
                        • {ch}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-500/25 space-y-2.5">
                  <div className="text-xs font-display font-semibold uppercase tracking-wider text-emerald-300 font-semibold">
                    Reachryt Automation Solutions
                  </div>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {activeSector.automationSolutions.map((sol) => (
                      <li key={sol} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Channel-Specific Workflows */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-display font-semibold text-emerald-300 uppercase">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Automation Workflow</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeSector.whatsappUseCase}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-pink-950/30 border border-pink-500/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-display font-semibold text-pink-300 uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Instagram DM Workflow</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeSector.instagramUseCase}
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-brand-blue hover:bg-brand-darkBlue text-white font-display font-semibold text-xs sm:text-sm shadow-glow transition-all"
                >
                  <span>Request a Custom Workflow for Your Institution</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
