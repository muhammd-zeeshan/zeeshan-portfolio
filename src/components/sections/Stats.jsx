import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { achievements } from '../../data/experience'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeInUp, stagger } from '../animations/variants'

function AnimatedCounter({ value, isVisible }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const num = parseInt(value.replace(/[^0-9]/g, ''))
    const suffix = value.replace(/[0-9]/g, '')
    const duration = 2000
    const steps = 60
    const increment = num / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), num)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  const num = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
      >
        {achievements.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="glass-card p-6 sm:p-8 text-center group"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 font-display">
              <AnimatedCounter value={stat.value} isVisible={isVisible} />
            </div>
            <div className="text-sm sm:text-base text-zinc-500 dark:text-zinc-500 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
