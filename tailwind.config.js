const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV

module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production
  },
  theme: {
    extend: {
      colors: {
        teal: {
            100: "#cdece3",
            200: "#9bd9c6",
            300: "#68c6aa",
            400: "#36b38d",
            500: "#04a071",
            600: "#03805a",
            700: "#026044",
            800: "#02402d",
            900: "#012017"
        },
      },
    },
  },
  variants: {
    margin: ["responsive", "first"]
  },
  plugins: [],
}
