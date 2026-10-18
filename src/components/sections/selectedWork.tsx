import LazyVideo from '@components/ui/lazyVideo'
type Work = {
  title: string
  tagline: string
  description: string
  image: string
  video: string // file in public/videos
  year: string
  service: string
  linkLabel: string
  linkText: string
  link: string
}

const works: Work[] = [
  {
    title: "BM Aesthetique",
    tagline: "Premium skin care, made simple to shop",
    description:
      "A full online store for a premium skin care brand, with a bold homepage, clear product range and easy ordering.",
    image: "/images/projects/bm-aesthetique.png",
    video: "/videos/bm-aesthetique.mp4",
    year: "2026",
    service: "Web Design, Development",
    linkLabel: "Website",
    linkText: "bmaesthetique.com",
    link: "https://www.bmaesthetique.com/",
  },
  {
    title: "Nivo Concepts",
    tagline: "Beyond walls, beyond expectations",
    description:
      "A clean, image-led website for an architecture and interiors firm that puts their finished projects first.",
    image: "/images/projects/nivo-concepts.png",
    video: "/videos/nivo-concepts.mp4",
    year: "2026",
    service: "Web Design, Development",
    linkLabel: "Website",
    linkText: "nivoconcepts.com",
    link: "https://www.nivoconcepts.com/",
  },
  {
    title: "3Dots Advertising",
    tagline: "Printing press & branding solutions, Abu Dhabi",
    description:
      "A bold, colourful website for an Abu Dhabi printing press, with clear categories and quick quote requests.",
    image: "/images/projects/3dots-advertising.png",
    video: "/videos/3dots-advertising.mp4",
    year: "2026",
    service: "Web Design, Development",
    linkLabel: "Website",
    linkText: "3dotsadv.ae",
    link: "https://www.3dotsadv.ae/",
  },
  {
    title: "3RIIIFT",
    tagline: "Curated vintage & archival streetwear",
    description:
      "A bold, editorial storefront for curated vintage streetwear, built to make every one-of-one piece the hero.",
    image: "/images/projects/3riiift.png",
    video: "/videos/3riiift.mp4",
    year: "2025",
    service: "Web Design, Development",
    linkLabel: "Instagram",
    linkText: "@3riiift_",
    link: "https://www.instagram.com/3riiift_/",
  },
  {
    title: "Timbala Tourism",
    tagline: "Holiday, travel and visa solutions",
    description:
      "A warm, trustworthy website for holiday packages and visa services that makes it simple to enquire.",
    image: "/images/projects/timbala-tourism.png",
    video: "/videos/timbala-tourism.mp4",
    year: "2026",
    service: "Web Design, Development",
    linkLabel: "Website",
    linkText: "timbalatourism.com",
    link: "https://www.timbalatourism.com/",
  },
]

const SelectedWork = () => {
  return (
    <section className="zenorix-work" id="work" aria-labelledby="work-title">
      <div className="zenorix-work__inner">
        <div className="zenorix-work__top">
          <p className="zenorix-about__label zenorix-work__label">
            <i className="ri-arrow-right-up-line" aria-hidden="true" />Projects
          </p>
          <h2 id="work-title" className="zenorix-work__heading">Featured Projects</h2>
          <a className="zenorix-work__more" href="https://portfolio.zenorix.in" target="_blank" rel="noreferrer">
            More works
          </a>
        </div>
        {works.map((work, index) => (
          <article
            key={work.title}
            className={`zenorix-work__item${index % 2 === 1 ? " zenorix-work__item--reverse" : ""}`}
          >
            <div className="zenorix-work__text">
              <header className="zenorix-work__head">
                <h3>{work.title}</h3>
                <span>{work.year}</span>
              </header>
              <p className="zenorix-work__tagline">{work.tagline}</p>
              <p className="zenorix-work__desc">{work.description}</p>
              <dl className="zenorix-work__meta">
                <div>
                  <dt>Service</dt>
                  <dd><span>{work.service}</span></dd>
                </div>
                <div>
                  <dt>Published</dt>
                  <dd><span>©{work.year}</span></dd>
                </div>
                <div>
                  <dt>{work.linkLabel}</dt>
                  <dd>
                    <a href={work.link} target="_blank" rel="noreferrer">{work.linkText} ↗</a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="zenorix-work__media">
              {work.video ? (
                <LazyVideo src={work.video} poster={work.image} label={work.title} />
              ) : (
                <img src={work.image} alt={work.title} loading="lazy" decoding="async" />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SelectedWork
