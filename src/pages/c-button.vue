<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Button 按钮</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Button 按钮</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="priview-box">
    <h2>default</h2>
    <m-button>Default</m-button>
    <m-button type="info">Info</m-button>
    <m-button type="primary">Primary</m-button>
    <m-button type="warning">Warning</m-button>
    <m-button type="danger">Danger</m-button>
    <m-button type="success">Success</m-button>
  </div>

  <div class="priview-box">
    <h2>plain</h2>
    <m-button plain>Default</m-button>
    <m-button type="info" plain>Info</m-button>
    <m-button type="primary" plain>Primary</m-button>
    <m-button type="warning" plain>Warning</m-button>
    <m-button type="danger" plain>Danger</m-button>
    <m-button type="success" plain>Success</m-button>
  </div>

  <div class="priview-box">
    <h2>round</h2>
    <m-button round>Default</m-button>
    <m-button type="info" round>Info</m-button>
    <m-button type="primary" round>Primary</m-button>
    <m-button type="warning" round>Warning</m-button>
    <m-button type="danger" round>Danger</m-button>
    <m-button type="success" round>Success</m-button>
  </div>
  <div class="priview-box">
    <h2>active</h2>
    <m-button active>Default</m-button>
    <m-button type="info" active>Info</m-button>
    <m-button type="primary" active>Primary</m-button>
    <m-button type="warning" active>Warning</m-button>
    <m-button type="danger" active>Danger</m-button>
    <m-button type="success" active>Success</m-button>
  </div>
  <div class="priview-box">
    <h2>disabled</h2>
    <m-button disabled>Default</m-button>
    <m-button type="info" disabled>Info</m-button>
    <m-button type="primary" disabled>Primary</m-button>
    <m-button type="warning" disabled>Warning</m-button>
    <m-button type="danger" disabled>Danger</m-button>
    <m-button type="success" disabled>Success</m-button>
  </div>

  <div class="priview-box">
    <h2>size</h2>
    <m-button size="lg">Default</m-button>
    <m-button >Default</m-button>
    <m-button size="sm">Default</m-button>
  </div>
  
  <div class="priview-box">
    <h2>group</h2>
    <m-button-group>
      <m-button type="info">首页</m-button>
      <m-button type="info">热门</m-button>
      <m-button type="info">专栏</m-button>
    </m-button-group>
    <m-button-group>
      <m-button>首页</m-button>
      <m-button>热门</m-button>
      <m-button>专栏</m-button>
    </m-button-group>
    <m-button-group>
      <m-button type="info">Info</m-button>
      <m-button type="primary">Primary</m-button>
      <m-button type="warning">Warning</m-button>
      <m-button type="danger">Danger</m-button>
    </m-button-group>
  </div>

  <div class="priview-box">
    <h2>block</h2>
    <m-button block>Default</m-button>
    <m-button type="info" block>Info</m-button>
    <m-button type="primary" block>Primary</m-button>
    <m-button type="warning" block>Warning</m-button>
    <m-button type="danger" block>Danger</m-button>
    <m-button type="success" block>Success</m-button>
  </div>

</div>
</template>
<style type="text/css">
  
</style>
