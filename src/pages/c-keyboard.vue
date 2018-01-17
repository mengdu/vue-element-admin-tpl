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
  
  <div style="margin-top: 100px"></div>
  <div style="width: 720px; margin: 0 auto;">
    <h2>复合虚拟键盘</h2>
    <el-input type="textarea" v-model="input"></el-input>
    <m-keyboard @key="handleKey" @back="handleBack" :height="240"></m-keyboard>
    <div style="margin-top: 100px"></div>

    <h2>中/英文键盘</h2>
    <el-input type="textarea" v-model="zhinput"></el-input>
    <m-py-keyboard v-model="zhinput" @key="handleKey" @back="handleBack" :height="240"></m-py-keyboard>
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
      input: '',
      input2: '',
      zhinput: 'default'
    }
  },
  methods: {
    handleKey (key) {
      this.input = this.input + key
    },
    handleKey2 (key) {
      this.input2 = this.input2 + key
    },
    handleBack () {
      this.input = this.input.substring(0, this.input.length - 1)
    }
  }
}
</script>
