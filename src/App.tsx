import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from '@components/pages/aboutPage'
import ServicePage from '@components/pages/servicePage'
import Header from '@components/sections/header'
import About from '@components/sections/about'
import Hero from '@components/sections/hero'
// import RecentProjects from '@components/sections/recentProjects'
import WorkingProcess from '@components/sections/workingProcess'
import SelectedWork from '@components/sections/selectedWork'
import Services from '@components/sections/services'
import Testimonials from '@components/sections/testimonials'
import Features from '@components/sections/features'
// import Pricing from '@components/sections/pricing'
import Faqs from '@components/sections/faqs'
import Booking from '@components/sections/booking'
import Footer from '@components/sections/footer'
import ScrollToTop from '@components/sections/scrollToTop'
import Preloader from '@components/ui/preloader'

const Home = () => (
  <main>
    <div className="hero-about-stack">
      <div className="hero-about-stack__hero">
        <Hero />
      </div>
      {/* <RecentProjects /> */}
      <About />
    </div>
    <SelectedWork />
    <Services />
    <WorkingProcess />
    <Features />
    {/* <Pricing /> */}
    <Faqs />
    <Testimonials />
    <Booking />
  </main>
)

const App = () => {
  const { pathname, hash } = useLocation()

  // scroll to a #section after navigating, or to the top on a new page
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 88 })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return (
    <>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
