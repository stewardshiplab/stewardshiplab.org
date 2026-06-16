// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    'nuxt-svgo',
    '@nuxt/content',
    'nuxt-og-image',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Software Stewardship Lab',
      htmlAttrs: { lang: 'en' },
      script: [
        {
          'data-goatcounter': 'https://stewardshiplab.goatcounter.com/count',
          'src': '//gc.zgo.at/count.js',
          'async': '',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://stewardshiplab.org',
    name: 'Software Stewardship Lab',
  },
  content: {
    database: {
      type: 'sqlite',
      filename: ':memory:',
    },
    experimental: { sqliteConnector: 'native' },
  },
  routeRules: {
    '/reports/foundations': {
      prerender: true,
    },
    '/foundations': {
      redirect: {
        to: '/reports/foundations',
        statusCode: 308,
      },
    },
  },
  future: { compatibilityVersion: 4 },
  features: {
    inlineStyles: false,
  },
  experimental: {
    typedPages: true,
    extractAsyncDataHandlers: true,
    componentIslands: true,
  },
  compatibilityDate: 'latest',
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    providers: {
      adobe: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
      google: false,
      googleicons: false,
      npm: false,
    },
    defaults: {
      weights: [400, 500, 700],
    },
    families: [
      {
        name: 'Montreuil',
        src: '/fonts/montreuil/Montreuil-Regular.woff2',
        weight: 400,
        global: true,
      },
      {
        name: 'Montreuil',
        src: '/fonts/montreuil/Montreuil-Medium.woff2',
        weight: 500,
        global: true,
      },
      {
        name: 'Valkyrie',
        src: '/fonts/valkyrie/valkyrie_b_regular.woff2',
        weight: 400,
        global: true,
      },
      {
        name: 'Valkyrie',
        src: '/fonts/valkyrie/valkyrie_b_bold.woff2',
        weight: 700,
        global: true,
      },
    ],
  },
  htmlValidator: {
    failOnError: true,
  },
  ogImage: {
    zeroRuntime: true,
    defaults: {
      width: 1200,
      height: 630,
    },
  },
  svgo: {
    defaultImport: 'component',
  },
})
