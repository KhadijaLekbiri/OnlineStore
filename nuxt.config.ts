// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/content', '@nuxtjs/tailwindcss'],
  tailwindcss: {},
  devServer:{
    port: 4000
  }
})
