import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

const toastConfig = {
  success: {
    icon: CheckCircle,
    class: 'bg-emerald-500/[0.08] border-emerald-500/[0.2] text-emerald-500',
  },
  error: {
    icon: XCircle,
    class: 'bg-red-500/[0.08] border-red-500/[0.2] text-red-500',
  },
}

export default function Toast({ message, type = 'success', isVisible, onClose, duration = 5000 }) {
  const config = toastConfig[type]
  const Icon = config.icon

  useEffect(() => {
    if (!isVisible) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [isVisible, onClose, duration])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-md"
        >
          <div className={`${config.class} backdrop-blur-2xl border rounded-2xl px-5 py-4 shadow-2xl shadow-black/[0.06] dark:shadow-black/[0.3]`}>
            <div className="flex items-center gap-3">
              <Icon size={20} className="shrink-0" />
              <p className="text-sm font-medium flex-1">{message}</p>
              <button
                onClick={onClose}
                className="shrink-0 p-1 rounded-lg hover:bg-white/[0.06] transition-colors"
              >
                <X size={16} className="text-zinc-400" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
