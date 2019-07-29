<template>
  <div class="m-layout-sider"
    :style="{
      width: siderWidth,
      background: background,
      color: color
    }"
    >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-sider',
  props: {
    width: [String, Number],
    background: String,
    color: String
  },
  computed: {
    siderWidth () {
      if (typeof this.width === 'undefined') return
      if (/(px|%)/.test(this.width.toString())) return this.width
      return this.width + 'px'
    }
  }
}
</script>
