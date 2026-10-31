import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Keyboard, Navigation } from "swiper/modules"
import { useReducedMotion } from "framer-motion"
import "swiper/css"
import { MeshGradient } from "@paper-design/shaders-react"
import { featuresData } from "@utils/fackData/featuresData"

const stats = [
  { value: "4+", label: "Years of building" },
  { value: "50+", label: "Websites delivered" },
  { value: "20+", label: "Software delivered" },
  { value: "70+", label: "Satisfied clients" },
]

const whatWeDo = [
  { title: "Website Development", text: "Modern, responsive websites for businesses, startups and service providers." },
  { title: "E-commerce Development", text: "Online stores with product catalogues, payments and order management." },
  { title: "Software Development", text: "Custom software, dashboards and internal tools built around your workflow." },
  { title: "Mobile Application Development", text: "Smooth, practical mobile apps for your customers on Android and iOS." },
]

const journey = [
  {
    year: "2022",
    title: "Started on social media",
    text: "Zenorix began with no office and no walls, just Instagram and other social media. We shared our work, met businesses online and started building websites and digital designs one project at a time.",
  },
  {
    year: "2025",
    title: "A small house became our first office",
    text: "We took a small house and turned it into our first office. We set up a simple workspace, brought the team together and started handling every project from under one roof.",
  },
  {
    year: "2026",
    title: "A real office space, and scaling up",
    text: "We moved into a proper office space, scaled up our team and services, and kept moving towards bigger websites, software and mobile apps for startups and growing businesses.",
  },
]

const team = [
  { name: "Mohamed Afnan", role: "Co-founder", photo: "/images/about/person3.png" },
  { name: "Shamil Shan", role: "Co-founder, UI/UX Designer", photo: "/images/about/person4.png" },
  { name: "Nihad Hasni", role: "Digital Marketer, Co-founder", photo: "/images/about/team-black-suit.png" },
  { name: "Aswin KP", role: "Video Editor, Co-founder", photo: "/images/about/aswin-coat.png" },
  { name: "Aman Husain", role: "Fullstack Developer", photo: "/images/about/person2.png" },
  { name: "Ajmal PT", role: "Fullstack Developer", photo: "/images/about/person1.png" },
  { name: "Jinto Raj", role: "Fullstack Developer", photo: "/images/about/jinto-raj-color.png" },
]

