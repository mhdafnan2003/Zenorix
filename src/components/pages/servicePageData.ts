export type SubService = {
  title: string
  description: string
  icon: string
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export type Stat = {
  value: string
  label: string
}

export type Industry = {
  name: string
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type ServicePageData = {
  slug: string
  heroTitle: string
  heroSubtitle: string
  metaTitle: string
  metaDescription: string
  subServices: SubService[]
  processTitle: string
  processSubtitle: string
  process: ProcessStep[]
  stats: Stat[]
  industriesTitle: string
  industries: Industry[]
  faqs: FaqItem[]
}

export const servicePages: ServicePageData[] = [
  // ─── WEBSITE DEVELOPMENT ────────────────────────────────────────
  {
    slug: "website-development",
    heroTitle: "Website Development",
    heroSubtitle:
      "We design and build modern, fast, and conversion-focused websites that help your business grow online — crafted for every screen, search engine, and customer.",
    metaTitle: "Website Development Services in Kozhikode | Zenorix",
    metaDescription:
      "Zenorix builds modern, responsive, SEO-ready websites for businesses, startups, and service providers in Kerala and beyond. Get a high-performing website tailored to your goals.",
    subServices: [
      {
        title: "Business Websites",
        description:
          "A clean, professional website that introduces your brand, services, and team to potential clients — built to inform and convert.",
        icon: "ri-global-line",
      },
      {
        title: "Landing Pages",
        description:
          "High-converting single-page sites designed to capture leads, promote offers, and drive customer action.",
        icon: "ri-layout-line",
      },
      {
        title: "CMS & WordPress",
        description:
          "Content-managed websites that let you update text, images, and pages yourself — no developer needed for daily changes.",
        icon: "ri-pencil-ruler-2-line",
      },
      {
        title: "Portfolio Websites",
        description:
          "Visually striking portfolio sites for creatives, agencies, and professionals that showcase work and attract the right clients.",
        icon: "ri-gallery-line",
      },
      {
        title: "Responsive Design",
        description:
          "Every website we build adapts perfectly to mobile phones, tablets, and desktops so visitors get a great experience on every device.",
        icon: "ri-device-line",
      },
      {
        title: "SEO-Ready Builds",
        description:
          "Websites built from the ground up with proper structure, metadata, fast loading times, and mobile-first design to support your search rankings.",
        icon: "ri-search-line",
      },
    ],
    processTitle: "Our Website Development Process",
    processSubtitle:
      "From your first brief to launch day — a clear, structured process that keeps you informed at every step.",
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description:
          "We understand your business, audience, and goals. Then we define the site structure, pages, and functionality before a single line of code is written.",
      },
      {
        step: "02",
        title: "Design & Wireframing",
        description:
          "We create layouts and visual designs tailored to your brand, ensuring the site looks professional and guides visitors to take action.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "We build your website with clean, maintainable code — fast-loading, responsive, and ready for search engines from day one.",
      },
      {
        step: "04",
        title: "Review & Testing",
        description:
          "We test every page across devices and browsers, fix issues, and gather your feedback before anything goes live.",
      },
      {
        step: "05",
        title: "Launch",
        description:
          "Your website goes live on your domain. We handle deployment, performance checks, and ensure everything runs smoothly from day one.",
      },
    ],
    stats: [
      { value: "50+", label: "Websites Launched" },
      { value: "4+", label: "Years of Experience" },
      { value: "70+", label: "Happy Clients" },
      { value: "100%", label: "Mobile Responsive" },
    ],
    industriesTitle: "Website Development Across Diverse Industries",
    industries: [
      { name: "Retail & E-commerce" },
      { name: "Healthcare & Wellness" },
      { name: "Architecture & Interiors" },
      { name: "Tourism & Hospitality" },
      { name: "Education & Training" },
      { name: "Startups & SaaS" },
      { name: "Fashion & Lifestyle" },
      { name: "Professional Services" },
    ],
    faqs: [
      {
        id: "web-faq-1",
        question: "How long does it take to build a website?",
        answer:
          "A standard business website typically takes 2–4 weeks. More complex sites with custom features, e-commerce, or CMS integrations can take 4–8 weeks. We'll give you a timeline after reviewing your requirements.",
      },
      {
        id: "web-faq-2",
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes. Every website we build is fully responsive and tested across mobile phones, tablets, and desktops to ensure a smooth experience for all visitors.",
      },
      {
        id: "web-faq-3",
        question: "Do you provide SEO with website development?",
        answer:
          "We build websites with strong technical SEO foundations — proper headings, fast loading, mobile-first design, metadata, and structured URLs. Ongoing SEO campaigns are a separate service.",
      },
      {
        id: "web-faq-4",
        question: "Can I update my website content myself?",
        answer:
          "Yes. We can build your website on a CMS like WordPress so you can manage content, add pages, and update images without any technical knowledge.",
      },
      {
        id: "web-faq-5",
        question: "How much does a website cost?",
        answer:
          "Pricing depends on design complexity, number of pages, integrations, and functionality. We provide a detailed quote after understanding your specific needs and goals.",
      },
      {
        id: "web-faq-6",
        question: "Do you provide hosting and domain support?",
        answer:
          "Yes. We can assist with domain registration, hosting setup, SSL certificates, and deployment so your website goes live without any technical headaches.",
      },
    ],
  },

  // ─── E-COMMERCE ─────────────────────────────────────────────────
  {
    slug: "ecommerce-development",
    heroTitle: "E-commerce Development",
    heroSubtitle:
      "We build fast, secure, and scalable online stores that make buying easy for your customers and managing orders simple for you — from product listings to payment and delivery.",
    metaTitle: "E-commerce Website Development in Kerala | Zenorix",
    metaDescription:
      "Zenorix builds powerful e-commerce websites with product catalogues, secure payment gateways, and order management for businesses in Kerala and across India.",
    subServices: [
      {
        title: "Online Store Development",
        description:
          "Custom-built online stores with product listings, categories, filters, and a smooth buying journey designed to convert browsers into buyers.",
        icon: "ri-store-2-line",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Secure integration with Razorpay, Stripe, PayPal, UPI, and other payment methods to give your customers flexible and trusted checkout options.",
        icon: "ri-secure-payment-line",
      },
      {
        title: "Product Management",
        description:
          "Easy-to-use dashboards to add products, manage inventory, update prices, and handle catalogues without any technical knowledge.",
        icon: "ri-box-3-line",
      },
      {
        title: "Order & Shipping Management",
        description:
          "Order tracking, invoice generation, and shipping integration so your operations run smoothly as your store scales.",
        icon: "ri-truck-line",
      },
      {
        title: "Mobile Commerce",
        description:
          "Fully optimised mobile shopping experiences that load fast, look great on phones, and make checkout effortless for mobile users.",
        icon: "ri-smartphone-line",
      },
      {
        title: "Multi-vendor Stores",
        description:
          "Marketplace platforms that allow multiple sellers to list and sell on one platform with centralised control and commission management.",
        icon: "ri-team-line",
      },
    ],
    processTitle: "Our E-commerce Development Process",
    processSubtitle:
      "A structured approach that covers everything from product catalogue to payment checkout — built to sell from day one.",
    process: [
      {
        step: "01",
        title: "Business & Product Discovery",
        description:
          "We learn about your products, target customers, pricing model, and what makes your store unique — the foundation for every design and development decision.",
      },
      {
        step: "02",
        title: "Store Architecture & Design",
        description:
          "We plan the store structure, user flow, and visual design to create a shopping experience that guides customers from browse to buy.",
      },
      {
        step: "03",
        title: "Development & Integration",
        description:
          "We build your store, integrate payment gateways, set up the admin dashboard, and connect shipping and inventory tools.",
      },
      {
        step: "04",
        title: "Testing & Quality Check",
        description:
          "We run full checkout flow tests, device tests, speed optimisation, and security checks before your store opens to customers.",
      },
      {
        step: "05",
        title: "Launch & Handover",
        description:
          "Your store goes live, and we walk you through the admin panel so you can manage products, orders, and customers with confidence.",
      },
    ],
    stats: [
      { value: "20+", label: "Stores Launched" },
      { value: "4+", label: "Years of Experience" },
      { value: "70+", label: "Happy Clients" },
      { value: "100%", label: "Secure Checkout" },
    ],
    industriesTitle: "E-commerce Development Across Diverse Industries",
    industries: [
      { name: "Fashion & Apparel" },
      { name: "Beauty & Skincare" },
      { name: "Food & Beverages" },
      { name: "Electronics & Gadgets" },
      { name: "Home & Furniture" },
      { name: "Health & Wellness" },
      { name: "Books & Education" },
      { name: "Jewellery & Lifestyle" },
    ],
    faqs: [
      {
        id: "ecom-faq-1",
        question: "Which e-commerce platforms do you work with?",
        answer:
          "We build custom e-commerce solutions as well as stores on platforms like WooCommerce, Shopify, and custom React/Next.js storefronts depending on your requirements and scale.",
      },
      {
        id: "ecom-faq-2",
        question: "Can you integrate Razorpay or other Indian payment gateways?",
        answer:
          "Yes. We integrate Razorpay, Instamojo, Cashfree, PayU, and other Indian payment gateways along with international options like Stripe and PayPal.",
      },
      {
        id: "ecom-faq-3",
        question: "Can I manage my own products and orders?",
        answer:
          "Absolutely. We build easy-to-use admin dashboards so you can add products, update prices, manage inventory, process orders, and generate invoices yourself.",
      },
      {
        id: "ecom-faq-4",
        question: "Will my online store work well on mobile phones?",
        answer:
          "Yes. We build all stores mobile-first, optimised for fast loading and smooth checkout on smartphones, which is where the majority of online shopping happens.",
      },
      {
        id: "ecom-faq-5",
        question: "Can you build a marketplace with multiple sellers?",
        answer:
          "Yes. We can build multi-vendor marketplace platforms where multiple sellers list products, manage their own inventory, and receive payments with your platform taking a commission.",
      },
      {
        id: "ecom-faq-6",
        question: "How long does it take to build an online store?",
        answer:
          "A straightforward store typically takes 3–6 weeks. More complex stores with custom features, multiple integrations, or large catalogues take longer. We'll give you a timeline after understanding your requirements.",
      },
    ],
  },

  // ─── CUSTOM SOFTWARE ────────────────────────────────────────────
  {
    slug: "custom-software-development",
    heroTitle: "Custom Software Development",
    heroSubtitle:
      "We build purpose-built software tailored to your business workflows — from dashboards and internal tools to complex web applications that replace manual processes and scale with your growth.",
    metaTitle: "Custom Software Development in Kerala | Zenorix",
    metaDescription:
      "Zenorix develops custom software, dashboards, and internal business tools for startups and growing businesses in Kerala and across India. Scalable, practical, and built around your workflow.",
    subServices: [
      {
        title: "Business Dashboards",
        description:
          "Real-time dashboards that give you a clear view of your data, operations, KPIs, and team performance — all in one place.",
        icon: "ri-dashboard-line",
      },
      {
        title: "Internal Tools & Automation",
        description:
          "Custom software that replaces spreadsheets, manual data entry, and repetitive tasks — saving your team hours every day.",
        icon: "ri-tools-line",
      },
      {
        title: "CRM & ERP Systems",
        description:
          "Customer relationship management and enterprise resource planning systems built around your actual business processes.",
        icon: "ri-database-2-line",
      },
      {
        title: "SaaS Product Development",
        description:
          "Build your software-as-a-service product with subscription management, user roles, multi-tenancy, and everything needed to launch and scale.",
        icon: "ri-cloud-line",
      },
      {
        title: "API Development & Integration",
        description:
          "Custom APIs that connect your software with third-party services, payment systems, communication tools, and external platforms.",
        icon: "ri-code-box-line",
      },
      {
        title: "Web Application Development",
        description:
          "Full-featured web applications with user accounts, role-based access, booking systems, data management, and business logic built to your specification.",
        icon: "ri-window-line",
      },
    ],
    processTitle: "Our Software Development Process",
    processSubtitle:
      "A transparent, milestone-driven development process that keeps your project on track and delivers working software at every stage.",
    process: [
      {
        step: "01",
        title: "Requirements & Scoping",
        description:
          "We document your business problem, required features, user roles, and integrations — turning your idea into a clear technical specification.",
      },
      {
        step: "02",
        title: "Architecture & Design",
        description:
          "We plan the technical architecture, database structure, and UI/UX so the software is scalable, secure, and easy to use from the start.",
      },
      {
        step: "03",
        title: "Agile Development",
        description:
          "We build your software in iterative sprints, delivering working modules at each stage so you can review and provide feedback throughout.",
      },
      {
        step: "04",
        title: "Testing & QA",
        description:
          "Every feature is tested for functionality, security, performance, and edge cases before it reaches your users.",
      },
      {
        step: "05",
        title: "Deployment & Training",
        description:
          "We deploy to your infrastructure, provide documentation, and train your team so they can use and manage the software confidently.",
      },
    ],
    stats: [
      { value: "20+", label: "Software Projects Delivered" },
      { value: "4+", label: "Years of Experience" },
      { value: "70+", label: "Happy Clients" },
      { value: "100%", label: "Custom-Built Solutions" },
    ],
    industriesTitle: "Custom Software Development Across Diverse Industries",
    industries: [
      { name: "Healthcare & Clinics" },
      { name: "Logistics & Supply Chain" },
      { name: "Finance & FinTech" },
      { name: "Education & EdTech" },
      { name: "Real Estate & PropTech" },
      { name: "Retail & Inventory" },
      { name: "HR & Workforce Management" },
      { name: "Professional Services" },
    ],
    faqs: [
      {
        id: "soft-faq-1",
        question: "What kind of custom software does Zenorix build?",
        answer:
          "We build business dashboards, internal tools, CRM systems, booking platforms, SaaS products, web applications, and workflow automation software tailored to your specific business needs.",
      },
      {
        id: "soft-faq-2",
        question: "How is custom software different from off-the-shelf tools?",
        answer:
          "Off-the-shelf tools are built for general use and may not fit your exact workflow. Custom software is built specifically for your processes, giving you exactly the features you need without paying for what you don't.",
      },
      {
        id: "soft-faq-3",
        question: "How long does custom software development take?",
        answer:
          "Timeline depends on the scope, complexity, number of integrations, and required features. Simple tools can be delivered in 4–8 weeks. Larger platforms with complex logic may take 3–6 months. We'll provide a milestone-based timeline after scoping.",
      },
      {
        id: "soft-faq-4",
        question: "Can you integrate our software with existing systems?",
        answer:
          "Yes. We can build APIs and integrations with your existing tools, third-party services, payment gateways, communication platforms, and data sources.",
      },
      {
        id: "soft-faq-5",
        question: "Will the software scale as our business grows?",
        answer:
          "Yes. We build with scalability in mind from the start — using modern architecture and cloud-ready infrastructure so your software grows with your user base and data volume.",
      },
      {
        id: "soft-faq-6",
        question: "Do you provide support after the software is delivered?",
        answer:
          "Yes. We offer post-launch support, bug fixes, feature enhancements, and maintenance services. The exact scope is agreed upon during the project proposal.",
      },
    ],
  },

  // ─── MOBILE APPLICATION ─────────────────────────────────────────
  {
    slug: "mobile-app-development",
    heroTitle: "Mobile App Development",
    heroSubtitle:
      "We design and build smooth, practical mobile applications for Android and iOS that put your product in your customers' hands — from idea to App Store launch.",
    metaTitle: "Mobile App Development in Kerala | Zenorix",
    metaDescription:
      "Zenorix builds custom Android and iOS mobile apps for startups and businesses in Kerala and across India. From UI/UX design to app store launch — end-to-end mobile development.",
    subServices: [
      {
        title: "Custom Mobile App Development",
        description:
          "Fully custom Android and iOS apps built from scratch around your product idea, business model, and target audience.",
        icon: "ri-smartphone-line",
      },
      {
        title: "Android App Development",
        description:
          "Native Android applications optimised for performance, battery life, and the wide range of Android devices your customers use.",
        icon: "ri-android-line",
      },
      {
        title: "iOS App Development",
        description:
          "Polished iOS apps built to Apple's guidelines, designed for iPhones and iPads with the quality and performance Apple users expect.",
        icon: "ri-apple-line",
      },
      {
        title: "Cross-Platform Apps",
        description:
          "One codebase that runs on both Android and iOS — reducing development time and cost while maintaining a native-quality experience.",
        icon: "ri-code-s-slash-line",
      },
      {
        title: "App UI / UX Design",
        description:
          "Intuitive, visually polished app interfaces designed for real users — simple navigation, clear actions, and a look that builds trust.",
        icon: "ri-palette-line",
      },
      {
        title: "App Testing & Launch",
        description:
          "Thorough testing across devices and OS versions, followed by App Store and Play Store submission and launch support.",
        icon: "ri-rocket-2-line",
      },
    ],
    processTitle: "Our Mobile App Development Process",
    processSubtitle:
      "From your idea to app store listing — a structured, transparent development process that delivers a polished product.",
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description:
          "We understand your app idea, target users, platform requirements, and core features — then build a development roadmap.",
      },
      {
        step: "02",
        title: "UI / UX Design",
        description:
          "We create wireframes and high-fidelity designs that map out every screen, interaction, and user flow before development begins.",
      },
      {
        step: "03",
        title: "App Development",
        description:
          "We build your app with clean, maintainable code — delivering working features in sprints so you can test and give feedback throughout.",
      },
      {
        step: "04",
        title: "Testing & QA",
        description:
          "We test across real devices and OS versions, fix bugs, optimise performance, and prepare the app for a smooth store submission.",
      },
      {
        step: "05",
        title: "Launch & Support",
        description:
          "We submit your app to Google Play and the App Store, handle the review process, and provide post-launch support for updates and fixes.",
      },
    ],
    stats: [
      { value: "13+", label: "Apps Delivered" },
      { value: "1000+", label: "App Downloads" },
      { value: "100+", label: "Features Shipped" },
      { value: "100%", label: "Client Satisfaction" },
    ],
    industriesTitle: "Mobile App Development Across Diverse Industries",
    industries: [
      { name: "E-commerce & Retail" },
      { name: "Food & Restaurant" },
      { name: "Healthcare & Fitness" },
      { name: "Travel & Tourism" },
      { name: "Education & Learning" },
      { name: "Finance & Payments" },
      { name: "On-demand & Delivery" },
      { name: "Enterprise & B2B" },
    ],
    faqs: [
      {
        id: "app-faq-1",
        question: "Do you build apps for both Android and iOS?",
        answer:
          "Yes. We can build separate native apps for Android and iOS, or a cross-platform app that runs on both platforms from a single codebase — depending on your budget and performance requirements.",
      },
      {
        id: "app-faq-2",
        question: "How long does mobile app development take?",
        answer:
          "A simple mobile app typically takes 6–12 weeks. More complex apps with custom features, backend APIs, and multiple user roles can take 3–6 months. We'll provide a detailed timeline after scoping your requirements.",
      },
      {
        id: "app-faq-3",
        question: "Can you design the UI/UX for the app as well?",
        answer:
          "Yes. App design is included in our development process. We create wireframes, user flow maps, and high-fidelity designs before any code is written.",
      },
      {
        id: "app-faq-4",
        question: "Will you help submit the app to Google Play and App Store?",
        answer:
          "Yes. We handle the full submission process for both the Google Play Store and Apple App Store, including store listing, screenshots, and review process management.",
      },
      {
        id: "app-faq-5",
        question: "Can the app connect to our website or backend system?",
        answer:
          "Yes. We can build APIs that connect your mobile app with your website, admin panel, payment system, or any other backend service your business uses.",
      },
      {
        id: "app-faq-6",
        question: "Do you provide post-launch updates and support?",
        answer:
          "Yes. We offer post-launch maintenance, bug fixes, OS compatibility updates, and feature additions. Support scope and duration are agreed upon during the project proposal.",
      },
    ],
  },
]
