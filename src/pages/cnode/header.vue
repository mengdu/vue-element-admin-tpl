<template>
  <div class="header">
    <div class="cnode-container">
      <m-navbar class="cnode-navbar">
        <m-navbar-brand>
          <a href="/cnode"><img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" class="nav-logo" alt=""></a>
        </m-navbar-brand>
        <m-nav>
          <m-nav-item>
            <input type="text" class="nav-search">
          </m-nav-item>
        </m-nav>
        <m-nav float="right">
          <m-nav-item><a href="/"><i class="fa fa-home" style="font-size: 20px;line-height: 30px"></i></a></m-nav-item>
          <m-nav-item active><a href="https://www.lanyueos.com" target="_blank">首页</a></m-nav-item>
          <m-nav-item><a href="https://blog.lanyueos.com" target="_blank">博客</a></m-nav-item>
          <m-nav-item><a href="https://www.lanyueos.com" target="_blank">关于</a></m-nav-item>
          <m-nav-item><a href="https://www.github.com/mengdu" target="_blank">Github</a></m-nav-item>
          <m-nav-item>
            <span>
              <el-badge :value="5" is-dot><i class="fa fa-bell"></i></el-badge>
            </span>
            
          </m-nav-item>
          <m-nav-item>
          <m-dropdown align="right">
            <a href="#" style="display: inline-block;">
              <img src="../../assets/user.jpg" alt="" style="vertical-align: middle; border-radius: 3px;">
              <span>Lanyue</span> 
              <span class="caret"></span>
            </a>
            <m-dropdown-panel>
              <m-dropdown-item><i class="fa fa-vcard-o"></i>&nbsp;用户信息</m-dropdown-item>
              <m-dropdown-item command="article"><i class="fa fa-pencil"></i>&nbsp;修改密码</m-dropdown-item>
              <!-- <m-dropdown-item @click.native.stop="test" disabled /><i class="fa fa-chain-broken"></i>&nbsp;注销</m-dropdown-item> -->
              <div class="test-line"></div>
              <m-dropdown-item path="/login">
                <i class="fa fa-toggle-left"></i>&nbsp;退出账号
              </m-dropdown-item>
            </m-dropdown-panel>
          </m-dropdown>
          </m-nav-item>
        </m-nav>
      </m-navbar>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style>
  .cnode-container .m-navbar.cnode-navbar{
    background-color: inherit;
  }
  .cnode-navbar a{
    color: #DEDEDE;
  }
  .cnode-navbar .nav-logo{
    height: 35px;
    margin-top: 5px;
  }
  .cnode-navbar .nav-search{
    background-color: #ffffff7d;
    border-radius: 25px;
    height: 30px;
    outline: none;
    border: none;
    padding: 5px 15px;
    box-sizing: border-box;
    
  }
</style>
