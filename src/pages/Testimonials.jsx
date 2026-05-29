import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import { fadeInUp, stagger } from '../components/animations/variants'

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-container">
        <SectionHeader
          label="Testimonials"
          title="What People Say"
          description="Here's what clients and colleagues have to say about working with me."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={fadeInUp}>
              <GlassCard className="h-full flex flex-col">
                <div className="flex items-start gap-4 mb-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-white/10"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                      {t.name}
                    </h3>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <Quote size={28} className="text-accent/[0.12] shrink-0 hidden sm:block" />
                </div>

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-300/50 dark:text-zinc-700/50'}
                    />
                  ))}
                </div>

                <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
