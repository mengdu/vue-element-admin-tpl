<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Table表格数据</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Table表格数据</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="box">
    <el-table>
      <el-table-column label="#" type="index"></el-table-column>
      <el-table-column label="ID" prop="id" width="80"></el-table-column>
      <el-table-column label="动作" prop="action"></el-table-column>
      <el-table-column label="结果" prop="result"></el-table-column>
      <el-table-column label="描述" prop="desctiption"></el-table-column>
      <el-table-column label="状态" prop="show" width="80" ></el-table-column>
      <el-table-column label="创建时间" prop="createdAt">
        <template slot-scope="scope">
          {{format(scope.row.createdAt)}}
        </template>
      </el-table-column>
      <el-table-column label="最后更新" prop="updatedAt">
        <template slot-scope="scope">
          {{format(scope.row.updatedAt)}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <m-button type="danger">删除</m-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
  </div>

</div>
</template>
<style>
  .box-body{
    width: 100%;
    overflow: auto;
  }
</style>
