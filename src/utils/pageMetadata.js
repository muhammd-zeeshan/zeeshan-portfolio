/**
 * SEO Configuration for each page
 */

export const pageMetadata = {
  home: {
    title: 'Muhammad Zeeshan - iOS Developer | Mobile App Engineer',
    description: 'iOS Developer & Mobile App Engineer with 3+ years of expertise in Swift, SwiftUI, UIKit, and Apple ecosystem frameworks. Building production-grade iOS applications.',
    keywords: 'iOS Developer, SwiftUI, UIKit, Swift, Mobile App Development, iOS Engineer, App Development',
    url: 'https://muhammadzeeshan.dev/',
    type: 'website'
  },
  about: {
    title: 'About Me - Muhammad Zeeshan | iOS Developer',
    description: 'Learn about my journey as an iOS developer, expertise in Swift, SwiftUI, and Apple frameworks. 3+ years of experience building production-grade applications.',
    keywords: 'iOS Developer, About, Swift, SwiftUI, UIKit, Mobile Development, Resume, Experience',
    url: 'https://muhammadzeeshan.dev/about',
    type: 'profile'
  },
  projects: {
    title: 'Projects - Muhammad Zeeshan | iOS App Development Portfolio',
    description: 'Explore my portfolio of iOS applications including BMZ Wallet, Wallpics, WorkAware, K9Sky, and more. Real-world production apps with millions of users.',
    keywords: 'iOS Projects, App Portfolio, Swift Apps, SwiftUI Applications, Mobile Development, iOS Case Studies',
    url: 'https://muhammadzeeshan.dev/projects',
    type: 'website'
  },
  services: {
    title: 'Services - iOS Development & Mobile App Engineering',
    description: 'Professional iOS development services including app development, consultation, architecture design, and optimization using Swift, SwiftUI, and Apple frameworks.',
    keywords: 'iOS Development, App Development Services, Swift Development, Mobile App Engineering, iOS Consulting',
    url: 'https://muhammadzeeshan.dev/services',
    type: 'service'
  },
  experience: {
    title: 'Experience - Muhammad Zeeshan | iOS Developer Work History',
    description: 'View my professional experience, career timeline, and expertise in iOS development with proven track record of building successful applications.',
    keywords: 'Experience, Work History, iOS Development, Career, Professional Background, Expertise',
    url: 'https://muhammadzeeshan.dev/experience',
    type: 'profile'
  },
  testimonials: {
    title: 'Testimonials - Muhammad Zeeshan | Client Reviews',
    description: 'Read testimonials and reviews from clients and colleagues about my iOS development work and professional services.',
    keywords: 'Testimonials, Reviews, Client Feedback, Recommendations, iOS Development Reviews',
    url: 'https://muhammadzeeshan.dev/testimonials',
    type: 'website'
  },
  contact: {
    title: 'Contact - Muhammad Zeeshan | Get in Touch',
    description: 'Contact me for iOS development services, consultation, or collaboration opportunities. Reach out via email, LinkedIn, or GitHub.',
    keywords: 'Contact, Get in Touch, Email, Consultation, Collaboration, iOS Development Services',
    url: 'https://muhammadzeeshan.dev/contact',
    type: 'website'
  },
  blog: {
    title: 'Blog - Muhammad Zeeshan | iOS Development Articles & Tips',
    description: 'Read articles, tips, and insights about iOS development, Swift programming, SwiftUI, and best practices for building high-quality applications.',
    keywords: 'Blog, iOS Development, Swift Tips, SwiftUI Tutorial, Mobile Development Articles, iOS Best Practices',
    url: 'https://muhammadzeeshan.dev/blog',
    type: 'blog'
  },
  notfound: {
    title: '404 - Page Not Found | Muhammad Zeeshan',
    description: 'The page you are looking for does not exist. Please check the URL or navigate back to the home page.',
    keywords: '404, Not Found, Error Page',
    url: 'https://muhammadzeeshan.dev/404',
    type: 'website'
  }
}

export const getPageMetadata = (page) => {
  return pageMetadata[page] || pageMetadata.home
}
