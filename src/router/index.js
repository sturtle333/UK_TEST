import Vue from 'vue'
import Router from 'vue-router'
import Framework from '@/components/WelcomePage/Framework.vue'
import TestFrame from '@/components/TestPage/TestFrame.vue'
import RandomnumberFrame from '@/components/RandomnumberPage/RandomnumberFrame.vue'
import CreditFrame from '@/components/CreditPage/CreditFrame.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Framework',
      component: Framework
    },
    {
      path: '/test',
      name: 'TestFrame',
      component: TestFrame
    },
    {
      path: '/random',
      name: 'RandomnumberFrame',
      component: RandomnumberFrame
    },
    {
      path: '/random/:para',
      name: 'RandomnumberFrame',
      component: RandomnumberFrame
    },
    {
      path: '/credit',
      name: 'CreditFrame',
      component: CreditFrame
    },
    {
      path: '*',
      name: 'CreditFrame',
      component: CreditFrame
    }
  ]
})
