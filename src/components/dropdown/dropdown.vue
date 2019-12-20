<template>
  <div class="m-dropdown"
    @click="handleClick"
    ref="dropdown"
    >
    <slot></slot>
    <transition name="m-dropdown">
      <div
        class="m-dropdown-panel"
        :class="{
          'is-center': align === 'center',
          'is-right': align === 'right',
          'is-left': align === 'left'
        }"
        :style="{
          margin: margin,
          ...panelStyle
        }"
        v-show="isOpen">
        <slot name="panel"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
function hasEl (target, el) {
  if (!target) return false
  if (target === el) return true

  return hasEl(target.parentNode, el)
}

export default {
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    align: {
      type: String
    },
    margin: String,
    panelStyle: Object
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    handleClick () {
      this.isOpen = !this.isOpen
    },
    handleDocClick (e) {
      if (!hasEl(e.target, this.$refs.dropdown)) {
        this.isOpen = false
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.handleDocClick, false)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleDocClick)
  }
}
</script>
