import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Download } from 'lucide-react'
import usePageSEO from '../hooks/usePageSEO'
import { pageMetadata } from '../utils/pageMetadata'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { experiences, skills, achievements } from '../data/experience'
import { fadeInUp, stagger } from '../components/animations/variants'

const categories = [...new Set(skills.map((s) => s.category))]

function TimelineDot({ index }) {
  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 15 }}
        className="w-4 h-4 rounded-full bg-accent border-[3px] border-zinc-50 dark:border-zinc-950 shadow-sm z-10 shrink-0"
      />
      {index < experiences.length - 1 && (
        <div className="w-0.5 h-full min-h-[24px] bg-zinc-200/50 dark:bg-zinc-800/50" />
      )}
    </div>
  )
}

export default function Experience() {
  usePageSEO(pageMetadata.experience)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Experience"
            title="My Professional Journey"
            description="Building world-class iOS and web applications with a focus on performance, architecture, and user experience."
          />

          <div className="relative">
            <div className="hidden md:block absolute left-[31px] top-0 bottom-0 w-0.5 bg-zinc-200/50 dark:bg-zinc-800/50" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="relative flex gap-6 md:gap-10"
                >
                  <div className="hidden md:flex flex-col items-center">
                    <TimelineDot index={index} />
                  </div>

                  <div className="hidden md:block w-32 shrink-0 pt-1.5 text-right">
                    <span className="text-sm font-medium text-accent whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <GlassCard className="relative">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1 md:hidden">
                            <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span className="text-xs font-medium text-accent">{exp.period}</span>
                          </div>
                          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-zinc-400 dark:text-zinc-500">
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                          <Badge variant={exp.type === 'Internship' ? 'warning' : 'default'}>
                            {exp.type}
                          </Badge>
                          <span className="flex items-center gap-1 text-xs text-zinc-400">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <Badge key={t} variant="glass">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50/[0.3] dark:bg-zinc-900/[0.15]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Impact"
            title="By The Numbers"
            description="Years of dedication, hundreds of thousands of lines of code, and millions of happy users."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <GlassCard className="text-center py-8">
                  <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                    {achievement.value}
                  </div>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500 font-medium">
                    {achievement.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Skills"
            title="Technical Mastery"
            description="A comprehensive toolkit built over years of hands-on iOS and frontend development."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'All'
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'glass-card text-zinc-500 dark:text-zinc-500 hover:bg-accent/[0.06]'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'glass-card text-zinc-500 dark:text-zinc-500 hover:bg-accent/[0.06]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div key={skill.name} variants={fadeInUp} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-accent">{skill.level}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent/70"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Button variant="secondary" size="lg" icon={Download} href="/resume.pdf">
              Download Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
