import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Lupa Dinner",
      meta: [
        { name: "description", content: "" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: 'og:site_name',  content: 'Lupa Dinner'},
        { property: 'og:title',  content: 'Lupa Dinner'},
        { property: 'og:description',  content: 'Lupa Dinner'},
      ],
      script: [
        
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg' },
      ],
    }
  },
  css: [
    '~/assets/css/ds-main.scss',
    '~/public/css/theme.scss',
    '~/public/css/style.scss',
  ],
  components: {
    "dirs": [
      "~/components"
    ]
  },
  modules: [
  ],
});
