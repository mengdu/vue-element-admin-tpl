import Vue from 'vue'
import Nprogress from 'nprogress'
import App from './App.vue'
import router from './router'
import store from './store'
import Message from 'vue-m-message'
import MDialog from 'vue-m-dialog/dist'
import ElementUI from 'element-ui'
import { isProd } from './utils'
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

if (!isProd()) {
  window.app = app
}

export default app
