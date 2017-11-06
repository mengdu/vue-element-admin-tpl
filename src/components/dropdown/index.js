
import Dropdown from './dropdown'
import DropdownMenu from './dropdown-menu'
import DropdownItem from './dropdown-item'

/*
Dropdown.install = function (Vue) {
  Vue.component(Dropdown.name, Dropdown)
}

DropdownMenu.install = function (Vue) {
  Vue.component(DropdownMenu.name, DropdownMenu)
}
*/

const DropdownPlugin = {}

DropdownPlugin.install = function (Vue) {
  Vue.component(Dropdown.name, Dropdown)
  Vue.component(DropdownMenu.name, DropdownMenu)
  Vue.component(DropdownItem.name, DropdownItem)
}

export default DropdownPlugin
