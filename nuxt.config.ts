export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title : 'Movies Explorer'
    }
  }, 
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_BASE_IMAGE_URL: process.env.TMDB_BASE_IMAGE_URL
},
})
