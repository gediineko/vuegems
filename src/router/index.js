import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: function (resolve) {
        require(['@/components/login/Login.vue'], resolve)
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: function (resolve) {
        require(['@/components/signup/SignUp.vue'], resolve)
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: function (resolve) {
        require(['@/components/pages/Home.vue'], resolve)
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
