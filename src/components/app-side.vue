<template>

<v-menu :collapse="collapse" :menus="menus" router class="side-menu"></v-menu>


</template>
<script type="text/javascript">
import VMenu from './vmenu'
import menus from './menus'
export default {
  props: {
    collapse: Boolean
  },
  data () {
    return {
      menus
    }
  },
  components: {
    VMenu
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
