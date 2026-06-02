import { forwardRef } from 'react'
import { cn } from '../utils/cn'

/**
 * Optimized button component with smooth interactions
 * Uses transform and opacity for GPU acceleration
 */
export const OptimizedButton = forwardRef(
  ({ children, variant = 'primary', className, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 will-change-transform focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variants = {
      primary:
        'bg-accent text-white hover:shadow-lg hover:scale-105 active:scale-95 focus:ring-offset-zinc-950 dark:focus:ring-offset-zinc-950',
      secondary:
        'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:shadow-md hover:scale-105 active:scale-95',
      outline:
        'border-2 border-accent text-accent hover:bg-accent/10 active:scale-95'
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

OptimizedButton.displayName = 'OptimizedButton'

export default OptimizedButton
