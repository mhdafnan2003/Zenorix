import { useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { MeshGradient } from "@paper-design/shaders-react"
import { servicePages } from "./servicePageData"

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const data = servicePages.find((p) => p.slug === slug)
  const [openFaq, setOpenFaq] = useState<string | null>(data?.faqs[0].id ?? null)

  if (!data) return <Navigate to="/" replace />

  return (
    <main className="zenorix-svcpage">
      <div className="hero-about-stack">
      <div className="hero-about-stack__hero">
      {/* 1. HERO */}
      <section className="zenorix-svcpage__hero" aria-labelledby="svc-hero-title">
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

        <div className="zenorix-svcpage__inner">
          <h1 id="svc-hero-title">{data.heroTitle}</h1>
          <p className="zenorix-svcpage__lead">{data.heroSubtitle}</p>
          <div className="zenorix-svcpage__hero-actions">
            <a href="tel:+916282878105" className="zenorix-svcpage__btn zenorix-svcpage__btn--primary">
              <i className="ri-phone-line" aria-hidden="true" /> Book a Free Call
            </a>
            <a
              href="https://wa.me/916282878105?text=I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="zenorix-svcpage__btn zenorix-svcpage__btn--secondary"
            >
              <i className="ri-whatsapp-line" aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      </div>

      {/* 2. SERVICES WE OFFER */}
      <section className="zenorix-svcpage__section zenorix-svcpage__offers" aria-labelledby="svc-offer-title">
        <div className="zenorix-svcpage__inner">
          <div className="zenorix-svcpage__head">
            <p className="zenorix-svcpage__pill">
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

      </div>

      {/* 3. PROCESS */}
      <section className="zenorix-svcpage__section zenorix-svcpage__section--dark zenorix-svcpage__timeline" aria-labelledby="svc-process-title">
        <div className="zenorix-svcpage__inner">
          <div className="zenorix-svcpage__head">
            <p className="zenorix-svcpage__pill">
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

      {/* 5. INDUSTRIES */}
      <section className="zenorix-svcpage__section zenorix-svcpage__section--light" aria-labelledby="svc-industries-title">
        <div className="zenorix-svcpage__inner">
          <div className="zenorix-svcpage__head">
            <p className="zenorix-svcpage__pill">
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

      {/* 8. FAQ */}
      <section className="zenorix-svcpage__section zenorix-svcpage__faq-section" id={`faq-${slug}`} aria-labelledby="svc-faq-title">
        <div className="zenorix-svcpage__inner">
          <div className="zenorix-svcpage__faq-layout">
            <div className="zenorix-svcpage__faq-left">
              <p className="zenorix-svcpage__pill">
                <i className="ri-arrow-right-up-line" aria-hidden="true" />FAQs
              </p>
              <h2 id="svc-faq-title">Have more questions?<br />We've got answers</h2>
              <a href="mailto:zenorix.digitals@gmail.com" className="zenorix-svcpage__faq-contact">
                zenorix.digitals@gmail.com ↗
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

export default ServicePage
