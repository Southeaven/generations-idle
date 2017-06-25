import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview/OverviewMain'
import Training from '@/components/Training/TrainingMain'
import Job from '@/components/Job/JobMain'
import Options from '@/components/Options/OptionsMain'
import NewGame from '@/components/New game/NewGameMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/training',
      name: 'Training',
      component: Training
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/options',
      name: 'Options',
      component: Options
    },
    {
      path: '/newgame',
      name: 'New game',
      components: NewGame
    }
  ]
})
