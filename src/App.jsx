import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

// Lazy load pages for code splitting
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Services = lazy(() => import('./pages/Services'))
const Experience = lazy(() => import('./pages/Experience'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading...</p>
      </div>
    </div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="about"
              element={
                <Suspense fallback={<PageLoader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="projects"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path="services"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="experience"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Experience />
                </Suspense>
              }
            />
            <Route
              path="testimonials"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Testimonials />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="blog"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<PageLoader />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  )
}
