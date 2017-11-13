import MListGroup from './list-group'
import MListGroupItem from './list-group-item'

MListGroup.install = function (Vue) {
  Vue.component(MListGroup.name, MListGroup)
  Vue.component(MListGroupItem.name, MListGroupItem)
}

export default MListGroup
