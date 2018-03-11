<template>
  <div>
    <div class="page-inner">
      <v-touch @swiperight="onSwipeRight">
        <div class="div">
          <!-- {{repository.author}} / {{repository.name}} -->
        </div>
        <div class="discription">
          <!-- {{repository.discription}} -->
        </div>
        <div v-html="readmeContent" class="markdown-body"></div>
      </v-touch>
    </div>
  </div>
</template>

<script>
  import { optimizeGitHubLink } from '~/assets/utils'
  import transition from '~/assets/page-transition'
  import marked from 'marked'
  import base64 from 'base-64'
  import utf8 from 'utf8'
  export default {
    transition,
    async created () {
      const { id } = this.$route.params
      const [author, name] = id.split('@')
      const repository = this.repositories.find(repository => {
        return repository.author === author && repository.name === name
      })
      if (repository) {
        this.$store.commit('SET_REPOSITORY', repository)
      } else {
        const [repository, readme] = await Promise.all([
          this.$store.dispatch('fetchRepository', {author, name}),
          this.$store.dispatch('fetchReadMe', {author, name})
        ])
        this.$store.commit('PUSH_REPOSITORY', {author, name, repository, readme})
        this.$store.commit('SET_REPOSITORY', {author, name, repository, readme})
      }
      this.$store.commit('SET_IS_LOADING', false)
      this.$store.commit('SET_IS_OPENING', false)
    },
    methods: {
      onSwipeRight () {
        this.$router.go(-1)
      },
    },
    computed: {
      repositories () {
        return this.$store.state.repositories
      },
      repository () {
        return this.$store.state.repository
      },
      readmeContent () {
        if (!this.repository) return ''
        const bytes = base64.decode(this.repository.readme.content)
        const text = utf8.decode(bytes)
        const html = marked(text)
        return optimizeGitHubLink(html, this.repository.author, this.repository.name, this.repository.repository.default_branch)
      }
    }
  }
</script>

<style>
.markdown-body video {
  width: 100%;
}
</style>
