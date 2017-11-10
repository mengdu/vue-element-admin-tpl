<style>
  .m-nav-header{
    min-height: 50px;
  }
  .m-nav-header .m-navbar-brand{
    float: left;
    min-height: 50px;
  }
  .m-nav-header .m-navbar-toggle{
    float: right;
    min-height: 50px;
  }
  .m-nav-header .navbar-toggle{
    margin-top: 10px;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .m-nav-header .navbar-toggle .m-icon-bar{
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 5px 0;
    background-color: #646464;
  }
  .m-nav-header .navbar-toggle:hover .m-icon-bar{
    background-color: #282C34;
  }
  @media(min-width: 768px) {
    .m-nav-header{
      float: left;
    }
    .m-nav-header .m-navbar-toggle{
      display: none;
    }
  }
</style>
<template>
<div class="m-nav-header">
  <div class="m-navbar-brand"><slot name="navbar-brand"></slot></div>
  <div class="m-navbar-toggle" @click.stop="handleToggle">
    <slot name="navbar-toggle" >
      <button class="navbar-toggle">
        <span class="m-icon-bar"></span>
        <span class="m-icon-bar"></span>
        <span class="m-icon-bar"></span>
      </button>
      
    </slot>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'MNavHeader',
  methods: {
    handleToggle () {
      this.$parent.toggle()
    }
  }
}
</script>
