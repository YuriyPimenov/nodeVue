import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueNotifications from 'vue-notifications'
import options from './system/vueNotifications.js'
import {sync} from 'vuex-router-sync'
import {routes} from './system/routes.js'
import store from './store/index.js'

Vue.use(VueRouter)
Vue.use(VueNotifications,options)
export const router = new VueRouter({
	mode:'history',
	routes
})
//Синхронизируем
sync(store,router)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
