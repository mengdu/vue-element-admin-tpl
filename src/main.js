// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Axios from 'axios'

import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import DropdownPlugin from './components/dropdown'
import NavbarPlugin from './components/navbar'
import ContextMenuPlugin from './components/context-menu'
import MButton from '@/components/button'

Vue.use(ElementUI)

Vue.use(DropdownPlugin)
Vue.use(NavbarPlugin)
Vue.use(ContextMenuPlugin)
Vue.use(MButton)


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
