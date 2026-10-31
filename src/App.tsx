import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
const ContactPage = lazy(() => import('@components/pages/contactPage'))
const AboutPage = lazy(() => import('@components/pages/aboutPage'))
const ServicePage = lazy(() => import('@components/pages/servicePage'))
const PrivacyPage = lazy(() => import('@components/pages/privacyPage'))
const BlogPage = lazy(() => import('@components/pages/blogPage'))
const BlogPostPage = lazy(() => import('@components/pages/blogPostPage'))
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

import Preloader from '@components/ui/preloader'
import { useSeo } from '@/lib/useSeo'

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
  useSeo()

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
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/services" element={<Navigate to="/services/website-development" replace />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
      </Suspense>
      <Footer />
      <a
        className="zenorix-whatsapp-float"
        href="https://wa.me/917012977575"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Zenorix on WhatsApp"
        title="Message us on WhatsApp"
      >
        <span className="zenorix-whatsapp-float__label">Chat us</span>
        <i className="ri-whatsapp-line" aria-hidden="true" />
      </a>

    </>
  )
}

export default App
