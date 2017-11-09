<template>
<div class="cut-box"  ref="cut"
  >
  <!-- 底图 -->
  <img src="" alt="" class="cut-img" ref="cut-img">
  <!-- 遮罩 -->
  <div class="cut-shade"></div>
  <!-- 控制层 -->
  <div class="cut-control-bg"
    >
    <!-- 裁剪区 -->
    <div class="cut-view"
      v-show="showView"
      :style="{
        width: viewWidth + 'px',
        height: viewHeight + 'px',
        left: viewLeft + 'px',
        top: viewTop + 'px'
      }"
      >
      <img src=""  class="cut-view-img" ref="view-img"
        :style="{
          left: -viewLeft-1 + 'px',
          top: -viewTop-1 + 'px',
          width: cutPos.width + 'px',
          height: cutPos.height + 'px'
        }"
        >
    </div>
    <!-- 控制按钮 -->
    <div class="cut-control"
      v-show="showView && showCtrl"
      @mousedown.stop.prevent="viewClick"
      :style="{
        width: viewWidth + 'px',
        height: viewHeight + 'px',
        left: viewLeft + 'px',
        top: viewTop + 'px'
      }"
      ref="view"
      >
      <template>
      <div class="cut-c-line cut-l-left"></div>
      <div class="cut-c-line cut-l-top"></div>
      <div class="cut-c-line cut-l-right"></div>
      <div class="cut-c-line cut-l-bottom"></div>
      <div @mousedown.stop.prevent="ctrlClick">
        <div class="cut-c-point cut-p-left-top" @mousedown="direction = 'left-top'"></div>
        <div class="cut-c-point cut-p-center-top" @mousedown="direction = 'top'"></div>
        <div class="cut-c-point cut-p-right-top" @mousedown="direction = 'right-top'"></div>
        <div class="cut-c-point cut-p-right-middle" @mousedown="direction = 'right'"></div>
        <div class="cut-c-point cut-p-left-middle" @mousedown="direction = 'left'"></div>
        <div class="cut-c-point cut-p-right-bottom" @mousedown="direction = 'right-bottom'"></div>
        <div class="cut-c-point cut-p-center-bottom" @mousedown="direction = 'bottom'"></div>
        <div class="cut-c-point cut-p-left-bottom" @mousedown="direction = 'left-bottom'"></div>
      </div>
      </template>
    </div>
  </div>
  <div class="debug">
  {{viewPos}}
  </div>
</div>
</template>
<script type="text/javascript">

