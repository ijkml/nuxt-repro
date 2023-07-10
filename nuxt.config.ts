// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      noscript: [{ innerHTML: `<meta charset="utf-8" />`, tagPriority: 200 }],
    },
  },
});
