module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Trend.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
  },
  css: [
    'github-markdown-css/github-markdown.css'
  ],
  modules: [
    '@nuxtjs/pwa',
  ],
  head: {
    title: 'Trend.js',
    meta: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'https://trendjs.net' },
      { name: 'twitter:title', content: 'Trend.js' },
      { name: 'twitter:description', content: 'Provide JavaScript trends based on GitHub' },
      { name: 'twitter:image', content: 'https://trendjs.net/card.png' },
      { name: 'twitter:image:alt', content: 'Trend.js Logo' },

      { name: 'og:title', content: 'Trend.js' },
      { name: 'og:description', content: 'Provide JavaScript trends based on GitHub' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://trendjs.net' },
      { name: 'og:image', content: 'https://trendjs.net/card.png' }
    ],
  },
  meta: {
    mobileAppIOS: true,
    viewport: 'width=device-width, initial-scale=1, user-scalable=no',
    name: 'Trend.js',
    description: 'Provide JavaScript trends based on GitHub',
    theme_color: '#000',
    lang: 'ja'
  },
  manifest: {
    name: 'Trend.js',
    short_name: 'Trend.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    description: 'Provide JavaScript trends based on GitHub'
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://us-central1-trendjs-4830c.cloudfunctions.net/trends/.*',
        handler: 'networkFirst',
        method: 'GET',
        options: {
          cacheName: 'trends',
          cacheExpiration: {
            maxAgeSeconds: 60 * 60,
          },
        },
      },
      {
        urlPattern: 'https://api.github.com/repos/.*',
        handler: 'networkFirst',
        method: 'GET',
        options: {
          cacheName: 'repos',
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 60,
          },
        },
      }
    ]
  },
  generate: {
    fallback: true,
  },
  plugins: [
    '~/plugins/touch.js'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  mode:'spa',
  build: {
    vendor:['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
