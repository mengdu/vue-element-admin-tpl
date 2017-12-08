<template>
<label class="m-switch" 
  :class="[
    type && 'm-switch-' + type,
    size && 'm-switch-' + size,
    {
      'm-switch-invert': invert,
    }
  ]"
  >
  <input type="checkbox"  class="m-switch-trigger" :disabled="disabled" :name="name" v-model="state" @change="change"/>
  <span class="m-switch-bg"></span>
  <span class="m-switch-inner"></span>
</label>
</template>
<script>
export default {
  name: 'm-switch',
  props: {
    value: Boolean,
    type: String,
    size: String,
    invert: Boolean,
    name: String,
    disabled: Boolean
  },
  watch: {
    value (val) {
      this.state = val
    }
  },
  data () {
    return {
      state: false
    }
  },
  methods: {
    change () {
      this.$emit('input', this.state)
      this.$emit('change', this.state)
    }
  },
  mounted () {
    this.state = this.value
  }
}
</script>
<style lang="less">
@import './switch.less';
</style>

