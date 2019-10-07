import Vue from 'vue'
import Router from 'vue-router'
import Framework from '@/components/WelcomePage/Framework.vue'
import TestFrame from '@/components/TestPage/TestFrame.vue'
import SelectTestFrame from '@/components/TestPage/SelectTestFrame.vue'
import RandomnumberFrame from '@/components/RandomnumberPage/RandomnumberFrame.vue'
import CreditFrame from '@/components/CreditPage/CreditFrame.vue'
import NotFoundPage from '@/components/errorPage/notFoundPage.vue'

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
      path: '/testtest',
      name: 'SelectTestFrame',
      component: SelectTestFrame
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
      name: 'notFoundPage',
      component: NotFoundPage
    }
  ]
})
