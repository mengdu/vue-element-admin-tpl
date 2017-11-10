<template>
<div class="body">
  <div class="priview-box">
    <m-alert>Default alert</m-alert>
    <m-alert type="info" closable>Info alert</m-alert>
    <m-alert type="primary">Info alert</m-alert>
    <m-alert type="success">Success alert</m-alert>
    <m-alert type="warning">Warning alert</m-alert>
    <m-alert type="danger">Danger alert</m-alert>
  </div>
  <div class="priview-box">
    <m-alert type="info" :hide="false" closable description="This is description message." />
    <m-alert type="success" closable message="Success" description="This is description message." />
  </div>

</div>
</template>