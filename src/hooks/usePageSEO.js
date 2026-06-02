import { useEffect } from 'react'
import { updateMetaTags } from '../utils/seoManager'

/**
 * Hook to update SEO meta tags on page load
 * Usage: usePageSEO(pageMetadata)
 */
export const usePageSEO = (metadata) => {
  useEffect(() => {
    if (metadata) {
      updateMetaTags(metadata)
      
      // Scroll to top on page change
      window.scrollTo(0, 0)
    }
  }, [metadata])
}

export default usePageSEO
