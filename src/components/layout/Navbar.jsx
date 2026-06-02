import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../../utils/cn'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Experience', path: '/experience' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)  // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled ? 'glass-nav-solid' : 'glass-nav'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
              <span className="text-white font-bold text-sm tracking-tight">MZ</span>
            </div>
            <span className="font-semibold text-sm text-zinc-900 dark:text-white hidden sm:block">
              Muhammad Zeeshan
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'text-accent'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white/[0.04]'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-accent/[0.08] border border-accent/[0.15]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-white/[0.04] transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1 bg-white/[0.7] dark:bg-zinc-950/[0.7] backdrop-blur-2xl border-t border-white/[0.06]">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300',
                        isActive
                          ? 'text-accent bg-accent/[0.08] border border-accent/[0.15]'
                          : 'text-zinc-500 dark:text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-900 dark:hover:text-zinc-100'
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
