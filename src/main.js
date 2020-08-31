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

import 'normalize.css'
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

// // requeset before
// http.interceptors.request.use(function (config) {
//   return config
// })

// requeset after
http.interceptors.response.use(function (res) {
  console.log(res)
  // const NO_LOGIN_CODE = 100
  // const noLogin = res.data.code === NO_LOGIN_CODE
  // const noLogin = true
  // if (noLogin) {
  //   app.$router.push({ name: 'login', params: { reload: 1 } })
  //   return res
  // }
  return res
}, function (err) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(err)
})

router.beforeEach(async (to, from, next) => {
  // console.log(from.path, to.path)
  Nprogress.start()

  const whiteList = ['login', 'logout', 'home']

  if (whiteList.indexOf(to.name) > -1) return next()

  const loginUser = store.state.user.loginUser

  if (!loginUser) {
    // 获取登录会话
    const loginUser = await store.dispatch('user/getLoginInfo')

    Nprogress.inc(0.5)

    if (!loginUser) {
      // 访客路由
      if (to.meta.isGuest) return next()
      return next({ name: 'login' })
    }
  }

  next()
})

router.afterEach(transition => {
  setTimeout(() => {
    Nprogress.done()
  }, 100)
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
