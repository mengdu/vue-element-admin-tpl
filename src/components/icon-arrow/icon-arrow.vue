<template>
  <span
    :style="{
      width: width + 'px',
      height: width + 'px',
      'display': 'inline-block',
      'vertical-align': 'middle',
      color: color
    }"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="m-icon-arrow"
      :style="{
        transition: 'all 0.3s ease',
        transform: 'rotate(' + rotate +')'
      }"
      viewBox="0 0 35 35"
      fill="currentColor"
      >
        <path d="M9.4,13.9c-0.2,0.2-0.2,0.6,0,0.8l8.1,8.1l0,0l0,0l8.1-8.1c0.2-0.2,0.2-0.6,0-0.8l-1.3-1.3 c-0.2-0.2-0.6-0.2-0.8,0l-5.5,5.5c-0.2,0.2-0.6,0.2-0.8,0l-5.5-5.5c-0.2-0.2-0.6-0.2-0.8,0L9.4,13.9z"/>
    </svg>
  </span>
</template>
<script>
export default {
  name: 'm-icon-arrow',
  props: {
    width: [String, Number],
    // left/right/top/bottom
    direction: String,
    color: String
  },
  computed: {
    rotate () {
      switch (this.direction) {
        case 'left':
          return '90deg'
        case 'right':
          return '-90deg'
        case 'bottom':
          return '0deg'
        case 'top':
          return '-180deg'
        default:
          return '0deg'
      }
    }
  }
}
</script>
