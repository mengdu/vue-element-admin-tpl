<template>
<div class="cnode-page" ref="cnode" id="cnode">
<meta name="renderer" content="webkit|ie-stand|ie-comp">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<cnode-header class="cnode-header"></cnode-header>

<div class="cnode-container">
<m-box style="margin-top: 15px">
  <el-radio-group v-model="currentTab">
    <el-radio-button
      v-for="tab in tabs"
      :key="tab.tab"
      :label="tab.tab"
      >{{tab.label}}</el-radio-button>
  </el-radio-group>
</m-box>

<post-item class="animated fadeInUp"
  v-for="post in postList"
  :key="post.id"
  :post="post"
  :tabs='mapTabs'
  ></post-item>


<div style="margin-top: 100px;"></div>

<!-- <m-box>
  <el-pagination
    background
    layout="sizes, prev, pager, next"
    :page-size="pageSize"
    :current-page="currentPage"
    :page-sizes="[5, 10, 20, 30, 40]"
    :total="2000"
    @size-change="handleSizeChange"
    @current-change="handlePageChange"
    >
  </el-pagination>
</m-box> -->


</div>

<div class="footer" style="margin-top: 100px; height: 100px; background-color: #fff">
  
</div>

<m-back-top></m-back-top>
</div>
</template>
<script>
import CnodeHeader from './header'
import PostItem from './post-item'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    CnodeHeader,
    PostItem
  },
  data () {
    return {
      tabs: [
        {label: '全部', tab: ''},
        {label: '问答', tab: 'ask'},
        {label: '分享', tab: 'share'},
        {label: '招聘', tab: 'job'},
        {label: '精华', tab: 'good'}
      ],
      currentTab: '',
      currentPage: 1,
      pageSize: 10,
      cnode: null,
      isLoad: false
    }
  },
  computed: {
    ...mapState({
      postList: ({cnode}) => cnode.postList,
      isLoadPostList: ({cnode}) => cnode.isLoadPostList
    }),
    mapTabs () {
      var m = {}
      this.tabs.forEach(e => {
        if (e.tab) {
          m[e.tab] = e.label
        }
      })
      return m
    }
  },
  watch: {
    currentTab (val) {
      if (this.currentPage > 1) {
        this.currentPage = 1
      } else {
        this.handleSearch()
      }
    }
  },
  methods: {
    ...mapActions(['getPostList', 'nextPost']),
    handleSizeChange (size) {
      this.pageSize = size
      this.handleSearch()
    },
    handlePageChange (page) {
      this.currentPage = page
      this.handleSearch()
    },
    handleSearch () {
      this.getPostList({
        page: this.currentPage,
        limit: this.pageSize,
        tab: this.currentTab,
        mdrender: false
      })
      setTimeout(() => {
        document.documentElement.scrollTop = document.body.scrollTop = 0
      })
    },
    listenScroll () {
      window.addEventListener('scroll', e => {
        // console.log(e.target, e.target.offsetTop)
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        var scrollViewHeight = document.documentElement.clientHeight

        if ((scrollHeight - scrollTop - scrollViewHeight) < 300) {
          // console.log('滚动到底部')
          if (!this.isLoad) {
            this.isLoad = true

            this.currentPage += 1
            this.nextPost({
              page: this.currentPage,
              tab: this.currentTab,
              mdrender: false,
              limit: this.pageSize
            }).then(res => {
              this.isLoad = false
            })
          }
        }
      })
    }
  },
  created () {
    this.handleSearch()
    this.listenScroll()
  },
  mounted () {
    window.cnode = this.$refs.cnode
  }
}
</script>
<style>
  .cnode-page{
    background-color: #F6F6F6;
    /*position: absolute;*/
    width: 100%;
    padding-top: 50px;
  }
  .cnode-header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
  }
  .cnode-page .cnode-container{
    max-width: 960px;
    margin: 0 auto;
  }
  .cnode-page .header{
    height: 50px;
    background-color: #34363E;
    color: #fff;
  }
</style>
