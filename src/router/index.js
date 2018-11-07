import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Login from'@/components/Login'
import SignUp from'@/components/SignUp'
import Articles from'@/components/Articles'
import firebase from 'firebase'

Vue.use(Router)


let router = new Router({

//export default new Router({
  routes: [
    //{
      //path: '*',
      //redirect: '/login'
    //},
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
      {
        path: '/articles',
        name: 'Article',
        component: Articles,
        meta:{
          requiresAuth: true
        }
      },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
      meta:{
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('login')
    else next()
  })

export default router