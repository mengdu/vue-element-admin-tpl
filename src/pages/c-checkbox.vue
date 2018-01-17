<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Checkbox 多选框</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Checkbox 多选框</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
<m-box>
  

  <!-- <div class="priview-box">
    <m-checkbox >default</m-checkbox>
    <m-checkbox type="primary">primary</m-checkbox>
    <m-checkbox type="success">success</m-checkbox>
    <m-checkbox type="warning">warning</m-checkbox>
    <m-checkbox type="danger" disabled>danger</m-checkbox>
  </div> -->

  <!-- <div class="priview-box">
    <m-checkbox checked >default</m-checkbox>
    <m-checkbox type="primary" checked>primary</m-checkbox>
    <m-checkbox type="success" checked>success</m-checkbox>
    <m-checkbox type="warning" checked>warning</m-checkbox>
    <m-checkbox type="danger" checked disabled>danger</m-checkbox>
  </div> -->

 <!--  <div class="priview-box">
    <input type="checkbox" v-model="checked">
    <m-checkbox v-model="checked" checked>{{checked}}</m-checkbox>
    <m-checkbox v-model="checked">{{checked}}</m-checkbox>
  </div>
  <div class="priview-box">
    <m-checkbox v-model="checkStr" true-val="真" false-val="假">{{checkStr}}</m-checkbox>
  </div>
   -->
  <div class="priview-box">
    <p>期望初始结果：{{['abc', 'eee', 'aaa',]}}</p>
    <p>真实初始结果：{{checkArr}}</p>
    <m-checkbox v-model="checkArr" val="aaa" checked>aaa</m-checkbox>
    <m-checkbox v-model="checkArr" val="bbb" :checked="false">bbb</m-checkbox>
    <m-checkbox v-model="checkArr" val="ccc" >ccc</m-checkbox>
    <m-checkbox v-model="checkArr" val="eee" >eee</m-checkbox>
  </div>

  <div class="priview-box">
    <p>期望初始结果：{{['abc', 'eee', 'aaa',]}}</p>
    <p>真实初始结果：{{checkArr2}}</p>
    <m-checkbox-group v-model="checkArr2" @change="change">
      <m-checkbox val="aaa" checked>aaa</m-checkbox>
      <m-checkbox val="bbb" :checked="false">bbb</m-checkbox>
      <m-checkbox val="ccc">ccc</m-checkbox>
      <m-checkbox val="eee">eee</m-checkbox>
    </m-checkbox-group>
  </div>

  <!-- <input type="checkbox" v-model="test" value="test" name="sss" /> -->
  <!-- <el-checkbox v-model="test" :checked="true" true-label="xxx1" false-label="xxx2" label="xxx1"></el-checkbox> -->
</m-box>
</div>
</template>
<script>
export default {
  data () {
    return {
      checked: false,
      checkStr: '',
      checkArr: ['abc', 'eee', 'bbb'],
      checkArr2: ['abc', 'eee', 'bbb']
    }
  },
  methods: {
    change () {
      console.log('change', this.checkArr2)
    }
  }
}
</script>
