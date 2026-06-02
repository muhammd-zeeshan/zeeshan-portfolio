import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, Clock, User, ArrowRight, Mail } from 'lucide-react'
import usePageSEO from '../hooks/usePageSEO'
import { pageMetadata } from '../utils/pageMetadata'
import { blogPosts, blogCategories } from '../data/blog'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { fadeInUp, stagger } from '../components/animations/variants'

export default function Blog() {
  usePageSEO(pageMetadata.blog)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((p) => p.featured)

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-container">
        <SectionHeader
          label="Blog"
          title="Latest Articles"
          description="Thoughts on iOS development, SwiftUI, architecture patterns, and career insights."
        />

        {featuredPosts.length > 0 && (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mb-12 lg:mb-16"
          >
            <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-accent" />
              Featured Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  variants={fadeInUp}
                  className={i === 0 ? 'md:col-span-2 lg:col-span-2 md:row-span-1' : ''}
                >
                  <GlassCard className={`group h-full ${i === 0 ? 'md:flex md:gap-6' : ''}`}>
                    <div className={`overflow-hidden rounded-xl ${i === 0 ? 'md:w-1/2' : ''}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className={`mt-5 ${i === 0 ? 'md:w-1/2 md:mt-0 md:flex md:flex-col md:justify-center' : ''}`}>
                      <Badge variant="default" className="mb-3">
                        {post.category}
                      </Badge>
                      <h4 className="font-display text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-zinc-400 dark:text-zinc-600">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          <div className="relative w-full sm:max-w-sm">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="input-glass w-full pl-10 pr-4 py-3"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'glass-card text-zinc-500 dark:text-zinc-500 hover:bg-accent/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((post) => (
            <motion.div key={post.id} variants={fadeInUp}>
              <GlassCard className="group h-full flex flex-col">
                <div className="overflow-hidden rounded-xl -m-[1px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex-1 flex flex-col">
                  <Badge variant="default" className="mb-2 self-start">
                    {post.category}
                  </Badge>
                  <h4 className="font-display font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 dark:text-zinc-600 pt-4 border-t border-white/[0.06]">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-center py-16"
          >
            <p className="text-zinc-500 dark:text-zinc-500 text-lg">
              No articles found. Try a different search or category.
            </p>
          </motion.div>
        )}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 lg:mt-20"
        >
          <GlassCard>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail('') }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white mb-1">
                  Stay Updated
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  Get the latest articles delivered to your inbox.
                </p>
              </div>
              <div className="flex w-full sm:w-auto gap-3">
                <div className="relative flex-1 sm:flex-initial">
                  <Mail
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="input-glass w-full sm:w-64 pl-10 pr-4 py-3"
                  />
                </div>
                <Button type="submit" icon={ArrowRight}>
                  Subscribe
                </Button>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
