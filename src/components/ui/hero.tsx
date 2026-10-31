"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { socialLinks } from "../../lib/social-links"

export default function ShaderShowcase() {
  return (
    <section id="home" aria-labelledby="home-hero-title" className="relative min-h-screen overflow-hidden bg-black">
      <MeshGradient className="absolute inset-0 h-full w-full" colors={["#07050d", "#160b25", "#2a183f", "#39234f", "#0d0718", "#241138", "#080510"]} speed={0.38} />
      <MeshGradient className="absolute inset-0 h-full w-full opacity-45 mix-blend-screen" colors={["#090510", "#201035", "#3b1e59", "#4d3067", "#11081d", "#562b73", "#170b29"]} speed={0.29} />
      <MeshGradient className="absolute inset-0 h-full w-full opacity-25 mix-blend-screen" colors={["#08040e", "#32154d", "#19102b", "#603579", "#12081e", "#44205f"]} speed={0.48} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,3,10,.3)_0%,rgba(5,3,10,.25)_52%,rgba(4,2,8,.38)_100%)]" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 content-center gap-12 px-6 pb-24 pt-36 text-white sm:px-10 sm:pb-28 lg:grid-cols-[1.04fr_.96fr] lg:gap-0 lg:px-12 lg:pb-32 lg:pt-36">
        <div className="flex min-w-0 -translate-y-5 flex-col justify-center lg:-translate-y-12 lg:pr-10 xl:pr-14">
          <motion.h1 id="home-hero-title" className="mb-8 max-w-4xl text-[clamp(2.75rem,7.1vw,7.6rem)] font-bold leading-[0.94] tracking-[-0.065em] [overflow-wrap:anywhere]" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <span className="block whitespace-nowrap text-[#f7f2ff]" style={{ color: "#f7f2ff", WebkitTextFillColor: "#f7f2ff" }}>Digital Solutions.</span>
            <span className="block whitespace-nowrap text-[#dfbdff]" style={{ color: "#dfbdff", WebkitTextFillColor: "#dfbdff" }}>Built for Growth.</span>
          </motion.h1>

          <p className="mb-8 max-w-xl text-base font-medium leading-relaxed text-white/90 sm:text-lg">Website, e-commerce, software and mobile app development company in Kozhikode (Calicut), Kerala.</p>

          <a href="#book" aria-label="Start a Project — go to the project enquiry section" className="hero-project-cta inline-flex min-h-0 w-max self-start items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold leading-tight text-[#111] transition-colors hover:bg-[#eaff83] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eaff83] sm:gap-3.5 sm:px-7 sm:py-3.5 sm:text-lg" style={{ display: "inline-flex", width: "max-content", minWidth: 0, alignSelf: "flex-start", color: "#111111", fontSize: "18px", fontWeight: 700, lineHeight: 1.25, whiteSpace: "nowrap", opacity: 1, visibility: "visible" }}>
            <span style={{ display: "inline-block", color: "#111111", opacity: 1, visibility: "visible" }}>Start a Project</span>
            <svg aria-hidden="true" style={{ display: "block", width: 22, height: 22, flexShrink: 0, color: "#111111", opacity: 1, visibility: "visible" }} viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
          </a>

          <motion.nav aria-label="Social media" className="zenorix-hero__social mt-10 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Zenorix on ${label}`} title={label} className="inline-flex size-11 items-center justify-center rounded-full border border-white/45 text-white/85 transition-colors hover:border-[#eaff83] hover:bg-white/10 hover:text-[#eaff83] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eaff83] sm:size-12">
                <Icon aria-hidden="true" className="text-lg" />
              </a>
            ))}
          </motion.nav>
        </div>

        <div className="flex min-w-0 flex-col justify-end border-white/20 lg:border-l lg:pl-10 lg:pt-48 xl:pl-14 xl:pt-56">
          <motion.div className="w-full max-w-2xl lg:ml-auto" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
            <h2 className="mb-3 flex items-center gap-2.5 text-sm font-semibold text-white/85 sm:text-base"><span aria-hidden="true" className="text-base text-[#eaff83]">✦</span> What we do</h2>
            <ul aria-label="Zenorix services" className="mb-5">
              {[
                { service: "WEB DEVELOPMENT", href: "/services/website-development" },
                { service: "CUSTOM SOFTWARE DEVELOPMENT", href: "/services/custom-software-development" },
                { service: "MOBILE APP DEVELOPMENT", href: "/services/mobile-app-development" },
                { service: "UI/UX DESIGN & BRANDING", href: "/services/ui-ux-design-branding" },
              ].map(({ service, href }, index) => (
                <li key={service} className="group flex min-w-0 items-center gap-1.5 border-b border-white/25 py-2.5 sm:gap-3 sm:py-3">
                  <span className="shrink-0 font-mono text-[11px] text-white/80 sm:text-xs">{String(index + 1).padStart(3, "0")}</span>
                  <span aria-hidden="true" className="h-px min-w-3 flex-1 bg-white/25 transition-colors group-hover:bg-[#eaff83]/80" />
                  <a href={href} className="min-w-0 text-right font-mono text-[clamp(.6rem,.95vw,.82rem)] font-semibold leading-snug text-white transition-colors hover:text-[#eaff83] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eaff83]">{service}</a>
                  <a href={href} aria-label={`Explore ${service.toLowerCase()} services`} className="shrink-0 rounded-sm px-0.5 text-base text-white transition-colors hover:text-[#eaff83] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eaff83]">↗</a>
                </li>
              ))}
            </ul>
            <p className="max-w-2xl text-sm font-normal leading-relaxed text-white/90 sm:text-base sm:leading-[1.65] lg:mt-7 lg:text-[clamp(.9rem,1.05vw,1.05rem)]">Zenorix is a digital solutions company in Kozhikode, Kerala, helping startups and businesses grow through website development, custom software, mobile app development, UI/UX design, and branding.</p>
          </motion.div>
        </div>

      </div>

    </section>
  )
}
