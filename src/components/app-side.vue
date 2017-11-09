<template>
<el-menu default-active="1-4-1" class="side-menu" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
    <el-menu-item index="6">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  
  <el-submenu index="9">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">组件</span>
    </template>
    <el-menu-item-group>
      <span slot="title">表单</span>
      <el-menu-item index="9-1">
        <router-link :to="{name: 'c-button'}">Button 按钮</router-link>
      </el-menu-item>
      <el-menu-item index="9-2">
        <router-link :to="{name: 'c-switch'}">Switch 开关</router-link>
      </el-menu-item>
      <el-menu-item index="9-3">
        <router-link :to="{name: 'c-button'}">checkbox</router-link>
      </el-menu-item>
    </el-menu-item-group>
  </el-submenu>

  <el-menu-item v-for="menu in menus" :key="menu.id" :index="menu.id + ''">
    <i v-if="menu.icon" 
      :class="[menu.icon]"
      ></i>
    <span slot="title">{{menu.label}}</span>
  </el-menu-item>
</el-menu>
</template>
<script type="text/javascript">
export default {
  name: 'app-side',
  props: {
    isCollapse: Boolean,
    default: false
  },
  data () {
    return {
      menus: [
        {
          id: 1,
          label: '主页',
          icon: 'el-icon-home'
        },
        {
          id: 2,
          label: '用户',
          icon: 'el-icon-user',
          submenu: [
            {
              id: 3,
              label: '用户列表'
            },
            {
              id: 4,
              label: '注册情况'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style type="text/css">
  .el-menu.side-menu{
    border-right: none;
  }
</style>
