// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))
const siteConfigStackPath = resolve(rootDir, 'utils', 'site-config-stack.ts')
const siteConfigStackUrlsPath = resolve(rootDir, 'utils', 'site-config-stack-urls.ts')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  srcDir: 'app/',
  dir: {
    public: '../public',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/image',
  ],

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://api-panel-dev.januputrasejahtera.com',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://januputrasejahtera.com',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'PT Janu Putra Sejahtera',
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID || 'G-Z093JDLSFF',
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
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://januputrasejahtera.com',
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
    alias: {
      'site-config-stack': siteConfigStackPath,
      'site-config-stack/urls': siteConfigStackUrlsPath,
    },
    prerender: {
      routes: [
        '/berita',
      ],
    },
  },

  routeRules: {
    '/berita/**': { ssr: true },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://januputrasejahtera.com',
    name: process.env.NUXT_PUBLIC_SITE_NAME || 'PT Janu Putra Sejahtera',
  },

  robots: {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: (process.env.NUXT_PUBLIC_SITE_URL || 'https://januputrasejahtera.com') + '/sitemap.xml',
  },

  sitemap: {
    gzip: true,
  },

  alias: {
    'site-config-stack': siteConfigStackPath,
    'site-config-stack/urls': siteConfigStackUrlsPath,
  },

})
