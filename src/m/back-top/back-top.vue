<template>
<div class="m-back-top"
  :class="{
    show: show
  }"
  @click="handleClick"
  >
  <i class="fa fa-angle-double-up"></i>
</div>
</template>
<script>

/**
* 缓慢运动
* motion({nowel: 5}).countTo(1, 2000)
**/
function motion (opts = {}) {
  let speed = opts.speed || 0
  let nowel = opts.nowel || 15
  let tempSpeed = 0
  let clock = null
  return {
    countTo (start, end, cb, endFn) {
      let isReduce = start > end
      let distance = Math.abs(start - end)
      let loop = () => {
        speed = Math.ceil(distance - tempSpeed) / nowel
        tempSpeed += speed
        let result = isReduce ? (start - tempSpeed) : (start + tempSpeed)
        cb && cb(result)
        if (isReduce) {
          if (result <= end) {
            clock = cancelAnimationFrame(clock)
            endFn && endFn()
          } else {
            clock = requestAnimationFrame(loop)
          }
        } else {
          if (result >= end) {
            clock = cancelAnimationFrame(clock)
            endFn && endFn()
          } else {
            clock = requestAnimationFrame(loop)
          }
        }
      }
      clock = requestAnimationFrame(loop)
    }
  }
}

export default {
  name: 'MBackTop',
  props: {
    bodyId: String,
    offsetTop: {
      type: [Number, String],
      default: 100
    }
  },
  data () {
    return {
      body: null,
      show: false
    }
  },
  methods: {
    handleListenner () {
      if (!this.body) return false
      this.body.removeEventListener('scroll', this.scrollListenner)
      this.body.addEventListener('scroll', this.scrollListenner, false)
    },
    scrollListenner (e) {
      // console.log(this.body.scrollTop)
      if (!this.body) return false

      if (this.body.scrollTop === 0) {
        this.$emit('scroll-top')
      }

      // 处理显示back-top
      if (this.body.scrollTop > parseInt(this.offsetTop)) {
        this.show = true
      } else {
        this.show = false
      }
    },
    handleClick () {
      if (!this.body) return false
      motion({nowel: 15, speed: 5}).countTo(this.body.scrollTop, 0, (top) => {
        this.body.scrollTop = top
      })
    }
  },
  mounted () {
    var el
    if (this.bodyId) {
      el = document.getElementById(this.bodyId)
    } else {
      el = document.body
    }
    this.body = el
    this.handleListenner()
    this.scrollListenner()
  },
  destroyed () {
    if (!this.body) return false
    this.show = false
    // 移除滚动事件
    this.body.removeEventListener('scroll', this.scrollListenner)
  }
}
</script>
<style>
  .m-back-top {
    width: 30px;
    height: 30px;
    position: fixed;
    right: 30px;
    bottom: -30px;
    background: rgba(40,44,52, 0.7);
    border-radius: 4px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    font-weight: 100;
    transition: all 0.5s ease;
    opacity: 0;
    cursor: pointer;
  }
  .m-back-top.show {
    bottom: 50px;
    opacity: 0.9;
  }
  .m-back-top:hover{
    opacity: 1;
  }
</style>