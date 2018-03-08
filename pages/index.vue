<template>
  <div class="root">
    <div class="page-inner">
      <app-repository-card v-for="repository in daily" :key="repository.id" :repository="repository" />
    </div>
  </div>
</template>

<script>
  import appRepositoryCard from '~/components/app-repository-card'
  export default {
    components: {
      appRepositoryCard
    },
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
