import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'vue-scrollto/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/proxy'
  ],

  apollo: {
    // tokenName: 'apollo-token',
    includeNodeModules: true,
    // authenticationType: 'Bearer',
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    //errorHandler: '~/plugins/apollo-error-handler.js',
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3000/api',
        //httpEndpoint: 'https://mm-admin.jakobsenfrukt.no/api',
        wsEndpoint: null,
        // getAuth: () => 'Bearer 8PtFtE3G5i1Mk5eIClv4PWKLsrNPMYlOj15-Gr4uZ5OPUBCwqTj0oeb3erwYueJU'
        httpLinkOptions: {
          headers: {
            'Authorization': 'Bearer 8PtFtE3G5i1Mk5eIClv4PWKLsrNPMYlOj15-Gr4uZ5OPUBCwqTj0oeb3erwYueJU'
          }
        }
      }
    }
  },

  proxy: [
    [ 'https://mm-admin.jakobsenfrukt.no/api', { ws: false } ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
