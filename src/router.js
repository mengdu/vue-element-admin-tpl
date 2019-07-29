import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import AppView from './components/app-view'
import Dashboard from './views/admin/dashboard'

Vue.use(Router)

const router = new Router({
  mode: 'history', // hash, history
  routes: [
    { path: '/', component: Home },
    {
      path: '/admin',
      component: AppView,
      children: [
        { path: '', component: Dashboard, meta: { icon: 'fa fa-dashboard', label: 'Dashboard' } }
      ]
    }
  ]
})

export default router
