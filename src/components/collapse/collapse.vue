<template>
  <div class="m-collapse"
    :class="{
      'is-simple': simple
    }"
    >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-collapse',
  componentName: 'MCollapse',
  props: {
    value: [String, Array],
    simple: Boolean
  },
  data () {
    return {
      innerValue: ''
    }
  },
  watch: {
    value (val) {
      this.setInnerValue(val)
    },
    innerValue (val) {
      if (Array.isArray(val)) {
        const neq = this.value.length !== val.length || [...val].sort((a, b) => a > b ? -1 : 1).join() !== [...this.value].sort((a, b) => a > b ? -1 : 1).join()
        neq && this.$emit('input', [...val])
        this.$emit('change', val)
      } else {
        if (this.value !== val) {
          this.$emit('input', val)
          this.$emit('change', val)
        }
      }
    }
  },
  methods: {
    setInnerValue (val) {
      if (Array.isArray(val)) {
        this.innerValue = [...val]
      } else {
        this.innerValue = val
      }
    }
  },
  created () {
    this.setInnerValue(this.value)
  }
}
</script>
