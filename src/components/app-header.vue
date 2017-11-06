<template>
<el-container class="app-header-box">
  <el-aside
    class="app-header-logo-box"
    :style="{
      width: sideWidth + 'px',
      background: sideBg
      }">
    <img src="../assets/logo.png" alt="" class="header-logo">
    <span class="header-logo-text">控制台</span>
  </el-aside>
  <el-main>main</el-main>
</el-container>
</template>
<script type="text/javascript">
export default {
  name: 'app-header',
  props: {
    sideWidth: {
      type: Number,
      default: 200
    },
    sideBg: {
      type: String,
      default: '#fff'
    }
  }
}
</script>
<style type="text/css">
  .app-header-box{
    height: 100%;
  }
  .app-header-logo-box{
    padding: 15px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .app-header-box .header-logo{
    height: 42px;
    margin-top: -10px;
    margin-right: 5px;
    vertical-align: middle;
  }
  .header-logo-text{
    color: #3A3F51;
    font-size: 20px;
    font-weight: bold;
  }
</style>
