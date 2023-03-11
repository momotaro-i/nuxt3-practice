// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    babel: {
      presets: ['@nuxt/babel-preset-app', 'vca-jsx'],
    },
  },
  css: ["/assets/css/style.css"],
  app: {
    head:{
      title:"Nuxt 3 基本",
      meta: [{name : "description" , content: "練習です"}],
    }
  },

});
