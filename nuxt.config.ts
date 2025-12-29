// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  srcDir: 'app/',
  dir: {
    public: '../public',
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api',
    },
  },

  app: {
    head: {
      title: 'PT Janu Putra Sejahtera - Perusahaan Peternakan Terintegrasi',
      htmlAttrs: {
        lang: 'id',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'PT Janu Putra Sejahtera - Perusahaan peternakan ayam terintegrasi terkemuka di Indonesia yang menyediakan produk berkualitas dan terjangkau.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
    // pageTransition: {
    //   name: 'page',
    //   // Avoid blank gaps during route changes (keep current page until next enters)
    //   mode: 'in-out',
    // },
    // layoutTransition: {
    //   name: 'layout',
    //   mode: 'in-out',
    // },
  },

  i18n: {
    restructureDir: false,
    strategy: 'no_prefix',
    defaultLocale: 'id',
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'id', language: 'id-ID', file: 'id.json', name: 'Bahasa Indonesia' },
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'id',
    },
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      routes: [
        '/berita',
      ],
    },
  },

  routeRules: {
    '/berita/**': { ssr: true },
  },
})
