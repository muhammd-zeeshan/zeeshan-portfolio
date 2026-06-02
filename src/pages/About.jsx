import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin, Mail, Code2, Cpu, Zap, BookOpen,
  Globe, Users, Target, Eye, Wifi, Briefcase,
} from 'lucide-react'
import usePageSEO from '../hooks/usePageSEO'
import { pageMetadata } from '../utils/pageMetadata'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import Badge from '../components/ui/Badge'
import ResumeDownload from '../components/ui/ResumeDownload'
import { skills, experiences, achievements } from '../data/experience'
import { fadeInUp, stagger } from '../components/animations/variants'
import { personalInfo, summary } from '../lib/resumeData'

const philosophyItems = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'MVVM and MVC aren\'t just acronyms — they\'re the backbone of scalable, testable, and maintainable codebases that teams love to work with.',
  },
  {
    icon: Cpu,
    title: 'Apple Ecosystem',
    description: 'SwiftUI, UIKit, SiriKit, WidgetKit — I leverage the full Apple ecosystem to build deeply integrated, native experiences users trust.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'From launch time optimization to memory profiling, I engineer apps that feel instant and buttery-smooth at every interaction.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Swift evolves every year. I stay ahead with Swift Concurrency, Swift Charts, SwiftData, and emerging patterns across the ecosystem.',
  },
]

const skillsCategories = ['All', ...new Set(skills.map((s) => s.category))]

const remoteTools = ['Slack', 'GitHub', 'Notion', 'Zoom', 'Figma', 'Jira']

const brandingCards = [
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'I break complex requirements into clean, modular solutions — delivering features on time without sacrificing quality.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'Pixel-perfect UIs, consistent architecture, and Apple HIG compliance are non-negotiable in every project I ship.',
  },
  {
    icon: Wifi,
    title: 'Remote Ready',
    description: 'Disciplined async workflows, clear documentation, and proactive communication keep distributed teams aligned and productive.',
  },
]

