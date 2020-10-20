const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
