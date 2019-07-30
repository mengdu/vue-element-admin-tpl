import Collapse from './collapse'
import CollapseItem from './collapse-item'
import CollapseContainer from './collapse-container'
import CollapseTransition from './collapse-transition'
import './collapse-transition.less'

Collapse.install = function (Vue, options = {}) {
  const name = options.name || Collapse.name
  Vue.component(name, Collapse)
  Vue.component(name + '-item', CollapseItem)
  Vue.component(name + '-container', CollapseContainer)
}

export const MCollapse = Collapse
export const MCollapseItem = CollapseItem
export const MCollapseTransition = CollapseTransition
export const MCollapseContainer = CollapseContainer

export default Collapse
