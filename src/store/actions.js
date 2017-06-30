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
  localStorage.setItem('generations-idle', JSON.stringify(gameData))
}

export const loadGame = ({ state, dispatch, rootState }) => {
  let gameData = JSON.parse(localStorage.getItem('generations-idle'))
  dispatch('setSaveInfo', gameData.saveInfo)
  dispatch('setTime', gameData.time)
  dispatch('setPlayerInfo', gameData.player)
}

export const importGame = ({ dispatch }, payload) => {
  let gameData = JSON.parse(window.atob(payload))
  dispatch('setSaveInfo', gameData.saveInfo)
  dispatch('setTime', gameData.time)
  dispatch('setPlayerInfo', gameData.player)
}

export const resetGame = () => {
  if (localStorage.getItem('generations-idle') !== null) {
    localStorage.removeItem('generations-idle')
  }
  window.location.assign('/')
}
