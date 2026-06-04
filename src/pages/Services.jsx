import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import usePageSEO from '../hooks/usePageSEO'
import { pageMetadata } from '../utils/pageMetadata'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { services, packages } from '../data/services'
import { fadeInUp, stagger } from '../components/animations/variants'

export default function Services() {
  usePageSEO(pageMetadata.services)
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Services"
            title="What I Can Do For You"
            description="From architecting scalable iOS applications to optimizing performance — I bring deep Swift expertise and industry best practices to every project."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <GlassCard className="h-full group">
                    <div className="w-12 h-12 rounded-xl bg-accent/[0.08] flex items-center justify-center mb-5 group-hover:bg-accent/[0.12] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                      {service.description}
                    </p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Pricing"
            title="Choose Your Package"
            description="Flexible pricing tailored to your project scope. Each package is designed to deliver exceptional iOS experiences."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
          >
            {packages.map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                {pkg.popular && (
                  <div className="flex justify-center mb-3 relative z-10">
                    <Badge variant="success" className="px-4 py-1.5 text-xs font-semibold">
                      Popular
                    </Badge>
                  </div>
                )}
                <div className={`relative ${pkg.popular ? 'md:scale-105' : ''}`}>
                  <div className={`glass-card-static !rounded-2xl h-full flex flex-col p-6 sm:p-8 ${pkg.popular ? 'ring-1 ring-accent/40' : ''}`}>
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                        {pkg.name}
                      </h3>
                      <div className="text-4xl font-bold text-accent mb-2">
                        {pkg.price}
                      </div>
                      <p className="text-sm text-zinc-400 dark:text-zinc-500">
                        {pkg.description}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-500">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={pkg.popular ? 'primary' : 'outline'}
                      size="lg"
                      icon={ArrowRight}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
