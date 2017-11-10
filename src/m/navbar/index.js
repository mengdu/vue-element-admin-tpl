import MNav from './nav'
import MNavItem from './nav-item'
import MNavbar from './navbar'
import MNavHeader from './nav-header'

const MNavPlugin = {}

MNavPlugin.install = function (Vue) {
  Vue.component(MNav.name, MNav)
  Vue.component(MNavItem.name, MNavItem)
  Vue.component(MNavbar.name, MNavbar)
  Vue.component(MNavHeader.name, MNavHeader)
}

export default MNavPlugin

