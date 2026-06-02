/**
 * Utility to optimize Framer Motion animations for performance
 * Reduces motion for users who prefer it
 * Uses GPU-accelerated properties
 */

export const getAnimationConfig = (prefersReducedMotion = false) => {
  if (prefersReducedMotion) {
    return {
      duration: 0,
      transition: { duration: 0 }
    }
  }

  return {
    duration: 0.3,
    ease: 'easeInOut'
  }
}

/**
 * Common animation variants optimized for performance
 * Uses transform and opacity instead of layout properties
 */
export const optimizedVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  slideInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 }
  }
}

/**
 * Container variants for staggered animations
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

/**
 * Item variants for use with container
 */
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

/**
 * Hover animation optimized for performance
 */
export const hoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  }
}

/**
 * Tap animation for mobile and touch devices
 */
export const tapVariants = {
  rest: { scale: 1 },
  tap: { scale: 0.95 }
}
