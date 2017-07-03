const state = {
  firstName: '',
  lastName: '',
  age: 0,
  gender: '',
  avatar: 0,
  money: 0, // temporary
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
  setPlayerFirstName (state, payload) {
    state.firstName = payload
  },
  setPlayerLastName (state, payload) {
    state.lastName = payload
  },
  setPlayerAge (state, payload) {
    state.age = payload
  },
  setPlayerGender (state, payload) {
    state.gender = payload
  },
  setPlayerAvatar (state, payload) {
    state.avatar = payload
  },
  // temporary
  setPlayerMoney (state, payload) {
    state.money = payload
  },
  setPlayerPower (state, payload) {
    state.statistics.power = payload
  },
  setPlayerSpeed (state, payload) {
    state.statistics.speed = payload
  },
  setPlayerHealth (state, payload) {
    state.statistics.health = payload
  },
  setPlayerEducation (state, payload) {
    state.statistics.education = payload
  },
  setPlayerWisdom (state, payload) {
    state.statistics.wisdom = payload
  },
  setPlayerCharisma (state, payload) {
    state.statistics.charisma = payload
  },
  // temporary
  addPlayerMoney (state, payload) {
    state.money += payload
  },
  addPlayerPower (state, payload) {
    state.statistics.power += payload
  },
  addPlayerSpeed (state, payload) {
    state.statistics.speed += payload
  },
  addPlayerHealth (state, payload) {
    state.statistics.health += payload
  },
  addPlayerEducation (state, payload) {
    state.statistics.education += payload
  },
  addPlayerWisdom (state, payload) {
    state.statistics.wisdom += payload
  },
  addPlayerCharisma (state, payload) {
    state.statistics.charisma += payload
  }
}

const actions = {
  setPlayerStatistics ({ commit }, payload) {
    commit('setPlayerPower', payload.power)
    commit('setPlayerSpeed', payload.speed)
    commit('setPlayerHealth', payload.health)
    commit('setPlayerEducation', payload.education)
    commit('setPlayerWisdom', payload.wisdom)
    commit('setPlayerCharisma', payload.charisma)
  },
  setPlayerInfo ({ commit, dispatch }, payload) {
    commit('setPlayerFirstName', payload.firstName)
    commit('setPlayerLastName', payload.lastName)
    commit('setPlayerAge', payload.age)
    commit('setPlayerGender', payload.gender)
    commit('setPlayerAvatar', payload.avatar)
    commit('setPlayerMoney', payload.money)// temporary
    dispatch('setPlayerStatistics', payload.statistics)
  }
}

export default {
  state,
  mutations,
  actions
}
