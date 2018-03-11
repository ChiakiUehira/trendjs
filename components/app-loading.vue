<template>
  <transition name="fade">
    <div v-if="isLoading" class="root">
      <div class="loader">
        <span></span>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    computed: {
      isLoading() {
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
  }

  .loader > span{
    display: inline-block;
    height: 60px;
    width: 60px;
    animation: ball-scale 1s 0s ease-in-out infinite;
    background: #e0e0e0;
    border-radius: 100%;
  }

  @keyframes ball-scale {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0)
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0
    }
  }

</style>
