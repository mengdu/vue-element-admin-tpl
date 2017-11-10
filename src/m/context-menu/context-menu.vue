<style lang="less">
  .app-context-menu{
    background: #fff;
    box-shadow: 0 1px 10px rgba(0,0,0,.29);
    position: fixed;
    z-index: 10000;
    &.right .context-menu{
      & .context-menu-item.submenu .context-menu{
        left: auto;
        right: 100%;
        box-shadow: -3px 1px 5px rgba(0,0,0,.29);
      }
    }
  }
  .context-menu{
    display: block;
    padding: 9px 0;
    margin: 0;
    list-style: none;
    background: #fff;
    border-bottom: solid 1px #e4e4e4;
    &:last-child{
      border-bottom: none;
    }
    & .context-menu-item{
      padding: 5px 10px;
      min-width: 120px;
      color: #565656;
      cursor: pointer;
      line-height: 1.5;
      & .menu-icon{
        margin-right: 5px;
        min-width: 13px;
        display: inline-block;
      }
      & .menu-tips-text{
        color: #c5c5c5;
        &.right{
          float: right;
          margin-right: 10px;
        }
      }
      &:hover{
        background: #F6F6F6;
      }
      &.disabled{
        cursor: not-allowed;
        color: #A1A192;
        pointer-events: none;
      }
      &.submenu{
        position: relative;
        & .context-menu{
          box-shadow: 3px 1px 5px rgba(0,0,0,.29);
          padding: 0px 0;
          position: absolute;
          left: 100%;
          top: 0;
          display: none;
          cursor: default;
        }
        &::after{
          content: "";
          right: 5px;
          top: 10px;
          display: block;
          position: absolute;
          border-left: solid 4px #5F5F5F;
          border-top: solid 4px transparent;
          border-bottom: solid 4px transparent;
          border-right: none;
        }
        &:hover .context-menu{
          display: block;
        }
      }
    }
  }
</style>
<template>
<!-- <div class="app-context-menu">
  <ul class="context-menu">
    <li class="context-menu-item">
      <span class="menu-text">打开</span>
      <span class="menu-tips-text">Ctrl+O</span>
    </li>
    <li class="context-menu-item submenu">
      <span class="menu-text">另存为...</span>
      <span class="menu-tips-text right">Ctrl+S</span>
      <ul class="context-menu">
        <li class="context-menu-item"><span class="menu-text">png</span></li>
        <li class="context-menu-item"><span class="menu-text">jpg</span></li>
      </ul>
    </li>
    <li class="context-menu-item"><span class="menu-text">复制</span></li>
    <li class="context-menu-item"><span class="menu-text">剪切</span></li>
    <li class="context-menu-item disabled"><span class="menu-text">粘贴</span></li>
    <li class="context-menu-item"><span class="menu-text">全选</span></li>
    <li class="context-menu-item"><span class="menu-text">清空</span></li>
  </ul>
  <ul class="context-menu">
    <li class="context-menu-item submenu">
      <span class="menu-text">{{menus}}</span>
      <ul class="context-menu">
        <li class="context-menu-item"><span class="menu-text">png</span></li>
        <li class="context-menu-item"><span class="menu-text">jpg</span></li>
      </ul>
    </li>
    <li class="context-menu-item"><span class="menu-text">官方网站</span></li>
    <li class="context-menu-item"><span class="menu-text"><i class="fa fa-info-circle" aria-hidden="true"></i>关于我们</span></li>
  </ul>
</div> -->
<div class="app-context-menu"
  :class="{right: nearRight}"
  :style="{left: left, top: top}"
  v-show="isShow"
  >
  <ul class="context-menu" 
    v-for="menu in contextMenu.menus"
    >
    <template 
      v-for="item in menu.menus"
      >
      <li class="context-menu-item"
        :class="{disabled: item.disabled, submenu: typeof item.submenu === 'object'}"
        @click.stop="handleCommand(item.command)"
        >
        <i aria-hidden="true" class="menu-icon" 
          v-if="hasIcon"
          :class="[item.icon]"
          ></i>
        <span class="menu-text">{{item.text}}</span>
        <span class="menu-tips-text" 
          v-if="item.tipsText"
          :class="{right: item.tipsRight}"
          >{{item.tipsText}}</span>
        <ul class="context-menu"
          v-if="typeof item.submenu === 'object'"
          @click.stop=""
          v-for="submenus in item.submenu"
          >
          <li class="context-menu-item"
            v-for="subitem in submenus.menus"
            :class="{disabled: subitem.disabled}"
            @click.stop="handleCommand(subitem.command)"
            >
            <i aria-hidden="true" class="menu-icon" 
              v-if="hasIcon"
              :class="[subitem.icon]"
              ></i>
            <span class="menu-text">{{subitem.text}}</span>
            <span class="menu-tips-text" 
              v-if="subitem.tipsText"
              :class="{right: subitem.tipsRight}"
              >{{subitem.tipsText}}</span>
          </li>
        </ul>
      </li>
    </template>
  </ul>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'context-menu',
  data () {
    return {
      left: 0,
      top: 0,
      isShow: false,
      nearRight: false
    }
  },
  methods: {
    setPosition (left, top) {
      this.left = left
      this.top = top
      this.show()
    },
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    handleCommand (cmd) {
      // console.log(cmd)
      this.contextMenu.commands && this.contextMenu.commands[cmd] && this.contextMenu.commands[cmd]()
      this.hide()
    }
  },
  created () {
    // console.log(this)
  }
}
</script>
