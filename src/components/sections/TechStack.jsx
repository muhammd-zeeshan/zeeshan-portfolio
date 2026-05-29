import { motion } from 'framer-motion'

const technologies = [
  'Swift', 'SwiftUI', 'UIKit', 'WidgetKit', 'SiriKit',
  'StoreKit', 'MetalKit', 'AVFoundation', 'Swift Charts', 'SwiftData',
  'MVVM', 'REST APIs', 'WebSockets', 'Firebase', 'GitHub',
  'React.js', 'Xcode', 'Figma',
]

export default function TechStack() {
  const duplicated = [...technologies, ...technologies]

  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-5"
        >
          <span className="w-6 h-px bg-accent/40" />
          Technologies
          <span className="w-6 h-px bg-accent/40" />
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          Tools & Technologies I Use
        </motion.h2>
      </div>

      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-3 sm:gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicated.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="glass-card-static flex-shrink-0 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap hover:bg-white/[0.1] transition-colors"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
