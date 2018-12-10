import "@babel/polyfill"
import Vue from "vue"
import "./plugins/vuetify"
import App from "@/App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"
import axios from "axios"

Vue.prototype.$axios = axios
const base = axios.create({
  baseURL: process.env.VUE_APP_URL_API
})

Vue.prototype.$http = base

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
