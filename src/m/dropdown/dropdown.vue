<template>
  <div class="m-dropdown" 
    :class="[{open: isOpen}, align, verticalAlign]"
    :style="{padding}"
    @click.stop="handleClick"
    @mouseover="handleOver"
    @mouseout="handleOut"
    >
    <slot></slot>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'MDropdown',
  props: {
    show: Boolean,
    padding: String,
    align: {
      type: String
    },
    verticalAlign: {
      type: String
    },
    trigger: {
      type: String,
      default: 'click'
    },
    waitTime: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      isOpen: this.show,
      clock: null
    }
  },
  methods: {
    open () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
    },
    handleClick (e) {
      // console.log(e, this.isOpen)
      this.isOpen = !this.isOpen
    },
    handleOver () {
      if (this.trigger === 'click') return
      this.clock = clearTimeout(this.clock)
      if (!this.isOpen) {
        this.isOpen = true
      }
    },
    handleOut () {
      if (this.trigger === 'click') return
      this.clock = clearTimeout(this.clock)
      this.clock = setTimeout(() => {
        this.isOpen = false
      }, this.waitTime)
    },
    documentClick (e) {
      if (this.isOpen) {
        this.close()
      }
    }
  },
  created () {
    document.addEventListener('click', this.documentClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.documentClick)
  }
}
</script>
<style lang="less">
  @import url('./dropdown.less');
</style>
