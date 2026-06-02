import { motion } from 'framer-motion'
import { pageTransition } from '../components/animations/variants'
import usePageSEO from '../hooks/usePageSEO'
import { pageMetadata } from '../utils/pageMetadata'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import TechStack from '../components/sections/TechStack'
import ExperienceHighlights from '../components/sections/ExperienceHighlights'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  usePageSEO(pageMetadata.home)

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Hero />
      <Stats />
      <FeaturedProjects />
      <TechStack />
      <ExperienceHighlights />
      <CTASection />
    </motion.div>
  )
}
