<template>
  <div class="m-layout-footer"
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
  name: 'm-footer',
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
