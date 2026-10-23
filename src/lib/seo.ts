// Single source of truth for per-page SEO. Used at runtime (useSeo) and at
// build time (vite.config.ts writes a static HTML file + sitemap per route).
import { servicePages } from "../components/pages/servicePageData"
import { faqCategories } from "../utils/fackData/faqData"

export const SITE_URL = "https://www.zenorix.in"
export const SITE_NAME = "Zenorix"
export const DEFAULT_IMAGE = `${SITE_URL}/images/og-zenorix.jpg`
const ORG_ID = `${SITE_URL}/#organization`

export type RouteSeo = {
  path: string
  title: string
  description: string
  image?: string
  changefreq: "weekly" | "monthly"
  priority: number
  jsonLd: Record<string, unknown>[]
}

const keralaCities = [
  "Kozhikode", "Kochi", "Thiruvananthapuram", "Thrissur", "Kannur",
  "Malappuram", "Kollam", "Palakkad", "Kottayam", "Alappuzha", "Kasaragod", "Wayanad",
]

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "Zenorix Group",
  description:
    "Website development, e-commerce, custom software and mobile app development company in Kozhikode (Calicut), Kerala.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logo1.png`,
  image: DEFAULT_IMAGE,
  telephone: "+91-6282878105",
  email: "zenorix.group@gmail.com",
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Floor, Space11, Koodathai",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    postalCode: "673573",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "State", name: "Kerala" },
    { "@type": "Country", name: "India" },
    ...keralaCities.map((name) => ({ "@type": "City", name })),
  ],
  knowsAbout: [
    "Website development", "E-commerce development", "Custom software development",
    "Mobile app development", "UI/UX design", "Branding", "Search engine optimization",
  ],
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+91-6282878105", contactType: "sales", areaServed: "IN", availableLanguage: ["English", "Malayalam"] },
    { "@type": "ContactPoint", telephone: "+91-7012977575", contactType: "customer service", areaServed: "IN", availableLanguage: ["English", "Malayalam"] },
  ],
  sameAs: [
    "https://www.instagram.com/zenorix.in",
    "https://www.facebook.com/profile.php?id=61578273194668",
    "https://www.linkedin.com/company/zenorixgroup/",
    "https://x.com/zenorix_group",
  ],
}

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
}

const breadcrumbs = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
})

const faqPage = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
})

export const routes: RouteSeo[] = [
  {
    path: "/",
    title: "Zenorix | Website & App Development Company in Kerala",
    description:
      "Zenorix is a website, e-commerce, custom software and mobile app development company in Kozhikode (Calicut), Kerala, building fast, SEO-ready digital products.",
    changefreq: "weekly",
    priority: 1,
    jsonLd: [
      organization,
      website,
      faqPage(faqCategories.flatMap((c) => c.items.map((i) => ({ question: i.question, answer: i.ans })))),
    ],
  },
  {
    path: "/about",
    title: "About Zenorix | Web & Software Developers in Kozhikode, Kerala",
    description:
      "Meet Zenorix, a Kozhikode-based team of web designers and developers building websites, software and mobile apps for businesses across Kerala since 2022.",
    changefreq: "monthly",
    priority: 0.7,
    jsonLd: [
      { "@context": "https://schema.org", "@type": "AboutPage", url: `${SITE_URL}/about`, about: { "@id": ORG_ID } },
      breadcrumbs([{ name: "About", path: "/about" }]),
    ],
  },
  {
    path: "/contact",
    title: "Contact Zenorix | Website Developers in Calicut, Kerala",
    description:
      "Talk to Zenorix about your website, e-commerce store, software or mobile app. Call +91 62828 78105 or visit us at Koodathai, Kozhikode (Calicut), Kerala.",
    changefreq: "monthly",
    priority: 0.7,
    jsonLd: [
      { "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE_URL}/contact`, about: { "@id": ORG_ID } },
      breadcrumbs([{ name: "Contact", path: "/contact" }]),
    ],
  },
  ...servicePages.map((page): RouteSeo => {
    const path = `/services/${page.slug}`
    return {
      path,
      title: page.metaTitle,
      description: page.metaDescription,
      changefreq: "monthly",
      priority: 0.9,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.heroTitle,
          serviceType: page.heroTitle,
          description: page.metaDescription,
          url: `${SITE_URL}${path}`,
          provider: { "@id": ORG_ID },
          areaServed: [{ "@type": "State", name: "Kerala" }, { "@type": "Country", name: "India" }],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: page.heroTitle,
            itemListElement: page.subServices.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title, description: s.description },
            })),
          },
        },
        faqPage(page.faqs),
        breadcrumbs([{ name: page.heroTitle, path }]),
      ],
    }
  }),
]

export const getRouteSeo = (path: string) => routes.find((r) => r.path === path)
