<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Loading 加载图标</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Loading 加载图标</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  
<m-box title="loading">
  <m-loading></m-loading>
  <m-loading type="wipe"></m-loading>

  <m-loading color="#038E5A" bg-color="#D81A79"></m-loading>
  <m-loading type="wipe" color="#671AD8"></m-loading>

  <m-loading color="#038E5A" :bg-color="false"></m-loading>

  <m-loading width="24"></m-loading>
  <m-loading width="64"></m-loading>
  <p></p>
  <m-loading type="wipe" width="128"></m-loading>
  <m-loading width="128" color="#03B976"></m-loading>
</m-box>

</div>
</template>