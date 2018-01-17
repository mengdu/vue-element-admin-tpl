<template>
  <button class="m-button"
    @click="handleClick"
    :disabled="disabled"
    :class="[
      type && 'm-button-' + type,
      size && 'm-button-' + size,
      {
        'm-button-type-plain': plain,
        'm-button-rounded': round,
        'm-button-block': block,
        'active': active,
        'clicked': (effect && clicked && !active)
      }
    ]"
    >
    <slot></slot>
  </button>
</template>
<script type="text/javascript">
export default {
  name: 'm-button',
  props: {
    type: {
      type: String,
      default: ''
    },
    effect: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    router: [String, Object]
  },
  data () {
    return {
      clicked: false
    }
  },
  methods: {
    handleClick (e) {
      // 跳转路由
      if (this.router && this.$router) {
        if (typeof this.router === 'string') {
          this.$router.push({path: this.router})
          return false
        } else if (typeof this.router === 'object') {
          this.$router.push(this.router)
          return false
        }
      }
      this.clicked = true
      this.$emit('click', e)
      setTimeout(() => {
        this.clicked = false
      }, 500)
    }
  }
}
</script>
<style lang="less">
@import './btn.less';
</style>
