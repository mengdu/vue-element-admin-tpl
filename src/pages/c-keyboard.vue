<template>
<div class="box">
  <div style="margin-top: 100px"></div>
  <div style="width: 720px; margin: 0 auto;">
    <h2>复合虚拟键盘</h2>
    <el-input type="textarea" v-model="input"></el-input>

    <m-keyboard @key="handleKey" @back="handleBack" :height="240"></m-keyboard>
    
    <div style="margin-top: 100px"></div>
    <h2>数字虚拟键盘</h2>
    <el-input v-model="input2"></el-input>
    <m-number-keyboard @key="handleKey2" :size="480" :disabled-keys="['.', 'Space']"></m-number-keyboard>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      input: '',
      input2: ''
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
