export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default:
      'backdrop-blur-xl bg-accent/[0.08] text-accent border border-accent/[0.15]',
    success:
      'backdrop-blur-xl bg-emerald-500/[0.08] text-emerald-500 border border-emerald-500/[0.15]',
    warning:
      'backdrop-blur-xl bg-amber-500/[0.08] text-amber-600 dark:text-amber-400 border border-amber-500/[0.15]',
    glass:
      'backdrop-blur-xl bg-white/[0.06] text-zinc-900 dark:text-zinc-100 border border-white/[0.08]',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
