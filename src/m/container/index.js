import MContainer from './container'
import MRow from './row'
import Mcol from './col'


MContainer.install = function (Vue) {
  Vue.component(MContainer.name, MContainer)
  Vue.component(MRow.name, MRow)
  Vue.component(Mcol.name, Mcol)
}

export default MContainer
