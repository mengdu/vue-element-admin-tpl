<template>
  <m-container class="app-layout" direction="horizontal">
    <m-sider class="app-sider"
      :class="{
        'is-close': navigation.isClose,
        'is-moving': navigation.isMoving,
        'is-mini': navigation.isMini
      }"
      :style="{
        width: navigation.width + 'px'
      }"
      >
      <app-aside />
    </m-sider>
    <m-sider class="app-sider-control"
      @mousedown.native="handleMousedown"
      >
      <button class="collapse-btn"
        :class="{'close': navigation.isClose}"
        @click="toggleNavigation"
        ></button>
    </m-sider>
    <m-container>
      <m-header class="app-header"><AppHeader /></m-header>
      <m-main class="app-content">
        <transition appear name="m-page" mode="out-in">
          <router-view />
        </transition>
      </m-main>
      <!-- <m-footer class="app-footer">footer</m-footer> -->
    </m-container>
  </m-container>
</template>

<script>
import { MContainer, MMain, MHeader, MSider } from './layout'
import AppAside from './app-aside'
import AppHeader from './app-header'

export default {
  components: {
    MContainer,
    MMain,
    MHeader,
    MSider,
    AppAside,
    AppHeader
  },
  data () {
    return {
      navigation: {
        isClose: false,
        isMoving: false,
        isMini: false,
        width: 240
      }
    }
  },
  methods: {
    toggleNavigation () {
      if (this.navigation.isClose) {
        this.navigation.isClose = false
        this.navigation.width = typeof this.navigation.oldWidth !== 'undefined' ? this.navigation.oldWidth : 240

        if (this.navigation.isMini) {
          this.navigation.isMini = false
        }
      } else {
        this.navigation.isClose = true
        this.navigation.oldWidth = this.navigation.width
        this.navigation.width = 0
      }
    },
    docMousemove (event) {
      // console.log(event)
      const offsetX = event.clientX - this.navigation.start.clientX
      let width = this.navigation.start.offsetWidth + offsetX

      if (width < 50) {
        this.navigation.isClose = true
        width = 0
      } else if (width > 60 && width < 100) {
        this.navigation.isMini = true
        this.navigation.isClose = false
        width = 60
      } else {
        this.navigation.isMini = false
        this.navigation.isClose = false
      }

      if (width > 1000) {
        width = 1000
      }

      this.navigation.width = width
    },
    docMouseUp () {
      this.navigation.isMoving = false
      this.removeListen()
    },
    handleMousedown (event) {
      event.preventDefault()
      event.stopPropagation()

      this.navigation.start = {
        clientX: event.clientX,
        offsetWidth: this.navigation.width || 0
      }
      this.navigation.isMoving = true
      document.addEventListener('mousemove', this.docMousemove, false)
      document.addEventListener('mouseup', this.docMouseUp, false)
      this.removeListen = () => {
        document.removeEventListener('mousemove', this.docMousemove)
        document.removeEventListener('mouseup', this.docMouseUp)
      }
    },
    serialize () {
      localStorage.setItem('navigation', JSON.stringify(this.navigation))
    }
  },
  created () {
    try {
      const data = JSON.parse(localStorage.getItem('navigation'))
      if (typeof data === 'object' && data !== null) {
        this.navigation = data
      }
    } catch (err) {
      console.log(err)
    }
  },
  mounted () {
    window.removeEventListener('blur', this.serialize)
    window.addEventListener('blur', this.serialize, false)
  }
}
</script>
