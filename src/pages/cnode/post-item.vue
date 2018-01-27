<template>
<!-- <div class="post-item">
  <div class="post-auhtor">
    <img src="../../assets/user.jpg" class="user-avator">
    <a class="user-name" href="#"><strong>Lanyue</strong></a>
    <span class="post-time">最后更新：2018-01-26T11:26:02.363Z</span>
  </div>
  <h2 class="post-title"><a href="/cnode/xxx">vue-element-admin-tpl 基于vue + element-ui 的后台管理系统模板</a></h2>
  <p class="post-abstract">基于vue + element-ui 开发的管理系统类网站模板。</p>
  <div class="post-ctrl">
    <span class="post-view"><i class="fa fa-eye"></i>&nbsp;123</span>
    <span class="post-comment"><i class="fa fa-comment"></i>&nbsp;123</span>
  </div>
</div> -->
<div class="post-item">
  <div class="post-auhtor">
    <img :src="post.author.avatar_url" class="user-avator">
    <a class="user-name" href="#"><strong>{{post.author.loginname}}</strong></a>
    <span class="post-time">最后更新：{{post.last_reply_at}}</span>
    <span class="post-tab">
      <el-tag type="success" v-if="post.top" size="small">置顶</el-tag>
      <el-tag size="small" v-if="post.tab">{{tabs[post.tab]}}</el-tag>
    </span>
    
  </div>
  <h2 class="post-title"><a :href="'https://cnodejs.org/topic/' + post.id" target="_blank">{{post.title}}</a></h2>
  <!-- <p class="post-abstract">基于vue + element-ui 开发的管理系统类网站模板。</p> -->
  <div class="post-ctrl">
    <span class="post-view"><i class="fa fa-eye"></i>&nbsp;{{post.visit_count}}</span>
    <span class="post-comment"><i class="fa fa-comment"></i>&nbsp;{{post.reply_count}}</span>
  </div>
</div>
</template>
<script>
export default {
  props: {
    post: Object,
    tabs: Object
  },
  data () {
    return {}
  }
}
</script>
<style>
  .post-item{
    background-color: #fff;
    border-radius: 4px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    margin-bottom: 15px;
  }
  .post-auhtor .user-avator{
    width: 32px;
    height: 32px;
    border-radius: 3px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .post-auhtor .user-name{
    color: inherit;
  }
  .post-item .post-time{
    margin-left: 5px;
    color: #777e84;
  }
  .post-item .post-tab{
    margin-left: 5px;
  }
  .post-item .post-title{
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0px;
  }

  .post-item .post-title a{
    color: inherit;
  }
  .post-item .post-title a:visited{
    color: #BCBCBC;
  }
  .post-item .post-title a:hover{
    color: #1762BF;
  }

  .post-item .post-abstract{
    /*color: #747681;*/
  }
  .post-ctrl {
    padding: 10px 0;
  }
  .post-ctrl .post-view,
  .post-ctrl .post-comment{
    border-radius: 3px;
    background-color: #E5F2FF;
    color: #0084FF;
    padding: 8px 15px;
    margin-right: 5px;
  }
</style>
