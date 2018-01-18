<template>

<div class="m-number-keyboard" 
  :style="{
    width: size + 'px',
    height: size + 'px'
  }"
  >
  <div class="m-nkb-item" 
    v-for="key in keys"
    :style="[{
      width: (key.val === 0 ? size/2 : size/4) + 'px',
      height: (key.val === 'enter' ? size/2 : size/4) + 'px'
    }]"
    :class="{'m-key-enter': key.val === 'enter'}"
    >
    <button class="m-key" 
      :data-val="key.val"
      :data-key="key.name"
      @click="handleClick(key)"
      :disabled="disabledKeys.indexOf(key.name) > -1"
      >
      {{key.name}}
    </button>
  </div>
</div>

</template>
<script type="text/javascript">
export default {
  name: 'MNumberKeyboard',
  props: {
    size: {
      type: Number,
      default: 320
    },
    disabledKeys: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      keys: [
        {name: '1', val: 1},
        {name: '2', val: 2},
        {name: '3', val: 3},
        {name: 'Back', val: 'back'},
        {name: '4', val: 4},
        {name: '5', val: 5},
        {name: '6', val: 6},
        {name: 'Space', val: 'space'},
        {name: '7', val: 7},
        {name: '8', val: 8},
        {name: '9', val: 9},
        {name: 'Enter', val: 'enter'},
        {name: '0', val: 0},
        {name: '.', val: '.'}
      ]
    }
  },
  methods: {
    handleClick (key) {
      switch (key.name) {
        case 'Back':
          this.$emit('back')
          break
        case 'Space':
          this.$emit('space')
          break
        case 'Enter':
          this.$emit('enter')
          break
        default:
          this.$emit('key', key.val)
      }
    }
  }
}
</script>
<style>
  .m-number-keyboard{

  }
  .m-number-keyboard .m-nkb-item{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    float: left;
    padding: 5px;
    user-select: none;
  }
  .m-number-keyboard .m-nkb-item:last-child,
  .m-number-keyboard .m-nkb-item:nth-last-child(2){
    margin-top: -25%;
  }
  .m-number-keyboard .m-nkb-item:last-child{
    float: right;
    margin-right: 25%;
  }
  .m-number-keyboard .m-nkb-item .m-key{
    display: block;
    width: 100%;
    height: 100%;
    font-size: 25px;
    border-radius: 3px;
    background: none;
    outline: none;
    border: solid 1px #bfbfc1;
    color: #282C34;
    cursor: pointer;
  }
  .m-number-keyboard .m-nkb-item.m-key-enter .m-key{
    color: #fff;
    background: #2E9BE3;
    border: solid 1px #2E9BE3;
  }
  .m-number-keyboard .m-nkb-item .m-key:active{
    color: #008BE5;
    background: #FAFFFF;
    border: solid 1px #27A7E8;
  }
  .m-number-keyboard .m-nkb-item .m-key:disabled{
    color: #9f9fad;
    border-color: #e3e3e8;
    cursor: not-allowed;
    background: #efeff1;
  }
  .m-number-keyboard .m-nkb-item.m-key-enter .m-key:disabled{
    background: #898E8E;
  }
</style>
