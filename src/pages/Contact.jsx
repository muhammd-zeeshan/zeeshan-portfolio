import { motion } from 'framer-motion'
import { Mail, MessageCircle, MapPin, Calendar, Code2, AtSign, UserCheck } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import ContactForm from '../components/ui/ContactForm'
import { fadeInUp, stagger } from '../components/animations/variants'

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mehmetzeeshan5@gmail.com',
      href: 'mailto:mehmetzeeshan5@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+92 321 8929789',
      href: 'https://wa.me/923218929789',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
    },
  ]

  const socialLinks = [
    { icon: Code2, href: 'https://github.com/mehmetzeeshan', label: 'GitHub' },
    { icon: AtSign, href: 'https://twitter.com/mehmetzeeshan', label: 'Twitter' },
    { icon: UserCheck, href: 'https://www.linkedin.com/in/muhammad-zeeshan-392479370', label: 'LinkedIn' },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-container">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          description="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center mb-8 gap-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/[0.08] text-emerald-500 border border-emerald-500/[0.15] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <GlassCard>
              <ContactForm />
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <GlassCard key={item.label} hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/[0.08] flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-zinc-900 dark:text-zinc-100 font-medium hover:text-accent transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-zinc-900 dark:text-zinc-100 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}

            <GlassCard hover={false}>
              <h3 className="text-sm font-medium text-zinc-400 dark:text-zinc-500 mb-3">
                Social Links
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-zinc-500 dark:text-zinc-500 hover:text-accent transition-all duration-300"
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <h3 className="text-sm font-medium text-zinc-400 dark:text-zinc-500 mb-3">
                Schedule a Call
              </h3>
              <Button
                variant="secondary"
                icon={Calendar}
                href="https://calendly.com/mehmetzeeshan/30min"
                className="w-full"
              >
                Book a 30-min call
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
