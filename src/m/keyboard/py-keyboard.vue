<template>
<div class="m-py-keyboard">
  <div class="m-keyboard-output-word">{{output}}</div>
  <template v-if="langType === 'zh'">
  <div class="m-keyboard-candidate-pinyin"><span v-if="mathResult && mathResult.pinyin" class="m-input-pinyin">{{mathResult.pinyin}}</span></div>
  <div class="m-keyboard-candidate-word">
    <span class="m-candidate-word"
      v-for="(word, index) in candidates"
      :key="index"
      @click="selectWord(index)"
      ><span class="m-candidate-word-index">{{index + 1}}.</span>{{word}}</span>
    <div class="m-candidate-word-page">
      <button class="up"
        :disabled="pagination.currentPage <= 1"
        @click="handlePageUp"
        >▲</button>
      <button class="down"
        @click="handlePageDown"
        :disabled="pagination.pageCount <= pagination.currentPage"
        >▼</button>
    </div>
  </div>
  </template>
  <keyboard ref="keyboard"
    v-bind="$attrs"
    v-on="$listeners"
    @key="handleKey"
    @back="handleBack"
    @enter="handleEnter"
    @lang="handleSwitchLang"
    :lang="this.langType"
    :langHide="false"
    ></keyboard>
</div>
</template>
<script>
import keyboard from './keyboard'
import dict from './dict-helper'
import Pagination from './pagination'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    candidateLen: {
      type: Number,
      default: 9
    },
    sync: Boolean,
    listener: {
      type: Boolean,
      default: true
    },
    lang: String
  },
  data () {
    return {
      keyboard: null,
      input: '',
      output: '',
      mathResult: null,
      pageSize: this.candidateLen,
      currentPage: 1,
      langType: this.lang || 'zh'
    }
  },
  watch: {
    value (val) {
      if (this.output !== val) {
        // console.log('value')
        this.output = val
      }
    },
    output (val) {
      if (this.sync && this.value !== val) {
        // console.log('output')
        this.$emit('input', val)
      }
    }
  },
  components: {keyboard},
  computed: {
    pagination () {
      if (!this.mathResult) {
        return new Pagination(0, this.pageSize)
      }
      this.currentPage = 1
      return new Pagination(this.mathResult.result.length, this.pageSize)
    },
    candidates () {
      if (!this.mathResult) return []
      var page = this.pagination.slice(this.mathResult.result || [], this.currentPage)
      // console.log(page)
      return page
    }
  },
  methods: {
    handlePageUp () {
      this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1
      console.log(this.currentPage)
    },
    handlePageDown () {
      this.currentPage = this.currentPage <= this.pagination.pageCount ? this.currentPage + 1 : this.pagination.pageCount
    },
    handleSwitchLang (lang) {
      this.langType = lang
    },
    // 输入
    handleKey (key) {
      // console.log(key, conf.langType)
      // 中文输入
      if (this.keyboard.langType === 'zh') {
        // 输入空格
        if (key === ' ') {
          if (!this.input) {
            this.output += key
          } else {
            this.selectWord(0)
          }
        } else {
          this.input += key
          this.pinyinToHanzi(key)
        }
      } else {
        this.output += key
      }
    },
    handleBack () {
      if (this.input.length > 0) {
        this.input = this.input.substr(0, this.input.length - 1)
        this.pinyinToHanzi()
      } else {
        if (this.output.length > 0) {
          this.output = this.output.substr(0, this.output.length - 1)
        }
      }
    },
    handleEnter () {
      this.$emit('input', this.output)
    },
    // 拼音转汉字
    pinyinToHanzi () {
      var result = dict.getHanzi(this.input)
      this.mathResult = result
    },
    // 选择候选词
    selectWord (index) {
      if (this.candidates.length === 0) return false
      this.output += this.candidates[index]
      this.input = ''
      this.pinyinToHanzi()
    },
    handleKeydown (e) {
      e = e || window.event
      var keyCode = e.keyCode || e.which || e.charCode
      var ch = String.fromCharCode(keyCode).toLocaleLowerCase()
      if (keyCode >= 65 && keyCode <= 90) {
        if (this.keyboard.langType === 'zh') {
          this.input += ch
          this.pinyinToHanzi()
        } else {
          this.output += ch
        }
      }
      switch (keyCode) {
        // 空格
        case 32:
          // this.selectWord(0)
          this.handleKey(' ')
          e.preventDefault()
          return false
        case 8:
          this.handleBack()
          break
        // 1
        case 187:
          console.log()
          this.handlePageDown()
          break
        case 189:
          this.handlePageUp()
          break
      }
      // 输入数字
      if (keyCode >= 49 && keyCode <= 57) {
        if (!this.input) {
          this.output += ch
        } else {
          console.log(ch)
          this.selectWord(ch - 1)
        }
      }
      // console.log(keyCode)
    }
  },
  mounted () {
    this.output = this.value
    this.keyboard = this.$refs['keyboard']
    // window.pykeyboard = this.keyboard
    if (this.listener) {
      document.addEventListener('keydown', this.handleKeydown)
    }
  },
  beforeDestroy () {
    if (this.listener) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
  }
}
</script>
<style>
  .m-py-keyboard{
    /*width: inherit;
    height: inherit;*/
  }
  .m-input-pinyin{
    padding: 1px 8px;
    font-size: 13px;
    margin-left: 5px;
    background: #E8EAF0;
  }
  .m-keyboard-output-word{
    font-size: 25px;
    padding: 5px;
    min-height: 45px;
    word-wrap: break-word;
    max-height: 100px;
    overflow: auto;
  }
  .m-keyboard-candidate-word{
    min-height: 55px;
    box-sizing: border-box;
    padding: 5px;
    user-select: none;
  }
  .m-keyboard-candidate-pinyin{
    height: 20px;
  }
  .m-keyboard-candidate-word .m-candidate-word{
    font-size: 22px;
    padding: 5px 15px;
    display: inline-block;
    border-radius: 3px;
  }
  .m-keyboard-candidate-word .m-candidate-word:hover{
    background: #E8EAF2;
  }
  .m-candidate-word-index{
    opacity: 0.7;
    font-size: 16px;
  }
  .m-candidate-word-page{
    float: right;
  }
  .m-candidate-word-page .up,
  .m-candidate-word-page .down{
    display: block;
    padding: 10px 20px;
    float: left;
    height: 40px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    outline: none;
    background: none
  }
  .m-candidate-word-page .up:hover,
  .m-candidate-word-page .down:hover{
    background: #E8EAF2;
  }
  .m-candidate-word-page .up:disabled,
  .m-candidate-word-page .down:disabled{
    opacity: 0.5;
  }
  
  .m-candidate-word-page .up{

  }
  .m-candidate-word-page .down{}
</style>
