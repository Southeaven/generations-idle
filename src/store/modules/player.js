const state = {
  firstName: '',
  lastName: '',
  age: 0,
  gender: '',
  avatar: 0,
  statistics: {
    power: 0,
    speed: 0,
    health: 0,
    education: 0,
    wisdom: 0,
    charisma: 0
  }
}

const mutations = {
  setFirstName (state, payload) {
    state.firstName = payload
  },
  setLastName (state, payload) {
    state.lastName = payload
  },
  setAge (state, payload) {
    state.age = payload
  },
  setGender (state, payload) {
    state.gender = payload
  },
  setAvatar (state, payload) {
    state.avatar = payload
  },
  setPower (state, payload) {
    state.statistics.power = payload
  },
  setSpeed (state, payload) {
    state.statistics.speed = payload
  },
  setHealth (state, payload) {
    state.statistics.health = payload
  },
  setEducation (state, payload) {
    state.statistics.education = payload
  },
  setWisdom (state, payload) {
    state.statistics.wisdom = payload
  },
  setCharisma (state, payload) {
    state.statistics.charisma = payload
  }
}

const actions = {
  setStatistics ({ commit }, payload) {
    commit('setPower', payload.power)
    commit('setSpeed', payload.speed)
    commit('setHealth', payload.health)
    commit('setEducation', payload.education)
    commit('setWisdom', payload.wisdom)
    commit('setCharisma', payload.charisma)
  },
  setPlayerInfo ({ commit, dispatch }, payload) {
    commit('setFirstName', payload.firstName)
    commit('setLastName', payload.lastName)
    commit('setAge', payload.age)
    commit('setGender', payload.gender)
    commit('setAvatar', payload.avatar)
    dispatch('setStatistics', payload.statistics)
  }
}

export default {
  state,
  mutations,
  actions
}
