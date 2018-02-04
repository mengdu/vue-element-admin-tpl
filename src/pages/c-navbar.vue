<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Navbar</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Navbar</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <m-box>
    <m-navbar>
      <m-navbar-brand>Navbar</m-navbar-brand>
      <m-nav>
        <m-nav-item>首页</m-nav-item>
        <m-nav-item>专栏</m-nav-item>
        <m-nav-item disabled>用户中心</m-nav-item>
      </m-nav>
      <m-nav align="right">
        <m-nav-item active><a href="https://www.lanyueos.com" target="_blank">主页</a></m-nav-item>
        <m-nav-item><a href="https://blog.lanyueos.com" target="_blank">博客</a></m-nav-item>
        <m-nav-item><a href="https://www.lanyueos.com" target="_blank">关于</a></m-nav-item>
      </m-nav>
    </m-navbar>
  </m-box>

</div>
</template>
