<template>
  <div>
    <div v-html="readmeContent" class="markdown-body"></div>
  </div>
</template>

<script>
  import marked from 'marked'
  import base64 from 'base-64'

  export default {
    async created () {
      const { id } = this.$route.params
      const [author, name] = id.split('@')
      const repository = this.repositories.find(repository => {
        return repository.author === author && repository.name === name
      })
      if (repository) {
        return this.$store.commit('SET_REPOSITORY', repository)
      } else {
        const repository = await this.$store.dispatch('fetchRepository', {author, name})
        const readme = await this.$store.dispatch('fetchReadMe', {author, name})
        this.$store.commit('PUSH_REPOSITORY', {author, name, repository, readme})
        return this.$store.commit('SET_REPOSITORY', {author, name, repository, readme})
      }
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
        return marked(base64.decode(this.repository.readme.content))
      }
    }
  }
</script>