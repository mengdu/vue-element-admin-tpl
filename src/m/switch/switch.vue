<template>
<div class="m-switch" @click="click">
  <input id="test" type="checkbox" class="m-switch-trigger" :checked="state">
  <span class="m-switch-bg"></span>
  <span class="m-switch-inner"></span>
</div>
</template>
<script>
export default {
  name: 'm-switch',
  props: {
    value: Boolean
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
    click () {
      this.state = !this.state
      this.$emit('input', this.state)
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

