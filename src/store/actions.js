export const setSaveInfo = ({ commit }, payload) => {
  commit('setPlayed', payload.played)
  commit('setVersion', payload.version)
  commit('setStartingDate', payload.startingDate)
}

export const saveGame = ({ state, rootState }) => {
  let gameData = {}
  gameData.saveInfo = {
    played: state.played,
    version: state.version,
    startingDate: state.startingDate
  }
  gameData.time = {
    day: rootState.time.day,
    month: rootState.time.month,
    year: rootState.time.year
  }
  gameData.player = rootState.player
  gameData.training = rootState.training
  gameData.job = rootState.job
  localStorage.setItem('generations-idle', JSON.stringify(gameData))
}

export const loadGame = ({ state, dispatch, rootState }) => {
  let gameData = JSON.parse(localStorage.getItem('generations-idle'))
  dispatch('setSaveInfo', gameData.saveInfo)
  dispatch('setTime', gameData.time)
  dispatch('setPlayerInfo', gameData.player)
  dispatch('setTraining', gameData.training)
  dispatch('setJob', gameData.job)
}

export const importGame = ({ dispatch }, payload) => {
  let gameData = JSON.parse(window.atob(payload))
  dispatch('setSaveInfo', gameData.saveInfo)
  dispatch('setTime', gameData.time)
  dispatch('setPlayerInfo', gameData.player)
  dispatch('setTraining', gameData.training)
  dispatch('setJob', gameData.job)
}

export const resetGame = () => {
  if (localStorage.getItem('generations-idle') !== null) {
    localStorage.removeItem('generations-idle')
  }
  window.location.assign('/generations-idle')
}

export const runOneTick = ({ commit, dispatch, rootState }) => {
  let daysTemplate = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
  if (rootState.time.year % 4 !== 0) {
    daysTemplate[1] = 28
  } else {
    if (rootState.time.year % 100 !== 0) {
      daysTemplate[1] = 29
    } else {
      if (rootState.time.year % 400 === 0) {
        daysTemplate[1] = 29
      } else {
        daysTemplate[1] = 28
      }
    }
  }
  commit('addDays', 1)
  dispatch('addTraining', 1)
  if (rootState.time.day > daysTemplate[rootState.time.month - 1]) {
    commit('addMonths', 1)
    commit('resetDay')
    if (rootState.time.month > 12) {
      commit('addYears', 1)
      commit('resetMonth')
      let yearlySalary = rootState.job.base
      for (let key of Object.keys(rootState.job.attributes)) {
        yearlySalary += (rootState.job.multiplier * rootState.job.attributes[key] * rootState.player.statistics[key])
      }
      console.log('yearlySalary', yearlySalary)
      commit('addPlayerMoney', yearlySalary)
    }
    dispatch('saveGame')
  }
}

export const toggleEngine = ({ state, dispatch }) => {
  if (!state.running) {
    state.engineRunning = !state.engineRunning
    state.engineInterval = setInterval(function () {
      dispatch('runOneTick')
    }, 1000)
  } else {
    state.engineRunning = !state.engineRunning
    clearInterval(state.engineInterval)
  }
  console.log('Toggled engine:', state.engineRunning)
}
