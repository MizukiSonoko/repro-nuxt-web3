// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-web3'
  ],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  }
})
