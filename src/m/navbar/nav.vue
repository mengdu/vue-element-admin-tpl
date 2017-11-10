<style type="text/css">
  .m-nav{
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .m-nav::before,
  .m-nav::after{
    content: "";
    display: table;
    clear: both;
  } 
  .m-nav .m-nav-item{
    line-height: 30px;
  }
  /*.m-nav .m-nav-item.active>a,
  .m-nav .m-nav-item>a:hover{
    background-color: rgba(0,0,0, 0.07);
  }*/
  .m-nav .m-nav-item>a{
    padding: 10px 15px;
    display: block;
    height: 100%;
    box-sizing: border-box;
  }
  @media(min-width: 768px) {
    .m-nav{
      float: left;
    }
    .m-nav.right{
      float: right;
    }
    .m-nav .m-nav-item{
      height: 100%;
      display: inline-block;
      float: left;
    }
  }
  @media(max-width: 768px) {
    .m-nav-item .m-dropdown{
      display: block;
    }
    .m-nav-item .m-dropdown .m-dropdown-menu{
      border: none;
      box-shadow: none;
      position: relative;
    }
  }
</style>
<template>
<ul class="m-nav"
  :class="[float]"
  ><slot></slot></ul>
</template>

<script>
export default {
  name: 'MNav',
  props: {
    float: {
      type: String,
      default: ''
    }
  }
}
</script>
