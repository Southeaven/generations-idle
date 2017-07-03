const state = {
  name: '',
  progress: 0,
  goal: 0,
  change: {
    power: 0,
    speed: 0,
    health: 0,
    education: 0,
    wisdom: 0,
    charisma: 0
  }
}

const mutations = {
  setTrainingName (state, payload) {
    state.name = payload
  },
  setTrainingProgress (state, payload) {
    state.progress = payload
  },
  setTrainingGoal (state, payload) {
    state.goal = payload
  },
  setTrainingPower (state, payload) {
    state.change.power = payload
  },
  setTrainingSpeed (state, payload) {
    state.change.speed = payload
  },
  setTrainingHealth (state, payload) {
    state.change.health = payload
  },
  setTrainingEducation (state, payload) {
    state.change.education = payload
  },
  setTrainingWisdom (state, payload) {
    state.change.wisdom = payload
  },
  setTrainingCharisma (state, payload) {
    state.change.charisma = payload
  },
  addTrainingProgress (state, payload) {
    state.progress += payload
  }
}

const actions = {
  setTrainingAttributeChanges ({ commit }, payload) {
    commit('setTrainingPower', payload.power)
    commit('setTrainingSpeed', payload.speed)
    commit('setTrainingHealth', payload.health)
    commit('setTrainingEducation', payload.education)
    commit('setTrainingWisdom', payload.wisdom)
    commit('setTrainingCharisma', payload.charisma)
  },
  setTraining ({ commit, dispatch }, payload) {
    commit('setTrainingName', payload.name)
    commit('setTrainingProgress', payload.progress)
    commit('setTrainingGoal', payload.goal)
    dispatch('setTrainingAttributeChanges', payload.change)
  },
  addTraining ({ commit }, payload) {
    commit('addTrainingProgress', payload)
    if (state.progress >= state.goal) {
      state.progress -= state.goal
      for (let key of Object.keys(state.change)) {
        let string = 'addPlayer' + key[0].toUpperCase() + key.slice(1)
        commit(string, state.change[key])
      }
    }
  }
}

export default {
  state,
  mutations,
  actions
}
