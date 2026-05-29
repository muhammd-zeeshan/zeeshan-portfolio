import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import SectionHeader from '../ui/SectionHeader'
import GlassCard from '../ui/GlassCard'
import Badge from '../ui/Badge'
import { fadeInUp, stagger } from '../animations/variants'

const featuredProjects = projects.filter((p) => p.featured)

export default function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Portfolio"
        title="Featured Projects"
        description="A selection of high-impact iOS applications I've architected and delivered."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <GlassCard className="overflow-hidden group !p-0">
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <Badge variant="glass" className="!bg-black/40 !backdrop-blur-md text-white !border-white/20 text-xs">
                    {project.category}
                  </Badge>
                </div>

                {/* Links */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-all"
                    >
                      <GitBranch className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>

                {/* Year */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <span className="text-xs font-medium text-white/60 bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 font-display">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent/[0.08] text-accent border border-accent/[0.15]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* View All CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mt-10 sm:mt-12 lg:mt-16"
      >
        <Link to="/projects">
          <span className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium transition-colors group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </motion.div>
    </section>
  )
}
