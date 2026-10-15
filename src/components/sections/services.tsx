import SectionTitle from "@components/ui/sectionTitle"

const services = [
  {
    title: "Website Development",
    tags: ["Business websites", "Responsive build", "CMS & WordPress", "SEO ready"],
    description: "We craft modern, responsive websites that work beautifully across all devices and are built to match your business goals.",
    img: "/images/services/serv1.png",
  },
  {
    title: "E-commerce Website Development",
    tags: ["Online stores", "Payment gateways", "Product management", "Order tracking"],
    description: "We build fast, secure online stores that make browsing, checkout and order management simple for you and your customers.",
    img: "/images/services/service1.jpg",
  },
  {
    title: "Software Development",
    tags: ["Custom software", "Dashboards", "Internal tools", "API integrations"],
    description: "We develop tailored software and internal systems that improve your workflow and scale as your business grows.",
    img: "/images/services/serv2.png",
  },
  {
    title: "Mobile Application Development",
    tags: ["Android & iOS", "UI / UX design", "Cross-platform apps", "App store launch"],
    description: "We design and build smooth, practical mobile apps that put your product in your customers' hands.",
    img: "/images/services/service2.jpg",
  },
]

const Services = () => {
  return (
    <section id="service" className="zenorix-services">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SectionTitle>
              <SectionTitle.Name>Services</SectionTitle.Name>
              <SectionTitle.Title>Websites, software &amp; apps</SectionTitle.Title>
              <SectionTitle.Description>Get expert solutions for every digital need</SectionTitle.Description>
            </SectionTitle>
          </div>
        </div>
        <ul className="zenorix-services__list">
          {services.map((service, index) => (
            <li className="zenorix-services__row" key={service.title} tabIndex={0}>
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
              <div className="zenorix-services__media" aria-hidden="true">
                <img src={service.img} alt="" loading="lazy" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
