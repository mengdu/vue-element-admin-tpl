<template>
<div class="m-input-wrapper"
  :class="{
    'm-input-block': block
  }"
  @click="handleClick"
  >
  <textarea v-if="type === 'textarea'" class="m-input m-input-textarea" v-model="val"
    :placeholder="placeholder"
    :class="{
      'm-input-danger': theme === 'danger',
      'm-input-success': theme === 'success'
    }"
    :disabled="disabled"
    :style="{
      maxHeight: maxHeight,
      maxWidth: maxWidth,
      minHeight: minHeight,
      minWidth: minWidth,
      width: width,
      height: height
    }"
    ></textarea>
  <input v-else :type="type" class="m-input" v-model="val"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="{
      'm-input-danger': theme === 'danger',
      'm-input-success': theme === 'success',
      'm-input-max': size === 'max',
      'm-input-large': size === 'large',
      'm-input-small': size === 'small',
      'm-input-mini': size === 'mini',
    }"
    :style="{
      minHeight: minHeight,
      minWidth: minWidth,
      width: width,
      height: height
    }"
    />
</div>
</template>
<script>
export default {
  name: 'm-input',
  props: {
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    theme: String,
    size: {
      type: String,
      default: ''
    },
    maxHeight: String,
    maxWidth: String,
    minHeight: String,
    minWidth: String,
    width: String,
    height: String
  },
  data () {
    return {
      val: this.value || ''
    }
  },
  watch: {
    value () {
      this.val = this.value
    },
    val (val) {
      if (val !== this.value) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    handleFocus (e) {
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    }
  }
}
</script>
<style lang="less">
@import './input.less';
</style>
