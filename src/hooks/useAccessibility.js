import { useEffect } from 'react'

/**
 * Hook to improve accessibility
 * Adds focus trap, keyboard navigation, and ARIA labels
 */
export const useAccessibility = () => {
  useEffect(() => {
    // Add keyboard shortcut help
    const handleKeyPress = (e) => {
      // Skip modifier keys and text input elements
      if (e.ctrlKey || e.metaKey || e.altKey) return
      if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.contentEditable === 'true'
      ) {
        return
      }

      // ? for help (optional)
      if (e.key === '?') {
        console.log('Keyboard shortcuts available')
      }

      // / for search (optional)
      if (e.key === '/') {
        e.preventDefault()
        // Focus search input if available
        const searchInput = document.querySelector('[data-search]')
        if (searchInput) {
          searchInput.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])
}

/**
 * Hook to handle focus management
 * Useful for modals and dropdowns
 */
export const useFocusManager = (containerRef) => {
  useEffect(() => {
    if (!containerRef?.current) return

    const focusableElements = containerRef.current.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('keydown', handleKeyDown)
      return () => container.removeEventListener('keydown', handleKeyDown)
    }
  }, [containerRef])
}

/**
 * Hook to respect prefers-reduced-motion preference
 */
export const usePrefersReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  return prefersReducedMotion
}

/**
 * Hook to announce changes to screen readers
 */
export const useAnnounce = () => {
  const announce = (message, priority = 'polite') => {
    const announcement = document.createElement('div')
    announcement.setAttribute('role', 'status')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      announcement.remove()
    }, 1000)
  }

  return announce
}
