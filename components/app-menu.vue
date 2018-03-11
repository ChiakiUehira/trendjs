<template>
  <div v-if="isOpen" class="menu">

  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    isOpen () {
      return this.$store.state.isOpen
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

.menu.active {
  transform: scale(100);
}

</style>
