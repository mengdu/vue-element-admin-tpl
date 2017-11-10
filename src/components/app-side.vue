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
    default: false
  },
  components: {
    menuList
  },
  data () {
    return {
      menus: [
        {
          id: '0',
          label: '控制面板',
          path: '/',
          icon: 'fa fa-home'
        },
        {
          id: 1,
          label: '用户管理',
          path: '/uesr',
          icon: 'fa fa-user',
          submenu: [
            {
              id: 2,
              label: '用户列表',
              path: '/list',
              icon: 'el-icon-phone'
            },
            {
              id: 3,
              label: '联系人',
              path: '/list',
              icon: 'el-icon-edit-outline'
            }
          ]
        },
        {
          id: 'test',
          label: '分组菜单',
          icon: 'el-icon-menu',
          submenu: [
            [
              '组名',
              [{
                id: 'xx1',
                label: '导航1-0',
                name: 'c-switch'
              }]
            ],
            [
              '组2',
              [{
                id: 'xx2',
                label: '导航1-1',
                path: '/'
              }]
            ]
          ]
        },
        {
          id: 'components',
          icon: 'fa fa-microchip',
          label: 'Components 组件',
          submenu: [
            ['Form 表单', [
                {id: 'f1', name: 'c-button', label: 'Button 按钮'},
                {id: 'f2', name: 'c-switch', label: 'Switch 开关'}
            ]],
            ['Notice', [
              {id: 'n1', name: 'c-alert', label: 'Alert 警告'}
            ]]
          ]
        },
        {
          id: 'pages',
          icon: 'fa fa-pied-piper',
          label: 'Pages 页面',
          submenu: [
            {id: 'p1', name: 'login', label: 'Login 登录'},
            {id: 'p1', name: 'login', label: 'Register 注册'}
          ]
        }
      ]
    }
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
  }
</style>
