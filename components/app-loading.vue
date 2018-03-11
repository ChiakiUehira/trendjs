<template>
  <transition name="fade">
    <div v-if="isLoading" class="root">
      <div class="logo">
        <img src="/logo.svg">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>


<style scoped>
.root {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

