<template>
  <div class="root">
    <div class="page-inner">
      <div class="repositories">
        <app-repository-card v-for="repository in trends" :key="repository.id" :repository="repository" />
      </div>
    </div>
    <app-nav @handleClick="onChangeType"/>
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
      if (!this.repositories.length) {
        await this.$store.dispatch('fetchDaily')
      }
      if (this.isLoading) {
        this.$store.commit('SET_IS_LOADING', false)
      }
    },
    methods: {
      async onChangeType (type) {
        this.$store.commit('SET_TYPE', type)
        if (this.hasRepository(type)){
          return false
        }
        await this.handleDispatch(type)
        return true
      },
      async handleDispatch (type) {
        switch (type) {
          case 'daily':
            await this.$store.dispatch('fetchDaily')
            break
          case 'weekly':
            await this.$store.dispatch('fetchWeekly')
            break
          case 'monthly':
            await this.$store.dispatch('fetchMonthly')
            break
        }
      },
      hasRepository (type) {
        return this[type].length > 0
      }
    },
    computed: {
      trends () {
        if (this.isDaily) {
          return this.daily
        }
        if (this.isWeekly) {
          return this.weekly
        }
        if (this.isMonthly) {
          return this.monthly
        }
      },
      repositories () {
        return this.$store.state.repositories
      },
      daily () {
        return this.$store.state.daily
      },
      weekly () {
        return this.$store.state.weekly
      },
      monthly () {
        return this.$store.state.monthly
      },
      type () {
        return this.$store.state.type
      },
      isDaily () {
        return this.type === 'daily'
      },
      isWeekly () {
        return this.type === 'weekly'
      },
      isMonthly () {
        return this.type === 'monthly'
      },
      isLoading () {
        return this.$store.state.isLoading
      },
    }
  }
</script>

<style scoped>
.repositories {
  padding: 60px 0;
}
</style>

