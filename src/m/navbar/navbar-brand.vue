<template>
<div class="m-navbar-brand"><slot></slot>
  <button class="m-navbar-toggler" @click="handleToggle">
    <span class="m-icon-bar"></span>
    <span class="m-icon-bar"></span>
    <span class="m-icon-bar"></span>
  </button>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'MNavbarBrand',
  methods: {
    handleToggle () {
      this.$parent.toggle()
    }
  }
}
</script>
