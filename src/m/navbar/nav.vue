<template>
<ul class="m-nav"
  :class="[align]"
  ><slot></slot></ul>
</template>
<script>
export default {
  name: 'MNav',
  props: {
    align: {
      type: String,
      default: ''
    }
  }
}
</script>
