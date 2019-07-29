import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { isProd } from './utils'

Vue.config.productionTip = false

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

window.app = isProd() ? undefined : app
