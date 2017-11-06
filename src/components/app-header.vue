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
  <el-main class="app-header-bar">
    <m-navbar>
      <m-nav-header>
        <!-- <a href="#" class="m-navbar-brand" slot="navbar-brand"><img src="../assets/imgs/logo.png" class="nav-logo"></a> -->
        
      </m-nav-header>
      <m-nav>
        <m-nav-item active><a href="#">首页</a></m-nav-item>
        <m-nav-item><a href="#">产品</a></m-nav-item>
        <m-nav-item><a href="#">关于</a></m-nav-item>
        <m-nav-item><a href="#">登录</a></m-nav-item>
      </m-nav>
      <m-nav float="right">
        <m-nav-item><a href="#">首页</a></m-nav-item>
        <m-nav-item><a href="#">产品</a></m-nav-item>
        <m-nav-item><a href="#">关于</a></m-nav-item>
        <m-nav-item><a href="#">登录</a></m-nav-item>
        <m-nav-item>
          <m-dropdown menu-align="right">
            <a href="#" style="display: inline-block; padding: 10px;">用户中心 <span class="caret"></span></a>
            <m-dropdown-menu>
              <m-dropdown-item>用户中心</m-dropdown-item>
              <m-dropdown-item command="article">文章</m-dropdown-item>
              <m-dropdown-item @click.native.stop="test" disabled>收藏</m-dropdown-item>
              <div class="test-line"></div>
              <m-dropdown-item command="exit">退出</m-dropdown-item>
            </m-dropdown-menu>
          </m-dropdown>
        </m-nav-item>
        
      </m-nav>
    </m-navbar>
  </el-main>
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
  .app-header-bar{
    padding: 0;
    overflow: visible;
  }
</style>
