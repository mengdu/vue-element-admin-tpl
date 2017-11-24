<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Demo</h1>
    <p class="tips">这是测试页面</p>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Demo</el-breadcrumb-item>
    </el-breadcrumb>
  </div>  
  
  <div class="priview-box" style="background:#fff">
    <m-loading></m-loading>
    <m-loading type="wipe"></m-loading>

    <m-loading color="#038E5A" bg-color="#D81A79"></m-loading>
    <m-loading type="wipe" color="#671AD8"></m-loading>
  
    <m-loading color="#038E5A" :bg-color="false"></m-loading>

    <m-loading width="24"></m-loading>
    <m-loading width="64"></m-loading>
  </div>

</div>
</template>
