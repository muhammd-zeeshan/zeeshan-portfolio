import { Code2, Building2, Cpu, AppWindow, Cloud, Shield, Palette, Zap, GitBranch, Users } from 'lucide-react'

export const services = [
  {
    icon: Code2,
    title: 'iOS App Development',
    description: 'End-to-end native iOS application development from concept to App Store launch. Building premium, scalable, and maintainable Swift applications.',
  },
  {
    icon: AppWindow,
    title: 'SwiftUI Development',
    description: 'Modern declarative UI development with SwiftUI. Building responsive, adaptive interfaces that leverage the latest iOS capabilities and design patterns.',
  },
  {
    icon: Building2,
    title: 'UIKit Development',
    description: 'Expert UIKit development with programmatic UI, Auto Layout, and custom transitions. Building complex interfaces with proven MVC/MVVM architectures.',
  },
  {
    icon: GitBranch,
    title: 'App Architecture',
    description: 'Designing scalable architectures using MVVM, VIPER, TCA, or Clean Architecture. Ensuring testability, maintainability, and performance from the ground up.',
  },
  {
    icon: Cloud,
    title: 'App Store Deployment',
    description: 'Complete App Store deployment including TestFlight testing, App Store Connect management, CI/CD pipelines, and submission optimization for faster approvals.',
  },
  {
    icon: Cpu,
    title: 'API Integration',
    description: 'Seamless RESTful and GraphQL API integration with robust networking layers, caching strategies, offline support, and real-time synchronization.',
  },
  {
    icon: Shield,
    title: 'Firebase Integration',
    description: 'Full Firebase suite integration including Authentication, Firestore, Cloud Functions, Push Notifications, Analytics, and Crashlytics for production apps.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Deep performance profiling and optimization including launch time reduction, memory management, battery optimization, and smooth 120fps scrolling.',
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    description: 'Pixel-perfect implementation of design systems, custom animations, micro-interactions, and accessibility features following Apple HIG guidelines.',
  },
  {
    icon: Users,
    title: 'Consultation Services',
    description: 'Technical consultation for architecture review, code audits, technology selection, team mentoring, and iOS development best practices guidance.',
  },
]

export const packages = [
  {
    name: 'Essential',
    price: '$2,499',
    description: 'Perfect for startups and small projects',
    features: [
      'Single iOS app development',
      'Up to 5 screens',
      'Basic API integration',
      'SwiftUI or UIKit',
      'App Store submission',
      '2 weeks delivery',
      '1 revision round',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$6,999',
    description: 'For growing businesses and complex apps',
    features: [
      'Full iOS app development',
      'Up to 15 screens',
      'Advanced API integration',
      'Firebase setup',
      'Push notifications',
      'Analytics integration',
      'App Store optimization',
      '4 weeks delivery',
      '3 revision rounds',
      '30 days support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale applications and teams',
    features: [
      'Custom iOS solution',
      'Unlimited screens',
      'Complex architecture',
      'CI/CD pipeline',
      'Performance optimization',
      'Security audit',
      'Team training',
      'Priority support',
      'Ongoing maintenance',
      'Dedicated PM',
    ],
    popular: false,
  },
]
