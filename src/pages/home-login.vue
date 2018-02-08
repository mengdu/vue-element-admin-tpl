<template>
<div class="fullscreen">
  <div class="home-login-box">
    <div style="text-align: center">
      <img src="../assets/logo.png" alt="" class="logo">
    </div>
    <p class="text-tips">你好，欢迎登陆</p>
    <form action="" class="login-form">
      <div class="m-list-group">
        <div class="m-list-group-item">
          <input type="text" placeholder="Username" class="m-input" v-model="name">
        </div>
        <div class="m-list-group-item">
          <input type="password" placeholder="Password" class="m-input" v-model="pass">
        </div>
      </div>
      <button class="m-btn sub select-none" @click.prevent="handleLogin" v-loading="isLoging">登陆</button>
      <p class="text-tips">还没有账号？</p>
      <a href="/register" class="m-btn m-btn-text">注册</a>
      <p class="text-tips">第三方登陆</p>
      <div style="text-align: center">
        <a href="#">
          <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </div>
      
    </form>
  </div>
</div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      pass: '',
      isLoging: false
    }
  },
  methods: {
    handleLogin () {}
  }
}
</script>
<style type="text/css">
  .m-list-group{
    border-radius: 3px;
    padding: 0;
    margin: 0 0 20px;
  }
  .m-list-group .m-list-group-item{
    position: relative;
    display: block;
    padding: 6px 10px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #e7ecee;
  }
  .m-list-group .m-list-group-item:first-child{
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .fullscreen{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home-login-box{
    position: relative;
    width: 330px;
    margin: 0 auto;
    padding: 0px 15px;
  }
  .home-login-box .logo{
    max-width: 40%;
    margin-bottom: 30px;
  }
  .home-login-box .text-tips{
    text-align: center;
    color: #909DB7;
  }
  .home-login-box .m-input{
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  .home-login-box .m-btn{
    font-size: 18px;
    width: 100%;
    color: #fff;
    background-color: #36c1fa;
    display: inline-block;
    padding: 10px 12px;
    margin-bottom: 5px;
    line-height: 1.42857143;
    text-align: center;
    cursor: pointer;
    outline: none;
    border-radius: 2px;
    border: 1px solid #36c1fa;
    box-sizing: border-box;
    text-decoration: none;
  }
  .home-login-box .m-btn.m-btn-text{
    background: #fff;
    color: #36C1FA;
  }
  .home-login-box .m-btn:hover{
    background-color: #2DB7F5;
  }
  .home-login-box .m-btn.m-btn-text:hover{
    background-color: #F4F5F5;
  }
  .home-login-box .m-btn:active{
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    .home-login-box{
      width: auto;
    }
  }
</style>
