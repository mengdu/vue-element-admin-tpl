<template>
  <div class="page-concainer">
    <el-breadcrumb separator="/" class="page-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Page1</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="block-box">
      <div class="block-box--header">Users</div>
      <el-table :data="dataList" v-loading="loadding" stripe border>
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="Avatar">
          <template slot-scope="scope"><img :src="scope.row.avatar_url" alt="avatar" width="32" height="32" style="vertical-align: middle;"/></template>
        </el-table-column>
        <el-table-column label="Username" prop="login"></el-table-column>
        <el-table-column label="node_id" prop="node_id"></el-table-column>
        <el-table-column label="Home" prop="html_url"></el-table-column>
        <el-table-column label="Type" prop="type"></el-table-column>
      </el-table>
      <div class="block-box--footer">
        Footer
      </div>
    </div>
  </div>
</template>
<script>
import { getUserList } from '../../api/user'
export default {
  data () {
    return {
      loadding: true,
      dataList: []
    }
  },
  mounted () {
    getUserList().then(res => {
      this.dataList = res.data
      this.loadding = false
    })
  }
}
</script>
