export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 3030, // default: 3000
  },

  env: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
    GA_MEASUREMENT_ENABLED: process.env.GA_MEASUREMENT_ENABLED,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NikiKunos.com',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Cake Club NFT. Our community is built by cake lovers from all over the world, people that rejoice in the joy that comes with sharing delicious cakes with their family and friends.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', 'animate.css/animate.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/gallery/gallery.client.js', '~/plugins/scroll-tap.client.js', '~/plugins/gtag'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxt/image',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n', '@nuxtjs/markdownit'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 700, 800],
    },
  },

  image: {
    cloudinary: {
      baseURL: process.env.CLOUDINARY_BASE_URL,
    },
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-US.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
  },
}
