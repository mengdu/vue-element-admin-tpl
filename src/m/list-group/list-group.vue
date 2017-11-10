<template>
<div class="m-list-group">
  <slot></slot>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'm-list-group'
}
</script>
<style lang="less">
  @group-name: m-list-group;
  @group-margin-bottom: 20px;
  @group-border-radius: 3px;
  @group-border-color: #E7ECEE;
  @group-bgcolor: #fff;

  .@{group-name} {
    border-radius: @group-border-radius;
    padding: 0;
    margin: 0 0 @group-margin-bottom 0;
    .@{group-name}-item{
      position: relative;
      display: block;
      padding: 6px 10px;
      margin-bottom: -1px;
      background-color: @group-bgcolor;
      border: 1px solid @group-border-color;
      &:first-child {
        border-top-left-radius: @group-border-radius;
        border-top-right-radius: @group-border-radius;
      }
      &:last-child {
        border-bottom-left-radius: @group-border-radius;
        border-bottom-right-radius: @group-border-radius;
      }
    }
  }

</style>
