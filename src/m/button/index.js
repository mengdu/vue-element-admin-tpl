import MButton from './button'
import MButtonGroup from './button-group'


MButton.install = function (Vue) {
  Vue.component(MButton.name, MButton)
  Vue.component(MButtonGroup.name, MButtonGroup)
}

export default MButton
