import Vue from 'vue'
import Router from 'vue-router'

import Overview from '@/components/Overview/Main'
import OverviewView from '@/components/Overview/Overview'
import OverviewPlayer from '@/components/Overview/PlayerView'

import Training from '@/components/Training/Main'
import Job from '@/components/Job/Main'
import Options from '@/components/Options/Main'

import NewGame from '@/components/New game/Main'
import NewGameChoice from '@/components/New game/Choice'
import NewGameCustomize from '@/components/New game/Customize'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: to => {
        if (window.localStorage.getItem('generations-idle') !== null) {
          return '/overview'
        } else {
          return '/newgame'
        }
      }
    },
    {
      path: '/overview',
      component: Overview,
      children: [
        {
          path: '/',
          name: 'Overview',
          component: OverviewView
        },
        {
          path: 'player',
          name: 'Overview - Player',
          component: OverviewPlayer
        }
      ]
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
      component: NewGame,
      children: [
        {
          path: '/',
          name: 'New game',
          component: NewGameChoice
        },
        {
          path: 'customize',
          name: 'New game - customize',
          component: NewGameCustomize
        }
      ]
    }
  ]
})
