<template>
<el-container class="app-header-box">
  <el-aside
    :width="'50px'"
    >
    <i class="side-switch"
      :class="{
        'el-icon-more': !mini,
        'el-icon-more-outline': mini
      }"
      @click="handleSwitchSide"
      ></i>
  </el-aside>
  <el-main class="app-header-main">
    <m-navbar>
      <m-nav>
        <m-nav-item active><a href="#">首页</a></m-nav-item>
        <m-nav-item><a href="#">产品</a></m-nav-item>
        <m-nav-item><a href="#">关于</a></m-nav-item>
        <m-nav-item><a href="#">登录</a></m-nav-item>
      </m-nav>
      <m-nav float="right">
        <m-nav-item><a href="/">首页</a></m-nav-item>
        <m-nav-item><a href="#">产品</a></m-nav-item>
        <m-nav-item><a href="#">关于</a></m-nav-item>
        <m-nav-item><a href="https://www.github.com/mengdu" target="_blank">github</a></m-nav-item>
        <m-nav-item>
          <m-dropdown menu-align="right">
            <a href="#" style="display: inline-block; padding: 10px;">
              <img src="../assets/user.jpg" alt="" style="vertical-align: middle; border-radius: 3px;">
              <span>Administor</span> 
              <span class="caret"></span>
            </a>
            <m-dropdown-menu>
              <m-dropdown-item>用户中心</m-dropdown-item>
              <m-dropdown-item command="article">文章</m-dropdown-item>
              <m-dropdown-item @click.native.stop="test" disabled>收藏</m-dropdown-item>
              <div class="test-line"></div>
              <m-dropdown-item command="exit">
                <a href="/login">login</a>
              </m-dropdown-item>
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
  data () {
    return {
      mini: false
    }
  },
  methods: {
    handleSwitchSide () {
      this.mini = !this.mini
      this.$emit('switch', this.mini)
    }
  }
}
</script>
<style type="text/css">
  .app-header-box{
    height: 100%;
  }
  .side-switch{
    display: block;
    font-size: 32px;
    margin-left: 10px;
    margin-top: 8px;
    cursor: pointer;
    color: #d3f2fd;
  }
  .side-switch:hover{
    color: #fff;
  }
  .app-header-box .app-header-main{
    padding: 0;
    overflow: visible;
  }
  .app-header-main .m-navbar{
    box-sizing: border-box;
    height: 100%;
    background: none;
    color: #d3f2fd;
  }
  .app-header-main .m-navbar .m-nav-item>a,
  .app-header-main .m-navbar .m-dropdown>a{
    color: inherit;
  }
  .app-header-main .m-navbar .m-nav-item>a:hover,
  .app-header-main .m-navbar .m-dropdown>a:hover{
    color: #fff;
  }
</style>
