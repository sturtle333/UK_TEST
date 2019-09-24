import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Example from '@/components/Example.vue'
import TodoPage from '@/components/TodoPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/todo',
      name: 'TodoPage',
      component: TodoPage
    }
  ]
})
