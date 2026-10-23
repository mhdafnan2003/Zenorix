export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  description: string
  datePublished: string
  author: string
  readingMinutes: number
  category: string
  content: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "website-cost-in-kerala",
    title: "How Much Does a Website Cost in Kerala in 2026?",
    description:
      "What decides the cost of a business website in Kerala in 2026: pages, design, features, content and support. Know what to ask before you get a quote.",
    datePublished: "2026-10-23",
    author: "Zenorix Team",
    readingMinutes: 5,
    category: "Website Development",
    content: [
      { type: "p", text: "If you ask five website developers in Kerala for a price, you may get five very different numbers. That is normal, because \"a website\" can mean anything from a one-page profile to a full online store. The useful question is not \"what is the price?\" but \"what decides the price?\". This guide explains it so you can compare quotes fairly." },
      { type: "h2", text: "1. The number of pages and the type of site" },
      { type: "p", text: "A simple one-page landing page is the cheapest. A five to ten page business website costs more, and a site with a catalogue, blog, booking system or customer login costs more again. An online store sits at the top of this range because it needs product management, payments and order handling." },
      { type: "h2", text: "2. Custom design or a ready-made template" },
      { type: "p", text: "Template-based sites are faster and cheaper but look similar to many others. A custom design is planned around your brand and customers, which takes more design time but helps you stand out and convert more visitors." },
      { type: "h2", text: "3. Features and integrations" },
      { type: "p", text: "Every extra feature adds work. Common ones are:" },
      { type: "ul", items: ["Online payments such as Razorpay or UPI", "Appointment or table booking", "WhatsApp chat and enquiry forms", "A blog or content management system you can edit yourself", "Multiple languages, for example English and Malayalam", "Customer accounts, dashboards or admin panels"] },
      { type: "h2", text: "4. Content: text, photos and video" },
      { type: "p", text: "A site is only as good as its content. If you already have professional photos and clear text, the project is faster. If the developer has to write copy, edit photos or shoot content, expect that to be quoted separately." },
      { type: "h2", text: "5. Search engine optimisation" },
      { type: "p", text: "Basic technical SEO should be included in any good website: fast loading, mobile-friendly layout, proper headings, page titles and descriptions, and a sitemap. Ongoing SEO work after launch is separate and not usually part of the build price." },
      { type: "h2", text: "6. Hosting, domain and support after launch" },
      { type: "p", text: "Ask what is included. A domain name and hosting are yearly costs. Some developers include a period of free support and fixes after launch; others charge for every change. Clarify this before you sign." },
      { type: "h2", text: "How to compare quotes properly" },
      { type: "ol", items: ["Ask each developer for a written list of exactly what is included.", "Check that the price covers design, development, testing and launch.", "Ask who owns the website and its code after you pay.", "Ask what happens if you want changes after launch.", "Look at their previous work and speak to a past client if you can."] },
      { type: "p", text: "A very low quote often leaves out things you will need later, and a very high one is not always better. A clear, itemised, fixed quote is the best sign of a trustworthy developer." },
      { type: "h2", text: "Get a fixed quote from Zenorix" },
      { type: "p", text: "At Zenorix, a Kozhikode (Calicut) based web development company, we start with a free consultation to understand your business, then send a fixed quote with no hidden charges. See our website development service or contact us to describe your project." },
    ],
  },
  {
    slug: "how-to-choose-a-website-developer-in-kerala",
    title: "How to Choose a Website Developer in Kerala: 10 Questions to Ask",
    description:
      "Ten practical questions to ask before hiring a website developer or web design company in Kerala, so you pick a reliable partner and avoid costly mistakes.",
    datePublished: "2026-10-23",
    author: "Zenorix Team",
    readingMinutes: 5,
    category: "Website Development",
    content: [
      { type: "p", text: "Choosing who builds your website is one of the most important early decisions for a business. A good developer saves you time and brings customers; a poor choice can cost months and money. These ten questions help you judge a website developer or web design company in Kerala before you commit." },
      { type: "h2", text: "The 10 questions" },
      { type: "ol", items: [
        "Can I see websites you have built? Look at live sites, not only screenshots, and open them on your phone.",
        "Have you worked with businesses like mine? Experience in your industry means fewer surprises.",
        "What exactly is included in the price? Get design, development, testing, hosting setup and launch in writing.",
        "How long will it take? A clear timeline with milestones is a good sign.",
        "Will my website work well on mobile? Most visitors in Kerala browse on phones.",
        "Will the site be built to rank on Google? Ask about page speed, headings, titles and descriptions.",
        "Who owns the website and its code after I pay? You should own your site and content.",
        "What happens after launch? Ask about support, bug fixes and how changes are charged.",
        "Can I update the content myself? A simple content management system saves you money over time.",
        "Who will I actually talk to? You want a clear point of contact who replies promptly.",
      ] },
      { type: "h2", text: "Red flags to watch for" },
      { type: "ul", items: ["Prices that are far below every other quote, with no list of what is included", "No portfolio, or only designs that cannot be visited online", "Pressure to pay everything upfront with no milestones", "Vague answers about ownership, hosting or support", "Promises of \"number one on Google in 7 days\""] },
      { type: "h2", text: "Local or remote developer?" },
      { type: "p", text: "A developer based in your area is easier to meet and understands the local market. Many Kerala businesses also work remotely over calls and WhatsApp with developers elsewhere in the state. What matters most is clear communication and a proven track record." },
      { type: "h2", text: "Talk to Zenorix" },
      { type: "p", text: "Zenorix is a website, e-commerce, software and mobile app development company in Kozhikode (Calicut), Kerala. We are happy to answer all ten questions above for your project. Contact us for a free consultation." },
    ],
  },
  {
    slug: "website-vs-instagram-page-for-business",
    title: "Website vs Instagram Page: What a Small Business Really Needs",
    description:
      "Is an Instagram page enough for your business, or do you need a website? A clear comparison for small businesses and shops in Kerala.",
    datePublished: "2026-10-23",
    author: "Zenorix Team",
    readingMinutes: 4,
    category: "Business Growth",
    content: [
      { type: "p", text: "Many small businesses start on Instagram, and that works well for showing products and talking to customers. But a social media page and a website do different jobs. Here is how to decide what you need." },
      { type: "h2", text: "What an Instagram page does well" },
      { type: "ul", items: ["Quick to set up and free", "Great for photos, reels and daily updates", "Direct messages make it easy for customers to reach you", "Helps people discover you through hashtags and sharing"] },
      { type: "h2", text: "What only a website gives you" },
      { type: "ul", items: ["You own it. The platform cannot change the rules, hide your reach or lock your account.", "Google search: people looking for your service find your website, not only your posts.", "Trust: a professional website with your address, services and reviews makes new customers more confident.", "Sales and bookings: online ordering, payments and appointment booking work best on your own site.", "Information in one place: prices, services, location, FAQs and contact details, always available."] },
      { type: "h2", text: "So which one should you choose?" },
      { type: "p", text: "You do not have to choose. The strongest approach is to use both: Instagram to attract attention and a website to turn that attention into customers. Put your website link in your Instagram profile and use it to take bookings, orders and enquiries." },
      { type: "h2", text: "When a website matters most" },
      { type: "ul", items: ["You offer services that people search for on Google, such as clinics, interior design, tourism or education", "You want to take orders or bookings online", "You want customers to trust you before they contact you", "You plan to run ads, where a website converts visitors better than a profile"] },
      { type: "h2", text: "Start simple" },
      { type: "p", text: "A website does not need to be large. A clean, fast, mobile-friendly site with your services, photos, location and a WhatsApp button is enough to begin. Zenorix builds business websites and online stores for companies in Kozhikode and across Kerala. Contact us for a free consultation." },
    ],
  },
  {
    slug: "ecommerce-website-cost-in-india",
    title: "E-commerce Website Cost in India: Custom Store vs Ready-Made Platform",
    description:
      "Compare a custom-built online store with a ready-made platform: what drives e-commerce website cost in India and which option suits your business.",
    datePublished: "2026-10-23",
    author: "Zenorix Team",
    readingMinutes: 6,
    category: "E-commerce",
    content: [
      { type: "p", text: "Starting an online store in India means choosing between a ready-made platform (a subscription store builder with templates) and a custom-built store made for your business. Both can work. The right choice depends on your products, budget and plans for growth." },
      { type: "h2", text: "What a ready-made platform gives you" },
      { type: "ul", items: ["Fast setup, since you choose a template and add products", "Lower upfront cost, with a monthly or yearly subscription instead", "Standard features such as a cart, checkout and basic reports", "Less control over design, features and how your data is handled"] },
      { type: "h2", text: "What a custom-built store gives you" },
      { type: "ul", items: ["A design and checkout flow planned around your brand and customers", "Features built for how you sell, such as custom pricing, bundles, B2B orders or delivery rules", "No dependence on a template's limits, and you own the code", "Higher upfront cost, but usually lower long-term costs when you need many custom features"] },
      { type: "h2", text: "What actually drives the cost of an online store" },
      { type: "ol", items: ["Number of products and how they are organised (categories, variants such as size and colour)", "Payment gateways such as Razorpay, UPI and cards, and cash on delivery", "Shipping and delivery integration, including delivery charges by area", "GST-ready invoices and order emails", "Admin panel for managing products, stock and orders", "Customer accounts, wishlists, coupons and reviews", "Design: a custom design costs more than adapting a template", "Hosting, security and support after launch"] },
      { type: "h2", text: "Which one should you choose?" },
      { type: "p", text: "A ready-made platform suits a small catalogue and a quick start. A custom store makes sense when you have a larger or unusual catalogue, need features a template cannot offer, or want full control over your brand and customer data. Many businesses start simple and move to a custom store as they grow." },
      { type: "h2", text: "Questions to ask any developer before you start" },
      { type: "ul", items: ["Which payment gateways are included, and who sets them up?", "How will I add and manage products and orders?", "Will the store work well on mobile?", "Who owns the store and its code?", "What support is included after launch?"] },
      { type: "h2", text: "Get a fixed quote" },
      { type: "p", text: "Zenorix builds custom e-commerce websites for businesses in Kozhikode, across Kerala and India, with Indian payment gateways and order management. We start with a free consultation and then send a fixed quote. See our e-commerce development service or contact us to talk through your store." },
    ],
  },
  {
    slug: "flutter-vs-native-app-for-kerala-startup",
    title: "Flutter vs Native: Which App Is Right for a Kerala Startup?",
    description:
      "Should your startup build a Flutter cross-platform app or separate native Android and iOS apps? A simple comparison on cost, speed and performance.",
    datePublished: "2026-10-23",
    author: "Zenorix Team",
    readingMinutes: 5,
    category: "Mobile Apps",
    content: [
      { type: "p", text: "If you are building a mobile app for your startup, one of the first questions is whether to build with Flutter (one app for both Android and iOS) or to build native apps (separate apps for each platform). Here is a plain comparison to help you decide." },
      { type: "h2", text: "What is a Flutter app?" },
      { type: "p", text: "Flutter is a framework that lets developers write one codebase that runs on both Android and iOS. You get two apps from one project, with a consistent look and feel." },
      { type: "h2", text: "What is a native app?" },
      { type: "p", text: "A native app is written separately for each platform: one for Android and one for iOS. Each uses the tools made specifically for that phone system." },
      { type: "h2", text: "Flutter vs native at a glance" },
      { type: "ul", items: ["Cost: Flutter is usually lower, because you build and maintain one codebase. Native means two builds.", "Speed to launch: Flutter is usually faster, which helps when you want to test your idea quickly.", "Performance: native can be better for very heavy apps such as advanced games or complex camera and sensor features. For most business apps, Flutter performs well.", "Updates: with Flutter, one change updates both platforms.", "Platform features: native gets the newest phone features first, though Flutter supports most of what business apps need."] },
      { type: "h2", text: "Which is right for your startup?" },
      { type: "p", text: "Choose Flutter if you want to launch on Android and iOS quickly, have a limited budget, and are building a typical business, booking, delivery, learning or service app. Choose native if your app depends on heavy performance or very specific phone features, or if you only need one platform." },
      { type: "h2", text: "A practical approach for startups" },
      { type: "ol", items: ["Define the smallest version of your app that tests your idea.", "Design the screens and flows first and review a clickable prototype.", "Build the first version with the approach that fits your budget and timeline.", "Launch, collect feedback from real users, then improve."] },
      { type: "h2", text: "Talk to Zenorix" },
      { type: "p", text: "Zenorix designs and builds Android and iOS apps for startups and businesses in Kerala and across India, including cross-platform apps with Flutter. See our mobile app development service, or contact us for a free consultation and a fixed quote." },
    ],
  },
  {
    slug: "billing-and-inventory-software-for-kerala-retail-shops",
    title: "Billing and Inventory Software for Kerala Retail Shops",
    description:
      "What to look for in billing and inventory software for a retail shop in Kerala, and when custom software is a better choice than an off-the-shelf tool.",
    datePublished: "2026-10-23",
    author: "Zenorix Team",
    readingMinutes: 5,
    category: "Custom Software",
    content: [
      { type: "p", text: "Running a retail shop means tracking what you sell, what is left in stock, and what customers owe. Doing this in notebooks or spreadsheets works at first but gets slow and error-prone as you grow. Billing and inventory software solves this. Here is what to look for." },
      { type: "h2", text: "Features a retail shop should expect" },
      { type: "ul", items: ["Fast billing with GST-ready invoices", "Stock tracking that updates after every sale", "Low-stock alerts, so you reorder in time", "Purchase entry and supplier records", "Customer records, credit balances and payment history", "Daily and monthly sales reports", "Multiple users with different access levels, such as owner and cashier", "Backup of your data so nothing is lost"] },
      { type: "h2", text: "Off-the-shelf software or custom software?" },
      { type: "p", text: "Ready-made billing software is quick to start and works for many shops. It can become limiting when your shop has its own way of working, such as special pricing, multiple branches, custom reports, or connecting billing with your website or app." },
      { type: "p", text: "Custom software is built around your exact process, so you only get the features you need and nothing you do not. It costs more at the start, but it can fit your shop better and grow with you." },
      { type: "h2", text: "When custom software makes sense" },
      { type: "ul", items: ["Your workflow does not fit standard billing tools", "You have several branches and need one combined view", "You want billing connected to an online store or mobile app", "You need reports your current tool cannot give you", "You want to own your data and software without per-user fees"] },
      { type: "h2", text: "Questions to ask before you buy or build" },
      { type: "ol", items: ["Does it handle GST invoices correctly?", "Can I use it on a computer, a tablet or a phone?", "What happens to my data if the internet is down?", "Can I export my data whenever I want?", "Who supports me when something goes wrong?"] },
      { type: "h2", text: "Talk to Zenorix" },
      { type: "p", text: "Zenorix builds custom software, including billing, inventory, dashboards and internal tools, for shops and businesses in Kozhikode and across Kerala. See our custom software development service, or contact us to describe your shop's workflow." },
    ],
  },
  {
    slug: "website-checklist-for-kerala-hotels-homestays-tour-operators",
    title: "Website Checklist for Kerala Hotels, Homestays and Tour Operators",
    description:
      "A practical website checklist for hotels, homestays and tour operators in Kerala: the pages, features and details that turn visitors into bookings.",
    datePublished: "2026-10-23",
    author: "Zenorix Team",
    readingMinutes: 5,
    category: "Website Development",
    content: [
      { type: "p", text: "Travellers research before they book. For a hotel, homestay or tour operator in Kerala, your website is often the first and most important impression. Use this checklist to make sure yours helps visitors trust you and book." },
      { type: "h2", text: "Pages every tourism website needs" },
      { type: "ul", items: ["Home page that shows your best photos and what makes you different in the first screen", "Rooms or packages, with clear descriptions, photos and what is included", "Gallery of real photos and, if possible, short videos", "About page with your story, your team and your location", "Contact page with phone, WhatsApp, email and a map", "FAQ for questions guests always ask, such as check-in time, food and pickup"] },
      { type: "h2", text: "Features that help you get bookings" },
      { type: "ul", items: ["Enquiry form and a WhatsApp button that opens a chat in one tap", "Online booking or a clear way to check availability", "Fast loading on mobile, since most travellers browse on phones", "Click-to-call phone number", "Reviews and testimonials from real guests", "Clear prices or a \"starting from\" price so people know what to expect"] },
      { type: "h2", text: "Details that build trust" },
      { type: "ul", items: ["Your full address, a map and directions from the nearest airport or station", "Photos that show the real property, not only stock images", "Policies written clearly: cancellation, check-in and check-out, house rules", "Licences and recognitions, where you have them"] },
      { type: "h2", text: "Make it easy to find on Google" },
      { type: "ul", items: ["Include your location and type in page titles, for example \"Homestay in Wayanad\"", "Create and fill in your Google Business Profile so you appear on maps", "Write helpful pages about nearby places and experiences guests care about", "Use descriptive text on photos so search engines understand them"] },
      { type: "h2", text: "Do not forget" },
      { type: "ul", items: ["Keep prices, availability and offers up to date", "Reply quickly to enquiries, because speed wins bookings", "Make sure the site works on slow mobile connections"] },
      { type: "h2", text: "Talk to Zenorix" },
      { type: "p", text: "Zenorix has built websites for tourism and hospitality businesses in Kerala. See our website development service, or contact us for a free consultation and a fixed quote." },
    ],
  },
  {
    slug: "get-your-kerala-business-on-google-maps",
    title: "Getting Your Kerala Business on Google Maps: A Step-by-Step Guide",
    description:
      "Step-by-step guide to adding your business to Google Maps with a free Google Business Profile, verifying it, and getting more local customers in Kerala.",
    datePublished: "2026-10-23",
    author: "Zenorix Team",
    readingMinutes: 5,
    category: "Local Business",
    content: [
      { type: "p", text: "When someone in Kozhikode, Kochi or anywhere in Kerala searches for a service \"near me\", Google shows businesses on a map. To appear there, you need a free Google Business Profile. Here is how to set it up." },
      { type: "h2", text: "Step 1: Create your profile" },
      { type: "ol", items: ["Sign in with a Google account that your business will keep using.", "Search for \"Google Business Profile\" and choose to add your business.", "Enter your business name exactly as it appears on your signboard and website.", "Choose your main category carefully, for example \"Website designer\" or \"Hotel\"."] },
      { type: "h2", text: "Step 2: Add your location and service area" },
      { type: "p", text: "Enter your full address and place the pin on the map accurately. If you travel to customers, you can add the areas you serve. Use the same address everywhere online." },
      { type: "h2", text: "Step 3: Add contact details" },
      { type: "p", text: "Add your phone number, website link and opening hours. Keep these identical to the details on your website, Facebook and other listings, because matching details help Google trust your business." },
      { type: "h2", text: "Step 4: Verify your business" },
      { type: "p", text: "Google needs to confirm that your business is real. Depending on your business, verification may be by phone, text, email, a short video of your location, or a postcard. Follow the options Google shows you. Your profile is fully visible once it is verified." },
      { type: "h2", text: "Step 5: Complete your profile" },
      { type: "ul", items: ["Add a clear description of what you do and where", "List your services or products", "Upload real photos of your premises, team and work", "Add your opening date and any attributes that apply"] },
      { type: "h2", text: "Step 6: Collect reviews" },
      { type: "p", text: "Reviews strongly influence who appears first. Ask happy customers to leave a review, share your review link on WhatsApp, and reply to every review politely." },
      { type: "h2", text: "Step 7: Keep it active" },
      { type: "ul", items: ["Post updates, offers and new work regularly", "Add new photos every month", "Answer questions that customers ask", "Update hours for holidays and special days"] },
      { type: "h2", text: "Link your website" },
      { type: "p", text: "Your Business Profile and website work together. A fast, clear website with your address, services and contact details helps customers who find you on the map decide to contact you. Zenorix can build or improve your website. Contact us for a free consultation." },
    ],
  },
]

const order = [
  "website-cost-in-kerala",
  "ecommerce-website-cost-in-india",
  "how-to-choose-a-website-developer-in-kerala",
  "flutter-vs-native-app-for-kerala-startup",
  "billing-and-inventory-software-for-kerala-retail-shops",
  "website-checklist-for-kerala-hotels-homestays-tour-operators",
  "get-your-kerala-business-on-google-maps",
  "website-vs-instagram-page-for-business",
]
blogPosts.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug)
