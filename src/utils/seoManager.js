/**
 * SEO Meta Tag Manager
 * Dynamically updates page meta tags for proper SEO and social sharing
 */

export const updateMetaTags = (metadata) => {
  const {
    title = 'Muhammad Zeeshan - iOS Developer',
    description = 'iOS Developer with 3+ years of expertise in Swift, SwiftUI, UIKit, and Apple ecosystem frameworks.',
    keywords = 'iOS Developer, SwiftUI, UIKit, Swift, Mobile App Development',
    url = 'https://muhammadzeeshan.dev',
    image = 'https://muhammadzeeshan.dev/og-image.png',
    type = 'website',
    author = 'Muhammad Zeeshan'
  } = metadata

  // Update document title
  document.title = title

  // Update or create meta tags
  updateMetaTag('description', description)
  updateMetaTag('keywords', keywords)
  updateMetaTag('author', author)
  updateMetaTag('og:title', title, 'property')
  updateMetaTag('og:description', description, 'property')
  updateMetaTag('og:url', url, 'property')
  updateMetaTag('og:image', image, 'property')
  updateMetaTag('og:type', type, 'property')
  updateMetaTag('twitter:title', title)
  updateMetaTag('twitter:description', description)
  updateMetaTag('twitter:image', image)
  updateMetaTag('twitter:card', 'summary_large_image')

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url
}

const updateMetaTag = (name, content, attribute = 'name') => {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }
  tag.content = content
}

export const addStructuredData = (schema) => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.innerHTML = JSON.stringify(schema)
  document.head.appendChild(script)
}

export const createPersonSchema = (person) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name || 'Muhammad Zeeshan',
    url: person.url || 'https://muhammadzeeshan.dev',
    image: person.image || 'https://muhammadzeeshan.dev/og-image.png',
    jobTitle: person.jobTitle || 'iOS Developer',
    sameAs: person.sameAs || [
      'https://www.linkedin.com/in/muhammad-zeeshan-392479370',
      'https://github.com/mehmetzeeshan',
      'https://twitter.com/mehmetzeeshan'
    ],
    email: person.email || 'mehmetzeeshan5@gmail.com'
  }
}

export const createBreadcrumbSchema = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export const createProjectSchema = (project) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    image: project.image,
    url: project.url,
    author: {
      '@type': 'Person',
      name: 'Muhammad Zeeshan'
    },
    applicationCategory: 'Productivity',
    ...(project.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: project.rating,
        ratingCount: project.ratingCount || 1
      }
    })
  }
}
