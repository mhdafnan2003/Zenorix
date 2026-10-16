import { useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { servicePages } from "./servicePageData"

// Filtered project list reused across all service pages
const works = [
  {
    title: "BM Aesthetique",
    tagline: "Premium skin care, made simple to shop",
    image: "/images/projects/bm-aesthetique.png",
    year: "2026",
    service: "E-commerce Development",
    link: "https://www.bmaesthetique.com/",
  },
  {
    title: "Nivo Concepts",
    tagline: "Beyond walls, beyond expectations",
    image: "/images/projects/nivo-concepts.png",
    year: "2026",
    service: "Web Design & Development",
    link: "https://www.nivoconcepts.com/",
  },
  {
    title: "3Dots Advertising",
    tagline: "Printing press & branding solutions, Abu Dhabi",
    image: "/images/projects/3dots-advertising.png",
    year: "2026",
    service: "Web Design & Development",
    link: "https://www.3dotsadv.ae/",
  },
]

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const data = servicePages.find((p) => p.slug === slug)
  const [openFaq, setOpenFaq] = useState<string | null>(data?.faqs[0].id ?? null)

  if (!data) return <Navigate to="/" replace />

  return (
    <main className="zenorix-svcpage">
      {/* ── SEO Meta (injected inline via effect would be ideal; for now we use the title) ── */}

      {/* 1. HERO */}
      <section className="zenorix-svcpage__hero" aria-labelledby="svc-hero-title">
        <div className="zenorix-svcpage__inner">
          <p className="zenorix-about__label zenorix-svcpage__pill">
            <i className="ri-arrow-right-up-line" aria-hidden="true" />Services
          </p>
          <h1 id="svc-hero-title">{data.heroTitle}</h1>
          <p className="zenorix-svcpage__lead">{data.heroSubtitle}</p>
          <div className="zenorix-svcpage__hero-actions">
            <a href="tel:+916282878105" className="zenorix-svcpage__btn zenorix-svcpage__btn--light">
              <i className="ri-phone-line" aria-hidden="true" /> Book a Free Call
            </a>
            <a
              href="https://wa.me/916282878105?text=I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="zenorix-svcpage__btn"
            >
              <i className="ri-whatsapp-line" aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICES WE OFFER */}
      <section className="zenorix-svcpage__section" aria-labelledby="svc-offer-title">
        <div className="zenorix-svcpage__inner">
          <div className="zenorix-svcpage__head">
            <p className="zenorix-about__label zenorix-svcpage__pill zenorix-svcpage__pill--dark">
              <i className="ri-arrow-right-up-line" aria-hidden="true" />What We Offer
            </p>
            <h2 id="svc-offer-title">Services We Offer</h2>
          </div>
          <div className="zenorix-svcpage__grid zenorix-svcpage__grid--3">
            {data.subServices.map((s) => (
              <article className="zenorix-svcpage__card" key={s.title}>
                <span className="zenorix-svcpage__card-icon" aria-hidden="true">
                  <i className={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="zenorix-svcpage__section zenorix-svcpage__section--dark" aria-labelledby="svc-process-title">
        <div className="zenorix-svcpage__inner">
          <div className="zenorix-svcpage__head">
            <p className="zenorix-about__label zenorix-svcpage__pill zenorix-svcpage__pill--light">
              <i className="ri-arrow-right-up-line" aria-hidden="true" />Our Process
            </p>
            <h2 id="svc-process-title">{data.processTitle}</h2>
            <p className="zenorix-svcpage__process-sub">{data.processSubtitle}</p>
          </div>
          <ol className="zenorix-svcpage__process" aria-label="Development process steps">
            {data.process.map((step) => (
              <li key={step.step} className="zenorix-svcpage__step">
                <span className="zenorix-svcpage__step-num" aria-hidden="true">{step.step}</span>
                <div className="zenorix-svcpage__step-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. STATS */}
      <section className="zenorix-svcpage__section zenorix-svcpage__stats-section" aria-label="Service highlights">
        <div className="zenorix-svcpage__inner">
          <dl className="zenorix-svcpage__stats">
            {data.stats.map(({ value, label }) => (
              <div key={label} className="zenorix-svcpage__stat">
                <dt className="zenorix-svcpage__stat-value">{value}</dt>
                <dd className="zenorix-svcpage__stat-label">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5. INDUSTRIES */}
      <section className="zenorix-svcpage__section zenorix-svcpage__section--light" aria-labelledby="svc-industries-title">
        <div className="zenorix-svcpage__inner">
          <div className="zenorix-svcpage__head">
            <p className="zenorix-about__label zenorix-svcpage__pill zenorix-svcpage__pill--dark">
              <i className="ri-arrow-right-up-line" aria-hidden="true" />Industries
            </p>
            <h2 id="svc-industries-title">{data.industriesTitle}</h2>
          </div>
          <ul className="zenorix-svcpage__industries" aria-label="Industries we serve">
            {data.industries.map((ind) => (
              <li key={ind.name} className="zenorix-svcpage__industry-tag">
                <i className="ri-checkbox-circle-line" aria-hidden="true" />
                {ind.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. OUR WORKS */}
      <section className="zenorix-svcpage__section" aria-labelledby="svc-work-title">
        <div className="zenorix-svcpage__inner">
          <div className="zenorix-svcpage__head zenorix-svcpage__head--row">
            <div>
              <p className="zenorix-about__label zenorix-svcpage__pill zenorix-svcpage__pill--dark">
                <i className="ri-arrow-right-up-line" aria-hidden="true" />Our Works
              </p>
              <h2 id="svc-work-title">Selected Projects</h2>
            </div>
            <a
              href="https://portfolio.zenorix.in"
              target="_blank"
              rel="noopener noreferrer"
              className="zenorix-svcpage__all-works"
              aria-label="View all Zenorix projects"
            >
              View all projects ↗
            </a>
          </div>
          <div className="zenorix-svcpage__works">
            {works.map((w) => (
              <article className="zenorix-svcpage__work-card" key={w.title}>
                <a href={w.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${w.title}`}>
                  <div className="zenorix-svcpage__work-thumb">
                    <img src={w.image} alt={w.title} loading="lazy" />
                    <span className="zenorix-svcpage__work-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="zenorix-svcpage__work-info">
                    <h3>{w.title}</h3>
                    <p>{w.tagline}</p>
                    <span>{w.service} · {w.year}</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. READY TO CONNECT CTA */}
      <section className="zenorix-svcpage__cta" aria-labelledby="svc-cta-title">
        <div className="zenorix-svcpage__inner zenorix-svcpage__cta-inner">
          <div className="zenorix-svcpage__cta-text">
            <h2 id="svc-cta-title">Ready to Start Your Project?</h2>
            <p>
              Share your idea with us and we'll get back to you with a clear plan, timeline, and quote — no obligation.
            </p>
            <div className="zenorix-svcpage__cta-actions">
              <a href="tel:+916282878105" className="zenorix-svcpage__btn zenorix-svcpage__btn--light">
                <i className="ri-phone-line" aria-hidden="true" /> Call +91 62828 78105
              </a>
              <a
                href="https://wa.me/916282878105?text=I%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="zenorix-svcpage__btn"
              >
                <i className="ri-whatsapp-line" aria-hidden="true" /> WhatsApp
              </a>
              <a href="mailto:zenorix.group@gmail.com" className="zenorix-svcpage__btn">
                <i className="ri-mail-line" aria-hidden="true" /> Email Us
              </a>
            </div>
          </div>
          <div className="zenorix-svcpage__cta-arrow" aria-hidden="true">↗</div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="zenorix-svcpage__section zenorix-svcpage__faq-section" id={`faq-${slug}`} aria-labelledby="svc-faq-title">
        <div className="zenorix-svcpage__inner">
          <div className="zenorix-svcpage__faq-layout">
            <div className="zenorix-svcpage__faq-left">
              <p className="zenorix-about__label zenorix-svcpage__pill zenorix-svcpage__pill--dark">
                <i className="ri-arrow-right-up-line" aria-hidden="true" />FAQs
              </p>
              <h2 id="svc-faq-title">Have more questions?<br />We've got answers</h2>
              <a href="mailto:zenorix.group@gmail.com" className="zenorix-svcpage__faq-contact">
                zenorix.group@gmail.com ↗
              </a>
            </div>
            <div className="zenorix-svcpage__faq-right">
              <div className="zenorix-svcpage__accordion" role="list">
                {data.faqs.map(({ id, question, answer }) => {
                  const isOpen = openFaq === id
                  return (
                    <div
                      key={id}
                      className={`zenorix-svcpage__faq-item${isOpen ? " is-open" : ""}`}
                      role="listitem"
                    >
                      <button
                        type="button"
                        className="zenorix-svcpage__faq-q"
                        aria-expanded={isOpen}
                        aria-controls={`faq-ans-${id}`}
                        onClick={() => setOpenFaq(isOpen ? null : id)}
                      >
                        <span>{question}</span>
                        <span className="zenorix-svcpage__faq-toggle" aria-hidden="true">
                          {isOpen ? "×" : "+"}
                        </span>
                      </button>
                      <div
                        id={`faq-ans-${id}`}
                        className="zenorix-svcpage__faq-a"
                        aria-hidden={!isOpen}
                      >
                        <p>{answer}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicePage
