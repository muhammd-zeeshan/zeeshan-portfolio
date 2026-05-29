import { motion } from 'framer-motion'

const variantStyles = {
  primary: 'btn-primary',
  secondary: 'btn-glass',
  ghost: 'btn-ghost',
  outline: 'btn-glass border border-white/[0.12] dark:border-white/[0.08] hover:bg-white/[0.06]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children, variant = 'primary', size = 'md', icon: Icon,
  className = '', href, ...props
}) {
  const classes = `${variantStyles[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.015 },
    whileTap: { scale: 0.985 },
    className: classes,
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps} {...props}>
        {Icon && <Icon size={18} />}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button {...motionProps} {...props}>
      {Icon && <Icon size={18} />}
      {children}
    </motion.button>
  )
}
