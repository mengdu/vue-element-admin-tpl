<template>
  <div class="m-alert"
    v-if="!isHide"
    :class="[
      type && 'm-alert-' + type
    ]"
    >
    <p class="m-alert-message" v-if="message">{{message}}</p>
    <slot></slot>
    <p class="m-alert-description" v-if="description">{{description}}</p>
    <span class="m-alert-close-btn" v-if="closable" @click="close"></span>
  </div>
</template>
<script>
export default {
  name: 'm-alert',
  props: {
    type: String,
    closable: Boolean,
    message: String,
    description: String,
    hide: Boolean
  },
  data () {
    return {
      isHide: this.hide
    }
  },
  watch: {
    hide (val) {
      this.isHide = val
      if (val) {
        this.$emit('show')
      }
    }
  },
  methods: {
    close () {
      this.isHide = !this.isHide
      if (this.isHide) {
        this.$emit('close')
      }
    }
  }
}
</script>
<style lang="less">
  @alert: m-alert;

  @alert-border-radius: 4px;

  @alert-default-border-color: #D7DDE4;
  @alert-default-bg-color: #eaedf1;

  @alert-info-border-color: #cfecff;
  @alert-info-bg-color: #E8F7FF;
  @alert-info-text-color: #0da6f5;

  @alert-primary-border-color: #ded9f7;
  @alert-primary-bg-color: #eae8f7;
  @alert-primary-text-color: #7967e4;

  @alert-success-border-color: #CFEFDF;
  @alert-success-bg-color: #EBF8F2;
  @alert-success-text-color: #0ca004;

  @alert-danger-border-color: #f9dada;
  @alert-danger-bg-color: #fff0f0;
  @alert-danger-text-color: #cc0d0d;

  @alert-warning-border-color: #fbebd9;
  @alert-warning-bg-color: #fffae3;
  @alert-warning-text-color: #e68406;
  .make-alert-theme(@type) {
    &&-@{type} {
      background-color: ~"@{alert-@{type}-bg-color}";
      border-color: ~"@{alert-@{type}-border-color}";
      color: ~"@{alert-@{type}-text-color}";
    }
  }
  .@{alert}{
    padding: 8px 48px 8px 16px;
    border: solid 1px @alert-default-border-color;
    line-height: 1.5;
    border-radius: @alert-border-radius;
    background-color: @alert-default-bg-color;
    position: relative;
    margin-bottom: 15px;
    font-size: 13px;
    &:last-child{
      margin-bottom: 0px;
    }
    & .@{alert}-message {
      font-size: 15px;
      margin: 0;
      margin-bottom: 4px;
    }
    & .@{alert}-description {
      margin: 0;
      margin-bottom: 4px;
    }
    & .@{alert}-close-btn{
      position: absolute;
      display: block;
      width: 15px;
      height: 15px;
      top: 50%;
      right: 10px;
      text-align: center;
      transform: translateY(-50%);
      cursor: pointer;
      &:before{
        content: "×";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 12px;
        font-size: 16px;
        font-weight: 600;
        font-family: sans-serif;
        top: 0;
        left: 0;
      }
    }
    .make-alert-theme(info);
    .make-alert-theme(primary);
    .make-alert-theme(success);
    .make-alert-theme(danger);
    .make-alert-theme(warning);
  }
</style>
