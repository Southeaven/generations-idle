const state = {
  name: '',
  description: '',
  visibleSince: 0,
  visibleUntil: 0,
  base: 0,
  multiplier: 0,
  attributes: {
    power: 0,
    speed: 0,
    health: 0,
    education: 0,
    wisdom: 0,
    charisma: 0
  }
}

const mutations = {
  setJobName (state, payload) {
    state.name = payload
  },
  setJobDescription (state, payload) {
    state.description = payload
  },
  setJobVisibleSince (state, payload) {
    state.visibleSince = payload
  },
  setJobVisibleUntil (state, payload) {
    state.visibleUntil = payload
  },
  setJobBase (state, payload) {
    state.base = payload
  },
  setJobMultiplier (state, payload) {
    state.multiplier = payload
  },
  setJobAttributePower (state, payload) {
    state.attributes.power = payload
  },
  setJobAttributeSpeed (state, payload) {
    state.attributes.speed = payload
  },
  setJobAttributeHealth (state, payload) {
    state.attributes.health = payload
  },
  setJobAttributeEducation (state, payload) {
    state.attributes.education = payload
  },
  setJobAttributeWisdom (state, payload) {
    state.attributes.wisdom = payload
  },
  setJobAttributeCharisma (state, payload) {
    state.attributes.charisma = payload
  }
}

const actions = {
  setJobAttributes ({ commit }, payload) {
    commit('setJobAttributePower', payload.power)
    commit('setJobAttributeSpeed', payload.speed)
    commit('setJobAttributeHealth', payload.health)
    commit('setJobAttributeEducation', payload.education)
    commit('setJobAttributeWisdom', payload.wisdom)
    commit('setJobAttributeCharisma', payload.charisma)
  },
  setJob ({ commit, dispatch }, payload) {
    commit('setJobName', payload.name)
    commit('setJobDescription', payload.description)
    commit('setJobVisibleSince', payload.visibleSince)
    commit('setJobVisibleUntil', payload.visibleUntil)
    commit('setJobBase', payload.base)
    commit('setJobMultiplier', payload.multiplier)
    dispatch('setJobAttributes', payload.attributes)
  }
}

export default {
  state,
  mutations,
  actions
}
