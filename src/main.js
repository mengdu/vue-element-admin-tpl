// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import Axios from 'axios'
import NProgress from 'nprogress'


import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'
import '@/assets/css/main.css'
import 'nprogress/nprogress.css'

import DropdownPlugin from './m/dropdown'
import NavbarPlugin from './m/navbar'
import ContextMenuPlugin from './m/context-menu'
import MButton from '@/m/button'
import MSwitch from '@/m/switch'
import MAlert from '@/m/alert'
import MCheckbox from '@/m/checkbox'
import MInput from '@/m/input'
import MLoading from '@/m/loading'
import Mkeyboard from '@/m/keyboard'
import MNumberkeyboard from '@/m/number-keyboard'
import MBox from '@/m/box'

Vue.use(ElementUI)

Vue.use(DropdownPlugin)
Vue.use(NavbarPlugin)
Vue.use(ContextMenuPlugin)
Vue.use(MButton)
Vue.use(MSwitch)
Vue.use(MAlert)
Vue.use(MCheckbox)
Vue.use(MInput)
Vue.use(MLoading)
Vue.use(Mkeyboard)
Vue.use(MNumberkeyboard)
Vue.use(MBox)

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  setTimeout(() => {
    NProgress.done()
  })
})

Vue.prototype.$http = Axios
Vue.http = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
