<template>

<v-menu class="side-menu"
  :collapse="collapse"
  :default-active="defaultActive"
  :menus="menus"
  router
  :background-color="theme.backgroundColor"
  :text-color="theme.textColor"
  :active-text-color="theme.activeTextColor"
  ></v-menu>


</template>
<script type="text/javascript">
import VMenu from './vmenu'
import menus from './menus'
export default {
  props: {
    collapse: Boolean,
    theme: Object
  },
  components: {
    VMenu
  },
  data () {
    return {
      menus,
      defaultActive: 'home',
      test: 'asdfasdf'
    }
  },
  watch: {
    $route () {
      this.setCurrentRoute()
    }
  },
  methods: {
    setCurrentRoute () {
      // console.log(this.$route)
      this.defaultActive = this.$route.name
    }
  },
  created () {
    this.setCurrentRoute()
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
