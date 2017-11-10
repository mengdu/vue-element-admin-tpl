<style type="text/css">

</style>
<template>
<li class="m-dropdown-item"
  :class="{'is-disabled': disabled}"
  @click.stop="itemHandleClick"
  ><slot></slot></li>
</template>

<script type="text/javascript">
export default {
  name: 'MDropdownItem',
  props: {
    command: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    offClick: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    itemHandleClick (e) {
      if (this.offClick) return
      if (e.target.getAttribute('disabled')) return
      let dropdown = this.$parent.$parent
      dropdown.$emit('command', this.command)
      dropdown.close()
    }
  }
}
</script>
