import { motion } from 'framer-motion'
import { fadeInUp } from '../animations/variants'

export default function SectionHeader({ label, title, description, align = 'center' }) {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left'

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 ${alignClasses}`}
    >
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-5">
          <span className="w-6 h-px bg-accent/40" />
          {label}
          <span className="w-6 h-px bg-accent/40" />
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-zinc-500 dark:text-zinc-500 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}
