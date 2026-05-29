import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { fadeInUp } from '../components/animations/variants'

const floatingShapes = [
  { size: 60, x: '10%', y: '20%', delay: 0, duration: 6 },
  { size: 40, x: '80%', y: '15%', delay: 1, duration: 8 },
  { size: 80, x: '20%', y: '70%', delay: 2, duration: 7 },
  { size: 30, x: '75%', y: '65%', delay: 0.5, duration: 9 },
  { size: 50, x: '50%', y: '85%', delay: 1.5, duration: 6.5 },
  { size: 90, x: '85%', y: '80%', delay: 3, duration: 8 },
]

export default function NotFound() {
  return (
    <section className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden">
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/[0.03] dark:bg-accent/[0.06]"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-[10rem] sm:text-[14rem] font-display font-bold leading-none text-gradient-glow mb-4 select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-2 max-w-md mx-auto">
            The page you're looking for doesn't exist.
          </p>
          <p className="text-sm text-zinc-400 dark:text-zinc-600 mb-10 italic">
            Looks like this page is <span className="not-italic font-mono text-accent">out of scope</span> &mdash; even for an iOS engineer.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <Link to="/">
            <Button icon={Home}>
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            icon={ArrowLeft}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
