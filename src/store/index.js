import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import time from './modules/time'
import player from './modules/player'
import training from './modules/training'
import job from './modules/job'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    time,
    player,
    training,
    job
  }
})
