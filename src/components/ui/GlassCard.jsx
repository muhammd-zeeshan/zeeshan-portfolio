import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, glow = false, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -3, scale: 1.005 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`relative ${glow ? 'glow-border' : ''} ${className}`}
      {...props}
    >
      <div className={`glass-card h-full ${hover ? 'hover:shadow-2xl hover:shadow-accent/5' : ''}`}>
        {children}
      </div>
    </motion.div>
  )
}
