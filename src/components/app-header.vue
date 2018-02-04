<template>
<m-navbar theme="info">
  <m-navbar-brand>
    <i class="side-switch"
      :class="{
        'el-icon-more': !mini,
        'el-icon-more-outline': mini
      }"
      @click="handleSwitchSide"
      ></i>
  </m-navbar-brand>
  <m-nav>
    <m-nav-item><a href="https://www.lanyueos.com" target="_blank">主页</a></m-nav-item>
    <m-nav-item><a href="https://blog.lanyueos.com" target="_blank">博客</a></m-nav-item>
    <m-nav-item><a href="https://www.lanyueos.com" target="_blank">关于</a></m-nav-item>
  </m-nav>
  <m-nav align="right">
    <m-nav-item>
      <a href="https://github.com/mengdu/vue-element-admin-tpl" target="_blank"><i class="fa fa-github" style="font-size: 26px;vertical-align: middle;"></i>&nbsp;Github</a>
    </m-nav-item>
    <m-nav-item style="padding: 0">
      <m-dropdown align="right" v-if="user">
        <a href="#" style="display: inline-block; padding: 0px; color: inherit">
          <img src="../assets/user.jpg" alt="" style="border-radius: 3px;vertical-align: middle;">
          <span>{{user.username}}</span> 
          <span class="caret"></span>
        </a>
        <m-dropdown-panel>
          <m-dropdown-item>用户信息</m-dropdown-item>
          <m-dropdown-item >修改密码</m-dropdown-item>
          <m-dropdown-item disabled>注销</m-dropdown-item>
          <div class="test-line"></div>
          <m-dropdown-item name="login">退出账号</m-dropdown-item>
        </m-dropdown-panel>
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
      <m-dropdown align="right">
        <a href="#"  style="padding:0 0px; color: inherit">
          <i class="fa fa-gears"></i>
        </a>
        <m-dropdown-panel>
          <div style="width: 150px;min-height: 100px;color: #282C34;padding: 10px;">
            <p><m-switch size="sm" @change="handleSwitchHideSide"></m-switch>&nbsp;隐藏侧边栏</p>
          </div>
        </m-dropdown-panel>
      </m-dropdown>
    </m-nav-item>
  </m-nav>
</m-navbar>
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
  .side-switch{
    display: inline-block;
    font-size: 32px;
    cursor: pointer;
    color: #d3f2fd;
    margin-top: 10px;
  }
  .side-switch:hover{
    color: #fff;
  }
</style>
