<template>
<el-menu
  :mode="mode"
  :collapse="collapse"
  :backgroundColor="backgroundColor"
  :textColor="textColor"
  :activeTextColor="activeTextColor"
  :defaultActive="defaultActive"
  :defaultOpeneds="defaultOpeneds"
  :uniqueOpened="uniqueOpened"
  :menuTrigger="menuTrigger"
  :router="router"
  @open="open"
  @close="close"
  @select="select"
  >
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
import menuList from './chunk'
export default {
  name: 'VMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    collapse: {
      type: Boolean,
      default: false
    },
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    defaultActive: String,
    defaultOpeneds: Array,
    uniqueOpened: Boolean,
    menuTrigger: String,
    router: Boolean,
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
    },
    open (index) {
      this.$emit('open', index)
    },
    close (index) {
      this.$emit('close', index)
    },
    select (index) {
      this.$emit('select', index)
    }
  }
}
</script>
<style type="text/css">
  .el-menu.side-menu{
    border-right: none;
  }
  .el-menu .fa{
    font-size: 15px;
    margin-right: 0px;
    display: inline-block;
    width: 23px;
    text-align: center;
    color: inherit;
  }
</style>
