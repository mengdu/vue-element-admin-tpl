<template>
  <div class="m-layout"
    :class="{
      'is-vertical': direction === 'vertical',
      'is-horizontal': direction === 'horizontal'
    }"
    >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-container',
  props: {
    direction: String
  }
}
</script>
