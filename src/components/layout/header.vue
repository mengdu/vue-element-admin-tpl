<template>
  <div class="m-layout-header"
    :style="{
      height: CHeight,
      background: background,
      color: color
    }"
    >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-header',
  props: {
    height: String,
    color: String,
    background: String
  },
  computed: {
    CHeight () {
      if (typeof this.height === 'undefined') return
      if (/(px|%)/.test(this.height.toString())) return this.height
      return this.height + 'px'
    }
  }
}
</script>
