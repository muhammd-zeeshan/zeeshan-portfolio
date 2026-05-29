import { Link } from 'react-router-dom'
import { Code2, MessageCircle, UserCheck } from 'lucide-react'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const services = [
  { name: 'iOS Development', path: '/services' },
  { name: 'SwiftUI Development', path: '/services' },
  { name: 'App Architecture', path: '/services' },
  { name: 'Consultation', path: '/services' },
]

const socialLinks = [
  { name: 'GitHub', icon: Code2, href: 'https://github.com/mehmetzeeshan' },
  { name: 'Twitter', icon: MessageCircle, href: 'https://twitter.com/mehmetzeeshan' },
  { name: 'LinkedIn', icon: UserCheck, href: 'https://www.linkedin.com/in/muhammad-zeeshan-392479370' },
]

export default function Footer() {
  return (
    <footer className="relative mt-auto">
      <div className="bg-white/[0.02] border-t border-white/[0.06] backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center shadow-lg shadow-accent/20">
                  <span className="text-white font-bold text-sm tracking-tight">MZ</span>
                </div>
                <span className="font-semibold text-sm text-zinc-900 dark:text-white">
                  Muhammad Zeeshan
                </span>
              </Link>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed mb-4 max-w-xs">
                iOS Developer specializing in Swift, SwiftUI, and Apple ecosystem frameworks. Building world-class mobile experiences from Lahore, Pakistan.
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-600 font-medium">
                Available for remote opportunities worldwide
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-4">Navigation</h3>
              <ul className="space-y-2.5">
                {navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-zinc-500 dark:text-zinc-500 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-4">Services</h3>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-sm text-zinc-500 dark:text-zinc-500 hover:text-accent transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-4">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-zinc-500 dark:text-zinc-500 hover:text-accent transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-zinc-400 dark:text-zinc-600">
            &copy; {new Date().getFullYear()} Muhammad Zeeshan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
