import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
import Logout from './views/logout'
import AppView from './components/app-view'
import Dashboard from './views/admin/dashboard'
import Pgae1 from './views/admin/page1'
import Pgae2 from './views/admin/page2'
import Pgae3 from './views/admin/page3'

Vue.use(Router)

const router = new Router({
  mode: 'history', // hash, history
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    {
      path: '/admin',
      component: AppView,
      children: [
        { path: '', component: Dashboard },
        { path: '/page1', component: Pgae1 },
        { path: '/page2', component: Pgae2 },
        { path: '/page3', component: Pgae3 }
      ]
    }
  ]
})

export default router
