<template>
  <div class="app-header-box">
    <div class="float-left">
      <ul class="app-header-tool am-fade-left">
        <li><router-link to="/" class="m-link-effect"><i class="fa fa-home"></i>&nbsp;Home</router-link></li>
        <li><a href="http://lanyueos.com" target="_blank" class="m-link-effect">Website&nbsp;<i class="fa fa-external-link"></i></a></li>
      </ul>
    </div>
    <div class="float-right">
      <ul class="app-header-tool am-fade-right">
        <li><input class="tool-search-input" placeholder="Search..."/></li>
        <li><a href="https://github.com/mengdu/vue-element-admin-tpl" class="m-link-effect">Github&nbsp;<i class="fa fa-external-link"></i></a></li>
        <li><a href="#" class="m-link-effect">Docs&nbsp;<i class="fa fa-external-link"></i></a></li>
        <li><button class="tool-btn"><i class="fa fa-question-circle-o"></i></button></li>
        <li>
          <m-dropdown align="right" :panel-style="{'min-width': '150px'}">
            <button class="tool-btn"><i class="fa fa-user-circle-o"></i></button>
            <VcMenu :menus="userMenus" theme="light" slot="panel"/>
          </m-dropdown>
        </li>
        <li>
          <m-dropdown align="right" :panel-style="{'min-width': '150px'}" v-if="loginUser">
            <button class="tool-btn">
              <img :src="loginUser.avatar" class="user-avatar"/>&nbsp;
              <span>{{loginUser.nickname}}</span>&nbsp;
              <i class="fa fa-caret-down"></i>
            </button>
            <VcMenu :menus="userMenus" theme="light" slot="panel"/>
          </m-dropdown>
        </li>
        <li @click="handleFullScreen">
          <button class="tool-btn" v-if="fullScreen"><i class="fa fa-compress"></i></button>
          <button class="tool-btn" v-else><i class="fa fa-expand"></i></button>
        </li>
        <!-- <li><button class="tool-btn"><i class="fa fa-wrench"></i></button></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VcMenu from '@dove-ui/menu'
import MDropdown from './dropdown'
import { requestFullScreen, exitFullscreen } from '../utils'

export default {
  components: {
    VcMenu,
    MDropdown
  },
  data () {
    return {
      fullScreen: false,
      userMenus: [
        { label: 'Your profile', icon: 'fa fa-address-card', router: '/' },
        { label: 'Logout', icon: 'fa fa-arrow-circle-left', router: '/logout' }
      ]
    }
  },
  computed: {
    ...mapState('user', ['loginUser'])
  },
  methods: {
    handleFullScreen () {
      if (this.fullScreen) {
        exitFullscreen()
        this.fullScreen = false
      } else {
        requestFullScreen()
        this.fullScreen = true
      }
    }
  }
}
</script>
