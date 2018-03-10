<template>
  <div class="root">
    <div class="page-inner">
      <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight">
        <div class="repositories">
          <div v-if="trends.length">
            <app-repository-card v-for="repository in trends" :key="repository.id" :repository="repository" />
          </div>
          <div v-else>
            <app-repository-card-dummy v-for="dummy in 25" :key="dummy.id" />
          </div>
        </div>
      </v-touch>
    </div>
    <app-nav @handleClick="onChangeType"/>
  </div>
</template>

<script>
  import transition from '~/assets/page-transition'
  import appRepositoryCard from '~/components/app-repository-card'
  import appRepositoryCardDummy from '~/components/app-repository-card-dummy'
  import appNav from '~/components/app-nav'
  export default {
    transition,
    components: {
      appRepositoryCard,
      appRepositoryCardDummy,
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
      async onSwipeLeft () {
        const index = this.types.indexOf(this.type)
        if (index + 1 < this.types.length) {
          await this.onChangeType(this.types[index + 1])
        }
      },
      async onSwipeRight () {
        const index = this.types.indexOf(this.type)
        if (index - 1 >= 0) {
          await this.onChangeType(this.types[index - 1])
        }
      },
      async onChangeType (type) {
        this.$store.commit('SET_TYPE', type)
        if (!this.hasRepository(type)){
          await this.handleDispatch(type)
        }
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
      types () {
        return this.$store.state.types
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

