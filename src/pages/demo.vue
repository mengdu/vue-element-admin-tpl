<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Demo</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Demo</el-breadcrumb-item>
    </el-breadcrumb>
  </div>  
  
<div class="info-box">
  <div class="info-centent">
    <div class="info-header"><img src="../assets/logo.png" class="info-logo"></div>
    <h1 class="info-title">Administrator</h1>
    <p class="text-center">专注网站技术</p>
    <div class="text-center" style="margin-top: 30px">
      <m-button type="info" round><i class="fa fa-github"></i>&nbsp;Github</m-button>
      <m-button type="success" round plain><i class="fa fa-code"></i>&nbsp;My blog</m-button>
    </div>
  </div>
</div>

<div style="height: 2000px"></div>

<m-loader src="/static/config.js" script mount="jQuery" ></m-loader>
<m-loader src="/static/test.css"></m-loader>

</div>
</template>
<style>
  .info-centent,
  .info-box{
    margin: 0 auto;
    width: 300px;
    height: 350px;
    background: #fff;
    position: relative;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  .info-box{
    margin-top: 100px;
  }
  .info-box:before,
  .info-box:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inherit;
    border-radius: inherit;
    transform: rotate(3deg);
    background: inherit;
    opacity: .9;
  }
  .info-box:before{
    transform: rotate(-6deg);
    top: -2px;
    left: -2px;
  }
  .info-centent{
    position: absolute;
    z-index: 100;
    padding: 30px 15px;
    box-sizing: border-box;
  }
  .info-header{
    text-align: center;
  }
  .info-logo{
    width: 100px;
  }
  .info-title {
    text-align: center;
    font-weight: 100;
  }
</style>