export default function About() {
  usePageSEO(pageMetadata.about)
  const [activeSkillCategory, setActiveSkillCategory] = useState('All')

  const filteredSkills =
    activeSkillCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeSkillCategory)

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent">
                <span className="w-6 h-px bg-accent/40" />
                iOS Developer | Mobile App Engineer
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                Muhammad{' '}
                <span className="text-accent">Zeeshan</span>
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400 dark:text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} />
                  Lahore, Pakistan
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={15} />
                  mehmetzeeshan5@gmail.com
                </span>
              </div>
              <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-500 leading-relaxed max-w-xl">
                {summary}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <ResumeDownload />
                <a
                  href="#contact"
                  className="btn-glass px-6 py-3"
                >
                  <Users size={18} />
                  Let&apos;s Connect
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-purple-500/15 rounded-[2rem] blur-3xl" />
                <div className="relative w-full h-full rounded-[2rem] glass-card-static overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/15 to-purple-500/15 mx-auto mb-6 flex items-center justify-center">
                      <Code2 size={56} className="text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-zinc-400 dark:text-zinc-500 mt-1">iOS Developer</p>
                    <div className="flex items-center justify-center gap-1.5 mt-3 text-sm text-zinc-400 dark:text-zinc-500">
                      <MapPin size={14} />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Achievement Stats ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {achievements.map((a) => (
              <motion.div
                key={a.label}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl glass-card"
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent font-display">
                  {a.value}
                </div>
                <div className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">{a.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Professional Journey ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="My Story"
            title="Professional Journey"
            description="From my first internship to shipping enterprise-grade iOS apps — here is how the journey unfolded."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg text-zinc-500 dark:text-zinc-500 leading-relaxed"
          >
            <motion.p variants={fadeInUp}>
              My professional journey started at <strong className="text-zinc-900 dark:text-white">Digital Cru</strong> in Lahore,
              where I joined as a Frontend Developer Intern. Those early months taught me the fundamentals of modern
              web development — React.js, REST API integration, responsive design, and the discipline of clean,
              maintainable code. I quickly realized that building user-facing software was not just a job — it was
              what I was meant to do.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Transitioning into an <strong className="text-zinc-900 dark:text-white">iOS Developer</strong> role at Digital Cru, I
              took ownership of BMZ Wallet, a comprehensive finance management application that pushed me deep into
              the Apple ecosystem. I integrated SiriKit, WidgetKit, Swift Charts, SwiftData, WebSocket-based real-time
              updates, and Apple Sign-In — all while championing MVVM architecture to keep the codebase scalable and
              testable. That experience shaped me into a well-rounded mobile engineer.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Today, as an <strong className="text-zinc-900 dark:text-white">iOS Software Engineer at Epazz Inc</strong>, I build
              enterprise-level SaaS and AI-driven applications including WorkAware and K9Sky. I work with SwiftUI,
              UIKit, and RESTful APIs, optimizing performance and crafting polished experiences that follow Apple
              Human Interface Guidelines. Every feature I ship is built with clean architecture, rigorous testing,
              and an obsession for quality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-16 sm:py-24 bg-zinc-50/[0.3] dark:bg-zinc-900/[0.15]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Philosophy"
            title="How I Build"
            description="The principles that guide every architectural decision and line of code."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {philosophyItems.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <GlassCard className="text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/[0.08] flex items-center justify-center mx-auto mb-5">
                    <item.icon size={28} className="text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Expertise"
            title="Skills & Technologies"
            description="Three years of hands-on mastery across the iOS ecosystem — from Swift and SwiftUI to architecture and backend tooling."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {skillsCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSkillCategory === cat
                      ? 'bg-accent text-white shadow-lg shadow-accent/20'
                      : 'glass-card text-zinc-500 dark:text-zinc-500 hover:bg-accent/[0.06] hover:text-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
            <motion.div variants={stagger} className="space-y-5">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  className="glass-card p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                      {skill.name}
                    </span>
                    <span className="text-xs font-medium text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-accent to-purple-500"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience Timeline ── */}
      <section className="py-16 sm:py-24 bg-zinc-50/[0.3] dark:bg-zinc-900/[0.15]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Career"
            title="Professional Experience"
            description="Three roles that shaped my craft across the iOS and web ecosystems."
          />
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[25px] top-0 bottom-0 w-px bg-zinc-200/50 dark:bg-zinc-800/50 hidden sm:block" />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className="relative pl-0 sm:pl-14"
                >
                  <div className="hidden sm:flex absolute left-[19px] top-2 w-[13px] h-[13px] rounded-full bg-accent border-[3px] border-zinc-50 dark:border-zinc-950 -translate-x-1/2 z-10" />
                  <GlassCard className="!p-6">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <span className="text-xs font-semibold tracking-wider uppercase text-accent">
                          {exp.period}
                        </span>
                        <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white mt-1">
                          {exp.role}
                        </h3>
                        <p className="text-zinc-400 dark:text-zinc-500 text-sm flex items-center gap-1.5 mt-0.5">
                          {exp.company}
                          <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 inline-block" />
                          {exp.type}
                        </p>
                      </div>
                      <Badge variant="glass">
                        <MapPin size={12} />
                        {exp.location}
                      </Badge>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-zinc-500 dark:text-zinc-500 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Remote Work ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/[0.08] flex items-center justify-center mb-5">
                  <Globe size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  Remote Work Setup
                </h3>
                <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed mb-4">
                  Fully equipped for distributed collaboration with a disciplined workflow.
                  I leverage async communication, thorough documentation, and overlapping
                  time zones to keep projects moving efficiently across continents.
                </p>
                <div className="flex flex-wrap gap-2">
                  {remoteTools.map((tool) => (
                    <Badge key={tool} variant="glass">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/[0.08] flex items-center justify-center mb-5">
                  <Briefcase size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  Global Collaboration
                </h3>
                <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed mb-4">
                  Based in <strong className="text-zinc-900 dark:text-white">Lahore, Pakistan</strong> — open to remote
                  opportunities worldwide. I bring reliability, clear communication, and
                  technical excellence to every distributed team I join.
                </p>
                <div className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
                  <Globe size={16} className="text-accent" />
                  <span>Available for remote opportunities worldwide</span>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Personal Branding ── */}
      <section className="py-16 sm:py-24 bg-zinc-50/[0.3] dark:bg-zinc-900/[0.15]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Beyond Code"
            title="What Sets Me Apart"
            description="The qualities I bring to every project and every team."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {brandingCards.map((card) => (
              <motion.div key={card.title} variants={fadeInUp}>
                <GlassCard className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/[0.08] flex items-center justify-center mx-auto mb-4">
                    <card.icon size={24} className="text-accent" />
                  </div>
                  <h4 className="font-display font-bold text-zinc-900 dark:text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                    {card.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-zinc-500 dark:text-zinc-500 mb-8 max-w-lg mx-auto">
              Whether you need a production-grade iOS app, a modular SwiftUI architecture,
              or an experienced developer for your remote team — let&apos;s talk.
            </p>
            <ResumeDownload variant="primary" size="lg" />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
