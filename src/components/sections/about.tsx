import { useRef } from "react"
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion"

const aboutHeadline = "Zenorix is a digital solutions company helping startups and growing businesses build a strong digital presence. We develop high-performing websites, custom software, and mobile applications, combining creative design with modern technology to deliver practical, scalable solutions. Our goal is simple: help businesses grow through technology."
const aboutHeadlineLines = [
  "Zenorix is a digital solutions company",
  "helping startups and growing businesses",
  "build a strong digital presence. We develop",
  "high-performing websites, custom software,",
  "and mobile applications, combining creative",
  "design with modern technology to deliver",
  "practical, scalable solutions. Our goal is",
  "simple: help businesses grow through technology.",
]

const AboutHeadlineLine = ({
  children,
  index,
  progress,
  reduceMotion,
}: {
  children: string
  index: number
  progress: MotionValue<number>
  reduceMotion: boolean | null
}) => {
  const lineCount = aboutHeadlineLines.length
  const lineReveal = useTransform(
    progress,
    [index / lineCount, (index + 1) / lineCount],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  )

  return (
    <span className="zenorix-about__headline-line" aria-hidden="true">
      <span>{children}</span>
      <motion.span
        className="zenorix-about__headline-line-fill"
        style={{ clipPath: reduceMotion ? "inset(0 0% 0 0)" : lineReveal }}
      >
        {children}
      </motion.span>
    </span>
  )
}

const highlights = [
  { title: "Years of Building", value: "4+", note: "Years crafting digital products" },
  { title: "Websites Delivered", value: "50+", note: "Websites launched for growing brands" },
  { title: "Software Delivered", value: "20+", note: "Custom software built and shipped" },
  { title: "Satisfied Clients", value: "70+", note: "Clients satisfied and repeating" },
]

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: headlineRef,
    offset: ["start 85%", "end 55%"],
  })
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <section ref={sectionRef} className="zenorix-about" id="about" aria-labelledby="about-title">
      <div className="zenorix-about__inner">
        <div className="zenorix-about__content">
          <motion.div className="zenorix-about__intro" {...reveal}>
            <h3 className="zenorix-about__label"><i className="ri-arrow-right-up-line" aria-hidden="true" />About us</h3>
            <div ref={headlineRef} className="zenorix-about__headline">
              <h2 id="about-title" aria-label={aboutHeadline}>
                {aboutHeadlineLines.map((line, index) => (
                  <AboutHeadlineLine
                    key={line}
                    index={index}
                    progress={scrollYProgress}
                    reduceMotion={reduceMotion}
                  >
                    {line}
                  </AboutHeadlineLine>
                ))}
              </h2>
            </div>
            <a className="zenorix-about__cta" href="/about" aria-label="Learn more about Zenorix">
              <span>Learn About Us</span>
              <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          <div className="zenorix-about__stats" aria-label="Zenorix highlights">
            {highlights.map((highlight, index) => (
              <motion.article
                className="zenorix-about__stat"
                key={highlight.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
              >
                <div className="zenorix-about__stat-box">
                  <p className="zenorix-about__stat-title">{highlight.title}</p>
                  <p className="zenorix-about__stat-value">{highlight.value}</p>
                </div>
                <p className="zenorix-about__stat-note">{highlight.note}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="zenorix-about__media">
          <div className="zenorix-about__glowing-mark" role="img" aria-label="Zenorix Z logo">
            <img className="zenorix-about__neon-emblem" src="/images/about/purple-z-clean.png" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
