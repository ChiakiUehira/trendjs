<template>
  <div class="app">
    <app-intro />
    <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight">
      <nuxt/>
    </v-touch>
  </div>
</template>

<script>
import appIntro from '~/components/app-intro'
export default {
  components: {
    appIntro
  },
  methods: {
    onSwipeLeft () {
      console.log(this.$router);
      // this.$router.go(-1)
    },
    onSwipeRight () {
      this.$router.go(1)
    }
  },
}
</script>


<style scoped>
.app {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
}
</style>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  background-color: #f3f3f3;
}
@media screen and (max-width: 600px){
  body {
    background-color: #fff;
  }
}
.page-inner {
  padding: 0 20px;
}
.slide-left-enter,
.slide-right-leave-active {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  transform: translateX(100%);
}
.slide-left-leave-active,
.slide-right-enter {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  transform: translateX(-100%);
}
</style>
