<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Demo</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Demo</el-breadcrumb-item>
    </el-breadcrumb>
  </div>  
  
<m-box>
  <m-demo>
    <p>alert</p>
    <m-alert>alert</m-alert>
  </m-demo>
</m-box>

<m-back-top></m-back-top>

</div>
</template>

<script>
// import Vue from 'vue'
const MDemo = {
  porps: {
    text: String
  },
  created () {
    // console.log(this.$extend)
  },
  render (h) {
    // console.log(this.$slots.default)
    // var Com = Vue.extend({
    //   template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
    //   data: function () {
    //     return {
    //       firstName: 'Walter',
    //       lastName: 'White',
    //       alias: 'Heisenberg'
    //     }
    //   }
    // })
    // var elem = document.createElement('div')
    // console.log(elem.appendChild)
    // document.body.appendChild(elem)
    // window.demo = new Com().$mount(elem)
    // return ''
    return null
  }
}
export default {
  components: {
    MDemo
  }
}
</script>
