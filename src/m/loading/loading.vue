<template>
<svg viewBox="0 0 50 50" class="svg-icon"
  :class="{
    'm-loading': !type,
    'm-wipe': type === 'wipe'
  }"
  :style="{
    width: width + 'px',
    height: width + 'px'
  }"
  >

  <circle v-if="bgColor" :stroke="bgColor" cx="25" cy="25" r="20" class="bg-path"
    :style="{
      stroke: bgColor
    }"
    ></circle>
  <circle cx="25" cy="25" r="20" class="active-path"
    :style="{
      stroke: color
    }"
    ></circle>

</svg>
</template>
<script>
export default {
  name: 'MLoading',
  props: {
    width: [String, Number],
    type: String,
    color: String,
    bgColor: {
      type: [String, Boolean],
      default: true
    }
  }
}
</script>
<style>
  .svg-icon{
    width: 40px;
    height: 40px;
    stroke: #343640;
    stroke-width: 2;
    stroke-linecap: round;
    background: none;
    vertical-align: middle;
  }
  .svg-icon .bg-path{
    fill: none;
    stroke: #F2F2F2;
  }
  .svg-icon .active-path{
    fill: none;
    stroke: #20a0ff;
  }
  .m-wipe{
    animation: loading-rotate 2s linear infinite;
  }
  .m-wipe .active-path{
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    animation: loading-wipe 1.5s ease-in-out infinite;
  }
  .m-loading{
    animation: loading-rotate 0.8s linear infinite;
  }
  .m-loading .active-path{
    stroke-dasharray: 60, 150;
  }
  @keyframes loading-rotate{
    to{transform:rotate(1turn)}
  }
  @keyframes loading-wipe{
    0%{
      stroke-dasharray:1,200;
      stroke-dashoffset:0;
    }
    50%{
      stroke-dasharray:90,150;
      stroke-dashoffset:-40px;
    }
    to{
      stroke-dasharray:90,150;
      stroke-dashoffset:-120px;
    }
  }
</style>