export default {
  name: 'MCrop',
  props: {
    src: {
      type: String,
      required: true
    },
    ctrlWidth: [String, Number],
    ctrlHeight: [String, Number],
    ctrlLeft: [String, Number],
    ctrlTop: [String, Number],
    showView: {
      type: Boolean,
      default: true
    },
    showCtrl: {
      type: Boolean,
      default: true
    },
    auto: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      cut: null,
      view: null,
      vw: 128,
      vh: 128,
      vl: 0,
      vt: 0,
      cutPos: {},
      viewPos: {},
      startPoint: {},
      moveType: '',
      direction: ''
    }
  },
  computed: {
    viewWidth () {
      if (this.view) {
        this.setViewPos()
      }
      // var vw = !this.auto ? this.vw : this.vw
      var vw = this.vw
      return vw > this.cutPos.width ? this.cutPos.width : vw
    },
    viewHeight () {
      if (this.view) {
        this.setViewPos()
      }
      var vh = !this.auto ? this.vw : this.vh
      return vh > this.cutPos.height ? this.cutPos.height : vh
    },
    viewLeft () {
      if (!this.view) return 0
      console.log('left change')
      var view = this.viewPos
      return (this.vl + view.width) >= this.cutPos.width ? this.cutPos.width - view.width : (this.vl < 0 ? 0 : this.vl)
    },
    viewTop () {
      if (!this.view) return 0
      var view = this.viewPos
      return (this.vt + view.height) >= this.cutPos.height ? this.cutPos.height - view.height : (this.vt < 0 ? 0 : this.vt)
    }
  },
  watch: {
    ctrlWidth (val) {
      this.vw = Math.abs(~~val)
    },
    ctrlHeight (val) {
      this.vh = Math.abs(~~val)
    },
    ctrlLeft (val) {
      this.vl = Math.abs(~~val)
    },
    ctrlTop (val) {
      this.vt = Math.abs(~~val)
    },
    src (val) {
      this.init()
    }
  },
  methods: {
    handleMove (e) {
      console.log('move', e)
      var offsetX = e.clientX - this.startPoint.clientX
      var offsetY = e.clientY - this.startPoint.clientY
      // 移动视区
      if (this.moveType === 'move') {
        this.vl = offsetX + this.startPoint.left
        this.vt = offsetY + this.startPoint.top
      } else if (this.moveType === 'size') {
        // 改变尺寸
        console.log('size change')
        switch (this.direction) {
          case 'left-top': 
            this.vl = this.startPoint.left + offsetX
            this.vt = this.startPoint.top + offsetY
            this.vw = this.startPoint.width - offsetX
            this.vh = this.startPoint.height - offsetY
            break
          case 'top': 
            this.vt = this.startPoint.top + offsetY
            this.vh = this.startPoint.height - offsetY
            break
          case 'right-top':
            this.vt = this.startPoint.top + offsetY
            this.vw = this.startPoint.width + offsetX
            this.vh = this.startPoint.height - offsetY
            break
          case 'right':
            this.vw = this.startPoint.width + offsetX
            break
          case 'left':
            this.vl = this.startPoint.left + offsetX
            this.vw = this.startPoint.width - offsetX
            break
          case 'right-bottom':
            this.vw = this.startPoint.width + offsetX
            this.vh = this.startPoint.height + offsetY
            break
          case 'bottom':
            this.vh = this.startPoint.height + offsetY
            break
          case 'left-bottom':
            this.vl = this.startPoint.left + offsetX
            this.vw = this.startPoint.width - offsetX
            this.vh = this.startPoint.height + offsetY
            break
        }
      }
    },
    contrlClick (e) {
      // 记录鼠标按下点信息
      this.startPoint = {
        clientX: e.clientX,
        clientY: e.clientY,
        left: parseInt(this.view.style.left),
        top: parseInt(this.view.style.top),
        width: parseInt(this.view.style.width),
        height: parseInt(this.view.style.height)
      }
      var that = this
      function mouseup () {
        console.log('mouseup')
        // 移动停止事件
        that.$emit('stop', {
          ...that.getCreenshot(),
          type: that.moveType
        })
        document.removeEventListener('mousemove', that.handleMove)
        document.removeEventListener('mouseup', mouseup)
      }
      document.addEventListener('mousemove', this.handleMove, false)
      document.addEventListener('mouseup', mouseup, false)
      // document.addEventListener('mouseup', () => {
      //   document.removeEventListener('mousemove', this.handleMove)
      // }, false)
    },
    viewClick (e) {
      console.log('view click')
      this.moveType = 'move'
      this.contrlClick(e)
    },
    ctrlClick (e) {
      console.log('ctrl click', this.direction)
      this.moveType = 'size'
      this.contrlClick(e)
    },
    getCreenshot () {
      return {
        img: this.cutImg,
        src: this.src,
        left: parseInt(this.view.style.left),
        top: parseInt(this.view.style.top),
        width: parseInt(this.view.style.width),
        height: parseInt(this.view.style.height)
      }
    },
    setViewPos () {
      var {width, height, left, top} = this.view.getBoundingClientRect()
      var viewPos = {width, height, left, top}
      this.$set(this, 'viewPos', viewPos)
    },
    setImg (src) {
      return new Promise(resolve => {
        this.cutImg.onload = () => {
          console.log('img onload')
          setTimeout(() => {
            resolve()
          }, 3500)
        }
        this.cutImg.src = src
        this.viewImg.src = src
      })
    },
    async init () {
      await this.setImg(this.src)
      console.log('init pos')
      // 初始位置信息
      var {width, height, left, top} = this.cut.getBoundingClientRect()
      var cutPos = {width, height, left, top}
      this.setViewPos()
      this.$set(this, 'cutPos', cutPos)
      console.log(cutPos)
    }
  },
  mounted () {
    this.cut = this.$refs.cut
    this.view = this.$refs.view
    this.cutImg = this.$refs['cut-img']
    this.viewImg = this.$refs['view-img']
    window.cut = this
    this.init()
  }
}
</script>
<style>
  .debug{
    position: absolute;
    bottom: 0;
    color: #fff;
    font-size: 12px;
  }
