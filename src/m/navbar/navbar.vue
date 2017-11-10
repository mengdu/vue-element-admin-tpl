<style>
.m-navbar{
  min-height: 50px;
  background-color: #fff;
  padding: 0 15px;
}
/* .m-navbar::before,
.m-navbar::after{
  content: "";
  display: table;
  clear: both;
} */
@media(max-width: 768px) {
  .m-navbar{
    height: 50px;
    overflow: hidden;
    transition: height .5s ease;
  }
  .m-navbar.open{
    height: auto;
  }
}
</style>
<template>
<div class="m-navbar"
  :class="{open: isOpen}"
  ><slot></slot></div>
</template>

<script>
export default {
  name: 'MNavbar',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
