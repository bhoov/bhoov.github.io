const sveltePreprocess = require('svelte-preprocess');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', "assets/style.css"],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});
const production = !process.env.ROLLUP_WATCH;


module.exports = {
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          ...(production ? [purgecss] : []) 
        ],
      },
    }),
  ],
};
