<template>

<el-container class="app-container">
  <el-header class="app-header">
    <app-header></app-header>
  </el-header>
  <el-container>
    <el-aside width="200px" class="app-side">
      <app-side></app-side>
    </el-aside>
    <el-container>
      <el-main class="app-body">
        <router-view></router-view>
      </el-main>
      <el-footer class="app-footer">
        <app-footer></app-footer>
      </el-footer>
    </el-container>
  </el-container>
</el-container>
</template>
<script type="text/javascript">
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppSide from '@/components/app-side'
export default {
  name: 'app-view',
  components: {
    AppHeader,
    AppFooter,
    AppSide
  }
}
</script>
<style type="text/css">
  .app-container{
    margin: 0 auto;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .app-container .app-header{
    padding: 0;
    background: #16AAD8;
    color: #fff;
  }
  .app-container .app-side{
    /*background: #1C2B36;*/
  }
  .app-container .app-body{
    background: #ECF0F5;
  }
</style>
