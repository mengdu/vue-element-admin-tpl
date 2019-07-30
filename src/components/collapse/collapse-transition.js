/**
 * 代码参考  https://github.com/ElemeFE/element/blob/dev/src/transitions/collapse-transition.js
 **/
const CTClassName = 'm-collapse-transition'

export default {
  name: 'm-collapse-transition',
  props: {
    appear: Boolean,
    fadeClassName: String,
    mode: String
  },
  computed: {
    transitionClassName () {
      return this.fadeClassName || CTClassName
    }
  },
  methods: {
    beforeEnter (el) {
      el.classList.add(this.transitionClassName)
      if (!el.collapse) el.collapse = {}
      el.collapse.paddingTop = el.style.paddingTop
      el.collapse.paddingBottom = el.style.paddingBottom

      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    },
    enter (el) {
      el.style.height = el.scrollHeight + 'px'
      el.style.paddingTop = el.collapse.paddingTop
      el.style.paddingBottom = el.collapse.paddingBottom
    },
    afterEnter (el) {
      el.classList.remove(this.transitionClassName)
      el.style.height = ''
    },
    beforeLeave (el) {
      if (!el.collapse) el.collapse = {}
      el.style.height = el.scrollHeight + 'px'
      el.collapse.paddingTop = el.style.paddingTop
      el.collapse.paddingBottom = el.style.paddingBottom
    },
    leave (el) {
      // 这里需要访问下 el.scrollHeight 才有过渡效果？？？
      if (el.scrollHeight !== 0) {
        el.classList.add(this.transitionClassName)
        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      }
    },
    afterLeave (el) {
      el.classList.remove(this.transitionClassName)
      el.style.height = ''
      el.style.paddingTop = el.collapse.paddingTop
      el.style.paddingBottom = el.collapse.paddingBottom
    }
  },
  render (h) {
    const events = ['beforeEnter', 'enter', 'afterEnter', 'beforeLeave', 'leave', 'afterLeave']
    const eventsMap = {}
    for (let i in events) {
      const event = events[i]
      eventsMap[event] = (el) => {
        this[event](el)
        this.$emit(event, el)
      }
    }

    return h('transition', { on: eventsMap, props: { appear: this.appear, mode: this.mode } }, this.$slots.default)
  }
}
