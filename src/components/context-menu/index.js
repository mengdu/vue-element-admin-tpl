import ContextMenu from './context-menu'

const ContextMenuPlugin = {}

function contextMenuListener (dom, cb) {
  dom.addEventListener('contextmenu', function (e) {
    if (e.button === 2) {
      e.preventDefault()
      e.stopPropagation()
      cb && cb(e)
      return false
    }
  }, false)
}

ContextMenuPlugin.install = function (Vue) {
  // Vue.component(ContextMenu.name, ContextMenu)
  let Menu = Vue.extend(ContextMenu)
  let div = document.createElement('div')
  let menu = new Menu({
    el: div,
    data () {
      return {contextMenu: {}, hasIcon: false}
    }
  })
  Vue.directive('cmenu', {
    inserted: (el, binding) => {
      if (toString.call(binding.value) !== '[object Object]') {
        throw new Error('must be has an object parameters.')
      }
      let elem = binding.modifiers.fullscreen ? document.body : el
      menu.$data.contextMenu = binding.value
      menu.$data.hasIcon = !!binding.modifiers.hasIcon
      elem.appendChild(menu.$el)
      // 监听右键
      contextMenuListener(elem, (e) => {
        console.log(e.clientX, e.clientY, menu.$el.offsetWidth)
        let left = e.clientX
        let top = e.clientY
        let bodyWidth = document.body.offsetWidth
        if (bodyWidth - left < 280) {
          menu.nearRight = true
          if (bodyWidth - left < 140) {
            left = bodyWidth - 140
          }
        } else {
          menu.nearRight = false
        }
        if (menu.contextMenu && typeof menu.contextMenu.open === 'function') {
          let openResult = menu.contextMenu.open(e, menu)
          if (openResult !== undefined) {
            openResult && menu.setPosition(left + 'px', top + 'px')
          } else {
            menu.setPosition(left + 'px', top + 'px')
          }
        } else {
          menu.setPosition(left + 'px', top + 'px')
        }
      })
      // 菜单上禁止鼠标按键事件
      menu.$el.addEventListener('mousedown', function (e) {
        e.preventDefault()
        e.stopPropagation()
        return false
      })
      // 全局鼠标按键事件
      document.addEventListener('mousedown', function (e) {
        if (e.button !== 2) {
          menu.hide()
        }
      })
    }
  })
}

export default ContextMenuPlugin
