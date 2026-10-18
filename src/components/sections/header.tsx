import { useEffect, useState } from "react"
import type { ComponentProps } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { socialLinks } from "../../lib/social-links"

const navigation = [
  { label: "About", path: "about" },
  { label: "Work", path: "work" },
  { label: "Products", path: "products" },
  { label: "Blogs", path: "blogs" },
  { label: "Contact Us", path: "contact" },
]

const services = [
  { label: "Website Development", slug: "/services/website-development" },
  { label: "E-commerce", slug: "/services/ecommerce-development" },
  { label: "Custom Software", slug: "/services/custom-software-development" },
  { label: "Mobile Applications", slug: "/services/mobile-app-development" },
]

const products = [
  { label: "Zellyo", href: "https://zellyo.in" },
  { label: "Zenbrix", href: "https://zenbrix.in" },
]

// On the home page links scroll to a section; on other pages they go to /#section.
const Link = ({ to, smooth: _smooth, offset: _offset, children, className, onClick }: ComponentProps<typeof ScrollLink>) => {
  const { pathname } = useLocation()
  if (to === "contact") {
    return <RouterLink to="/contact" className={className} onClick={onClick}>{children}</RouterLink>
  }
  if (pathname === "/") {
    return <ScrollLink to={to} smooth offset={-88} className={className} onClick={onClick}>{children}</ScrollLink>
  }
  return <RouterLink to={`/#${to}`} className={className} onClick={onClick}>{children}</RouterLink>
}

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY >= 24)
    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
        setIsServicesOpen(false)
        setIsProductsOpen(false)
      }
    }

    document.body.classList.add("zenorix-menu-open")
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.classList.remove("zenorix-menu-open")
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setIsProductsOpen(false)
  }

  return (
    <header className={`zenorix-header ${isFixed ? "is-scrolled" : ""} ${isMenuOpen ? "is-menu-open" : ""}`}>
      <a className="zenorix-header__brand" href="/" aria-label="Zenorix home"><img src="/images/logos/logo.png" alt="Zenorix — Design. Build. Deploy." /></a>
      <nav id="site-navigation" className="zenorix-header__nav" aria-label="Main navigation">
        <RouterLink to="/about" className="zenorix-header__link" onClick={closeMenu}>About</RouterLink>
        <div className={`zenorix-header__dropdown ${isServicesOpen ? "is-open" : ""}`} onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
          <button type="button" className="zenorix-header__link zenorix-header__services-toggle" aria-expanded={isServicesOpen} aria-haspopup="true" onClick={() => setIsServicesOpen((open) => !open)} onKeyDown={(event) => { if (event.key === "Escape") setIsServicesOpen(false) }}>Services<i className="ri-arrow-down-s-line" aria-hidden="true" /></button>
          <div className="zenorix-header__dropdown-menu">
            {services.map(({ label, slug }) => <RouterLink key={label} to={slug} onClick={closeMenu} className="zenorix-header__dropdown-link">{label}</RouterLink>)}
          </div>
        </div>
        {navigation.slice(1).map(({ label, path }) => path === "products" ? (
          <div key={path} className={`zenorix-header__dropdown ${isProductsOpen ? "is-open" : ""}`} onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
            <button type="button" className="zenorix-header__link zenorix-header__services-toggle" aria-expanded={isProductsOpen} aria-haspopup="true" onClick={() => setIsProductsOpen((open) => !open)} onKeyDown={(event) => { if (event.key === "Escape") setIsProductsOpen(false) }}>{label}<i className="ri-arrow-down-s-line" aria-hidden="true" /></button>
            <div className="zenorix-header__dropdown-menu">
              {products.map(({ label: productLabel, href }) => <a key={productLabel} href={href} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="zenorix-header__dropdown-link">{productLabel}</a>)}
            </div>
          </div>
        ) : <Link key={path} to={path} href={`/#${path}`} smooth offset={-88} className="zenorix-header__link" onClick={closeMenu}>{label}</Link>)}
        <Link to="book" href="/#book" smooth offset={-88} className="zenorix-header__talk zenorix-header__drawer-talk" onClick={closeMenu}>Let’s Talk</Link>
        <div className="zenorix-header__mobile-extras">
          <div className="zenorix-header__mobile-contact">
            <a href="mailto:zenorix.group@gmail.com">zenorix.group@gmail.com</a>
            <a href="tel:+916282878105">+91 62828 78105</a>
          </div>
          <div className="zenorix-header__mobile-social" role="group" aria-label="Social media">
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Zenorix on ${label}`} title={label}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="zenorix-header__actions">
        <Link to="book" href="/#book" smooth offset={-88} className="zenorix-header__talk">Let’s Talk</Link>
      </div>
      <button type="button" className="zenorix-header__menu-toggle" aria-controls="site-navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
        <span>{isMenuOpen ? "Close" : "Menu"}</span>
        <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"} aria-hidden="true" />
      </button>
      {isMenuOpen && <button type="button" className="zenorix-header__backdrop" aria-label="Close navigation menu" onClick={closeMenu} />}
    </header>
  )
}

export default Header
