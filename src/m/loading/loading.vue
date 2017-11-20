<template>
<svg viewBox="0 0 50 50" class="svg-icon"
  :class="{
    'm-loading': !type,
    'm-wipe': type === 'wipe'
  }"
  >
  <template v-if="type === 'wipe'">
    <circle cx="25" cy="25" r="20" fill="none" class="path"></circle>
  </template>
  <template v-else>
    <circle cx="25" cy="25" r="20" fill="none" stroke="#F2F2F2" class="path"></circle>
    <circle cx="25" cy="25" r="20" fill="none" stroke="#24A2FF" stroke-dasharray="60,150" class="path"></circle>
  </template>
</svg>
</template>
<script>
export default {
  name: 'MLoading',
  props: {
    type: String
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
  }
  .svg-icon .path{
    fill: none;
  }
  .m-wipe{
    background: none;
    animation: loading-rotate 2s linear infinite;
  }
  .m-wipe .path{
    background: none;
    stroke-dasharray: 90,150;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    stroke-width: 2px;
    stroke: #20a0ff;
    stroke-linecap: round;
    animation: loading-wipe 1.5s ease-in-out infinite;
  }
  .m-loading{
    background: none;
    animation: loading-rotate 0.8s linear infinite;
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
