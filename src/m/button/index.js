import MButton from './button'
import MButtonGroup from './button-group'

export default {
  install (Vue) {
    Vue.component(MButton.name, MButton)
    Vue.component(MButtonGroup.name, MButtonGroup)
  }
}
