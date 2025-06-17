import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'], // importante!
  devtools: { enabled: true },
 vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});