</style>
<style type="text/css">
  .cut-box{
    width: auto;
    background: #f2f2f2;
    max-width: 800px;
    max-height: 600px;
    position: relative;
    /*使宽度自动*/
    display: inline-block;
  }
  .cut-box{
    user-select: none;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
  }
  .cut-box .cut-img{
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
  .cut-box .cut-control-bg,
  .cut-box .cut-shade{
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .cut-box .cut-shade{
    background: rgba(0,0,0,0.4);
  }

  .cut-box .cut-view{
    position: absolute;
    overflow: hidden;
    box-sizing: border-box;
    /*background-color: rgba(255, 255, 255, 0.43);*/
    background-image: url(../assets/imgs/ant.gif);
    border: solid 1px rgba(255, 255, 255, 0.34);
    z-index: 100;
    
    /*top:80px;*/
    /*left: 100px;*/
    /*width: 200px;*/
    /*height: 100px;*/
  }
  .cut-box .cut-view-img{
    position: absolute;
    display: block;
    z-index: 1;

    top: -81px;
    left: -101px;
    /*width: 400px;*/
    /*height: 250px;*/
  }
  .cut-box .cut-control{
    position: absolute;
    box-sizing: border-box;
    cursor: move;
    z-index: 200;

    top:80px;
    left: 100px;
    width: 200px;
    height: 100px;
  }
 /* // .cut-box .ant-line{
  //   // background: #fff url(../imgs/ant.gif);
  //   position: absolute;
  //   z-index: 2;
  //   opacity: 0.4;
  // }
  // .cut-box .ant-left{
  //   width: 1px;
  //   height: 100%;
  //   left: 0;
  // }
  // .cut-box .ant-top{
  //   width: 100%;
  //   height: 1px;
  //   top: 0;
  // }
  // .cut-box .ant-right{
  //   width: 1px;
  //   height: 100%;
  //   right: 0;
  // }
  // .cut-box .ant-bottom{
  //   width: 100%;
  //   height: 1px;
  //   bottom: 0;
  // }*/

  .cut-box .cut-c-line{
    position: absolute;
    z-index: 2;
    display: none;
    // background: rgba(255,255,255,0.4);
  }
  .cut-box .cut-c-line.cut-l-left{
    width: 4px;
    height: 100%;
    left: -2px;
    cursor: w-resize;
  }
  .cut-box .cut-c-line.cut-l-top{
    width: 100%;
    height: 4px;
    top: -2px;
    cursor: n-resize;
  }
  .cut-box .cut-c-line.cut-l-right{
    width: 4px;
    height: 100%;
    right: -2px;
    cursor: w-resize;
  }
  .cut-box .cut-c-line.cut-l-bottom{
    width: 100%;
    height: 4px;
    bottom: -2px;
    cursor: n-resize;
  }
  .cut-box .cut-c-point{
    width: 9px;
    height: 9px;
    position: absolute;
    z-index: 4;
    border: solid 1px rgba(255,255,255, 0.5);
    background: rgba(0,0,0, 0.4);
    box-sizing: border-box;
  }
  .cut-box .cut-c-point.cut-p-left-top{
    left: -4px;
    top: -4px;
    cursor: nw-resize;
  }
  .cut-box .cut-c-point.cut-p-center-top{
    left: 50%;
    margin-left: -4px;
    margin-top: -4px;
    cursor: n-resize;
  }
  .cut-box .cut-c-point.cut-p-right-top{
    right: -4px;
    top: -4px;
    cursor: ne-resize;
  }
  .cut-box .cut-c-point.cut-p-right-middle{
    top: 50%;
    margin-top: -4px;
    right: -4px;
    cursor: w-resize;
  }
  .cut-box .cut-c-point.cut-p-left-middle{
    left: -4px;
    top: 50%;
    margin-top: -4px;
    cursor: w-resize;
  }
  .cut-box .cut-c-point.cut-p-right-bottom{
    right: -4px;
    bottom: -4px;
    cursor: nw-resize;
  }
  .cut-box .cut-c-point.cut-p-center-bottom{
    left: 50%;
    margin-left: -4px;
    bottom: -4px;
    cursor: n-resize;
  }
  .cut-box .cut-c-point.cut-p-left-bottom{
    left: -4px;
    bottom: -4px;
    cursor: ne-resize;
  }
</style>
