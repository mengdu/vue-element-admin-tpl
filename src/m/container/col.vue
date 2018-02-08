<template>
<div
  :class="[
    xs && cls('xs', xs),
    sm && cls('sm', sm),
    md && cls('md', md),
    lg && cls('lg', lg),
    offset && cls('md-offset', offset),
    pull && cls('md-pull', pull),
    push && cls('md-push', push),
    xsOffset && cls('xs-offset', xsOffset),
    smOffset && cls('sm-offset', smOffset),
    lgOffset && cls('lg-offset', lgOffset),
    xsPull && cls('xs-pull', xsPull),
    smPull && cls('sm-pull', smPull),
    lgPull && cls('xs-pull', lgPull),
    xsPush && cls('xs-push', xsPush),
    smPush && cls('sm-push', smPush),
    lgPush && cls('lg-push', lgPush)
  ]"
  ><slot></slot></div>
</template>
<script>
export default {
  name: 'MCol',
  props: {
    xs: [String, Number],
    sm: [String, Number],
    md: [String, Number],
    lg: [String, Number],
    offset: [String, Number],
    pull: [String, Number],
    push: [String, Number],
    xsOffset: [String, Number],
    smOffset: [String, Number],
    lgOffset: [String, Number],
    xsPull: [String, Number],
    smPull: [String, Number],
    lgPull: [String, Number],
    xsPush: [String, Number],
    smPush: [String, Number],
    lgPush: [String, Number]
  },
  methods: {
    cls (val, span) {
      return 'm-col-' + val + '-' + span
    }
  }
}
</script>
