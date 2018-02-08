import MNav from './nav'
import MNavItem from './nav-item'
import MNavbar from './navbar'
import MNavbarBrand from './navbar-brand'

const MNavPlugin = {}

MNavPlugin.install = function (Vue) {
  Vue.component(MNav.name, MNav)
  Vue.component(MNavItem.name, MNavItem)
  Vue.component(MNavbar.name, MNavbar)
  Vue.component(MNavbarBrand.name, MNavbarBrand)
}

export default MNavPlugin

