export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'], // importante!
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
})
