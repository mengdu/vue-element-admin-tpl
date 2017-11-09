import MListGroup from './list-group'
import MListGroupItem from './list-group-item'

export default {
  install (Vue) {
    Vue.component(MListGroup.name, MListGroup)
    Vue.component(MListGroupItem.name, MListGroupItem)
  }
}
