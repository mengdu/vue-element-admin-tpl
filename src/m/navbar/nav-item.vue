<template>
<li class="m-nav-item"
  :class="{
    active: active,
    disabled: disabled
  }"
  :style="{padding}"
  :disabled="disabled"
  @click="handleClick"
  >
  <router-link v-if="name || path && !disabled" :to="{name, path}"><slot></slot></router-link>
  <slot v-else></slot>
  </li>
</template>
<script type="text/javascript">
export default {
  name: 'MNavItem',
  props: {
    name: String,
    path: String,
    cmd: String,
    padding: String,
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    offClick: Boolean
  },
  methods: {
    handleClick () {
      if (this.disabled) return false
      if (this.offClick) {
        this.$parent.$parent.$emit('command', this.cmd)
        return false
      }
      this.$parent.$parent.$emit('command', this.cmd)
    }
  }
}
</script>
