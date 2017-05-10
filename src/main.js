// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* Vue */
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'

/* Components */
import App from './App'

/* Styles */
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/app.css'

/* Auth plugin */
import Auth from './auth'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(Auth)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created: function () {
    window.Vue = this
  },
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})

