import { Outlet } from 'react-router-dom'
import ScrollProgress from './ScrollProgress'
import Navbar from './Navbar'
import Dock from './Dock'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-grid-subtle">
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-noise pointer-events-none -z-10" />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Dock />
      <Footer />
    </div>
  )
}
