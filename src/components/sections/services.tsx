import { Link } from "react-router-dom"
import SectionTitle from "@components/ui/sectionTitle"

const services = [
  {
    title: "Website Development",
    slug: "/services/website-development",
    tags: ["Business websites", "Responsive build", "CMS & WordPress", "SEO ready"],
    description: "We craft modern, responsive websites that work beautifully across all devices and are built to match your business goals.",
  },
  {
    title: "E-commerce Website Development",
    slug: "/services/ecommerce-development",
    tags: ["Online stores", "Payment gateways", "Product management", "Order tracking"],
    description: "We build fast, secure online stores that make browsing, checkout and order management simple for you and your customers.",
  },
  {
    title: "Software Development",
    slug: "/services/custom-software-development",
    tags: ["Custom software", "Dashboards", "Internal tools", "API integrations"],
    description: "We develop tailored software and internal systems that improve your workflow and scale as your business grows.",
  },
  {
    title: "Mobile Application Development",
    slug: "/services/mobile-app-development",
    tags: ["Android & iOS", "UI / UX design", "Cross-platform apps", "App store launch"],
    description: "We design and build smooth, practical mobile apps that put your product in your customers' hands.",
  },
  {
    title: "UI/UX Design",
    slug: "/services/ui-ux-design-branding",
    tags: ["User research", "Wireframes", "Interface design", "Prototyping"],
    description: "We design intuitive websites and app interfaces that combine your brand identity with clear user journeys and thoughtful interactions.",
  },
]

const Services = () => {
  return (
    <section id="service" className="zenorix-services">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SectionTitle>
              <SectionTitle.Title>Websites, software &amp; apps</SectionTitle.Title>
              <SectionTitle.Description>Get expert solutions for every digital need</SectionTitle.Description>
            </SectionTitle>
          </div>
        </div>
        <ul className="zenorix-services__list">
          {services.map((service, index) => (
            <li key={service.title}>
              <Link
                to={service.slug}
                className="zenorix-services__row"
                aria-label={`Explore ${service.title} services`}
              >
                <div className="zenorix-services__name">
                  <span>{String(index + 1).padStart(2, "0")}.</span>
                  <h3>{service.title}</h3>
                </div>
                <ul className="zenorix-services__tags">
                  {service.tags.map((tag) => (
                    <li key={tag}># {tag}</li>
                  ))}
                </ul>
                <p className="zenorix-services__desc">{service.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
