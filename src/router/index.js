import Vue from 'vue'
import Router from 'vue-router'
import Framework from '@/components/Framework.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import TodoPage from '@/components/TodoPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Framework',
      component: Framework
    },
    {
      path: '/todo',
      name: 'TodoPage',
      component: TodoPage
    }
  ]
})
