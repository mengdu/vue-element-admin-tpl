import Vue from 'vue'
import Nprogress from 'nprogress'
import App from './App.vue'
import router from './router'
import store from './store'
import Message from 'vue-m-message'
import MDialog from 'vue-m-dialog/dist'
import ElementUI from 'element-ui'
import { isProd } from './utils'
import http from './utils/http'

import 'font-awesome/css/font-awesome.min.css'
import 'nprogress/nprogress.css'
import 'vue-m-dialog/dist/css/default.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@dove-ui/menu/dist/index.css'
import './assets/css/main.less'

Vue.use(Message, { name: 'msg' }) // mount `Vue.prototype.$msg`
Vue.use(MDialog, {
  dialogName: 'm-dialog',
  alertName: 'malert',
  confirmName: 'mconfirm'
})
Vue.use(ElementUI)
Vue.config.productionTip = false

// http config
http.defaults.baseURL = '/'

// requeset before
// http.interceptors.request.use(function (config) {
//   return config
// })

// requeset after
// http.interceptors.response.use(function (res) {
//   return res
// }, function (err) {
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(err)
// })

router.beforeEach((to, form, next) => {
  Nprogress.start()

  next()
})

router.afterEach(transition => {
  setTimeout(() => {
    Nprogress.done()
  })
})

Vue.prototype.$http = http

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (!isProd()) {
  window.app = app
}

if (!isProd()) {
  window.app = app
}

export default app
