<template>
<div class="m-checkbox-group">
  <slot></slot>
</div>
</template>
<script>
export default {
  // name: 'm-checkbox-group',
  name: 'MCheckboxGroup',
  componentName: 'MCheckboxGroup',
  props: {
    value: Array
  }
}
</script>
