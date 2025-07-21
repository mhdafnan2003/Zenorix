import Header from '@components/sections/header'
import About from '@components/sections/about'
import Hero from '@components/sections/hero'
import Partners from '@components/sections/partners'
import RecentProjects from '@components/sections/recentProjects'
import WorkingProcess from '@components/sections/workingProcess'
import Services from '@components/sections/services'
import Projects from '@components/sections/projects'
import Testimonials from '@components/sections/testimonials'
import Features from '@components/sections/features'
import Pricing from '@components/sections/pricing'
import Faqs from '@components/sections/faqs'
import Booking from '@components/sections/booking'
import Footer from '@components/sections/footer'
import ScrollToTop from '@components/sections/scrollToTop'
import Preloader from '@components/ui/preloader'

const App = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <RecentProjects />
        <Partners />
        <About />
        <WorkingProcess />
        <Services />
        <Projects />
        <Testimonials />
        <Features />
        <Pricing />
        <Faqs />
        <Booking />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App