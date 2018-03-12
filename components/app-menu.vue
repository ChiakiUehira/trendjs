<template>
  <div v-if="isOpen" class="menu" @click="handleClick">
    <div class="center">
      <div class="logo">
        <nuxt-link to="/">
          <img src="/logo.svg">
        </nuxt-link>
        <div class="version">
          version 0.9.1 beta
        </div>
        <div class="links">
          <div class="link">
            <nuxt-link to="/">
              REPOSITORY
            </nuxt-link>
          </div>
          <div class="link">
            <a href="https://github.com/pixelgram/trendjs" target="_blank">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isOpen () {
      return this.$store.state.isOpen
    }
  },
  methods: {
    handleClick () {
      return this.$store.commit('SET_IS_OPEN', false)
    }
  }
}
</script>


<style scoped>
.menu {
  background: #fff;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.version {
  margin-top: 10px;
  margin-bottom: 50px;
  font-size: 10px;
  text-align: center;
  font-weight: bold;
}

.links {
  text-align: center;
}

.link a {
  font-size: 20px;
  letter-spacing: 2px;
  color: #000;
  text-decoration: none;
  margin-bottom: 20px;
  display: inline-block;
}

</style>
