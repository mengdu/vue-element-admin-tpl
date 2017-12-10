<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Alert 提示</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Alert 提示</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  
  <m-box>
    <m-alert>Default alert</m-alert>
    <m-alert type="info" closable>Info alert</m-alert>
    <m-alert type="primary">Info alert</m-alert>
    <m-alert type="success">Success alert</m-alert>
    <m-alert type="warning">Warning alert</m-alert>
    <m-alert type="danger">Danger alert</m-alert>

    <m-alert type="info" :hide="false" closable description="This is description message." />
    <m-alert type="success" closable message="Success" description="This is description message." />
  </m-box>

</div>
</template>