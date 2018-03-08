<template>
  <div>
    <div v-html="readme" class="markdown-body"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import marked from 'marked'
  import base64 from 'base-64'

  export default{
    async fetch({store, params}){
      const repositoryURL = store.state.feed[params.id].link
      const parseURL = repositoryURL.split('/')
      const owner = parseURL[parseURL.length - 2]
      const repo = parseURL[parseURL.length - 1]
      store.dispatch('fetchRepository',{owner,repo})
      store.dispatch('fetchReadMe', {owner,repo})

    },
    computed:{
      repository(){
        return this.$store.state.repository
      },
      readme(){
        return marked(base64.decode(this.$store.state.readme.content))
      }
    }
  }
</script>