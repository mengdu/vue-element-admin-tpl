<template>
<div class="m-keyboard"
  :class="{
    'm-keyboard-capsLock': isCapsLock,
    'm-keyboard-symbol': isSymbol,
  }"
  :style="{
    width: width + 'px',
    height: height + 'px'
  }"
  >
  <div class="m-keyboard-row"
    v-for="row in keys"
    >
    <div class="m-kb-item" 
      v-for="key in row"
      v-if="!key.hide"
      >
      <button class="m-key" 
        v-if="key.name"
        @click.stop="command(key)"
        :key="key.name"
        :data-key="key.name"
        :disabled="disabledKeys.indexOf(key.name) > -1"
        >
        <template v-if="isSymbol">
          <span class="m-key-up" v-if="key.symbol">{{key.symbol}}</span>
          <span class="m-key-down" v-else>{{isCapsLock ? key.upper : key.default}}</span>
        </template>
        <template v-else>
          <!-- <span class="m-key-up">{{key.symbol}}</span> -->
          <span class="m-key-down">{{isCapsLock ? (key.upper || key.default) : key.default}}</span>
        </template>
      </button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'MKeyboard',
  props: {
    width: [String, Number],
    height: [String, Number],
    capsLock: {
      type: Boolean,
      default: false
    },
    symbol: {
      type: Boolean,
      default: false
    },
    disabledKeys: {
      type: Array,
      default () {
        return []
      }
    },
    lang: String,
    langHide: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isCapsLock: this.capsLock,
      isSymbol: this.symbol,
      langType: this.lang || 'en',
      keys: [
        [
          {name: 'q', default: 'q', upper: 'Q', symbol: '1'},
          {name: 'w', default: 'w', upper: 'W', symbol: '2'},
          {name: 'e', default: 'e', upper: 'E', symbol: '3'},
          {name: 'r', default: 'r', upper: 'R', symbol: '4'},
          {name: 't', default: 't', upper: 'T', symbol: '5'},
          {name: 'y', default: 'y', upper: 'Y', symbol: '6'},
          {name: 'u', default: 'u', upper: 'U', symbol: '7'},
          {name: 'i', default: 'i', upper: 'I', symbol: '8'},
          {name: 'o', default: 'o', upper: 'O', symbol: '9'},
          {name: 'p', default: 'p', upper: 'P', symbol: '0'}
        ],
        [
          {name: 'a', default: 'a', upper: 'A', symbol: '~'},
          {name: 's', default: 's', upper: 'S', symbol: '!'},
          {name: 'd', default: 'd', upper: 'D', symbol: '@'},
          {name: 'f', default: 'f', upper: 'F', symbol: '#'},
          {name: 'g', default: 'g', upper: 'G', symbol: '%'},
          {name: 'h', default: 'h', upper: 'H', symbol: '`'},
          {name: 'j', default: 'j', upper: 'J', symbol: '&'},
          {name: 'k', default: 'k', upper: 'K', symbol: '*'},
          {name: 'l', default: 'l', upper: 'L', symbol: '?'},
          {name: '=', default: '=', upper: '=', symbol: '+'}
        ],
        [
          {name: 'shift', default: 'shift', upper: 'Shift'},
          {name: 'z', default: 'z', upper: 'Z', symbol: '('},
          {name: 'x', default: 'x', upper: 'X', symbol: ')'},
          {name: 'c', default: 'c', upper: 'C', symbol: '-'},
          {name: 'v', default: 'v', upper: 'V', symbol: '_'},
          {name: 'b', default: 'b', upper: 'B', symbol: ':'},
          {name: 'n', default: 'n', upper: 'N', symbol: ';'},
          {name: 'm', default: 'm', upper: 'M', symbol: '/'},
          {name: 'back', default: 'back', upper: 'Back'}
        ],
        [
          {name: 'symbol', default: '符号', upper: '符号'},
          {name: ',', default: ',', upper: ','},
          {name: 'space', default: 'space', upper: 'Space'},
          {name: '.', default: '.', upper: '.'},
          {name: 'lang', default: this.lang === 'ch' ? '中' : '英', hide: this.langHide},
          {name: 'enter', default: 'enter', upper: 'Enter'}
        ]
      ]
    }
  },
  methods: {
    command (key) {
      // console.log('key:', key)
      switch (key.name) {
        case 'shift':
          this.$emit('shift')
          this.isCapsLock = !this.isCapsLock
          this.isSymbol = false
          break
        case 'symbol':
          this.$emit('symbol')
          this.isSymbol = !this.isSymbol
          this.isCapsLock = false
          break
        case 'lang':
          key.default = key.default === '中' ? '英' : '中'
          this.langType = key.default === '中' ? 'zh' : 'en'
          this.isCapsLock = false
          this.isSymbol = false
          this.$emit('lang', this.langType, this)
          break
        case 'enter':
          this.$emit('enter')
          break
        case 'back':
          this.$emit('back')
          break
        default:
          var ch = ''
          if (key.name === 'space') {
            ch = ' '
          } else {
            ch = this.isSymbol ? key.symbol : (this.isCapsLock ? key.upper : key.default)
          }
          // console.log('this', this)
          this.$emit('key', ch, this)
      }
    }
  },
  created () {
    console.log(this.langType, this.lang)
  }
}
</script>
<style>
  .m-keyboard{
    min-width: 480px;
    min-height: 200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 1 auto;
  }
  .m-keyboard .m-keyboard-row{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .m-keyboard .m-keyboard-row:before,
  .m-keyboard .m-keyboard-row:after{
    content: "";
    display: table;
    clear: both;
  }
  .m-keyboard .m-kb-item{
    /*width: 48px;*/
    width: 100%;
    height: 100%;
    padding: 2px;
    /*flex-grow: 1;*/
    flex: 1 1 auto;
    user-select: none;
  }
  .m-keyboard .m-key{
    display: block;
    width: 100%;
    height: 100%;
    font-size: 20px;
    border-radius: 3px;
    background: none;
    outline: none;
    border: solid 1px #bfbfc1;
    color: #282C34;
    cursor: pointer;
  }
  .m-keyboard .m-key:hover{
    border: solid 1px #0AADF7;
  }
  .m-keyboard.m-keyboard-capsLock .m-key[data-key=shift],
  .m-keyboard.m-keyboard-symbol .m-key[data-key=symbol],
  .m-keyboard .m-key:active{
    color: #fff;
    border: solid 1px #0AADF7;
    background-color: #0AADF7;
  }
  .m-keyboard .m-key:disabled{
    color: #a8aaaf;
    border: solid 1px #E5E5E5;
    cursor: not-allowed;
    background: none;
  }
  .m-keyboard .m-key .m-key-up,
  .m-keyboard .m-key .m-key-down{
    display: block;
  }
</style>
