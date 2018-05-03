import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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
      path: '/userinfo',
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

// router.beforeEach(function (to, from, next) {
//   this.$store.commit('updateLoadingStatus', {isLoading: true})
//   next()
// })
//
// router.afterEach(function (to) {
//   this.$store.commit('updateLoadingStatus', {isLoading: false})
// })

export default router
