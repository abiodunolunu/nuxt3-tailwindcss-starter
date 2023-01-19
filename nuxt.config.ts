export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-windicss',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
})
