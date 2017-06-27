const state = {
  running: false,
  engine: null,
  day: 1,
  month: 1,
  year: 1930
}

const mutations = {
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
  runOneTick ({ state, commit }) {
    let daysTemplate = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
    if (state.year % 4 !== 0) {
      daysTemplate[1] = 28
    } else {
      if (state.year % 100 !== 0) {
        daysTemplate[1] = 29
      } else {
        if (state.year % 400 === 0) {
          daysTemplate[1] = 29
        } else {
          daysTemplate[1] = 28
        }
      }
    }
    commit('addDays', 1)
    if (state.day > daysTemplate[state.month - 1]) {
      commit('addMonths', 1)
      commit('resetDay')
      if (state.month > 12) {
        commit('addYears', 1)
        commit('resetMonth')
      }
    }
  },
  toggleEngine ({ state, dispatch }) {
    if (!state.running) {
      state.running = !state.running
      state.engine = setInterval(function () {
        dispatch('runOneTick')
      }, 1000)
    } else {
      state.running = !state.running
      clearInterval(state.engine)
    }
    console.log('Toggled engine:', state.running)
  }
}

export default {
  state,
  mutations,
  actions
}
