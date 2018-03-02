import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {sync} from 'vuex-router-sync'
import {routes} from './system/routes.js'
import store from './store/index.js'

Vue.use(VueRouter)
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
