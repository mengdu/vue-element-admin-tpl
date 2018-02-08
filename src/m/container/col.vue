<template>
<div
  :class="[
    xs && cls('xs', xs),
    sm && cls('sm', sm),
    md && cls('md', md),
    lg && cls('lg', lg),
    offset && cls( + 'md-offset', offset),
    pull && cls( + 'md-offset', pull),
    push && cls( + 'md-offset', push)
  ]"
  ><slot></slot></div>
</template>
<script>
export default {
  name: 'MCol',
  props: {
    xs: [String, Number],
    sm: [String, Number],
    md: {
      type: [String, Number],
      default: 1
    },
    lg: [String, Number],
    offset: [String, Number],
    pull: [String, Number],
    push: [String, Number]
  },
  methods: {
    cls (val, span) {
      return 'm-col-' + val + '-' + span
    }
  }
}
</script>