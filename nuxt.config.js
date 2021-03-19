const fs = require('fs');

export default {
  server: {
    host: '0.0.0.0',
    port: 80,
    timing: false,
    https: {
      cert: fs.readFileSync('/etc/letsencrypt/live/photography.jemiloii.com/cert.pem', 'utf8'),
      key: fs.readFileSync('/etc/letsencrypt/live/photography.jemiloii.com/privkey.pem', 'utf8')
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Brian Jemilo II | Photographer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://js.arcgis.com/4.8/esri/themes/dark/main.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/animate.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/bootstrap.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/fancybox.min.css' }
    ],
    script: [
      { src: 'js/jquery.min.js', body: true },
      { src: 'js/modernizr-2.6.2.min.js', body: true },
      { src: 'js/jquery.easing.1.3.js', body: true },
      { src: 'js/bootstrap.min.js', body: true },
      { src: 'js/jquery.waypoints.min.js', body: true },
      { src: 'js/sticky-kit.min.js', body: true },
      { src: 'js/jquery.fancybox.min.js', body: true },
      { src: 'https://js.arcgis.com/4.8/', body: true },
      { src: 'js/main.js', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
