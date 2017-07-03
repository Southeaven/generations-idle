const state = {
  day: 1,
  month: 1,
  year: 1930
}

const mutations = {
  setDay (state, payload) {
    state.day = payload
  },
  setMonth (state, payload) {
    state.month = payload
  },
  setYear (state, payload) {
    state.year = payload
  },
  addDays (state) {
    ++state.day
  },
  addMonths (state) {
    ++state.month
  },
  addYears (state) {
    ++state.year
  },
  resetDay (state) {
    state.day = 1
  },
  resetMonth (state) {
    state.month = 1
  }
}

const actions = {
  setTime ({ commit }, payload) {
    commit('setDay', payload.day)
    commit('setMonth', payload.month)
    commit('setYear', payload.year)
  }
}

export default {
  state,
  mutations,
  actions
}
