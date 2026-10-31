import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import purgeCSSPlugin from '@fullhuman/postcss-purgecss'

const purgecss = purgeCSSPlugin.default || purgeCSSPlugin

// Strip unused Bootstrap rules only; the site's own CSS is left untouched.
const bootstrapOnly = (opts) => {
  const plugin = purgecss(opts)
  return {
    postcssPlugin: 'bootstrap-purge',
    OnceExit(root, helpers) {
      const file = root.source?.input?.file ?? ''
      if (!file.includes('node_modules/bootstrap')) return
      return plugin.OnceExit(root, helpers)
    },
  }
}
bootstrapOnly.postcss = true

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    bootstrapOnly({
      content: ['./index.html', './src/**/*.{ts,tsx}'],
      safelist: {
        standard: ['show', 'showing', 'active', 'fade', 'collapse', 'collapsing', 'collapsed', 'disabled'],
        greedy: [/^accordion/, /^modal/, /^offcanvas/, /^navbar/, /^dropdown/],
      },
    }),
  ],
}
