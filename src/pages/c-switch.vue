<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Switch 开关</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Switch 开关</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
<m-box>
  


    <m-switch v-model="state">defalut</m-switch>
    <m-switch v-model="state" type="success"></m-switch>
    <m-switch v-model="state" type="danger"></m-switch>
    <m-switch v-model="state" type="warning"></m-switch>
    <m-switch v-model="state" type="primary"></m-switch>
    <input type="checkbox" v-model="state">


    <m-switch :value="true" invert >defalut</m-switch>



    <m-switch :value="true" invert size="lg" >lg</m-switch>
    <m-switch :value="true" invert  >default</m-switch>
    <m-switch :value="true" invert size="sm" >sm</m-switch>



    <m-switch :value="false" disabled type="primary">sm</m-switch>
    <m-switch :value="true" disabled type="primary">sm</m-switch>


</m-box>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'c-switch',
  data () {
    return {
      state: false,
      radio1: false
    }
  }
}
</script>
