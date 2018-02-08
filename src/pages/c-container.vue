<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">栅格系统</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >栅格系统</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  
  <m-box>
    <m-container fluid class="test-container">
      <m-row>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
        <m-col md="1">md-1</m-col>
      </m-row>
      <p></p>
      <m-row>
        <m-col md="4">md-4</m-col>
        <m-col md="4">md-4</m-col>
        <m-col md="4">md-4</m-col>
      </m-row>
      <p></p>
      <m-row>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
        <m-col xs="1">xs-1</m-col>
      </m-row>
      <p></p>
      <m-row>
        <m-col xs="3">xs-3</m-col>
        <m-col xs="3">xs-3</m-col>
        <m-col xs="3">xs-3</m-col>
        <m-col xs="3">xs-3</m-col>
      </m-row>
      <p></p>
      <m-row>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
        <m-col sm="1">sm-1</m-col>
      </m-row>
      <p></p>
      <m-row>
        <m-col sm="2">sm-2</m-col>
        <m-col sm="4">sm-4</m-col>
        <m-col sm="4">sm-4</m-col>
        <m-col sm="2">sm-2</m-col>
      </m-row>
      <p></p>
      <m-row>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
        <m-col lg="1">lg-1</m-col>
      </m-row>
      <p></p>
      <m-row>
        <m-col lg="6">lg-6</m-col>
        <m-col lg="6">lg-6</m-col>
      </m-row>
      <p></p>
      <m-row>
        <m-col md="3" xs="4">md-3，xs-4</m-col>
        <m-col md="3" xs="5">md-3，xs-5</m-col>
        <m-col md="6" xs="3">md-6，xs-3</m-col>
      </m-row>
      <p></p>
      <m-row>
        <m-col md="3" offset="3">md-3，offset-3</m-col>
        <m-col md="3" offset="3">md-3，offset-3</m-col>
      </m-row>
      <p></p>
      <m-row>
        <m-col md="8" push="4">md-8，push-4</m-col>
        <m-col md="4" pull="8">md-4，pull-8</m-col>
      </m-row>

    </m-container>
  </m-box>
</div>
</template>
<style type="text/css">
  .test-container{

  }
  .test-container .m-row > div{
    background-color: #8496ab;
    height: 35px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 35px;
  }
  .test-container .m-row > div:nth-child(odd){
    background-color: #c8d2de;
  }
</style>