<template>
<div class="body">
  <div class="priview-box">
    <m-switch v-model="state">defalut</m-switch>
    <m-switch v-model="state" type="success"></m-switch>
    <m-switch v-model="state" type="danger"></m-switch>
    <m-switch v-model="state" type="warning"></m-switch>
    <m-switch v-model="state" type="primary"></m-switch>
    <input type="checkbox" v-model="state">
  </div>
  <div class="priview-box">
    <m-switch :value="true" invert >defalut</m-switch>
  </div>

  <div class="priview-box">
    <m-switch :value="true" invert size="lg" >lg</m-switch>
    <m-switch :value="true" invert  >default</m-switch>
    <m-switch :value="true" invert size="sm" >sm</m-switch>
  </div>

  <div class="priview-box">
    <m-switch :value="false" disabled type="primary">sm</m-switch>
    <m-switch :value="true" disabled type="primary">sm</m-switch>
  </div>
<!--   <div class="priview-box">
    <m-switch v-model="radio1" name="test2" radio>defalut</m-switch>
    <m-switch v-model="radio1" radio>defalut</m-switch>
  </div> -->

</div>
</template>
<script type="text/javascript">
export default {
  name: 'c-switch',
  data () {
    return {
      state: false,
      radio1: false
    }
  }
}
</script>
