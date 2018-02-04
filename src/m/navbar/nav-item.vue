<template>
<li class="m-nav-item"
  :class="{
    active: active,
    disabled: disabled
  }"
  :disabled="disabled"
  ><slot></slot></li>
</template>
<script type="text/javascript">
export default {
  name: 'MNavItem',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    }
  }
}
</script>
