<template>
<label class="m-checkbox"
  :class="[
    type && 'm-checkbox-' + type
  ]"
  >
  <input type="checkbox" :name="name" :disabled="disabled" v-model="status" @change="change">
  <span class="m-checkbox-bg"></span>
  <span class="m-checkbox-mark"></span>
  <span class="m-checkbox-text"><template>{{label}}</template><slot></slot></span>
</label>
</template>
<script>
function inArray (val, arr) {
  for (let i in arr) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}
export default {
  name: 'm-checkbox',
  props: {
    name: String,
    type: String,
    checked: {
      type: Boolean,
      default: undefined
    },
    disabled: Boolean,
    value: [Boolean, Array, String, Number],
    // value为Array或者存在组时才用
    val: {
      type: [Boolean, String, Number],
      default: true
    },
    trueVal: {
      type: [Boolean, String, Number],
      default: true
    },
    falseVal: {
      type: [Boolean, String, Number],
      default: false
    },
    label: String
  },
  data () {
    return {
      status: false,
      target: null,
      hasGroup: false
    }
  },
  watch: {
    value (val) {
      // console.log('watch value', val, this.returnVal())
      this.setStatus()
    }
  },
  methods: {
    change () {
      var val = this.returnVal()
      // console.log('change', this.status, val)
      if (this.isArr(this.value) || this.hasGroup) {
        var index = inArray(val, this.target.value)
        if (index > -1) {
          var newArr = []
          for (let i in this.target.value) {
            if (this.target.value[i] !== val) {
              newArr.push(this.target.value[i])
            }
          }
          this.target.$emit('input', newArr)
          this.target.$emit('change')
        } else {
          this.target.$emit('input', [...this.target.value, val])
          this.target.$emit('change')
        }
      } else {
        this.target.$emit('input', val)
        this.target.$emit('change')
      }
    },
    returnVal () {
      if (this.isArr(this.value) || this.hasGroup) {
        if (typeof this.val !== 'undefined') {
          return this.val
        } else {
          return this.status
        }
      } else {
        return this.status ? this.trueVal : this.falseVal
      }
    },
    setStatus () {
      if (this.hasGroup || this.isArr(this.value)) {
        var index = inArray(this.val, this.target.value)
        this.status = index > -1
      } else {
        if (this.value === this.trueVal) {
          this.status = true
        } else if (this.value === this.falseVal) {
          this.status = false
        }
      }
    },
    isArr (val) {
      return Object.prototype.toString.call(val) === '[object Array]'
    },
    setTarget () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'MCheckboxGroup') {
          parent = parent.$parent
        } else {
          this.target = parent
          return true
        }
      }
      this.target = this
      return false
    }
  },
  mounted () {
    this.hasGroup = this.setTarget()
    if (typeof this.checked !== 'undefined') {
      // console.log('init', this.val)
      // 异步为了解决input不同步问题
      setTimeout(() => {
        this.status = this.checked
        this.change()
      })
    }
    this.setStatus()
  }
}
</script>
<style lang="less">
@import './checkbox.less';
</style>
