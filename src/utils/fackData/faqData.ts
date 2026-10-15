type FaqItem = {
  id: string,
  question: string,
  ans: string,
}

export type FaqCategory = {
  id: string,
  label: string,
  title: string,
  items: FaqItem[],
}

export const faqCategories: FaqCategory[] = [
  {
    id: "cat-1",
    label: "General",
    title: "General questions about Zenorix",
    items: [
      {
        id: "faq-1",
        question: "What services does Zenorix offer?",
        ans: "Zenorix provides website development, custom software development, UI/UX design, branding, and digital product development for startups and growing businesses. We help businesses turn ideas into practical digital solutions tailored to their goals.",
      },
      {
        id: "faq-2",
        question: "Why should I choose Zenorix for my digital project?",
        ans: "Zenorix combines design, development, and technical expertise to deliver customized digital solutions. We focus on understanding your requirements, building user-friendly products, testing functionality, and delivering solutions designed to support your business growth.",
      },
      {
        id: "faq-3",
        question: "Does Zenorix work with startups and small businesses?",
        ans: "Yes. Zenorix works with startups, entrepreneurs, small businesses, and established brands. We tailor our solutions to your business objectives, project scope, and budget.",
      },
      {
        id: "faq-4",
        question: "Can I hire Zenorix for a project if I only have an idea?",
        ans: "Yes. You can approach us with an initial idea, a business problem, or a basic concept. We'll discuss your requirements, identify the essential features, and help define a practical development plan.",
      },
    ],
  },
  {
    id: "cat-2",
    label: "Websites",
    title: "Website development services",
    items: [
      {
        id: "faq-5",
        question: "Does Zenorix provide website development services?",
        ans: "Yes. Zenorix develops modern, responsive websites for businesses, startups, service providers, and online stores. We focus on user experience, performance, mobile compatibility, and a design that reflects your brand.",
      },
      {
        id: "faq-6",
        question: "How much does website development cost?",
        ans: "Website development costs depend on the design, number of pages, functionality, integrations, and technical requirements. Zenorix provides project-specific quotations after understanding your needs and budget.",
      },
      {
        id: "faq-7",
        question: "How long does it take to develop a website?",
        ans: "A straightforward website may take a few weeks, while a complex e-commerce website or custom web application can take longer. The actual timeline depends on the project scope, content readiness, integrations, and feedback cycles.",
      },
      {
        id: "faq-8",
        question: "Does Zenorix build SEO-friendly websites?",
        ans: "Yes. We can build websites with SEO fundamentals such as logical page structure, mobile responsiveness, descriptive URLs, metadata, and performance-conscious development. Search rankings also depend on content quality, competition, authority, and ongoing SEO work.",
      },
      {
        id: "faq-9",
        question: "Can Zenorix develop an e-commerce website for my business?",
        ans: "Yes. We can develop e-commerce websites tailored to your products and sales process, with relevant features such as product catalogues, shopping carts, payment gateway integration, and order management.",
      },
      {
        id: "faq-10",
        question: "Will my website work on mobile phones and tablets?",
        ans: "Yes. We design responsive websites that adapt to mobile phones, tablets, laptops, and desktop screens to provide a consistent user experience across devices.",
      },
    ],
  },
  {
    id: "cat-3",
    label: "Software & Apps",
    title: "Custom software and mobile app development",
    items: [
      {
        id: "faq-11",
        question: "Does Zenorix develop custom software for businesses?",
        ans: "Yes. Zenorix develops custom software based on your business processes and operational requirements. Depending on the project, this may include management dashboards, business automation tools, internal systems, and web-based applications.",
      },
      {
        id: "faq-12",
        question: "Can Zenorix build a mobile application for Android and iOS?",
        ans: "We can discuss and develop mobile application solutions based on your target platforms, functionality, and technical requirements. The development approach will depend on your project scope and performance needs.",
      },
      {
        id: "faq-13",
        question: "What is the difference between a website and a web application?",
        ans: "A website primarily presents information about your business, products, or services. A web application offers interactive functionality, such as user accounts, dashboards, bookings, payments, and business management tools. Zenorix can help you determine which solution fits your requirements.",
      },
      {
        id: "faq-14",
        question: "Can Zenorix integrate third-party APIs and payment gateways?",
        ans: "Yes. Depending on the platform and provider, we can integrate APIs, payment gateways, communication tools, and other third-party services to connect your digital product with the systems your business uses.",
      },
    ],
  },
  {
    id: "cat-4",
    label: "Design & Branding",
    title: "UI/UX design and branding",
    items: [
      {
        id: "faq-15",
        question: "Does Zenorix provide UI/UX design services?",
        ans: "Yes. Zenorix creates user interfaces and user experiences for websites, mobile applications, and digital products. Our design process focuses on usability, visual consistency, clear navigation, and the needs of your target audience.",
      },
      {
        id: "faq-16",
        question: "Can Zenorix create a complete brand identity for my business?",
        ans: "Yes. We can help develop a brand identity that includes logo design, colour palettes, typography, visual assets, and brand guidelines, depending on your requirements.",
      },
      {
        id: "faq-17",
        question: "Can Zenorix redesign my existing website or application?",
        ans: "Yes. We can assess your existing product and discuss improvements to its visual design, user experience, responsiveness, functionality, and technical structure. The scope will depend on the condition of the current product and your objectives.",
      },
    ],
  },
  {
    id: "cat-5",
    label: "Pricing & Support",
    title: "Pricing, delivery and support",
    items: [
      {
        id: "faq-18",
        question: "How much does custom software development cost?",
        ans: "Custom software development pricing depends on the required features, complexity, integrations, security requirements, and maintenance needs. Zenorix prepares tailored quotations based on the scope of each project.",
      },
      {
        id: "faq-19",
        question: "Can I request changes during development?",
        ans: "Yes. We review client feedback throughout the development process. Minor revisions and major scope changes may be handled differently depending on the agreed project scope, timeline, and quotation.",
      },
      {
        id: "faq-20",
        question: "Does Zenorix provide support after project delivery?",
        ans: "We can discuss post-launch technical support, maintenance, bug fixes, and future enhancements according to the project's support agreement. The exact coverage and duration should be confirmed in your proposal.",
      },
      {
        id: "faq-21",
        question: "How can I get a quotation from Zenorix?",
        ans: "Contact Zenorix through the website or email us at zenorix.group@gmail.com. Share your business goals, required features, budget range, and expected timeline. We'll review your requirements and discuss the next steps.",
      },
    ],
  },
]
