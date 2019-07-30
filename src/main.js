import Vue from 'vue'
import Nprogress from 'nprogress'
import App from './App.vue'
import router from './router'
import store from './store'
import { isProd } from './utils'
import './assets/css/main.less'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

router.beforeEach((to, form, next) => {
  Nprogress.start()

  next()
})

router.afterEach(transition => {
  setTimeout(() => {
    Nprogress.done()
  })
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.app = isProd() ? undefined : app
