import MCheckbox from './checkbox'
import MCheckboxGroup from './checkbox-group'


MCheckbox.install = function (Vue) {
  Vue.component(MCheckbox.name, MCheckbox)
  Vue.component(MCheckboxGroup.name, MCheckboxGroup)
}

export default MCheckbox
