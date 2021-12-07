export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-lang',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/font-awesome.min.css',
    '~/assets/css/themify-icons.css',
    '~/assets/css/elegant-icons.css',
    '~/assets/css/nice-select.css',
    '~/assets/css/slicknav.min.css',
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/common.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    components: ['BIconSearch']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    extend(config){
      config.devServer = {
        ...config.devServer, ...{disableHostCheck: true}
      }
    }
  },

  router:{
    extendRoutes(routes, resolve){
      routes.push({
        path:'/',
        redirect:'/en'
      })
      /*let enAllIndex = routes.findIndex(route=>{return route.name == 'en-all'})
      
      
      if(enAllIndex != -1){
        routes.splice(enAllIndex,1)
      }

      let deAllIndex = routes.findIndex(route=>{return route.name == 'de-all'})

      
      if(deAllIndex != -1){
        routes.splice(deAllIndex,1)
      }
      
      
      routes.push({
        path:'/en/:catchAll(.*)?',
        component:resolve(__dirname, 'pages/en/_.vue')
      })
      routes.push({
        path:'/de/:catchAll(.*)?',
        component:resolve(__dirname, 'pages/de/_.vue')
      })*/
      console.log(routes)
    },
    middleware: ['init']
  },
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH,
    axios:{
      baseURL:process.env.API_URL
    }
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  },
  server:{
    timing:{
      total:true
    },
    port: 4000
  },
   /*
  ** Server Middleware
  */
  serverMiddleware: [
    '~/api'
  ]

}
