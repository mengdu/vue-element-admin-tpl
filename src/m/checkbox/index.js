import MCheckbox from './checkbox'
import MCheckboxGroup from './checkbox-group'

export default {
  install (Vue) {
    Vue.component(MCheckbox.name, MCheckbox)
    Vue.component(MCheckboxGroup.name, MCheckboxGroup)
  }
}
