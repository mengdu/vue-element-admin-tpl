<template>
<el-menu default-active="0" :default-openeds="['components']" class="side-menu" :collapse="isCollapse" router>
  <!-- <el-menu-item index="1" :route="{path: '/'}">
    <i class="el-icon-menu"></i>
    <span slot="title">导航一</span>
  </el-menu-item>
  <el-menu-item index="2" :route="{path: '/button'}">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" :route="{name: 'login'}">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-submenu index="4">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">二级导航</span>
    </template>
    <el-menu-item index="4-1" :route="{path: '/switch'}">
      <i class="el-icon-menu"></i>
      <span slot="title">导航4-1</span>
    </el-menu-item>
    <el-menu-item-group  title="组名">
      <el-menu-item index="4-2" :route="{path: '/switch'}">
        <i class="el-icon-menu"></i>
        <span slot="title">导航4-2</span>
      </el-menu-item>
    </el-menu-item-group>
  </el-submenu> -->

  
  <template v-for="item in menus">
    <template v-if="isArr(item)">
    <el-menu-item-group
      :title="typeof item[0] === 'string' ? item[0] : ''"
      >
      <el-menu-item
        v-for="(val, index) in item[1]"
        :key="val.id"
        :index="val.id + ''"
        :route="toRoute(val)"
        >
        <i v-if="val.icon" :class="val.icon"></i>
        <span slot="title">{{val.label}}</span>
      </el-menu-item>
    </el-menu-item-group>
    </template>
    <template v-else>
      <el-submenu
        v-if="item.submenu"
        :key="item.id"
        :index="item.id + ''"
        >
        <template slot="title">
          <i v-if="item.icon" :class="item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <menu-list :menus="item.submenu"></menu-list>
      </el-submenu>
      <el-menu-item
        v-else
        :key="item.id"
        :index="item.id + ''"
        :route="toRoute(item)"
        >
        <i v-if="item.icon" :class="item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
    </template>
  </template>
  <!-- 由于缩小侧边栏问题，不能直接使用menu-list组件 -->
  <!-- <menu-list :menus="menus"></menu-list> -->

</el-menu>
</template>
<script type="text/javascript">
import menuList from './menu-list'
export default {
  name: 'app-side',
  props: {
    isCollapse: Boolean,
    default: false,
    menus: {
      type: Array,
      required: true
    }
  },
  components: {
    menuList
  },
  methods: {
    isArr (v) {
      return Object.prototype.toString.call(v) === '[object Array]'
    },
    toRoute (item) {
      if (item.name) {
        return {name: item.name}
      } else if (item.path) {
        return {path: item.path}
      }
      return {}
    }
  }
}
</script>
<style type="text/css">
  .el-menu.side-menu{
    border-right: none;
  }
  .el-menu .fa{
    font-size: 18px;
    margin-right: 7px;
    display: inline-block;
    width: 23px;
    text-align: center;
  }
  .el-menu.side-menu .el-menu-item.is-active {
    color: #409EFF;
    border-right: solid 2px #36c1fa;
    background: #eef3f5;
  }
</style>
