<template>
<li class="m-nav-item"
  :class="{active: active}"
  ><slot></slot></li>
</template>

<script type="text/javascript">
export default {
  name: 'MNavItem',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
