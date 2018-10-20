import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from '@/App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

Vue.prototype.$axios = axios
const base = axios.create({
  baseURL: 'http://api-gens.com.br'
})

Vue.prototype.$http = base

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
