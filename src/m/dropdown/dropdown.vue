<style type="text/css">
  .caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }
  .m-dropdown{
    display: inline-block;
    position: relative;
  }
  .m-dropdown-menu{
    display: none;
    margin: 0;
    padding: 5px 10px;
    list-style: none;
    position: absolute;
    z-index: 1000;
    background: #fff;
    border-radius: 0 0 3px 3px;
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.09);
  }
  .m-dropdown-menu .m-dropdown-item{
    min-width: 100px;
    margin-left: -10px;
    margin-right: -10px;
    list-style: none;
    line-height: 28px;
    padding: 0 10px;
    color: #282C34;
    cursor: pointer;
    white-space: nowrap;
  }
  .m-dropdown-menu .m-dropdown-item>a{
    display: inline-block;
    width: 100%;
    color: inherit;
  }
  .m-dropdown-menu .m-dropdown-item:hover{
    background: #1FA7EA;
    color: #fff;
  }
  .m-dropdown-menu .m-dropdown-item.is-disabled{
    cursor: not-allowed;
    color: #bfcbd9;
    pointer-events: none;
  }

  /*----------*/
  .m-dropdown.right .m-dropdown-menu{
    right: 0;
  }
  .m-dropdown.open{
    background-color: rgba(57,88,149, 0.1);
  }
  .m-dropdown.open .m-dropdown-menu{
    display: block;

  }
</style>
<template>
<div class="m-dropdown" 
  :class="[{open: isOpen}, menuAlign]"
  @click.stop="handleClick"
  @mouseover="handleOver"
  @mouseout="handleOut"
  >
  <slot></slot>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'MDropdown',
  data () {
    return {
      isOpen: false,
      clock: null
    }
  },
  props: {
    menuAlign: {
      type: String
    },
    trigger: {
      type: String,
      default: 'click'
    },
    waitTime: {
      type: Number
    }
  },
  methods: {
    open () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
    },
    handleClick () {
      this.isOpen = !this.isOpen
    },
    handleOver () {
      if (this.trigger === 'click') return
      this.clock = clearTimeout(this.clock)
      if (!this.isOpen) {
        this.isOpen = true
      }
    },
    handleOut () {
      if (this.trigger === 'click') return
      this.clock = clearTimeout(this.clock)
      this.clock = setTimeout(() => {
        this.isOpen = false
      }, this.waitTime || 100)
    },
    documentClick (e) {
      if (this.isOpen) {
        this.close()
      }
    }
  },
  created () {
    document.addEventListener('click', this.documentClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.documentClick)
  }
}
</script>
