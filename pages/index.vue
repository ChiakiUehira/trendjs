<template>
  <section class="container">
    <div>
      <ul>
        <li v-for="trend in trends.items" :key="trend.title">{{trend.link}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Parser from 'rss-parser'
  import axios from 'axios'

  export default {
    async asyncData(){
      const parser = new Parser()
      let trends = []
      const feed = await parser.parseURL('http://github-trends.ryotarai.info/rss/github_trends_javascript_daily.rss')

      feed.items.forEach(async (item) => {
        const owner = item.link.split('/')[item.link.split('/').length - 2]
        const repo = item.link.split('/')[item.link.split('/').length - 1]
        const request = `https://api.github.com/repos/${owner}/${repo}`

        const data = await axios.get(request)
        trends.push({trend: data})
      })

      return {trends}
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
