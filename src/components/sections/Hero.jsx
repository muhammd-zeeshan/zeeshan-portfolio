import { motion } from 'framer-motion'
import { ArrowRight, Send, Code2, Smartphone, AppWindow, Cpu, Globe, GitBranch } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { fadeInUp, stagger } from '../animations/variants'

const techIcons = [
  { icon: Code2, label: 'Swift' },
  { icon: Smartphone, label: 'SwiftUI' },
  { icon: AppWindow, label: 'UIKit' },
  { icon: Cpu, label: 'Xcode' },
  { icon: Globe, label: 'Firebase' },
  { icon: GitBranch, label: 'GitHub' },
]

const floatingShapes = [
  { size: 350, x: '5%', y: '10%', delay: 0, duration: 25, color: 'from-purple-500/15 to-purple-600/5' },
  { size: 250, x: '78%', y: '18%', delay: 2, duration: 30, color: 'from-blue-500/12 to-blue-600/5' },
  { size: 180, x: '88%', y: '70%', delay: 4, duration: 26, color: 'from-cyan-500/12 to-cyan-600/5' },
  { size: 280, x: '3%', y: '72%', delay: 1, duration: 22, color: 'from-emerald-500/8 to-emerald-600/5' },
  { size: 120, x: '50%', y: '85%', delay: 3, duration: 18, color: 'from-violet-500/15 to-violet-600/5' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      {/* Floating Shapes Background */}
      <div className="absolute inset-0 -z-10">
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-3xl`}
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
            }}
            animate={{
              x: [0, 40, -25, 50, 0],
              y: [0, -50, 25, -35, 0],
              scale: [1, 1.12, 0.92, 1.08, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <Badge variant="success" className="text-sm sm:text-base px-5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open for remote opportunities
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          className="text-gradient-glow text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.05] mb-4 sm:mb-6"
        >
          iOS Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-zinc-500 dark:text-zinc-500 font-light max-w-2xl mx-auto mb-10"
        >
          Building World-Class Mobile Experiences with Swift & SwiftUI
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link to="/projects">
            <Button variant="primary" size="lg" icon={ArrowRight}>
              View Projects
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" icon={Send}>
              Get in Touch
            </Button>
          </Link>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 sm:gap-7 flex-wrap">
          {techIcons.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-white/[0.12] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none" />
    </section>
  )
}
