<template>
  <div>
    <div class="page-inner">
      <v-touch @swiperight="onSwipeRight">
        <div class="fullname">
          {{author}} / {{name}}
        </div>
        <div class="description" v-if="description">
          {{description}}
        </div>
        <div class="homepage" v-if="homepage">
          <a :href="homepage" target="_blank">
            <img src="/link-icon.svg" alt="">
            {{homepage}}
          </a>
        </div>
      <div v-html="readmeContent" class="markdown-body"></div>
      </v-touch>
      <div class="menu">
        <nuxt-link class="back" to="/">
          <img src="/back.svg" alt="">
        </nuxt-link>
        <a class="github" :href="toLink" target="_blank">
          GITHUB
        </a>
      </div>

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
      const { q } = this.$route.query
      const [author, name] = q.split('@')
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
        this.$router.push('/')
      },
    },
    computed: {
      toLink () {
        return `https://github.com/${this.author}/${this.name}/`
      },
      repositories () {
        return this.$store.state.repositories
      },
      repository () {
        return this.$store.state.repository
      },
      author () {
        return this.repository ? this.repository.author : ''
      },
      name () {
        return this.repository ? this.repository.name : ''
      },
      description () {
        return this.repository ? this.repository.repository.description : ''
      },
      homepage () {
        return this.repository ? this.repository.repository.homepage : ''
      },
      forks () {
        return this.repository ? this.repository.repository.forks : ''
      },
      watchers () {
        return this.repository ? this.repository.repository.watchers : ''
      },
      stargazers () {
        return this.repository ? this.repository.repository.stargazers_count : ''
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
.markdown-body {
  font-size: 14px;
}
</style>

<style scoped>
.page-inner {
  padding: 80px 20px;
}
.fullname {
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin-bottom: 80px;
}
.description {
  font-weight: bold;
  line-height: 1.5;
  font-size: 14px;
  margin-bottom: 20px;
}
.homepage {
  margin-bottom: 50px;
}
.homepage a {
  color: #000;
}
.menu {
  background: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eaeaea;
  display: flex;
}
.github {
  padding: 18px 10px;
  text-align: center;
  display: block;
  text-decoration: none;
  width: 100%;
  color: #000;
  font-weight: bold;
  font-size: 12px;
}
.back {
  padding: 15px 10px;
  text-align: center;
  display: block;
  text-decoration: none;
  border-top: 1px solid #eaeaea;
  min-width : 51px;
  background: #000;
  color: #fff;
}
</style>

