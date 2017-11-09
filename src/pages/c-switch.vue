<template>
<div class="body">
  <div class="priview-box">
    <m-switch v-model="state">xc</m-switch>
    <input type="checkbox" v-model="state">
  </div>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'c-switch',
  data () {
    return {
      state: false
    }
  }
}
</script>
