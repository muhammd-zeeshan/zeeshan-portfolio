/**
 * Performance monitoring utility
 * Tracks metrics like LCP, FID, CLS for performance optimization
 */

export class PerformanceMonitor {
  constructor() {
    this.metrics = {}
    this.observers = []
    // eslint-disable-next-line no-undef
    this.isDev = typeof process !== 'undefined' && process.env?.NODE_ENV === 'development'
  }

  /**
   * Initialize performance monitoring
   */
  init() {
    this.observeLCP()
    this.observeFID()
    this.observeCLS()
    this.observeNavigation()
  }

  /**
   * Observe Largest Contentful Paint (LCP)
   * Measures when the largest content element is painted
   */
  observeLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        this.metrics.LCP = lastEntry.renderTime || lastEntry.loadTime

        if (this.isDev) {
          console.log('📊 LCP:', Math.round(this.metrics.LCP), 'ms')
        }
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'], buffered: true })
      this.observers.push(observer)
    } catch {
      console.warn('LCP observer not supported')
    }
  }

  /**
   * Observe First Input Delay (FID)
   * Measures interactivity responsiveness
   */
  observeFID() {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          this.metrics.FID = entry.processingDuration

          if (this.isDev) {
            console.log('📊 FID:', Math.round(this.metrics.FID), 'ms')
          }
        })
      })
      observer.observe({ entryTypes: ['first-input'], buffered: true })
      this.observers.push(observer)
    } catch {
      console.warn('FID observer not supported')
    }
  }

  /**
   * Observe Cumulative Layout Shift (CLS)
   * Measures visual stability
   */
  observeCLS() {
    try {
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            this.metrics.CLS = clsValue

            if (this.isDev) {
              console.log('📊 CLS:', this.metrics.CLS.toFixed(3))
            }
          }
        })
      })
      observer.observe({ entryTypes: ['layout-shift'], buffered: true })
      this.observers.push(observer)
    } catch {
      console.warn('CLS observer not supported')
    }
  }

  /**
   * Observe Navigation Timing
   * Measures page load performance
   */
  observeNavigation() {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          this.metrics.navigationTiming = {
            DNS: entry.domainLookupEnd - entry.domainLookupStart,
            TCP: entry.connectEnd - entry.connectStart,
            TTFB: entry.responseStart - entry.requestStart,
            Download: entry.responseEnd - entry.responseStart,
            DOMParse: entry.domInteractive - entry.domLoading,
            DOMContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
            Load: entry.loadEventEnd - entry.loadEventStart
          }

          if (this.isDev) {
            console.log('📊 Navigation Timing:', this.metrics.navigationTiming)
          }
        })
      })
      observer.observe({ entryTypes: ['navigation'], buffered: true })
      this.observers.push(observer)
    } catch {
      console.warn('Navigation observer not supported')
    }
  }

  /**
   * Get all collected metrics
   */
  getMetrics() {
    return this.metrics
  }

  /**
   * Report metrics to analytics service
   */
  reportMetrics(endpoint) {
    const metrics = this.getMetrics()
    if (Object.keys(metrics).length === 0) return

    // Send to analytics endpoint
    navigator.sendBeacon(endpoint, JSON.stringify(metrics))

    if (this.isDev) {
      console.log('📤 Metrics reported:', metrics)
    }
  }

  /**
   * Cleanup observers
   */
  disconnect() {
    this.observers.forEach((observer) => observer.disconnect())
    this.observers = []
  }
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor()
