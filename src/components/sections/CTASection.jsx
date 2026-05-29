import { motion } from 'framer-motion'
import { Send, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import { fadeInUp } from '../animations/variants'

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-purple-500/8 via-blue-500/8 to-cyan-500/8 blur-3xl rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/8 to-transparent blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/8 to-transparent blur-2xl" />
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-3xl mx-auto"
      >
        <div className="glow-border">
          <div className="glass-card-static !rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              Let&apos;s Build Your Next iOS App
            </h2>
            <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-500 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
              I&apos;m open for remote opportunities and collaborations. Whether you&apos;re a startup or an enterprise, let&apos;s turn your app idea into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:mehmetzeeshan5@gmail.com">
                <Button variant="primary" size="lg" icon={Send}>
                  Start a Project
                </Button>
              </a>
              <a href="https://wa.me/923218929789" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" icon={MessageCircle}>
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
