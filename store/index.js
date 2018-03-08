import axios from 'axios'

export const state = () => ({
  feed: [],
  repository: {},
  readme: {}
})

export const mutations = {
  SET_FEED (state, feed) {
    state.feed = feed
  },
  SET_REPOSITORY(state, repository){
    state.repository = repository
  },
  SET_README(state, readme){
    state.readme = readme
  }
}

export const actions = {
  async fetchRepository ({commit}, payload) {
    const {data} = await axios.get(`https://api.github.com/repos/${payload.owner}/${payload.repo}`)
    commit('SET_REPOSITORY', data)
  },
  async fetchReadMe({commit}, payload){
    const {data}  = await axios.get(`https://api.github.com/repos/${payload.owner}/${payload.repo}/readme`)
    commit('SET_README', data)
  }
}