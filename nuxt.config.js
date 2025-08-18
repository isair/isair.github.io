export default {
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Baris Sencan',
    title: 'Baris Sencan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Baris Sencan — engineering leader and product-focused technologist. Building delightful, scalable experiences across mobile, web, and platforms.',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Baris Sencan' },
      { hid: 'og:title', property: 'og:title', content: 'Baris Sencan' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Engineering leader and hands-on builder. Selected work, experience, and downloads.',
      },
      { hid: 'og:image', property: 'og:image', content: '/img/banner.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Baris Sencan' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Engineering leader and hands-on builder. Selected work, experience, and downloads.',
      },
      { hid: 'twitter:image', name: 'twitter:image', content: '/img/banner.jpg' },
      { name: 'theme-color', content: '#272f41' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
      { rel: 'canonical', href: 'https://barissencan.com' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'Baris Sencan',
      theme_color: '#272f41',
    },
    manifest: {
      name: 'Baris Sencan',
      background_color: '#272f41',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: {
      font: {
        family: 'Inter',
      },
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: '#fb5c04',
          secondary: '#fdcc02',
          accent: '#8c5064',
          background: '#272f41',
          panel: '#403454',
          drawer: '#272f41',
        },
        dark: {
          primary: '#fb5c04',
          secondary: '#fdcc02',
          accent: '#8c5064',
          background: '#272f41',
          panel: '#403454',
          drawer: '#272f41',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Google Analytics configuration https://google-analytics.nuxtjs.org/options
  googleAnalytics: {
    id: 'UA-20758307-1',
  },
};
