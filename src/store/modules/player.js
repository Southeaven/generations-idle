const state = {
  firstName: '',
  lastName: '',
  age: 0,
  gender: ''
}

const mutations = {
  setFirstName (state, payload) {
    state.firstName = payload
  },
  setLastName (state, payload) {
    state.lastName = payload
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
