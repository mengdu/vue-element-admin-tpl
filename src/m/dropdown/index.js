
import Dropdown from './dropdown'
import DropdownPanel from './dropdown-panel'
import DropdownItem from './dropdown-item'


const DropdownPlugin = {}

DropdownPlugin.install = function (Vue) {
  Vue.component(Dropdown.name, Dropdown)
  Vue.component(DropdownPanel.name, DropdownPanel)
  Vue.component(DropdownItem.name, DropdownItem)
}

export default DropdownPlugin
