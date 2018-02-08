<style type="text/css">

</style>
<template>
<li class="m-dropdown-item"
  :class="{'disabled': disabled, active}"
  :disabled="disabled"
  @click.stop="handleClick"
  >
  <router-link :to="{name, path}" v-if="name || path && !disabled">
    <slot></slot>
  </router-link>
  <template v-else>
    <slot></slot>
  </template>
  </li>
</template>

<script type="text/javascript">
export default {
  name: 'MDropdownItem',
  props: {
    name: String,
    path: String,
    cmd: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: Boolean,
    offClick: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dropdown: null
    }
  },
  methods: {
    handleClick (e) {
      if (this.disabled) return false
      if (this.offClick) {
        this.dropdown.$emit('command', this.cmd)
        return false
      }
      this.dropdown.$emit('command', this.cmd)
      this.dropdown.close()
    }
  },
  created () {
    this.dropdown = this.$parent.$parent
  }
}
</script>
