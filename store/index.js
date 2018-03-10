import axios from 'axios'

export const state = () => ({
  daily: [],
  weekly: [],
  monthly: [],
  repositories: [],
  repository: null,
  isLoading: true,
  type: 'daily'
})

export const mutations = {
  SET_IS_LOADING (state, flag) {
    state.isLoading = flag
  },
  SET_DAILY (state, repositories) {
    state.daily = repositories
  },
  SET_WEEKLY (state, repositories) {
    state.weekly = repositories
  },
  SET_MONTHLY (state, repositories) {
    state.monthly = repositories
  },
  SET_REPOSITORY (state, repository) {
    state.repository = repository
  },
  SET_TYPE (state, type) {
    state.type = type
  },
  PUSH_REPOSITORY (state, repository) {
    state.repositories.push(repository)
  },
}

export const actions = {
  async fetchDaily ({commit}) {
    const res = await axios.get('https://us-central1-trendjs-4830c.cloudfunctions.net/trends/')
    commit('SET_DAILY', res.data)
  },
  async fetchWeekly ({commit}) {
    const res = await axios.get('https://us-central1-trendjs-4830c.cloudfunctions.net/trends/?since=weekly')
    commit('SET_WEEKLY', res.data)
  },
  async fetchMonthly ({commit}) {
    const res = await axios.get('https://us-central1-trendjs-4830c.cloudfunctions.net/trends/?since=monthly')
    commit('SET_MONTHLY', res.data)
  },
  async fetchRepository ({commit}, {author, name}) {
    const res = await axios.get(`https://api.github.com/repos/${author}/${name}`)
    return res.data
  },
  async fetchReadMe ({commit}, {author, name}){
    const res  = await axios.get(`https://api.github.com/repos/${author}/${name}/readme`)
    return res.data
  }
}