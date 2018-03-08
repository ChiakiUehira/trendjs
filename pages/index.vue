<template>
  <section class="container">
    <div>
      <ul>
        <li v-for="(item,index) in feed" :key="item.title">
          <nuxt-link :to="`${index}`">{{item.title}}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    async beforeCreate(){
      const {data} = await axios.get('http://localhost:3232/feed')
      this.$store.commit('SET_FEED', data.feed.items)
    },
    computed: {
      feed(){
        return this.$store.state.feed
      }
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
