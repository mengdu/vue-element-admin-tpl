<template>
  <button class="m-btn"
    @click="handleClick"
    :disabled="disabled"
    :class="[
      type && 'm-btn-' + type,
      size && 'm-btn-' + size,
      {
        'm-btn-type-plain': plain,
        'm-btn-rounded': round,
        'm-btn-block': block,
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
    }
  },
  data () {
    return {
      clicked: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
      this.clicked = true
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
