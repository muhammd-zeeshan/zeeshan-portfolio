import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useThemeContext } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="relative w-11 h-11 rounded-xl glass-card-static flex items-center justify-center hover:bg-white/[0.08] transition-all duration-300 group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative"
      >
        <motion.div
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.3,
            y: isDark ? 0 : 8,
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Moon
            size={18}
            className="text-zinc-500 dark:text-zinc-400 group-hover:text-accent transition-colors duration-300"
          />
        </motion.div>
        <motion.div
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.3 : 1,
            y: isDark ? -8 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Sun
            size={18}
            className="text-zinc-500 dark:text-zinc-400 group-hover:text-accent transition-colors duration-300"
          />
        </motion.div>
      </motion.div>
    </button>
  )
}