const AboutPage = () => {
  const reducedMotion = useReducedMotion()
  return (
    <main className="zenorix-aboutpage">
      {/* 1. Intro */}
      <section className="zenorix-aboutpage__hero">
        <MeshGradient
          className="absolute inset-0 h-full w-full pointer-events-none"
          colors={["#07050d", "#160b25", "#2a183f", "#39234f", "#0d0718", "#241138", "#080510"]}
          speed={0.35}
        />
        <MeshGradient
          className="absolute inset-0 h-full w-full opacity-45 mix-blend-screen pointer-events-none"
          colors={["#090510", "#201035", "#3b1e59", "#4d3067", "#11081d", "#562b73", "#170b29"]}
          speed={0.28}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,3,10,.35)_0%,rgba(5,3,10,.25)_52%,rgba(4,2,8,.45)_100%)]" />


        <div className="zenorix-aboutpage__inner">
          <p className="zenorix-about__label zenorix-aboutpage__pill">
            <i className="ri-arrow-right-up-line" aria-hidden="true" />About us
          </p>
          <h1>About Us</h1>
          <p className="zenorix-aboutpage__lead">
            Zenorix is a digital solutions company helping startups and growing businesses build a strong
            digital presence. We develop high-performing websites, custom software, and mobile applications,
            combining creative design with modern technology to deliver practical, scalable solutions.
            Our goal is simple: help businesses grow through technology.
          </p>
        </div>
      </section>

      {/* 2. Who we are, what we do, stats */}
      <section className="zenorix-aboutpage__section">
        <div className="zenorix-aboutpage__inner">
          <div className="zenorix-aboutpage__head">
            <p className="zenorix-about__label zenorix-aboutpage__pill">
              <i className="ri-arrow-right-up-line" aria-hidden="true" />What we do
            </p>
            <h2>Websites, software and apps built for growth</h2>
          </div>
          <div className="zenorix-aboutpage__grid zenorix-aboutpage__grid--4">
            {whatWeDo.map(({ title, text }) => (
              <article className="zenorix-aboutpage__card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="zenorix-aboutpage__stats">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="zenorix-aboutpage__section zenorix-aboutpage__journey" aria-labelledby="journey-title">
        <div className="zenorix-aboutpage__inner">
          <div className="zenorix-aboutpage__head">
            <p className="zenorix-about__label zenorix-aboutpage__pill">
              <i className="ri-arrow-right-up-line" aria-hidden="true" />Our journey
            </p>
            <h2 id="journey-title">From a social media feed to a growing digital studio</h2>
            <p className="zenorix-aboutpage__journey-lead">
              Every great building starts with a single brick. Zenorix started the same way, small and
              simple, with one idea, one post and one client at a time. Here is how a web design and
              software company in Kozhikode, Kerala grew from an Instagram page into an office of its own.
            </p>
          </div>
        </div>
        <ol className="zenorix-aboutpage__timeline">
          {journey.map(({ year, title, text }) => (
            <li key={year}>
              <time dateTime={year}>{year}</time>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <div className="zenorix-aboutpage__inner">
          <p className="zenorix-aboutpage__journey-next">
            <strong>What’s next?</strong> We are still building, with a bigger team, bigger projects and the
            same promise we made in 2022: help businesses grow through technology.
          </p>
        </div>
      </section>

      {/* 4. Vision, mission & value */}
      <section className="zenorix-aboutpage__section zenorix-aboutpage__section--dark">
        <div className="zenorix-aboutpage__inner zenorix-aboutpage__vm">
          <h2>Empowering Businesses to Grow<br />Through Technology</h2>
          <div className="zenorix-aboutpage__vm-list">
            <div>
              <h3>Our Vision</h3>
              <p>
                To be a trusted digital partner for startups and growing businesses, helping every product
                we build open real opportunities for growth.
              </p>
            </div>
            <div>
              <h3>Our Mission</h3>
              <p>
                To turn ideas into practical, scalable digital solutions by combining creative design with
                modern technology, so businesses can launch, learn and grow with confidence.
              </p>
            </div>
            <div>
              <h3>Our Value</h3>
              <p>
                Clear communication, transparent pricing and work built around your goals, because we
                only win when our clients win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why choose Zenorix (same cards as the home page) */}
      <section className="zenorix-aboutpage__section zenorix-aboutpage__why">
        <div className="zenorix-aboutpage__inner">
          <div className="zenorix-aboutpage__head zenorix-aboutpage__head--center">
            <p className="zenorix-about__label zenorix-aboutpage__pill">
              <i className="ri-arrow-right-up-line" aria-hidden="true" />Why Us?
            </p>
            <h2>Why Businesses Trust Us ?</h2>
            <p>
              We deliver smart, reliable, and affordable digital solutions to help your business grow.
              Here’s why clients love working with us:
            </p>
          </div>
          <div className="zenorix-aboutpage__why-grid">
            {featuresData.map(({ id, title, description }) => (
              <article className="zenorix-aboutpage__why-card" key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. People */}
      <section className="zenorix-aboutpage__section">
        <div className="zenorix-aboutpage__inner">
          <div className="zenorix-aboutpage__head">
            <p className="zenorix-about__label zenorix-aboutpage__pill">
              <i className="ri-arrow-right-up-line" aria-hidden="true" />Our people
            </p>
            <h2>The people behind Zenorix</h2>
          </div>
          <Swiper
            className="zenorix-aboutpage__team-slider"
            modules={[A11y, Autoplay, Keyboard, Navigation]}
            slidesPerView={1.15}
            spaceBetween={20}
            breakpoints={{ 480: { slidesPerView: 2 }, 900: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } }}
            navigation
            keyboard={{ enabled: true, onlyInViewport: true }}
            autoplay={reducedMotion ? false : { delay: 3500, pauseOnMouseEnter: true, disableOnInteraction: true }}
            rewind
            speed={reducedMotion ? 0 : 600}
            aria-label="Zenorix team"
          >
            {team.map(({ name, role, photo }) => (
              <SwiperSlide key={photo}>
                <article className="zenorix-aboutpage__person">
                  <div className="zenorix-aboutpage__person-photo">
                    <img src={photo} alt={name} loading="lazy" />
                  </div>
                  <h3>{name}</h3>
                  <p>{role}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 7. Call / message CTA */}
      <section className="zenorix-aboutpage__cta">
        <div className="zenorix-aboutpage__inner">
          <h2>Ready to start your project?</h2>
          <p>Call us or send a message and our team will get back to you shortly.</p>
          <div className="zenorix-aboutpage__cta-actions">
            <a href="tel:+916282878105" className="zenorix-aboutpage__btn zenorix-aboutpage__btn--light">
              <i className="ri-phone-line" aria-hidden="true" /> Call +91 62828 78105
            </a>
            <a
              href="https://wa.me/916282878105?text=I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="zenorix-aboutpage__btn"
            >
              <i className="ri-whatsapp-line" aria-hidden="true" /> Message on WhatsApp
            </a>
            <a href="mailto:zenorix.digitals@gmail.com" className="zenorix-aboutpage__btn">
              <i className="ri-mail-line" aria-hidden="true" /> Email us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
