<template>
  <m-collapse-transition :appear="appear" :fade-class-name="fadeClassName" :mode="mode" @beforeEnter="beforeEnter" @afterEnter="afterEnter" @beforeLeave="beforeLeave" @afterLeave="afterLeave" >
    <template v-if="useIf">
      <div class="m-collapse-container" v-if="open"><slot></slot></div>
    </template>
    <template v-else>
      <div class="m-collapse-container" v-show="open"><slot></slot></div>
    </template>
  </m-collapse-transition>
</template>
<script>
import MCollapseTransition from './collapse-transition'
export default {
  name: 'm-collapse',
  components: { MCollapseTransition },
  props: {
    open: Boolean,
    useIf: {
      type: Boolean,
      default: false
    },
    appear: Boolean,
    fadeClassName: String,
    mode: String
  },
  methods: {
    beforeEnter (el) {
      this.$emit('before-open', el)
    },
    afterEnter (el) {
      this.$emit('open', el)
    },
    beforeLeave (el) {
      this.$emit('before-close', el)
    },
    afterLeave (el) {
      this.$emit('close', el)
    }
  }
}
</script>
