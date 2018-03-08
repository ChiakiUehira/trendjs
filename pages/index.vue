<template>
  <section class="container">
    <div>
      <ul>
        <li v-for="repo in daily" :key="repo.title">
          <nuxt-link :to="`${repo.author}@${repo.name}`">{{repo.name}}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    async created () {
      if (!this.daily.length) {
        this.$store.dispatch('fetchDaily')
      }
    },
    computed: {
      daily () {
        return this.$store.state.daily
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
