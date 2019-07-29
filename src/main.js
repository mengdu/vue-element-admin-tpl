import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { isProd } from './utils'
import './assets/css/main.less'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.app = isProd() ? undefined : app
