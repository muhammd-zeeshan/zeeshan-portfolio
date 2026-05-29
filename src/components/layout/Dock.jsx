import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, User, FolderKanban, Briefcase, CalendarCheck, MessageCircle, Newspaper, Mail } from 'lucide-react'
import { cn } from '../../utils/cn'

const dockItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: User, label: 'About', path: '/about' },
  { icon: FolderKanban, label: 'Projects', path: '/projects' },
  { icon: Briefcase, label: 'Services', path: '/services' },
  { icon: CalendarCheck, label: 'Experience', path: '/experience' },
  { icon: MessageCircle, label: 'Testimonials', path: '/testimonials' },
  { icon: Newspaper, label: 'Blog', path: '/blog' },
  { icon: Mail, label: 'Contact', path: '/contact' },
]

export default function Dock() {
  const { pathname } = useLocation()

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.5 }}
      className="hidden lg:flex fixed bottom-6 inset-x-0 z-40 justify-center pointer-events-none"
    >
      <div className="glass-card-static !rounded-2xl px-3 py-2 flex items-center gap-1 pointer-events-auto shadow-2xl shadow-black/[0.03] dark:shadow-black/[0.15]">
        {dockItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'relative w-12 h-12 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all duration-300 group',
                isActive
                  ? 'text-accent'
                  : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
              )}
            >
              <Icon size={18} />
              <span className="text-[9px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
              {isActive && (
                <motion.span
                  layoutId="dock-indicator"
                  className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}
