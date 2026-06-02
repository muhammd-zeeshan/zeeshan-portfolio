import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, GitBranch } from 'lucide-react'
import usePageSEO from '../hooks/usePageSEO'
import { pageMetadata } from '../utils/pageMetadata'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import Badge from '../components/ui/Badge'
import { projects, projectCategories } from '../data/projects'
import { fadeInUp, stagger } from '../components/animations/variants'

export default function Projects() {
  usePageSEO(pageMetadata.projects)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="relative overflow-hidden pb-8 sm:pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="A curated collection of iOS applications I've designed and built — from fintech to AI, each project represents a unique challenge and a crafted solution."
        />
      </section>

      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-2"
            >
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-accent text-white shadow-lg shadow-accent/20'
                      : 'glass-card text-zinc-500 dark:text-zinc-500 hover:bg-accent/[0.06] hover:text-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="relative w-full sm:w-64">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 outline-none focus:bg-white/[0.08] transition-all"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            key={`${activeCategory}-${searchQuery}`}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <GlassCard className="h-full flex flex-col !p-0 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="glass">{project.category}</Badge>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-400/80 text-amber-900 backdrop-blur-sm">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-display font-bold text-zinc-900 dark:text-white mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 4).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="glass">+{project.tech.length - 4}</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        <GitBranch size={14} />
                        Source
                      </a>
                      <span className="ml-auto text-[10px] text-zinc-400 font-mono">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-zinc-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm max-w-sm mx-auto">
                {searchQuery
                  ? `No projects match "${searchQuery}". Try a different search term.`
                  : 'No projects in this category yet. Check back soon!'}
              </p>
              {(activeCategory !== 'All' || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveCategory('All')
                    setSearchQuery('')
                  }}
                  className="mt-6 px-5 py-2.5 rounded-xl btn-glass text-sm font-medium text-accent"
                >
                  Clear Filters
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}
