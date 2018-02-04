<template>
<div class="m-navbar"
  :class="{open: isOpen}"
  >
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'MNavbar',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style lang="less">
  @import url('./navbar.less');
</style>
