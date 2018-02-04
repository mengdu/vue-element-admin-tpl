<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Dropdown</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Dropdown</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  
  <m-box>
    <m-dropdown>
      <a href="#">Dropdown</a>
      <m-dropdown-panel>
        <m-dropdown-item>点赞</m-dropdown-item>
        <m-dropdown-item>转发</m-dropdown-item>
        <m-dropdown-item>用户信息</m-dropdown-item>
        <m-dropdown-item><a href="/login">分享</a></m-dropdown-item>
        <m-dropdown-item path="/login">退出</m-dropdown-item>
      </m-dropdown-panel>
    </m-dropdown>
    
    <m-dropdown align="right">
      <a href="#">Dropdown(right)</a>
      <m-dropdown-panel>
        <m-dropdown-item>点赞</m-dropdown-item>
        <m-dropdown-item>转发</m-dropdown-item>
        <m-dropdown-item>用户信息</m-dropdown-item>
        <m-dropdown-item><a href="/login">分享</a></m-dropdown-item>
        <m-dropdown-item disabled>复制</m-dropdown-item>
      </m-dropdown-panel>
    </m-dropdown>

    <m-dropdown align="right" @command="handleCommand">
      <m-button>Dropdown <i class="caret"></i></m-button>
      <m-dropdown-panel>
        <m-dropdown-item cmd="copy" >Copy</m-dropdown-item>
        <m-dropdown-item cmd="cut" >Cut</m-dropdown-item>
        <m-dropdown-item cmd="paste" >Paste</m-dropdown-item>
        <m-dropdown-item><a href="/login">分享</a></m-dropdown-item>
        <m-dropdown-item>关于</m-dropdown-item>
      </m-dropdown-panel>
    </m-dropdown>
    

    <m-dropdown align="right" vertical-align="bottom" show>
      <m-button>Dropdown(up)<i class="caret"></i></m-button>
      <m-dropdown-panel>
        <m-dropdown-item>Cut</m-dropdown-item>
        <m-dropdown-item off-click>Paste</m-dropdown-item>
      </m-dropdown-panel>
    </m-dropdown>
  </m-box>

</div>

</template>
<script>
export default {
  methods: {
    handleCommand (cmd) {
      this.$message(cmd)
    }
  }
}
</script>
