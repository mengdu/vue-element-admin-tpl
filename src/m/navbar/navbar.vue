<template>
<div class="m-navbar"
  :class="[theme, {open: isOpen}]"
  >
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'MNavbar',
  props: {
    theme: String
  },
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
