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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
      { name: 'twitter:site', content: '' },
      { name: 'twitter:title', content: 'Trend.js' },
      { name: 'twitter:description', content: 'Provide JavaScript trends based on GitHub' },
      { name: 'twitter:image', content: '' },
      { name: 'twitter:image:alt', content: 'Trend.js Logo' },

      { name: 'og:title', content: 'Trend.js' },
      { name: 'og:description', content: 'Provide JavaScript trends based on GitHub' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: '' },
      { name: 'og:image', content: '' }
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
