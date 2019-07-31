import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
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
    {
      path: '/admin',
      component: AppView,
      children: [
        { path: '', component: Dashboard, meta: { icon: 'fa fa-dashboard', label: 'Dashboard' } },
        { path: '/page1', component: Pgae1, meta: { icon: 'fa fa-dashboard', label: 'Dashboard' } },
        { path: '/page2', component: Pgae2, meta: { icon: 'fa fa-dashboard', label: 'Dashboard' } },
        { path: '/page3', component: Pgae3, meta: { icon: 'fa fa-dashboard', label: 'Dashboard' } }
      ]
    }
  ]
})

export default router
