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
        <m-nav-item active><a href="https://www.lanyueos.com" target="_blank">主页</a></m-nav-item>
        <m-nav-item><a href="https://blog.lanyueos.com" target="_blank">博客</a></m-nav-item>
        <m-nav-item><a href="https://www.lanyueos.com" target="_blank">关于</a></m-nav-item>
      </m-nav>
      <m-nav float="right">
        <m-nav-item>
          <a href="https://github.com/mengdu/vue-element-admin-tpl" target="_blank"><i class="fa fa-github" style="font-size: 26px;vertical-align: middle;"></i>&nbsp;Github</a>
        </m-nav-item>
        <m-nav-item>
          <m-dropdown menu-align="right" v-if="user">
            <a href="#" style="display: inline-block; padding: 10px;">
              <img src="../assets/user.jpg" alt="" style="vertical-align: middle; border-radius: 3px;">
              <span>{{user.username}}</span> 
              <span class="caret"></span>
            </a>
            <m-dropdown-menu>
              <m-dropdown-item>用户信息</m-dropdown-item>
              <m-dropdown-item command="article">修改密码</m-dropdown-item>
              <m-dropdown-item @click.native.stop="test" disabled>注销</m-dropdown-item>
              <div class="test-line"></div>
              <m-dropdown-item command="exit">
                <router-link :to="{name: 'login'}">退出账号</router-link>
              </m-dropdown-item>
            </m-dropdown-menu>
          </m-dropdown>
        </m-nav-item>
        <m-nav-item>
          <a href="#" @click.stop.prevent="handleSwitchScreen">
            <i 
              class="fa" 
              :class="isFullScreen ? 'fa-compress' : 'fa-expand'"
              ></i>
          </a>
        </m-nav-item>
        <m-nav-item>
          <m-dropdown menu-align="right">
            <a href="#"  style="display: inline-block; padding: 10px; 15px">
              <i class="fa fa-gears"></i>
              <!-- <span class="caret"></span> -->
            </a>
            <m-dropdown-menu>
              <div style="width: 150px;min-height: 100px;color: #282C34;padding: 10px;">
                <p><m-switch size="sm" @change="handleSwitchHideSide"></m-switch>&nbsp;隐藏侧边栏</p>
              </div>
            </m-dropdown-menu>
          </m-dropdown>
        </m-nav-item>
      </m-nav>
    </m-navbar>
  </el-main>
</el-container>
</template>
<script type="text/javascript">
import {mapActions, mapState} from 'vuex'
import {
  requestFullScreen,
  exitFullscreen
} from '@/utils'
export default {
  name: 'app-header',
  data () {
    return {
      mini: false,
      isFullScreen: false
    }
  },
  computed: {
    ...mapState({
      user: ({user}) => user.user
    })
  },
  methods: {
    ...mapActions(['getLoginUser', 'logout']),
    handleSwitchSide () {
      this.mini = !this.mini
      this.$emit('switch', this.mini)
    },
    handleSwitchScreen () {
      if (this.isFullScreen) {
        exitFullscreen()
        this.isFullScreen = false
      } else {
        requestFullScreen()
        this.isFullScreen = true
      }
    },
    handleSwitchHideSide () {
      console.log('change')
      this.$emit('hide-side')
    }
  },
  created () {
    this.getLoginUser()
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
