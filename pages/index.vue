<template>
  <div class="root">
    <div class="page-inner">
      <div class="repositories">
        <app-repository-card v-for="repository in daily" :key="repository.id" :repository="repository" />
      </div>
    </div>
    <app-nav />
  </div>
</template>

<script>
  import transition from '~/assets/page-transition'
  import appRepositoryCard from '~/components/app-repository-card'
  import appNav from '~/components/app-nav'
  export default {
    transition,
    components: {
      appRepositoryCard,
      appNav
    },
    async created () {
      if (!this.daily.length) {
        await this.$store.dispatch('fetchDaily')
      }
      if (this.isLoading) {
        this.$store.commit('SET_IS_LOADING', false)
      }
    },
    computed: {
      daily () {
        return this.$store.state.daily
      },
      isLoading () {
        return this.$store.state.isLoading
      }
    }
  }
</script>

<style scoped>
.repositories {
  padding: 60px 0;
}
</style>

