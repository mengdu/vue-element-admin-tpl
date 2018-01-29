<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Keyboard 虚拟键盘</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Keyboard 虚拟键盘</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
<m-box>
  
  <div class="priview-box" style="width: 720px; margin: 0 auto;">
    <h1>Keyboard 虚拟键盘</h1>
    <p class="description">本页面代码可以在<a href="https://github.com/mengdu/vue-element-admin-tpl/blob/master/src/pages/c-keyboard.vue"><code>src/pages/c-keyboard.vue</code></a>找到。</p>


    <h2>复合虚拟键盘</h2>
    <el-input type="textarea" v-model="input1"></el-input>
    <m-keyboard @key="handleKey" @back="handleBack" :height="240"></m-keyboard>
    <div style="margin-top: 100px"></div>
    
    <h2>中/英文键盘</h2>
    <el-popover
      ref="pykb"
      placement="bottom"
      width="730"
      trigger="click">
      <m-py-keyboard v-model="zhinput" :height="240" :candidate-len="8" lang="en" sync @enter="$refs.pykb.doClose()"></m-py-keyboard>
    </el-popover>
    <m-input type="textarea" v-model="zhinput" v-popover:pykb block placeholder="点击输入"></m-input>
    
    
    <!-- <m-button v-popover:pykb>click</m-button> -->
    


    <div style="margin-top: 100px"></div>
  

    <h2>数字虚拟键盘</h2>
    <el-input v-model="input2"></el-input>
    <m-number-keyboard @key="handleKey2" :size="480" :disabled-keys="['.', 'Space']"></m-number-keyboard>


  </div>

</m-box>
</div>
</template>
<script>
import MPyKeyboard from '@/m/keyboard/py-keyboard'
export default {
  components: {MPyKeyboard},
  data () {
    return {
      input1: '',
      input2: '',
      zhinput: ''
    }
  },
  methods: {
    handleKey (key) {
      this.input1 = this.input1 + key
    },
    handleKey2 (key) {
      this.input2 = this.input2 + key
    },
    handleBack () {
      this.input1 = this.input1.substring(0, this.input1.length - 1)
    }
  },
  created () {
    window.ckey = this
  }
}
</script>
