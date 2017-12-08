<template>
<div class="m-box">
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'MBox'
}
</script>
<style>
  .m-box{
    background: #fff;
    border-radius: 3px;
    padding: 15px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  .m-box:last-child{
    margin-bottom: 0;
  }
</style>
