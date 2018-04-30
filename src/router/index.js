import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'main',
      path: '/',
      component: () => import('@/views/main'),
      children: [
        {
          name: 'fight',
          path: 'fight',
          component: () => import('@/views/fight/fight')
        },
        {
          name: 'practice',
          path: 'practice',
          component: () => import('@/views/practice/practice')
        },
        {
          name: 'user',
          path: 'user',
          component: () => import('@/views/user/user')
        }
      ]
    },
    {
      name: 'userinfo',
      path: '/user/userinfo',
      component: () => import('@/views/user/userinfo/userinfo')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('@/views/register')
    }
  ]
})
