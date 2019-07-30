<template>
  <div class="m-collapse-item"
    :class="{
      'is-open': isOpen
    }"
    :data-name="name"
    >
    <div class="m-collapse-item--title" @click="handleItemClick">
      <slot name="title">{{title}}</slot>
      <IconArrow v-if="!hideArrow" :direction="isOpen ? 'bottom' : 'left'" class="m-collapse-item--arrow"/>
    </div>
    <collapse-container :open="isOpen" appear>
      <div class="m-collapse-item--content"><slot></slot></div>
    </collapse-container>
  </div>
</template>
<script>
import CollapseContainer from './collapse-container'
import IconArrow from '../icon-arrow'

export default {
  name: 'm-collapse-item',
  components: {
    CollapseContainer,
    IconArrow
  },
  props: {
    name: {
      type: [Number, String],
      required: true
    },
    title: String,
    hideArrow: Boolean
  },
  computed: {
    isOpen () {
      if (!this.parent) return false

      if (Array.isArray(this.parent.innerValue)) {
        return this.parent.innerValue.indexOf(this.name) > -1
      } else {
        return this.name === this.parent.innerValue
      }
    }
  },
  methods: {
    getParent (componentName) {
      let parent = this.$parent || this.$root
      let name = parent.$options.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        } else {}
      }

      return parent
    },
    handleItemClick () {
      if (!this.parent) return
      if (Array.isArray(this.parent.innerValue)) {
        const index = this.parent.innerValue.indexOf(this.name)
        if (index > -1) {
          this.parent.innerValue.splice(index, 1)
        } else {
          this.parent.innerValue.push(this.name)
        }
      } else {
        this.parent.innerValue = this.isOpen ? '' : this.name
      }
    }
  },
  created () {
    this.parent = this.getParent('MCollapse')
  }
}
</script>
