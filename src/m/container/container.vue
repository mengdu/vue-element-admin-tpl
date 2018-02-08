<template>
<div 
  :class="{
    'm-container': !fluid,
    'm-container-fluid': fluid
  }"
  ><slot></slot></div>
</template>
<script>
export default {
  name: 'MContainer',
  props: {
    fluid: Boolean
  }
}
</script>
<style lang="less">
  @import url('./container.less');
</style>
