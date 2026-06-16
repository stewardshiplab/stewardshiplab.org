// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    'nuxt-svgo',
    '@nuxt/content',
    'nuxt-og-image',
  ],
  features: {
    inlineStyles: false,
  },
  svgo: {
    defaultImport: 'component',
  },
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
  content: {
    database: {
      type: 'sqlite',
      filename: ':memory:',
    },
    experimental: { sqliteConnector: 'native' },
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  future: { compatibilityVersion: 4 },
  experimental: {
    typedPages: true,
    extractAsyncDataHandlers: true,
    componentIslands: true,
  },
  compatibilityDate: 'latest',
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
  },
  htmlValidator: {
    failOnError: true,
  },
  /* From nuxt-og-image: https://nuxtseo.com/docs/og-image/getting-started/installation#configuration */
  site: {
    url: 'https://stewardshiplab.org',
    name: 'Software Stewardship Lab',
  },
  /* From nuxt-og-image: https://nuxtseo.com/docs/og-image/api/config */
  ogImage: {
    zeroRuntime: true,
    defaults: {
      width: 1200,
      height: 630,
    },
  },
});
