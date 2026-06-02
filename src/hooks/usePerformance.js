import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Hook to lazily load images with blur placeholder
 * Improves perceived performance and user experience
 */
export const useImageLazyLoad = () => {
  const [imageSrc, setImageSrc] = useState(null)
  const [imageRef, setImageRef] = useState(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (!imageRef) return

    // Use Intersection Observer for performance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.dataset.src
            
            if (src && !imageSrc) {
              const image = new Image()
              image.onload = () => {
                setImageSrc(src)
                img.classList.add('loaded')
              }
              image.src = src
            }
            observerRef.current?.unobserve(img)
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    )

    observerRef.current.observe(imageRef)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [imageRef, imageSrc])

  return [setImageRef, imageSrc]
}

/**
 * Hook to measure and report Core Web Vitals
 */
export const useCoreWebVitals = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const isDev = typeof process !== 'undefined' && process.env?.NODE_ENV === 'development'

    // Largest Contentful Paint (LCP)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      if (isDev) {
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime)
      }
    })
    observer.observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (isDev) {
          console.log('FID:', entry.processingDuration)
        }
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    return () => {
      observer.disconnect()
      fidObserver.disconnect()
    }
  }, [])
}

/**
 * Hook for smooth scroll behavior
 */
export const useSmoothScroll = () => {
  const handleSmoothScroll = useCallback((elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return handleSmoothScroll
}

/**
 * Hook to debounce function calls
 * Useful for scroll, resize, and input events
 */
export const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

/**
 * Hook for throttling function calls
 */
export const useThrottle = (callback, delay = 300) => {
  const timeoutRef = useRef(null)
  // eslint-disable-next-line react-hooks/purity
  const lastRunRef = useRef(Date.now())

  return useCallback(
    (...args) => {
      const now = Date.now()
      const timeSinceLastRun = now - lastRunRef.current

      if (timeSinceLastRun >= delay) {
        callback(...args)
        lastRunRef.current = now
      } else {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          callback(...args)
          lastRunRef.current = Date.now()
        }, delay - timeSinceLastRun)
      }
    },
    [callback, delay]
  )
}

/**
 * Hook to prefetch resources
 */
export const usePrefetch = (url) => {
  useEffect(() => {
    if (!url) return
    
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = url
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [url])
}
