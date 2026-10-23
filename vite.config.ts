import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path';
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, getRouteSeo, routes, type RouteSeo } from './src/lib/seo'

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const renderSeoHead = (route: RouteSeo) => {
  const url = `${SITE_URL}${route.path}`
  const image = route.image ?? DEFAULT_IMAGE
  const title = escapeAttr(route.title)
  const description = escapeAttr(route.description)
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Zenorix: website, app and software development in Kerala" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@zenorix_group" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...route.jsonLd.map(
      (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
    ),
  ].join('\n    ')
}

const SEO_BLOCK = /<!-- seo:start -->[\s\S]*<!-- seo:end -->/
const withSeo = (html: string, route: RouteSeo) =>
  html.replace(SEO_BLOCK, `<!-- seo:start -->\n    ${renderSeoHead(route)}\n    <!-- seo:end -->`)

// Gives every route its own crawlable HTML file (title, description, canonical,
// Open Graph, JSON-LD) and writes sitemap.xml. Vercel serves /about from about.html.
const seoPlugin = (): Plugin => {
  let outDir = 'dist'
  return {
    name: 'zenorix-seo',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    transformIndexHtml(html, ctx) {
      const pathname = (ctx.originalUrl ?? '/').split(/[?#]/)[0].replace(/(.)\/+$/, '$1')
      return withSeo(html, getRouteSeo(pathname) ?? routes[0])
    },
    closeBundle() {
      const indexFile = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexFile)) return
      const html = fs.readFileSync(indexFile, 'utf8')
      for (const route of routes) {
        if (route.path === '/') continue
        const file = path.join(outDir, `${route.path.slice(1)}.html`)
        fs.mkdirSync(path.dirname(file), { recursive: true })
        fs.writeFileSync(file, withSeo(html, route))
      }
      const lastmod = new Date().toISOString().slice(0, 10)
      const urls = routes
        .map(
          (r) =>
            `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`,
        )
        .join('\n')
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          swiper: ['swiper'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
})
