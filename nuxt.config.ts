export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
})
