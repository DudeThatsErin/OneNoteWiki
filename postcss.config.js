module.exports = {
  plugins: {
    // Tailwind v4's PostCSS plugin includes autoprefixing itself (via
    // Lightning CSS), so the separate `autoprefixer` plugin from v3 is gone.
    '@tailwindcss/postcss': {},
  },
}
