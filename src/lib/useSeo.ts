import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { DEFAULT_IMAGE, SITE_URL, getRouteSeo } from "./seo"

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

// Keeps <head> in sync on client-side navigation. The first paint already has
// the right tags from the prerendered HTML (see seoPlugin in vite.config.ts).
export const useSeo = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname
    const seo = getRouteSeo(path)
    if (!seo) return
    const url = `${SITE_URL}${seo.path === "/" ? "/" : seo.path}`
    const image = seo.image ?? DEFAULT_IMAGE

    document.title = seo.title
    setMeta("name", "description", seo.description)
    setMeta("property", "og:title", seo.title)
    setMeta("property", "og:description", seo.description)
    setMeta("property", "og:url", url)
    setMeta("property", "og:image", image)
    setMeta("name", "twitter:title", seo.title)
    setMeta("name", "twitter:description", seo.description)
    setMeta("name", "twitter:image", image)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = url

    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove())
    seo.jsonLd.forEach((data) => {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    })
  }, [pathname])
}
