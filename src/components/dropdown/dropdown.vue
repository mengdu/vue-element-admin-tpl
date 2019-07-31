<template>
  <div class="m-dropdown"
    @click="handleClick"
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
        @click.stop=""
        v-show="isOpen">
        <slot name="panel"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
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
    }
  }
}
</script>
