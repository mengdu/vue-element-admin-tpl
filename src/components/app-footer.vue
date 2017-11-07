<template>
<div class="app-footer-box">
  <img src="../assets/logo.png" alt="logo" class="footer-logo">
  <span class="footer-text">©make by <a href="https://www.github.com/mengdu" target="_blank">@lanyue</a></span>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'app-footer'
}
</script>
<style type="text/css">
  .app-footer-box{
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .app-footer-box .footer-logo{
    width: 24px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .app-footer-box .footer-text{
    color: #8b949e;
  }
</style>
