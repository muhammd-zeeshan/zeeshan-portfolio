import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Calendar, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { experiences } from '../../data/experience'
import SectionHeader from '../ui/SectionHeader'
import { fadeInUp, stagger } from '../animations/variants'

const latestExperiences = experiences.slice(0, 2)

export default function ExperienceHighlights() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Experience"
        title="Career Journey"
        description="iOS engineering experience delivering high-impact mobile applications."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-3xl mx-auto relative"
      >
        {/* Timeline line */}
        <div className="absolute left-[13px] sm:left-[17px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

        {latestExperiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={fadeInUp}
            className="relative pl-10 sm:pl-14 pb-10 sm:pb-12 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-[9px] sm:left-[13px] top-1 w-[9px] h-[9px] rounded-full bg-accent border-2 border-zinc-50 dark:border-zinc-950 shadow-sm z-10" />

            {/* Card */}
            <div className="glass-card p-5 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white font-display">
                  {exp.role}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 dark:text-zinc-500">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-3">
                <div className="flex items-center gap-1.5 text-sm text-accent font-medium">
                  <Briefcase className="w-3.5 h-3.5" />
                  {exp.company}
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 dark:text-zinc-500">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.slice(0, 2).map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-500">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* View Full Experience */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-8 sm:mt-10"
        >
          <Link to="/experience">
            <span className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium transition-colors group">
              View Full Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
